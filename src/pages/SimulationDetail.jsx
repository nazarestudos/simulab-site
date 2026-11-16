// ─────────────────────────────────────────────────────────────
// pages/SimulationDetail.jsx — /acervo/:id/simulacao
//
// A página é um instrumento de bancada: o palco (canvas) em cima, uma
// barra de transporte logo abaixo (pausar, avançar quadro, reiniciar,
// velocidade, salvar imagem, tela cheia) e os controles ao vivo.
//
// Velocidade e avanço quadro a quadro são recursos do motor
// (SimCanvas), então valem para todas as simulações sem mexer nelas.
// ─────────────────────────────────────────────────────────────
import { useParams, Link, useSearchParams } from 'react-router-dom'
import { useState, useCallback, useEffect, useMemo, useRef, Suspense } from 'react'
import { Play, Pause, StepForward, RotateCcw, Maximize, Minimize, Download, Link2, Check } from 'lucide-react'
import { getArtigoById, TOPIC_COLORS } from '../data'
import { getSimulationCanvas } from '../simulations/registry'
import { SimClock } from '../simulations/engine'
import { CategoryBadge, LevelBadge } from '../components/CategoryBadge'
import { ArticleCardCompact } from '../components/ArticleCard'

const SPEEDS = [0.25, 0.5, 1, 2]

/** Casas decimais implícitas no `step` de um controle. */
function decimalsOf(step) {
  if (!step || step >= 1) return 0
  const s = String(step)
  return s.includes('.') ? s.split('.')[1].length : 0
}

/** Mantém o valor dentro da faixa do controle e no passo dele. */
function snap(ctrl, v) {
  if (ctrl.type === 'toggle') return v === (ctrl.on ?? 1) ? (ctrl.on ?? 1) : (ctrl.off ?? 0)
  if (ctrl.type === 'select') return ctrl.options.some(o => o.value === v) ? v : ctrl.default
  const step = ctrl.step || 1
  const n = Math.round((Math.min(ctrl.max, Math.max(ctrl.min, v)) - ctrl.min) / step) * step + ctrl.min
  return Number(n.toFixed(decimalsOf(step)))
}

/** Valores iniciais: os da URL (link compartilhado) ou os padrões. */
function initialValues(controls, search) {
  return Object.fromEntries(controls.map(c => {
    const raw = search.get(c.id)
    const n = raw === null ? NaN : Number(raw)
    return [c.id, Number.isFinite(n) ? snap(c, n) : c.default]
  }))
}

// Um controle: slider, escolha entre opções ou liga/desliga.
function ControlCell({ ctrl, value, onChange }) {
  const cell = 'bg-sl-bg p-5 sm:p-6 sm:[&:last-child:nth-child(odd)]:col-span-2'

  if (ctrl.type === 'toggle') {
    const on = value === (ctrl.on ?? 1)
    return (
      <div className={`${cell} flex items-center`}>
        <button
          type="button" role="switch" aria-checked={on}
          className="sim-switch"
          onClick={() => onChange(on ? (ctrl.off ?? 0) : (ctrl.on ?? 1))}
        >
          <span className="text-sl-text text-[1rem] font-500 leading-tight">{ctrl.label}</span>
          <span className="box" aria-hidden="true" />
        </button>
      </div>
    )
  }

  if (ctrl.type === 'select') {
    return (
      <div className={cell}>
        <p id={`lbl-${ctrl.id}`} className="text-sl-dim text-[0.875rem] font-400 leading-tight mb-3">{ctrl.label}</p>
        <div role="radiogroup" aria-labelledby={`lbl-${ctrl.id}`} className="flex flex-wrap gap-y-px">
          {ctrl.options.map(o => (
            <button
              key={o.value} type="button" role="radio" aria-checked={value === o.value}
              className="sim-choice" onClick={() => onChange(o.value)}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const pct = ((value - ctrl.min) / (ctrl.max - ctrl.min)) * 100
  return (
    <div className={cell}>
      <div className="flex items-end justify-between gap-4 mb-4">
        <label htmlFor={`ctrl-${ctrl.id}`} className="text-sl-dim text-[0.875rem] font-400 leading-tight">
          {ctrl.label}
        </label>
        <span className="font-display font-700 text-sl-text text-[1.5rem] leading-[1.1] tabular-nums whitespace-nowrap">
          {Number(value).toFixed(decimalsOf(ctrl.step)).replace('.', ',')}
          {ctrl.unit && <span className="font-body font-400 text-sl-dim text-[0.875rem]"> {ctrl.unit}</span>}
        </span>
      </div>
      <input
        id={`ctrl-${ctrl.id}`}
        type="range"
        min={ctrl.min} max={ctrl.max} step={ctrl.step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="sim-slider"
        style={{ '--fill': `${pct}%` }}
      />
      <div className="flex justify-between text-sl-muted text-[0.75rem] mt-1 tabular-nums">
        <span>{ctrl.min}</span><span>{ctrl.max}</span>
      </div>
    </div>
  )
}

/** Tempo simulado, por extenso curto: "12,4 s" ou "2 min 05 s". */
function fmtClock(t) {
  if (t < 60) return `${t.toFixed(1).replace('.', ',')} s`
  const m = Math.floor(t / 60)
  return `${m} min ${String(Math.floor(t - m * 60)).padStart(2, '0')} s`
}

/**
 * Uma leitura vinda do canvas ("1.96 m/s²") vira número + unidade, com
 * vírgula decimal — o mesmo formato dos controles logo abaixo.
 */
function splitReading(v) {
  const s = String(v).replace(/(\d)\.(\d)/g, '$1,$2')
  // unidade = o que vem depois do número e não tem dígitos ("m/s²", "N·m");
  // "−1,00 e 3,00" ou "0,58 vs 0,30" ficam inteiros.
  const m = s.match(/^([+\-−]?[\d,]+(?:e[+\-]?\d+)?)\s+(\D+)$/)
  return m ? { num: m[1], unit: m[2] } : { num: s, unit: '' }
}

function Key({ children }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[1.6rem] h-6 px-1.5
                    border border-sl-border2 text-sl-text text-[0.75rem] font-body font-500">
      {children}
    </kbd>
  )
}

export default function SimulationDetail() {
  const { id }  = useParams()
  const [search] = useSearchParams()
  const article = getArtigoById(id)

  const sim = typeof article?.simulation === 'string'
    ? { component: article.simulation, subtitle: article.title, about: '', controls: [] }
    : article?.simulation

  const Canvas   = sim ? getSimulationCanvas(sim.component) : null
  const controls = sim?.controls ?? []

  const presets  = sim?.presets ?? []

  const [values, setValues] = useState(() => initialValues(controls, search))
  const [copied, setCopied] = useState(false)
  const [running,  setRunning]  = useState(true)
  const [resetKey, setResetKey] = useState(0)
  const [speed,    setSpeed]    = useState(1)
  const [stepKey,  setStepKey]  = useState(0)
  const [isFs,     setIsFs]     = useState(false)
  const [panels,   setPanels]   = useState([])   // leituras vindas do motor
  const stageRef = useRef(null)
  // A simulação pode devolver valores (ex.: arrastar um peso move o slider).
  const onParams = useCallback(patchIn => {
    setValues(prev => {
      let next = prev
      for (const c of (sim?.controls ?? [])) {
        if (!(c.id in patchIn)) continue
        const v = snap(c, patchIn[c.id])
        if (v !== next[c.id]) next = { ...next, [c.id]: v }
      }
      return next
    })
  }, [sim])
  // O relógio escreve direto no DOM: 8 atualizações por segundo não
  // precisam redesenhar a página inteira.
  const clockRef = useRef(null)
  const onTick = useCallback(t => {
    if (clockRef.current) clockRef.current.textContent = fmtClock(t)
  }, [])
  const clock = useMemo(
    () => ({ speed, stepKey, onReadout: setPanels, onParams, onTick }),
    [speed, stepKey, onParams, onTick],
  )

  // Link que reabre a simulação com estes valores. Vai para a área de
  // transferência e, de qualquer forma, para a barra de endereço — se o
  // navegador negar a cópia, o link ainda está à mão.
  const copyLink = useCallback(() => {
    const qs = new URLSearchParams(Object.entries(values).map(([k, v]) => [k, String(v)])).toString()
    const url = `${location.origin}${location.pathname}#/acervo/${id}/simulacao?${qs}`
    history.replaceState(null, '', url)
    const flash = state => { setCopied(state); setTimeout(() => setCopied(false), 2500) }
    const write = navigator.clipboard?.writeText(url)
    if (write) write.then(() => flash('copied'), () => flash('bar'))
    else flash('bar')
  }, [values, id])

  const handleReset = useCallback(() => {
    setValues(Object.fromEntries((sim?.controls ?? []).map(c => [c.id, c.default])))
    setResetKey(k => k + 1)
    setRunning(true)
  }, [sim])

  const stepOnce = useCallback(() => {
    setRunning(false)
    setStepKey(k => k + 1)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen?.()
    else stageRef.current?.requestFullscreen?.()
  }, [])

  const saveImage = useCallback(() => {
    const canvas = stageRef.current?.querySelector('canvas')
    if (!canvas) return
    canvas.toBlob(blob => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `simulab-${id}.png`
      a.click()
      URL.revokeObjectURL(url)
    }, 'image/png')
  }, [id])

  useEffect(() => {
    const onFs = () => setIsFs(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  // Atalhos. Com o foco num slider, as teclas ficam com o slider.
  useEffect(() => {
    function onKey(e) {
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.code === 'Space')            { e.preventDefault(); setRunning(r => !r) }
      else if (e.key === 'ArrowRight')   { e.preventDefault(); stepOnce() }
      else if (e.key === 'r' || e.key === 'R') { e.preventDefault(); handleReset() }
      else if (e.key === 'f' || e.key === 'F') { e.preventDefault(); toggleFullscreen() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleReset, stepOnce, toggleFullscreen])

  if (!article || !sim) {
    return (
      <div className="container-xl pt-40 pb-section">
        <h1 className="font-display font-700 text-display-lg text-sl-text mb-4">
          Esta simulação não existe
        </h1>
        <p className="text-sl-dim text-[1rem] mb-8 max-w-md">
          O endereço pode estar errado ou a simulação mudou de lugar.
        </p>
        <Link to="/acervo?sim=1" className="inline-block px-7 py-4 font-700 bg-white text-black border-2 border-white hover:bg-black hover:text-white transition-colors duration-200">
          Ver todas as simulações
        </Link>
      </div>
    )
  }

  const relatedSims = (article.relatedIds ?? [])
    .map(rid => getArtigoById(rid))
    .filter(a => a?.simulation)
    .slice(0, 3)

  return (
    <div className="container-xl pt-28 pb-section">

      <nav aria-label="Você está em" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.875rem] text-sl-dim mb-8">
        <Link to="/acervo" className="hover:text-sl-text underline underline-offset-4 decoration-sl-border2">Acervo</Link>
        <span aria-hidden="true">/</span>
        <Link to={`/acervo/${article.id}`} className="hover:text-sl-text underline underline-offset-4 decoration-sl-border2 truncate max-w-[16rem]">
          {article.title}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-sl-text">Simulação</span>
      </nav>

      <div className="flex items-center gap-4 mb-5">
        <CategoryBadge category={article.topic} />
        <LevelBadge level={article.level} />
      </div>

      <h1 className="font-display font-700 text-display-lg text-sl-text mb-5 max-w-[22ch]">
        {sim.subtitle}
      </h1>
      <p className="text-sl-dim text-[1rem] leading-relaxed mb-10 max-w-[62ch]">
        {article.summary}
      </p>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">

        <div className="min-w-0 flex flex-col gap-8">

          {/* ── Palco + barra de transporte ── */}
          <div ref={stageRef} className="sim-stage border border-sl-border2">
            <div className="flex items-center justify-between gap-4 h-10 px-4 sm:px-5 border-b border-sl-border2 text-[0.875rem]">
              <span className="flex items-center gap-2.5 text-sl-text font-500" aria-live="polite">
                <span
                  className={`sim-led ${running ? 'is-on' : ''}`}
                  style={{ '--led': TOPIC_COLORS[article.topic] }}
                  aria-hidden="true"
                />
                {running ? 'Rodando' : 'Em pausa'}
                {speed !== 1 && (
                  <span className="text-sl-dim font-400 tabular-nums">a {String(speed).replace('.', ',')}×</span>
                )}
              </span>
              <span className="text-sl-dim">
                <span className="hidden sm:inline">Tempo simulado </span>
                <span ref={clockRef} className="inline-block min-w-[4.5ch] text-right text-sl-text font-700 tabular-nums">0,0 s</span>
              </span>
            </div>

            <div className="sim-viewport h-[clamp(340px,62vh,680px)] relative">
              <div key={resetKey} className="stage-fx" aria-hidden="true" />
              {Canvas ? (
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-sl-dim text-[1rem] animate-pulse">Carregando a simulação…</p>
                  </div>
                }>
                  <SimClock.Provider value={clock}>
                    <Canvas params={values} running={running} resetKey={resetKey} />
                  </SimClock.Provider>
                </Suspense>
              ) : (
                <div className="w-full h-full flex items-center justify-center px-6 text-center">
                  <p className="text-sl-dim text-[1rem]">
                    Esta simulação ainda não foi publicada. O artigo já está disponível.
                  </p>
                </div>
              )}
            </div>

            {/* Leituras ao vivo — saem do canvas e viram texto de verdade */}
            {panels.map((panel, i) => (
              <div key={i} className="border-t border-sl-border2" aria-live="off">
                {panel.title && (
                  <p className="px-4 sm:px-[1.1rem] py-2.5 border-b border-sl-border text-sl-text text-[0.875rem] font-500">
                    {panel.title}
                  </p>
                )}
                <dl className="sim-readouts">
                  {panel.rows.map(row => {
                    const { num, unit } = splitReading(row.v)
                    return (
                      <div key={row.k}>
                        <dt className="flex items-center gap-2 text-sl-dim text-[0.8125rem] leading-snug mb-1">
                          {row.c?.startsWith('#') && (
                            <span className="w-2 h-2 shrink-0" style={{ background: row.c }} aria-hidden="true" />
                          )}
                          <span className="truncate">{row.k}</span>
                        </dt>
                        <dd className="font-display font-700 text-sl-text text-[1.25rem] leading-[1.15] tracking-[-0.01em] tabular-nums truncate">
                          {num}
                          {unit && <span className="font-body font-400 text-sl-dim text-[0.8125rem] tracking-normal"> {unit}</span>}
                        </dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            ))}

            <div className="flex flex-wrap border-t border-sl-border2" role="toolbar" aria-label="Controle da simulação">
              <button className="sim-tool" onClick={() => setRunning(r => !r)} title="Espaço">
                {running ? <Pause size={15} /> : <Play size={15} />}
                <span className="w-[5.2rem] text-left">{running ? 'Pausar' : 'Continuar'}</span>
              </button>
              <button className="sim-tool" onClick={stepOnce} title="Seta para a direita" aria-label="Avançar um quadro">
                <StepForward size={15} />
                <span className="hidden md:inline">Avançar quadro</span>
              </button>
              <button className="sim-tool" onClick={handleReset} title="R" aria-label="Reiniciar">
                <RotateCcw size={15} />
                <span className="hidden md:inline">Reiniciar</span>
              </button>

              <div className="flex items-center ml-auto border-l border-sl-border2" role="group" aria-label="Velocidade">
                <span className="hidden xl:inline px-3 text-sl-dim text-[0.875rem]">Velocidade</span>
                {SPEEDS.map(v => (
                  <button
                    key={v}
                    className="sim-tool tabular-nums !px-3"
                    aria-pressed={speed === v}
                    onClick={() => setSpeed(v)}
                    aria-label={`Velocidade ${v} vezes`}
                  >
                    {String(v).replace('.', ',')}×
                  </button>
                ))}
              </div>

              <button className="sim-tool" onClick={copyLink} title="Copiar um link que abre a simulação com estes valores" aria-label="Copiar link desta configuração">
                {copied ? <Check size={15} /> : <Link2 size={15} />}
                <span className={copied ? '' : 'hidden xl:inline'} aria-live="polite">
                  {copied === 'copied' ? 'Link copiado' : copied === 'bar' ? 'Link na barra de endereço' : 'Copiar link'}
                </span>
              </button>
              <button className="sim-tool" onClick={saveImage} title="Salvar o quadro atual como PNG" aria-label="Salvar imagem">
                <Download size={15} />
              </button>
              <button className="sim-tool !border-r-0" onClick={toggleFullscreen} title="F" aria-label={isFs ? 'Sair da tela cheia' : 'Tela cheia'}>
                {isFs ? <Minimize size={15} /> : <Maximize size={15} />}
              </button>
            </div>
          </div>

          {/* ── Situações prontas ── */}
          {presets.length > 0 && (
            <div>
              <p id="presets-label" className="text-sl-dim text-[0.875rem] mb-3">Situações prontas</p>
              <div role="group" aria-labelledby="presets-label" className="flex flex-wrap gap-y-px">
                {presets.map(pr => {
                  const active = Object.entries(pr.values).every(([k, v]) => values[k] === v)
                  return (
                    <button
                      key={pr.label} type="button" aria-pressed={active}
                      className="sim-choice !flex-none"
                      onClick={() => setValues(v => ({ ...v, ...pr.values }))}
                    >
                      {pr.label}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── Controles ao vivo ── */}
          {controls.length > 0 && (
            <section aria-label="Parâmetros" className="grid sm:grid-cols-2 gap-px bg-sl-border border border-sl-border">
              {controls.map(ctrl => (
                <ControlCell
                  key={ctrl.id}
                  ctrl={ctrl}
                  value={values[ctrl.id] ?? ctrl.default}
                  onChange={v => setValues(prev => ({ ...prev, [ctrl.id]: v }))}
                />
              ))}
            </section>
          )}

          <ul className="hidden md:flex flex-wrap gap-x-6 gap-y-2 text-sl-dim text-[0.875rem]">
            <li className="flex items-center gap-2"><Key>Espaço</Key> pausa</li>
            <li className="flex items-center gap-2"><Key>→</Key> avança um quadro</li>
            <li className="flex items-center gap-2"><Key>R</Key> reinicia</li>
            <li className="flex items-center gap-2"><Key>F</Key> tela cheia</li>
          </ul>
        </div>

        {/* ── Lateral ── */}
        <aside className="flex flex-col gap-10">
          <div>
            <h2 className="font-display font-700 text-[1.1rem] text-sl-text mb-4">O que você está vendo</h2>
            {sim.about && (
              <p className="text-sl-dim text-[1rem] leading-relaxed mb-6">{sim.about}</p>
            )}
            {article.concepts?.length > 0 && (
              <p className="text-sl-dim text-[0.875rem] leading-relaxed mb-6">
                <span className="text-sl-text font-500">Conceitos:</span>{' '}
                {article.concepts.join(', ')}.
              </p>
            )}
            <Link
              to={`/acervo/${article.id}`}
              className="block text-center px-5 py-3.5 font-700 text-[0.875rem] text-white
                         border-2 border-white/40 hover:border-white hover:bg-white hover:text-black
                         transition-colors duration-200"
            >
              Ler o artigo completo
            </Link>
          </div>

          {relatedSims.length > 0 && (
            <div>
              <h2 className="font-display font-700 text-[1.1rem] text-sl-text mb-2">Simulações relacionadas</h2>
              <div className="border-t border-sl-border">
                {relatedSims.map(rs => <ArticleCardCompact key={rs.id} article={rs} />)}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Decaimento radioativo e meia-vida
//
// Um núcleo instável não envelhece: a chance de ele decair no próximo
// instante é sempre a mesma, não importa há quanto tempo ele existe.
// Dessa única regra sai a lei exponencial:
//
//   N(t) = N₀ · e^(−λt) = N₀ · 2^(−t / T½)        λ = ln 2 / T½
//
// Aqui cada quadradinho é um núcleo, e a cada passo de tempo cada um
// "joga o dado" com probabilidade  p = 1 − e^(−λ·dt).  Ninguém sabe
// QUAL núcleo decai a seguir; o que é previsível é o conjunto — e por
// isso a curva medida treme em volta da teórica. O tremor típico é √N:
// com poucos núcleos o acaso aparece, com muitos a curva alisa.
//
// A atividade (decaimentos por segundo) é A = λ·N: cai junto com N.
// É o que se mede numa datação por carbono-14.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-quantica']
const HALVES_SHOWN = 6

const ISOTOPES = [
  { nome: 'Carbono-14',   half: 5730, unit: 'anos',            filha: 'nitrogênio-14', uso: 'datação de fósseis e tecidos' },
  { nome: 'Iodo-131',     half: 8.02, unit: 'dias',            filha: 'xenônio-131',   uso: 'tratamento da tireoide' },
  { nome: 'Tecnécio-99m', half: 6.01, unit: 'horas',           filha: 'tecnécio-99',   uso: 'exames de cintilografia' },
  { nome: 'Radônio-222',  half: 3.82, unit: 'dias',            filha: 'polônio-218',   uso: 'gás radioativo natural do solo' },
  { nome: 'Urânio-238',   half: 4.47, unit: 'bilhões de anos', filha: 'tório-234',     uso: 'datação de rochas' },
]

const fmt = v => (v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2))

function fresh(p) {
  const n0 = clamp(Math.round(p.nucleos ?? 400), 50, 1600)
  return {
    n0,
    iso: Math.round(p.isotopo ?? 0),
    decayed: new Float32Array(n0).fill(-1),   // −1 = intacto; senão, o instante em que decaiu
    alive: Array.from({ length: n0 }, (_, i) => i),
    tau: 0,          // tempo decorrido, em meias-vidas
    t: 0,            // tempo de tela, em segundos
    hist: [[0, n0]],
  }
}

export default function DecaimentoCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => fresh(p), [])

  const step = useCallback((s, dt, p) => {
    // trocar o isótopo ou a quantidade recomeça a amostra
    if (Math.round(p.nucleos ?? 400) !== s.n0 || Math.round(p.isotopo ?? 0) !== s.iso) {
      Object.assign(s, fresh(p))
      return
    }
    const Tscreen = p.ritmo ?? 5                // segundos de tela por meia-vida
    const prob = 1 - Math.exp(-(Math.LN2 / Tscreen) * dt)
    s.t += dt
    s.tau += dt / Tscreen

    // cada núcleo intacto joga o dado
    for (let i = s.alive.length - 1; i >= 0; i--) {
      if (Math.random() < prob) {
        s.decayed[s.alive[i]] = s.t
        s.alive[i] = s.alive[s.alive.length - 1]
        s.alive.pop()
      }
    }
    const last = s.hist[s.hist.length - 1]
    if (s.tau - last[0] > 0.02 && s.tau <= HALVES_SHOWN) s.hist.push([s.tau, s.alive.length])
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const iso = ISOTOPES[clamp(s.iso, 0, ISOTOPES.length - 1)]
    const logScale = (p.logScale ?? 0) > 0
    const N = s.alive.length
    const predicted = s.n0 * Math.pow(2, -s.tau)

    const compact = w < 700
    const stageW = compact ? w : w * 0.48

    // ── A amostra: um quadradinho por núcleo ──────────────────────
    const gx = 20, gy = 58
    const gw = stageW - 44, gh = h - gy - 54
    const cols = Math.ceil(Math.sqrt(s.n0 * (gw / gh)))
    const rows = Math.ceil(s.n0 / cols)
    const cell = Math.min(gw / cols, gh / rows)
    const sz = Math.max(2, cell * 0.72)

    for (let i = 0; i < s.n0; i++) {
      const x = gx + (i % cols) * cell
      const y = gy + Math.floor(i / cols) * cell
      const when = s.decayed[i]
      if (when < 0) {
        ctx.fillStyle = A
        ctx.fillRect(x, y, sz, sz)
      } else {
        // clarão no instante do decaimento, depois vira "cinza": o núcleo-filho
        const age = s.t - when
        if (age < 0.3) {
          ctx.fillStyle = hexA('#ffffff', 1 - age / 0.3)
          ctx.fillRect(x - 1, y - 1, sz + 2, sz + 2)
        }
        ctx.fillStyle = 'rgba(255,255,255,0.13)'
        ctx.fillRect(x, y, sz, sz)
      }
    }

    caption(ctx, `${iso.nome}: ${N} de ${s.n0} núcleos ainda intactos`, 20, 24, A)
    legend(ctx, 20, 44, [
      { label: iso.nome, color: A },
      { label: `${iso.filha} (já decaiu)`, color: 'rgba(255,255,255,0.3)' },
    ])
    text(ctx, 'ninguém sabe qual núcleo decai a seguir; só o conjunto é previsível',
      20, h - 16, { size: 8.5, color: C.muted })

    // ── Leituras ──────────────────────────────────────────────────
    const sigma = Math.sqrt(Math.max(predicted * (1 - predicted / s.n0), 0))
    readout(ctx, w - 14, 14, [
      { k: 'isótopo', v: iso.nome, c: A },
      { k: 'meia-vida T½', v: `${fmt(iso.half)} ${iso.unit}` },
      { k: 'tempo decorrido', v: `${fmt(s.tau * iso.half)} ${iso.unit}` },
      { k: 'em meias-vidas', v: s.tau.toFixed(2) },
      { k: 'núcleos intactos', v: `${N}`, c: A },
      { k: 'previsto pela lei', v: predicted.toFixed(1), c: Q.warn },
      { k: 'diferença', v: `${N - predicted >= 0 ? '+' : ''}${(N - predicted).toFixed(1)}` },
      { k: 'flutuação típica (±)', v: sigma.toFixed(1) },
      { k: 'atividade', v: `${((N / s.n0) * 100).toFixed(1)} % da inicial` },
      { k: 'para que serve', v: iso.uso },
    ], { title: 'N(t) = N₀ · 2^(−t / T½)', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ CURVA DE DECAIMENTO ══════════════════════════════════════
    const px = stageW + 44
    const pw = w - px - 26
    const py = 44, ph = h - py - 78

    caption(ctx, logScale ? 'em escala logarítmica a exponencial vira uma reta' : 'a cada meia-vida, metade do que resta',
      px, 26, Q.warn)

    const toY = n => (logScale ? Math.log2(Math.max(n, 0.5)) : n)
    const theory = []
    for (let i = 0; i <= 120; i++) {
      const tau = (i / 120) * HALVES_SHOWN
      theory.push([tau, toY(s.n0 * Math.pow(2, -tau))])
    }
    const measured = s.hist.map(([tau, n]) => [tau, toY(n)])
    const yTop = toY(s.n0)

    plot(ctx, { x: px, y: py, w: pw, h: ph }, {
      xDomain: [0, HALVES_SHOWN],
      // no modo log, uma marca por metade: N₀, N₀/2, N₀/4 … — a reta
      // passa exatamente pelos cruzamentos da grade
      yDomain: logScale ? [yTop - HALVES_SHOWN, yTop] : [0, yTop * 1.04],
      xTicks: HALVES_SHOWN, yTicks: logScale ? HALVES_SHOWN : 4,
      fmtX: q => q.toFixed(0),
      fmtY: q => (logScale ? Math.pow(2, q).toFixed(0) : q.toFixed(0)),
      xLabel: 'tempo (em meias-vidas)', yLabel: 'núcleos intactos',
      rules: logScale ? [] : [
        { y: s.n0 / 2, color: C.faint, label: 'metade' },
        { y: s.n0 / 4, color: C.faint, label: 'um quarto' },
      ],
      series: [
        { points: theory, color: hexA(Q.warn, 0.9), width: 1.6, dash: [5, 4] },
        { points: measured, color: A, width: 2 },
      ],
      markers: s.tau <= HALVES_SHOWN ? [{ x: s.tau, y: toY(N), color: A, r: 4 }] : [],
    })
    legend(ctx, px, py + ph + 48, [
      { label: 'medido (o acaso de verdade)', color: A },
      { label: 'lei exponencial', color: Q.warn },
    ])
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

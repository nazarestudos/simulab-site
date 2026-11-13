// ─────────────────────────────────────────────────────────────
// components/SimLive.jsx — simulações de verdade como "imagens" do site.
//  · SimPreview    — roda uma simulação em modo prévia (sem textos,
//                    encaixada na largura); para fora da tela, pausa
//  · SimGallery    — seção fixada: a rolagem vertical corre os cards
//                    na horizontal; cada card é uma simulação ao vivo
//  · HoverPreview  — painel que segue o cursor com a simulação viva
// ─────────────────────────────────────────────────────────────
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion, useInView } from 'framer-motion'
import { SimClock } from '../simulations/engine'
import { getSimulationCanvas } from '../simulations/registry'
import { TOPIC_COLORS } from '../data'

// prévia: desenho de 720px encaixado na largura, sem rótulos nem leituras
const PREVIEW_CLOCK = { speed: 1, stepKey: 0, onReadout: null, zoom: 'fit', bare: true }

export function SimPreview({ article, running = true }) {
  const sim = article.simulation
  const Canvas = getSimulationCanvas(sim.component)
  const params = useMemo(
    () => Object.fromEntries((sim.controls ?? []).map(c => [c.id, c.default])),
    [sim],
  )
  if (!Canvas) return null
  return (
    <SimClock.Provider value={PREVIEW_CLOCK}>
      <Suspense fallback={null}>
        <Canvas params={params} running={running} resetKey={0} />
      </Suspense>
    </SimClock.Provider>
  )
}

// ── Galeria fixada com rolagem horizontal ────────────────────
export function SimGallery({ items, title, lead, total }) {
  const wrapRef  = useRef(null)
  const trackRef = useRef(null)
  const distRef  = useRef(0)
  const reduce   = useReducedMotion()
  const [dist, setDist]     = useState(0)
  const [pinned, setPinned] = useState(false)
  const near = useInView(wrapRef, { margin: '60% 0px', once: true })

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const measure = () => {
      const on = mq.matches && !reduce
      setPinned(on)
      const d = on && trackRef.current
        ? Math.max(0, trackRef.current.scrollWidth - window.innerWidth)
        : 0
      distRef.current = d
      setDist(d)
    }
    measure()
    window.addEventListener('resize', measure)
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => { window.removeEventListener('resize', measure); ro.disconnect() }
  }, [reduce])

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, p => -p * distRef.current)

  return (
    <section
      ref={wrapRef}
      className="relative"
      style={pinned ? { height: `calc(100vh + ${dist}px)` } : undefined}
    >
      <div className={pinned ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-[var(--nav-height)]' : 'py-section'}>
        <div className="container-xl w-full flex flex-wrap items-end justify-between gap-x-10 gap-y-4 mb-8 lg:mb-10">
          <div>
            <h2 className="font-display font-700 text-display-lg text-sl-text">{title}</h2>
            <p className="text-sl-dim text-[1rem] mt-3 max-w-[36rem] leading-relaxed">{lead}</p>
          </div>
          <Link
            to="/acervo?sim=1"
            data-cursor="frame"
            className="shrink-0 px-5 py-3 text-[0.875rem] font-700 text-white border-2 border-white/40
                       hover:border-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            Todas as {total} simulações
          </Link>
        </div>

        <div className={pinned ? '' : 'gallery-scroll'}>
          <motion.div ref={trackRef} className="gallery-track" style={pinned ? { x } : undefined}>
            {items.map((a, i) => (
              <Link
                key={a.id}
                to={`/acervo/${a.id}/simulacao`}
                data-cursor-label="Mexer"
                className="gallery-card group block"
              >
                <div className="relative aspect-[16/10] bg-black border border-sl-border2
                                group-hover:border-white transition-colors duration-200 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none">
                    {near && <SimPreview article={a} running={!reduce} />}
                  </div>
                  <span
                    className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0
                               group-hover:scale-x-100 transition-transform duration-300 ease-expo-out"
                    style={{ background: TOPIC_COLORS[a.topic] }}
                    aria-hidden="true"
                  />
                </div>
                <div className="flex items-start justify-between gap-6 mt-4">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 text-sl-dim text-[0.875rem] mb-1.5">
                      <span className="w-2 h-2 shrink-0" style={{ background: TOPIC_COLORS[a.topic] }} aria-hidden="true" />
                      {a.topic}
                    </p>
                    <h3 className="font-display font-700 text-[1.15rem] lg:text-[1.35rem] leading-[1.1] tracking-[-0.02em] text-sl-text">
                      {a.simulation.subtitle ?? a.title}
                    </h3>
                  </div>
                  <span className="text-sl-muted text-[0.875rem] tabular-nums shrink-0 pt-0.5">
                    {i + 1}/{items.length}
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {pinned && (
          <div className="container-xl w-full mt-8 lg:mt-10" aria-hidden="true">
            <div className="h-px bg-sl-border2">
              <motion.div className="h-[3px] -mt-px bg-white origin-left" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// ── Prévia que segue o cursor ────────────────────────────────
// `article` nulo esconde. O painel persegue o mouse com atraso e foge
// das bordas da janela.
export function HoverPreview({ article }) {
  const boxRef = useRef(null)
  const [shown, setShown] = useState(null)   // mantém a última enquanto some
  const [fine, setFine]   = useState(false)

  useEffect(() => {
    setFine(
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
  }, [])
  useEffect(() => { if (article) setShown(article) }, [article])

  useEffect(() => {
    if (!fine) return
    const box = boxRef.current
    const mouse = { x: innerWidth / 2, y: innerHeight / 2 }
    const cur = { ...mouse }
    const onMove = e => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMove, { passive: true })
    let raf = 0
    const loop = () => {
      const w = box.offsetWidth, h = box.offsetHeight
      let tx = mouse.x + 32, ty = mouse.y - h / 2
      if (tx + w > innerWidth - 16) tx = mouse.x - w - 32
      ty = Math.max(16, Math.min(innerHeight - h - 16, ty))
      cur.x += (tx - cur.x) * 0.14
      cur.y += (ty - cur.y) * 0.14
      box.style.transform = `translate3d(${cur.x.toFixed(1)}px, ${cur.y.toFixed(1)}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove) }
  }, [fine])

  if (!fine) return null
  const open = Boolean(article)

  return (
    <div ref={boxRef} aria-hidden="true" className="fixed left-0 top-0 z-[60] pointer-events-none w-[min(30vw,440px)]">
      <div
        className="aspect-[16/10] bg-black border-2 border-white overflow-hidden transition-[clip-path,opacity] duration-300 ease-expo-out"
        style={{
          clipPath: open ? 'inset(0% 0% 0% 0%)' : 'inset(50% 0% 50% 0%)',
          opacity: open ? 1 : 0,
        }}
      >
        {shown && <SimPreview key={shown.id} article={shown} running={open} />}
      </div>
    </div>
  )
}

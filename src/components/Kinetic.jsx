// ─────────────────────────────────────────────────────────────
// components/Kinetic.jsx — tipografia que reage.
//  · RollText      — rótulo que rola no hover (menu, botões)
//  · ScrollLit     — parágrafo que acende palavra a palavra com o scroll
//  · VelocityBand  — faixa de texto gigante; corre e inclina conforme a
//                    velocidade da rolagem
//  · Wordmark      — logotipo em fonte variável: peso e largura de cada
//                    letra seguem a distância até o cursor
// Todos têm versão parada para prefers-reduced-motion.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef } from 'react'
import {
  motion, useScroll, useTransform, useVelocity, useSpring,
  useMotionValue, useAnimationFrame, useReducedMotion, useInView,
} from 'framer-motion'

// ── RollText ─────────────────────────────────────────────────
export function RollText({ children }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  )
}

// ── ScrollLit ────────────────────────────────────────────────
function LitWord({ children, progress, from, to, reduce }) {
  const opacity = useTransform(progress, [from, to], [0.14, 1])
  return (
    <motion.span aria-hidden="true" className="inline-block mr-[0.24em]" style={{ opacity: reduce ? 1 : opacity }}>
      {children}
    </motion.span>
  )
}

export function ScrollLit({ text, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.88', 'end 0.5'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <LitWord
          key={i} progress={scrollYProgress} reduce={reduce}
          from={i / words.length} to={Math.min(1, (i + 1.5) / words.length)}
        >
          {w}
        </LitWord>
      ))}
    </p>
  )
}

// ── VelocityBand ─────────────────────────────────────────────
const wrap = (min, max, v) => {
  const r = max - min
  return ((((v - min) % r) + r) % r) + min
}

export function VelocityBand({ items, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { margin: '200px' })
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 })
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false })
  const skewX = useTransform(smooth, [-2500, 2500], [10, -10])
  const dir = useRef(-1)
  const x = useTransform(baseX, v => `${wrap(-50, 0, v)}%`)

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return
    const f = factor.get()
    if (f < 0) dir.current = 1
    else if (f > 0) dir.current = -1
    const base = 1.4 * (delta / 1000)            // % da faixa por segundo, parada
    baseX.set(baseX.get() + dir.current * base * (1 + Math.abs(f)))
  })

  const row = (
    <span className="inline-flex items-center shrink-0">
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center">
          <span className={i % 2 ? 'outline' : ''}>{it}</span>
          <span className="inline-block w-[0.18em] h-[0.18em] bg-white mx-[0.35em]" />
        </span>
      ))}
    </span>
  )

  return (
    <div ref={ref} aria-hidden="true" className={`kinetic-band ${className}`}>
      <motion.div className="inline-flex" style={{ x, skewX: reduce ? 0 : skewX }}>
        {row}{row}
      </motion.div>
    </div>
  )
}

// ── Wordmark ─────────────────────────────────────────────────
// Cada letra tem seus eixos 'wdth' e 'wght' puxados pela proximidade do
// cursor: perto engorda e alarga, longe afina e estreita. Os valores
// perseguem o alvo com atraso, então o logotipo "respira".
export function Wordmark({ text = 'SIMULAB', className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const root = ref.current
    if (!root || reduce) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const letters = [...root.querySelectorAll('span')]
    const cur = letters.map(() => ({ wdth: 100, wght: 600 }))
    let mx = null, my = null, raf = 0, active = false

    const onMove = e => { mx = e.clientX; my = e.clientY }
    const onLeave = () => { mx = null }
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    const io = new IntersectionObserver(([e]) => {
      active = e.isIntersecting
      if (active && !raf) raf = requestAnimationFrame(tick)
    })
    io.observe(root)

    function tick() {
      raf = 0
      if (!active) return
      const reach = Math.max(260, root.offsetWidth * 0.32)
      letters.forEach((el, i) => {
        let near = 0
        if (mx !== null) {
          const r = el.getBoundingClientRect()
          const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2))
          near = Math.max(0, 1 - d / reach)
          near = near * near * (3 - 2 * near)          // smoothstep
        }
        const tw = 76 + near * 49, tg = 380 + near * 520
        const c = cur[i]
        c.wdth += (tw - c.wdth) * 0.12
        c.wght += (tg - c.wght) * 0.12
        el.style.setProperty('--wdth', c.wdth.toFixed(1))
        el.style.setProperty('--wght', c.wght.toFixed(0))
      })
      raf = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [reduce])

  return (
    <div ref={ref} aria-hidden="true" className={`wordmark ${className}`}>
      {[...text].map((ch, i) => <span key={i}>{ch}</span>)}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// components/Intro.jsx — abertura do site, uma vez por sessão.
// Uma contagem de 0 a 100 em tipo gigante e a tela sobe, revelando o
// hero. Não aparece com prefers-reduced-motion nem em navegações
// seguintes (sessionStorage).
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react'

const KEY = 'simulab-intro'
const COUNT_MS = 1150
const LIFT_MS  = 750

function shouldPlay() {
  if (typeof window === 'undefined') return false
  try {
    if (sessionStorage.getItem(KEY)) return false
  } catch { return false }
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Decidido uma vez, na carga do módulo: a abertura vai tocar nesta visita? */
export const INTRO_PLAYS = shouldPlay()
/** Quanto o resto da página deve esperar antes de animar a própria entrada. */
export const INTRO_DELAY_MS = INTRO_PLAYS ? COUNT_MS + 250 : 0

export default function Intro() {
  const [phase, setPhase] = useState(INTRO_PLAYS ? 'count' : 'done')
  const numRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    if (phase !== 'count') return
    try { sessionStorage.setItem(KEY, '1') } catch { /* modo privado: sem problema */ }
    document.documentElement.style.overflow = 'hidden'
    const t0 = performance.now()
    let raf = 0
    const tick = now => {
      const p = Math.min(1, (now - t0) / COUNT_MS)
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2   // easeInOutQuad
      if (numRef.current) numRef.current.textContent = String(Math.round(e * 100)).padStart(3, '0')
      if (barRef.current) barRef.current.style.transform = `scaleX(${e})`
      if (p < 1) raf = requestAnimationFrame(tick)
      else setPhase('lift')
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase])

  useEffect(() => {
    if (phase !== 'lift') return
    document.documentElement.style.overflow = ''
    const id = setTimeout(() => setPhase('done'), LIFT_MS + 60)
    return () => clearTimeout(id)
  }, [phase])

  if (phase === 'done') return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[90] bg-black flex flex-col justify-between pointer-events-none"
      style={{
        transform: phase === 'lift' ? 'translate3d(0,-100%,0)' : 'none',
        transition: `transform ${LIFT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <div className="container-xl w-full pt-6 flex items-center justify-between text-[0.875rem] text-sl-dim">
        <span className="font-display font-700 text-white">SimuLab</span>
        <span>Ligando os instrumentos</span>
      </div>
      <div className="container-xl w-full pb-6">
        <span
          ref={numRef}
          className="block font-display font-800 text-white leading-[0.8] tracking-[-0.05em] tabular-nums
                     text-[clamp(6rem,26vw,24rem)]"
        >
          000
        </span>
        <div className="h-[3px] mt-6 bg-white/15">
          <div ref={barRef} className="h-full bg-white origin-left" style={{ transform: 'scaleX(0)' }} />
        </div>
      </div>
    </div>
  )
}

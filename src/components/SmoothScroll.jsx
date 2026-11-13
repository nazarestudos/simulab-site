// ─────────────────────────────────────────────────────────────
// components/SmoothScroll.jsx
// Wraps the app in a Lenis inertial-scroll loop. Purely additive —
// renders children untouched, just drives the scroll physics.
// ─────────────────────────────────────────────────────────────
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // easeOutExpo
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    document.documentElement.classList.add('lenis')
    window.__lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
      document.documentElement.classList.remove('lenis')
    }
  }, [])

  return children
}

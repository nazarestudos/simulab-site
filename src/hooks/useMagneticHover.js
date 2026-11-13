// ─────────────────────────────────────────────────────────────
// src/hooks/useMagneticHover.js
// Attach the returned ref to any element to make it "stick" to
// the cursor within its bounds and spring back on mouse-leave.
// ─────────────────────────────────────────────────────────────
import { useRef, useEffect } from 'react'

export function useMagneticHover(strength = 0.35) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    function onMove(e) {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }
    function onLeave() {
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}

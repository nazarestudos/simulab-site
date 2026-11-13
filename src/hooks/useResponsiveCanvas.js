// ─────────────────────────────────────────────────────────────
// src/hooks/useResponsiveCanvas.js
// Keeps a <canvas> element's backing resolution in sync with
// its rendered CSS size via ResizeObserver.
// ─────────────────────────────────────────────────────────────
import { useEffect } from 'react'

export function useResponsiveCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ro = new ResizeObserver(() => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    })
    ro.observe(canvas)
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    return () => ro.disconnect()
  }, [ref])
}

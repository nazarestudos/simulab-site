// ─────────────────────────────────────────────────────────────
// components/CustomCursor.jsx — o retículo da marca como cursor.
//
// Um ponto exato + um quadro que segue com atraso e muda de forma
// conforme o que está embaixo:
//   · livre                      → mira pequena
//   · link / botão comum         → cresce e gira 45°
//   · [data-cursor="frame"]      → o quadro se molda ao elemento e o
//                                   emoldura (botões principais)
//   · [data-cursor-label="X"]    → vira uma etiqueta cheia com a palavra
//                                   ("Abrir", "Mexer") — cards e linhas
// Tudo em mix-blend-difference: sobre branco, inverte sozinho.
// Desligado em toque e com prefers-reduced-motion.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react'

const LERP = 0.2

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const boxRef   = useRef(null)
  const labelRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine   = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current, box = boxRef.current, label = labelRef.current
    document.documentElement.classList.add('has-custom-cursor')

    const mouse = { x: -200, y: -200 }
    const cur   = { x: -200, y: -200, w: 24, h: 24, rot: 0 }
    let target = null        // elemento emoldurado
    let mode   = 'free'      // free | active | frame | label
    let down   = false
    let seen   = false

    function pick(el) {
      // algo pegável numa simulação: retículo girado, sem tapar o objeto
      if (el.classList?.contains('sim-grab')) { mode = 'active'; target = null; return }
      const lab = el.closest?.('[data-cursor-label]')
      if (lab) {
        mode = 'label'; target = null
        label.textContent = lab.getAttribute('data-cursor-label') || 'Abrir'
        return
      }
      const fr = el.closest?.('[data-cursor="frame"]')
      if (fr) { mode = 'frame'; target = fr; return }
      mode = el.closest?.('a, button, [role="button"], input, select, label, summary') ? 'active' : 'free'
      target = null
    }

    const onMove = e => {
      mouse.x = e.clientX; mouse.y = e.clientY
      if (!seen) { seen = true; cur.x = mouse.x; cur.y = mouse.y }
      pick(e.target)
    }
    const onDown = () => { down = true }
    const onUp   = () => { down = false }
    const onOut  = e => { if (!e.relatedTarget) { mouse.x = -200; mouse.y = -200; seen = false } }
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseout', onOut)

    let raf = 0
    function loop() {
      let tx = mouse.x, ty = mouse.y, tw = 24, th = 24, trot = 0
      if (mode === 'frame' && target?.isConnected) {
        const r = target.getBoundingClientRect()
        tx = r.left + r.width / 2; ty = r.top + r.height / 2
        tw = r.width + 14; th = r.height + 14
      } else if (mode === 'label') {
        tw = th = 86
      } else if (mode === 'active') {
        tw = th = 38; trot = 45
      }
      if (down) { tw *= 0.86; th *= 0.86 }

      cur.x += (tx - cur.x) * LERP
      cur.y += (ty - cur.y) * LERP
      cur.w += (tw - cur.w) * LERP
      cur.h += (th - cur.h) * LERP
      cur.rot += (trot - cur.rot) * LERP

      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`
      dot.style.opacity = mode === 'label' ? '0' : '1'
      box.style.width  = `${cur.w.toFixed(1)}px`
      box.style.height = `${cur.h.toFixed(1)}px`
      box.style.transform =
        `translate3d(${(cur.x - cur.w / 2).toFixed(1)}px, ${(cur.y - cur.h / 2).toFixed(1)}px, 0) rotate(${cur.rot.toFixed(1)}deg)`
      box.dataset.mode = mode
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseout', onOut)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={boxRef} className="cursor-box" data-mode="free">
        <span ref={labelRef} className="cursor-label">Abrir</span>
      </div>
    </div>
  )
}

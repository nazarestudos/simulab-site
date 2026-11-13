// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — A Derivada como Reta Tangente
//
// A definição da derivada, tornada visível. Numa curva fixa
// f(x) = 0,2x³ − x, o ponto P fica em (x₀, f(x₀)) e o ponto Q em
// (x₀+h, f(x₀+h)). A reta SECANTE por P e Q tem inclinação
//   [f(x₀+h) − f(x₀)] / h
// e, quando h → 0, ela se funde com a reta TANGENTE em P, cuja
// inclinação é a derivada f′(x₀). Encolha o slider h e veja a
// inclinação medida convergir para o valor exato.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  glow, hexA, clamp,
  handle,
} from '../engine'

const A = ACCENT['matematica']

// Curva fixa e sua derivada analítica (para comparar com a secante).
const f  = x => 0.2 * x * x * x - x
const fp = x => 0.6 * x * x - 1        // f′(x)

export default function DerivadaTangenteCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ pulse: 0 }), [])
  const step = useCallback((s, dt) => { s.pulse = (s.pulse + dt) % 100 }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const x0 = p.x0 ?? 1
    const hh = p.h ?? 1.5

    // ── Coordenadas ───────────────────────────────────────────────
    const ppu = clamp(Math.min(w, h) / 13, 16, 56)
    const ox = w * 0.5, oy = h * 0.52
    const X = x => ox + x * ppu
    const Y = y => oy - y * ppu
    const xMin = (0 - ox) / ppu, xMax = (w - ox) / ppu
    const yMin = (oy - h) / ppu, yMax = (oy - 0) / ppu

    // grade + eixos
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath()
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) { ctx.moveTo(X(gx) + 0.5, 0); ctx.lineTo(X(gx) + 0.5, h) }
    for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy++) { ctx.moveTo(0, Y(gy) + 0.5); ctx.lineTo(w, Y(gy) + 0.5) }
    ctx.stroke()
    ctx.strokeStyle = hexA(C.ink, 0.35); ctx.lineWidth = 1.2; ctx.beginPath()
    ctx.moveTo(0, Y(0) + 0.5); ctx.lineTo(w, Y(0) + 0.5)
    ctx.moveTo(X(0) + 0.5, 0); ctx.lineTo(X(0) + 0.5, h)
    ctx.stroke()
    text(ctx, 'x', w - 10, Y(0) - 6, { size: 10, weight: 700, color: C.dim })
    text(ctx, 'y', X(0) + 8, 12, { size: 10, weight: 700, color: C.dim })

    // ── A curva ───────────────────────────────────────────────────
    ctx.strokeStyle = hexA(A, 0.9); ctx.lineWidth = 2.2; ctx.lineJoin = 'round'; ctx.beginPath()
    for (let px = 0; px <= w; px += 2) {
      const x = (px - ox) / ppu
      px === 0 ? ctx.moveTo(px, Y(f(x))) : ctx.lineTo(px, Y(f(x)))
    }
    ctx.stroke()

    const yP = f(x0)
    const xQ = x0 + hh, yQ = f(xQ)

    const mSec = Math.abs(hh) > 1e-6 ? (yQ - yP) / hh : fp(x0)   // inclinação da secante
    const mTan = fp(x0)                                          // inclinação da tangente (derivada)

    // desenha uma reta de inclinação m passando por (px,py) atravessando a tela
    const drawLine = (px, py, m, color, width, dash) => {
      ctx.save()
      ctx.strokeStyle = color; ctx.lineWidth = width
      ctx.setLineDash(dash ?? [])
      ctx.beginPath()
      ctx.moveTo(X(xMin), Y(py + m * (xMin - px)))
      ctx.lineTo(X(xMax), Y(py + m * (xMax - px)))
      ctx.stroke()
      ctx.restore()
    }

    // ── Reta tangente (o alvo: derivada exata) ────────────────────
    drawLine(x0, yP, mTan, hexA(Q.kinetic, 0.9), 2, null)

    // ── Reta secante (aproximação atual, por h) ───────────────────
    if (Math.abs(hh) > 1e-6) {
      drawLine(x0, yP, mSec, hexA(Q.velocity, 0.85), 1.6, [5, 4])

      // triângulo do quociente: Δx (run) e Δy (rise)
      ctx.strokeStyle = hexA(C.ink, 0.3); ctx.lineWidth = 1; ctx.setLineDash([2, 3])
      ctx.beginPath()
      ctx.moveTo(X(x0), Y(yP)); ctx.lineTo(X(xQ), Y(yP))   // run horizontal
      ctx.lineTo(X(xQ), Y(yQ))                              // rise vertical
      ctx.stroke(); ctx.setLineDash([])
      text(ctx, 'h', (X(x0) + X(xQ)) / 2, Y(yP) + (hh > 0 ? 12 : -6), { size: 9, color: C.muted, align: 'center' })
    }

    // ── Pontos P e Q ──────────────────────────────────────────────
    if (Math.abs(hh) > 1e-6) {
      glow(ctx, X(xQ), Y(yQ), 3, Q.velocity, 0.8)
      text(ctx, 'Q', X(xQ) + 8, Y(yQ) - 6, { size: 9.5, weight: 700, color: Q.velocity })
    }
    glow(ctx, X(x0), Y(yP), 3.4, Q.kinetic, 0.95)
    text(ctx, 'P', X(x0) + 8, Y(yP) - 6, { size: 9.5, weight: 700, color: Q.kinetic })

    // ── HUD ───────────────────────────────────────────────────────
    const conv = Math.abs(mSec - mTan)
    readout(ctx, w - 14, 14, [
      { k: 'f(x) = 0,2x³ − x', v: '', c: A },
      { k: 'x₀  (ponto P)', v: x0.toFixed(2), c: Q.kinetic },
      { k: 'h   (afastamento Q)', v: hh.toFixed(2), c: Q.velocity },
      { k: 'Δy / Δx  (secante)', v: mSec.toFixed(3), c: Q.velocity },
      { k: 'f′(x₀)  (tangente)', v: mTan.toFixed(3), c: Q.kinetic },
      { k: '|secante − tangente|', v: conv.toFixed(3), c: conv < 0.05 ? Q.potential : conv < 0.3 ? Q.warn : Q.danger },
    ], { title: 'derivada = inclinação da tangente', anchor: 'right', accent: A, minWidth: 216 })

    // dica dinâmica
    const dica = conv < 0.03
      ? 'h ≈ 0 → a secante VIROU a tangente: inclinação = f′(x₀)'
      : 'encolha h e veja a secante convergir para a tangente'
    caption(ctx, dica, 16, h - 16, conv < 0.03 ? Q.potential : C.muted)

    // alças: P e Q podem ser arrastados sobre a curva
    handle(ctx, X(x0), Y(yP), 6, s.hover === 'p' || s.drag === 'p', A)
    handle(ctx, X(xQ), Y(yQ), 6, s.hover === 'q' || s.drag === 'q', A)
    if (!s.moved) caption(ctx, 'arraste os dois pontos sobre a curva', 16, 24, C.dim)
  }, [])

  // Os dois pontos da secante podem ser arrastados sobre a curva:
  // P muda x₀; Q muda h (a distância entre eles).
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { w, h } = view
    const ppu = clamp(Math.min(w, h) / 13, 16, 56)
    const ox = w * 0.5, oy = h * 0.52
    const x0 = p.x0 ?? 1, hh = p.h ?? 1.5
    const near = x => Math.hypot(pt.x - (ox + x * ppu), pt.y - (oy - f(x) * ppu)) < 24
    const over = near(x0 + hh) ? 'q' : near(x0) ? 'p' : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag) {
      const x = (pt.x - ox) / ppu
      if (s.drag === 'p') view.setParams?.({ x0: clamp(x, -3.5, 3.5) })
      else view.setParams?.({ h: clamp(x - x0, 0.05, 3) })
      s.moved = true
      return 'grab'
    }
    s.hover = over
    return over ? 'grab' : null
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render} onPointer={onPointer}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

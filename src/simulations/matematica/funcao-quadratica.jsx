// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Explorador de Função Quadrática
//
// Um plano cartesiano ao vivo: os sliders a, b, c desenham a parábola
// f(x) = ax² + bx + c e, ao mesmo tempo, o HUD mostra o que a álgebra
// prevê — concavidade (sinal de a), discriminante Δ = b² − 4ac, as
// raízes (onde cruza o eixo x) e o vértice (xv = −b/2a). Um ponto varre
// a curva mostrando que cada x gera um único f(x): a definição de função.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  glow, hexA, clamp,
} from '../engine'

const A = ACCENT['matematica']

export default function FuncaoQuadraticaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ sweep: 0 }), [])

  const step = useCallback((s, dt) => {
    // Ponto que varre a curva da esquerda para a direita, em laço.
    s.sweep = (s.sweep + dt * 0.14) % 1
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const a = p.a ?? 1
    const b = p.b ?? 0
    const c = p.c ?? -4
    const f = x => a * x * x + b * x + c

    // ── Sistema de coordenadas ────────────────────────────────────
    // Escala igual nos dois eixos (grade quadrada). Origem centralizada.
    const ppu = clamp(Math.min(w, h) / 15, 16, 54)   // pixels por unidade
    const ox = w * 0.5
    const oy = h * 0.5
    const X = x => ox + x * ppu          // mundo → pixel (x)
    const Y = y => oy - y * ppu          // mundo → pixel (y), y para cima

    const xMin = (0 - ox) / ppu, xMax = (w - ox) / ppu
    const yMin = (oy - h) / ppu, yMax = (oy - 0) / ppu

    // ── Grade de unidades inteiras ────────────────────────────────
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) {
      ctx.moveTo(X(gx) + 0.5, 0); ctx.lineTo(X(gx) + 0.5, h)
    }
    for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy++) {
      ctx.moveTo(0, Y(gy) + 0.5); ctx.lineTo(w, Y(gy) + 0.5)
    }
    ctx.stroke()

    // ── Eixos ─────────────────────────────────────────────────────
    ctx.strokeStyle = hexA(C.ink, 0.35)
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(0, Y(0) + 0.5); ctx.lineTo(w, Y(0) + 0.5)   // eixo x
    ctx.moveTo(X(0) + 0.5, 0); ctx.lineTo(X(0) + 0.5, h)   // eixo y
    ctx.stroke()

    // rótulos dos ticks inteiros (pulando o 0 e evitando poluir)
    const tickStep = ppu < 24 ? 2 : 1
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) {
      if (gx === 0 || gx % tickStep !== 0) continue
      text(ctx, `${gx}`, X(gx), Y(0) + 13, { size: 8, color: C.muted, align: 'center' })
    }
    for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy++) {
      if (gy === 0 || gy % tickStep !== 0) continue
      text(ctx, `${gy}`, X(0) - 6, Y(gy) + 3, { size: 8, color: C.muted, align: 'right' })
    }
    text(ctx, 'x', w - 10, Y(0) - 6, { size: 10, weight: 700, color: C.dim })
    text(ctx, 'y', X(0) + 8, 12, { size: 10, weight: 700, color: C.dim })

    // ── Elementos algébricos ──────────────────────────────────────
    const nearLine = Math.abs(a) < 0.02
    const disc = b * b - 4 * a * c
    const xv = nearLine ? 0 : -b / (2 * a)
    const yv = f(xv)

    // Eixo de simetria (tracejado vertical em x = xv)
    if (!nearLine) {
      ctx.strokeStyle = hexA(A, 0.35)
      ctx.setLineDash([4, 4])
      ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(X(xv) + 0.5, 0); ctx.lineTo(X(xv) + 0.5, h); ctx.stroke()
      ctx.setLineDash([])
    }

    // ── A parábola ────────────────────────────────────────────────
    ctx.strokeStyle = A
    ctx.lineWidth = 2.2
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let px = 0; px <= w; px += 2) {
      const x = (px - ox) / ppu
      const py = Y(f(x))
      px === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
    }
    ctx.stroke()

    // ── Interceptos com o eixo y (0, c) ───────────────────────────
    ctx.fillStyle = Q.field
    ctx.beginPath(); ctx.arc(X(0), Y(c), 3.2, 0, Math.PI * 2); ctx.fill()

    // ── Raízes (onde cruza o eixo x) ──────────────────────────────
    if (!nearLine && disc >= 0) {
      const r1 = (-b + Math.sqrt(disc)) / (2 * a)
      const r2 = (-b - Math.sqrt(disc)) / (2 * a)
      for (const r of (disc === 0 ? [r1] : [r1, r2])) {
        glow(ctx, X(r), Y(0), 3.4, Q.warn, 0.9)
        text(ctx, `${r.toFixed(2)}`, X(r), Y(0) - 10, { size: 9, weight: 700, color: Q.warn, align: 'center' })
      }
    }

    // ── Vértice ───────────────────────────────────────────────────
    if (!nearLine) {
      glow(ctx, X(xv), Y(yv), 3.6, Q.kinetic, 0.9)
      text(ctx, `V(${xv.toFixed(2)}, ${yv.toFixed(2)})`, X(xv) + 8, Y(yv) + (a > 0 ? 14 : -8),
        { size: 9, weight: 700, color: Q.kinetic })
    }

    // ── Ponto varredor: cada x gera um único f(x) ─────────────────
    const xs = xMin + s.sweep * (xMax - xMin)
    const ys = f(xs)
    const inView = Y(ys) > -20 && Y(ys) < h + 20
    if (inView) {
      // linhas-guia até os eixos
      ctx.strokeStyle = hexA(Q.velocity, 0.35)
      ctx.setLineDash([2, 3])
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(X(xs), Y(ys)); ctx.lineTo(X(xs), Y(0))
      ctx.moveTo(X(xs), Y(ys)); ctx.lineTo(X(0), Y(ys))
      ctx.stroke()
      ctx.setLineDash([])
      glow(ctx, X(xs), Y(ys), 3.2, Q.velocity, 0.9)
    }

    // ── HUD ───────────────────────────────────────────────────────
    const sinal = v => (v >= 0 ? '+' : '−')
    const fx = `${a.toFixed(1)}x² ${sinal(b)} ${Math.abs(b).toFixed(1)}x ${sinal(c)} ${Math.abs(c).toFixed(1)}`
    const raizes = nearLine ? 'reta (a≈0)'
      : disc > 0 ? `${((-b + Math.sqrt(disc)) / (2 * a)).toFixed(2)} e ${((-b - Math.sqrt(disc)) / (2 * a)).toFixed(2)}`
      : disc === 0 ? `${(-b / (2 * a)).toFixed(2)} (dupla)`
      : 'nenhuma real'

    readout(ctx, w - 14, 14, [
      { k: 'a  (concavidade)', v: `${a.toFixed(1)} · ${a > 0 ? 'p/ cima ∪' : a < 0 ? 'p/ baixo ∩' : 'reta'}`, c: A },
      { k: 'b', v: b.toFixed(1) },
      { k: 'c  (corta y em)', v: c.toFixed(1), c: Q.field },
      { k: 'Δ = b² − 4ac', v: disc.toFixed(2), c: disc > 0 ? Q.potential : disc < 0 ? Q.danger : Q.warn },
      { k: 'raízes (corta x)', v: raizes, c: Q.warn },
      { k: 'vértice x = −b/2a', v: nearLine ? '—' : xv.toFixed(2), c: Q.kinetic },
      { k: nearLine ? '—' : (a > 0 ? 'mínimo y' : 'máximo y'), v: nearLine ? '—' : yv.toFixed(2), c: Q.kinetic },
    ], { title: `f(x) = ${fx}`, anchor: 'right', accent: A, minWidth: 214 })

    caption(ctx, 'o ponto móvel: cada x gera um único f(x)', 16, h - 16, C.muted)
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

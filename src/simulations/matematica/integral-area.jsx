// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — A Integral como Área sob a Curva
//
// A soma de Riemann, tornada visível. A área sob f(x) = 0,15x² + 0,5,
// entre x = a e x = b, é aproximada por n retângulos. A soma das áreas
// deles (Σ f(xᵢ)·Δx) se aproxima da integral exata ∫ₐᵇ f dx quando n
// cresce — os retângulos "preenchem" a região curva. A integral exata
// vem do Teorema Fundamental: F(b) − F(a), com F(x) = 0,05x³ + 0,5x.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp,
  handle,
} from '../engine'

const A = ACCENT['matematica']

const f = x => 0.15 * x * x + 0.5           // curva (sempre positiva)
const F = x => 0.05 * x * x * x + 0.5 * x   // primitiva de f

export default function IntegralAreaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({}), [])
  const step = useCallback(() => {}, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    let a = p.a ?? -2
    let b = p.b ?? 3
    if (b < a) { const t = a; a = b; b = t }   // garante a ≤ b
    const n = Math.max(1, Math.round(p.n ?? 8))

    // ── Coordenadas (origem baixa: a área fica acima do eixo x) ───
    const ppu = clamp(Math.min(w, h) / 13, 16, 52)
    const ox = w * 0.5, oy = h * 0.82
    const X = x => ox + x * ppu
    const Y = y => oy - y * ppu
    const xMin = (0 - ox) / ppu, xMax = (w - ox) / ppu

    // grade + eixos
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.beginPath()
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) { ctx.moveTo(X(gx) + 0.5, 0); ctx.lineTo(X(gx) + 0.5, h) }
    for (let gy = 0; Y(gy) > 0; gy++) { ctx.moveTo(0, Y(gy) + 0.5); ctx.lineTo(w, Y(gy) + 0.5) }
    ctx.stroke()
    ctx.strokeStyle = hexA(C.ink, 0.35); ctx.lineWidth = 1.2; ctx.beginPath()
    ctx.moveTo(0, Y(0) + 0.5); ctx.lineTo(w, Y(0) + 0.5)
    ctx.moveTo(X(0) + 0.5, 0); ctx.lineTo(X(0) + 0.5, h)
    ctx.stroke()
    text(ctx, 'x', w - 10, Y(0) + 14, { size: 10, weight: 700, color: C.dim })

    // ── Retângulos de Riemann (extremo esquerdo) ──────────────────
    const dx = (b - a) / n
    let soma = 0
    for (let i = 0; i < n; i++) {
      const xi = a + i * dx
      const hi = f(xi)                 // altura pelo extremo esquerdo
      soma += hi * dx
      const rx = X(xi), rw = dx * ppu
      const ry = Y(hi), rh = Y(0) - Y(hi)
      ctx.fillStyle = hexA(A, 0.20)
      ctx.fillRect(rx, ry, rw, rh)
      ctx.strokeStyle = hexA(A, 0.55)
      ctx.lineWidth = 1
      ctx.strokeRect(rx + 0.5, ry + 0.5, rw, rh)
    }

    // ── Limites a e b ─────────────────────────────────────────────
    for (const [xl, lab, col] of [[a, 'a', Q.warn], [b, 'b', Q.warn]]) {
      ctx.strokeStyle = hexA(col, 0.7); ctx.setLineDash([4, 4]); ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(X(xl) + 0.5, 0); ctx.lineTo(X(xl) + 0.5, Y(0)); ctx.stroke()
      ctx.setLineDash([])
      text(ctx, `${lab} = ${xl.toFixed(1)}`, X(xl), Y(0) + 26, { size: 9, weight: 700, color: col, align: 'center' })
    }

    // ── A curva por cima ──────────────────────────────────────────
    ctx.strokeStyle = A; ctx.lineWidth = 2.4; ctx.lineJoin = 'round'; ctx.beginPath()
    for (let px = 0; px <= w; px += 2) {
      const x = (px - ox) / ppu
      px === 0 ? ctx.moveTo(px, Y(f(x))) : ctx.lineTo(px, Y(f(x)))
    }
    ctx.stroke()

    // ── HUD ───────────────────────────────────────────────────────
    const exata = F(b) - F(a)
    const erro = Math.abs(soma - exata)
    const erroPct = exata !== 0 ? (erro / Math.abs(exata)) * 100 : 0

    readout(ctx, w - 14, 14, [
      { k: 'f(x) = 0,15x² + 0,5', v: '', c: A },
      { k: 'intervalo [a, b]', v: `[${a.toFixed(1)}, ${b.toFixed(1)}]`, c: Q.warn },
      { k: 'n  retângulos', v: `${n}`, c: A },
      { k: 'Δx  largura', v: dx.toFixed(3) },
      { k: 'Σ f(xᵢ)·Δx  (soma)', v: soma.toFixed(3), c: Q.velocity },
      { k: '∫ₐᵇ f dx  (exata)', v: exata.toFixed(3), c: Q.potential },
      { k: 'erro', v: `${erroPct.toFixed(1)} %`, c: erroPct < 2 ? Q.potential : erroPct < 10 ? Q.warn : Q.danger },
    ], { title: 'área = soma de infinitos retângulos', anchor: 'right', accent: A, minWidth: 214 })

    const dica = erroPct < 1.5
      ? 'n grande → os retângulos preenchem a curva: soma ≈ integral'
      : 'aumente n e veja a soma dos retângulos convergir para a área exata'
    caption(ctx, dica, 16, h - 16, erroPct < 1.5 ? Q.potential : C.muted)

    // alças: os limites a e b podem ser arrastados sobre o eixo
    handle(ctx, X(p.a ?? -2), Y(0), 6, s.hover === 'a' || s.drag === 'a', A)
    handle(ctx, X(p.b ?? 3), Y(0), 6, s.hover === 'b' || s.drag === 'b', A)
    if (!s.moved) caption(ctx, 'arraste os limites a e b sobre o eixo', 16, 24, C.dim)
  }, [])

  // Os limites de integração podem ser arrastados sobre o eixo x.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { w, h } = view
    const ppu = clamp(Math.min(w, h) / 13, 16, 52)
    const ox = w * 0.5, oy = h * 0.82
    const hit = v => Math.abs(pt.x - (ox + v * ppu)) < 18 && pt.y < oy + 22 && pt.y > oy - f(v) * ppu - 16
    const over = hit(p.a ?? -2) ? 'a' : hit(p.b ?? 3) ? 'b' : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag) {
      const x = (pt.x - ox) / ppu
      if (s.drag === 'a') view.setParams?.({ a: clamp(x, -5, 2) })
      else view.setParams?.({ b: clamp(x, -1, 5) })
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

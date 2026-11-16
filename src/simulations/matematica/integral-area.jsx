// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — A Integral como Área sob a Curva
//
// A área sob f(x) = 0,15x² + 0,5, entre a e b, é aproximada por n
// retângulos de largura Δx = (b − a)/n. A altura de cada um pode ser
// lida em três lugares do seu intervalo:
//
//   esquerda     Σ f(xᵢ)·Δx           erro ∝ 1/n
//   direita      Σ f(xᵢ₊₁)·Δx         erro ∝ 1/n
//   ponto médio  Σ f(xᵢ + Δx/2)·Δx    erro ∝ 1/n²   ← muito melhor
//
// Quando n cresce, as três somas convergem para a integral exata, que
// o Teorema Fundamental dá sem somar nada: F(b) − F(a), com
// F(x) = 0,05x³ + 0,5x.
//
// O segundo gráfico é a "área acumulada" A(x) = ∫ₐˣ f: quanto de área
// já foi varrido até x. A inclinação dessa curva em cada ponto é a
// própria f(x) — é isso que o Teorema Fundamental diz.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  handle, plot, hexA, clamp,
} from '../engine'

const A = ACCENT['matematica']

const f = x => 0.15 * x * x + 0.5           // curva (sempre positiva)
const F = x => 0.05 * x * x * x + 0.5 * x   // primitiva de f
const METHODS = ['esquerda', 'ponto médio', 'direita']

/** Soma de Riemann com n retângulos; shift = 0 (esq.), 0,5 (meio) ou 1 (dir.). */
function riemann(a, b, n, shift) {
  const dx = (b - a) / n
  let sum = 0
  for (let i = 0; i < n; i++) sum += f(a + (i + shift) * dx) * dx
  return sum
}

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.60
  return {
    compact, stageW,
    ppu: clamp(Math.min(stageW / 11, (h - 90) / 5), 14, 56),
    ox: stageW * 0.5,
    oy: h - 54,
  }
}

export default function IntegralAreaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ drag: null, hover: null, moved: false }), [])
  const step = useCallback(() => {}, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    let a = p.a ?? -2
    let b = p.b ?? 3
    if (b < a) { const t = a; a = b; b = t }
    const n = Math.max(1, Math.round(p.n ?? 8))
    const mi = clamp(Math.round(p.metodo ?? 0), 0, 2)
    const shift = mi / 2

    const { compact, stageW, ppu, ox, oy } = geom(view)
    const X = x => ox + x * ppu
    const Y = y => oy - y * ppu

    // ── Grade e eixos (só no palco) ───────────────────────────────
    ctx.save()
    ctx.beginPath(); ctx.rect(0, 0, stageW, h); ctx.clip()
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let gx = -6; gx <= 6; gx++) { ctx.moveTo(X(gx) + 0.5, 34); ctx.lineTo(X(gx) + 0.5, oy) }
    for (let gy = 1; Y(gy) > 34; gy++) { ctx.moveTo(0, Y(gy) + 0.5); ctx.lineTo(stageW, Y(gy) + 0.5) }
    ctx.stroke()
    ctx.strokeStyle = C.line
    ctx.beginPath()
    ctx.moveTo(0, oy + 0.5); ctx.lineTo(stageW, oy + 0.5)
    ctx.moveTo(X(0) + 0.5, 34); ctx.lineTo(X(0) + 0.5, oy)
    ctx.stroke()
    for (let gx = -5; gx <= 5; gx++) {
      if (gx !== 0) text(ctx, `${gx}`, X(gx), oy + 15, { size: 9, color: C.muted, align: 'center' })
    }
    for (let gy = 1; Y(gy) > 44; gy++) text(ctx, `${gy}`, X(0) - 6, Y(gy) + 4, { size: 9, color: C.muted, align: 'right' })

    // ── Área exata, ao fundo ──────────────────────────────────────
    ctx.fillStyle = hexA(Q.potential, 0.14)
    ctx.beginPath()
    ctx.moveTo(X(a), oy)
    for (let i = 0; i <= 80; i++) { const x = a + (i / 80) * (b - a); ctx.lineTo(X(x), Y(f(x))) }
    ctx.lineTo(X(b), oy)
    ctx.closePath(); ctx.fill()

    // ── Retângulos ────────────────────────────────────────────────
    const dx = (b - a) / n
    for (let i = 0; i < n; i++) {
      const xl = a + i * dx
      const xs = xl + shift * dx                 // onde a altura é lida
      const hi = f(xs)
      const rx = X(xl), rw = dx * ppu, ry = Y(hi)
      ctx.fillStyle = hexA(A, 0.28)
      ctx.fillRect(rx, ry, rw, oy - ry)
      ctx.strokeStyle = hexA(A, 0.9)
      ctx.lineWidth = 1
      ctx.strokeRect(rx + 0.5, ry + 0.5, rw - 1, oy - ry - 1)
      // o ponto da curva que decide a altura deste retângulo
      if (rw > 9) { ctx.fillStyle = C.ink; ctx.fillRect(X(xs) - 2, ry - 2, 4, 4) }
    }

    // ── A curva por cima ──────────────────────────────────────────
    ctx.strokeStyle = A
    ctx.lineWidth = 2.6
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let px = 0; px <= stageW; px += 2) {
      const yv = Y(f((px - ox) / ppu))
      px === 0 ? ctx.moveTo(px, yv) : ctx.lineTo(px, yv)
    }
    ctx.stroke()
    ctx.restore()

    // ── Limites a e b ─────────────────────────────────────────────
    for (const [xl, lab, id] of [[p.a ?? -2, 'a', 'a'], [p.b ?? 3, 'b', 'b']]) {
      ctx.strokeStyle = Q.warn
      ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(X(xl), Y(f(xl))); ctx.lineTo(X(xl), oy + 6); ctx.stroke()
      ctx.fillStyle = Q.warn
      ctx.fillRect(X(xl) - 4, oy - 4, 8, 8)
      text(ctx, `${lab} = ${xl.toFixed(1).replace('.', ',')}`, X(xl), oy + 34, { size: 10, weight: 700, color: Q.warn, align: 'center' })
      handle(ctx, X(xl), oy, 5, s.hover === id || s.drag === id, Q.warn)
    }

    // ── Números ───────────────────────────────────────────────────
    const soma = riemann(a, b, n, shift)
    const exata = F(b) - F(a)
    const erro = soma - exata
    const erroPct = exata !== 0 ? Math.abs(erro / exata) * 100 : 0

    const est = erroPct < 0.5
      ? { t: 'Os retângulos já preenchem a curva: soma e integral coincidem', c: Q.potential }
      : mi === 1
        ? { t: 'Ponto médio: o que sobra de um lado compensa o que falta do outro', c: A }
        : { t: `Altura lida na ${METHODS[mi]} de cada retângulo: ${erro > 0 ? 'sobra' : 'falta'} área`, c: C.dim }
    const hintY = caption(ctx, est.t, 16, 24, est.c, stageW - 28)
    if (!s.moved) caption(ctx, 'Arraste os limites a e b sobre o eixo', 16, hintY + 4, C.dim)

    readout(ctx, w - 14, 14, [
      { k: 'n  retângulos',   v: `${n}`, c: A },
      { k: 'Δx  largura',     v: dx.toFixed(3) },
      { k: 'soma dos retângulos', v: soma.toFixed(4), c: A },
      { k: 'integral exata',  v: exata.toFixed(4), c: Q.potential },
      { k: 'diferença',       v: `${erro >= 0 ? '+' : '−'}${Math.abs(erro).toFixed(4)}`, c: erroPct < 2 ? Q.potential : Q.warn },
      { k: 'erro relativo',   v: `${erroPct.toFixed(2)} %`, c: erroPct < 2 ? Q.potential : erroPct < 10 ? Q.warn : Q.danger },
      { k: 'altura lida em',  v: METHODS[mi] },
      { k: 'intervalo',       v: `[${a.toFixed(1)}; ${b.toFixed(1)}]`, c: Q.warn },
    ], { title: 'f(x) = 0,15x² + 0,5', anchor: 'right', accent: A, minWidth: 214 })

    if (compact) return

    // ── A soma em função de n ─────────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const conv = []
    for (let k = 1; k <= 60; k++) conv.push([k, riemann(a, b, k, shift)])
    const lo = Math.min(exata, ...conv.map(c => c[1])), hi = Math.max(exata, ...conv.map(c => c[1]))
    const pad = Math.max((hi - lo) * 0.12, 0.05)
    caption(ctx, 'A soma se aproxima da área', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.32 }, {
      xDomain: [1, 60], yDomain: [lo - pad, hi + pad],
      xTicks: 3, yTicks: 2,
      fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(1),
      xLabel: 'número de retângulos', yLabel: 'soma',
      rules: [{ y: exata, color: Q.potential, label: 'integral exata' }],
      series: [{ points: conv, color: A, width: 2 }],
      markers: [{ x: n, y: soma, color: Q.velocity, r: 4.5 }],
    })

    // ── Área acumulada A(x) = ∫ₐˣ f ───────────────────────────────
    const py0 = h * 0.32 + 104
    const ph  = h - py0 - 40
    if (ph > 54 && b - a > 0.05) {
      const acc = []
      for (let i = 0; i <= 60; i++) { const x = a + (i / 60) * (b - a); acc.push([x, F(x) - F(a)]) }
      // a mesma soma, degrau a degrau: é a escada que tenta seguir a curva
      const stairs = [[a, 0]]
      let run = 0
      for (let i = 0; i < n; i++) {
        run += f(a + (i + shift) * dx) * dx
        stairs.push([a + (i + 1) * dx, stairs[stairs.length - 1][1]], [a + (i + 1) * dx, run])
      }
      caption(ctx, 'Área acumulada de a até x', gx, py0 - 12, A)
      plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
        xDomain: [a, b], yDomain: [0, Math.max(exata, soma) * 1.12],
        xTicks: 4, yTicks: 2,
        fmtX: x => x.toFixed(1), fmtY: y => y.toFixed(1),
        xLabel: 'x', yLabel: 'área',
        series: [
          { points: stairs, color: hexA(A, 0.9), width: 1.5 },
          { points: acc, color: Q.potential, width: 2 },
        ],
        markers: [{ x: b, y: exata, color: Q.potential, r: 4 }],
      })
    }
  }, [])

  // Os limites de integração podem ser arrastados sobre o eixo x.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { ppu, ox, oy } = geom(view)
    const hit = v => Math.abs(pt.x - (ox + v * ppu)) < 18 && pt.y < oy + 26 && pt.y > oy - f(v) * ppu - 16
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

// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — A Derivada como Reta Tangente
//
// Na curva f(x) = 0,2x³ − x, o ponto P está em x₀ e o ponto Q a uma
// distância h. A reta SECANTE por P e Q tem inclinação
//
//   [f(x₀+h) − f(x₀)] / h
//
// e, quando h → 0, ela se funde com a reta TANGENTE em P, cuja
// inclinação é a derivada f′(x₀) = 0,6x₀² − 1.
//
// Dois gráficos acompanham o palco:
//   · a inclinação da secante em função de h — a curva desce até
//     encostar em f′(x₀) quando h chega a zero (o limite, desenhado);
//   · a própria f′(x): cada ponto dela é a inclinação da tangente
//     naquele x. Onde ela cruza zero, a tangente fica horizontal — são
//     o máximo e o mínimo locais de f.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  handle, plot, hexA, clamp,
} from '../engine'

const A = ACCENT['matematica']

const f  = x => 0.2 * x * x * x - x
const fp = x => 0.6 * x * x - 1          // f′(x)
const X_CRIT = Math.sqrt(1 / 0.6)        // onde f′ = 0

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.60
  return {
    compact, stageW,
    ppu: clamp(Math.min(stageW / 9.5, h / 9), 14, 56),
    ox: stageW * 0.5,
    oy: h * 0.52,
  }
}

export default function DerivadaTangenteCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ drag: null, hover: null, moved: false }), [])
  const step = useCallback(() => {}, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const x0 = p.x0 ?? 1
    const hh = p.h ?? 1.5
    const { compact, stageW, ppu, ox, oy } = geom(view)
    const X = x => ox + x * ppu
    const Y = y => oy - y * ppu
    const xMin = -ox / ppu, xMax = (stageW - ox) / ppu

    const yP = f(x0)
    const xQ = x0 + hh, yQ = f(xQ)
    const mSec = (yQ - yP) / hh
    const mTan = fp(x0)

    ctx.save()
    ctx.beginPath(); ctx.rect(0, 0, stageW, h); ctx.clip()

    // ── Grade e eixos ─────────────────────────────────────────────
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) { ctx.moveTo(X(gx) + 0.5, 0); ctx.lineTo(X(gx) + 0.5, h) }
    for (let gy = Math.ceil((oy - h) / ppu); gy <= Math.floor(oy / ppu); gy++) { ctx.moveTo(0, Y(gy) + 0.5); ctx.lineTo(stageW, Y(gy) + 0.5) }
    ctx.stroke()
    ctx.strokeStyle = C.line
    ctx.beginPath()
    ctx.moveTo(0, oy + 0.5); ctx.lineTo(stageW, oy + 0.5)
    ctx.moveTo(X(0) + 0.5, 0); ctx.lineTo(X(0) + 0.5, h)
    ctx.stroke()
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) {
      if (gx !== 0) text(ctx, `${gx}`, X(gx), oy + 15, { size: 9, color: C.muted, align: 'center' })
    }

    const line = (px, py, m, color, width, dash) => {
      ctx.strokeStyle = color
      ctx.lineWidth = width
      ctx.setLineDash(dash ?? [])
      ctx.beginPath()
      ctx.moveTo(X(xMin), Y(py + m * (xMin - px)))
      ctx.lineTo(X(xMax), Y(py + m * (xMax - px)))
      ctx.stroke()
      ctx.setLineDash([])
    }

    // ── Secante (por P e Q) e tangente (em P) ─────────────────────
    line(x0, yP, mSec, Q.velocity, 1.8, [6, 5])
    line(x0, yP, mTan, Q.kinetic, 2.4)

    // ── A curva ───────────────────────────────────────────────────
    ctx.strokeStyle = A
    ctx.lineWidth = 2.6
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let px = 0; px <= stageW; px += 2) {
      const yv = Y(f((px - ox) / ppu))
      px === 0 ? ctx.moveTo(px, yv) : ctx.lineTo(px, yv)
    }
    ctx.stroke()

    // ── Triângulo do quociente: h na horizontal, Δy na vertical ───
    ctx.fillStyle = hexA(Q.velocity, 0.12)
    ctx.beginPath()
    ctx.moveTo(X(x0), Y(yP)); ctx.lineTo(X(xQ), Y(yP)); ctx.lineTo(X(xQ), Y(yQ))
    ctx.closePath(); ctx.fill()
    ctx.strokeStyle = C.ink
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(X(x0), Y(yP)); ctx.lineTo(X(xQ), Y(yP)); ctx.lineTo(X(xQ), Y(yQ))
    ctx.stroke()
    if (hh * ppu > 26) {
      text(ctx, 'h', (X(x0) + X(xQ)) / 2, Y(yP) + (yQ >= yP ? 15 : -7), { size: 10, weight: 700, color: C.ink, align: 'center' })
      text(ctx, 'Δy', X(xQ) + 7, (Y(yP) + Y(yQ)) / 2 + 4, { size: 10, weight: 700, color: C.ink })
    }

    // ── Pontos ────────────────────────────────────────────────────
    ctx.fillStyle = Q.velocity
    ctx.fillRect(X(xQ) - 4, Y(yQ) - 4, 8, 8)
    text(ctx, 'Q', X(xQ) + 9, Y(yQ) - 8, { size: 11, weight: 700, color: Q.velocity })
    ctx.fillStyle = Q.kinetic
    ctx.fillRect(X(x0) - 4.5, Y(yP) - 4.5, 9, 9)
    text(ctx, 'P', X(x0) - 9, Y(yP) - 8, { size: 11, weight: 700, color: Q.kinetic, align: 'right' })
    ctx.restore()

    handle(ctx, X(x0), Y(yP), 6, s.hover === 'p' || s.drag === 'p', Q.kinetic)
    if (X(xQ) < stageW - 6) handle(ctx, X(xQ), Y(yQ), 6, s.hover === 'q' || s.drag === 'q', Q.velocity)

    // ── Estado ────────────────────────────────────────────────────
    const gap = Math.abs(mSec - mTan)
    const est = Math.abs(mTan) < 0.04
      ? { t: 'Tangente horizontal: aqui a curva tem um máximo ou mínimo local', c: Q.potential }
      : gap < 0.05
        ? { t: 'Com h quase zero a secante virou a tangente', c: Q.potential }
        : { t: 'Aproxime Q de P: a reta tracejada gira até encostar na cheia', c: C.dim }
    const hintY = caption(ctx, est.t, 16, 24, est.c, stageW - 28)
    if (!s.moved) caption(ctx, 'Arraste P e Q sobre a curva', 16, hintY + 4, C.dim)

    readout(ctx, w - 14, 14, [
      { k: 'x₀  (ponto P)',        v: x0.toFixed(2), c: Q.kinetic },
      { k: 'h   (distância até Q)', v: hh.toFixed(2), c: Q.velocity },
      { k: 'inclinação da secante', v: mSec.toFixed(3), c: Q.velocity },
      { k: 'inclinação da tangente', v: mTan.toFixed(3), c: Q.kinetic },
      { k: 'diferença',            v: gap.toFixed(3), c: gap < 0.05 ? Q.potential : gap < 0.3 ? Q.warn : Q.danger },
      { k: 'f(x₀)',                v: yP.toFixed(3), c: A },
      { k: 'ângulo da tangente',   v: `${(Math.atan(mTan) * 180 / Math.PI).toFixed(1)}°` },
      { k: 'a curva está',         v: Math.abs(mTan) < 0.04 ? 'parada' : mTan > 0 ? 'subindo' : 'descendo' },
    ], { title: 'f(x) = 0,2x³ − x      f′(x) = 0,6x² − 1', anchor: 'right', accent: A, minWidth: 216 })

    if (compact) return

    // ── Inclinação da secante quando h encolhe ────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const sec = []
    for (let k = 0.02; k <= 3.001; k += 0.04) sec.push([k, (f(x0 + k) - yP) / k])
    const sMin = Math.min(mTan, ...sec.map(c => c[1])), sMax = Math.max(mTan, ...sec.map(c => c[1]))
    const pad = Math.max((sMax - sMin) * 0.12, 0.2)
    caption(ctx, 'A secante quando h vai a zero', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.32 }, {
      xDomain: [0, 3], yDomain: [sMin - pad, sMax + pad],
      xTicks: 3, yTicks: 2,
      fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(1),
      xLabel: 'h', yLabel: 'inclinação',
      rules: [{ y: mTan, color: Q.kinetic, label: 'f′(x₀), o limite' }],
      series: [{ points: sec, color: Q.velocity, width: 2 }],
      markers: [{ x: hh, y: mSec, color: Q.velocity, r: 4.5 }, { x: 0, y: mTan, color: Q.kinetic, r: 3.5 }],
    })

    // ── A função derivada ─────────────────────────────────────────
    const py0 = h * 0.32 + 104
    const ph  = h - py0 - 40
    if (ph > 54) {
      const der = []
      for (let x = -3.5; x <= 3.501; x += 0.1) der.push([x, fp(x)])
      caption(ctx, 'A inclinação da tangente em cada x', gx, py0 - 12, A)
      plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
        xDomain: [-3.5, 3.5], yDomain: [-1.6, 6.6],
        xTicks: 7, yTicks: 2,
        fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(0),
        xLabel: 'x', yLabel: 'f′(x)',
        rules: [
          { y: 0, color: C.faint, dash: [] },
          { x: -X_CRIT, color: hexA(Q.potential, 0.7), label: 'tangente horizontal' },
          { x: X_CRIT, color: hexA(Q.potential, 0.7) },
        ],
        series: [{ points: der, color: Q.kinetic, width: 2 }],
        markers: [{ x: x0, y: mTan, color: Q.kinetic, r: 4.5 }],
      })
    }
  }, [])

  // P muda x₀; Q muda h (a distância entre os dois).
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { ppu, ox, oy } = geom(view)
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

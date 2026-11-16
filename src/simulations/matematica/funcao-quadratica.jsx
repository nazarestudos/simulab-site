// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Explorador de Função Quadrática
//
// f(x) = ax² + bx + c, com tudo o que a álgebra prevê desenhado:
//   concavidade (sinal de a), discriminante Δ = b² − 4ac, raízes (onde
//   corta o eixo x), intercepto (0, c) e vértice xv = −b/2a.
//
// A parábola pode ser pega pelo VÉRTICE: arrastá-lo translada a curva
// inteira sem mudar a abertura. Em termos dos coeficientes isso é
//   b = −2a·xv      c = yv + a·xv²
// (a forma canônica f(x) = a·(x − xv)² + yv, reescrita). O ponto (0, c)
// também é arrastável, na vertical: mexer só em c sobe ou desce a curva.
//
// Ao lado, a parábola aparece desmontada nos seus três termos — ax²
// (uma parábola pela origem), bx (uma reta) e c (uma constante). Somar
// uma reta a uma parábola não a deforma, só a desloca: é por isso que b
// "empurra o vértice de lado".
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  glow, handle, plot, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['matematica']
const DELTA_MAX = 40

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.60
  return {
    compact, stageW,
    ppu: clamp(Math.min(stageW / 13, h / 13), 14, 54),
    ox: stageW * 0.5,
    oy: h * 0.52,
  }
}

const fmt = (v, d = 2) => v.toFixed(d).replace('.', ',').replace('-', '−')

export default function FuncaoQuadraticaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ sweep: 0, drag: null, hover: null, moved: false }), [])

  const step = useCallback((s, dt) => {
    if (!s.drag) s.sweep = (s.sweep + dt * 0.14) % 1
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const a = p.a ?? 1, b = p.b ?? -2, c = p.c ?? -3
    const f = x => a * x * x + b * x + c
    const { compact, stageW, ppu, ox, oy } = geom(view)
    const X = x => ox + x * ppu
    const Y = y => oy - y * ppu
    const xMin = -ox / ppu, xMax = (stageW - ox) / ppu
    const yMin = (oy - h) / ppu, yMax = oy / ppu

    const line = Math.abs(a) < 0.02           // a ≈ 0: virou uma reta
    const disc = b * b - 4 * a * c
    const xv = line ? 0 : -b / (2 * a)
    const yv = f(xv)
    const roots = line || disc < 0 ? []
      : disc < 1e-9 ? [xv]
      : [(-b - Math.sqrt(disc)) / (2 * a), (-b + Math.sqrt(disc)) / (2 * a)].sort((m, n) => m - n)

    ctx.save()
    ctx.beginPath(); ctx.rect(0, 0, stageW, h); ctx.clip()

    // ── Grade e eixos ─────────────────────────────────────────────
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) { ctx.moveTo(X(gx) + 0.5, 0); ctx.lineTo(X(gx) + 0.5, h) }
    for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy++) { ctx.moveTo(0, Y(gy) + 0.5); ctx.lineTo(stageW, Y(gy) + 0.5) }
    ctx.stroke()
    ctx.strokeStyle = C.line
    ctx.beginPath()
    ctx.moveTo(0, oy + 0.5); ctx.lineTo(stageW, oy + 0.5)
    ctx.moveTo(X(0) + 0.5, 0); ctx.lineTo(X(0) + 0.5, h)
    ctx.stroke()
    const every = ppu < 24 ? 2 : 1
    for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) {
      if (gx !== 0 && gx % every === 0) text(ctx, `${gx}`, X(gx), oy + 15, { size: 9, color: C.muted, align: 'center' })
    }
    for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy++) {
      if (gy !== 0 && gy % every === 0) text(ctx, `${gy}`, X(0) - 6, Y(gy) + 4, { size: 9, color: C.muted, align: 'right' })
    }

    // ── Eixo de simetria ──────────────────────────────────────────
    if (!line) {
      ctx.strokeStyle = hexA(Q.kinetic, 0.55)
      ctx.setLineDash([4, 5])
      ctx.beginPath(); ctx.moveTo(X(xv) + 0.5, 0); ctx.lineTo(X(xv) + 0.5, h); ctx.stroke()
      ctx.setLineDash([])
    }

    // ── Entre as raízes a função tem sinal contrário ao de a ──────
    if (roots.length === 2) {
      ctx.fillStyle = hexA(a > 0 ? Q.negative : Q.positive, 0.14)
      ctx.beginPath()
      ctx.moveTo(X(roots[0]), oy)
      for (let i = 0; i <= 40; i++) { const x = roots[0] + (i / 40) * (roots[1] - roots[0]); ctx.lineTo(X(x), Y(f(x))) }
      ctx.closePath(); ctx.fill()
    }

    // ── A parábola ────────────────────────────────────────────────
    ctx.strokeStyle = A
    ctx.lineWidth = 2.8
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let px = 0; px <= stageW; px += 2) {
      const yy = clamp(Y(f((px - ox) / ppu)), -50, h + 50)
      px === 0 ? ctx.moveTo(px, yy) : ctx.lineTo(px, yy)
    }
    ctx.stroke()

    // ── Ponto que varre a curva: cada x gera um único f(x) ────────
    const xs = xMin + s.sweep * (xMax - xMin)
    const ys = f(xs)
    if (Y(ys) > 10 && Y(ys) < h - 10) {
      ctx.strokeStyle = hexA(Q.velocity, 0.6)
      ctx.setLineDash([2, 4])
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(X(xs), Y(ys)); ctx.lineTo(X(xs), oy)
      ctx.moveTo(X(xs), Y(ys)); ctx.lineTo(X(0), Y(ys))
      ctx.stroke()
      ctx.setLineDash([])
      glow(ctx, X(xs), Y(ys), 4, Q.velocity, 0.9)
    }

    // ── Raízes ────────────────────────────────────────────────────
    for (const r of roots) {
      ctx.fillStyle = Q.warn
      ctx.fillRect(X(r) - 4, oy - 4, 8, 8)
      text(ctx, fmt(r), X(r), oy - 12, { size: 10, weight: 700, color: Q.warn, align: 'center' })
    }
    ctx.restore()

    // ── Intercepto (0, c) e vértice: os dois podem ser arrastados ─
    ctx.fillStyle = Q.field
    ctx.fillRect(X(0) - 4, Y(c) - 4, 8, 8)
    // à esquerda do eixo: à direita costuma estar o rótulo do vértice
    text(ctx, `c = ${fmt(c, 1)}`, X(0) - 13, Y(c) + 4, { size: 10, weight: 700, color: Q.field, align: 'right' })
    handle(ctx, X(0), Y(c), 5, s.hover === 'c' || s.drag === 'c', Q.field)
    if (!line && Y(yv) > 4 && Y(yv) < h - 4) {
      ctx.fillStyle = Q.kinetic
      ctx.fillRect(X(xv) - 4.5, Y(yv) - 4.5, 9, 9)
      text(ctx, `V (${fmt(xv)}; ${fmt(yv)})`, X(xv) + 12, Y(yv) + (a > 0 ? 18 : -10), { size: 10, weight: 700, color: Q.kinetic })
      handle(ctx, X(xv), Y(yv), 6, s.hover === 'v' || s.drag === 'v', Q.kinetic)
    }

    // ── Estado ────────────────────────────────────────────────────
    const est = line
      ? { t: 'Com a = 0 não há parábola: sobra a reta bx + c', c: Q.warn }
      : disc < -1e-9
        ? { t: `Δ negativo: a parábola fica toda ${a > 0 ? 'acima' : 'abaixo'} do eixo x, sem raízes reais`, c: Q.danger }
        : roots.length === 1
          ? { t: 'Δ = 0: o vértice encosta no eixo, uma raiz dupla', c: Q.warn }
          : { t: 'Δ positivo: a parábola corta o eixo x em duas raízes', c: Q.potential }
    const hintY = caption(ctx, est.t, 16, 24, est.c, stageW - 28)
    if (!s.moved) caption(ctx, 'Arraste o vértice V ou o ponto c', 16, hintY + 4, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    const sg = v => (v >= 0 ? '+' : '−')
    const title = `f(x) = ${fmt(a, 1)}x² ${sg(b)} ${fmt(Math.abs(b), 1)}x ${sg(c)} ${fmt(Math.abs(c), 1)}`
    readout(ctx, w - 14, 14, [
      { k: 'concavidade',        v: line ? 'reta' : a > 0 ? 'para cima' : 'para baixo', c: A },
      { k: 'Δ = b² − 4ac',       v: disc.toFixed(2), c: disc > 1e-9 ? Q.potential : disc < -1e-9 ? Q.danger : Q.warn },
      { k: 'raízes',             v: roots.length === 2 ? `${roots[0].toFixed(2)} e ${roots[1].toFixed(2)}` : roots.length === 1 ? `${roots[0].toFixed(2)} (dupla)` : 'nenhuma real', c: Q.warn },
      { k: 'vértice x = −b/2a',  v: line ? '—' : xv.toFixed(2), c: Q.kinetic },
      { k: line ? 'vértice y' : a > 0 ? 'valor mínimo' : 'valor máximo', v: line ? '—' : yv.toFixed(2), c: Q.kinetic },
      { k: 'corta o eixo y em',  v: c.toFixed(1), c: Q.field },
      { k: 'soma das raízes',    v: roots.length ? (-b / a).toFixed(2) : '—' },
      { k: 'produto das raízes', v: roots.length ? (c / a).toFixed(2) : '—' },
    ], { title, anchor: 'right', accent: A, minWidth: 214 })

    if (compact) return

    // ── Os três termos, separados ─────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const t2 = [], t1 = [], sum = []
    for (let x = -5; x <= 5.001; x += 0.2) {
      t2.push([x, a * x * x]); t1.push([x, b * x]); sum.push([x, f(x)])
    }
    caption(ctx, 'A parábola desmontada em três termos', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.36 }, {
      xDomain: [-5, 5], yDomain: [-12, 12],
      xTicks: 2, yTicks: 2,
      fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(0),
      rules: [{ y: 0, color: C.faint, dash: [] }, { x: 0, color: C.faint, dash: [] }],
      series: [
        { points: sum, color: hexA(A, 0.45), width: 4 },
        { points: t2, color: Q.kinetic, width: 1.8 },
        { points: t1, color: Q.force, width: 1.8 },
        { points: [[-5, c], [5, c]], color: Q.field, width: 1.8 },
      ],
    })
    legend(ctx, gx, 38 + h * 0.36 + 30, [
      { label: 'ax²', color: Q.kinetic },
      { label: 'bx', color: Q.force },
      { label: 'c', color: Q.field },
      { label: 'soma', color: hexA(A, 0.6) },
    ])

    // ── Régua do discriminante ────────────────────────────────────
    const ry = 38 + h * 0.36 + 78
    if (h - ry > 76) {
      caption(ctx, 'O discriminante decide quantas raízes existem', gx, ry - 12, A)
      const mid = gx + gw / 2
      ctx.fillStyle = hexA(Q.danger, 0.3);    ctx.fillRect(gx, ry, gw / 2, 14)
      ctx.fillStyle = hexA(Q.potential, 0.3); ctx.fillRect(mid, ry, gw / 2, 14)
      ctx.fillStyle = Q.warn;                 ctx.fillRect(mid - 1, ry - 4, 2, 22)
      const dx = mid + (clamp(disc, -DELTA_MAX, DELTA_MAX) / DELTA_MAX) * (gw / 2)
      ctx.fillStyle = C.ink
      ctx.fillRect(dx - 3, ry - 6, 6, 26)
      text(ctx, 'nenhuma raiz', gx, ry + 34, { size: 10, color: Q.danger })
      text(ctx, 'duas raízes', gx + gw, ry + 34, { size: 10, color: Q.potential, align: 'right' })
      text(ctx, `Δ = ${fmt(disc)}`, clamp(dx, gx + 34, gx + gw - 34), ry + 54, { size: 11, weight: 700, color: C.ink, align: 'center' })
      if (!line && h - ry > 112) {
        text(ctx, `forma canônica: ${fmt(a, 1)}·(x ${sg(-xv)} ${fmt(Math.abs(xv))})² ${sg(yv)} ${fmt(Math.abs(yv))}`,
          gx, ry + 82, { size: 10, color: C.dim })
      }
    }
  }, [])

  // Vértice: translada a parábola (muda b e c). Ponto c: sobe e desce.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { ppu, ox, oy } = geom(view)
    const a = p.a ?? 1, b = p.b ?? -2, c = p.c ?? -3
    const line = Math.abs(a) < 0.02
    const xv = line ? 0 : -b / (2 * a)
    const yv = a * xv * xv + b * xv + c
    const near = (x, y) => Math.hypot(pt.x - (ox + x * ppu), pt.y - (oy - y * ppu)) < 22
    const over = !line && near(xv, yv) ? 'v' : near(0, c) ? 'c' : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag === 'v') {
      // mantém a abertura (a) e leva o vértice até o ponteiro, dentro
      // do que os controles b e c alcançam
      const nb = clamp(-2 * a * ((pt.x - ox) / ppu), -8, 8)
      const nxv = -nb / (2 * a)
      const nyv = (oy - pt.y) / ppu
      view.setParams?.({ b: nb, c: clamp(nyv + a * nxv * nxv, -8, 8) })
    }
    if (s.drag === 'c') view.setParams?.({ c: clamp((oy - pt.y) / ppu, -8, 8) })
    if (s.drag) { s.moved = true; return 'grab' }
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

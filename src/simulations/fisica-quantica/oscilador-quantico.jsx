// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Oscilador harmônico quântico
//
// Uma massa presa a uma mola, tratada pela mecânica quântica. É o
// modelo de uma ligação química vibrando, de um modo da luz, de um
// átomo num cristal. As energias formam uma escada de degraus IGUAIS:
//
//   Eₙ = ħω · (n + ½)        n = 0, 1, 2, …
//
// e as funções de onda são polinômios de Hermite vezes uma gaussiana:
//
//   ψₙ(ξ) = Nₙ · Hₙ(ξ) · e^(−ξ²/2)        ξ = x / x₀ ,  x₀ = √(ħ/mω)
//
// O que olhar:
//  · n = 0 não é repouso: sobra a energia de ponto zero, ½ħω;
//  · a onda VAZA para além do ponto em que uma massa clássica daria
//    meia-volta (região classicamente proibida) — 15,7 % em n = 0;
//  · em n alto, |ψ|² se acumula nas pontas, como a distribuição clássica
//    (que passa mais tempo onde anda devagar): princípio da
//    correspondência.
//
// As ψₙ são calculadas pela recorrência normalizada, estável em n alto:
//   φ₀ = π^(−¼)·e^(−ξ²/2) ,  φₖ₊₁ = √(2/(k+1))·ξ·φₖ − √(k/(k+1))·φₖ₋₁
//
// Interação: arraste a marca do nível para subir ou descer a escada.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, handle,
} from '../engine'

const A = ACCENT['fisica-quantica']
const N_MAX = 10
const HC = 1239.84198       // eV·nm
const H_EV = 4.135668e-15   // eV·s
const PI_QUARTER = Math.pow(Math.PI, -0.25)

/** ψₙ(ξ), normalizada (∫ψ² dξ = 1). */
function psi(n, xi) {
  let prev = 0
  let cur = PI_QUARTER * Math.exp(-xi * xi / 2)
  for (let k = 0; k < n; k++) {
    const next = Math.sqrt(2 / (k + 1)) * xi * cur - Math.sqrt(k / (k + 1)) * prev
    prev = cur; cur = next
  }
  return cur
}

/** Probabilidade de encontrar a partícula além dos pontos de retorno. */
function outside(n) {
  const a = Math.sqrt(2 * n + 1)
  let sum = 0
  const steps = 400, top = a + 7, dx = (top - a) / steps
  for (let i = 0; i <= steps; i++) {
    const v = psi(n, a + i * dx) ** 2
    sum += (i === 0 || i === steps ? 1 : i % 2 ? 4 : 2) * v       // Simpson
  }
  return 2 * (sum * dx) / 3                                         // os dois lados
}
const OUTSIDE = Array.from({ length: N_MAX + 1 }, (_, n) => outside(n))

// O enquadramento acompanha o nível: mostra dele até uns dois degraus
// acima, para o estado fundamental não ficar espremido no fundo.
function geom(view, nRef) {
  const { w, h } = view
  const compact = w < 700
  const stageW = compact ? w : w * 0.62
  const cx = stageW / 2
  const nView = Math.max(5, nRef + 2.2)            // quanta visíveis na vertical
  const xiView = Math.sqrt(2 * nView) + 0.9        // meia-largura visível, em x₀
  const pxPerXi = (stageW - 50) / (2 * xiView)
  const base = h * 0.84, top = h * 0.13
  const eu = (base - top) / nView                  // px por quantum ħω
  return { compact, stageW, cx, pxPerXi, base, top, eu, nView, xiView }
}

const readN = p => clamp(Math.round(p.nivel ?? 0), 0, N_MAX)

export default function OsciladorQuanticoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ drag: false, hover: false, moved: false, viewN: 0 }), [])
  const step = useCallback(() => {}, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    const n = readN(p)
    // durante o arraste o enquadramento fica congelado (senão a escala
    // mudaria debaixo do ponteiro)
    const { compact, stageW, cx, pxPerXi, base, top, eu, nView, xiView } = geom(view, s.drag ? s.viewN : n)
    const XI_MAX = xiView
    const quantum = p.quantum ?? 0.27                 // ħω, em eV
    const showPsi = (p.psi ?? 0) > 0
    const showClassic = (p.classico ?? 1) > 0

    const X = xi => cx + xi * pxPerXi
    const Y = e => base - e * eu                      // e em unidades de ħω
    const amp = Math.sqrt(2 * n + 1)                  // ponto de retorno clássico, em x₀
    const yN = Y(n + 0.5)

    // ── Potencial V = ½·ξ² (em unidades de ħω) ────────────────────
    ctx.strokeStyle = hexA(C.ink, 0.55); ctx.lineWidth = 1.6
    ctx.beginPath()
    const xiTop = Math.sqrt(2 * nView)
    for (let i = 0; i <= 120; i++) {
      const xi = -xiTop + (i / 120) * 2 * xiTop
      const px = X(xi), py = Y(xi * xi / 2)
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
    }
    ctx.stroke()
    ctx.strokeStyle = C.faint; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(X(-XI_MAX), base + 0.5); ctx.lineTo(X(XI_MAX), base + 0.5); ctx.stroke()
    text(ctx, 'posição x', X(XI_MAX), base + 16, { size: 9, color: C.muted, align: 'right' })

    // ── A escada: degraus iguais, de ħω ───────────────────────────
    for (let k = 0; k <= N_MAX && k + 0.5 < nView; k++) {
      const a = Math.sqrt(2 * k + 1)
      const y = Math.round(Y(k + 0.5)) + 0.5
      ctx.strokeStyle = k === n ? A : hexA(C.ink, 0.2)
      ctx.lineWidth = k === n ? 1.8 : 1
      ctx.beginPath(); ctx.moveTo(X(-a), y); ctx.lineTo(X(a), y); ctx.stroke()
    }

    // ── |ψₙ|² (ou ψₙ), sobre o nível atual ────────────────────────
    // altura mínima em px: nos níveis altos o degrau fica pequeno, a curva não
    const dScale = Math.max(eu * (showPsi ? 1.1 : 1.6), showPsi ? 60 : 95)
    const curve = []
    for (let i = 0; i <= 320; i++) {
      const xi = -XI_MAX + (i / 320) * 2 * XI_MAX
      const v = psi(n, xi)
      curve.push([xi, showPsi ? v : v * v])
    }
    // região classicamente proibida: as duas caudas além de ±A
    if (!showPsi) {
      for (const side of [-1, 1]) {
        const tail = curve.filter(([xi]) => side * xi >= amp)       // já vem em ordem de x
        if (tail.length < 2) continue
        ctx.beginPath(); ctx.moveTo(X(tail[0][0]), yN)
        for (const [xi, v] of tail) ctx.lineTo(X(xi), yN - v * dScale)
        ctx.lineTo(X(tail[tail.length - 1][0]), yN); ctx.closePath()
        ctx.fillStyle = hexA(Q.negative, 0.6); ctx.fill()
      }
    }
    ctx.beginPath()
    curve.forEach(([xi, v], i) => { const px = X(xi), py = yN - v * dScale; i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py) })
    if (!showPsi) {
      ctx.lineTo(X(XI_MAX), yN); ctx.lineTo(X(-XI_MAX), yN); ctx.closePath()
      ctx.fillStyle = hexA(A, 0.22); ctx.fill()
    }
    ctx.strokeStyle = A; ctx.lineWidth = 2; ctx.lineJoin = 'round'; ctx.stroke()

    // ── Distribuição clássica com a mesma energia ─────────────────
    // P(x) = 1 / (π·√(A² − x²)): a massa passa mais tempo nas pontas.
    if (showClassic && !showPsi) {
      ctx.save()
      ctx.beginPath(); ctx.rect(0, yN - dScale * 0.62, stageW, dScale * 0.62); ctx.clip()
      ctx.strokeStyle = Q.warn; ctx.lineWidth = 1.5; ctx.setLineDash([5, 4])
      ctx.beginPath()
      for (let i = 1; i < 200; i++) {
        const xi = -amp + (i / 200) * 2 * amp
        const v = 1 / (Math.PI * Math.sqrt(amp * amp - xi * xi))
        i === 1 ? ctx.moveTo(X(xi), yN - v * dScale) : ctx.lineTo(X(xi), yN - v * dScale)
      }
      ctx.stroke()
      ctx.restore()
    }

    // pontos de retorno clássicos
    for (const side of [-1, 1]) {
      ctx.strokeStyle = hexA(C.ink, 0.5); ctx.lineWidth = 1; ctx.setLineDash([2, 3])
      ctx.beginPath(); ctx.moveTo(X(side * amp), yN + 6); ctx.lineTo(X(side * amp), yN - dScale * 0.6); ctx.stroke()
      ctx.setLineDash([])
    }
    handle(ctx, X(amp), yN, 7, s.hover || s.drag, A)
    text(ctx, `n = ${n}`, X(amp) + 16, yN + 4, { size: 10, weight: 700, color: A })

    caption(ctx, n === 0 ? 'estado fundamental: mesmo no nível mais baixo ela não fica parada'
      : n >= 7 ? 'n alto: a probabilidade se acumula nas pontas, como no caso clássico'
      : `nível ${n}: ${n} nó${n === 1 ? '' : 's'}, energia ${(n + 0.5).toFixed(1)} ħω`, 16, 24, A)
    if (!s.moved) caption(ctx, 'arraste a marca do nível para subir ou descer a escada', 16, 44, C.dim)
    legend(ctx, 16, h - 14, [
      { label: showPsi ? 'ψ (a onda)' : '|ψ|² quântico', color: A },
      ...(showPsi ? [] : [{ label: 'além do ponto de retorno', color: Q.negative }]),
      ...(showClassic && !showPsi ? [{ label: 'clássico', color: Q.warn }] : []),
    ])

    // ── Leituras ──────────────────────────────────────────────────
    const lamNm = HC / quantum
    readout(ctx, w - 14, 14, [
      { k: 'nível n', v: `${n}`, c: A },
      { k: 'quantum ħω', v: `${quantum.toFixed(2)} eV` },
      { k: 'Eₙ = ħω(n + ½)', v: `${(quantum * (n + 0.5)).toFixed(3)} eV`, c: A },
      { k: 'energia de ponto zero', v: `${(quantum / 2).toFixed(3)} eV` },
      { k: 'nós da onda', v: `${n}` },
      { k: 'amplitude clássica', v: `${amp.toFixed(2)} x₀` },
      { k: 'chance além do retorno', v: `${(OUTSIDE[n] * 100).toFixed(1)} %`, c: Q.negative },
      { k: 'frequência de vibração', v: `${(quantum / H_EV / 1e13).toFixed(2)}e13 Hz` },
      { k: 'fóton de um degrau', v: `${(lamNm / 1000).toFixed(2)} µm (infravermelho)` },
    ], { title: 'Eₙ = ħω · (n + ½)', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ Quanto vaza, nível a nível ═══════════════════════════════
    const px = stageW + 46
    const pw = w - px - 26
    const py = 44, ph = h * 0.42
    caption(ctx, 'chance de estar na região proibida', px, 26, Q.negative)
    plot(ctx, { x: px, y: py, w: pw, h: ph }, {
      xDomain: [0, N_MAX], yDomain: [0, 0.18],
      xTicks: 5, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => `${(q * 100).toFixed(0)} %`,
      xLabel: 'nível n',
      series: [{ points: OUTSIDE.map((v, k) => [k, v]), color: hexA(Q.negative, 0.9), width: 1.8 }],
      markers: [{ x: n, y: OUTSIDE[n], color: C.ink, r: 4 }],
    })
    let ny = py + ph + 48
    for (const line of ['Quanto mais alto o nível, menos', 'a onda vaza e mais ela se parece', 'com uma massa numa mola comum.']) {
      text(ctx, line, px, ny, { size: 9, color: C.muted }); ny += 14
    }
  }, [])

  // Arrastar a marca (no ponto de retorno) na vertical escolhe o nível.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const n = readN(p)
    const { cx, pxPerXi, base, eu } = geom(view, s.drag ? s.viewN : n)
    const hx = cx + Math.sqrt(2 * n + 1) * pxPerXi, hy = base - (n + 0.5) * eu
    const over = Math.hypot(pt.x - hx, pt.y - hy) < 24

    if (kind === 'down') { s.drag = over; s.viewN = n }   // congela o enquadramento atual
    if (kind === 'up') s.drag = false
    if (s.drag) {
      view.setParams?.({ nivel: clamp(Math.round((base - pt.y) / eu - 0.5), 0, N_MAX) })
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

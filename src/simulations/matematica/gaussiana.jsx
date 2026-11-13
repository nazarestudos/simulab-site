// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Máquina de Galton e o Teorema Central do Limite
//
// Cada bolinha cai por 12 fileiras de pinos. Em cada pino ela vai para a
// direita com probabilidade p, e para a esquerda com 1 − p. Só isso.
//
// O resultado é uma variável BINOMIAL: X ~ B(n, p). E a mágica é que,
// para n grande, a binomial converge para a NORMAL:
//
//     µ = n·p          σ = √(n·p·(1−p))
//
// Esse é o TEOREMA CENTRAL DO LIMITE em ação: some muitos acasos
// independentes e o resultado é uma curva em sino — não importa que
// cada evento individual seja um simples cara-ou-coroa.
//
// É por isso que altura, erro de medição e ruído térmico são todos
// gaussianos: são somas de muitos empurrõezinhos aleatórios.
//
// Com viés (p ≠ 0,5) a curva ANDA e ENCOLHE — µ desloca e σ diminui,
// porque um pino viciado é mais previsível.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, glow,
} from '../engine'

const A = ACCENT['matematica']

const ROWS = 12
const BINS = ROWS + 1

/** Coeficiente binomial C(n,k), estável para n pequeno. */
function binom(n, k) {
  let r = 1
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i
  return r
}

export default function GaussianaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    balls: [],
    bins: new Array(BINS).fill(0),
    total: 0,
    sum: 0,
    sumSq: 0,
    bias: 50,
    spawn: 0,
  }), [])

  const step = useCallback((s, dt, p) => {
    const bias = p.bias ?? 50
    const rate = p.rate ?? 5

    // Mudar o viés invalida a amostra — recomeça a estatística.
    if (bias !== s.bias) {
      s.bias = bias
      s.bins = new Array(BINS).fill(0)
      s.balls = []
      s.total = 0; s.sum = 0; s.sumSq = 0
      return
    }

    const pRight = bias / 100

    // Lança bolinhas
    s.spawn += dt * rate * 3
    while (s.spawn >= 1) {
      s.spawn -= 1
      s.balls.push({ row: 0, k: 0, x: 0, y: 0, prog: 0 })
    }

    // Avança cada bolinha um pino por vez
    for (const b of s.balls) {
      if (b.row >= ROWS) { b.y += dt * 5.2; continue }
      b.prog += dt * 5.5
      if (b.prog >= 1) {
        b.prog = 0
        // A decisão: direita com probabilidade p
        const right = Math.random() < pRight
        if (right) b.k++
        b.x += right ? 0.5 : -0.5
        b.row++
        if (b.row === ROWS) {
          s.bins[b.k]++
          s.total++
          s.sum += b.k
          s.sumSq += b.k * b.k
        }
      }
    }

    // Remove as que chegaram ao fundo
    s.balls = s.balls.filter(b => !(b.row >= ROWS && b.y > 1.6))
    if (s.balls.length > 320) s.balls.splice(0, s.balls.length - 320)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const bias = p.bias ?? 50
    const pRight = bias / 100

    // Previsão teórica
    const mu = ROWS * pRight
    const sigma = Math.sqrt(ROWS * pRight * (1 - pRight))

    // Estatística MEDIDA na amostra
    const mean = s.total > 0 ? s.sum / s.total : 0
    const varr = s.total > 1 ? (s.sumSq / s.total) - mean * mean : 0
    const sd = Math.sqrt(Math.max(varr, 0))

    const compact = w < 720
    const stageW = compact ? w : w * 0.54

    // ── Geometria da máquina ─────────────────────────────────────
    const cx = stageW * 0.5
    const top = h * 0.10
    const pegGap = Math.min((stageW * 0.80) / ROWS, (h * 0.44) / ROWS, 26)
    const boardH = pegGap * ROWS

    // Pinos
    for (let r = 0; r < ROWS; r++) {
      for (let i = 0; i <= r; i++) {
        const px = cx + (i - r / 2) * pegGap
        const py = top + r * pegGap
        ctx.fillStyle = hexA(C.ink, 0.20)
        ctx.beginPath(); ctx.arc(px, py, 1.8, 0, Math.PI * 2); ctx.fill()
      }
    }

    // ── Bolinhas ─────────────────────────────────────────────────
    for (const b of s.balls) {
      const px = cx + b.x * pegGap + (b.row < ROWS ? 0 : 0)
      const py = top + (b.row + b.prog) * pegGap + (b.row >= ROWS ? b.y * pegGap : 0)
      glow(ctx, px, py, 2.6, A, 0.7)
    }

    // ── Histograma ───────────────────────────────────────────────
    const hy = top + boardH + 22
    const hh = h - hy - 34
    const bw = pegGap * 0.86
    const maxBin = Math.max(1, ...s.bins)

    for (let k = 0; k < BINS; k++) {
      const bx = cx + (k - ROWS / 2) * pegGap - bw / 2
      const frac = s.bins[k] / maxBin
      const bh = frac * hh
      ctx.fillStyle = 'rgba(255,255,255,0.04)'
      ctx.fillRect(bx, hy, bw, hh)
      ctx.fillStyle = hexA(A, 0.75)
      ctx.fillRect(bx, hy + hh - bh, bw, bh)
    }

    // ── A curva teórica, POR CIMA do histograma ──────────────────
    // Binomial exata (pontos) + normal contínua (linha). Elas coincidem —
    // é o Teorema Central do Limite, desenhado.
    ctx.strokeStyle = Q.warn
    ctx.lineWidth = 1.8
    ctx.beginPath()
    for (let i = 0; i <= 160; i++) {
      const k = (i / 160) * ROWS
      const pdf = Math.exp(-((k - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI))
      // normaliza pela mesma escala do histograma (probabilidade do modo)
      const pMode = Math.exp(0) / (sigma * Math.sqrt(2 * Math.PI))
      const X = cx + (k - ROWS / 2) * pegGap
      const Y = hy + hh - (pdf / pMode) * hh * 0.94
      i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
    }
    ctx.stroke()

    // Binomial exata, ponto a ponto
    const pMax = Math.max(...Array.from({ length: BINS }, (_, k) =>
      binom(ROWS, k) * pRight ** k * (1 - pRight) ** (ROWS - k)))
    for (let k = 0; k < BINS; k++) {
      const pk = binom(ROWS, k) * pRight ** k * (1 - pRight) ** (ROWS - k)
      const X = cx + (k - ROWS / 2) * pegGap
      const Y = hy + hh - (pk / pMax) * hh * 0.94
      ctx.fillStyle = Q.kinetic
      ctx.beginPath(); ctx.arc(X, Y, 2.4, 0, Math.PI * 2); ctx.fill()
    }

    // µ e ±σ
    const muX = cx + (mu - ROWS / 2) * pegGap
    ctx.strokeStyle = hexA(Q.warn, 0.8)
    ctx.setLineDash([3, 3])
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(muX, hy); ctx.lineTo(muX, hy + hh); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, 'µ', muX, hy - 5, { size: 9, weight: 700, color: Q.warn, align: 'center' })

    for (const sgn of [-1, 1]) {
      const sx = cx + (mu + sgn * sigma - ROWS / 2) * pegGap
      ctx.strokeStyle = hexA(C.ink, 0.18)
      ctx.setLineDash([2, 4])
      ctx.beginPath(); ctx.moveTo(sx, hy + hh * 0.35); ctx.lineTo(sx, hy + hh); ctx.stroke()
      ctx.setLineDash([])
    }
    text(ctx, `σ = ${sigma.toFixed(2)}`, cx + (mu + sigma - ROWS / 2) * pegGap + 4, hy + hh * 0.42,
      { size: 8, color: C.muted })

    caption(ctx, `${ROWS} fileiras · p(direita) = ${pRight.toFixed(2)}`, 16, 24, A)

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'n  fileiras',  v: ROWS },
      { k: 'p  ir p/ direita', v: pRight.toFixed(2), c: A },
      { k: 'µ = n·p  previsto', v: mu.toFixed(2), c: Q.warn },
      { k: 'média medida', v: s.total > 0 ? mean.toFixed(3) : '—', c: Q.kinetic },
      { k: 'σ = √(np(1−p))', v: sigma.toFixed(3), c: Q.warn },
      { k: 'σ medido',     v: s.total > 1 ? sd.toFixed(3) : '—', c: Q.kinetic },
      { k: 'amostras',     v: s.total },
    ], { title: 'Binomial → Normal', anchor: 'right', accent: A, minWidth: 202 })

    if (compact) return

    // ══ Convergência: a média medida se aproxima de µ ════════════
    const gx = stageW + 46
    const gw = w - gx - 26

    caption(ctx, 'Distribuição binomial exata', gx, 26, Q.kinetic)

    const bars = Array.from({ length: BINS }, (_, k) => [
      k, binom(ROWS, k) * pRight ** k * (1 - pRight) ** (ROWS - k),
    ])
    const norm = []
    for (let i = 0; i <= 120; i++) {
      const k = (i / 120) * ROWS
      norm.push([k, Math.exp(-((k - mu) ** 2) / (2 * sigma * sigma)) / (sigma * Math.sqrt(2 * Math.PI))])
    }
    const emp = s.total > 0
      ? s.bins.map((c, k) => [k, c / s.total])
      : []

    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.36 }, {
      xDomain: [0, ROWS], yDomain: [0, Math.max(pMax, ...norm.map(n => n[1])) * 1.2],
      xTicks: 4, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(2),
      xLabel: 'k (desvios à direita)', yLabel: 'P(k)',
      series: [
        { points: norm, color: hexA(Q.warn, 0.9), width: 1.8 },
        { points: bars, color: hexA(Q.kinetic, 0.9), width: 1.5 },
        ...(emp.length ? [{ points: emp, color: hexA(A, 0.9), width: 1.8 }] : []),
      ],
    })

    let ty = h * 0.36 + 66
    const key = (col, lbl) => {
      ctx.fillStyle = col
      ctx.fillRect(gx, ty - 5, 9, 2.5)
      text(ctx, lbl, gx + 15, ty, { size: 9, color: C.dim })
      ty += 15
    }
    key(Q.kinetic, 'binomial B(12, p) — exata')
    key(Q.warn, 'normal N(µ, σ²) — o limite')
    key(A, 'frequência observada')

    ty += 12
    text(ctx, 'as três coincidem — é isso que o', gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'Teorema Central do Limite afirma.', gx, ty, { size: 8.5, color: C.muted })
    ty += 22
    text(ctx, `com p = ${pRight.toFixed(2)}, σ ${pRight === 0.5 ? 'é máximo' : 'diminui'}:`,
      gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'um pino viciado é mais previsível.', gx, ty, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

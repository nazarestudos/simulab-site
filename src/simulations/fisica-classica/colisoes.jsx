// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Conservação de Momento e Colisões
//
// Os carrinhos correm numa PISTA FECHADA (um anel desenrolado). Essa
// escolha não é estética: paredes aplicariam força externa e destruiriam
// exatamente aquilo que a simulação quer provar. Num anel, o sistema é
// isolado e o momento total é rigorosamente invariante — para sempre.
//
// Colisão com coeficiente de restituição e:
//   v₁' = [m₁v₁ + m₂v₂ + m₂·e·(v₂ − v₁)] / (m₁ + m₂)
//   v₂' = [m₁v₁ + m₂v₂ + m₁·e·(v₁ − v₂)] / (m₁ + m₂)
//
// Energia perdida (previsão analítica):
//   ΔK = ½·μ·(1 − e²)·v_rel²,   μ = m₁m₂/(m₁+m₂)   ← massa reduzida
//
// O HUD compara ΔK medido com ΔK previsto. Eles batem: é o teste de
// que o integrador não está inventando física.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, grid, text, caption, readout,
  bars, plot, legend, arrow, hexA, clamp,
} from '../engine'

const A      = ACCENT['fisica-classica']
const TRACK  = 12      // m — comprimento do anel
const M1      = 1.0    // kg
const V1_0    = 3.0    // m/s
const HALF    = 0.35   // m — meia-largura de um carrinho

/** Diferença circular mais curta, em [−L/2, L/2). */
const wrapDiff = (d, L) => ((d + L / 2) % L + L) % L - L / 2

export default function ColisoesCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => ({
    x1: 1.0, v1: V1_0,
    x2: 5.0, v2: 0,
    ratio: p.massRatio ?? 2,
    e: (p.restitution ?? 80) / 100,
    t: 0,
    hits: 0,
    lastDK: null,      // ΔK medido na última colisão
    predDK: null,      // ΔK previsto analiticamente
    flash: 0,          // brilho do impacto
    hist: [],          // [t, p_total, K_total]
  }), [])

  const step = useCallback((s, dt, p) => {
    const ratio = p.massRatio ?? 2
    const e     = clamp((p.restitution ?? 80) / 100, 0, 1)

    // Trocar a massa ou a restituição refaz o experimento do zero.
    if (ratio !== s.ratio || Math.abs(e - s.e) > 1e-9) {
      s.ratio = ratio; s.e = e
      s.x1 = 1.0; s.v1 = V1_0
      s.x2 = 5.0; s.v2 = 0
      s.t = 0; s.hits = 0; s.lastDK = null; s.predDK = null
      s.hist = []
      return
    }

    const m1 = M1, m2 = M1 * ratio

    s.x1 = (s.x1 + s.v1 * dt + TRACK) % TRACK
    s.x2 = (s.x2 + s.v2 * dt + TRACK) % TRACK

    // ── Colisão ───────────────────────────────────────────────────
    const d = wrapDiff(s.x2 - s.x1, TRACK)      // de 1 para 2
    const gap = Math.abs(d) - 2 * HALF
    const approaching = (s.v2 - s.v1) * Math.sign(d) < 0

    if (gap < 0 && approaching) {
      const vRel = s.v1 - s.v2
      const K0 = 0.5 * m1 * s.v1 ** 2 + 0.5 * m2 * s.v2 ** 2

      const P = m1 * s.v1 + m2 * s.v2
      const M = m1 + m2
      const n1 = (P + m2 * e * (s.v2 - s.v1)) / M
      const n2 = (P + m1 * e * (s.v1 - s.v2)) / M
      s.v1 = n1
      s.v2 = n2

      const K1 = 0.5 * m1 * s.v1 ** 2 + 0.5 * m2 * s.v2 ** 2
      s.lastDK = K0 - K1
      // Previsão analítica com a massa reduzida μ
      const mu = (m1 * m2) / M
      s.predDK = 0.5 * mu * (1 - e * e) * vRel * vRel

      // Separa os corpos para não grudarem por sobreposição numérica
      const push = (-gap / 2 + 1e-4) * Math.sign(d)
      s.x1 = (s.x1 - push + TRACK) % TRACK
      s.x2 = (s.x2 + push + TRACK) % TRACK

      s.hits++
      s.flash = 1
    }

    s.flash = Math.max(0, s.flash - dt * 3.5)
    s.t += dt

    if (s.hist.length === 0 || s.t - s.hist[s.hist.length - 1][0] > 0.03) {
      const pTot = m1 * s.v1 + m2 * s.v2
      const kTot = 0.5 * m1 * s.v1 ** 2 + 0.5 * m2 * s.v2 ** 2
      s.hist.push([s.t, pTot, kTot])
      if (s.hist.length > 700) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    grid(ctx, view, 36)

    const m1 = M1, m2 = M1 * s.ratio
    const pTot = m1 * s.v1 + m2 * s.v2
    const kTot = 0.5 * m1 * s.v1 ** 2 + 0.5 * m2 * s.v2 ** 2
    const k0   = 0.5 * M1 * V1_0 ** 2          // energia inicial do sistema
    const vcm  = pTot / (m1 + m2)

    const compact = w < 700
    const stageW = compact ? w : w * 0.58
    const pad = 24
    const tw = stageW - pad * 2
    const ppm = tw / TRACK
    const ty = h * 0.34

    // ── Pista ─────────────────────────────────────────────────────
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(pad, ty + 0.5); ctx.lineTo(pad + tw, ty + 0.5)
    ctx.stroke()
    for (let mk = 0; mk <= TRACK; mk += 2) {
      const mx = pad + mk * ppm
      ctx.fillStyle = C.muted
      ctx.fillRect(mx, ty + 2, 1, 4)
      text(ctx, `${mk}`, mx, ty + 18, { size: 8, color: C.muted, align: 'center' })
    }
    text(ctx, 'pista fechada · sem atrito · sem forças externas', pad, ty + 34,
      { size: 8.5, color: C.muted })

    // Centro de massa — anda em linha reta, indiferente às colisões.
    // É a assinatura visual da conservação do momento.
    const xcmRaw = pad + (((m1 * s.x1 + m2 * wrapNear(s.x2, s.x1)) / (m1 + m2)) % TRACK + TRACK) % TRACK * ppm
    ctx.strokeStyle = hexA(Q.field, 0.6)
    ctx.setLineDash([3, 3])
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(xcmRaw, ty - 66); ctx.lineTo(xcmRaw, ty + 8); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, 'CM', xcmRaw, ty - 72, { size: 8.5, weight: 700, color: Q.field, align: 'center' })

    // ── Carrinhos ─────────────────────────────────────────────────
    const drawCart = (x, v, m, color, label) => {
      const cw = HALF * 2 * ppm
      const ch = clamp(20 + Math.cbrt(m) * 12, 24, 52)
      const cx = pad + x * ppm
      const cy = ty - ch

      ctx.fillStyle = hexA(color, 0.18)
      ctx.fillRect(cx - cw / 2, cy, cw, ch)
      ctx.strokeStyle = hexA(color, 0.8)
      ctx.lineWidth = 1.3
      ctx.strokeRect(cx - cw / 2 + 0.5, cy + 0.5, cw, ch)
      text(ctx, `${m.toFixed(1)} kg`, cx, cy + ch / 2 + 4,
        { size: 9, weight: 700, color: C.ink, align: 'center' })
      text(ctx, label, cx, cy - 22, { size: 9, weight: 700, color, align: 'center' })

      // rodas
      ctx.fillStyle = hexA(C.ink, 0.25)
      ctx.beginPath(); ctx.arc(cx - cw / 4, ty - 2, 2.5, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(cx + cw / 4, ty - 2, 2.5, 0, Math.PI * 2); ctx.fill()

      // vetor de momento p = m·v  (comprimento ∝ momento, não a velocidade)
      const pv = m * v
      if (Math.abs(pv) > 0.03) {
        arrow(ctx, cx, cy - 10, cx + pv * 16, cy - 10,
          { color: Q.velocity, width: 2, label: `${pv.toFixed(1)}` })
      }
    }
    drawCart(s.x1, s.v1, m1, A, 'm₁')
    drawCart(s.x2, s.v2, m2, Q.potential, 'm₂')

    // Flash do impacto
    if (s.flash > 0.01) {
      const ix = pad + ((s.x1 + wrapDiff(s.x2 - s.x1, TRACK) / 2 + TRACK) % TRACK) * ppm
      ctx.strokeStyle = hexA(Q.warn, s.flash)
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(ix, ty - 24, 12 + (1 - s.flash) * 26, 0, Math.PI * 2)
      ctx.stroke()
    }

    // ── Barras: o momento não se move, a energia despenca ─────────
    const bx = pad, by = h * 0.60
    caption(ctx, 'Momento  p = m·v', bx, by - 10, Q.velocity)
    bars(ctx, bx, by, 96, 58, [
      { label: 'p₁', value: Math.abs(m1 * s.v1), max: Math.abs(M1 * V1_0), color: hexA(A, 0.85) },
      { label: 'p₂', value: Math.abs(m2 * s.v2), max: Math.abs(M1 * V1_0), color: hexA(Q.potential, 0.85) },
      { label: 'Σp', value: Math.abs(pTot),      max: Math.abs(M1 * V1_0), color: Q.velocity },
    ], { barWidth: 18 })

    const ex = bx + 130
    caption(ctx, 'Energia cinética  K', ex, by - 10, Q.kinetic)
    bars(ctx, ex, by, 96, 58, [
      { label: 'K₁', value: 0.5 * m1 * s.v1 ** 2, max: k0, color: hexA(A, 0.85) },
      { label: 'K₂', value: 0.5 * m2 * s.v2 ** 2, max: k0, color: hexA(Q.potential, 0.85) },
      { label: 'ΣK', value: kTot,                 max: k0, color: Q.kinetic },
    ], { barWidth: 18 })

    // ── Leituras ──────────────────────────────────────────────────
    const lost = k0 > 0 ? (1 - kTot / k0) * 100 : 0
    readout(ctx, w - 14, 14, [
      { k: 'e  restituição', v: s.e.toFixed(2), c: A },
      { k: 'v₁', v: `${s.v1.toFixed(2)} m/s` },
      { k: 'v₂', v: `${s.v2.toFixed(2)} m/s` },
      { k: 'Σp  momento',   v: `${pTot.toFixed(3)} kg·m/s`, c: Q.velocity },
      { k: 'ΣK  energia',   v: `${kTot.toFixed(3)} J`, c: Q.kinetic },
      { k: 'K dissipada',   v: `${lost.toFixed(1)} %`, c: Q.thermal },
      { k: 'v_cm',          v: `${vcm.toFixed(2)} m/s`, c: Q.field },
      { k: 'colisões',      v: s.hits },
    ], { title: `m₂/m₁ = ${s.ratio.toFixed(1)}`, anchor: 'right', accent: A, minWidth: 196 })

    // Aferição: ΔK medido × ΔK previsto analiticamente. Fica na coluna da
    // esquerda, abaixo das barras — a direita é território dos gráficos.
    if (s.lastDK !== null) {
      const vy = by + 92
      caption(ctx, 'última colisão', bx, vy, C.muted)
      text(ctx, `ΔK medido    ${s.lastDK.toFixed(4)} J`, bx, vy + 16,
        { size: 9, weight: 700, color: Q.thermal })
      text(ctx, `½μ(1−e²)v²ᵣ  ${s.predDK.toFixed(4)} J`, bx, vy + 30,
        { size: 9, weight: 700, color: Q.thermal })
    }

    // Regime
    const regime = s.e >= 0.995
      ? { t: 'perfeitamente elástica — K se conserva', c: Q.potential }
      : s.e <= 0.005
        ? { t: 'perfeitamente inelástica — corpos seguem juntos', c: Q.danger }
        : { t: 'parcialmente elástica — K vira calor e som', c: Q.thermal }
    caption(ctx, regime.t, pad, 26, regime.c)

    if (compact) return

    // ── Séries temporais: a prova visual ──────────────────────────
    const px = stageW + 46
    const pw = w - px - 26
    const t1 = Math.max(8, s.t)
    const t0 = Math.max(0, t1 - 8)

    caption(ctx, 'Momento total  Σp', px, 26, Q.velocity)
    plot(ctx, { x: px, y: 36, w: pw, h: h * 0.30 }, {
      xDomain: [t0, t1], yDomain: [0, M1 * V1_0 * 1.4],
      xTicks: 3, yTicks: 3,
      fmtX: v => `${v.toFixed(0)}s`, fmtY: v => v.toFixed(1),
      yLabel: 'kg·m/s',
      series: [{ points: s.hist.map(d => [d[0], d[1]]), color: Q.velocity, width: 2 }],
    })
    text(ctx, 'reta perfeita — nenhuma colisão a altera', px, h * 0.30 + 58,
      { size: 8.5, color: C.muted })

    const py = h * 0.30 + 88
    caption(ctx, 'Energia cinética total  ΣK', px, py - 10, Q.kinetic)
    plot(ctx, { x: px, y: py, w: pw, h: h - py - 52 }, {
      xDomain: [t0, t1], yDomain: [0, k0 * 1.15],
      xTicks: 3, yTicks: 3,
      fmtX: v => `${v.toFixed(0)}s`, fmtY: v => v.toFixed(1),
      xLabel: 'tempo (s)', yLabel: 'J',
      rules: [{ y: 0.5 * (m1 + m2) * vcm * vcm, color: hexA(Q.field, 0.6), label: 'piso: ½Mv²cm' }],
      series: [{ points: s.hist.map(d => [d[0], d[2]]), color: Q.kinetic, width: 2, fill: true }],
    })
    legend(ctx, px, h - 14, [{ label: 'degraus = colisões', color: Q.kinetic }])
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

/** Posição de x2 "desembrulhada" perto de x1, para o cálculo do CM no anel. */
function wrapNear(x2, x1) {
  return x1 + wrapDiff(x2 - x1, TRACK)
}

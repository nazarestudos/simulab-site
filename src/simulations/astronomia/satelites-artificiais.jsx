// ═══════════════════════════════════════════════════════════════════
// ASTRONOMIA — Satélites Artificiais e Decaimento Orbital
//
// Órbita circular: v = √(μ⊕/r),  T = 2π√(r³/μ⊕),  μ⊕ = 3,986e14 m³/s²
//
// O arrasto usa um modelo de atmosfera exponencial de verdade:
//     ρ(h) = ρ₀ · exp(−(h − h₀)/H)      H ≈ 60 km (altura de escala)
//     a_arrasto = −½ · ρ · v² · (Cᴅ·A/m) · v̂
//
// O paradoxo do satélite: o arrasto TIRA energia, e mesmo assim o
// satélite ACELERA. Perder energia encolhe a órbita, e órbitas baixas
// são mais rápidas (v ∝ 1/√r). O gráfico mostra altitude caindo e
// velocidade subindo ao mesmo tempo — não é bug, é mecânica orbital.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, glow, plot, legend, hexA, clamp, rng, sci,
} from '../engine'

const A    = ACCENT['astronomia']
const MU_E = 3.986004418e14   // GM⊕, m³/s²
const R_E  = 6371e3           // raio da Terra, m
const H_SC = 60e3             // altura de escala da atmosfera, m
const RHO0 = 2.8e-11          // kg/m³ a 200 km (aprox.)
const H0   = 200e3
const BC   = 0.012            // Cᴅ·A/m — coef. balístico típico (m²/kg)
const KARMAN = 100e3

const SPEEDUP = 90            // segundos simulados por segundo real

export default function SatelitesCanvas({ params, running, resetKey }) {
  const init = (p) => {
    const alt = (p.altitude ?? 400) * 1000
    const r = R_E + alt
    const v = Math.sqrt(MU_E / r)     // circular
    return {
      x: r, y: 0,
      vx: 0, vy: v,
      alt0: p.altitude ?? 400,
      t: 0,
      trail: [],
      hist: [],
      reentry: false,
    }
  }

  const setup = useCallback((view, p) => {
    const s = init(p)
    const rand = rng(31)
    s.stars = Array.from({ length: 140 }, () => ({
      x: rand(), y: rand(), r: rand() * 1.0 + 0.2, a: rand() * 0.4 + 0.12,
    }))
    return s
  }, [])

  const step = useCallback((s, dt, p) => {
    if ((p.altitude ?? 400) !== s.alt0) {
      const stars = s.stars
      Object.assign(s, init(p))
      s.stars = stars
      return
    }
    if (s.reentry) return

    const dragK = (p.drag ?? 0) / 100
    const hstep = (dt * SPEEDUP) / 6

    for (let i = 0; i < 6; i++) {
      const r = Math.hypot(s.x, s.y)
      const alt = r - R_E
      if (alt < KARMAN) { s.reentry = true; return }

      // gravidade
      const g = -MU_E / (r * r * r)
      let ax = g * s.x
      let ay = g * s.y

      // arrasto atmosférico
      if (dragK > 0) {
        const rho = RHO0 * Math.exp(-(alt - H0) / H_SC) * dragK
        const v = Math.hypot(s.vx, s.vy)
        const aD = 0.5 * rho * v * v * BC
        ax -= aD * (s.vx / v)
        ay -= aD * (s.vy / v)
      }

      s.vx += ax * hstep
      s.vy += ay * hstep
      s.x  += s.vx * hstep
      s.y  += s.vy * hstep
      s.t  += hstep
    }

    const r = Math.hypot(s.x, s.y)
    s.trail.push([s.x, s.y])
    if (s.trail.length > 900) s.trail.shift()

    if (s.hist.length === 0 || s.t - s.hist[s.hist.length - 1][0] > 60) {
      s.hist.push([s.t, (r - R_E) / 1000, Math.hypot(s.vx, s.vy) / 1000])
      if (s.hist.length > 600) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view, { vignette: false })

    const r = Math.hypot(s.x, s.y)
    const alt = r - R_E
    const v = Math.hypot(s.vx, s.vy)
    const T = 2 * Math.PI * Math.sqrt(r ** 3 / MU_E)
    const rho = RHO0 * Math.exp(-(alt - H0) / H_SC)

    const compact = w < 720
    const stageW = compact ? w : w * 0.60
    const cx = stageW * 0.5, cy = h * 0.5

    // A escala precisa caber GEO (42 164 km de raio) e ainda mostrar LEO.
    const rMax = Math.max(r * 1.15, R_E * 1.5)
    const ppm = Math.min(stageW, h) * 0.44 / rMax

    for (const st of s.stars) {
      ctx.fillStyle = hexA('#ffffff', st.a)
      ctx.beginPath(); ctx.arc(st.x * stageW, st.y * h, st.r, 0, Math.PI * 2); ctx.fill()
    }

    // ── Terra ─────────────────────────────────────────────────────
    const Rpx = R_E * ppm
    const eg = ctx.createRadialGradient(cx - Rpx * 0.3, cy - Rpx * 0.3, Rpx * 0.1, cx, cy, Rpx)
    eg.addColorStop(0, '#3f5f7a')
    eg.addColorStop(0.75, '#22384a')
    eg.addColorStop(1, '#101c26')
    ctx.fillStyle = eg
    ctx.beginPath(); ctx.arc(cx, cy, Rpx, 0, Math.PI * 2); ctx.fill()

    // Atmosfera: fina de verdade. A camada densa tem ~100 km contra
    // 6371 km de raio — é a casca de uma maçã.
    const atmo = ctx.createRadialGradient(cx, cy, Rpx, cx, cy, Rpx + H_SC * 3 * ppm)
    atmo.addColorStop(0, hexA('#7fb3d5', 0.30))
    atmo.addColorStop(1, hexA('#7fb3d5', 0))
    ctx.fillStyle = atmo
    ctx.beginPath(); ctx.arc(cx, cy, Rpx + H_SC * 3 * ppm, 0, Math.PI * 2); ctx.fill()

    // Linha de Kármán — a fronteira do espaço
    ctx.strokeStyle = hexA(Q.warn, 0.35)
    ctx.setLineDash([2, 4])
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(cx, cy, (R_E + KARMAN) * ppm, 0, Math.PI * 2); ctx.stroke()
    ctx.setLineDash([])

    // Órbita geoestacionária de referência
    const rGeo = (MU_E * (86164 / (2 * Math.PI)) ** 2) ** (1 / 3)
    if (rGeo * ppm < Math.min(stageW, h) * 0.5) {
      ctx.strokeStyle = hexA(Q.field, 0.25)
      ctx.setLineDash([3, 5])
      ctx.beginPath(); ctx.arc(cx, cy, rGeo * ppm, 0, Math.PI * 2); ctx.stroke()
      ctx.setLineDash([])
      text(ctx, 'GEO 35 786 km', cx, cy - rGeo * ppm - 6,
        { size: 8, color: Q.field, align: 'center' })
    }

    // ── Rastro + satélite ─────────────────────────────────────────
    if (s.trail.length > 1) {
      ctx.beginPath()
      s.trail.forEach(([px, py], i) => {
        const X = cx + px * ppm, Y = cy + py * ppm
        i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
      })
      ctx.strokeStyle = hexA(A, 0.7)
      ctx.lineWidth = 1.3
      ctx.stroke()
    }

    const sx = cx + s.x * ppm, sy = cy + s.y * ppm
    if (!s.reentry) {
      glow(ctx, sx, sy, 3.5, A, 0.9)
      arrow(ctx, sx, sy, sx + (s.vx / v) * 26, sy + (s.vy / v) * 26,
        { color: Q.velocity, width: 1.6, label: 'v' })
      // vetor de arrasto — sempre contra a velocidade
      if ((p.drag ?? 0) > 0 && rho > 1e-14) {
        arrow(ctx, sx, sy, sx - (s.vx / v) * 18, sy - (s.vy / v) * 18,
          { color: Q.thermal, width: 1.6, label: 'D' })
      }
    } else {
      glow(ctx, sx, sy, 6, Q.danger, 1)
    }

    // ── Regime orbital ────────────────────────────────────────────
    const altKm = alt / 1000
    const regime = s.reentry ? { t: 'REENTRADA — abaixo da linha de Kármán', c: Q.danger }
      : altKm < 2000  ? { t: 'LEO — órbita baixa (ISS ≈ 420 km)', c: A }
      : altKm < 35000 ? { t: 'MEO — órbita média (GPS ≈ 20 200 km)', c: Q.field }
      : { t: 'GEO — geoestacionária', c: Q.potential }
    caption(ctx, regime.t, 16, 24, regime.c)

    readout(ctx, w - 14, 14, [
      { k: 'h  altitude',  v: `${altKm.toFixed(0)} km`, c: altKm < 200 ? Q.danger : A },
      { k: 'v  orbital',   v: `${(v / 1000).toFixed(3)} km/s`, c: Q.velocity },
      { k: 'T  período',   v: T / 3600 >= 1 ? `${(T / 3600).toFixed(2)} h` : `${(T / 60).toFixed(0)} min` },
      { k: 'ρ  densidade', v: `${sci(rho, 1)} kg/m³`, c: Q.thermal },
      { k: 'arrasto',      v: `${(p.drag ?? 0).toFixed(0)} %` },
      { k: 'decorrido',    v: `${(s.t / 86400).toFixed(2)} dias` },
    ], { title: 'v = √(μ⊕/r)', anchor: 'right', accent: A, minWidth: 200 })

    if (Math.abs(T - 86164) / 86164 < 0.01 && !s.reentry) {
      text(ctx, 'período ≈ 1 dia sideral — o satélite parece parado no céu',
        16, h - 16, { size: 9, weight: 700, color: Q.potential })
    } else if ((p.drag ?? 0) > 0 && !s.reentry) {
      text(ctx, 'o arrasto tira energia — e por isso o satélite acelera',
        16, h - 16, { size: 9, color: Q.thermal })
    }

    if (compact) return

    // ── O paradoxo, em dois gráficos ──────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 26
    const t1 = Math.max(3600, s.t)
    const t0 = 0
    const hd = s.hist.map(d => [d[0] / 86400, d[1]])
    const vd = s.hist.map(d => [d[0] / 86400, d[2]])
    const days1 = Math.max(0.05, t1 / 86400)

    caption(ctx, 'Altitude', gx, 26, A)
    plot(ctx, { x: gx, y: 36, w: gw, h: h * 0.31 }, {
      xDomain: [0, days1], yDomain: [0, Math.max(500, s.alt0 * 1.15)],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(2), fmtY: q => q.toFixed(0),
      yLabel: 'h (km)',
      rules: [{ y: 100, color: hexA(Q.danger, 0.6), label: 'Kármán' }],
      series: [{ points: hd, color: A, width: 1.8, fill: true }],
    })

    const py = h * 0.31 + 88
    const vmin = Math.min(...vd.map(d => d[1]), v / 1000) * 0.995
    const vmax = Math.max(...vd.map(d => d[1]), v / 1000) * 1.005
    caption(ctx, 'Velocidade', gx, py - 10, Q.velocity)
    plot(ctx, { x: gx, y: py, w: gw, h: h - py - 54 }, {
      xDomain: [0, days1], yDomain: [vmin, vmax],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(2), fmtY: q => q.toFixed(2),
      xLabel: 'tempo (dias)', yLabel: 'v (km/s)',
      series: [{ points: vd, color: Q.velocity, width: 1.8 }],
    })
    legend(ctx, gx, h - 16, [{ label: 'cai de altitude, ganha velocidade', color: Q.velocity }])
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

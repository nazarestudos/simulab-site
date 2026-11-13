// ═══════════════════════════════════════════════════════════════════
// ASTRONOMIA — Órbitas Planetárias (Kepler + Gravitação Universal)
//
// Integração em unidades SI de verdade (μ☉ = GM☉ = 1,327e20 m³/s²), com
// Velocity Verlet — um integrador SIMPLÉTICO. Isso importa: com Euler,
// a órbita espirala e "cai" no Sol por erro numérico. Com Verlet, a
// energia fica limitada e a elipse fecha, ano após ano.
//
// O tipo de órbita NÃO é adivinhado por limiar empírico; sai da energia
// orbital específica:
//     ε = v²/2 − μ/r        ε < 0 elipse · ε = 0 parábola · ε > 0 hipérbole
//     a = −μ/(2ε)           semieixo maior            (vis-viva)
//     e = |1 + 2εh²/μ²|^½   excentricidade            (h = momento angular)
//     T = 2π√(a³/μ)         3ª lei de Kepler
//
// A elipse analítica calculada a partir de (a, e, ω) é sobreposta em
// tracejado: a trajetória numérica cai exatamente em cima dela.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, glow, plot, hexA, clamp, rng, sci,
} from '../engine'

const A   = ACCENT['astronomia']
const MU  = 1.32712440018e20   // GM☉, m³/s²
const AU  = 1.495978707e11     // m
const DAY = 86400              // s
const SPEEDUP = 6 * DAY        // segundos simulados por segundo real

export default function OrbitasPlanetariasCanvas({ params, running, resetKey }) {
  const init = (p) => {
    const r0 = (p.distance ?? 1.0) * AU
    const v0 = (p.velocity ?? 29.8) * 1000       // km/s → m/s
    return {
      // Parte no periélio-candidato: posição em +x, velocidade em +y.
      x: r0, y: 0,
      vx: 0, vy: v0,
      d0: p.distance ?? 1.0,
      v0: p.velocity ?? 29.8,
      trail: [],
      t: 0,
      sectors: [],     // setores varridos (2ª lei)
      sectorAcc: [],
      sectorT: 0,
    }
  }

  const setup = useCallback((view, p) => {
    const s = init(p)
    s.stars = Array.from({ length: 170 }, (() => {
      const rand = rng(99)
      return () => ({ x: rand(), y: rand(), r: rand() * 1.1 + 0.2, a: rand() * 0.5 + 0.15 })
    })())
    return s
  }, [])

  const accel = (x, y) => {
    const r2 = x * x + y * y
    const r = Math.sqrt(r2)
    const a = -MU / (r2 * r)          // −μ/r³ · r⃗
    return [a * x, a * y]
  }

  const step = useCallback((s, dt, p) => {
    if ((p.distance ?? 1) !== s.d0 || (p.velocity ?? 29.8) !== s.v0) {
      const stars = s.stars
      Object.assign(s, init(p))
      s.stars = stars
      return
    }

    // Velocity Verlet — simplético, conserva energia no longo prazo.
    const h = dt * SPEEDUP
    const sub = 8
    const hs = h / sub
    for (let i = 0; i < sub; i++) {
      let [ax, ay] = accel(s.x, s.y)
      s.x += s.vx * hs + 0.5 * ax * hs * hs
      s.y += s.vy * hs + 0.5 * ay * hs * hs
      const [ax2, ay2] = accel(s.x, s.y)
      s.vx += 0.5 * (ax + ax2) * hs
      s.vy += 0.5 * (ay + ay2) * hs
      s.t += hs
    }

    s.trail.push([s.x, s.y])
    if (s.trail.length > 2600) s.trail.shift()

    // 2ª lei: acumula setores de tempo igual. Áreas iguais em tempos iguais.
    s.sectorAcc.push([s.x, s.y])
    s.sectorT += h
    if (s.sectorT > 12 * DAY) {
      s.sectors.push(s.sectorAcc)
      if (s.sectors.length > 14) s.sectors.shift()
      s.sectorAcc = [[s.x, s.y]]
      s.sectorT = 0
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view, { vignette: false })

    // ── Elementos orbitais, a partir do estado atual ──────────────
    const r = Math.hypot(s.x, s.y)
    const v = Math.hypot(s.vx, s.vy)
    const eps = v * v / 2 - MU / r                    // energia específica
    const hAng = s.x * s.vy - s.y * s.vx              // momento angular específico
    const a = -MU / (2 * eps)                         // semieixo maior (negativo p/ hipérbole)
    const ecc = Math.sqrt(Math.max(0, 1 + (2 * eps * hAng * hAng) / (MU * MU)))
    const bound = eps < 0
    const T = bound ? 2 * Math.PI * Math.sqrt(a ** 3 / MU) : Infinity

    // Vetor de Laplace–Runge–Lenz → direção do periélio (orientação da elipse)
    const ex = (s.vy * hAng) / MU - s.x / r
    const ey = (-s.vx * hAng) / MU - s.y / r
    const argP = Math.atan2(ey, ex)

    const compact = w < 720
    const stageW = compact ? w : w * 0.62
    const cx = stageW * 0.5, cy = h * 0.5

    // Escala: mantém a órbita inteira na tela
    const rMax = bound ? a * (1 + ecc) : r * 1.5
    const ppm = Math.min(stageW, h) * 0.40 / Math.max(rMax, 0.35 * AU)

    // ── Estrelas (PRNG fixo — não cintilam a cada frame) ──────────
    for (const st of s.stars) {
      ctx.fillStyle = hexA('#ffffff', st.a)
      ctx.beginPath()
      ctx.arc(st.x * stageW, st.y * h, st.r, 0, Math.PI * 2)
      ctx.fill()
    }

    // ── Setores da 2ª lei ─────────────────────────────────────────
    for (let i = 0; i < s.sectors.length; i++) {
      const sec = s.sectors[i]
      if (sec.length < 2) continue
      const alpha = 0.05 + 0.10 * (i / s.sectors.length)
      ctx.fillStyle = hexA(A, alpha)
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      for (const [px, py] of sec) ctx.lineTo(cx + px * ppm, cy + py * ppm)
      ctx.closePath()
      ctx.fill()
    }

    // ── Elipse analítica (a, e, ω) — o gabarito ───────────────────
    if (bound && ecc < 0.999) {
      const b = a * Math.sqrt(1 - ecc * ecc)
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(argP)
      // O foco (o Sol) está na origem → centro da elipse em −a·e
      ctx.translate(-a * ecc * ppm, 0)
      ctx.strokeStyle = hexA(C.ink, 0.22)
      ctx.setLineDash([4, 4])
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(0, 0, a * ppm, b * ppm, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()
    }

    // ── Trajetória numérica ───────────────────────────────────────
    if (s.trail.length > 1) {
      ctx.beginPath()
      s.trail.forEach(([px, py], i) => {
        const X = cx + px * ppm, Y = cy + py * ppm
        i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
      })
      ctx.strokeStyle = hexA(A, 0.75)
      ctx.lineWidth = 1.4
      ctx.stroke()
    }

    // ── Sol ───────────────────────────────────────────────────────
    glow(ctx, cx, cy, 11, '#e8c07a', 1)
    text(ctx, 'Sol', cx, cy + 26, { size: 9, color: C.muted, align: 'center' })

    // Periélio / afélio marcados
    if (bound && ecc > 0.02) {
      const rp = a * (1 - ecc), ra = a * (1 + ecc)
      const pxP = cx + Math.cos(argP) * rp * ppm, pyP = cy + Math.sin(argP) * rp * ppm
      const pxA = cx - Math.cos(argP) * ra * ppm, pyA = cy - Math.sin(argP) * ra * ppm
      ctx.fillStyle = Q.warn
      ctx.beginPath(); ctx.arc(pxP, pyP, 2.5, 0, Math.PI * 2); ctx.fill()
      text(ctx, `periélio ${(rp / AU).toFixed(2)} UA`, pxP, pyP - 9, { size: 8.5, color: Q.warn, align: 'center' })
      ctx.fillStyle = Q.field
      ctx.beginPath(); ctx.arc(pxA, pyA, 2.5, 0, Math.PI * 2); ctx.fill()
      text(ctx, `afélio ${(ra / AU).toFixed(2)} UA`, pxA, pyA - 9, { size: 8.5, color: Q.field, align: 'center' })
    }

    // ── Planeta ───────────────────────────────────────────────────
    const px = cx + s.x * ppm, py = cy + s.y * ppm
    // Raio só visual: a massa do planeta NÃO entra na dinâmica (m ≪ M☉).
    const pr = clamp(3 + Math.cbrt(p.mass ?? 1) * 2.0, 3, 10)

    // Linha radial (raio-vetor da 2ª lei)
    ctx.strokeStyle = hexA(C.ink, 0.14)
    ctx.setLineDash([3, 3])
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke()
    ctx.setLineDash([])

    glow(ctx, px, py, pr, A, 0.8)
    arrow(ctx, px, py, px + (s.vx / 1000) * 2.6, py + (s.vy / 1000) * 2.6,
      { color: Q.velocity, width: 1.8, label: 'v' })

    // ── Leituras ──────────────────────────────────────────────────
    const type = !bound
      ? (Math.abs(eps) < 1e3 ? 'parabólica — escape' : 'hiperbólica — escape')
      : ecc < 0.02 ? 'circular' : ecc < 0.4 ? 'elíptica' : 'elíptica excêntrica'
    const typeC = bound ? (ecc < 0.02 ? Q.potential : A) : Q.danger

    readout(ctx, w - 14, 14, [
      { k: 'r  distância', v: `${(r / AU).toFixed(3)} UA`, c: A },
      { k: 'v  velocidade', v: `${(v / 1000).toFixed(2)} km/s`, c: Q.velocity },
      { k: 'a  semieixo',  v: bound ? `${(a / AU).toFixed(3)} UA` : '—' },
      { k: 'e  excentric.', v: ecc.toFixed(4), c: Q.warn },
      { k: 'T  período',   v: bound ? `${(T / DAY / 365.25).toFixed(2)} anos` : '∞' },
      { k: 'ε  energia',   v: `${sci(eps, 2)} J/kg`, c: bound ? Q.potential : Q.danger },
      { k: 'órbita',       v: type, c: typeC },
    ], { title: 'Elementos orbitais', anchor: 'right', accent: A, minWidth: 210 })

    // Nota sobre a massa — o erro conceitual mais comum
    text(ctx, `m = ${(p.mass ?? 1).toFixed(1)} M⊕ — a massa do planeta não altera a órbita`,
      16, h - 16, { size: 8.5, color: C.muted })
    text(ctx, `decorrido: ${(s.t / DAY / 365.25).toFixed(2)} anos`, 16, 24,
      { size: 9, color: C.muted })

    if (compact) return

    // ── Vis-viva: v(r) ────────────────────────────────────────────
    // v² = μ(2/r − 1/a). O ponto vive exatamente sobre a curva.
    const gx = stageW + 46
    const gw = w - gx - 26

    caption(ctx, 'Vis-viva  v² = μ(2/r − 1/a)', gx, 26, A)
    const rMin = bound ? a * (1 - ecc) * 0.85 : r * 0.5
    const rTop = bound ? a * (1 + ecc) * 1.1 : r * 1.6
    const curve = []
    for (let i = 0; i <= 60; i++) {
      const rr = rMin + (i / 60) * (rTop - rMin)
      const v2 = MU * (2 / rr - (bound ? 1 / a : 0))
      if (v2 > 0) curve.push([rr / AU, Math.sqrt(v2) / 1000])
    }
    const vTop = Math.max(...curve.map(c => c[1])) * 1.15
    plot(ctx, { x: gx, y: 36, w: gw, h: h * 0.33 }, {
      xDomain: [rMin / AU, rTop / AU], yDomain: [0, vTop],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(1), fmtY: q => q.toFixed(0),
      xLabel: 'r (UA)', yLabel: 'v (km/s)',
      series: [{ points: curve, color: hexA(A, 0.8), width: 1.6 }],
      markers: [{ x: r / AU, y: v / 1000, color: Q.velocity, r: 4 }],
    })

    // ── 3ª lei: T² ∝ a³ ───────────────────────────────────────────
    const py2 = h * 0.33 + 90
    caption(ctx, '3ª lei  T² = 4π²a³/μ', gx, py2 - 10, A)
    const k3 = []
    for (let i = 1; i <= 60; i++) {
      const aa = (i / 60) * 6
      k3.push([aa, Math.sqrt(aa ** 3)])   // T em anos com a em UA (T² = a³)
    }
    plot(ctx, { x: gx, y: py2, w: gw, h: h - py2 - 52 }, {
      xDomain: [0, 6], yDomain: [0, 15],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'semieixo a (UA)', yLabel: 'período (anos)',
      series: [{ points: k3, color: hexA(Q.field, 0.8), width: 1.6 }],
      markers: bound && a / AU <= 6
        ? [{ x: a / AU, y: T / DAY / 365.25, color: Q.warn, r: 4 }]
        : [],
    })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

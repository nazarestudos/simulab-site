// ═══════════════════════════════════════════════════════════════════
// QUÍMICA — Cinética Química e Teoria das Colisões
//
// Uma reação não acontece só porque duas moléculas se encontram. Elas
// precisam colidir com energia ≥ Eₐ (energia de ativação). A fração de
// colisões que consegue isso é o fator de Boltzmann:
//
//     f = exp(−Eₐ / R·T)
//
// e a constante de velocidade segue Arrhenius:  k = A·exp(−Eₐ/RT).
//
// Por que 10 °C a mais costuma DOBRAR a velocidade de uma reação? Não é
// porque as moléculas ficam "10% mais rápidas" — a energia média sobe
// pouco. É porque a CAUDA da distribuição de Maxwell–Boltzmann acima de
// Eₐ engorda exponencialmente. O gráfico mostra essa cauda em destaque.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp, rng, gauss, mix, sci,
} from '../engine'

const A_C  = ACCENT['quimica']
const R    = 8.314        // J/(mol·K)
const EA   = 42000        // J/mol — energia de ativação (típica)
const A_PRE = 1.2e6       // fator pré-exponencial (Arrhenius)

export default function ReacoesQuimicasCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const rand = rng(303)
    const T = (p.temp ?? 25) + 273.15
    const conc = p.concentration ?? 1
    const n = Math.round(clamp(18 + conc * 14, 20, 150))
    const vs = 30 * Math.sqrt(T / 298)
    return {
      T, conc,
      mols: Array.from({ length: n }, () => ({
        x: rand(), y: rand(),
        vx: gauss(rand) * vs,
        vy: gauss(rand) * vs,
        kind: rand() < 0.5 ? 0 : 1,       // reagente A ou B
        prod: false,
      })),
      flashes: [],
      reacted: 0,
      t: 0,
      hist: [],
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const T = (p.temp ?? 25) + 273.15
    const conc = p.concentration ?? 1

    // Mudar T ou concentração refaz o ensaio.
    if (Math.abs(T - s.T) > 1e-9 || Math.abs(conc - s.conc) > 1e-9) {
      const rand = rng(303 + Math.round(T + conc * 10))
      const n = Math.round(clamp(18 + conc * 14, 20, 150))
      const vs = 30 * Math.sqrt(T / 298)
      s.T = T; s.conc = conc
      s.mols = Array.from({ length: n }, () => ({
        x: rand(), y: rand(),
        vx: gauss(rand) * vs,
        vy: gauss(rand) * vs,
        kind: rand() < 0.5 ? 0 : 1,
        prod: false,
      }))
      s.reacted = 0; s.t = 0; s.hist = []; s.flashes = []
      return
    }

    // Fração de colisões com energia suficiente — o fator de Boltzmann.
    const fBoltz = Math.exp(-EA / (R * T))

    for (const m of s.mols) {
      m.x += m.vx * dt * 0.011
      m.y += m.vy * dt * 0.011
      if (m.x < 0) { m.x = 0; m.vx = -m.vx }
      if (m.x > 1) { m.x = 1; m.vx = -m.vx }
      if (m.y < 0) { m.y = 0; m.vy = -m.vy }
      if (m.y > 1) { m.y = 1; m.vy = -m.vy }
    }

    // ── Colisões A + B ────────────────────────────────────────────
    for (let i = 0; i < s.mols.length; i++) {
      const a = s.mols[i]
      if (a.prod) continue
      for (let j = i + 1; j < s.mols.length; j++) {
        const b = s.mols[j]
        if (b.prod || a.kind === b.kind) continue
        const dx = a.x - b.x, dy = a.y - b.y
        const d = Math.hypot(dx, dy)
        if (d > 0.035) continue

        // Energia de colisão: energia cinética relativa ao longo da
        // linha de centros — só ela conta para vencer a barreira.
        const nx = dx / (d || 1e-6), ny = dy / (d || 1e-6)
        const vRel = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny
        const eColl = 0.5 * vRel * vRel

        // Escala de energia calibrada: a energia típica ~ 3/2·kT
        const eScale = eColl / (900 * (s.T / 298))

        // Reage se a colisão é energética o bastante. O sorteio usa a
        // própria fração de Boltzmann como probabilidade base.
        if (eScale > 1 && Math.random() < fBoltz * 4e6 * dt * 60) {
          a.prod = true; b.prod = true
          s.reacted += 2
          s.flashes.push({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, life: 1 })
        } else {
          // colisão elástica simples (troca a componente normal)
          const p2 = vRel
          a.vx -= p2 * nx; a.vy -= p2 * ny
          b.vx += p2 * nx; b.vy += p2 * ny
        }
        break
      }
    }

    for (const f of s.flashes) f.life -= dt * 2.6
    s.flashes = s.flashes.filter(f => f.life > 0)

    s.t += dt
    if (s.hist.length === 0 || s.t - s.hist[s.hist.length - 1][0] > 0.1) {
      const frac = s.mols.length ? s.reacted / s.mols.length : 0
      s.hist.push([s.t, frac * 100])
      if (s.hist.length > 400) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const Tc = p.temp ?? 25
    const T  = Tc + 273.15
    const conc = p.concentration ?? 1

    const fBoltz = Math.exp(-EA / (R * T))
    const k = A_PRE * fBoltz                     // Arrhenius
    const rate = k * conc * conc                 // 2ª ordem: v = k[A][B]

    const compact = w < 700
    const stageW = compact ? w : w * 0.52

    // ── Reator ────────────────────────────────────────────────────
    const bx = 24, by = h * 0.14
    const bw = stageW - 56, bh = h * 0.66

    const heat = clamp((Tc + 50) / 550, 0, 1)
    ctx.fillStyle = hexA(mix('#6f8ea8', '#c2704f', heat), 0.05)
    ctx.fillRect(bx, by, bw, bh)
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(bx + 0.5, by + 0.5, bw, bh)
    caption(ctx, `Reator · ${Tc.toFixed(0)} °C · ${conc.toFixed(1)} mol/L`, bx, by - 10, A_C)

    // moléculas
    for (const m of s.mols) {
      const X = bx + m.x * bw, Y = by + m.y * bh
      if (m.prod) {
        // produto AB — duas esferas ligadas
        ctx.strokeStyle = hexA(Q.potential, 0.8)
        ctx.lineWidth = 1.4
        ctx.beginPath(); ctx.moveTo(X - 3, Y); ctx.lineTo(X + 3, Y); ctx.stroke()
        ctx.fillStyle = Q.potential
        ctx.beginPath(); ctx.arc(X - 3.5, Y, 2.8, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath(); ctx.arc(X + 3.5, Y, 2.8, 0, Math.PI * 2); ctx.fill()
      } else {
        const col = m.kind === 0 ? A_C : Q.field
        ctx.fillStyle = col
        ctx.beginPath(); ctx.arc(X, Y, 3.4, 0, Math.PI * 2); ctx.fill()
      }
    }

    // flashes de reação
    for (const f of s.flashes) {
      const X = bx + f.x * bw, Y = by + f.y * bh
      ctx.strokeStyle = hexA(Q.warn, f.life)
      ctx.lineWidth = 1.6
      ctx.beginPath()
      ctx.arc(X, Y, 4 + (1 - f.life) * 14, 0, Math.PI * 2)
      ctx.stroke()
    }

    // legenda
    const ly = by + bh + 20
    ctx.fillStyle = A_C
    ctx.beginPath(); ctx.arc(bx + 4, ly - 3, 3.4, 0, Math.PI * 2); ctx.fill()
    text(ctx, 'A', bx + 12, ly, { size: 9, color: C.dim })
    ctx.fillStyle = Q.field
    ctx.beginPath(); ctx.arc(bx + 34, ly - 3, 3.4, 0, Math.PI * 2); ctx.fill()
    text(ctx, 'B', bx + 42, ly, { size: 9, color: C.dim })
    ctx.fillStyle = Q.potential
    ctx.beginPath(); ctx.arc(bx + 68, ly - 3, 3, 0, Math.PI * 2); ctx.fill()
    ctx.beginPath(); ctx.arc(bx + 75, ly - 3, 3, 0, Math.PI * 2); ctx.fill()
    text(ctx, 'produto AB', bx + 84, ly, { size: 9, color: C.dim })

    const conv = s.mols.length ? (s.reacted / s.mols.length) * 100 : 0
    text(ctx, `conversão: ${conv.toFixed(0)}%`, bx + bw, ly,
      { size: 9.5, weight: 700, color: Q.potential, align: 'right' })

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'T  temperatura', v: `${T.toFixed(0)} K`, c: Q.thermal },
      { k: 'Eₐ ativação',    v: `${(EA / 1000).toFixed(0)} kJ/mol`, c: Q.warn },
      { k: 'e^(−Eₐ/RT)',     v: sci(fBoltz, 2), c: A_C },
      { k: 'k  Arrhenius',   v: `${sci(k, 2)}`, c: A_C },
      { k: '[A] = [B]',      v: `${conc.toFixed(1)} mol/L` },
      { k: 'v = k[A][B]',    v: `${sci(rate, 2)}`, c: Q.kinetic },
      { k: 'conversão',      v: `${conv.toFixed(0)} %`, c: Q.potential },
    ], { title: 'k = A·e^(−Eₐ/RT)', anchor: 'right', accent: A_C, minWidth: 202 })

    if (compact) return

    // ── Maxwell–Boltzmann com a cauda reativa destacada ───────────
    const gx = stageW + 50
    const gw = w - gx - 26

    caption(ctx, 'Só a cauda acima de Eₐ reage', gx, 26, Q.warn)

    // Distribuição de energias (2D/3D): f(E) ∝ √E · exp(−E/RT)
    const eMax = 120000   // J/mol
    const curve = []
    let peak = 0
    for (let i = 0; i <= 120; i++) {
      const E = (i / 120) * eMax
      const f = Math.sqrt(E) * Math.exp(-E / (R * T))
      peak = Math.max(peak, f)
      curve.push([E / 1000, f])
    }
    const tail = curve.filter(c => c[0] * 1000 >= EA)

    plot(ctx, { x: gx, y: 36, w: gw, h: h * 0.34 }, {
      xDomain: [0, eMax / 1000], yDomain: [0, peak * 1.15],
      xTicks: 4, yTicks: 2, fmtX: q => q.toFixed(0), fmtY: () => '',
      xLabel: 'energia (kJ/mol)',
      rules: [{ x: EA / 1000, color: Q.warn, label: 'Eₐ' }],
      series: [
        { points: curve, color: hexA(Q.thermal, 0.85), width: 1.7 },
        { points: tail,  color: Q.warn, width: 1.7, fill: true },
      ],
    })
    text(ctx, `fração reativa: ${(fBoltz * 100).toExponential(1)} %`, gx, h * 0.34 + 58,
      { size: 9, weight: 700, color: Q.warn })

    // ── Arrhenius: ln k × 1/T é uma RETA ──────────────────────────
    const py = h * 0.34 + 92
    const ph = h - py - 52
    caption(ctx, 'Gráfico de Arrhenius  ln k × 1/T', gx, py - 10, A_C)

    const arr = []
    for (let Tk = 230; Tk <= 780; Tk += 10) {
      arr.push([1000 / Tk, Math.log(A_PRE * Math.exp(-EA / (R * Tk)))])
    }
    const ys = arr.map(a => a[1])

    plot(ctx, { x: gx, y: py, w: gw, h: ph }, {
      xDomain: [1000 / 780, 1000 / 230],
      yDomain: [Math.min(...ys) * 1.05, Math.max(...ys) * 1.05],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(1), fmtY: q => q.toFixed(0),
      xLabel: '1000/T (K⁻¹)', yLabel: 'ln k',
      series: [{ points: arr, color: hexA(A_C, 0.85), width: 1.8 }],
      markers: [{ x: 1000 / T, y: Math.log(k), color: Q.kinetic, r: 4 }],
    })
    text(ctx, 'reta de inclinação −Eₐ/R', gx, h - 16, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

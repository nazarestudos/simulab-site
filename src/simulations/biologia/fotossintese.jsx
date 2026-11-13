// ═══════════════════════════════════════════════════════════════════
// BIOLOGIA — Fotossíntese
//
// A assimilação de carbono usa o modelo de FARQUHAR (1980), o mesmo que
// roda dentro dos modelos climáticos globais. A planta assimila pelo
// MENOR de dois limites — é uma linha de produção, e a etapa mais lenta
// manda:
//
//   Ac = Vcmax·(Ci − Γ*) / (Ci + Kc·(1 + O/Ko))     limitada pela RUBISCO
//   Aj = J·(Ci − Γ*) / (4·Ci + 8·Γ*)                limitada pela LUZ
//   A  = min(Ac, Aj) − Rd
//
// Daí saem, sozinhos, os dois fenômenos que todo livro cita:
//
// · SATURAÇÃO LUMINOSA — passe de ~1200 µmol de luz e a curva ACHATA.
//   Mais luz não ajuda: quem limita agora é o CO₂, não os fótons. É por
//   isso que estufas comerciais injetam CO₂ em vez de só acender lâmpadas.
//
// · PONTO DE COMPENSAÇÃO — no escuro a planta ainda RESPIRA (Rd), então
//   a assimilação líquida é NEGATIVA: ela consome mais O₂ do que produz.
//   Só a partir de ~30 µmol de luz é que ela empata.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['biologia']

// Parâmetros de Farquhar a 25 °C (folha C3 típica)
const VCMAX = 80      // µmol CO₂ /m²/s
const JMAX  = 150     // transporte de elétrons máximo
const KC    = 404     // µbar — constante de Michaelis do CO₂
const KO    = 278     // mbar — do O₂
const O_INT = 210     // mbar — O₂ intercelular
const GAMMA = 42      // µbar — ponto de compensação de CO₂ (fotorrespiração)
const RD    = 1.5     // respiração mitocondrial no claro
const PHI   = 0.36    // rendimento quântico

/** Assimilação líquida (µmol CO₂/m²/s) para luz I (PAR) e CO₂ ambiente Ca (ppm). */
function assimilation(I, Ca) {
  const Ci = 0.7 * Ca                     // CO₂ intercelular ≈ 70 % do ambiente
  // Transporte de elétrons saturante (hipérbole não retangular simplificada)
  const J = (PHI * I * JMAX) / (PHI * I + JMAX)
  const Ac = (VCMAX * (Ci - GAMMA)) / (Ci + KC * (1 + O_INT / KO))
  const Aj = (J * (Ci - GAMMA)) / (4 * Ci + 8 * GAMMA)
  return { A: Math.min(Ac, Aj) - RD, Ac, Aj, Ci, J, limit: Ac < Aj ? 'CO₂' : 'luz' }
}

export default function FotossinteseCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(303)
    return {
      t: 0,
      photons: Array.from({ length: 30 }, () => ({ x: rand(), u: rand(), s: rand() * 0.5 + 0.7 })),
      o2: [],
      co2: Array.from({ length: 14 }, () => ({ x: rand(), y: rand(), u: rand() })),
      cycle: 0,
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const I = p.light ?? 1000
    const Ca = p.co2 ?? 400
    const { A: net } = assimilation(I, Ca)

    s.t += dt
    // O ciclo de Calvin gira na velocidade da assimilação — no escuro, para.
    s.cycle += dt * clamp(net / 20, 0, 1.6)

    for (const ph of s.photons) {
      ph.u += dt * 0.55 * ph.s * clamp(I / 800, 0.08, 2)
      if (ph.u > 1) { ph.u = 0; ph.x = Math.random() }
    }
    for (const c of s.co2) {
      c.u += dt * 0.25 * clamp(net / 15, 0, 1.5)
      if (c.u > 1) { c.u = 0; c.x = Math.random(); c.y = Math.random() }
    }

    // O₂ só sai se a assimilação for positiva
    if (net > 0 && Math.random() < dt * net * 0.35) {
      s.o2.push({ x: 0.3 + Math.random() * 0.4, u: 0 })
    }
    for (const o of s.o2) o.u += dt * 0.5
    s.o2 = s.o2.filter(o => o.u < 1)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const I  = p.light ?? 1000
    const Ca = p.co2 ?? 400
    const r = assimilation(I, Ca)

    const compact = w < 720
    const stageW = compact ? w : w * 0.46

    // ══ CLOROPLASTO ══════════════════════════════════════════════
    const cx = stageW * 0.5
    const cy = h * 0.46
    const cw = Math.min(stageW * 0.72, 250)
    const chh = h * 0.44

    // Membrana externa
    ctx.fillStyle = hexA(A, 0.07)
    ctx.beginPath()
    ctx.ellipse(cx, cy, cw / 2, chh / 2, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = hexA(A, 0.5)
    ctx.lineWidth = 1.3
    ctx.stroke()

    // Grana (pilhas de tilacoides) — onde acontece a fase CLARA
    const nGrana = 4
    for (let g = 0; g < nGrana; g++) {
      const gx2 = cx - cw * 0.28 + g * (cw * 0.19)
      const gy2 = cy + Math.sin(g * 1.7) * chh * 0.12
      for (let d = 0; d < 5; d++) {
        const dy = gy2 - 12 + d * 6
        // O brilho dos tilacoides segue a luz que chega
        const lit = clamp(I / 1600, 0.1, 1)
        ctx.fillStyle = hexA(mix('#3d5c4a', '#8fd6a8', lit), 0.55)
        ctx.beginPath()
        ctx.ellipse(gx2, dy, 13, 2.6, 0, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Estroma: ciclo de Calvin (fase ESCURA — que não precisa de escuro,
    // precisa de ATP e NADPH; o nome é péssimo e o rótulo diz isso)
    const stx = cx + cw * 0.22
    const sty = cy
    ctx.strokeStyle = hexA(Q.warn, 0.35)
    ctx.lineWidth = 1.2
    ctx.setLineDash([3, 3])
    ctx.beginPath()
    ctx.arc(stx, sty, 24, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])
    // marcador girando na velocidade da assimilação
    const ca = s.cycle
    glow(ctx, stx + Math.cos(ca) * 24, sty + Math.sin(ca) * 24, 3, Q.warn, 0.8)
    text(ctx, 'Calvin', stx, sty + 3, { size: 8, color: C.muted, align: 'center' })

    // ── Fótons chegando ──────────────────────────────────────────
    for (const ph of s.photons) {
      const X = 20 + ph.x * (stageW - 40)
      const Y = ph.u * (cy - 10)
      ctx.strokeStyle = hexA('#e8d48a', clamp(I / 1200, 0.15, 0.85) * (1 - ph.u * 0.3))
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.moveTo(X, Y); ctx.lineTo(X - 2, Y - 7)
      ctx.stroke()
    }
    caption(ctx, `luz ${I} µmol/m²/s`, 20, 24, '#e8d48a')

    // ── O₂ saindo ────────────────────────────────────────────────
    for (const o of s.o2) {
      const X = 20 + o.x * (stageW - 40)
      const Y = cy - o.u * (cy - 16)
      ctx.fillStyle = hexA(Q.potential, 0.85 * (1 - o.u))
      ctx.beginPath(); ctx.arc(X, Y, 2.8, 0, Math.PI * 2); ctx.fill()
    }

    // ── CO₂ entrando ─────────────────────────────────────────────
    for (const c of s.co2) {
      const X = 20 + c.x * (stageW - 40)
      const Y = h - 34 - c.u * (h - 34 - cy - 10)
      ctx.fillStyle = hexA(Q.field, 0.7)
      ctx.beginPath(); ctx.arc(X, Y, 2.6, 0, Math.PI * 2); ctx.fill()
    }

    // Equação global
    text(ctx, '6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂', cx, h - 16,
      { size: 9.5, weight: 700, color: A, align: 'center' })

    // ══ Leituras ═════════════════════════════════════════════════
    const netCol = r.A > 0 ? Q.potential : Q.danger
    readout(ctx, w - 14, 14, [
      { k: 'A  assimilação', v: `${r.A.toFixed(1)} µmol/m²/s`, c: netCol },
      { k: 'Ac  via Rubisco', v: `${r.Ac.toFixed(1)}`, c: r.limit === 'CO₂' ? Q.warn : C.dim },
      { k: 'Aj  via luz',     v: `${r.Aj.toFixed(1)}`, c: r.limit === 'luz' ? Q.warn : C.dim },
      { k: 'fator limitante', v: r.limit, c: Q.warn },
      { k: 'Ci  CO₂ interno', v: `${r.Ci.toFixed(0)} ppm`, c: Q.field },
      { k: 'Rd  respiração',  v: `${RD} µmol/m²/s`, c: Q.thermal },
      { k: 'O₂ liberado',     v: r.A > 0 ? `${r.A.toFixed(1)} µmol/m²/s` : 'nenhum', c: netCol },
    ], { title: 'Modelo de Farquhar', anchor: 'right', accent: A, minWidth: 210 })

    if (r.A <= 0) {
      caption(ctx, 'abaixo do ponto de compensação — a planta consome O₂', 20, h - 34, Q.danger)
    }

    if (compact) return

    // ══ CURVA DE RESPOSTA À LUZ ══════════════════════════════════
    const gx = stageW + 52
    const gw = w - gx - 26

    caption(ctx, 'Curva de resposta à luz', gx, 26, A)

    const curve = []
    for (let i = 0; i <= 120; i++) {
      const li = (i / 120) * 2000
      curve.push([li, assimilation(li, Ca).A])
    }
    // Onde a curva cruza zero: ponto de compensação
    let comp = 0
    for (let i = 1; i < curve.length; i++) {
      if (curve[i - 1][1] < 0 && curve[i][1] >= 0) { comp = curve[i][0]; break }
    }

    plot(ctx, { x: gx, y: 36, w: gw, h: h * 0.36 }, {
      xDomain: [0, 2000], yDomain: [-4, Math.max(30, ...curve.map(c => c[1])) * 1.15],
      xTicks: 4, yTicks: 4,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'luz PAR (µmol/m²/s)', yLabel: 'A (µmol/m²/s)',
      rules: [
        { y: 0, color: hexA(C.ink, 0.3) },
        { x: comp, color: hexA(Q.danger, 0.5), label: 'compensação' },
      ],
      series: [{ points: curve, color: A, width: 2, fill: true }],
      markers: [{ x: I, y: r.A, color: Q.kinetic, r: 4.5 }],
    })
    text(ctx, `saturação: mais luz não aumenta A`, gx, h * 0.36 + 58,
      { size: 8.5, color: C.muted })

    // ══ RESPOSTA AO CO₂ ══════════════════════════════════════════
    const py = h * 0.36 + 92
    const ph2 = h - py - 52

    caption(ctx, 'Resposta ao CO₂', gx, py - 10, Q.field)
    const cc = []
    for (let i = 0; i <= 120; i++) {
      const c2 = (i / 120) * 2000
      cc.push([c2, assimilation(I, c2).A])
    }
    plot(ctx, { x: gx, y: py, w: gw, h: ph2 }, {
      xDomain: [0, 2000], yDomain: [-4, Math.max(30, ...cc.map(c => c[1])) * 1.15],
      xTicks: 4, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'CO₂ ambiente (ppm)', yLabel: 'A',
      rules: [
        { y: 0, color: hexA(C.ink, 0.3) },
        { x: 420, color: hexA(C.ink, 0.3), label: 'atmosfera atual' },
      ],
      series: [{ points: cc, color: Q.field, width: 2, fill: true }],
      markers: [{ x: Ca, y: r.A, color: Q.kinetic, r: 4.5 }],
    })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Lei de Ohm e Efeito Joule
//
// A bateria NÃO é ideal: ela tem resistência interna r. O circuito é
//
//   I = ε / (R + r)       V_t = ε − I·r = I·R      (tensão nos terminais)
//   P_R = I²·R  (útil)    P_r = I²·r  (perdida dentro da bateria)
//   η = P_R / P_total = R / (R + r)
//
// Consequências que a simulação mostra: a tensão nos terminais cai sob
// carga, e um curto-circuito (R→0) tem corrente FINITA ε/r — é r que
// decide se a bateria esquenta ou explode, não a Lei de Ohm ideal.
//
// Duas honestidades que a versão antiga não tinha:
//
// 1. Os elétrons se movem no sentido do polo − para o +, contra a
//    corrente convencional. A animação respeita isso.
// 2. A velocidade de deriva real é ridícula (~0,1 mm/s num fio de cobre
//    doméstico) — os elétrons não "correm" pelo fio. O HUD mostra o valor
//    real calculado por v_d = I / (n·A·e); a animação é acelerada e diz
//    que é.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, grid, text, caption, readout,
  plot, glow, hexA, clamp, mix, sci,
} from '../engine'

const A = ACCENT['fisica-classica']

// Constantes do condutor: cobre, fio de 1,5 mm² (padrão residencial)
const N_CU  = 8.5e28    // portadores por m³
const AREA  = 1.5e-6    // m²
const E_CHG = 1.602e-19 // C

export default function CircuitoEletricoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    phase: 0,        // fase de marcha dos elétrons, em [0,1)
    heat: 0,         // temperatura visual do resistor, suavizada
    electrons: Array.from({ length: 44 }, (_, i) => i / 44),
  }), [])

  const step = useCallback((s, dt, p) => {
    const V = p.voltage    ?? 12
    const R = p.resistance ?? 100
    const r = p.internal   ?? 0.5
    const I = V / (R + r)
    const PR = I * I * R

    // A marcha é proporcional à corrente (acelerada para ser visível).
    s.phase = (s.phase + I * 0.10 * dt) % 1

    // O resistor aquece com P_R e dissipa para o ambiente — 1ª ordem.
    const target = clamp(PR / 60, 0, 1)
    s.heat += (target - s.heat) * clamp(dt * 1.6, 0, 1)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    grid(ctx, view, 36)

    const V = p.voltage    ?? 12          // ε — força eletromotriz
    const R = p.resistance ?? 100
    const r = p.internal   ?? 0.5
    const I = V / (R + r)
    const Vt = I * R                      // tensão nos terminais
    const P  = I * I * R                  // potência útil, no resistor
    const Pr = I * I * r                  // perdida dentro da bateria
    const eff = R / (R + r)
    const vDrift = I / (N_CU * AREA * E_CHG)   // m/s — deriva real

    const compact = w < 700
    const stageW = compact ? w : w * 0.60

    // ── Geometria da malha ────────────────────────────────────────
    const L = stageW * 0.16, Rr = stageW * 0.84
    const T = h * 0.24,      B = h * 0.74
    const perim = 2 * (Rr - L) + 2 * (B - T)

    /** Comprimento de arco → ponto na malha (sentido horário a partir do topo-esq.) */
    const onLoop = (d) => {
      d = ((d % perim) + perim) % perim
      const wTop = Rr - L, hRight = B - T, wBot = Rr - L
      if (d < wTop) return [L + d, T]
      d -= wTop
      if (d < hRight) return [Rr, T + d]
      d -= hRight
      if (d < wBot) return [Rr - d, B]
      d -= wBot
      return [L, B - d]
    }

    // ── Fio, aquecido pelo efeito Joule ───────────────────────────
    const wire = mix('#5a6068', '#c2704f', clamp(s.heat, 0, 1))
    ctx.strokeStyle = wire
    ctx.lineWidth = 2.4
    ctx.lineJoin = 'round'
    ctx.strokeRect(L, T, Rr - L, B - T)

    if (s.heat > 0.35) {
      ctx.save()
      ctx.shadowBlur = 18 * s.heat
      ctx.shadowColor = hexA(Q.thermal, s.heat)
      ctx.strokeStyle = hexA(Q.thermal, s.heat * 0.7)
      ctx.lineWidth = 2.4
      ctx.strokeRect(L, T, Rr - L, B - T)
      ctx.restore()
    }

    // ── Bateria (lado esquerdo) ───────────────────────────────────
    const bY = (T + B) / 2
    ctx.clearRect(L - 4, bY - 22, 9, 44)
    ctx.fillStyle = C.bg
    ctx.fillRect(L - 4, bY - 22, 9, 44)
    // placa longa = polo +, placa curta = polo −
    ctx.strokeStyle = C.ink
    ctx.lineWidth = 2.4
    ctx.beginPath(); ctx.moveTo(L - 11, bY - 14); ctx.lineTo(L + 11, bY - 14); ctx.stroke()
    ctx.lineWidth = 2.4
    ctx.beginPath(); ctx.moveTo(L - 6, bY + 2); ctx.lineTo(L + 6, bY + 2); ctx.stroke()
    ctx.strokeStyle = hexA(C.ink, 0.55)
    ctx.lineWidth = 1.6
    ctx.beginPath(); ctx.moveTo(L, T); ctx.lineTo(L, bY - 14); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(L, bY + 2); ctx.lineTo(L, B); ctx.stroke()
    text(ctx, '+', L - 22, bY - 10, { size: 13, weight: 700, color: Q.positive })
    text(ctx, '−', L - 22, bY + 12, { size: 13, weight: 700, color: Q.negative })
    text(ctx, `ε ${V.toFixed(0)} V`, L - 16, bY + 34, { size: 10, weight: 700, color: C.ink, align: 'center' })
    // A tensão que sobra nos terminais depois da queda I·r na própria bateria
    text(ctx, `Vt ${Vt.toFixed(1)} V`, L - 16, bY + 48,
      { size: 9, weight: 700, color: Vt < V * 0.9 ? Q.warn : C.dim, align: 'center' })
    if (r > 0) text(ctx, `r ${r.toFixed(1)} Ω`, L - 16, bY + 61, { size: 8.5, color: C.muted, align: 'center' })

    // ── Resistor (lado direito) — zigue-zague clássico ────────────
    const rY0 = bY - 30, rY1 = bY + 30
    ctx.fillStyle = C.bg
    ctx.fillRect(Rr - 5, rY0, 10, rY1 - rY0)
    ctx.strokeStyle = mix('#8a8a8a', '#e0764f', clamp(s.heat, 0, 1))
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(Rr, rY0)
    const segs = 7, segH = (rY1 - rY0) / segs
    for (let i = 0; i < segs; i++) {
      ctx.lineTo(Rr + (i % 2 === 0 ? 9 : -9), rY0 + segH * (i + 0.5))
    }
    ctx.lineTo(Rr, rY1)
    ctx.stroke()
    text(ctx, `${R} Ω`, Rr + 22, bY + 4, { size: 10, weight: 700, color: C.ink })
    if (s.heat > 0.5) {
      text(ctx, 'aquecendo', Rr + 22, bY + 20, { size: 8.5, color: Q.thermal })
    }

    // ── Elétrons ──────────────────────────────────────────────────
    // Corrente convencional: + → − (horário aqui). Elétrons: sentido
    // OPOSTO. Por isso o sinal negativo na marcha.
    const eColor = hexA(Q.field, 0.9)
    for (const e0 of s.electrons) {
      const d = (e0 - s.phase) * perim
      const [ex, ey] = onLoop(d)
      glow(ctx, ex, ey, 2.4, eColor, 0.5)
    }

    // Setas do sentido convencional
    ctx.fillStyle = hexA(A, 0.6)
    for (let i = 0; i < 4; i++) {
      const [ax, ay] = onLoop(perim * (i / 4 + 0.12))
      const [bx2, by2] = onLoop(perim * (i / 4 + 0.12) + 8)
      const ang = Math.atan2(by2 - ay, bx2 - ax)
      ctx.save()
      ctx.translate(ax, ay); ctx.rotate(ang)
      ctx.beginPath(); ctx.moveTo(6, 0); ctx.lineTo(-4, 4); ctx.lineTo(-4, -4)
      ctx.closePath(); ctx.fill()
      ctx.restore()
    }

    caption(ctx, 'corrente convencional  +→−', 20, 26, hexA(A, 0.8))
    caption(ctx, 'elétrons  −→+', 20, 40, Q.field)

    // ── Instrumentos ──────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'ε  fem',        v: `${V.toFixed(0)} V`, c: C.ink },
      { k: 'Vt terminais',  v: `${Vt.toFixed(1)} V`, c: Vt < V * 0.9 ? Q.warn : C.dim },
      { k: 'R  resistência',v: `${R} Ω` },
      { k: 'r  interna',    v: `${r.toFixed(1)} Ω`, c: C.dim },
      { k: 'I  corrente',   v: `${I < 1 ? (I * 1000).toFixed(0) + ' mA' : I.toFixed(2) + ' A'}`, c: A },
      { k: 'P  no resistor',v: `${P.toFixed(1)} W`, c: P > 40 ? Q.danger : Q.thermal },
      { k: 'P  na bateria', v: `${Pr.toFixed(1)} W`, c: Pr > 5 ? Q.danger : C.dim },
      { k: 'η  eficiência', v: `${(eff * 100).toFixed(1)} %`, c: Q.potential },
      { k: 'v_d deriva',    v: `${sci(vDrift, 2)} m/s`, c: C.dim },
      { k: 'q  em 1 min',   v: `${(I * 60).toFixed(1)} C` },
    ], { title: 'I = ε / (R + r)', anchor: 'right', accent: A, minWidth: 194 })

    // Aviso de curto-circuito — a física por trás de um fio derretendo.
    if (P > 60) {
      const bx = w - 200, by = h - 40
      ctx.fillStyle = hexA(Q.danger, 0.14)
      ctx.fillRect(bx, by, 186, 26)
      ctx.strokeStyle = hexA(Q.danger, 0.5)
      ctx.lineWidth = 1
      ctx.strokeRect(bx + 0.5, by + 0.5, 186, 26)
      text(ctx, `R baixo · P = ${P.toFixed(0)} W · fio derrete`, bx + 10, by + 17,
        { size: 9, weight: 700, color: Q.danger })
    }

    text(ctx, 'a deriva real é ~10⁴× mais lenta que esta animação', 20, h - 16,
      { size: 8.5, color: C.muted })

    if (compact) return

    // ── I × ε: reta de inclinação 1/(R+r) ─────────────────────────
    const px = stageW + 44
    const pw = w - px - 26
    const iMax = Math.max(0.05, 220 / (R + r))

    caption(ctx, 'Curva característica  I × ε', px, 26, A)
    plot(ctx, { x: px, y: 36, w: pw, h: h * 0.32 }, {
      xDomain: [0, 220], yDomain: [0, iMax],
      xTicks: 4, yTicks: 4,
      fmtX: v => v.toFixed(0), fmtY: v => v < 1 ? v.toFixed(2) : v.toFixed(1),
      xLabel: 'fem ε (V)', yLabel: 'corrente (A)',
      series: [{
        points: [[0, 0], [220, 220 / (R + r)]],
        color: hexA(A, 0.85), width: 1.8,
      }],
      markers: [{ x: V, y: I, color: Q.kinetic, r: 4 }],
    })
    text(ctx, `inclinação = 1/(R+r) = ${(1 / (R + r)).toFixed(4)} S`, px, h * 0.32 + 60,
      { size: 9, color: C.muted })

    // ── Potência útil × fem: P = ε²·R/(R+r)² ──────────────────────
    const py = h * 0.32 + 90
    const pMax = Math.max(1, 220 * 220 * R / ((R + r) * (R + r)))
    const curve = []
    for (let v = 0; v <= 220; v += 4) curve.push([v, v * v * R / ((R + r) * (R + r))])

    caption(ctx, 'Potência no resistor  P = ε²·R/(R+r)²', px, py - 10, A)
    plot(ctx, { x: px, y: py, w: pw, h: h - py - 52 }, {
      xDomain: [0, 220], yDomain: [0, pMax],
      xTicks: 4, yTicks: 3,
      fmtX: v => v.toFixed(0), fmtY: v => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v.toFixed(0),
      xLabel: 'fem ε (V)', yLabel: 'P (W)',
      series: [{ points: curve, color: Q.thermal, width: 1.8, fill: true }],
      markers: [{ x: V, y: P, color: Q.kinetic, r: 4 }],
    })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

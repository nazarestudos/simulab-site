// ═══════════════════════════════════════════════════════════════════
// MEDICINA — Hematose: a troca gasosa no alvéolo
//
// EQUAÇÃO DO GÁS ALVEOLAR — de onde vem o oxigênio que respiramos:
//
//     P_AO₂ = FiO₂·(P_atm − P_H₂O) − P_aCO₂ / R
//           = 0,21·(760 − 47) − 40/0,8  ≈  100 mmHg
//
// Note o 47: é a pressão do vapor d'água que satura o ar nos pulmões.
// Ignorá-lo é o erro clássico — e joga o cálculo 10 mmHg para cima.
//
// LEI DE FICK — a difusão é passiva, movida só pelo gradiente:
//     V̇gás ∝ (A/T) · D · ΔP
// A membrana alvéolo-capilar tem 0,3 µm de espessura. É o gradiente de
// ~60 mmHg que empurra o O₂ para o sangue, e não uma "bomba".
//
// CURVA DE DISSOCIAÇÃO DA HEMOGLOBINA (equação de Hill, P50 = 26,8 mmHg,
// n = 2,7). O formato em S é o que salva a nossa vida:
//   · O platô no alto significa que mesmo perdendo pressão (altitude,
//     pneumonia leve) a saturação quase não cai — margem de segurança.
//   · A descida íngreme embaixo significa que, nos tecidos, uma queda
//     pequena de pressão descarrega MUITA oxigênio de uma vez.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['medicina']

const P_ATM = 760     // mmHg
const P_H2O = 47      // vapor d'água a 37 °C
const FIO2  = 0.21    // fração de O₂ no ar ambiente
const RQ    = 0.8     // quociente respiratório
const P50   = 26.8    // mmHg — pressão de meia-saturação
const HILL  = 2.7     // coeficiente de Hill (cooperatividade)

/** Saturação da hemoglobina (%) para uma dada PO₂ (mmHg). */
function satAt(po2) {
  const p = Math.max(po2, 0) ** HILL
  return 100 * p / (p + P50 ** HILL)
}

export default function TrocaGasosaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(1212)
    return {
      t: 0,
      breath: 0,
      rbcs: Array.from({ length: 9 }, (_, i) => ({
        u: i / 9,
        po2: 40,             // sangue venoso chega com 40 mmHg
        wob: rand(),
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const br = p.breathingRate ?? 1
    const df = p.diffusionRate ?? 1

    s.t += dt
    s.breath = (s.breath + dt * 0.28 * br) % 1

    // PO₂ alveolar (constante, dada pela equação do gás alveolar)
    const pAO2 = FIO2 * (P_ATM - P_H2O) - 40 / RQ

    for (const r of s.rbcs) {
      r.u = (r.u + dt * 0.15) % 1
      if (r.u < 0.02) r.po2 = 40             // hemácia nova, sangue venoso

      // Fick: a taxa de equilíbrio é proporcional ao gradiente e à
      // capacidade de difusão da membrana.
      const grad = pAO2 - r.po2
      r.po2 += grad * dt * 1.5 * df
      r.po2 = clamp(r.po2, 0, pAO2)
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const br = p.breathingRate ?? 1
    const df = p.diffusionRate ?? 1

    const pAO2  = FIO2 * (P_ATM - P_H2O) - 40 / RQ   // ≈ 100 mmHg
    const pACO2 = 40

    // Sangue arterial: a última hemácia a sair do capilar
    const exiting = s.rbcs.reduce((a, b) => (b.u > a.u ? b : a))
    const paO2 = exiting.po2
    const saO2 = satAt(paO2)
    const aA = pAO2 - paO2       // gradiente alvéolo-arterial

    const compact = w < 720
    const stageW = compact ? w : w * 0.55

    // ══ ALVÉOLO ══════════════════════════════════════════════════
    const ax = stageW * 0.42
    const ay = h * 0.30
    const ar = Math.min(stageW * 0.24, h * 0.20)
    // O alvéolo infla e desinfla — respiração de verdade
    const infl = 1 + Math.sin(s.breath * Math.PI * 2) * 0.09

    ctx.save()
    ctx.translate(ax, ay)
    ctx.scale(infl, infl)
    const ag = ctx.createRadialGradient(-ar * 0.3, -ar * 0.3, ar * 0.1, 0, 0, ar)
    ag.addColorStop(0, hexA('#d8b4c4', 0.16))
    ag.addColorStop(1, hexA('#a67e93', 0.05))
    ctx.fillStyle = ag
    ctx.beginPath(); ctx.arc(0, 0, ar, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = hexA(A, 0.55)
    ctx.lineWidth = 1.4
    ctx.stroke()
    ctx.restore()

    text(ctx, 'ALVÉOLO', ax, ay - 6, { size: 10, weight: 700, color: A, align: 'center', tracking: 1.2 })
    text(ctx, `P_AO₂ ${pAO2.toFixed(0)} mmHg`, ax, ay + 12,
      { size: 9.5, weight: 700, color: Q.potential, align: 'center' })
    text(ctx, `P_ACO₂ ${pACO2} mmHg`, ax, ay + 26,
      { size: 9.5, color: Q.field, align: 'center' })

    // ── Capilar ──────────────────────────────────────────────────
    const cy = ay + ar + 40
    const cx0 = 30, cx1 = stageW - 30
    const ch = 26

    ctx.fillStyle = hexA('#7a3f4f', 0.14)
    ctx.fillRect(cx0, cy, cx1 - cx0, ch)
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.strokeRect(cx0 + 0.5, cy + 0.5, cx1 - cx0, ch)

    // Membrana alvéolo-capilar: 0,3 µm. Fina de propósito.
    ctx.strokeStyle = hexA(A, 0.30 + df * 0.2)
    ctx.lineWidth = clamp(3 / df, 0.8, 6)
    ctx.beginPath()
    ctx.moveTo(cx0, cy); ctx.lineTo(cx1, cy)
    ctx.stroke()
    text(ctx, `membrana ${(0.3 / df).toFixed(2)} µm`, cx1, cy - 6,
      { size: 8, color: C.muted, align: 'right' })

    // Setas de difusão: O₂ entra, CO₂ sai. Os dois seguem o gradiente.
    for (let i = 0; i < 5; i++) {
      const X = cx0 + 40 + i * ((cx1 - cx0 - 80) / 4)
      const ph = (s.t * 1.4 + i * 0.4) % 1
      // O₂ descendo (alvéolo → sangue)
      ctx.fillStyle = hexA(Q.potential, 0.7 * (1 - ph))
      ctx.beginPath(); ctx.arc(X, ay + ar + 6 + ph * (cy - ay - ar - 6), 2.4, 0, Math.PI * 2); ctx.fill()
      // CO₂ subindo (sangue → alvéolo)
      ctx.fillStyle = hexA(Q.field, 0.7 * ph)
      ctx.beginPath(); ctx.arc(X + 14, cy - ph * (cy - ay - ar - 6), 2.4, 0, Math.PI * 2); ctx.fill()
    }
    text(ctx, 'O₂', cx0 + 10, cy - 14, { size: 9, weight: 700, color: Q.potential })
    text(ctx, 'CO₂', cx0 + 34, cy - 14, { size: 9, weight: 700, color: Q.field })

    // ── Hemácias ─────────────────────────────────────────────────
    for (const r of s.rbcs) {
      const X = cx0 + r.u * (cx1 - cx0)
      const Y = cy + ch / 2
      const sat = satAt(r.po2) / 100
      // Azulado (desoxi) → vermelho vivo (oxi). É literalmente por isso
      // que sangue arterial é vermelho e o venoso é escuro.
      const col = mix('#6b4a5c', '#c0392b', sat)
      ctx.fillStyle = col
      ctx.beginPath()
      ctx.ellipse(X, Y, 7, 4.6, 0, 0, Math.PI * 2)
      ctx.fill()
      // depressão central da hemácia (bicôncava)
      ctx.fillStyle = hexA('#000', 0.25)
      ctx.beginPath(); ctx.ellipse(X, Y, 2.6, 1.7, 0, 0, Math.PI * 2); ctx.fill()
    }

    text(ctx, 'venoso  40 mmHg', cx0, cy + ch + 16, { size: 8.5, color: '#6b4a5c' })
    text(ctx, `arterial  ${paO2.toFixed(0)} mmHg`, cx1, cy + ch + 16,
      { size: 8.5, weight: 700, color: '#c0392b', align: 'right' })

    // ══ Leituras ═════════════════════════════════════════════════
    const hypox = saO2 < 90
    readout(ctx, w - 14, 14, [
      { k: 'P_AO₂ alveolar', v: `${pAO2.toFixed(0)} mmHg`, c: Q.potential },
      { k: 'PaO₂ arterial',  v: `${paO2.toFixed(0)} mmHg`, c: hypox ? Q.danger : A },
      { k: 'SaO₂ saturação', v: `${saO2.toFixed(1)} %`, c: hypox ? Q.danger : Q.potential },
      { k: 'gradiente A-a',  v: `${aA.toFixed(0)} mmHg`, c: aA > 20 ? Q.warn : C.ink },
      { k: 'PaCO₂',          v: `${pACO2} mmHg`, c: Q.field },
      { k: 'P50 hemoglobina', v: `${P50} mmHg` },
      { k: 'freq. resp.',    v: `${(12 * br).toFixed(0)} irpm` },
    ], { title: 'Lei de Fick · Hill', anchor: 'right', accent: A, minWidth: 208 })

    const st = hypox
      ? { t: 'HIPOXEMIA — saturação abaixo de 90 %', c: Q.danger }
      : { t: 'troca gasosa normal', c: Q.potential }
    caption(ctx, st.t, 20, 24, st.c)

    if (df < 0.5) {
      text(ctx, 'membrana espessada — como numa fibrose ou num edema pulmonar',
        20, h - 14, { size: 9, color: Q.warn })
    }

    if (compact) return

    // ══ CURVA DE DISSOCIAÇÃO DA HEMOGLOBINA ══════════════════════
    const gx = stageW + 50
    const gw = w - gx - 26
    const gy = h * 0.30
    const gh = h - gy - 56

    caption(ctx, 'Curva de dissociação da hemoglobina', gx, gy - 12, A)

    const curve = []
    for (let i = 0; i <= 120; i++) {
      const po2 = (i / 120) * 110
      curve.push([po2, satAt(po2)])
    }

    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, 110], yDomain: [0, 100],
      xTicks: 4, yTicks: 4,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'PO₂ (mmHg)', yLabel: 'saturação (%)',
      rules: [
        { y: 90, color: hexA(Q.danger, 0.5), label: 'limiar 90 %' },
        { x: P50, color: hexA(C.ink, 0.25), label: 'P50' },
      ],
      series: [{ points: curve, color: A, width: 2, fill: true }],
      markers: [
        { x: 40,    y: satAt(40),  color: '#6b4a5c', r: 4 },   // venoso
        { x: paO2,  y: saO2,       color: '#c0392b', r: 4.5 }, // arterial
      ],
    })

    // Anotações nos dois pontos que importam
    text(ctx, 'venoso', gx + (40 / 110) * gw + 6, gy + gh - (satAt(40) / 100) * gh - 8,
      { size: 8.5, color: '#8f6b7a' })
    text(ctx, 'arterial', gx + (paO2 / 110) * gw - 6, gy + gh - (saO2 / 100) * gh - 8,
      { size: 8.5, weight: 700, color: '#c0392b', align: 'right' })

    text(ctx, 'o platô é a margem de segurança;', gx, h - 30, { size: 8.5, color: C.muted })
    text(ctx, 'a rampa é a entrega de O₂ aos tecidos', gx, h - 17, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

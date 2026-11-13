// ═══════════════════════════════════════════════════════════════════
// QUÍMICA — Termoquímica: Entalpia e Coordenada de Reação
//
// O diagrama de energia é o mapa de uma reação. Dois números o governam:
//
//   Eₐ (energia de ativação) — o morro que os reagentes precisam subir.
//                              Controla a VELOCIDADE.
//   ΔH (variação de entalpia) — a diferença de altura entre o ponto de
//                              partida e o de chegada. Controla o CALOR.
//
// São independentes! Uma reação muito exotérmica pode ser lentíssima
// (o diamante virando grafite libera energia e leva bilhões de anos).
//
// ΔH < 0 → exotérmica: sobra energia, o meio esquenta.
// ΔH > 0 → endotérmica: falta energia, o meio esfria. É assim que uma
//          bolsa de gelo instantâneo funciona.
//
// O calorímetro à direita usa q = m·c·ΔT com água de verdade
// (c = 4,18 J/g·°C) para converter kJ em graus.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, mix, rng,
} from '../engine'

const A  = ACCENT['quimica']
const MASS_H2O = 100   // g de água no calorímetro
const C_H2O = 4.18     // J/(g·°C)
const N_MOL = 0.10     // mol de reagente

export default function TermodinamicaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(140)
    return {
      x: 0,            // coordenada de reação ∈ [0,1]
      dir: 1,
      cycles: 0,
      temp: 25,        // °C do calorímetro
      particles: Array.from({ length: 40 }, () => ({
        x: rand(), y: rand(), ph: rand() * Math.PI * 2,
      })),
      t: 0,
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const speed = p.speed ?? 1
    const dH = p.deltaH ?? -50

    s.t += dt
    s.x += s.dir * dt * 0.30 * speed
    if (s.x >= 1) { s.x = 0; s.cycles++ }   // reagentes novos entram

    // Calorímetro: q = n·ΔH  →  ΔT = q / (m·c)
    // Exotérmica (ΔH < 0) aquece a água; endotérmica esfria.
    const qTotal = -dH * 1000 * N_MOL            // J liberados no meio
    const dTfull = qTotal / (MASS_H2O * C_H2O)   // °C ao completar 1 ciclo
    const target = 25 + dTfull * clamp(s.cycles + s.x, 0, 1)
    s.temp += (target - s.temp) * clamp(dt * 1.5, 0, 1)

    for (const q of s.particles) q.ph += dt * (1 + Math.abs(s.temp - 25) / 20)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const dH = p.deltaH ?? -50         // kJ/mol
    const EA = p.activation ?? 60      // kJ/mol — barreira de ativação (independente de ΔH)
    const exo = dH < 0

    const compact = w < 700
    const gw = compact ? w - 60 : w * 0.60 - 60
    const gx = 46
    const gy = h * 0.16
    const gh = h * 0.58

    // ── Perfil energético ─────────────────────────────────────────
    // E(x) = ΔH·x  +  Eₐ·[curva de barreira centrada em x = 0,5]
    // A barreira é uma gaussiana; o patamar final fica exatamente em ΔH.
    const energyAt = x => {
      const barrier = EA * Math.exp(-((x - 0.5) ** 2) / (2 * 0.030))
      const ramp = dH * (1 / (1 + Math.exp(-(x - 0.5) * 11)))  // sigmoide
      return ramp + barrier
    }

    const curve = []
    for (let i = 0; i <= 200; i++) {
      const x = i / 200
      curve.push([x, energyAt(x)])
    }
    const eMin = Math.min(0, dH) - 25
    const eMax = EA + Math.max(0, dH) + 25

    caption(ctx, 'Coordenada de reação', gx, gy - 12, A)

    const { sx, sy } = plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, 1], yDomain: [eMin, eMax],
      xTicks: 4, yTicks: 4,
      fmtX: () => '', fmtY: q => q.toFixed(0),
      yLabel: 'entalpia H (kJ/mol)',
      rules: [
        { y: 0,  color: hexA(C.ink, 0.25), label: 'reagentes' },
        { y: dH, color: exo ? hexA(Q.thermal, 0.7) : hexA('#7f8fc2', 0.7), label: 'produtos' },
      ],
      series: [{ points: curve, color: hexA(A, 0.9), width: 2 }],
      markers: [{ x: s.x, y: energyAt(s.x), color: Q.kinetic, r: 4.5 }],
    })

    // Setas de Eₐ e ΔH — as duas grandezas, lado a lado
    const xPeak = sx(0.5), yPeak = sy(EA)
    const y0 = sy(0), yP = sy(dH)

    // Eₐ
    ctx.strokeStyle = hexA(Q.warn, 0.8)
    ctx.lineWidth = 1.2
    ctx.setLineDash([2, 3])
    ctx.beginPath()
    ctx.moveTo(sx(0.06), y0); ctx.lineTo(xPeak + 34, y0)
    ctx.moveTo(sx(0.06), yPeak); ctx.lineTo(xPeak + 34, yPeak)
    ctx.stroke()
    ctx.setLineDash([])
    ctx.beginPath()
    ctx.moveTo(xPeak + 26, y0); ctx.lineTo(xPeak + 26, yPeak)
    ctx.stroke()
    text(ctx, `Eₐ = ${EA} kJ/mol`, xPeak + 32, (y0 + yPeak) / 2 + 3,
      { size: 9, weight: 700, color: Q.warn })

    // ΔH
    const dhCol = exo ? Q.thermal : '#7f8fc2'
    ctx.strokeStyle = hexA(dhCol, 0.8)
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(sx(0.93), y0); ctx.lineTo(sx(0.93), yP)
    ctx.stroke()
    // ponta
    ctx.fillStyle = dhCol
    ctx.beginPath()
    ctx.moveTo(sx(0.93), yP)
    ctx.lineTo(sx(0.93) - 3.5, yP + (exo ? -6 : 6))
    ctx.lineTo(sx(0.93) + 3.5, yP + (exo ? -6 : 6))
    ctx.closePath(); ctx.fill()
    text(ctx, `ΔH = ${dH > 0 ? '+' : ''}${dH} kJ/mol`, sx(0.93) - 6, (y0 + yP) / 2,
      { size: 9, weight: 700, color: dhCol, align: 'right' })

    // Complexo ativado
    text(ctx, 'complexo ativado', xPeak, yPeak - 10,
      { size: 8.5, color: C.muted, align: 'center' })

    // Rótulo do regime
    const regime = exo
      ? { t: 'EXOTÉRMICA — libera calor, o meio esquenta', c: Q.thermal }
      : { t: 'ENDOTÉRMICA — absorve calor, o meio esfria', c: '#7f8fc2' }
    caption(ctx, regime.t, gx, 24, regime.c)

    // ── Leituras ──────────────────────────────────────────────────
    const q_kJ = Math.abs(dH) * N_MOL             // kJ trocados
    const dT = (Math.abs(dH) * 1000 * N_MOL) / (MASS_H2O * C_H2O)

    readout(ctx, w - 14, 14, [
      { k: 'ΔH  entalpia', v: `${dH > 0 ? '+' : ''}${dH} kJ/mol`, c: dhCol },
      { k: 'Eₐ  ativação', v: `${EA} kJ/mol`, c: Q.warn },
      { k: 'Eₐ reversa',   v: `${(EA - dH).toFixed(0)} kJ/mol` },
      { k: 'n  reagente',  v: `${N_MOL} mol` },
      { k: 'q  calor',     v: `${exo ? '−' : '+'}${q_kJ.toFixed(1)} kJ`, c: dhCol },
      { k: 'ΔT  na água',  v: `${exo ? '+' : '−'}${dT.toFixed(1)} °C`, c: dhCol },
      { k: 'T  calorímetro', v: `${s.temp.toFixed(1)} °C`, c: mix('#6f9ec2', '#c2704f', clamp((s.temp - 5) / 60, 0, 1)) },
    ], { title: 'q = m·c·ΔT', anchor: 'right', accent: A, minWidth: 208 })

    if (compact) return

    // ── Calorímetro ───────────────────────────────────────────────
    const cxp = w * 0.60 + 30
    const cw = Math.min(w - cxp - 30, 130)
    const cy = h * 0.30
    const chh = h * 0.42

    caption(ctx, 'Calorímetro · 100 g H₂O', cxp, cy - 12, C.muted)

    const heatF = clamp((s.temp - 5) / 60, 0, 1)
    const wCol = mix('#6f9ec2', '#c2704f', heatF)

    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.2
    ctx.strokeRect(cxp + 0.5, cy + 0.5, cw, chh)

    ctx.save()
    ctx.beginPath(); ctx.rect(cxp, cy + chh * 0.2, cw, chh * 0.8); ctx.clip()
    ctx.fillStyle = hexA(wCol, 0.25)
    ctx.fillRect(cxp, cy + chh * 0.2, cw, chh)

    // Agitação térmica: mais quente, mais rápido
    for (const q of s.particles) {
      const X = cxp + q.x * cw + Math.sin(q.ph) * 3
      const Y = cy + chh * 0.2 + q.y * chh * 0.8 + Math.cos(q.ph * 1.3) * 3
      ctx.fillStyle = hexA(wCol, 0.65)
      ctx.beginPath(); ctx.arc(X, Y, 1.8, 0, Math.PI * 2); ctx.fill()
    }
    ctx.restore()

    // Termômetro
    const tx = cxp + cw + 14
    const th = chh * 0.8
    const ty = cy + chh * 0.1
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(tx, ty, 7, th)
    const tf = clamp((s.temp - 0) / 70, 0, 1)
    ctx.fillStyle = wCol
    ctx.fillRect(tx, ty + th * (1 - tf), 7, th * tf)
    ctx.strokeStyle = C.faint
    ctx.strokeRect(tx + 0.5, ty + 0.5, 7, th)
    text(ctx, `${s.temp.toFixed(1)}°C`, tx + 3.5, ty - 8,
      { size: 10, weight: 700, color: wCol, align: 'center' })

    text(ctx, exo ? 'a água esquenta' : 'a água esfria', cxp, cy + chh + 20,
      { size: 9, color: dhCol })
    text(ctx, 'Eₐ muda a velocidade,', cxp, cy + chh + 40, { size: 8.5, color: C.muted })
    text(ctx, 'ΔH muda o calor. São independentes.', cxp, cy + chh + 53,
      { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

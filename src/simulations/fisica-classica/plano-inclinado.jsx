// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Plano Inclinado
//
// O bloco na rampa decompõe o peso em duas componentes:
//   · ao longo do plano:   W∥ = m·g·sen θ   (puxa para baixo da rampa)
//   · perpendicular:       W⊥ = m·g·cos θ   (equilibrada pela normal N)
//
// Ele desliza quando W∥ vence o atrito estático máximo:
//   m·g·sen θ > μ·N = μ·m·g·cos θ   →   tan θ > μ
//
// Repare: a massa se CANCELA na condição — um piano e uma moeda deslizam
// no mesmo ângulo. Deslizando, a aceleração é a = g·(sen θ − μ·cos θ).
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const RAD = Math.PI / 180

export default function PlanoInclinadoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ f: 0.18, v: 0 }), [])

  const step = useCallback((s, dt, p) => {
    const th = (p.angulo ?? 30) * RAD
    const mu = p.atrito ?? 0.3
    const desliza = Math.tan(th) > mu + 1e-6
    if (desliza) {
      const a = G * (Math.sin(th) - mu * Math.cos(th))   // ao longo da rampa
      s.v += a * dt
      s.f += (s.v * dt) / 6           // 6 m de rampa "lógica"
      if (s.f >= 0.94) { s.f = 0.18; s.v = 0 }
    } else {
      s.f = 0.18; s.v = 0
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const deg = p.angulo ?? 30
    const th  = deg * RAD
    const m   = p.massa ?? 2
    const mu  = p.atrito ?? 0.3

    const desliza = Math.tan(th) > mu + 1e-6
    const N   = m * G * Math.cos(th)          // normal
    const Wpar = m * G * Math.sin(th)         // peso ao longo do plano
    const fMax = mu * N                        // atrito estático máximo
    const atrito = desliza ? mu * N : Math.min(Wpar, fMax)
    const a   = desliza ? G * (Math.sin(th) - mu * Math.cos(th)) : 0

    // ── Geometria da rampa ────────────────────────────────────────
    const compact = w < 640
    const groundY = h * 0.80
    const ax = w * (compact ? 0.16 : 0.24)     // apex (topo da rampa), x
    const maxL = (compact ? w * 0.62 : w * 0.56)
    // comprimento tal que a rampa caiba na altura útil
    const L = Math.min(maxL, (groundY - h * 0.14) / Math.max(Math.sin(th), 0.12))
    const bx = ax + L * Math.cos(th)
    const by = h * 0.20 + 0                      // apex y (fixo no topo)
    const apexY = groundY - L * Math.sin(th)
    const rampBx = ax + L * Math.cos(th)
    const rampBy = groundY

    // triângulo do plano
    ctx.fillStyle = hexA(A, 0.08)
    ctx.strokeStyle = hexA(A, 0.55)
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(ax, apexY)
    ctx.lineTo(ax, rampBy)
    ctx.lineTo(rampBx, rampBy)
    ctx.closePath()
    ctx.fill(); ctx.stroke()

    // ângulo marcado no canto inferior
    ctx.strokeStyle = hexA(A, 0.7); ctx.lineWidth = 1.2
    ctx.beginPath(); ctx.arc(rampBx, rampBy, 26, Math.PI, Math.PI + th, false); ctx.stroke()
    text(ctx, `${deg}°`, rampBx - 40, rampBy - 8, { size: 10, weight: 700, color: A })

    // chão
    ctx.strokeStyle = hexA(C.ink, 0.25); ctx.lineWidth = 1.2
    ctx.beginPath(); ctx.moveTo(0, groundY + 0.5); ctx.lineTo(w, groundY + 0.5); ctx.stroke()

    // ── Bloco na rampa ────────────────────────────────────────────
    // versor descida (rampa) e normal (para fora)
    const dx = Math.cos(th), dy = Math.sin(th)      // descendo a rampa (x+, y+)
    const nx = Math.sin(th), ny = -Math.cos(th)     // normal para fora (cima-direita)
    const px = ax + s.f * L * dx
    const py = apexY + s.f * L * dy
    const bs = clamp(16 + Math.cbrt(m) * 8, 20, 44)

    ctx.save()
    ctx.translate(px, py)
    ctx.rotate(th)
    ctx.fillStyle = hexA(A, 0.22)
    ctx.fillRect(-bs / 2, -bs, bs, bs)          // apoiado na rampa
    ctx.strokeStyle = hexA(A, 0.85); ctx.lineWidth = 1.3
    ctx.strokeRect(-bs / 2 + 0.5, -bs + 0.5, bs, bs)
    text(ctx, `${m} kg`, 0, -bs / 2 + 3, { size: 9, weight: 700, color: C.ink, align: 'center' })
    ctx.restore()

    // centro do bloco (na superfície + meia altura pela normal)
    const cxB = px + nx * bs / 2
    const cyB = py + ny * bs / 2

    // ── Vetores de força ──────────────────────────────────────────
    // O peso sempre mede 84 px; as outras forças saem na mesma escala.
    // (Um teto fixo na escala deixava as setas com 10 px em massas pequenas.)
    const fs = 84 / (m * G)
    // Peso (para baixo)
    arrow(ctx, cxB, cyB, cxB, cyB + m * G * fs, { color: hexA(C.ink, 0.4), width: 1.6, label: 'P' })
    // Normal (para fora da rampa)
    arrow(ctx, cxB, cyB, cxB + nx * N * fs, cyB + ny * N * fs, { color: Q.force, width: 1.8, label: 'N' })
    // Peso ao longo do plano (descendo)
    arrow(ctx, cxB, cyB, cxB + dx * Wpar * fs, cyB + dy * Wpar * fs, { color: Q.kinetic, width: 1.8, label: 'W∥' })
    // Atrito (subindo a rampa, contra o movimento)
    if (atrito > 0.1) {
      arrow(ctx, cxB, cyB, cxB - dx * atrito * fs, cyB - dy * atrito * fs, { color: Q.thermal, width: 1.8, label: 'f' })
    }

    // ── Estado ────────────────────────────────────────────────────
    const est = desliza
      ? { t: 'DESLIZA — W∥ vence o atrito (tan θ > μ)', c: Q.kinetic }
      : { t: 'EM REPOUSO — o atrito segura (tan θ ≤ μ)', c: Q.potential }
    caption(ctx, est.t, 16, 24, est.c)

    // ── HUD ───────────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'θ  ângulo',   v: `${deg}°`, c: A },
      { k: 'm  massa',    v: `${m} kg` },
      { k: 'μ  atrito',   v: mu.toFixed(2), c: Q.thermal },
      { k: 'N  normal',   v: `${N.toFixed(1)} N`, c: Q.force },
      { k: 'W∥ = mg·senθ', v: `${Wpar.toFixed(1)} N`, c: Q.kinetic },
      { k: 'f  atrito',   v: `${atrito.toFixed(1)} N`, c: Q.thermal },
      { k: 'a  aceleração', v: `${a.toFixed(2)} m/s²`, c: desliza ? Q.kinetic : C.dim },
      { k: 'tan θ  vs  μ', v: `${Math.tan(th).toFixed(2)} vs ${mu.toFixed(2)}` },
    ], { title: 'a = g(senθ − μcosθ)', anchor: 'right', accent: A, minWidth: 206 })

    caption(ctx, 'a massa se cancela na condição de deslizar', 16, h - 16, C.muted)
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

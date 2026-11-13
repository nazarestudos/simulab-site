// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Máquina de Atwood
//
// Duas massas ligadas por um fio sobre uma polia. Aplicando a 2ª Lei a
// cada bloco e somando, a tração some e sobra:
//
//   a = (m₁ − m₂)·g / (m₁ + m₂)      T = 2·m₁·m₂·g / (m₁ + m₂)
//
// Quando as massas são iguais, a = 0 (equilíbrio). Quando muito
// diferentes, a → g (queda quase livre). Foi assim que Atwood, no século
// XVIII, "desacelerou" a gravidade para poder medi-la à mão.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8

export default function AtwoodCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ y: 0, v: 0 }), [])

  const step = useCallback((s, dt, p) => {
    const m1 = p.massa1 ?? 3
    const m2 = p.massa2 ?? 2
    const a = ((m1 - m2) / (m1 + m2)) * G      // + = m1 desce
    s.v += a * dt
    s.y += s.v * dt
    if (Math.abs(s.y) > 2.2) { s.y = 0; s.v = 0 }   // reinicia a "corrida"
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const m1 = p.massa1 ?? 3
    const m2 = p.massa2 ?? 2
    const a = ((m1 - m2) / (m1 + m2)) * G
    const T = (2 * m1 * m2 * G) / (m1 + m2)

    // ── Geometria ─────────────────────────────────────────────────
    const cx = w * 0.5
    const pulleyY = h * 0.16
    const rP = 44
    const gap = rP                       // os fios descem na vertical, tangentes à polia
    const ppm = (h * 0.5) / 2.5          // px por metro de deslocamento
    const restY = h * 0.44               // altura de repouso dos blocos

    // suporte + polia
    ctx.strokeStyle = C.faint; ctx.lineWidth = 1.4
    ctx.beginPath(); ctx.moveTo(cx - 60, pulleyY - rP - 8); ctx.lineTo(cx + 60, pulleyY - rP - 8); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx, pulleyY - rP - 8); ctx.lineTo(cx, pulleyY - rP); ctx.stroke()
    ctx.strokeStyle = hexA(A, 0.8); ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(cx, pulleyY, rP, 0, Math.PI * 2); ctx.stroke()
    ctx.fillStyle = C.dim
    ctx.beginPath(); ctx.arc(cx, pulleyY, 3, 0, Math.PI * 2); ctx.fill()

    // posições dos blocos (m1 à esquerda, desce quando y>0)
    const y1 = restY + s.y * ppm
    const y2 = restY - s.y * ppm
    const x1 = cx - gap, x2 = cx + gap

    // fios
    ctx.strokeStyle = hexA(C.ink, 0.4); ctx.lineWidth = 1.3
    ctx.beginPath(); ctx.moveTo(cx - rP, pulleyY); ctx.lineTo(x1, y1); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(cx + rP, pulleyY); ctx.lineTo(x2, y2); ctx.stroke()

    // blocos (lado ∝ ∛m)
    const drawBloco = (x, y, m, label) => {
      const bs = clamp(20 + Math.cbrt(m) * 9, 24, 58)
      ctx.fillStyle = hexA(A, 0.2)
      ctx.fillRect(x - bs / 2, y, bs, bs)
      ctx.strokeStyle = hexA(A, 0.85); ctx.lineWidth = 1.3
      ctx.strokeRect(x - bs / 2 + 0.5, y + 0.5, bs, bs)
      text(ctx, `${m} kg`, x, y + bs / 2 + 4, { size: 9.5, weight: 700, color: C.ink, align: 'center' })
      text(ctx, label, x, y - 8, { size: 9, weight: 700, color: A, align: 'center' })
      // vetores peso e tração
      const fs = 64 / (Math.max(m1, m2) * G)   // o maior peso mede 64 px
      arrow(ctx, x, y + bs, x, y + bs + m * G * fs, { color: hexA(C.ink, 0.4), width: 1.5, label: 'P' })
      arrow(ctx, x, y, x, y - T * fs, { color: Q.force, width: 1.7, label: 'T' })
    }
    drawBloco(x1, y1, m1, 'm₁')
    drawBloco(x2, y2, m2, 'm₂')

    // ── Estado ────────────────────────────────────────────────────
    const est = Math.abs(m1 - m2) < 1e-9
      ? { t: 'EQUILÍBRIO — massas iguais, a = 0', c: Q.potential }
      : { t: `${m1 > m2 ? 'm₁' : 'm₂'} desce (a favor da massa maior)`, c: Q.kinetic }
    caption(ctx, est.t, 16, 24, est.c)

    // ── HUD ───────────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'm₁', v: `${m1} kg`, c: A },
      { k: 'm₂', v: `${m2} kg`, c: A },
      { k: 'a  aceleração', v: `${Math.abs(a).toFixed(2)} m/s²`, c: Q.kinetic },
      { k: 'T  tração', v: `${T.toFixed(1)} N`, c: Q.force },
      { k: 'P₁ = m₁g', v: `${(m1 * G).toFixed(1)} N` },
      { k: 'P₂ = m₂g', v: `${(m2 * G).toFixed(1)} N` },
      { k: 'a / g', v: `${(Math.abs(a) / G * 100).toFixed(0)} %` },
    ], { title: 'a = (m₁−m₂)g/(m₁+m₂)', anchor: 'right', accent: A, minWidth: 206 })

    caption(ctx, 'a tração é a mesma nos dois fios (fio ideal)', 16, h - 16, C.muted)
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

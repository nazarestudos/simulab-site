// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Ondas Estacionárias numa Corda
//
// Numa corda presa nas duas pontas, só "cabem" ondas cujos comprimentos
// fecham certinho nas extremidades (que são sempre NÓS). Isso quantiza
// as frequências possíveis — os HARMÔNICOS:
//
//   λₙ = 2L / n        fₙ = n · v / (2L) = n · f₁
//   y(x,t) = A · sen(nπx/L) · cos(2πfₙ·t)
//
// n = 1 é o modo fundamental; n = 2, 3, … os harmônicos. Os pontos
// parados são os NÓS; os de oscilação máxima, os VENTRES. É assim que
// uma corda de violão, um mesmo comprimento, produz notas diferentes.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  glow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const L = 1.0   // comprimento "lógico" da corda (m)

export default function OndasEstacionariasCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0 }), [])
  const step = useCallback((s, dt) => { s.t += dt }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const n   = Math.max(1, Math.round(p.harmonico ?? 1))
    const amp = (p.amplitude ?? 60) / 100
    const vel = p.velocidade ?? 10           // velocidade de propagação (m/s)

    const lambda = (2 * L) / n
    const freq = vel / lambda                // = n·v/2L
    const omega = 2 * Math.PI * freq

    // ── Geometria ─────────────────────────────────────────────────
    const pad = 60
    const x0 = pad, x1 = w - pad
    const midY = h * 0.46
    const ampPx = Math.min(h * 0.26, 120) * amp
    const phase = Math.cos(omega * s.t * 0.35)   // câmera lenta

    // eixo/posição de repouso
    ctx.strokeStyle = C.grid; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x0, midY + 0.5); ctx.lineTo(x1, midY + 0.5); ctx.stroke()

    // envelope (as duas posições extremas, tracejadas)
    ctx.strokeStyle = hexA(A, 0.22); ctx.setLineDash([3, 4]); ctx.lineWidth = 1
    for (const sgn of [1, -1]) {
      ctx.beginPath()
      for (let i = 0; i <= 200; i++) {
        const xn = i / 200
        const px = x0 + xn * (x1 - x0)
        const py = midY - sgn * ampPx * Math.sin(n * Math.PI * xn)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
    }
    ctx.setLineDash([])

    // a corda no instante t
    ctx.strokeStyle = A; ctx.lineWidth = 2.4; ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let i = 0; i <= 240; i++) {
      const xn = i / 240
      const px = x0 + xn * (x1 - x0)
      const py = midY - ampPx * Math.sin(n * Math.PI * xn) * phase
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
    }
    ctx.stroke()

    // presilhas nas pontas
    for (const px of [x0, x1]) {
      ctx.fillStyle = C.dim
      ctx.fillRect(px - 3, midY - 12, 6, 24)
    }

    // ── Nós e ventres ─────────────────────────────────────────────
    // nós: x = k·L/n (k = 0..n) → xn = k/n
    for (let k = 0; k <= n; k++) {
      const px = x0 + (k / n) * (x1 - x0)
      ctx.fillStyle = Q.warn
      ctx.beginPath(); ctx.arc(px, midY, 3, 0, Math.PI * 2); ctx.fill()
    }
    text(ctx, 'nós (parados)', x0, midY + 22, { size: 8.5, color: Q.warn })
    // ventres: no meio de cada segmento
    for (let k = 0; k < n; k++) {
      const xn = (k + 0.5) / n
      const px = x0 + xn * (x1 - x0)
      const py = midY - ampPx * Math.sin(n * Math.PI * xn) * phase
      glow(ctx, px, py, 2.6, Q.velocity, 0.7)
    }

    caption(ctx, `${n}º harmônico  ·  ${n} ventre${n > 1 ? 's' : ''}  ·  ${n + 1} nós`, 16, 24, A)

    // ── HUD ───────────────────────────────────────────────────────
    const nome = n === 1 ? 'fundamental' : `${n}º harmônico`
    readout(ctx, w - 14, 14, [
      { k: 'n  harmônico', v: `${n}`, c: A },
      { k: 'modo', v: nome, c: Q.field },
      { k: 'v  propagação', v: `${vel.toFixed(0)} m/s`, c: Q.velocity },
      { k: 'λ = 2L/n', v: `${lambda.toFixed(2)} L`, c: Q.kinetic },
      { k: 'f = n·v/2L', v: `${freq.toFixed(1)} Hz`, c: Q.warn },
      { k: 'f / f₁', v: `${n}×` },
      { k: 'nós · ventres', v: `${n + 1} · ${n}` },
    ], { title: 'λₙ = 2L / n', anchor: 'right', accent: A, minWidth: 200 })

    caption(ctx, 'só cabem ondas que fecham em nós nas duas pontas', 16, h - 16, C.muted)
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

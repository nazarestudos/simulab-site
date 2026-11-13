// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Lançamento de Projétil
//
// A composição de dois movimentos independentes, que é o coração da
// cinemática 2D:
//   · horizontal → MRU     (vₓ = v₀·cos θ, constante: nada o acelera)
//   · vertical   → MRUV    (v_y = v₀·sen θ − g·t, puxado pela gravidade)
//
// O resultado é a parábola. As fórmulas do HUD saem daí:
//   tempo de voo   T = 2·v₀·sen θ / g
//   altura máxima  H = (v₀·sen θ)² / (2g)
//   alcance        A = v₀²·sen(2θ) / g   ← máximo em θ = 45°
//
// A trajetória de 45° fica desenhada em tracejado como referência: dá
// para ver na hora que nenhum outro ângulo alcança mais longe.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, glow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const RAD = Math.PI / 180

export default function LancamentoProjetilCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0 }), [])

  const step = useCallback((s, dt, p) => {
    const v0 = p.v0 ?? 25
    const ang = (p.angulo ?? 45) * RAD
    const g = p.gravidade ?? 9.8
    const T = (2 * v0 * Math.sin(ang)) / g       // tempo de voo

    s.t += dt
    // pequena pausa no fim antes de relançar
    if (s.t > T + 0.6) s.t = 0
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const v0  = p.v0 ?? 25
    const deg = p.angulo ?? 45
    const ang = deg * RAD
    const g   = p.gravidade ?? 9.8

    // ── Grandezas analíticas ──────────────────────────────────────
    const T = (2 * v0 * Math.sin(ang)) / g              // tempo de voo
    const H = (v0 * Math.sin(ang)) ** 2 / (2 * g)       // altura máxima
    const R = (v0 * v0 * Math.sin(2 * ang)) / g         // alcance

    // ── Escala estável: baseada no alcance MÁXIMO possível (45°) ──
    // Assim mudar o ângulo não faz a tela "pular" de zoom.
    const refMax = (v0 * v0) / g                        // alcance a 45°
    const padL = 46, padR = 24, padB = 46, padT = 30
    const usableW = w - padL - padR
    const usableH = h - padT - padB
    const ppm = Math.min(usableW / Math.max(refMax, 1), usableH / Math.max(refMax / 2, 1))

    const ox = padL                       // origem (ponto de lançamento)
    const oy = h - padB
    const X = x => ox + x * ppm
    const Y = y => oy - y * ppm

    // ── Chão e eixo de distância ──────────────────────────────────
    ctx.strokeStyle = hexA(C.ink, 0.28)
    ctx.lineWidth = 1.2
    ctx.beginPath(); ctx.moveTo(0, oy + 0.5); ctx.lineTo(w, oy + 0.5); ctx.stroke()

    // marcas de distância a cada 10 m (ou 25 m se estiver apertado)
    const stepM = refMax > 160 ? 25 : 10
    ctx.strokeStyle = C.grid
    for (let d = stepM; X(d) < w - 4; d += stepM) {
      ctx.beginPath(); ctx.moveTo(X(d) + 0.5, oy); ctx.lineTo(X(d) + 0.5, oy - usableH); ctx.stroke()
      text(ctx, `${d}`, X(d), oy + 14, { size: 8, color: C.muted, align: 'center' })
    }
    text(ctx, 'distância (m)', w - 12, oy + 30, { size: 8.5, color: C.muted, align: 'right' })

    // ── Trajetória de referência a 45° (alcance máximo) ───────────
    if (Math.abs(deg - 45) > 0.5) {
      const a45 = 45 * RAD
      const T45 = (2 * v0 * Math.sin(a45)) / g
      ctx.strokeStyle = hexA(C.ink, 0.16)
      ctx.setLineDash([3, 4]); ctx.lineWidth = 1
      ctx.beginPath()
      for (let i = 0; i <= 90; i++) {
        const t = (i / 90) * T45
        const px = X(v0 * Math.cos(a45) * t)
        const py = Y(v0 * Math.sin(a45) * t - 0.5 * g * t * t)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke(); ctx.setLineDash([])
      text(ctx, '45° · alcance máximo', X(refMax) - 6, Y(refMax / 4) - 6,
        { size: 8.5, color: C.muted, align: 'right' })
    }

    // ── Trajetória atual (a parábola) ─────────────────────────────
    ctx.strokeStyle = hexA(A, 0.85)
    ctx.lineWidth = 2.2
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let i = 0; i <= 120; i++) {
      const t = (i / 120) * T
      const px = X(v0 * Math.cos(ang) * t)
      const py = Y(v0 * Math.sin(ang) * t - 0.5 * g * t * t)
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
    }
    ctx.stroke()

    // ── Marcadores de altura máxima e alcance ─────────────────────
    if (H > 0.5) {
      const xH = R / 2
      ctx.strokeStyle = hexA(Q.kinetic, 0.4)
      ctx.setLineDash([3, 3]); ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(X(0), Y(H)); ctx.lineTo(X(xH), Y(H)); ctx.stroke()
      ctx.setLineDash([])
      text(ctx, `H = ${H.toFixed(1)} m`, X(0) + 6, Y(H) - 6,
        { size: 9, weight: 700, color: Q.kinetic })
    }
    if (R > 0.5) {
      glow(ctx, X(R), Y(0), 3, Q.warn, 0.8)
      text(ctx, `${R.toFixed(1)} m`, X(R), oy - 10,
        { size: 9.5, weight: 700, color: Q.warn, align: 'center' })
    }

    // ── Projétil em voo ───────────────────────────────────────────
    const t = clamp(s.t, 0, T)
    const px = v0 * Math.cos(ang) * t
    const py = v0 * Math.sin(ang) * t - 0.5 * g * t * t
    const vx = v0 * Math.cos(ang)                 // constante (MRU)
    const vy = v0 * Math.sin(ang) - g * t         // varia (MRUV)

    if (s.t <= T) {
      // vetores componentes: vₓ constante, v_y mudando
      const vs = ppm * 0.55
      arrow(ctx, X(px), Y(py), X(px) + vx * vs, Y(py), { color: Q.velocity, width: 1.7, label: 'vₓ' })
      arrow(ctx, X(px), Y(py), X(px), Y(py) - vy * vs, { color: Q.velocity, width: 1.7, label: 'v_y' })
      glow(ctx, X(px), Y(py), 4, A, 0.95)
    }

    // canhão / ponto de lançamento
    ctx.strokeStyle = hexA(C.ink, 0.5)
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(X(0), Y(0))
    ctx.lineTo(X(0) + Math.cos(ang) * 22, Y(0) - Math.sin(ang) * 22)
    ctx.stroke()
    text(ctx, `${deg.toFixed(0)}°`, X(0) + 26, Y(0) - 6, { size: 9.5, weight: 700, color: C.dim })

    // ── HUD ───────────────────────────────────────────────────────
    const otimo = Math.abs(deg - 45) < 0.6
    readout(ctx, w - 14, 14, [
      { k: 'v₀  velocidade', v: `${v0.toFixed(0)} m/s`, c: A },
      { k: 'θ   ângulo', v: `${deg.toFixed(0)}°`, c: otimo ? Q.potential : C.ink },
      { k: 'g   gravidade', v: `${g.toFixed(1)} m/s²`, c: Q.field },
      { k: 'vₓ  (constante)', v: `${vx.toFixed(1)} m/s`, c: Q.velocity },
      { k: 'v_y (varia)', v: `${(s.t <= T ? vy : 0).toFixed(1)} m/s`, c: Q.velocity },
      { k: 'A   alcance', v: `${R.toFixed(1)} m`, c: Q.warn },
      { k: 'H   altura máx', v: `${H.toFixed(1)} m`, c: Q.kinetic },
      { k: 'T   tempo de voo', v: `${T.toFixed(2)} s` },
    ], { title: 'A = v₀²·sen(2θ) / g', anchor: 'right', accent: A, minWidth: 202 })

    caption(ctx,
      otimo ? '45° — o ângulo de alcance máximo' : 'horizontal: MRU  ·  vertical: MRUV  →  parábola',
      16, 22, otimo ? Q.potential : C.muted)
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

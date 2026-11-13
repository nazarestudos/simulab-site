// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Movimento Circular Uniforme
//
// A velocidade tem MÓDULO constante, mas a DIREÇÃO muda o tempo todo —
// e mudar a direção da velocidade É uma aceleração. Ela aponta sempre
// para o centro (centrípeta):
//
//   a_c = v² / r        F_c = m·a_c = m·v²/r
//   ω = v/r    T = 2πr/v    f = 1/T
//
// Sem uma força apontando para o centro (a tração do barbante, o atrito
// do pneu, a gravidade), não há curva: o corpo sairia em linha reta pela
// tangente — a 1ª Lei de Newton. A seta pontilhada mostra essa fuga.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, glow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']

export default function MovimentoCircularCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ ang: 0 }), [])

  const step = useCallback((s, dt, p) => {
    const r = p.raio ?? 2
    const v = p.velocidade ?? 6
    const omega = v / r                  // rad/s
    s.ang += omega * dt
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const r = p.raio ?? 2
    const v = p.velocidade ?? 6
    const m = p.massa ?? 1

    const omega = v / r                  // rad/s
    const T = (2 * Math.PI * r) / v      // período
    const f = 1 / T
    const ac = (v * v) / r               // aceleração centrípeta
    const Fc = m * ac                    // força centrípeta

    // ── Geometria ─────────────────────────────────────────────────
    const compact = w < 640
    const cx = w * 0.5
    const cy = h * 0.52
    const rMax = Math.min(w * 0.36, h * 0.40)
    const ppm = rMax / 5                 // escala p/ raio até 5 m
    const rpx = r * ppm

    // órbita
    ctx.strokeStyle = C.line; ctx.lineWidth = 1
    ctx.setLineDash([3, 4])
    ctx.beginPath(); ctx.arc(cx, cy, rpx, 0, Math.PI * 2); ctx.stroke()
    ctx.setLineDash([])

    // centro
    ctx.fillStyle = C.dim
    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill()

    // posição do corpo
    const ang = s.ang
    const px = cx + Math.cos(ang) * rpx
    const py = cy + Math.sin(ang) * rpx

    // raio-vetor
    ctx.strokeStyle = hexA(C.ink, 0.18); ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke()
    // rótulo do raio ao lado do meio do segmento, deslocado na perpendicular
    text(ctx, `r = ${r} m`, (cx + px) / 2 - Math.sin(s.ang) * 14, (cy + py) / 2 + Math.cos(s.ang) * 14 + 4,
      { size: 9, color: C.muted, align: 'center' })

    // ── Vetores ───────────────────────────────────────────────────
    // velocidade: tangente (perpendicular ao raio), no sentido do giro
    const tx = -Math.sin(ang), ty = Math.cos(ang)
    const vscale = 9
    arrow(ctx, px, py, px + tx * v * vscale, py + ty * v * vscale, { color: Q.velocity, width: 2, label: 'v' })

    // força/aceleração centrípeta: para o centro
    const inx = (cx - px), iny = (cy - py)
    const inLen = Math.hypot(inx, iny) || 1
    const ux = inx / inLen, uy = iny / inLen
    // comprimento ∝ F_c, mas nunca além do centro (a seta aponta PARA ele)
    const fLen = Math.min(Fc * 6, rpx - 10)
    arrow(ctx, px, py, px + ux * fLen, py + uy * fLen, { color: Q.force, width: 2 })
    text(ctx, 'F_c', px + ux * fLen * 0.5 + Math.sin(s.ang) * 14, py + uy * fLen * 0.5 - Math.cos(s.ang) * 14 + 4,
      { size: 10, weight: 700, color: Q.force, align: 'center' })

    // fuga pela tangente (1ª Lei): se a força sumisse
    ctx.strokeStyle = hexA(C.ink, 0.22); ctx.setLineDash([2, 4]); ctx.lineWidth = 1
    const fuga = v * vscale + 70      // continua além da ponta da seta de v
    ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px + tx * fuga, py + ty * fuga); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, 'sem a força, seguiria reto', px + tx * (fuga + 8), py + ty * (fuga + 8) + 4,
      { size: 9, color: C.muted, align: tx < 0 ? 'right' : 'left' })

    // corpo
    glow(ctx, px, py, clamp(3 + Math.cbrt(m) * 2, 3, 8), A, 0.9)

    caption(ctx, 'a velocidade muda de direção → há aceleração (centrípeta)', 16, 24, C.muted)

    // ── HUD ───────────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'r  raio',        v: `${r} m`, c: A },
      { k: 'v  velocidade',  v: `${v.toFixed(1)} m/s`, c: Q.velocity },
      { k: 'm  massa',       v: `${m} kg` },
      { k: 'ω  angular',     v: `${omega.toFixed(2)} rad/s` },
      { k: 'T  período',     v: `${T.toFixed(2)} s` },
      { k: 'f  frequência',  v: `${f.toFixed(2)} Hz` },
      { k: 'a_c centrípeta', v: `${ac.toFixed(2)} m/s²`, c: Q.force },
      { k: 'F_c = m·v²/r',   v: `${Fc.toFixed(1)} N`, c: Q.force },
    ], { title: 'a_c = v² / r', anchor: 'right', accent: A, minWidth: 202 })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

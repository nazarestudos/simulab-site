// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Plano Inclinado
//
// O bloco na rampa decompõe o peso em duas componentes:
//   · ao longo do plano:   P∥ = m·g·sen θ   (puxa rampa abaixo)
//   · perpendicular:       P⊥ = m·g·cos θ   (equilibrada pela normal N)
//
// Ele desliza quando P∥ vence o atrito estático máximo:
//   m·g·sen θ > μ·m·g·cos θ   →   tan θ > μ
//
// A massa se CANCELA: um piano e uma moeda escorregam no mesmo ângulo.
// Deslizando, a = g·(sen θ − μ·cos θ).
//
// A rampa tem 4 m. O bloco parte do repouso no alto, um cronômetro mede
// a descida e o gráfico mostra a(θ) para o atrito escolhido — com o
// ângulo crítico θc = arctan μ, abaixo do qual nada se move.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, ground, handle, massSide, plot, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const RAD = Math.PI / 180
const RAMP = 4.0      // m — comprimento da rampa
const START = 0.35    // m — onde o bloco é largado (a partir do topo)
const PAUSE = 1.4     // s parado no pé da rampa antes de rearmar

function geom(view, th) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.58
  const groundY = h - 44
  const footX = stageW - 34                        // pé da rampa (canto do ângulo)
  // comprimento em px: o maior que cabe em largura E em altura
  const Lpx = Math.min((footX - 46) / Math.cos(th), (groundY - 58) / Math.sin(th))
  return {
    compact, stageW, groundY, footX, Lpx,
    ppm: Lpx / RAMP,
    apexX: footX - Lpx * Math.cos(th),
    apexY: groundY - Lpx * Math.sin(th),
  }
}

export default function PlanoInclinadoCanvas({ params, running, resetKey }) {
  const arm = s => { s.d = START; s.v = 0; s.t = 0; s.done = false; s.wait = 0 }

  const setup = useCallback((view, p) => {
    const s = { drag: false, hover: false, moved: false, last: null, key: '' }
    arm(s)
    return s
  }, [])

  const step = useCallback((s, dt, p) => {
    const th = (p.angulo ?? 30) * RAD
    const mu = p.atrito ?? 0.3
    const key = `${p.angulo}|${mu}`
    if (key !== s.key) { s.key = key; arm(s); s.last = null }

    const slides = Math.tan(th) > mu + 1e-9
    if (!slides) { s.v = 0; return }
    if (s.done) {
      s.wait += dt
      if (s.wait > PAUSE) arm(s)
      return
    }
    const a = G * (Math.sin(th) - mu * Math.cos(th))
    s.v += a * dt
    s.d += s.v * dt
    s.t += dt
    if (s.d >= RAMP) {
      s.d = RAMP
      s.done = true
      s.last = { t: s.t, v: s.v }
      s.v = 0
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const deg = p.angulo ?? 30
    const th  = deg * RAD
    const m   = p.massa ?? 2
    const mu  = p.atrito ?? 0.3

    const slides = Math.tan(th) > mu + 1e-9
    const N    = m * G * Math.cos(th)
    const Ppar = m * G * Math.sin(th)
    const fat  = slides ? mu * N : Ppar          // parado, o atrito iguala P∥
    const a    = slides ? G * (Math.sin(th) - mu * Math.cos(th)) : 0
    const thC  = Math.atan(mu) / RAD             // ângulo crítico

    const { compact, stageW, groundY, footX, Lpx, ppm, apexX, apexY } = geom(view, th)

    // ── Chão e rampa ──────────────────────────────────────────────
    ground(ctx, 12, stageW - 8, groundY)
    ctx.fillStyle = hexA(A, 0.12)
    ctx.beginPath()
    ctx.moveTo(apexX, apexY); ctx.lineTo(apexX, groundY); ctx.lineTo(footX, groundY)
    ctx.closePath(); ctx.fill()
    ctx.strokeStyle = hexA(A, 0.45)
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(apexX + 0.5, apexY); ctx.lineTo(apexX + 0.5, groundY); ctx.stroke()
    ctx.strokeStyle = A
    ctx.lineWidth = 3
    ctx.beginPath(); ctx.moveTo(apexX, apexY); ctx.lineTo(footX, groundY); ctx.stroke()

    // marcas de metro ao longo da rampa
    const dx = Math.cos(th), dy = Math.sin(th)      // rampa abaixo (ela desce para a direita)
    const ox = Math.sin(th), oy = -Math.cos(th)     // normal para fora da rampa (cima-direita)
    for (let k = 0; k <= RAMP; k++) {
      const mx = apexX + dx * k * ppm, my = apexY + dy * k * ppm
      ctx.strokeStyle = C.muted
      ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(mx - ox * 7, my - oy * 7); ctx.stroke()
      if (k > 0 && k < RAMP) text(ctx, `${k} m`, mx - ox * 19, my - oy * 19 + 4, { size: 9, color: C.muted, align: 'center' })
    }

    // ângulo no pé
    ctx.strokeStyle = A
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.arc(footX, groundY, 30, Math.PI, Math.PI + th); ctx.stroke()
    text(ctx, `${deg}°`, footX - 44 * Math.cos(th / 2), groundY - 44 * Math.sin(th / 2) + 4,
      { size: 11, weight: 700, color: A, align: 'center' })

    // altura e base
    text(ctx, `${(RAMP * Math.sin(th)).toFixed(2).replace('.', ',')} m`, apexX - 8, (apexY + groundY) / 2 + 4,
      { size: 9, color: C.muted, align: 'right' })

    // alça no topo: arrastar muda o ângulo
    handle(ctx, apexX, apexY, 4, s.hover || s.drag, A)
    ctx.fillStyle = s.hover || s.drag ? A : C.ink
    ctx.fillRect(apexX - 3.5, apexY - 3.5, 7, 7)

    // ── Bloco ─────────────────────────────────────────────────────
    const side = massSide(m, 22, 46)
    const px = apexX + dx * s.d * ppm
    const py = apexY + dy * s.d * ppm
    ctx.save()
    ctx.translate(px, py)
    ctx.rotate(th)
    ctx.fillStyle = hexA(A, 0.26)
    ctx.fillRect(-side / 2, -side, side, side)
    ctx.strokeStyle = A
    ctx.lineWidth = 1.5
    ctx.strokeRect(-side / 2 + 0.5, -side + 0.5, side - 1, side - 1)
    ctx.fillStyle = hexA(A, 0.55)
    ctx.fillRect(-side / 2, -side, side, 3)
    ctx.restore()
    const cxB = px + ox * side / 2
    const cyB = py + oy * side / 2

    // ── Forças: o peso mede 78 px; o resto na mesma escala ────────
    const fs = 78 / (m * G)
    // decomposição do peso (tracejada): P⊥ e o fechamento do triângulo
    ctx.strokeStyle = C.faint
    ctx.setLineDash([3, 4])
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(cxB + dx * Ppar * fs, cyB + dy * Ppar * fs)
    ctx.lineTo(cxB, cyB + m * G * fs)
    ctx.lineTo(cxB - ox * N * fs, cyB - oy * N * fs)
    ctx.stroke()
    ctx.setLineDash([])

    arrow(ctx, cxB, cyB, cxB, cyB + m * G * fs, { color: hexA(C.ink, 0.6), width: 1.8, label: 'P' })
    arrow(ctx, cxB, cyB, cxB + ox * N * fs, cyB + oy * N * fs, { color: Q.force, width: 2.2, label: 'N' })
    arrow(ctx, cxB, cyB, cxB + dx * Ppar * fs, cyB + dy * Ppar * fs, { color: Q.kinetic, width: 2.2, label: 'P∥' })
    if (fat > 0.05) {
      arrow(ctx, cxB, cyB, cxB - dx * fat * fs, cyB - dy * fat * fs, { color: Q.thermal, width: 2.2, label: 'f' })
    }
    text(ctx, `${String(m).replace('.', ',')} kg`, cxB + ox * (side / 2 + 16), cyB + oy * (side / 2 + 16) + 4,
      { size: 10, weight: 700, color: C.ink, align: 'center' })

    // ── Estado ────────────────────────────────────────────────────
    const est = !slides
      ? { t: `Parado: o atrito segura até ${thC.toFixed(0)}° de inclinação`, c: Q.potential }
      : s.done
        ? { t: `Desceu os ${(RAMP - START).toFixed(2).replace('.', ',')} m em ${s.last.t.toFixed(2).replace('.', ',')} s`, c: Q.warn }
        : { t: 'Desliza: a parte do peso ao longo da rampa vence o atrito', c: Q.kinetic }
    caption(ctx, est.t, 16, 24, est.c)
    if (!s.moved) caption(ctx, 'Arraste o topo da rampa para inclinar', 16, h - 14, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'N  normal',       v: `${N.toFixed(1)} N`, c: Q.force },
      { k: 'P∥ = mg·sen θ',   v: `${Ppar.toFixed(1)} N`, c: Q.kinetic },
      { k: 'f  atrito',       v: `${fat.toFixed(1)} N`, c: Q.thermal },
      { k: 'a  aceleração',   v: `${a.toFixed(2)} m/s²`, c: slides ? Q.kinetic : null },
      { k: 'θc = arctan μ',   v: `${thC.toFixed(1)}°`, c: Q.warn },
      { k: 'cronômetro',      v: `${s.t.toFixed(2)} s`, c: A },
      { k: 'v  agora',        v: `${s.v.toFixed(2)} m/s`, c: Q.velocity },
      { k: 'v  ao chegar',    v: s.last ? `${s.last.v.toFixed(2)} m/s` : '—' },
    ], { title: 'a = g·(sen θ − μ·cos θ)', anchor: 'right', accent: A, minWidth: 206 })

    if (compact) return

    // ── a(θ) para este atrito ─────────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const curve = []
    for (let d = 0; d <= 90; d += 1) {
      const t = d * RAD
      curve.push([d, Math.max(0, G * (Math.sin(t) - mu * Math.cos(t)))])
    }
    caption(ctx, `Aceleração em cada ângulo (μ = ${mu.toFixed(2).replace('.', ',')})`, gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.38 }, {
      xDomain: [0, 90], yDomain: [0, 10],
      xTicks: 3, yTicks: 2,
      fmtX: x => `${x.toFixed(0)}°`, fmtY: y => y.toFixed(0),
      xLabel: 'inclinação θ', yLabel: 'a (m/s²)',
      rules: [
        { y: G, color: C.faint, label: 'queda livre' },
        ...(mu > 0 ? [{ x: thC, color: Q.warn, label: 'θc' }] : []),
      ],
      series: [{ points: curve, color: Q.kinetic, width: 2, fill: true }],
      markers: [{ x: deg, y: a, color: A, r: 4.5 }],
    })

    // ── tan θ contra μ: a balança que decide ──────────────────────
    const by0 = h * 0.38 + 104
    if (h - by0 > 70) {
      caption(ctx, 'Desliza quando tan θ passa de μ', gx, by0 - 12, A)
      const top = Math.max(1.2, Math.min(4, Math.max(Math.tan(th), mu) * 1.25))
      const bar = (y, val, label, color) => {
        ctx.fillStyle = 'rgba(255,255,255,0.09)'
        ctx.fillRect(gx, y, gw, 14)
        ctx.fillStyle = color
        ctx.fillRect(gx, y, clamp(val / top, 0, 1) * gw, 14)
        text(ctx, label, gx, y + 30, { size: 10, color: C.dim })
        text(ctx, val.toFixed(2).replace('.', ','), gx + gw, y + 30, { size: 10, weight: 700, color, align: 'right' })
      }
      bar(by0, Math.tan(th), 'tan θ  (o quanto a rampa puxa)', Q.kinetic)
      bar(by0 + 46, mu, 'μ  (o quanto o atrito segura)', Q.thermal)
    }
  }, [])

  // Arrastar o topo da rampa muda o ângulo.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const th = (p.angulo ?? 30) * RAD
    const { apexX, apexY, footX, groundY } = geom(view, th)
    const over = Math.hypot(pt.x - apexX, pt.y - apexY) < 24

    if (kind === 'down' && over) s.drag = true
    if (kind === 'up') s.drag = false
    if (s.drag) {
      const ang = Math.atan2(groundY - pt.y, footX - pt.x) / RAD
      view.setParams?.({ angulo: clamp(ang, 5, 75) })
      s.moved = true
      return 'grab'
    }
    s.hover = over
    return over ? 'grab' : null
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render} onPointer={onPointer}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

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
// Duas coisas que a fórmula sozinha não mostra, e a simulação mostra:
//   1. Corte o barbante: sem a força para o centro o corpo NÃO sai "para
//      fora" — sai reto, pela tangente, com a velocidade que tinha.
//   2. Olhe o giro de lado: cada sombra (x e y) é um vaivém harmônico.
//      Movimento circular uniforme = dois MHS defasados de um quarto de
//      volta. É a mesma matemática do pêndulo e das ondas.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, grid, text, caption, readout,
  arrow, glow, trail, handle, plot, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const R_MAX = 5          // m — maior raio do controle
const TRAIL_N = 80       // amostras do rastro (60 Hz → ~1,3 s)
const HIST_S = 12        // s de história guardada para o gráfico

/** Geometria do palco — a mesma para desenhar e para o ponteiro. */
function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.56
  const cx = stageW / 2
  const cy = h * 0.53
  const rMax = Math.min(stageW * 0.42, h * 0.39)
  return { compact, stageW, cx, cy, ppm: rMax / R_MAX }
}

export default function MovimentoCircularCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    ang: -Math.PI / 2,
    t: 0,
    tick: 0,
    trail: [],          // [x, y] em metros, relativos ao centro
    hist: [],           // [t, x, y]
    free: null,         // corpo solto: { x, y, vx, vy } em metros
    lap: 0,             // ângulo percorrido desde que voltou ao barbante
    drag: false, hover: false, moved: false,
  }), [])

  const step = useCallback((s, dt, p, view) => {
    const r = p.raio ?? 2
    const v = p.velocidade ?? 6
    const cut = (p.solto ?? 0) === 1
    s.t += dt

    if (s.drag) {
      // segurando o corpo: ele fica onde o ponteiro manda
    } else if (s.free) {
      // 1ª Lei: sem força, linha reta com velocidade constante
      s.free.x += s.free.vx * dt
      s.free.y += s.free.vy * dt
      const g = geom(view)
      const lim = Math.max(g.stageW, view.h) / g.ppm * 0.62
      if (!cut || Math.hypot(s.free.x, s.free.y) > lim) {
        // saiu do palco (ou o barbante foi religado): volta à órbita
        s.free = null
        s.lap = 0
        s.trail = []
      }
    } else {
      const dth = (v / r) * dt
      s.ang += dth
      s.lap += dth
      // barbante cortado: dá uma volta inteira "presa" e então escapa
      if (cut && s.lap > Math.PI * 1.5) {
        s.free = {
          x: Math.cos(s.ang) * r, y: Math.sin(s.ang) * r,
          vx: -Math.sin(s.ang) * v, vy: Math.cos(s.ang) * v,
        }
      }
    }

    const x = s.free ? s.free.x : Math.cos(s.ang) * r
    const y = s.free ? s.free.y : Math.sin(s.ang) * r
    if (++s.tick % 4 === 0) {
      s.trail.push([x, y])
      if (s.trail.length > TRAIL_N) s.trail.shift()
      s.hist.push([s.t, x, -y])   // −y: no gráfico, "para cima" é positivo
      while (s.hist.length && s.t - s.hist[0][0] > HIST_S) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const r = p.raio ?? 2
    const v = p.velocidade ?? 6
    const m = p.massa ?? 1
    const cut = (p.solto ?? 0) === 1

    const omega = v / r
    const T  = (2 * Math.PI * r) / v
    const ac = (v * v) / r
    const Fc = m * ac

    const { compact, stageW, cx, cy, ppm } = geom(view)
    const rpx = r * ppm
    grid(ctx, { w: stageW, h }, 36)

    // ── Trajetória ────────────────────────────────────────────────
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.setLineDash([3, 5])
    ctx.beginPath(); ctx.arc(cx, cy, rpx, 0, Math.PI * 2); ctx.stroke()
    ctx.setLineDash([])

    // eixos pelo centro: é sobre eles que as "sombras" caminham
    ctx.strokeStyle = C.grid
    ctx.beginPath()
    ctx.moveTo(cx - R_MAX * ppm - 14, cy + 0.5); ctx.lineTo(cx + R_MAX * ppm + 14, cy + 0.5)
    ctx.moveTo(cx + 0.5, cy - R_MAX * ppm - 14); ctx.lineTo(cx + 0.5, cy + R_MAX * ppm + 14)
    ctx.stroke()

    const wx = s.free ? s.free.x : Math.cos(s.ang) * r
    const wy = s.free ? s.free.y : Math.sin(s.ang) * r
    const px = cx + wx * ppm
    const py = cy + wy * ppm

    // rastro
    trail(ctx, s.trail.map(([x, y]) => [cx + x * ppm, cy + y * ppm]), A, { width: 2.5 })

    // sombras nos eixos (as duas projeções harmônicas)
    if (!s.free) {
      ctx.strokeStyle = hexA(C.ink, 0.16)
      ctx.setLineDash([2, 4])
      ctx.beginPath()
      ctx.moveTo(px, py); ctx.lineTo(px, cy)
      ctx.moveTo(px, py); ctx.lineTo(cx, py)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.fillStyle = Q.kinetic;   ctx.fillRect(px - 3.5, cy - 3.5, 7, 7)
      ctx.fillStyle = Q.potential; ctx.fillRect(cx - 3.5, py - 3.5, 7, 7)
    }

    // ── Barbante + força centrípeta ───────────────────────────────
    const tx = s.free ? s.free.vx / v : -Math.sin(s.ang)
    const ty = s.free ? s.free.vy / v :  Math.cos(s.ang)

    if (!s.free) {
      ctx.strokeStyle = hexA(C.ink, 0.45)
      ctx.lineWidth = 1.2
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke()
      text(ctx, `r = ${String(r).replace('.', ',')} m`,
        (cx + px) / 2 - ty * 14, (cy + py) / 2 + tx * 14 + 4,
        { size: 10, color: C.dim, align: 'center' })

      // F_c: sempre para o centro. Comprimento ∝ F_c, limitado ao barbante.
      const ux = (cx - px) / (rpx || 1), uy = (cy - py) / (rpx || 1)
      const fLen = Math.min(Fc * 1.6 + 10, rpx - 12)
      if (fLen > 6) {
        arrow(ctx, px, py, px + ux * fLen, py + uy * fLen, { color: Q.force, width: 2.4 })
        text(ctx, 'F', px + ux * fLen * 0.55 + ty * 13, py + uy * fLen * 0.55 - tx * 13 + 4,
          { size: 11, weight: 700, color: Q.force, align: 'center' })
      }
    } else {
      // o barbante cortado fica pendurado no centro, sem força nenhuma
      ctx.strokeStyle = hexA(C.ink, 0.25)
      ctx.lineWidth = 1.2
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy + Math.min(rpx, 40)); ctx.stroke()
    }

    // centro
    ctx.fillStyle = C.ink
    ctx.fillRect(cx - 3, cy - 3, 6, 6)

    // velocidade: tangente
    const vs = (R_MAX * ppm * 0.75) / 15      // 15 m/s (o máximo) mede ¾ do raio maior
    arrow(ctx, px, py, px + tx * v * vs, py + ty * v * vs, { color: Q.velocity, width: 2.4, label: 'v' })

    // corpo
    const rb = clamp(5 + Math.cbrt(m) * 3, 6, 11)
    glow(ctx, px, py, rb, A, 0.9)
    if (!s.free) handle(ctx, px, py, rb, s.hover || s.drag, A)

    // ── Estado ────────────────────────────────────────────────────
    const est = s.free
      ? { t: 'Sem força: segue reto pela tangente, com a mesma velocidade', c: Q.velocity }
      : cut
        ? { t: 'Barbante prestes a ser cortado…', c: Q.warn }
        : { t: 'A força puxa para o centro e só muda a direção de v', c: Q.force }
    caption(ctx, est.t, 16, 24, est.c)
    if (!s.moved && !cut) caption(ctx, 'Arraste o corpo para mudar o raio', 16, h - 16, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'r  raio',         v: `${r} m`, c: A },
      { k: 'v  velocidade',   v: `${v.toFixed(1)} m/s`, c: Q.velocity },
      { k: 'ω  angular',      v: `${omega.toFixed(2)} rad/s` },
      { k: 'T  período',      v: `${T.toFixed(2)} s` },
      { k: 'f  frequência',   v: `${(1 / T).toFixed(2)} Hz` },
      { k: 'a  centrípeta',   v: `${ac.toFixed(1)} m/s²`, c: Q.force },
      { k: 'F  = m·v²/r',     v: `${Fc.toFixed(1)} N`, c: Q.force },
      { k: 'a / g',           v: `${(ac / 9.8).toFixed(2)} g` },
    ], { title: 'a = v² / r', anchor: 'right', accent: A, minWidth: 202 })

    if (compact) return

    // ── Sombras no tempo: dois MHS ────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const win = clamp(2.5 * T, 3, HIST_S)
    const t1 = Math.max(win, s.t)
    caption(ctx, 'As duas sombras do giro', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.30 }, {
      xDomain: [t1 - win, t1], yDomain: [-R_MAX - 0.5, R_MAX + 0.5],
      xTicks: 3, yTicks: 2,
      fmtX: t => `${t.toFixed(0)} s`, fmtY: y => y.toFixed(0),
      yLabel: 'posição (m)',
      rules: [{ y: 0, color: C.grid, dash: [] }],
      series: [
        { points: s.hist.map(d => [d[0], d[1]]), color: Q.kinetic, width: 2 },
        { points: s.hist.map(d => [d[0], d[2]]), color: Q.potential, width: 2 },
      ],
    })
    legend(ctx, gx, 38 + h * 0.30 + 30, [
      { label: 'sombra x', color: Q.kinetic },
      { label: 'sombra y', color: Q.potential },
    ])

    // ── a = v²/r: dobrar a velocidade quadruplica a força ─────────
    const py0 = h * 0.30 + 104
    const ph  = h - py0 - 40
    const curve = []
    for (let vv = 0; vv <= 15; vv += 0.5) curve.push([vv, (vv * vv) / r])
    const aTop = Math.max(60, ac * 1.25)
    caption(ctx, `Aceleração para r = ${String(r).replace('.', ',')} m`, gx, py0 - 12, A)
    plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
      xDomain: [0, 15], yDomain: [0, aTop],
      xTicks: 3, yTicks: 3,
      fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(0),
      xLabel: 'v (m/s)', yLabel: 'a (m/s²)',
      rules: [{ y: 9.8, color: C.faint, label: '1 g' }],
      series: [{ points: curve, color: Q.force, width: 2, fill: true }],
      markers: [{ x: v, y: ac, color: Q.velocity, r: 4.5 }],
    })
  }, [])

  // Arrastar o corpo muda o raio (o slider acompanha) e o ângulo.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s || s.free) return null
    const { cx, cy, ppm } = geom(view)
    const r = p.raio ?? 2
    const bx = cx + Math.cos(s.ang) * r * ppm
    const by = cy + Math.sin(s.ang) * r * ppm
    const over = Math.hypot(pt.x - bx, pt.y - by) < 22

    if (kind === 'down' && over) s.drag = true
    if (kind === 'up') { s.drag = false; s.lap = 0 }
    if (s.drag) {
      const dx = pt.x - cx, dy = pt.y - cy
      s.ang = Math.atan2(dy, dx)
      s.trail = []
      s.moved = true
      view.setParams?.({ raio: clamp(Math.hypot(dx, dy) / ppm, 1, R_MAX) })
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

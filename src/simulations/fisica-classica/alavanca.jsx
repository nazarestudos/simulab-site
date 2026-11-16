// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Alavanca e Torque
//
// O torque (momento) de uma força mede sua capacidade de girar:
//   τ = F · d      (força × distância ao ponto de apoio)
//
// A barra fica em equilíbrio quando os torques dos dois lados se anulam:
//   m_e·g·d_e = m_d·g·d_d   →   m_e·d_e = m_d·d_d
//
// A barra gira de verdade: a simulação integra a 2ª Lei da rotação,
//   α = τ_resultante / I ,   I = m_e·d_e² + m_d·d_d² + I_barra
// então um desequilíbrio pequeno faz a barra tombar devagar e um grande
// a derruba depressa, até a ponta bater no chão.
//
// O losango amarelo na barra marca onde o peso da direita teria de ficar
// para equilibrar (d = m_e·d_e / m_d). Arraste o peso até ele.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, block, massSide, ground, handle, plot, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const BAR_HALF = 5.4      // m — meia barra
const BAR_MASS = 6        // kg — a barra é uniforme e apoiada no meio: não gera torque,
                          //      mas entra no momento de inércia
const CM_DROP = 0.25      // m — quanto o centro de massa da barra fica abaixo do eixo
const PIVOT_H = 1.15      // m — altura do apoio acima do chão
const TH_MAX = Math.asin(PIVOT_H / BAR_HALF)   // a ponta encosta no chão

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.60
  const ppm = Math.min((stageW - 40) / (2 * BAR_HALF), 60)
  const groundY = h - 46
  return { compact, stageW, ppm, cx: stageW / 2, groundY, pivotY: groundY - PIVOT_H * ppm }
}

export default function AlavancaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ th: 0, om: 0, drag: null, hover: null, moved: false }), [])

  const step = useCallback((s, dt, p) => {
    const me = p.massaEsq ?? 4, de = p.distEsq ?? 3
    const md = p.massaDir ?? 3, dd = p.distDir ?? 3
    // th > 0: o lado direito desce. O braço de alavanca de cada peso é a
    // distância HORIZONTAL até o apoio, d·cos θ.
    // A barra tem o centro de massa um pouco ABAIXO do eixo (como toda
    // balança de verdade): isso dá um torque restaurador pequeno, que a
    // traz de volta à horizontal quando os dois lados se equilibram.
    const tau = G * (md * dd - me * de) * Math.cos(s.th) - BAR_MASS * G * CM_DROP * Math.sin(s.th)
    const I = me * de * de + md * dd * dd + (BAR_MASS * (2 * BAR_HALF) ** 2) / 12
    const alpha = tau / I - 1.1 * s.om          // atrito do eixo
    s.om += alpha * dt
    s.th += s.om * dt
    if (Math.abs(s.th) >= TH_MAX) {             // a ponta bate no chão e para
      s.th = Math.sign(s.th) * TH_MAX
      s.om = Math.abs(s.om) > 0.4 ? -s.om * 0.22 : 0
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const me = p.massaEsq ?? 4, de = p.distEsq ?? 3
    const md = p.massaDir ?? 3, dd = p.distDir ?? 3
    const te = me * G * de, td = md * G * dd
    const equil = Math.abs(me * de - md * dd) < 1e-6
    const { compact, stageW, ppm, cx, groundY, pivotY } = geom(view)

    const ux = Math.cos(s.th), uy = Math.sin(s.th)       // direção da barra (direita desce se θ>0)
    const P = d => [cx + ux * d * ppm, pivotY + uy * d * ppm]   // d<0 à esquerda

    // ── Chão e apoio ──────────────────────────────────────────────
    ground(ctx, 12, stageW - 8, groundY)
    ctx.fillStyle = hexA(A, 0.26)
    ctx.strokeStyle = A
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(cx, pivotY + 3); ctx.lineTo(cx - 26, groundY); ctx.lineTo(cx + 26, groundY)
    ctx.closePath(); ctx.fill(); ctx.stroke()

    // ── Barra com marcas de metro ─────────────────────────────────
    const [lx, ly] = P(-BAR_HALF), [rx, ry] = P(BAR_HALF)
    ctx.strokeStyle = C.ink
    ctx.lineWidth = 6
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(rx, ry); ctx.stroke()
    for (let d = -5; d <= 5; d++) {
      if (d === 0) continue
      const [mx, my] = P(d)
      ctx.strokeStyle = '#000'
      ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(mx + uy * 3, my - ux * 3); ctx.lineTo(mx - uy * 3, my + ux * 3); ctx.stroke()
      text(ctx, `${Math.abs(d)}`, mx + uy * 15, my - ux * 15 + 4, { size: 9, color: C.muted, align: 'center' })
    }
    ctx.fillStyle = C.ink
    ctx.beginPath(); ctx.arc(cx, pivotY, 4, 0, Math.PI * 2); ctx.fill()

    // ── Onde o peso da direita equilibraria ───────────────────────
    const dBal = (me * de) / md
    if (!equil && dBal >= 0.5 && dBal <= BAR_HALF) {
      const [bx, by] = P(dBal)
      ctx.fillStyle = Q.warn
      ctx.beginPath()
      ctx.moveTo(bx, by + 5); ctx.lineTo(bx + 6, by + 11); ctx.lineTo(bx, by + 17); ctx.lineTo(bx - 6, by + 11)
      ctx.closePath(); ctx.fill()
      text(ctx, `equilibra em ${dBal.toFixed(2).replace('.', ',')} m`, bx, by + 32,
        { size: 10, weight: 700, color: Q.warn, align: 'center' })
    }

    // ── Pesos apoiados na barra (como numa gangorra) ──────────────
    const fs = 56 / (Math.max(me, md) * G)      // o maior peso mede 56 px
    const armY = pivotY - 132                   // linha de cota dos braços
    const drawPeso = (dist, m, sgn, id) => {
      const [bx, by] = P(sgn * dist)
      const side = massSide(m, 24, 52)
      const px = bx + uy * (side / 2 + 3)       // centro do bloco, acima da barra
      const py = by - ux * (side / 2 + 3)
      const hot = s.hover === id || s.drag === id

      // cota do braço de alavanca: distância horizontal do apoio ao peso
      ctx.strokeStyle = hexA(Q.force, 0.5)
      ctx.setLineDash([2, 4])
      ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(px, armY); ctx.lineTo(px, py - side / 2 - 6); ctx.stroke()
      ctx.setLineDash([])
      ctx.strokeStyle = Q.force
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(cx, armY); ctx.lineTo(px, armY)
      ctx.moveTo(px, armY - 4); ctx.lineTo(px, armY + 4)
      ctx.stroke()
      text(ctx, `${String(dist).replace('.', ',')} m`, (cx + px) / 2, armY - 7,
        { size: 10, weight: 700, color: Q.force, align: 'center' })

      arrow(ctx, px, py, px, py + side / 2 + 8 + m * G * fs, { color: Q.kinetic, width: 2 })
      ctx.save()
      ctx.translate(px, py)
      ctx.rotate(s.th)
      block(ctx, 0, 0, side, A, `${m} kg`, { active: hot, fill: 0.5 })
      ctx.restore()
      handle(ctx, px, py, side / 2, hot, A)
    }
    // marco do apoio na linha de cota
    ctx.strokeStyle = Q.force
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.moveTo(cx, armY - 4); ctx.lineTo(cx, armY + 4); ctx.stroke()
    drawPeso(de, me, -1, 'esq')
    drawPeso(dd, md, 1, 'dir')

    // ── Estado ────────────────────────────────────────────────────
    const parado = Math.abs(s.om) < 0.01
    const est = equil
      ? { t: 'Equilíbrio: os dois torques são iguais', c: Q.potential }
      : parado && Math.abs(s.th) >= TH_MAX - 1e-3
        ? { t: `Tombou para a ${td > te ? 'direita' : 'esquerda'}, o lado de maior torque`, c: Q.kinetic }
        : { t: `Gira para a ${td > te ? 'direita' : 'esquerda'}: lá o produto massa × distância é maior`, c: Q.kinetic }
    const hintY = caption(ctx, est.t, 16, 24, est.c, stageW - 28)
    if (!s.moved) caption(ctx, 'Arraste os pesos ao longo da barra', 16, hintY + 4, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'τ esquerda',      v: `${te.toFixed(1)} N·m`, c: td < te ? Q.kinetic : null },
      { k: 'τ direita',       v: `${td.toFixed(1)} N·m`, c: td > te ? Q.kinetic : null },
      { k: 'τ resultante',    v: `${Math.abs(td - te).toFixed(1)} N·m`, c: equil ? Q.potential : Q.warn },
      { k: 'inclinação',      v: `${(s.th * 180 / Math.PI).toFixed(1)}°`, c: A },
      { k: 'm × d esquerda',  v: `${(me * de).toFixed(1)} kg·m` },
      { k: 'm × d direita',   v: `${(md * dd).toFixed(1)} kg·m` },
      { k: 'vantagem mecânica', v: `${(Math.max(de, dd) / Math.min(de, dd)).toFixed(2)}×`, c: Q.force },
      { k: 'estado',          v: equil ? 'equilíbrio' : 'gira', c: equil ? Q.potential : Q.kinetic },
    ], { title: 'τ = F · d', anchor: 'right', accent: A, minWidth: 210 })

    if (compact) return

    // ── A balança dos torques ─────────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    caption(ctx, 'Os dois torques', gx, 26, A)
    const top = Math.max(te, td) * 1.1
    const bar = (y, val, label, color) => {
      ctx.fillStyle = 'rgba(255,255,255,0.09)'
      ctx.fillRect(gx, y, gw, 16)
      ctx.fillStyle = color
      ctx.fillRect(gx, y, clamp(val / top, 0, 1) * gw, 16)
      text(ctx, label, gx, y + 32, { size: 10, color: C.dim })
      text(ctx, `${val.toFixed(1).replace('.', ',')} N·m`, gx + gw, y + 32, { size: 10, weight: 700, color, align: 'right' })
    }
    bar(40, te, `esquerda: ${me} kg × ${String(de).replace('.', ',')} m × g`, td < te ? Q.kinetic : equil ? Q.potential : C.faint)
    bar(88, td, `direita: ${md} kg × ${String(dd).replace('.', ',')} m × g`, td > te ? Q.kinetic : equil ? Q.potential : C.faint)

    // ── Quanto mais longe, menos força ────────────────────────────
    // Força necessária à direita para equilibrar a esquerda, em cada distância.
    const py0 = 172
    const ph  = h - py0 - 40
    if (ph > 60) {
      const curve = []
      for (let d = 0.6; d <= 5.001; d += 0.1) curve.push([d, te / d])
      const fTop = Math.max(te / 0.9, md * G * 1.2)
      caption(ctx, 'Força que equilibra a esquerda, em cada distância', gx, py0 - 12, A)
      plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
        xDomain: [0, 5], yDomain: [0, fTop],
        xTicks: 5, yTicks: 3,
        fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(0),
        xLabel: 'distância ao apoio (m)', yLabel: 'força (N)',
        rules: [{ y: me * G, color: C.faint, label: 'peso da esquerda' }],
        series: [{ points: curve, color: Q.warn, width: 2 }],
        markers: [{ x: dd, y: md * G, color: A, r: 4.5 }],
      })
    }
  }, [])

  // Arrastar um peso ao longo da barra muda a distância dele ao apoio.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { ppm, cx, pivotY } = geom(view)
    const ux = Math.cos(s.th), uy = Math.sin(s.th)
    const center = (dist, sgn, m) => {
      const side = massSide(m, 24, 52)
      return [
        cx + sgn * ux * dist * ppm + uy * (side / 2 + 3),
        pivotY + sgn * uy * dist * ppm - ux * (side / 2 + 3),
        side,
      ]
    }
    const [lx, ly, ls] = center(p.distEsq ?? 3, -1, p.massaEsq ?? 4)
    const [rx, ry, rs] = center(p.distDir ?? 3, 1, p.massaDir ?? 3)
    const over = Math.abs(pt.x - lx) < ls / 2 + 12 && Math.abs(pt.y - ly) < ls / 2 + 12 ? 'esq'
               : Math.abs(pt.x - rx) < rs / 2 + 12 && Math.abs(pt.y - ry) < rs / 2 + 12 ? 'dir' : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag) {
      const sgn = s.drag === 'esq' ? -1 : 1
      const d = clamp(((pt.x - cx) * sgn) / (ux * ppm), 1, 5)
      view.setParams?.({ [s.drag === 'esq' ? 'distEsq' : 'distDir']: d })
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

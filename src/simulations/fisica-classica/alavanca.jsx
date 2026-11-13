// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Alavanca e Torque
//
// O torque (momento) de uma força mede sua capacidade de girar:
//   τ = F · d      (força × distância ao ponto de apoio)
//
// A barra fica em equilíbrio quando os torques dos dois lados se anulam:
//   τ_esq = τ_dir   →   m_e·g·d_e = m_d·g·d_d   →   m_e·d_e = m_d·d_d
//
// É por isso que uma criança equilibra um adulto na gangorra: basta
// sentar mais longe do apoio. Foi Arquimedes quem disse "deem-me um
// ponto de apoio e moverei o mundo".
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, hexA, clamp, handle,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8

/** Geometria do palco — a mesma para desenhar e para testar o ponteiro. */
function geom(view) {
  const { w, h } = view
  return {
    cx: w * 0.5,
    pivotY: h * 0.56,
    ppm: Math.min((w * 0.38) / 5, 56),     // px por metro (dist até 5 m)
  }
}

export default function AlavancaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ ang: 0, drag: null, hover: null, moved: false }), [])

  const step = useCallback((s, dt, p) => {
    const me = p.massaEsq ?? 4, de = p.distEsq ?? 3
    const md = p.massaDir ?? 3, dd = p.distDir ?? 3
    const net = (md * dd) - (me * de)             // + = direita mais pesada
    const alvo = clamp(net * 0.02, -0.42, 0.42)   // ângulo alvo (rad)
    s.ang += (alvo - s.ang) * clamp(dt * 2.4, 0, 1)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const me = p.massaEsq ?? 4, de = p.distEsq ?? 3
    const md = p.massaDir ?? 3, dd = p.distDir ?? 3

    const te = me * G * de, td = md * G * dd
    const equil = Math.abs(me * de - md * dd) < 1e-6

    // ── Geometria ─────────────────────────────────────────────────
    const { cx, pivotY, ppm } = geom(view)
    const ang = s.ang

    // apoio (triângulo)
    ctx.fillStyle = hexA(A, 0.25)
    ctx.strokeStyle = hexA(A, 0.7); ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(cx, pivotY)
    ctx.lineTo(cx - 22, pivotY + 40)
    ctx.lineTo(cx + 22, pivotY + 40)
    ctx.closePath(); ctx.fill(); ctx.stroke()

    // barra (gira em torno do pivô)
    const halfLen = 5.4 * ppm
    const ux = Math.cos(ang), uy = Math.sin(ang)   // direção da barra (dir = +x, desce se ang>0)
    const lx = cx - ux * halfLen, ly = pivotY - uy * halfLen
    const rx = cx + ux * halfLen, ry = pivotY + uy * halfLen
    ctx.strokeStyle = hexA(C.ink, 0.7); ctx.lineWidth = 5; ctx.lineCap = 'round'
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(rx, ry); ctx.stroke()
    ctx.lineCap = 'butt'

    // marcas de distância na barra
    for (let d = 1; d <= 5; d++) {
      for (const sgn of [-1, 1]) {
        const mx = cx + sgn * ux * d * ppm
        const my = pivotY + sgn * uy * d * ppm
        ctx.fillStyle = C.muted
        ctx.beginPath(); ctx.arc(mx, my, 1.5, 0, Math.PI * 2); ctx.fill()
      }
    }

    // pesos pendurados
    const drawPeso = (dist, m, sgn, label) => {
      const px = cx + sgn * ux * dist * ppm
      const py = pivotY + sgn * uy * dist * ppm
      // fio até o bloco (sempre vertical, pendurado)
      const bs = clamp(18 + Math.cbrt(m) * 8, 22, 50)
      const bloY = py + 16
      ctx.strokeStyle = hexA(C.ink, 0.35); ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, bloY); ctx.stroke()
      ctx.fillStyle = hexA(A, 0.22)
      ctx.fillRect(px - bs / 2, bloY, bs, bs)
      ctx.strokeStyle = hexA(A, 0.85); ctx.lineWidth = 1.2
      ctx.strokeRect(px - bs / 2 + 0.5, bloY + 0.5, bs, bs)
      text(ctx, `${m} kg`, px, bloY + bs / 2 + 4, { size: 9, weight: 700, color: C.ink, align: 'center' })
      text(ctx, `${dist} m`, px, py - 8, { size: 8.5, color: C.muted, align: 'center' })
      // seta do peso
      arrow(ctx, px, bloY + bs, px, bloY + bs + m * G * 0.25 * clamp(60 / (Math.max(me, md) * G), 0.05, 0.6) * 8, { color: hexA(C.ink, 0.35), width: 1.3 })
      // alça: o peso pode ser arrastado ao longo da barra
      handle(ctx, px, bloY + bs / 2, bs / 2, s.hover === label || s.drag === label, A)
    }
    drawPeso(de, me, -1, 'esq')
    drawPeso(dd, md, 1, 'dir')

    // ── Estado ────────────────────────────────────────────────────
    const est = equil
      ? { t: 'EQUILÍBRIO — τ_esq = τ_dir', c: Q.potential }
      : { t: `gira para a ${td > te ? 'DIREITA' : 'ESQUERDA'} (maior torque)`, c: Q.kinetic }
    caption(ctx, est.t, 16, 24, est.c)

    // ── HUD ───────────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'm_e · d_e (esq)', v: `${me}kg · ${de}m`, c: A },
      { k: 'm_d · d_d (dir)', v: `${md}kg · ${dd}m`, c: A },
      { k: 'τ_esq = m_e·g·d_e', v: `${te.toFixed(1)} N·m`, c: td < te ? Q.kinetic : C.dim },
      { k: 'τ_dir = m_d·g·d_d', v: `${td.toFixed(1)} N·m`, c: td > te ? Q.kinetic : C.dim },
      { k: 'diferença', v: `${(td - te).toFixed(1)} N·m` },
      { k: 'estado', v: equil ? 'equilíbrio' : 'gira', c: equil ? Q.potential : Q.kinetic },
    ], { title: 'τ = F · d', anchor: 'right', accent: A, minWidth: 210 })

    caption(ctx, s.moved ? 'sentar mais longe do apoio multiplica o torque' : 'arraste os pesos ao longo da barra', 16, h - 16, s.moved ? C.muted : C.dim)
  }, [])

  // Arrastar um peso ao longo da barra muda a distância dele ao apoio —
  // e o slider correspondente acompanha (view.setParams).
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { cx, pivotY, ppm } = geom(view)
    const ux = Math.cos(s.ang), uy = Math.sin(s.ang)
    const center = (dist, sgn) => [cx + sgn * ux * dist * ppm, pivotY + sgn * uy * dist * ppm + 36]
    const [lx, ly] = center(p.distEsq ?? 3, -1)
    const [rx, ry] = center(p.distDir ?? 3, 1)
    const over = Math.hypot(pt.x - lx, pt.y - ly) < 36 ? 'esq'
               : Math.hypot(pt.x - rx, pt.y - ry) < 36 ? 'dir' : null

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

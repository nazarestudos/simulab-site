// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Empuxo e Flutuação (Arquimedes)
//
// Um cubo de 1 m³ num tanque de 4 m de largura. A simulação integra a
// 2ª Lei de verdade — peso, empuxo e arrasto do líquido —, então o bloco
// não "vai para" a posição de equilíbrio: ele cai, mergulha, BALANÇA e
// só então assenta. Levante-o com o mouse e solte.
//
//   E = ρ_líq · g · V_submerso          P = ρ_obj · g · V
//   flutuando:  E = P   →   V_sub / V = ρ_obj / ρ_líq
//
// Três coisas que a fórmula sozinha não mostra:
//   · De onde vem o empuxo: a pressão cresce com a profundidade, então a
//     face de baixo é mais empurrada que a de cima (setas finas). O
//     empuxo é só essa diferença.
//   · O nível da água SOBE: o volume submerso desloca líquido (foi o que
//     Arquimedes notou na banheira). Subida = V_sub / área do tanque.
//   · O balanço é um oscilador harmônico: T = 2π·√(ρ_obj·h / (ρ_líq·g)),
//     corrigido pela subida do nível num tanque finito.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, ground, handle, plot, hexA, clamp, mix,
} from '../engine'

const A  = ACCENT['fisica-classica']
const G  = 9.8
const AT = 4.0      // m² — área do tanque (4 m × 1 m de fundo); o cubo tem 1 m²
const L0 = 1.9      // m  — nível da água sem o bloco
const TANK_H = 3.3  // m  — altura das paredes
const DRAG = 1.5    // 1/s — arrasto do líquido sobre o bloco (por unidade de massa)

/** Nível do líquido e profundidade submersa para o fundo do cubo em yb. */
function immersion(yb) {
  const d = ((L0 - yb) * AT) / (AT - 1)        // o nível sobe junto: tanque finito
  if (d <= 0) return { level: L0, d: 0 }
  if (d >= 1) return { level: L0 + 1 / AT, d: 1 }
  return { level: L0 + d / AT, d }
}

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.56
  const floorY = h - 42
  const ppm = Math.min((stageW - 96) / 4, (floorY - 40) / TANK_H)
  const tankX = (stageW - 4 * ppm) / 2 + 8
  return { compact, stageW, floorY, ppm, tankX, cx: tankX + 2 * ppm }
}

export default function EmpuxoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    yb: 2.25, v: 0,          // fundo do cubo acima do piso (m); começa no ar e cai
    drag: false, hover: false, moved: false,
  }), [])

  const step = useCallback((s, dt, p) => {
    if (s.drag) return
    const dObj = p.densidadeObjeto ?? 600
    const dLiq = p.densidadeLiquido ?? 1000
    const { d } = immersion(s.yb)
    // por m³ de bloco:  ρ_obj·a = −ρ_obj·g + ρ_líq·g·d − arrasto
    const a = -G + (dLiq * G * d) / dObj - DRAG * (d > 0 ? 0.35 + d : 0.02) * s.v
    s.v += a * dt
    s.yb += s.v * dt
    if (s.yb <= 0) { s.yb = 0; if (s.v < 0) s.v = 0 }       // pousou no fundo
    if (s.yb > TANK_H - 0.4) { s.yb = TANK_H - 0.4; s.v = 0 }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const dObj = p.densidadeObjeto ?? 600
    const dLiq = p.densidadeLiquido ?? 1000
    const { compact, stageW, floorY, ppm, tankX, cx } = geom(view)
    const Y = m => floorY - m * ppm

    const { level, d } = immersion(s.yb)
    const peso   = dObj * G             // N  (V = 1 m³)
    const empuxo = dLiq * G * d         // N
    const floats = dObj < dLiq
    const dEq    = floats ? dObj / dLiq : 1
    const onFloor = s.yb <= 0.001
    const atRest = Math.abs(s.v) < 0.02 && !s.drag
    const T = 2 * Math.PI * Math.sqrt((dObj * (AT - 1)) / (dLiq * G * AT))

    // ── Tanque ────────────────────────────────────────────────────
    ground(ctx, 12, stageW - 6, floorY)
    const liq = '#5AA9FF'
    const liqAlpha = 0.14 + 0.22 * clamp((dLiq - 500) / 1000, 0, 1)   // mais denso, mais "pesado"
    ctx.fillStyle = hexA(liq, liqAlpha)
    ctx.fillRect(tankX, Y(level), 4 * ppm, level * ppm)

    // nível original (sem o bloco)
    ctx.strokeStyle = C.faint
    ctx.setLineDash([4, 5])
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(tankX, Y(L0) + 0.5); ctx.lineTo(tankX + 4 * ppm, Y(L0) + 0.5); ctx.stroke()
    ctx.setLineDash([])

    // ── Bloco ─────────────────────────────────────────────────────
    const side = ppm
    const bx = cx - side / 2
    const by = Y(s.yb + 1)                       // topo do cubo
    const objCol = mix('#F2C063', '#93A0B0', clamp((dObj - 300) / 2400, 0, 1))
    ctx.fillStyle = objCol
    ctx.fillRect(bx, by, side, side)
    // a parte submersa fica tingida pelo líquido que está na frente
    if (d > 0) {
      ctx.fillStyle = hexA('#0B2A4A', 0.42)
      ctx.fillRect(bx, by + side * (1 - d), side, side * d)
    }
    ctx.strokeStyle = s.drag ? C.ink : hexA('#000', 0.55)
    ctx.lineWidth = s.drag ? 2 : 1
    ctx.strokeRect(bx + 0.5, by + 0.5, side - 1, side - 1)

    // superfície (por cima do bloco, para a linha d'água aparecer nele)
    ctx.strokeStyle = liq
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(tankX, Y(level)); ctx.lineTo(tankX + 4 * ppm, Y(level)); ctx.stroke()

    // paredes
    ctx.strokeStyle = C.ink
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(tankX, Y(TANK_H)); ctx.lineTo(tankX, floorY)
    ctx.lineTo(tankX + 4 * ppm, floorY); ctx.lineTo(tankX + 4 * ppm, Y(TANK_H))
    ctx.stroke()

    // subida do nível
    const rise = level - L0
    if (rise > 0.004) {
      const rx = tankX + 4 * ppm + 10
      ctx.strokeStyle = liq
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(rx, Y(L0)); ctx.lineTo(rx + 6, Y(L0))
      ctx.moveTo(rx, Y(level)); ctx.lineTo(rx + 6, Y(level))
      ctx.moveTo(rx + 3, Y(L0)); ctx.lineTo(rx + 3, Y(level))
      ctx.stroke()
      text(ctx, `+${(rise * 100).toFixed(0)} cm`, rx + 10, Y(L0 + rise / 2) + 4, { size: 10, weight: 700, color: liq })
    }
    text(ctx, 'nível sem o bloco', tankX + 6, Y(L0) + 14, { size: 9, color: C.muted })

    // ── De onde vem o empuxo: pressão nas faces ───────────────────
    if (d > 0.02) {
      const pBot = level - s.yb                          // profundidade da face de baixo (m)
      const pTop = Math.max(0, level - (s.yb + 1))       // e da de cima
      const ps = Math.min(22, ppm * 0.26)                // px por metro de coluna d'água
      for (let i = 1; i <= 4; i++) {
        const x = bx + (i / 5) * side
        arrow(ctx, x, by + side + pBot * ps + 4, x, by + side + 3, { color: hexA(liq, 0.95), width: 1.5, head: 5 })
        if (pTop > 0.03) arrow(ctx, x, by - pTop * ps - 4, x, by - 3, { color: hexA(liq, 0.95), width: 1.5, head: 5 })
      }
    }

    // ── Peso e empuxo: o peso mede no máximo 84 px ────────────────
    const fs = 84 / Math.max(peso, dLiq * G, 1)
    const fcy = by + side / 2
    arrow(ctx, cx - 9, fcy, cx - 9, fcy + peso * fs, { color: Q.kinetic, width: 2.6, label: 'P' })
    if (empuxo > 1) arrow(ctx, cx + 9, fcy, cx + 9, fcy - empuxo * fs, { color: Q.potential, width: 2.6, label: 'E' })
    if (onFloor && !floats) {
      // no fundo, a normal completa o equilíbrio: N = P − E
      arrow(ctx, cx + side * 0.34, by + side, cx + side * 0.34, by + side - (peso - empuxo) * fs,
        { color: C.ink, width: 2.2, label: 'N' })
    }
    handle(ctx, cx, fcy, side / 2 - 4, s.hover || s.drag, C.ink)

    // linha d'água de equilíbrio, marcada no próprio bloco
    if (floats && !atRest) {
      const ey = by + side * (1 - dEq)
      ctx.strokeStyle = Q.warn
      ctx.lineWidth = 1.5
      ctx.setLineDash([3, 3])
      ctx.beginPath(); ctx.moveTo(bx - 8, ey); ctx.lineTo(bx + side + 8, ey); ctx.stroke()
      ctx.setLineDash([])
    }

    // ── Estado ────────────────────────────────────────────────────
    const est = s.drag
      ? { t: 'Solte o bloco', c: C.ink }
      : !floats
        ? onFloor
          ? { t: 'Afundou: o empuxo é menor que o peso, o fundo segura o resto', c: Q.danger }
          : { t: 'Afunda: mesmo todo submerso, o empuxo não alcança o peso', c: Q.danger }
        : atRest
          ? { t: `Flutua com ${(dEq * 100).toFixed(0)}% do volume submerso`, c: Q.potential }
          : { t: 'Balança em torno do equilíbrio até o líquido frear', c: Q.warn }
    caption(ctx, est.t, 16, 24, est.c)
    if (!s.moved) caption(ctx, 'Arraste o bloco para cima ou para baixo e solte', 16, h - 14, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'P  peso',          v: `${(peso / 1000).toFixed(2)} kN`, c: Q.kinetic },
      { k: 'E  empuxo',        v: `${(empuxo / 1000).toFixed(2)} kN`, c: Q.potential },
      { k: 'submerso agora',   v: `${(d * 100).toFixed(0)} %`, c: A },
      { k: 'submerso no equilíbrio', v: floats ? `${(dEq * 100).toFixed(0)} %` : '100 %', c: Q.warn },
      { k: 'nível da água',    v: `+${(rise * 100).toFixed(1)} cm`, c: liq },
      { k: 'período do balanço', v: floats ? `${T.toFixed(2)} s` : '—' },
      { k: 'ρ obj ÷ ρ líq',    v: (dObj / dLiq).toFixed(2) },
      { k: 'resultado',        v: floats ? 'flutua' : 'afunda', c: floats ? Q.potential : Q.danger },
    ], { title: 'V submerso ÷ V = ρ objeto ÷ ρ líquido', anchor: 'right', accent: A, minWidth: 220 })

    if (compact) return

    // ── Fração submersa contra a razão das densidades ─────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    caption(ctx, 'Quanto do bloco fica debaixo d\'água', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.36 }, {
      xDomain: [0, 2], yDomain: [0, 1.15],
      xTicks: 4, yTicks: 2,
      fmtX: x => x.toFixed(1).replace('.', ','), fmtY: y => `${(y * 100).toFixed(0)}%`,
      xLabel: 'ρ objeto ÷ ρ líquido', yLabel: 'fração submersa',
      rules: [{ x: 1, color: Q.danger, label: 'daqui em diante afunda' }],
      series: [{ points: [[0, 0], [1, 1], [2, 1]], color: Q.potential, width: 2, fill: true }],
      markers: [
        { x: clamp(dObj / dLiq, 0, 2), y: dEq, color: Q.warn, r: 4.5 },
        { x: clamp(dObj / dLiq, 0, 2), y: d, color: A, r: 3.5 },
      ],
    })

    // ── A balança: peso contra o maior empuxo possível ────────────
    const by0 = h * 0.36 + 104
    if (h - by0 > 96) {
      caption(ctx, 'Flutua se o empuxo máximo passa do peso', gx, by0 - 12, A)
      const top = Math.max(peso, dLiq * G) * 1.08
      const bar = (y, val, label, color, ghost) => {
        ctx.fillStyle = 'rgba(255,255,255,0.09)'
        ctx.fillRect(gx, y, gw, 14)
        if (ghost) { ctx.fillStyle = hexA(color, 0.3); ctx.fillRect(gx, y, (ghost / top) * gw, 14) }
        ctx.fillStyle = color
        ctx.fillRect(gx, y, clamp(val / top, 0, 1) * gw, 14)
        text(ctx, label, gx, y + 30, { size: 10, color: C.dim })
        text(ctx, `${(val / 1000).toFixed(2).replace('.', ',')} kN`, gx + gw, y + 30, { size: 10, weight: 700, color, align: 'right' })
      }
      bar(by0, peso, 'peso do bloco', Q.kinetic)
      bar(by0 + 46, empuxo, 'empuxo agora (faixa clara: todo submerso)', Q.potential, dLiq * G)
    }
  }, [])

  // Levantar ou afundar o bloco com o mouse; ao soltar, a física assume.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { floorY, ppm, cx } = geom(view)
    const cyB = floorY - (s.yb + 0.5) * ppm
    const over = Math.abs(pt.x - cx) < ppm / 2 + 8 && Math.abs(pt.y - cyB) < ppm / 2 + 8

    if (kind === 'down' && over) s.drag = true
    if (kind === 'up') s.drag = false
    if (s.drag) {
      s.yb = clamp((floorY - pt.y) / ppm - 0.5, 0, TANK_H - 0.4)
      s.v = 0
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

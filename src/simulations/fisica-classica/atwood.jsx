// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Máquina de Atwood
//
// Duas massas ligadas por um fio sobre uma polia. Aplicando a 2ª Lei a
// cada bloco e somando, a tração some e sobra:
//
//   a = (m₁ − m₂)·g / (m₁ + m₂)      T = 2·m₁·m₂·g / (m₁ + m₂)
//
// A simulação repete o experimento de George Atwood (1784): o bloco
// pesado parte do repouso, cai uma altura conhecida e um cronômetro mede
// o tempo. Com massas quase iguais a queda fica lenta o bastante para
// cronometrar à mão — e de h = ½·a·t² sai a gravidade:
//
//   g = 2h·(m₁ + m₂) / ((m₁ − m₂)·t²)
//
// O "g medido" do painel é calculado assim, a partir do tempo que a
// própria simulação levou. Ele bate com 9,8 m/s².
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, block, massSide, ground, ruler, handle, plot, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const H = 1.0        // m — cada bloco pode subir ou descer 1 m a partir do meio
const PAUSE = 1.6    // s parado no chão antes de rearmar

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.52
  const cx = stageW * 0.54
  const rP = 30
  const pulleyY = 92
  const floorY = h - 40
  const ppm = clamp((floorY - pulleyY - rP - 78) / (2 * H), 40, 130)
  return { compact, stageW, cx, rP, pulleyY, floorY, ppm }
}

const accel = (m1, m2) => ((m1 - m2) / (m1 + m2)) * G   // + = m₁ desce

export default function AtwoodCanvas({ params, running, resetKey }) {
  const arm = (s, m1, m2) => {
    const a = accel(m1, m2)
    s.m1 = m1; s.m2 = m2
    s.y = a === 0 ? 0 : -Math.sign(a) * H    // o mais pesado começa no alto
    s.v = 0
    s.t = 0                // cronômetro desta queda
    s.landed = false
    s.wait = 0
    s.hist = []
    s.drop = 2 * H         // altura de queda desta rodada
  }

  const setup = useCallback((view, p) => {
    const s = { drag: null, hover: null, moved: false, last: null }
    arm(s, p.massa1 ?? 3, p.massa2 ?? 2)
    return s
  }, [])

  const step = useCallback((s, dt, p) => {
    const m1 = p.massa1 ?? 3, m2 = p.massa2 ?? 2
    if (m1 !== s.m1 || m2 !== s.m2) { arm(s, m1, m2); return }
    if (s.drag) return

    const a = accel(m1, m2)
    if (s.landed) {
      s.wait += dt
      if (s.wait > PAUSE) arm(s, m1, m2)
      return
    }
    if (a === 0) return

    s.v += a * dt
    s.y += s.v * dt
    s.t += dt
    if (Math.abs(s.y) >= H && Math.sign(s.y) === Math.sign(a)) {
      // tocou o chão: registra o tempo e calcula g como Atwood faria
      s.y = Math.sign(a) * H
      s.landed = true
      s.wait = 0
      const gMeas = (2 * s.drop * (m1 + m2)) / (Math.abs(m1 - m2) * s.t * s.t)
      s.last = { t: s.t, g: gMeas, v: Math.abs(s.v) }
      s.hist.push([s.t, Math.abs(s.v)])   // o último ponto fica no gráfico
      s.v = 0
      return
    }
    if (s.hist.length === 0 || s.t - s.hist[s.hist.length - 1][0] > 0.02) {
      s.hist.push([s.t, Math.abs(s.v)])
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const m1 = s.m1, m2 = s.m2
    const a = accel(m1, m2)
    const T = (2 * m1 * m2 * G) / (m1 + m2)
    const { compact, stageW, cx, rP, pulleyY, floorY, ppm } = geom(view)

    // ── Chão, teto e régua ────────────────────────────────────────
    ground(ctx, 14, stageW - 8, floorY)
    ground(ctx, cx - 70, cx + 70, pulleyY - rP - 14, { drop: -8 })
    ruler(ctx, cx - rP - 96, floorY, floorY - 2 * H * ppm, 0, 2 * H, { every: 0.25, labelEvery: 2 })

    // suporte da polia
    ctx.strokeStyle = C.line
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(cx, pulleyY - rP - 14); ctx.lineTo(cx, pulleyY); ctx.stroke()

    // ── Blocos: a altura do FUNDO acima do chão é H − y e H + y ───
    const s1 = massSide(m1), s2 = massSide(m2)
    const x1 = cx - rP, x2 = cx + rP
    const top1 = floorY - (H - s.y) * ppm - s1
    const top2 = floorY - (H + s.y) * ppm - s2

    // fio: dois trechos verticais + o arco sobre a polia
    ctx.strokeStyle = hexA(C.ink, 0.7)
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(x1, top1); ctx.lineTo(x1, pulleyY)
    ctx.arc(cx, pulleyY, rP, Math.PI, 0)
    ctx.lineTo(x2, top2)
    ctx.stroke()

    // polia: gira com o fio (ângulo = deslocamento / raio)
    const rot = (s.y * ppm) / rP
    ctx.strokeStyle = A
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(cx, pulleyY, rP - 4, 0, Math.PI * 2); ctx.stroke()
    ctx.lineWidth = 1.2
    ctx.strokeStyle = hexA(A, 0.7)
    for (let k = 0; k < 4; k++) {
      const an = -rot + (k * Math.PI) / 2
      ctx.beginPath()
      ctx.moveTo(cx, pulleyY)
      ctx.lineTo(cx + Math.cos(an) * (rP - 4), pulleyY + Math.sin(an) * (rP - 4))
      ctx.stroke()
    }
    ctx.fillStyle = C.ink
    ctx.fillRect(cx - 3, pulleyY - 3, 6, 6)

    // vetores: o peso maior mede 62 px; a tração sai na mesma escala
    const fs = 62 / (Math.max(m1, m2) * G)
    const drawBody = (x, top, side, m, name, id) => {
      const cy = top + side / 2
      arrow(ctx, x, top + side, x, top + side + m * G * fs, { color: hexA(C.ink, 0.55), width: 1.8 })
      arrow(ctx, x, top, x, top - T * fs, { color: Q.force, width: 2.2 })
      block(ctx, x, cy, side, A, `${String(m).replace('.', ',')} kg`, { active: s.drag === id })
      const lx = x + (id === 1 ? -1 : 1) * (side / 2 + 10)
      text(ctx, name, lx, cy + 4, { size: 11, weight: 700, color: A, align: id === 1 ? 'right' : 'left' })
      handle(ctx, x, cy, side / 2 - 2, s.hover === id || s.drag === id, A)
    }
    drawBody(x1, top1, s1, m1, 'm₁', 1)
    drawBody(x2, top2, s2, m2, 'm₂', 2)
    text(ctx, 'T', x2 + 12, Math.min(top1, top2) - T * fs * 0.5, { size: 11, weight: 700, color: Q.force })

    // ── Estado ────────────────────────────────────────────────────
    const est = a === 0
      ? { t: 'Massas iguais: equilíbrio, nada acelera', c: Q.potential }
      : s.landed
        ? { t: s.last ? `Chegou ao chão em ${s.last.t.toFixed(2).replace('.', ',')} s` : 'No chão', c: Q.warn }
        : { t: `Desce ${a > 0 ? 'm₁' : 'm₂'}, com ${(Math.abs(a) / G * 100).toFixed(0)}% da aceleração de queda livre`, c: Q.kinetic }
    caption(ctx, est.t, 16, 24, est.c)
    if (!s.moved) caption(ctx, 'Arraste um bloco para cima e solte', 16, h - 14, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'a  aceleração',  v: `${Math.abs(a).toFixed(2)} m/s²`, c: Q.kinetic },
      { k: 'T  tração',      v: `${T.toFixed(1)} N`, c: Q.force },
      { k: 'P₁ = m₁g',       v: `${(m1 * G).toFixed(1)} N` },
      { k: 'P₂ = m₂g',       v: `${(m2 * G).toFixed(1)} N` },
      { k: 'cronômetro',     v: `${s.t.toFixed(2)} s`, c: A },
      { k: 'v  agora',       v: `${Math.abs(s.v).toFixed(2)} m/s`, c: Q.velocity },
      { k: 'queda anterior', v: s.last ? `${s.last.t.toFixed(2)} s` : '—' },
      { k: 'g  medido',      v: s.last ? `${s.last.g.toFixed(2)} m/s²` : '—', c: Q.warn },
    ], { title: 'a = (m₁−m₂)g/(m₁+m₂)', anchor: 'right', accent: A, minWidth: 206 })

    if (compact) return

    // ── v(t): uma reta — a inclinação É a aceleração ──────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const tEnd = a === 0 ? 2 : Math.sqrt((2 * s.drop) / Math.abs(a))
    const vEnd = Math.abs(a) * tEnd
    caption(ctx, 'Velocidade na queda', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.30 }, {
      xDomain: [0, Math.max(0.5, tEnd * 1.08)], yDomain: [0, Math.max(0.5, vEnd * 1.15)],
      xTicks: 3, yTicks: 3,
      fmtX: t => `${t.toFixed(1)} s`, fmtY: v => v.toFixed(1),
      yLabel: 'v (m/s)',
      series: [
        { points: [[0, 0], [tEnd, vEnd]], color: C.faint, width: 1.5, dash: [4, 4] },
        { points: s.hist, color: Q.velocity, width: 2.4, fill: true },
      ],
      markers: s.hist.length
        ? [{ x: s.hist[s.hist.length - 1][0], y: s.hist[s.hist.length - 1][1], color: Q.velocity, r: 4 }]
        : [],
    })

    // ── a/g contra a razão das massas: o truque de Atwood ─────────
    const py0 = h * 0.30 + 96
    const ph  = h - py0 - 40
    const ratio = Math.min(m1, m2) / Math.max(m1, m2)
    const curve = []
    for (let x = 0.1; x <= 1.0001; x += 0.03) curve.push([x, (1 - x) / (1 + x)])
    caption(ctx, 'Quanto mais parecidas, mais lenta a queda', gx, py0 - 12, A)
    plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
      xDomain: [0.1, 1], yDomain: [0, 0.9],
      xTicks: 3, yTicks: 3,
      fmtX: x => x.toFixed(1), fmtY: y => y.toFixed(1),
      xLabel: 'massa leve ÷ massa pesada', yLabel: 'a / g',
      series: [{ points: curve, color: Q.kinetic, width: 2, fill: true }],
      markers: [{ x: Math.max(0.1, ratio), y: Math.abs(a) / G, color: Q.warn, r: 4.5 }],
    })
  }, [])

  // Levantar um bloco "arma" o experimento; ao soltar, a queda começa
  // dali, do repouso, e a altura de queda passa a ser a que sobrou.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { cx, rP, floorY, ppm } = geom(view)
    const s1 = massSide(s.m1), s2 = massSide(s.m2)
    const c1 = [cx - rP, floorY - (H - s.y) * ppm - s1 / 2]
    const c2 = [cx + rP, floorY - (H + s.y) * ppm - s2 / 2]
    const over = Math.hypot(pt.x - c1[0], pt.y - c1[1]) < s1 / 2 + 10 ? 1
               : Math.hypot(pt.x - c2[0], pt.y - c2[1]) < s2 / 2 + 10 ? 2 : null

    if (kind === 'down' && over) { s.drag = over; s.landed = false }
    if (kind === 'up' && s.drag) {
      const a = accel(s.m1, s.m2)
      s.drag = null
      s.v = 0; s.t = 0; s.hist = []; s.landed = false; s.wait = 0
      // altura que o bloco pesado ainda tem para cair
      s.drop = a > 0 ? H - s.y : H + s.y
      if (s.drop < 0.05) s.landed = true      // solto já no chão: nada a cair
    }
    if (s.drag) {
      const side = s.drag === 1 ? s1 : s2
      const bottomH = clamp((floorY - pt.y - side / 2) / ppm, 0, 2 * H)   // altura do fundo
      s.y = s.drag === 1 ? H - bottomH : bottomH - H
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

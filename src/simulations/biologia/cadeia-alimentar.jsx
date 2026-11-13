// ═══════════════════════════════════════════════════════════════════
// BIOLOGIA — Dinâmica de Populações (Lotka–Volterra)
//
//     dx/dt = α·x − β·x·y        presas    (crescem sozinhas, são comidas)
//     dy/dt = δ·x·y − γ·y        predadores (só crescem comendo, morrem sozinhos)
//
// Duas coisas que só aparecem se o modelo for integrado de verdade:
//
// 1. O ATRASO DE UM QUARTO DE CICLO. O pico dos predadores vem SEMPRE
//    depois do pico das presas — nunca junto. Faz sentido: os predadores
//    só se reproduzem depois de comer bem, e aí já é tarde.
//
// 2. O RETRATO DE FASE É UMA ÓRBITA FECHADA. O sistema não converge para
//    um equilíbrio nem explode: ele cicla para sempre em torno do ponto
//    fixo (x* = γ/δ, y* = α/β). Existe uma quantidade CONSERVADA,
//
//        V = δ·x − γ·ln x + β·y − α·ln y
//
//    que fica constante ao longo de toda a órbita — o análogo ecológico
//    da energia. O HUD mostra V; ele mal se mexe, e é assim que se sabe
//    que o integrador está honesto.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, rng,
} from '../engine'

const A = ACCENT['biologia']

const PREY = '#7ea88f'
const PRED = '#a67e93'

export default function CadeiaAlimentarCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const rand = rng(64)
    return {
      x: 40,                                   // presas
      y: (p.predators ?? 10),                  // predadores
      p0: p.predators ?? 10,
      r0: p.preys ?? 100,
      t: 0,
      hist: [],
      V0: null,
      critters: Array.from({ length: 80 }, () => ({
        x: rand(), y: rand(),
        vx: (rand() - 0.5) * 0.09,
        vy: (rand() - 0.5) * 0.09,
        r: rand(),
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const p0 = p.predators ?? 10
    const r0 = p.preys ?? 100

    if (p0 !== s.p0 || r0 !== s.r0) {
      s.p0 = p0; s.r0 = r0
      s.x = 40; s.y = p0
      s.t = 0; s.hist = []; s.V0 = null
      return
    }

    const alpha = (r0 / 100) * 0.9    // natalidade das presas
    const beta  = 0.022               // taxa de predação
    const delta = 0.011               // eficiência de conversão
    const gamma = 0.55                // mortalidade dos predadores

    // RK4: Lotka–Volterra é sensível; Euler faz a órbita espiralar para
    // fora e a "conservação" some.
    const f = (x, y) => [
      alpha * x - beta * x * y,
      delta * x * y - gamma * y,
    ]
    const H = dt * 1.4
    const [k1x, k1y] = f(s.x, s.y)
    const [k2x, k2y] = f(s.x + k1x * H / 2, s.y + k1y * H / 2)
    const [k3x, k3y] = f(s.x + k2x * H / 2, s.y + k2y * H / 2)
    const [k4x, k4y] = f(s.x + k3x * H,     s.y + k3y * H)

    s.x = Math.max(0.01, s.x + (H / 6) * (k1x + 2 * k2x + 2 * k3x + k4x))
    s.y = Math.max(0.01, s.y + (H / 6) * (k1y + 2 * k2y + 2 * k3y + k4y))
    s.t += H

    const V = delta * s.x - gamma * Math.log(s.x) + beta * s.y - alpha * Math.log(s.y)
    if (s.V0 === null) s.V0 = V
    s.V = V

    s.hist.push([s.t, s.x, s.y])
    if (s.hist.length > 3000) s.hist.shift()

    // Bichos no campo: quantidade proporcional às populações
    for (const c of s.critters) {
      c.x += c.vx * dt; c.y += c.vy * dt
      if (c.x < 0 || c.x > 1) c.vx *= -1
      if (c.y < 0 || c.y > 1) c.vy *= -1
      c.x = clamp(c.x, 0, 1); c.y = clamp(c.y, 0, 1)
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const alpha = ((p.preys ?? 100) / 100) * 0.9
    const beta  = 0.022
    const delta = 0.011
    const gamma = 0.55

    // Ponto fixo do sistema
    const xEq = gamma / delta
    const yEq = alpha / beta

    const compact = w < 720
    const stageW = compact ? w : w * 0.38

    // ══ CAMPO ════════════════════════════════════════════════════
    const fx = 22, fy = h * 0.16
    const fw = stageW - 44, fh = h * 0.52

    ctx.fillStyle = 'rgba(255,255,255,0.015)'
    ctx.fillRect(fx, fy, fw, fh)
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(fx + 0.5, fy + 0.5, fw, fh)
    caption(ctx, 'Ecossistema', fx, fy - 10, A)

    const nPrey = Math.round(clamp(s.x / 2.2, 0, 55))
    const nPred = Math.round(clamp(s.y / 1.4, 0, 25))

    s.critters.forEach((c, i) => {
      const X = fx + c.x * fw, Y = fy + c.y * fh
      if (i < nPrey) {
        // presa
        ctx.fillStyle = hexA(PREY, 0.85)
        ctx.beginPath(); ctx.arc(X, Y, 3.2, 0, Math.PI * 2); ctx.fill()
      } else if (i >= 55 && i < 55 + nPred) {
        // predador — maior, com "orelhas"
        ctx.fillStyle = hexA(PRED, 0.9)
        ctx.beginPath(); ctx.arc(X, Y, 5, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath()
        ctx.moveTo(X - 4, Y - 3); ctx.lineTo(X - 5.5, Y - 7); ctx.lineTo(X - 1.5, Y - 5)
        ctx.moveTo(X + 4, Y - 3); ctx.lineTo(X + 5.5, Y - 7); ctx.lineTo(X + 1.5, Y - 5)
        ctx.fill()
      }
    })

    const ly = fy + fh + 18
    ctx.fillStyle = PREY
    ctx.beginPath(); ctx.arc(fx + 4, ly - 3, 3.2, 0, Math.PI * 2); ctx.fill()
    text(ctx, `presas ${s.x.toFixed(0)}`, fx + 12, ly, { size: 9, color: C.dim })
    ctx.fillStyle = PRED
    ctx.beginPath(); ctx.arc(fx + 96, ly - 3, 4.2, 0, Math.PI * 2); ctx.fill()
    text(ctx, `predadores ${s.y.toFixed(0)}`, fx + 105, ly, { size: 9, color: C.dim })

    // ══ Leituras ═════════════════════════════════════════════════
    const drift = s.V0 ? Math.abs((s.V - s.V0) / s.V0) * 100 : 0
    readout(ctx, w - 14, 14, [
      { k: 'x  presas',      v: s.x.toFixed(1), c: PREY },
      { k: 'y  predadores',  v: s.y.toFixed(1), c: PRED },
      { k: 'α  natalidade',  v: alpha.toFixed(2) },
      { k: 'γ  mortalidade', v: gamma.toFixed(2) },
      { k: 'x* equilíbrio',  v: xEq.toFixed(0), c: C.dim },
      { k: 'y* equilíbrio',  v: yEq.toFixed(0), c: C.dim },
      { k: 'V  invariante',  v: s.V ? s.V.toFixed(3) : '—', c: Q.warn },
      { k: 'deriva de V',    v: `${drift.toFixed(2)} %`, c: drift < 1 ? Q.potential : Q.danger },
    ], { title: 'Lotka–Volterra', anchor: 'right', accent: A, minWidth: 198 })

    caption(ctx, 'o predador sempre atrasa em relação à presa', 22, 24, C.muted)

    if (compact) return

    // ══ SÉRIES TEMPORAIS ═════════════════════════════════════════
    const gx = stageW + 48
    const gw = (w - gx - 26) * 0.56
    const gy = h * 0.14
    const gh = h - gy - 58

    const t1 = Math.max(30, s.t)
    const t0 = Math.max(0, t1 - 30)
    const yMax = Math.max(...s.hist.map(d => Math.max(d[1], d[2])), 60) * 1.15

    caption(ctx, 'Populações no tempo', gx, gy - 12, A)
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [t0, t1], yDomain: [0, yMax],
      xTicks: 3, yTicks: 4,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'tempo', yLabel: 'população',
      rules: [
        { y: xEq, color: hexA(PREY, 0.30) },
        { y: yEq, color: hexA(PRED, 0.30) },
      ],
      series: [
        { points: s.hist.map(d => [d[0], d[1]]), color: PREY, width: 1.9 },
        { points: s.hist.map(d => [d[0], d[2]]), color: PRED, width: 1.9 },
      ],
      markers: [
        { x: s.t, y: s.x, color: PREY, r: 3.5 },
        { x: s.t, y: s.y, color: PRED, r: 3.5 },
      ],
    })
    legend(ctx, gx, h - 16, [
      { label: 'presas', color: PREY },
      { label: 'predadores', color: PRED },
    ])

    // ══ RETRATO DE FASE ══════════════════════════════════════════
    const px = gx + gw + 62
    const pw = w - px - 26

    caption(ctx, 'Retrato de fase', px, gy - 12, Q.warn)
    plot(ctx, { x: px, y: gy, w: pw, h: gh }, {
      xDomain: [0, yMax], yDomain: [0, yMax * 0.6],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'presas', yLabel: 'predadores',
      rules: [
        { x: xEq, color: hexA(C.ink, 0.2) },
        { y: yEq, color: hexA(C.ink, 0.2) },
      ],
      series: [{ points: s.hist.map(d => [d[1], d[2]]), color: hexA(Q.warn, 0.8), width: 1.5 }],
      markers: [
        { x: s.x, y: s.y, color: Q.kinetic, r: 4 },
        { x: xEq, y: yEq, color: hexA(C.ink, 0.5), r: 2.5 },
      ],
    })
    text(ctx, 'a órbita fecha: o ciclo', px, h - 28, { size: 8.5, color: C.muted })
    text(ctx, 'não converge nem explode', px, h - 15, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

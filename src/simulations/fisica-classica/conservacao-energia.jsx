// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Conservação da Energia Mecânica
//
// Uma bolinha num trilho em forma de vale troca energia potencial por
// cinética e vice-versa:
//
//   E_mec = E_c + E_p = ½·m·v² + m·g·h = constante   (sem atrito)
//
// O desenho do trilho JÁ É o gráfico da energia potencial (E_p = m·g·h,
// e h é a altura do trilho). Por isso a simulação desenha a energia
// mecânica como uma linha horizontal sobre o vale:
//
//   · a bolinha nunca passa dessa linha (ali v = 0: ponto de retorno);
//   · a distância da bolinha até a linha é a energia cinética;
//   · com atrito, a linha desce — é a energia virando calor — e os
//     pontos de retorno se fecham até a bolinha parar no fundo.
//
// Integração por Runge–Kutta de 4ª ordem ao longo do trilho, com a
// normal completa (peso + parcela centrípeta) no cálculo do atrito.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, bars, glow, trail, handle, plot, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const M = 1.0          // kg
const HMAX = 5.0       // m — altura das bordas do trilho
const XMAX = 4.5       // m — meia-largura do vale
const KTRACK = HMAX / (XMAX * XMAX)   // h(x) = k·x²

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.60
  const cx = stageW * 0.5
  const valleyY = h * 0.80
  return {
    compact, stageW, cx, valleyY,
    ppmX: (stageW * 0.43) / XMAX,
    ppmY: (h * 0.58) / HMAX,
  }
}

/** Aceleração tangencial num ponto do trilho, com atrito μ. */
function accel(x, v, mu) {
  const slope = 2 * KTRACK * x
  const q = Math.sqrt(1 + slope * slope)
  const sin = slope / q, cos = 1 / q
  const kappa = (2 * KTRACK) / (q * q * q)
  // N/m = g·cos φ + v²·κ — no fundo do vale a bolinha "pesa mais"
  const nOverM = G * cos + v * v * kappa
  return { a: -G * sin - Math.sign(v) * mu * nOverM, cos, sin, nOverM }
}

export default function ConservacaoEnergiaCanvas({ params, running, resetKey }) {
  const init = p => {
    const h0 = clamp(p.alturaInicial ?? 4, 0.2, HMAX)
    return {
      x: -Math.sqrt(h0 / KTRACK), v: 0, h0,
      t: 0, tick: 0,
      trail: [],      // [x, h] em metros
      hist: [],       // [t, Ec, Ep, Q]
    }
  }

  const setup = useCallback((view, p) => ({
    ...init(p), seen: p.alturaInicial ?? 4, drag: false, hover: false, moved: false,
  }), [])

  const step = useCallback((s, dt, p) => {
    if (s.drag) return
    // Reinicia só quando o CONTROLE muda — não quando a própria simulação
    // avisa a página da altura escolhida com o mouse (ver onPointer).
    const hp = p.alturaInicial ?? 4
    if (hp !== s.seen) {
      s.seen = hp
      if (hp !== s.h0) Object.assign(s, init(p))
      return
    }

    const mu = p.atrito ?? 0
    const here = accel(s.x, 0, 0)
    const holds = Math.abs(G * here.sin) <= mu * here.nOverM
    s.t += dt

    if (!(Math.abs(s.v) < 1e-3 && holds)) {
      // RK4 em (x, v):  dx/dt = v·cos φ ,  dv/dt = a
      const f = (x, v) => { const k = accel(x, v, mu); return [v * k.cos, k.a] }
      const [k1x, k1v] = f(s.x, s.v)
      const [k2x, k2v] = f(s.x + k1x * dt / 2, s.v + k1v * dt / 2)
      const [k3x, k3v] = f(s.x + k2x * dt / 2, s.v + k2v * dt / 2)
      const [k4x, k4v] = f(s.x + k3x * dt, s.v + k3v * dt)
      const vNew = s.v + (dt / 6) * (k1v + 2 * k2v + 2 * k3v + k4v)
      s.x = clamp(s.x + (dt / 6) * (k1x + 2 * k2x + 2 * k3x + k4x), -XMAX, XMAX)
      // o atrito freia, não empurra
      s.v = (s.v !== 0 && Math.sign(vNew) !== Math.sign(s.v) && holds) ? 0 : vNew
    } else {
      s.v = 0
    }

    if (++s.tick % 4 === 0) {
      const y  = KTRACK * s.x * s.x
      const Ep = M * G * y
      const Ec = 0.5 * M * s.v * s.v
      s.trail.push([s.x, y])
      if (s.trail.length > 40) s.trail.shift()
      s.hist.push([s.t, Ec, Ep, Math.max(0, M * G * s.h0 - Ec - Ep)])
      while (s.hist.length && s.t - s.hist[0][0] > 16) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const { compact, stageW, cx, valleyY, ppmX, ppmY } = geom(view)
    const SX = x => cx + x * ppmX
    const SY = y => valleyY - y * ppmY
    const mu = p.atrito ?? 0

    const y  = KTRACK * s.x * s.x
    const Ep = M * G * y
    const Ec = 0.5 * M * s.v * s.v
    const Em = Ec + Ep
    const E0 = M * G * s.h0
    const calor = Math.max(0, E0 - Em)
    const hE = Em / (M * G)                 // altura equivalente da energia mecânica
    const xTurn = Math.sqrt(Math.max(0, hE) / KTRACK)

    // ── Régua de altura ───────────────────────────────────────────
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    for (let m = 0; m <= HMAX; m++) {
      ctx.beginPath(); ctx.moveTo(12, SY(m) + 0.5); ctx.lineTo(stageW - 6, SY(m) + 0.5); ctx.stroke()
      text(ctx, `${m} m`, 14, SY(m) - 4, { size: 9, color: C.muted })
    }

    // ── Região proibida: acima da energia disponível ──────────────
    // Entre o trilho e a linha de E_mec é onde a bolinha pode estar.
    ctx.fillStyle = hexA(Q.kinetic, 0.10)
    ctx.beginPath()
    const xa = Math.min(xTurn, XMAX)
    for (let i = 0; i <= 60; i++) {
      const x = -xa + (i / 60) * 2 * xa
      ctx.lineTo(SX(x), SY(KTRACK * x * x))
    }
    ctx.lineTo(SX(xa), SY(Math.min(hE, HMAX)))
    ctx.lineTo(SX(-xa), SY(Math.min(hE, HMAX)))
    ctx.closePath()
    ctx.fill()

    // linha da energia inicial (some atrás da atual quando não há atrito)
    ctx.strokeStyle = C.faint
    ctx.setLineDash([4, 5])
    ctx.beginPath(); ctx.moveTo(34, SY(s.h0)); ctx.lineTo(stageW - 6, SY(s.h0)); ctx.stroke()
    ctx.setLineDash([])

    // linha da energia mecânica atual
    ctx.strokeStyle = C.ink
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.moveTo(SX(-xa), SY(hE)); ctx.lineTo(SX(xa), SY(hE)); ctx.stroke()
    text(ctx, 'energia mecânica', SX(xa) - 4, SY(hE) - 6, { size: 10, weight: 700, color: C.ink, align: 'right' })
    if (calor > E0 * 0.02) {
      text(ctx, 'energia no início', stageW - 8, SY(s.h0) - 6, { size: 10, color: C.muted, align: 'right' })
      // o que desceu virou calor
      arrow(ctx, SX(0), SY(s.h0) + 2, SX(0), SY(hE) - 3, { color: Q.thermal, width: 1.8 })
      text(ctx, 'virou calor', SX(0) + 8, (SY(s.h0) + SY(hE)) / 2 + 4, { size: 10, weight: 700, color: Q.thermal })
    }

    // ── Trilho ────────────────────────────────────────────────────
    ctx.strokeStyle = A
    ctx.lineWidth = 3
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let i = 0; i <= 100; i++) {
      const x = -XMAX + (i / 100) * 2 * XMAX
      i === 0 ? ctx.moveTo(SX(x), SY(KTRACK * x * x)) : ctx.lineTo(SX(x), SY(KTRACK * x * x))
    }
    ctx.stroke()

    // ── Bolinha ───────────────────────────────────────────────────
    const R = 8
    const slope = 2 * KTRACK * s.x
    // normal do trilho em pixels: a bolinha apoia-se nele, não atravessa
    const nx = -slope * ppmY, ny = -ppmX
    const nl = Math.hypot(nx, ny)
    const bx = SX(s.x) + (nx / nl) * (R + 1.5)
    const by = SY(y) + (ny / nl) * (R + 1.5)

    trail(ctx, s.trail.map(([tx, ty]) => {
      const sl = 2 * KTRACK * tx
      const mx = -sl * ppmY, my = -ppmX, ml = Math.hypot(mx, my)
      return [SX(tx) + (mx / ml) * (R + 1.5), SY(ty) + (my / ml) * (R + 1.5)]
    }), A, { width: 3, alpha: 0.6 })

    // cinética = o que falta para chegar à linha
    if (hE - y > 0.04) {
      ctx.strokeStyle = Q.kinetic
      ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(bx, by - R - 3); ctx.lineTo(bx, SY(hE) + 2); ctx.stroke()
      if ((hE - y) * ppmY > 34) {
        text(ctx, 'cinética', bx + 7, (by - R + SY(hE)) / 2 + 4, { size: 10, weight: 700, color: Q.kinetic })
      }
    }
    // potencial = altura acima do fundo
    if (y > 0.3) {
      ctx.strokeStyle = hexA(Q.potential, 0.9)
      ctx.lineWidth = 3
      ctx.beginPath(); ctx.moveTo(SX(s.x), SY(y) + 3); ctx.lineTo(SX(s.x), valleyY); ctx.stroke()
    }

    // velocidade, tangente ao trilho
    if (Math.abs(s.v) > 0.15) {
      const txp = ppmX, typ = -slope * ppmY
      const tl = Math.hypot(txp, typ)
      const len = s.v * 5.5
      arrow(ctx, bx, by, bx + (txp / tl) * len, by + (typ / tl) * len, { color: Q.velocity, width: 2.2, label: 'v' })
    }

    glow(ctx, bx, by, R, A, 0.9)
    handle(ctx, bx, by, R, s.hover || s.drag, A)

    // ── Estado ────────────────────────────────────────────────────
    const parada = Math.abs(s.v) < 1e-3 && mu > 0 && calor > 0.01
    const est = s.drag
      ? { t: 'Solte para largar a bolinha desta altura', c: C.ink }
      : parada
        ? { t: 'Parou: toda a energia mecânica virou calor', c: Q.thermal }
        : mu === 0
          ? { t: 'Sem atrito, a bolinha volta sempre à altura de onde saiu', c: Q.potential }
          : { t: 'Com atrito, cada passagem deixa um pouco de energia em calor', c: Q.thermal }
    caption(ctx, est.t, 16, 24, est.c)
    if (!s.moved) caption(ctx, 'Arraste a bolinha pelo trilho e solte', 16, h - 14, C.dim)

    // ── Barras ────────────────────────────────────────────────────
    const bw = 86, bh = 54
    const bx0 = stageW - bw - 22, by0 = h - bh - 34
    bars(ctx, bx0, by0, bw, bh, [
      { label: 'Ec', value: Ec, max: E0 || 1, color: Q.kinetic },
      { label: 'Ep', value: Ep, max: E0 || 1, color: Q.potential },
      { label: 'Em', value: Em, max: E0 || 1, color: C.ink },
      { label: 'Q',  value: calor, max: E0 || 1, color: Q.thermal },
    ], { barWidth: 14 })

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'h  altura',      v: `${y.toFixed(2)} m`, c: Q.potential },
      { k: 'v  velocidade',  v: `${Math.abs(s.v).toFixed(2)} m/s`, c: Q.velocity },
      { k: 'Ec cinética',    v: `${Ec.toFixed(1)} J`, c: Q.kinetic },
      { k: 'Ep potencial',   v: `${Ep.toFixed(1)} J`, c: Q.potential },
      { k: 'Em mecânica',    v: `${Em.toFixed(1)} J` },
      { k: 'Q  calor',       v: `${calor.toFixed(1)} J`, c: Q.thermal },
      { k: 'Em + Q',         v: `${(Em + calor).toFixed(1)} J` },
      { k: 'dissipado',      v: `${(E0 > 0 ? (calor / E0) * 100 : 0).toFixed(0)} %` },
    ], { title: 'Ec + Ep = constante (m = 1 kg)', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ── Energias no tempo ─────────────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const win = 8
    const t1 = Math.max(win, s.t)
    caption(ctx, 'A energia troca de forma', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.40 }, {
      xDomain: [t1 - win, t1], yDomain: [0, Math.max(1, E0 * 1.12)],
      xTicks: 4, yTicks: 3,
      fmtX: t => `${t.toFixed(0)} s`, fmtY: e => e.toFixed(0),
      yLabel: 'energia (J)',
      rules: [{ y: E0, color: C.faint, label: 'total' }],
      series: [
        { points: s.hist.map(d => [d[0], d[1]]), color: Q.kinetic, width: 2 },
        { points: s.hist.map(d => [d[0], d[2]]), color: Q.potential, width: 2 },
        { points: s.hist.map(d => [d[0], d[3]]), color: Q.thermal, width: 2, fill: true },
      ],
    })
    legend(ctx, gx, 38 + h * 0.40 + 32, [
      { label: 'cinética', color: Q.kinetic },
      { label: 'potencial', color: Q.potential },
      { label: 'calor', color: Q.thermal },
    ])

    // ── v contra h: v = √(2g·(h₀ − h)) ────────────────────────────
    const py0 = h * 0.40 + 108
    const ph  = h - py0 - 40
    if (ph > 50) {
      const vTop = Math.sqrt(2 * G * s.h0)
      const curve = []
      for (let i = 0; i <= 40; i++) { const hh = (i / 40) * s.h0; curve.push([hh, Math.sqrt(2 * G * (s.h0 - hh))]) }
      caption(ctx, 'Velocidade em cada altura', gx, py0 - 12, A)
      plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
        xDomain: [0, HMAX], yDomain: [0, Math.max(1, vTop * 1.15)],
        xTicks: 5, yTicks: 2,
        fmtX: x => x.toFixed(0), fmtY: v => v.toFixed(0),
        xLabel: 'altura (m)', yLabel: 'v (m/s)',
        series: [{ points: curve, color: C.faint, width: 1.5, dash: [4, 4] }],
        markers: [{ x: y, y: Math.abs(s.v), color: Q.velocity, r: 4.5 }],
      })
    }
  }, [])

  // Arrastar a bolinha pelo trilho escolhe a altura de largada.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { cx, valleyY, ppmX, ppmY } = geom(view)
    const bx = cx + s.x * ppmX
    const by = valleyY - KTRACK * s.x * s.x * ppmY
    const over = Math.hypot(pt.x - bx, pt.y - by) < 26

    if (kind === 'down' && over) s.drag = true
    if (kind === 'up' && s.drag) {
      s.drag = false
      const h0 = clamp(Math.round(KTRACK * s.x * s.x * 2) / 2, 1, HMAX)   // passo do controle
      const side = Math.sign(s.x) || -1
      Object.assign(s, { x: side * Math.sqrt(h0 / KTRACK), v: 0, h0, t: 0, trail: [], hist: [] })
      view.setParams?.({ alturaInicial: h0 })
    }
    if (s.drag) {
      s.x = clamp((pt.x - cx) / ppmX, -XMAX, XMAX)
      s.v = 0
      s.h0 = Math.max(0.2, KTRACK * s.x * s.x)
      s.trail = []; s.hist = []; s.t = 0
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

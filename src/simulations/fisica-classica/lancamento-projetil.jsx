// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Lançamento de Projétil
//
// A composição de dois movimentos independentes:
//   · horizontal → MRU     (vₓ = v₀·cos θ, constante: nada o acelera)
//   · vertical   → MRUV    (v_y = v₀·sen θ − g·t, puxado pela gravidade)
//
// No vácuo o resultado é a parábola, com
//   tempo de voo  T = 2·v₀·sen θ / g
//   altura máxima H = (v₀·sen θ)² / (2g)
//   alcance       A = v₀²·sen(2θ) / g      ← máximo em 45°
//
// As marcas brancas são um "estroboscópio": a posição a intervalos de
// tempo iguais. Elas ficam igualmente espaçadas na horizontal (MRU) e
// cada vez mais juntas perto do topo (MRUV) — a independência dos dois
// movimentos, visível numa imagem só.
//
// Com a resistência do ar ligada, o projétil vira uma bola de futebol
// (arrasto quadrático, a = −k·|v|·v, k = ½·ρ·C·A/m ≈ 0,025 m⁻¹). A
// trajetória deixa de ser simétrica, cai mais íngreme do que sobe, e o
// melhor ângulo passa a ser MENOR que 45°. O voo é integrado por
// Runge–Kutta de 2ª ordem; a curva de alcance com ar é calculada
// integrando um lançamento para cada ângulo.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, glow, ground, handle, plot, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const RAD = Math.PI / 180
const K_AIR = 0.025      // m⁻¹ — bola de futebol (m 0,43 kg, r 11 cm, C 0,47)
const STROBE = 0.25      // s entre marcas do estroboscópio
const PAUSE = 1.1        // s parado no chão antes de relançar
const CANNON0 = 24       // px — comprimento do canhão com v₀ = 0
const CANNON_K = 1.5     // px por m/s

function geom(view, v0, g) {
  const { w, h } = view
  const compact = w < 640
  const stageW = compact ? w : w * 0.60
  const refMax = (v0 * v0) / g                 // alcance a 45° no vácuo
  const padL = 44, padR = 20, padB = 44, padT = 44
  const ppm = Math.min((stageW - padL - padR) / Math.max(refMax, 1),
                       (h - padT - padB) / Math.max(refMax / 2, 1))
  return { compact, stageW, refMax, ppm, ox: padL, oy: h - padB }
}

/** Derivadas do estado [x, y, vx, vy]. */
function deriv(vx, vy, g, k) {
  const sp = Math.hypot(vx, vy)
  return [vx, vy, -k * sp * vx, -g - k * sp * vy]
}

/** Um passo de Runge–Kutta de 2ª ordem (ponto médio). */
function advance(b, dt, g, k) {
  const [, , ax1, ay1] = deriv(b.vx, b.vy, g, k)
  const [dx2, dy2, ax2, ay2] = deriv(b.vx + ax1 * dt / 2, b.vy + ay1 * dt / 2, g, k)
  b.x += dx2 * dt; b.y += dy2 * dt
  b.vx += ax2 * dt; b.vy += ay2 * dt
}

/** Voo completo, para a curva de alcance: devolve { R, H, T }. */
function flight(v0, deg, g, k) {
  const b = { x: 0, y: 0, vx: v0 * Math.cos(deg * RAD), vy: v0 * Math.sin(deg * RAD) }
  const dt = 1 / 120
  let t = 0, H = 0
  for (let i = 0; i < 6000; i++) {
    const px = b.x, py = b.y
    advance(b, dt, g, k)
    t += dt
    if (b.y > H) H = b.y
    if (b.y <= 0) {
      const f = py / (py - b.y || 1)             // fração do passo até tocar o chão
      return { R: px + (b.x - px) * f, H, T: t - dt + dt * f }
    }
  }
  return { R: b.x, H, T: t }
}

export default function LancamentoProjetilCanvas({ params, running, resetKey }) {
  const launch = (s, p) => {
    const v0 = p.v0 ?? 25, ang = (p.angulo ?? 45) * RAD
    s.b = { x: 0, y: 0, vx: v0 * Math.cos(ang), vy: v0 * Math.sin(ang) }
    s.t = 0; s.nextDot = STROBE
    s.path = [[0, 0]]; s.dots = []
    s.hmax = 0; s.flying = true; s.wait = 0
    s.vhist = [[0, s.b.vx, s.b.vy]]
  }

  const setup = useCallback((view, p) => {
    const s = { key: '', ghosts: [], last: null, curve: null, curveKey: '', drag: false, hover: false, moved: false }
    launch(s, p)
    return s
  }, [])

  const step = useCallback((s, dt, p) => {
    const g = p.gravidade ?? 9.8
    const k = (p.ar ?? 0) === 1 ? K_AIR : 0
    const key = `${p.v0}|${p.angulo}|${g}|${k}`
    if (key !== s.key) {
      // mudar a gravidade ou o ar torna as comparações antigas sem sentido
      const env = `${g}|${k}`
      if (s.env !== env) { s.env = env; s.ghosts = [] }
      s.key = key
      s.last = null          // o alcance medido é o DESTE lançamento
      launch(s, p)
      return
    }
    if (s.drag) return

    if (!s.flying) {
      s.wait += dt
      if (s.wait > PAUSE) launch(s, p)
      return
    }

    const px = s.b.x, py = s.b.y
    advance(s.b, dt, g, k)
    s.t += dt
    if (s.b.y > s.hmax) s.hmax = s.b.y

    if (s.b.y <= 0 && s.t > dt) {
      const f = py / (py - s.b.y || 1)
      s.b.x = px + (s.b.x - px) * f
      s.b.y = 0
      s.t += dt * (f - 1)
      s.flying = false
      s.path.push([s.b.x, 0])
      s.last = { R: s.b.x, H: s.hmax, T: s.t, deg: p.angulo ?? 45 }
      // guarda o tiro para comparar com os próximos (até 3, sem repetir)
      if (!s.ghosts.some(gh => gh.key === key)) {
        s.ghosts.push({ key, deg: p.angulo ?? 45, R: s.b.x, path: s.path.slice() })
        if (s.ghosts.length > 4) s.ghosts.shift()
      }
      return
    }
    if (s.t >= s.nextDot) { s.dots.push([s.b.x, s.b.y]); s.nextDot += STROBE }
    s.path.push([s.b.x, s.b.y])
    if (s.path.length > 2400) s.path.splice(0, 2)
    const lastV = s.vhist[s.vhist.length - 1]
    if (s.t - lastV[0] > 0.03) s.vhist.push([s.t, s.b.vx, s.b.vy])
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const v0  = p.v0 ?? 25
    const deg = p.angulo ?? 45
    const ang = deg * RAD
    const g   = p.gravidade ?? 9.8
    const air = (p.ar ?? 0) === 1
    const k   = air ? K_AIR : 0

    const { compact, stageW, refMax, ppm, ox, oy } = geom(view, v0, g)
    const X = x => ox + x * ppm
    const Y = y => oy - y * ppm

    // previsão no vácuo (fórmulas fechadas)
    const Tv = (2 * v0 * Math.sin(ang)) / g
    const Hv = (v0 * Math.sin(ang)) ** 2 / (2 * g)
    const Rv = (v0 * v0 * Math.sin(2 * ang)) / g

    // ── Chão e régua de distância ─────────────────────────────────
    ground(ctx, 10, stageW - 6, oy)
    const nice = [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]
    const stepM = nice.find(n => n * ppm >= 46) ?? 1000
    for (let d = 0; X(d) < stageW - 14; d += stepM) {
      ctx.fillStyle = C.muted
      ctx.fillRect(X(d), oy, 1, 5)
      text(ctx, `${d}`, X(d), oy + 18, { size: 9, color: C.muted, align: 'center' })
    }
    text(ctx, 'metros', stageW - 10, oy + 32, { size: 9, color: C.muted, align: 'right' })

    // ── Tiros anteriores (para comparar) ──────────────────────────
    for (const gh of s.ghosts) {
      if (gh.key === s.key) continue
      ctx.strokeStyle = C.faint
      ctx.lineWidth = 1.2
      ctx.beginPath()
      gh.path.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(X(x), Y(y)) : ctx.lineTo(X(x), Y(y))))
      ctx.stroke()
      const mid = gh.path[Math.floor(gh.path.length / 2)]
      text(ctx, `${gh.deg.toFixed(0)}°`, X(mid[0]), Y(mid[1]) - 6, { size: 9, color: C.muted, align: 'center' })
    }

    // ── Parábola do vácuo, como referência quando há ar ───────────
    if (air || s.drag) {
      ctx.strokeStyle = hexA(C.ink, 0.4)
      ctx.setLineDash([4, 5])
      ctx.lineWidth = 1.2
      ctx.beginPath()
      for (let i = 0; i <= 80; i++) {
        const t = (i / 80) * Tv
        const px = X(v0 * Math.cos(ang) * t), py = Y(v0 * Math.sin(ang) * t - 0.5 * g * t * t)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
      ctx.setLineDash([])
      if (air) text(ctx, 'sem ar', X(Rv) - 4, oy - 8, { size: 9, color: C.muted, align: 'right' })
    }

    // ── Trajetória percorrida + estroboscópio ─────────────────────
    if (!s.drag) {
      ctx.strokeStyle = A
      ctx.lineWidth = 2.6
      ctx.lineJoin = 'round'
      ctx.beginPath()
      s.path.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(X(x), Y(y)) : ctx.lineTo(X(x), Y(y))))
      ctx.stroke()

      for (const [x, y] of s.dots) {
        ctx.fillStyle = C.ink
        ctx.fillRect(X(x) - 2.5, Y(y) - 2.5, 5, 5)
        // a sombra no chão: sempre igualmente espaçada no vácuo
        ctx.fillStyle = hexA(Q.kinetic, 0.9)
        ctx.fillRect(X(x) - 1, oy - 7, 2, 7)
      }

      // altura máxima e alcance deste voo
      if (s.hmax > 0.4) {
        ctx.strokeStyle = hexA(Q.potential, 0.7)
        ctx.setLineDash([3, 4])
        ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(ox, Y(s.hmax)); ctx.lineTo(X(Math.min(s.b.x, refMax)), Y(s.hmax)); ctx.stroke()
        ctx.setLineDash([])
        text(ctx, `${s.hmax.toFixed(1).replace('.', ',')} m`, ox + 6, Y(s.hmax) - 6, { size: 10, weight: 700, color: Q.potential })
      }
      if (!s.flying && s.last) {
        ctx.fillStyle = Q.warn
        ctx.fillRect(X(s.last.R) - 4, oy - 4, 8, 8)
        text(ctx, `${s.last.R.toFixed(1).replace('.', ',')} m`, X(s.last.R), oy - 12,
          { size: 11, weight: 700, color: Q.warn, align: 'center' })
      }

      // projétil e componentes da velocidade
      if (s.flying) {
        const vs = Math.min(ppm * 0.6, 3.2)
        const bx = X(s.b.x), by = Y(s.b.y)
        arrow(ctx, bx, by, bx + s.b.vx * vs, by, { color: Q.kinetic, width: 2, label: 'vₓ' })
        arrow(ctx, bx, by, bx, by - s.b.vy * vs, { color: Q.potential, width: 2, label: 'vᵧ' })
        arrow(ctx, bx, by, bx + s.b.vx * vs, by - s.b.vy * vs, { color: Q.velocity, width: 2.4 })
        glow(ctx, bx, by, 6, A, 0.9)
      }
    }

    // ── Canhão: a ponta pode ser arrastada (ângulo e velocidade) ──
    const cl = CANNON0 + v0 * CANNON_K
    const tx = ox + Math.cos(ang) * cl, ty = oy - Math.sin(ang) * cl
    ctx.strokeStyle = C.ink
    ctx.lineWidth = 5
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(tx, ty); ctx.stroke()
    ctx.fillStyle = C.ink
    ctx.beginPath(); ctx.arc(ox, oy, 7, Math.PI, 0); ctx.fill()
    ctx.strokeStyle = A
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.arc(ox, oy, 26, -ang, 0); ctx.stroke()
    text(ctx, `${deg.toFixed(0)}°`, ox + 34, oy - 8, { size: 11, weight: 700, color: A })
    handle(ctx, tx, ty, 4, s.hover || s.drag, A)

    // ── Estado ────────────────────────────────────────────────────
    const otimo = !air && Math.abs(deg - 45) < 0.6
    const est = s.drag
      ? { t: `Solte para lançar a ${deg.toFixed(0)}° com ${v0.toFixed(0)} m/s`, c: C.ink }
      : air
        ? { t: 'Com ar a curva cai mais íngreme do que sobe e o alcance encolhe', c: Q.thermal }
        : otimo
          ? { t: '45°: o maior alcance possível no vácuo', c: Q.potential }
          : { t: 'Marcas a cada 0,25 s: espaçamento igual no chão, desigual na altura', c: C.dim }
    const hintY = caption(ctx, est.t, 16, 24, est.c, stageW - 28)
    if (!s.moved) caption(ctx, 'Arraste a ponta do canhão para mirar', 16, hintY + 4, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    const sp = Math.hypot(s.b.vx, s.b.vy)
    readout(ctx, w - 14, 14, [
      { k: 'vₓ  horizontal',   v: `${(s.flying ? s.b.vx : 0).toFixed(1)} m/s`, c: Q.kinetic },
      { k: 'vᵧ  vertical',     v: `${(s.flying ? s.b.vy : 0).toFixed(1)} m/s`, c: Q.potential },
      { k: 'v   módulo',       v: `${(s.flying ? sp : 0).toFixed(1)} m/s`, c: Q.velocity },
      { k: 't   de voo',       v: `${s.t.toFixed(2)} s`, c: A },
      { k: 'alcance medido',   v: s.last ? `${s.last.R.toFixed(1)} m` : '—', c: Q.warn },
      { k: 'altura medida',    v: `${s.hmax.toFixed(1)} m`, c: Q.potential },
      { k: 'alcance no vácuo', v: `${Rv.toFixed(1)} m` },
      { k: 'altura no vácuo',  v: `${Hv.toFixed(1)} m` },
    ], { title: 'A = v₀²·sen(2θ) / g', anchor: 'right', accent: A, minWidth: 206 })

    if (compact) return

    // ── Alcance contra ângulo ─────────────────────────────────────
    const gx = stageW + 46
    const gw = w - gx - 22
    const vac = []
    for (let d = 0; d <= 90; d += 2) vac.push([d, (v0 * v0 * Math.sin(2 * d * RAD)) / g])
    // com ar: um voo integrado por ângulo (recalculado só quando muda)
    const cKey = `${v0}|${g}|${k}`
    if (s.curveKey !== cKey) {
      s.curveKey = cKey
      s.curve = null
      if (air) {
        s.curve = []
        for (let d = 2; d <= 88; d += 2) s.curve.push([d, flight(v0, d, g, k).R])
        s.best = s.curve.reduce((m, c) => (c[1] > m[1] ? c : m), s.curve[0])
      }
    }
    const here = air ? flight(v0, deg, g, k).R : Rv
    caption(ctx, 'Alcance em cada ângulo', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.34 }, {
      xDomain: [0, 90], yDomain: [0, refMax * 1.12],
      xTicks: 3, yTicks: 2,
      fmtX: x => `${x.toFixed(0)}°`, fmtY: y => y.toFixed(0),
      xLabel: 'ângulo de lançamento', yLabel: 'alcance (m)',
      rules: air && s.best
        ? [{ x: s.best[0], color: Q.thermal, label: `melhor: ${s.best[0]}°` }]
        : [{ x: 45, color: C.faint, label: '45°' }],
      series: [
        { points: vac, color: air ? C.faint : Q.warn, width: air ? 1.5 : 2, dash: air ? [4, 4] : null, fill: !air },
        ...(air && s.curve ? [{ points: s.curve, color: Q.thermal, width: 2, fill: true }] : []),
      ],
      markers: [{ x: deg, y: here, color: A, r: 4.5 }],
    })
    if (air) legend(ctx, gx, 38 + h * 0.34 + 32, [{ label: 'com ar', color: Q.thermal }, { label: 'vácuo', color: C.faint }])

    // ── vₓ(t) e vᵧ(t) ─────────────────────────────────────────────
    const py0 = h * 0.34 + 112
    const ph  = h - py0 - 40
    if (ph > 54) {
      const tMax = Math.max(Tv, s.t, 0.5) * 1.05
      const vTop = Math.max(v0, 1)
      caption(ctx, 'As duas velocidades no tempo', gx, py0 - 12, A)
      plot(ctx, { x: gx, y: py0, w: gw, h: ph }, {
        xDomain: [0, tMax], yDomain: [-vTop, vTop],
        xTicks: 3, yTicks: 2,
        fmtX: t => `${t.toFixed(1)} s`, fmtY: v => v.toFixed(0),
        yLabel: 'v (m/s)',
        rules: [{ y: 0, color: C.faint, dash: [] }],
        series: [
          { points: s.vhist.map(d => [d[0], d[1]]), color: Q.kinetic, width: 2 },
          { points: s.vhist.map(d => [d[0], d[2]]), color: Q.potential, width: 2 },
        ],
      })
    }
  }, [])

  // A ponta do canhão define ângulo e velocidade de uma vez.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const v0 = p.v0 ?? 25, ang = (p.angulo ?? 45) * RAD
    const { ox, oy } = geom(view, v0, p.gravidade ?? 9.8)
    const cl = CANNON0 + v0 * CANNON_K
    const tx = ox + Math.cos(ang) * cl, ty = oy - Math.sin(ang) * cl
    const over = Math.hypot(pt.x - tx, pt.y - ty) < 22

    if (kind === 'down' && over) s.drag = true
    if (kind === 'up' && s.drag) { s.drag = false; s.key = '' }   // relança ao soltar
    if (s.drag) {
      const dx = pt.x - ox, dy = oy - pt.y
      view.setParams?.({
        angulo: clamp(Math.atan2(dy, Math.max(dx, 1)) / RAD, 5, 85),
        v0: clamp((Math.hypot(dx, dy) - CANNON0) / CANNON_K, 5, 50),
      })
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

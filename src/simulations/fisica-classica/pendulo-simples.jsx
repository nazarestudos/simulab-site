// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Pêndulo Simples
//
// Integra a equação NÃO linearizada  θ¨ = −(g/L)·sen θ  por Runge–Kutta
// de 4ª ordem. O ponto da simulação é justamente o que a aproximação de
// pequenos ângulos esconde: o período real cresce com a amplitude.
//
//   T₀ (pequenos ângulos) = 2π·√(L/g)
//   T  (exato)            = 4·√(L/g)·K(sen(θ₀/2))       ← integral elíptica
//
// K é calculada pela Média Aritmético-Geométrica (AGM), que converge em
// ~5 iterações. O período MEDIDO na simulação (cruzamentos de zero) é
// exibido junto, e bate com o exato — é a prova de que o integrador está
// correto.
//
// Interação: o prumo pode ser PUXADO com o ponteiro (onPointer); soltar
// larga o pêndulo dali, e o slider de ângulo acompanha. Massa e atrito
// do ar são controles: a massa muda as energias mas não o período — que
// é o ponto —, e o atrito entra como −b·ω na equação.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, grid, panel, text, caption, readout,
  arrow, glow, bars, plot, legend, hexA, clamp, handle,
} from '../engine'

const A = ACCENT['fisica-classica']
const L_MAX = 2.5                       // m — fio mais longo; define a escala do palco
const MAX_ANG = 85 * Math.PI / 180      // limite do arraste (o mesmo do slider)
const GRAB_R = 28                       // raio de captura do prumo, em px lógicos

/** Geometria do palco — a mesma para desenhar e para testar o ponteiro. */
function geom(view, L, plotsOn) {
  const { w, h } = view
  const compact = w < 700 || !plotsOn
  const stageW  = compact ? w : w * 0.60
  const ox = stageW / 2          // pivô
  const oy = h * 0.13
  // Escala fixa: o fio de 2,5 m ocupa a altura útil. Um fio de 0,25 m
  // aparece curto porque ELE É curto — a escala não mente.
  const ppm = (h - oy - 52) / L_MAX
  return { compact, stageW, ox, oy, ppm, Lpx: L * ppm }
}

const ampOf = th => Math.min(85, Math.max(1, Math.round(Math.abs(th) * 180 / Math.PI)))

function clearTraces(s) {
  s.trail = []; s.phase = []
  s.lastCross = null; s.measured = null; s.t = 0; s.prevTh = s.th
}

/** Integral elíptica completa de 1ª espécie K(k), via AGM. */
function ellipticK(k) {
  let a = 1
  let b = Math.sqrt(1 - k * k)
  for (let i = 0; i < 8; i++) {
    const an = (a + b) / 2
    b = Math.sqrt(a * b)
    a = an
  }
  return Math.PI / (2 * a)
}

/** Derivadas do sistema: y = [θ, ω] */
const deriv = (th, om, g, L, b) => [om, -(g / L) * Math.sin(th) - b * om]

/** Um passo de Runge–Kutta 4ª ordem. */
function rk4(th, om, dt, g, L, b) {
  const [k1t, k1o] = deriv(th, om, g, L, b)
  const [k2t, k2o] = deriv(th + k1t * dt / 2, om + k1o * dt / 2, g, L, b)
  const [k3t, k3o] = deriv(th + k2t * dt / 2, om + k2o * dt / 2, g, L, b)
  const [k4t, k4o] = deriv(th + k3t * dt,     om + k3o * dt,     g, L, b)
  return [
    th + (dt / 6) * (k1t + 2 * k2t + 2 * k3t + k4t),
    om + (dt / 6) * (k1o + 2 * k2o + 2 * k3o + k4o),
  ]
}

export default function PenduloSimplesCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const th0 = (p.amplitude ?? 30) * Math.PI / 180
    return {
      th: th0, om: 0,
      th0,
      ampParam: p.amplitude ?? 30,   // último valor do slider que já foi aplicado
      ampHold: 0,                    // até quando ignorar o slider (ele está voltando do arraste)
      drag: false, hover: false, pulled: false,
      L: p.length ?? 1, g: p.gravity ?? 9.8,
      trail: [],           // rastro do prumo, em coordenadas do mundo
      phase: [],           // retrato de fase (θ, ω)
      lastCross: null,     // instante do último cruzamento de zero (subindo)
      measured: null,      // período medido, em s
      t: 0,
      prevTh: th0,
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const L  = p.length ?? 1
    const g  = p.gravity ?? 9.8
    const b  = p.damping ?? 0
    const aDeg = p.amplitude ?? 30

    // Com o prumo na mão, o tempo não corre.
    if (s.drag) { s.L = L; s.g = g; return }

    // O arraste escreve no slider; até o valor voltar, não é "mexer no slider".
    if (performance.now() < s.ampHold) {
      if (aDeg === s.ampParam) s.ampHold = 0
    } else if (aDeg !== s.ampParam) {
      s.ampParam = aDeg
      s.th0 = aDeg * Math.PI / 180
      s.th = s.th0; s.om = 0
      clearTraces(s)
      return
    }

    // Mexer em L ou g reinicia o experimento — é o que um laboratório
    // faria: você não muda o fio com o pêndulo em movimento.
    if (L !== s.L || g !== s.g) {
      s.L = L; s.g = g
      s.th = s.th0 * Math.sign(s.th || 1); s.om = 0
      clearTraces(s)
      return
    }

    ;[s.th, s.om] = rk4(s.th, s.om, dt, g, L, b)
    s.t += dt

    if ((p.trail ?? 0) > 0) {
      s.trailTick = (s.trailTick ?? 0) + 1
      if (s.trailTick % 6 === 0) {
        s.trail.push(s.th)
        if (s.trail.length > 160) s.trail.shift()
      }
    } else if (s.trail.length) s.trail = []

    // Período medido: intervalo entre cruzamentos de θ=0 no mesmo sentido.
    if (s.prevTh < 0 && s.th >= 0) {
      if (s.lastCross !== null) s.measured = s.t - s.lastCross
      s.lastCross = s.t
    }
    s.prevTh = s.th

    s.phase.push([s.th, s.om])
    if (s.phase.length > 4000) s.phase.shift()
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    grid(ctx, view, 36)

    const L = s.L, g = s.g
    const MASS = p.mass ?? 1
    const showVectors = (p.vectors ?? 1) > 0
    const { compact, stageW, ox, oy, ppm, Lpx } = geom(view, L, (p.plots ?? 1) > 0)
    const bobR = clamp(6 + 5 * Math.cbrt(MASS), 8, 15)

    const bx = ox + Lpx * Math.sin(s.th)
    const by = oy + Lpx * Math.cos(s.th)

    // ── Arco da trajetória ────────────────────────────────────────
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.setLineDash([2, 4])
    ctx.beginPath()
    ctx.arc(ox, oy, Lpx, Math.PI / 2 - s.th0, Math.PI / 2 + s.th0)
    ctx.stroke()
    ctx.setLineDash([])

    // Vertical de equilíbrio
    ctx.strokeStyle = C.grid
    ctx.beginPath()
    ctx.moveTo(ox, oy); ctx.lineTo(ox, oy + Lpx + 22)
    ctx.stroke()

    // Ângulo atual: só um arco fino entre a vertical e o fio — um setor
    // preenchido vira uma cunha pesada que compete com o próprio pêndulo.
    const arcR = Math.min(40, Lpx * 0.42)
    ctx.strokeStyle = hexA(A, 0.7)
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.arc(ox, oy, arcR, Math.PI / 2, Math.PI / 2 + s.th, s.th < 0)
    ctx.stroke()
    text(ctx, `${(s.th * 180 / Math.PI).toFixed(1)}°`,
      ox + Math.sin(s.th / 2) * (arcR + 18), oy + Math.cos(s.th / 2) * (arcR + 18) + 4,
      { size: 10, weight: 700, color: A, align: 'center' })

    // ── Suporte ───────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(255,255,255,0.10)'
    ctx.fillRect(ox - 34, oy - 9, 68, 7)
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.strokeRect(ox - 34.5, oy - 9.5, 69, 8)
    for (let i = -30; i <= 26; i += 8) {
      ctx.beginPath()
      ctx.moveTo(ox + i, oy - 2)
      ctx.lineTo(ox + i + 5, oy - 9)
      ctx.stroke()
    }

    // ── Fio + prumo ───────────────────────────────────────────────
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(ox, oy); ctx.lineTo(bx, by)
    ctx.stroke()

    ctx.fillStyle = C.dim
    ctx.beginPath(); ctx.arc(ox, oy, 3, 0, Math.PI * 2); ctx.fill()

    // Vetores no prumo: peso mg (para baixo) e sua componente tangencial,
    // que é a única força restauradora — o coração do problema.
    // As setas são desenhadas por unidade de massa (mostram g, não m):
    // dobrar a massa dobra o peso E a inércia, e o movimento não muda.
    const vScale = 3.2
    const tx = Math.cos(s.th), ty = -Math.sin(s.th) // versor tangente
    const v = s.om * L                              // velocidade tangencial
    if (showVectors) {
      arrow(ctx, bx, by, bx, by + g * vScale, { color: hexA(C.ink, 0.45), width: 1.3, label: 'peso' })
      const ft = -g * Math.sin(s.th)                // componente tangencial
      arrow(ctx, bx, by, bx + tx * ft * vScale, by + ty * ft * vScale,
        { color: Q.force, width: 1.8, label: 'F' })
      if (Math.abs(v) > 0.05) {
        arrow(ctx, bx, by, bx + tx * v * 13, by + ty * v * 13, { color: Q.velocity, width: 1.8, label: 'v' })
      }
    }

    // Rastro: por onde o prumo passou
    for (let i = 0; i < s.trail.length; i++) {
      const th = s.trail[i]
      ctx.fillStyle = hexA(A, 0.12 + 0.5 * (i / s.trail.length))
      ctx.fillRect(ox + Lpx * Math.sin(th) - 1.5, oy + Lpx * Math.cos(th) - 1.5, 3, 3)
    }

    glow(ctx, bx, by, bobR, A, 0.7)
    handle(ctx, bx, by, bobR, s.hover || s.drag, A)
    if (!s.pulled) caption(ctx, 'puxe o prumo com o mouse e solte', 22, 44, C.dim)

    // ── Energias ──────────────────────────────────────────────────
    // U = m·g·L·(1 − cos θ)   |   K = ½·m·L²·ω²   |   E = U + K (constante)
    const U = MASS * g * L * (1 - Math.cos(s.th))
    const K = 0.5 * MASS * L * L * s.om * s.om
    const E = MASS * g * L * (1 - Math.cos(s.th0))   // energia total teórica

    const bx0 = 22, by0 = h - 108
    caption(ctx, 'Energia (J)', bx0, by0 - 10)
    bars(ctx, bx0, by0, 62, 62, [
      { label: 'U', value: U, max: E || 1, color: Q.potential },
      { label: 'K', value: K, max: E || 1, color: Q.kinetic },
      { label: 'E', value: U + K, max: E || 1, color: hexA(C.ink, 0.5) },
    ], { barWidth: 14 })

    // ── Períodos ──────────────────────────────────────────────────
    const T0 = 2 * Math.PI * Math.sqrt(L / g)                       // pequenos ângulos
    const Tex = 4 * Math.sqrt(L / g) * ellipticK(Math.sin(s.th0 / 2)) // exato
    const err = ((Tex - T0) / T0) * 100

    readout(ctx, w - 14, 14, [
      { k: 'T₀  aproximado', v: `${T0.toFixed(3)} s`, c: C.dim },
      { k: 'T   exato',      v: `${Tex.toFixed(3)} s`, c: A },
      { k: 'T   medido',     v: s.measured ? `${s.measured.toFixed(3)} s` : '—', c: Q.kinetic },
      { k: 'erro de 2π√(L/g)', v: `+${err.toFixed(2)} %`, c: err > 1 ? Q.warn : C.dim },
      { k: 'ω  velocidade ang.', v: `${s.om.toFixed(2)} rad/s` },
      { k: 'v  tangencial',  v: `${v.toFixed(2)} m/s` },
      { k: 'm  massa', v: `${MASS.toFixed(1)} kg` },
      { k: 'E  energia agora', v: `${(U + K).toFixed(3)} J`, c: Q.potential },
    ], { title: 'T₀ = 2π√(L/g) — o período não depende da massa', anchor: 'right', accent: A, minWidth: 190 })

    // Escala
    text(ctx, `escala: 1 m = ${ppm.toFixed(0)} px`, 22, 24, { size: 9, color: C.muted })

    if (compact) return

    // ── Retrato de fase (θ, ω) ────────────────────────────────────
    // Órbita fechada = movimento periódico. Ela NÃO é uma elipse para
    // amplitudes grandes: é essa deformação que atrasa o período.
    const px = stageW + 34
    const pw = w - px - 26
    const omMax = Math.max(0.6, Math.sqrt(2 * g / L * (1 - Math.cos(s.th0))) * 1.18)
    const thMax = Math.max(0.2, s.th0 * 1.18)

    caption(ctx, 'Retrato de fase', px, 26, A)
    plot(ctx, { x: px, y: 36, w: pw, h: h * 0.36 }, {
      xDomain: [-thMax, thMax],
      yDomain: [-omMax, omMax],
      xTicks: 4, yTicks: 4,
      fmtX: v => `${(v * 180 / Math.PI).toFixed(0)}°`,
      fmtY: v => v.toFixed(1),
      xLabel: 'ângulo θ', yLabel: 'ω (rad/s)',
      rules: [{ y: 0 }, { x: 0 }],
      series: [{ points: s.phase, color: hexA(A, 0.75), width: 1.4 }],
      markers: [{ x: s.th, y: s.om, color: Q.kinetic, r: 3.5 }],
    })

    // ── Isocronismo: T(θ₀)/T₀ ─────────────────────────────────────
    const py = h * 0.36 + 82
    const ph = h - py - 44
    caption(ctx, 'Quebra do isocronismo', px, py - 10, A)
    const curve = []
    for (let a = 1; a <= 90; a += 1.5) {
      const r = a * Math.PI / 180
      curve.push([a, (4 * Math.sqrt(1 / 1) * ellipticK(Math.sin(r / 2))) / (2 * Math.PI)])
    }
    plot(ctx, { x: px, y: py, w: pw, h: ph }, {
      xDomain: [0, 90], yDomain: [1, 1.2],
      xTicks: 3, yTicks: 4,
      fmtX: v => `${v.toFixed(0)}°`,
      fmtY: v => v.toFixed(2),
      xLabel: 'amplitude θ₀', yLabel: 'T / T₀',
      rules: [{ y: 1, color: C.faint, label: 'previsto por 2π√(L/g)' }],
      series: [{ points: curve, color: hexA(A, 0.8), width: 1.6 }],
      markers: [{ x: s.th0 * 180 / Math.PI, y: Tex / T0, color: Q.warn, r: 4 }],
    })
  }, [])

  // Puxar o prumo: enquanto o ponteiro segura, o ângulo segue o ponteiro
  // e o slider acompanha; ao soltar, o pêndulo parte do repouso dali.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { ox, oy, Lpx } = geom(view, s.L, (p.plots ?? 1) > 0)
    const bx = ox + Lpx * Math.sin(s.th), by = oy + Lpx * Math.cos(s.th)
    const over = Math.hypot(pt.x - bx, pt.y - by) < GRAB_R

    if (kind === 'down' && over) { s.drag = true; s.pulled = true }
    if (kind === 'up' && s.drag) {
      s.drag = false
      s.th0 = Math.max(Math.abs(s.th), Math.PI / 180)
      s.om = 0
      clearTraces(s)
    }
    if (s.drag) {
      s.th = clamp(Math.atan2(pt.x - ox, pt.y - oy), -MAX_ANG, MAX_ANG)
      s.om = 0
      s.th0 = Math.max(Math.abs(s.th), Math.PI / 180)
      s.ampParam = ampOf(s.th)
      s.ampHold = performance.now() + 500
      view.setParams?.({ amplitude: s.ampParam })
      clearTraces(s)
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

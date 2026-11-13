// ─────────────────────────────────────────────────────────────
// components/HeroField.jsx — a abertura do site É uma simulação.
//
// Cuba de ondas: duas fontes fixas emitem ondas circulares, o cursor é
// uma terceira fonte e cada clique solta um pulso. Em cada ponto somamos
//
//   u(x, y, t) = Σ aᵢ·cos(k·rᵢ − ω·t) / √(1 + rᵢ/r₀)  +  pulsos
//
// e o tamanho do quadrado mostra a altura da água ali: onde cristas se
// encontram o ponto cresce (interferência construtiva); onde crista
// encontra vale, some (destrutiva).
//
// O MESMO campo move as letras do título: `floaters` é uma lista de
// { el, x, y } (posições no canvas) e cada letra sobe e desce com a água
// que está embaixo dela. Usa o motor de passo fixo das simulações.
// ─────────────────────────────────────────────────────────────
import { useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import { SimCanvas } from '../simulations/engine'

const LAMBDA = 150                      // comprimento de onda, px
const K      = (2 * Math.PI) / LAMBDA   // número de onda
const OMEGA  = 2 * Math.PI * 0.36       // rad/s
const R0     = 260                      // escala do decaimento com a distância

const PULSE_SPEED = 340                 // px/s — frente do pulso
const PULSE_K     = (2 * Math.PI) / 84
const PULSE_WIDTH = 78                  // largura do pacote, px
const PULSE_LIFE  = 4.5                 // s

const LETTER_LIFT = 0.07                // subida por unidade de u, em frações da altura da letra
const LETTER_TILT = 1.3                 // graus por unidade de u

function sources(s, w, h) {
  return [
    { x: w * 0.60, y: h * 0.26, a: 1 },
    { x: w * 0.88, y: h * 0.66, a: 1 },
    { x: s.px,     y: s.py,     a: 1.25 * s.amp },
  ]
}

function field(src, pulses, t, x, y) {
  let u = 0
  const phase = OMEGA * t
  for (let i = 0; i < src.length; i++) {
    const q = src[i]
    if (q.a < 0.01) continue
    const r = Math.hypot(x - q.x, y - q.y)
    u += (q.a * Math.cos(K * r - phase)) / Math.sqrt(1 + r / R0)
  }
  for (let i = 0; i < pulses.length; i++) {
    const p = pulses[i]
    const tau = t - p.t
    if (tau < 0) continue
    const d = Math.hypot(x - p.x, y - p.y) - PULSE_SPEED * tau
    if (d > PULSE_WIDTH * 2.4 || d < -PULSE_WIDTH * 2.4) continue
    u += 1.9 * Math.exp(-(d * d) / (PULSE_WIDTH * PULSE_WIDTH)) * Math.exp(-tau * 0.7) * Math.cos(PULSE_K * d)
  }
  return u
}

export default function HeroField({ floaters }) {
  const reduce = useReducedMotion()

  const setup = useCallback(view => ({
    t: 0,
    px: view.w * 0.7, py: view.h * 0.45,   // fonte do cursor (suavizada)
    amp: 0,                                // 0 → 1 quando o cursor entra
    // um pulso de abertura, saindo de trás do título
    pulses: [{ x: view.w * 0.22, y: view.h * 0.5, t: 0.55 }],
  }), [])

  const step = useCallback((s, dt, _p, view) => {
    s.t += dt
    const pt = view.pointer
    if (pt.inside) {
      s.px += (pt.x - s.px) * Math.min(1, dt * 7)
      s.py += (pt.y - s.py) * Math.min(1, dt * 7)
    }
    s.amp += ((pt.inside ? 1 : 0) - s.amp) * Math.min(1, dt * 2.5)
    if (s.pulses.length && s.t - s.pulses[0].t > PULSE_LIFE) s.pulses.shift()
  }, [])

  const onPointer = useCallback((kind, pt, s) => {
    if (kind !== 'down' || !s) return
    s.pulses.push({ x: pt.x, y: pt.y, t: s.t })
    if (s.pulses.length > 6) s.pulses.shift()
  }, [])

  const render = useCallback((ctx, s, _p, view) => {
    const { w, h } = view
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)

    const gap  = w < 640 ? 13 : 15
    const half = gap * 0.46
    const src  = sources(s, w, h)

    ctx.fillStyle = '#fff'
    for (let y = gap / 2; y < h; y += gap) {
      for (let x = gap / 2; x < w; x += gap) {
        const u = field(src, s.pulses, s.t, x, y)
        // só as cristas ganham corpo
        const n = u > 0 ? Math.min(1, u / 1.7) : 0
        const d = 0.6 + n * n * half
        ctx.globalAlpha = 0.12 + n * 0.85
        ctx.fillRect(x - d, y - d, d * 2, d * 2)
      }
    }
    ctx.globalAlpha = 1

    // as letras do título boiam na mesma água
    const list = floaters?.current
    if (list && !reduce) {
      for (let i = 0; i < list.length; i++) {
        const f = list[i]
        const u = field(src, s.pulses, s.t, f.x, f.y)
        f.el.style.transform =
          `translate3d(0, ${(-u * LETTER_LIFT * f.size).toFixed(2)}px, 0) rotate(${(u * LETTER_TILT).toFixed(2)}deg)`
      }
    }
  }, [floaters, reduce])

  return (
    <SimCanvas
      setup={setup} step={step} render={render} onPointer={onPointer}
      params={null} running={!reduce} zoom={1} touchAction="auto"
    />
  )
}

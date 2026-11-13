// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Tunelamento
//
// Uma partícula com E < V₀ atravessa uma barreira que, classicamente,
// ela NÃO tem energia para transpor. Não é metáfora: é a solução exata
// da equação de Schrödinger para a barreira retangular.
//
// Para E < V₀, o coeficiente de transmissão é
//
//     T = [ 1 + (V₀²·senh²(κL)) / (4E(V₀−E)) ]⁻¹
//     κ = √(2m(V₀−E)) / ħ
//
// E para E > V₀ (a partícula PASSA por cima), o k vira real e o senh
// vira sen — o que produz RESSONÂNCIAS: em certas energias a
// transmissão é exatamente 100 %, e entre elas ela CAI. Uma partícula
// clássica com energia de sobra sempre passaria; a quântica às vezes
// RICOCHETEIA numa barreira que já venceu. Isso não tem análogo nenhum
// no mundo macroscópico.
//
// O ponto mais importante: T cai EXPONENCIALMENTE com a espessura. Some
// 0,1 nm na barreira e a corrente despenca em ordens de magnitude. É
// exatamente por isso que o microscópio de tunelamento (STM) consegue
// ver ÁTOMOS individuais — a corrente é tão sensível à distância que
// 0,1 nm de diferença muda tudo.
//
// E é o mesmo efeito que faz o Sol brilhar: dois prótons não têm energia
// para vencer a repulsão elétrica entre eles, mas tunelam. Sem isso, não
// haveria fusão — nem nós.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, sci,
} from '../engine'

const A = ACCENT['fisica-quantica']

const V0 = 30          // eV — altura da barreira
const L_MAX = 1.0      // nm — a 30 eV, o efeito vive abaixo de 1 nm
const HBAR = 1.054571817e-34
const M_E = 9.1093837e-31
const EV = 1.602176634e-19

/** Coeficiente de transmissão exato da barreira retangular. */
function transmission(E_eV, L_nm) {
  const E = E_eV * EV
  const V = V0 * EV
  const L = L_nm * 1e-9

  if (Math.abs(E_eV - V0) < 1e-9) {
    // Caso E = V₀: o limite é T = 1/(1 + mV₀L²/(2ħ²))
    const x = (M_E * V * L * L) / (2 * HBAR * HBAR)
    return 1 / (1 + x)
  }

  if (E < V) {
    // ── Tunelamento: κ real, senh ─────────────────────────────
    const kappa = Math.sqrt(2 * M_E * (V - E)) / HBAR
    const sh = Math.sinh(kappa * L)
    return 1 / (1 + (V * V * sh * sh) / (4 * E * (V - E)))
  }

  // ── Acima da barreira: k real, sen → RESSONÂNCIAS ─────────
  const k2 = Math.sqrt(2 * M_E * (E - V)) / HBAR
  const sn = Math.sin(k2 * L)
  return 1 / (1 + (V * V * sn * sn) / (4 * E * (E - V)))
}

export default function TunelamentoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, pulse: 0 }), [])

  const step = useCallback((s, dt) => {
    s.t += dt
    s.pulse = (s.pulse + dt * 0.30) % 1
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const L = p.barrier ?? 0.2    // nm
    const E = p.energy  ?? 15     // eV

    const T = transmission(E, L)
    const R = 1 - T
    const tunneling = E < V0

    // Comprimento de decaimento 1/κ — a escala de penetração
    const kappa = tunneling
      ? Math.sqrt(2 * M_E * (V0 - E) * EV) / HBAR
      : 0
    const decayNm = tunneling ? (1 / kappa) * 1e9 : Infinity

    const compact = w < 720
    const stageW = compact ? w : w * 0.56

    // ══ POÇO / BARREIRA ══════════════════════════════════════════
    const gx = 40
    const gw = stageW - 70
    const gy = h * 0.14
    const gh = h * 0.50
    const base = gy + gh          // V = 0

    const vScale = gh / (V0 * 1.35)

    // eixo
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(gx, base); ctx.lineTo(gx + gw, base)
    ctx.stroke()

    // barreira: largura proporcional a L
    const bW = clamp((L / L_MAX) * gw * 0.45, 12, gw * 0.5)
    const bX = gx + gw / 2 - bW / 2
    const bH = V0 * vScale

    ctx.fillStyle = hexA(Q.field, 0.18)
    ctx.fillRect(bX, base - bH, bW, bH)
    ctx.strokeStyle = hexA(Q.field, 0.8)
    ctx.lineWidth = 1.3
    ctx.strokeRect(bX + 0.5, base - bH + 0.5, bW, bH)
    text(ctx, `V₀ = ${V0} eV`, bX + bW / 2, base - bH - 8,
      { size: 9, weight: 700, color: Q.field, align: 'center' })
    text(ctx, `L = ${L.toFixed(2)} nm`, bX + bW / 2, base + 15,
      { size: 9, weight: 700, color: Q.field, align: 'center' })

    // nível de energia da partícula
    const eY = base - E * vScale
    ctx.strokeStyle = tunneling ? Q.warn : Q.potential
    ctx.lineWidth = 1.5
    ctx.setLineDash([5, 3])
    ctx.beginPath()
    ctx.moveTo(gx, eY); ctx.lineTo(gx + gw, eY)
    ctx.stroke()
    ctx.setLineDash([])
    text(ctx, `E = ${E} eV`, gx + gw, eY - 6,
      { size: 9, weight: 700, color: tunneling ? Q.warn : Q.potential, align: 'right' })

    // ══ FUNÇÃO DE ONDA ═══════════════════════════════════════════
    // À esquerda: incidente + refletida (a soma faz ONDA ESTACIONÁRIA
    // parcial — as ondulações de amplitude são a assinatura da reflexão).
    // Dentro: decaimento exponencial e^(−κx).
    // À direita: onda transmitida, com amplitude √T.
    const amp = gh * 0.13
    const k1 = 2.6 + E * 0.06
    const phase = s.pulse * Math.PI * 2

    ctx.lineWidth = 1.7
    ctx.beginPath()
    for (let px = gx; px <= gx + gw; px += 1) {
      let y
      if (px < bX) {
        const x = (px - gx) / 22
        const inc = Math.sin(k1 * x - phase)
        const ref = Math.sqrt(R) * Math.sin(k1 * x + phase)
        y = eY - (inc + ref) * amp * 0.62
      } else if (px <= bX + bW) {
        // decaimento dentro da barreira
        const frac = (px - bX) / bW
        const decay = tunneling
          ? Math.exp(-kappa * (frac * L * 1e-9))
          : 1
        const startAmp = amp * 0.9
        y = eY - decay * startAmp * Math.sin(-phase) * 1.0
      } else {
        const x = (px - (bX + bW)) / 22
        y = eY - Math.sqrt(T) * amp * Math.sin(k1 * x - phase) * 1.15
      }
      px === gx ? ctx.moveTo(px, y) : ctx.lineTo(px, y)
    }
    ctx.strokeStyle = A
    ctx.stroke()

    // Envoltória do decaimento — deixa explícito o e^(−κx)
    if (tunneling) {
      ctx.strokeStyle = hexA(Q.warn, 0.5)
      ctx.lineWidth = 1
      ctx.setLineDash([2, 2])
      for (const sgn of [-1, 1]) {
        ctx.beginPath()
        for (let px = bX; px <= bX + bW; px += 2) {
          const frac = (px - bX) / bW
          const decay = Math.exp(-kappa * (frac * L * 1e-9))
          const y = eY + sgn * decay * amp * 0.9
          px === bX ? ctx.moveTo(px, y) : ctx.lineTo(px, y)
        }
        ctx.stroke()
      }
      ctx.setLineDash([])
    }

    // rótulos das regiões
    text(ctx, 'incidente + refletida', gx + 4, gy + 8, { size: 8, color: C.muted })
    text(ctx, 'transmitida', gx + gw, gy + 8, { size: 8, color: C.muted, align: 'right' })
    if (tunneling) {
      text(ctx, 'e^(−κx)', bX + bW / 2, eY + amp * 1.5,
        { size: 8.5, weight: 700, color: Q.warn, align: 'center' })
    }

    // ══ Barras T e R ═════════════════════════════════════════════
    const by = h * 0.72
    const bw2 = stageW - 80
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(40, by, bw2, 16)
    ctx.fillStyle = hexA(A, 0.85)
    ctx.fillRect(40, by, bw2 * T, 16)
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(40.5, by + 0.5, bw2, 16)

    text(ctx, `T = ${(T * 100).toFixed(T < 0.1 ? 4 : 1)} %`, 40, by + 30,
      { size: 10, weight: 700, color: A })
    text(ctx, `R = ${(R * 100).toFixed(1)} %`, 40 + bw2, by + 30,
      { size: 10, weight: 700, color: Q.field, align: 'right' })

    caption(ctx,
      tunneling ? 'E < V₀ — tunelamento: classicamente PROIBIDO'
                : 'E > V₀ — passa por cima, mas ainda pode REFLETIR',
      40, 24, tunneling ? Q.warn : Q.potential)

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'E  energia',    v: `${E} eV`, c: tunneling ? Q.warn : Q.potential },
      { k: 'V₀ barreira',   v: `${V0} eV`, c: Q.field },
      { k: 'L  espessura',  v: `${L.toFixed(2)} nm` },
      { k: 'T  transmissão', v: T < 1e-4 ? sci(T, 2) : `${(T * 100).toFixed(3)} %`, c: A },
      { k: 'R  reflexão',   v: `${(R * 100).toFixed(2)} %`, c: Q.field },
      { k: '1/κ  penetração', v: tunneling ? `${decayNm.toFixed(3)} nm` : '—', c: Q.warn },
      { k: 'regime',        v: tunneling ? 'túnel' : 'sobre a barreira' },
    ], { title: 'Barreira retangular', anchor: 'right', accent: A, minWidth: 208 })

    if (compact) return

    // ══ T × ESPESSURA (escala log) ═══════════════════════════════
    const px2 = stageW + 46
    const pw = w - px2 - 26

    caption(ctx, 'T cai EXPONENCIALMENTE com L', px2, 26, Q.warn)

    const curve = []
    for (let i = 0; i <= 100; i++) {
      const l = 0.01 + (i / 100) * (L_MAX - 0.01)
      const t = transmission(E, l)
      curve.push([l, Math.log10(Math.max(t, 1e-12))])
    }

    plot(ctx, { x: px2, y: 38, w: pw, h: h * 0.32 }, {
      xDomain: [0, L_MAX], yDomain: [-12, 0],
      xTicks: 4, yTicks: 4,
      fmtX: q => q.toFixed(2), fmtY: q => `1e${q.toFixed(0)}`,
      xLabel: 'espessura L (nm)', yLabel: 'T',
      series: [{ points: curve, color: A, width: 1.8 }],
      markers: [{ x: L, y: Math.log10(Math.max(T, 1e-12)), color: Q.kinetic, r: 4 }],
    })
    text(ctx, 'reta em escala log = exponencial pura', px2, h * 0.32 + 60,
      { size: 8.5, color: C.muted })

    // ══ T × ENERGIA — as ressonâncias ════════════════════════════
    const py = h * 0.32 + 92
    const ph = h - py - 52

    caption(ctx, 'T × E · ressonâncias acima de V₀', px2, py - 10, Q.potential)

    const ce = []
    for (let i = 0; i <= 200; i++) {
      const e = 0.5 + (i / 200) * 49.5
      ce.push([e, transmission(e, L)])
    }

    plot(ctx, { x: px2, y: py, w: pw, h: ph }, {
      xDomain: [0, 50], yDomain: [0, 1.08],
      xTicks: 5, yTicks: 2,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(1),
      xLabel: 'energia E (eV)', yLabel: 'T',
      rules: [
        { x: V0, color: hexA(Q.field, 0.7), label: 'V₀' },
        { y: 1, color: hexA(C.ink, 0.2) },
      ],
      series: [{ points: ce, color: hexA(Q.potential, 0.9), width: 1.7, fill: true }],
      markers: [{ x: E, y: T, color: Q.kinetic, r: 4 }],
    })
    text(ctx, 'acima de V₀, T oscila: a partícula às vezes', px2, h - 28,
      { size: 8.5, color: C.muted })
    text(ctx, 'ricocheteia numa barreira que já venceu.', px2, h - 15,
      { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

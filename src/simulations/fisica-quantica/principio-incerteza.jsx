// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Princípio da incerteza (pacote de onda)
//
// Uma partícula localizada é um PACOTE: várias ondas somadas, cada uma
// com seu momento p = ħk. Para o pacote ficar estreito é preciso somar
// muitos momentos diferentes; com poucos, ele fica largo. Não dá para
// ter as duas coisas — é matemática de ondas, não defeito do aparelho:
//
//   Δx · Δp ≥ ħ/2
//
// O pacote gaussiano é o caso em que vale a igualdade:
//
//   |ψ(x)|² ∝ e^(−x²/2σₓ²)        |φ(k)|² ∝ e^(−(k−k₀)²/2σₖ²)
//   σₖ = 1 / (2σₓ)                 Δp = ħ·σₖ
//
// Solta, a partícula livre se espalha, porque os momentos diferentes
// andam em velocidades diferentes:
//
//   σₓ(t) = σₓ · √(1 + (t/tₛ)²)        tₛ = 2mσₓ² / ħ
//
// Quanto mais apertado o pacote, mais depressa ele se desfaz. Para um
// elétron em 0,1 nm a largura dobra em frações de femtossegundo. Para um
// grão de poeira de 1 µg ela leva dias para ir de 0,1 a 0,2 nm, e em mil
// anos o grão não se espalha nem dois centésimos de milímetro — por isso
// o mundo grande parece ter posição e velocidade ao mesmo tempo.
//
// O desenho acompanha o centro do pacote (não mostra o deslocamento).
// Interação: arraste a borda do pacote para apertá-lo ou alargá-lo.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, handle, sci,
} from '../engine'

const A = ACCENT['fisica-quantica']
const HBAR = 1.054571817e-34      // J·s
const HBARC = 197.3269804         // eV·nm
const X_MAX = 4                   // nm
const K_MAX = 12                  // nm⁻¹
const TAU_MAX = 3                 // quantos tₛ a animação percorre
const LOOP = 7                    // s por ciclo de espalhamento

const PARTICLES = [
  { nome: 'elétron',          m: 9.1093837e-31 },
  { nome: 'próton',           m: 1.67262192e-27 },
  { nome: 'grão de poeira (1 µg)', m: 1e-9 },
]

const read = p => ({
  sigma: clamp(p.sigma ?? 0.5, 0.05, 2),
  k0: clamp(p.k0 ?? 5, 0, 10),
  part: PARTICLES[clamp(Math.round(p.particula ?? 0), 0, PARTICLES.length - 1)],
  evolve: (p.evoluir ?? 0) > 0,
})

function boxes(view) {
  const { w, h } = view
  const compact = w < 700
  const stageW = compact ? w : w * 0.60
  const bx = 52, bw = stageW - bx - 24
  const hh = (h - 150) / 2
  return { compact, stageW, top: { x: bx, y: 44, w: bw, h: hh }, bot: { x: bx, y: 44 + hh + 62, w: bw, h: hh } }
}

/** Fator de alargamento √(1+τ²) no instante da animação. */
const spread = (s, evolve) => {
  if (!evolve) return { tau: 0, f: 1 }
  const u = (s.t % LOOP) / LOOP
  const tau = Math.min(1, u / 0.8) * TAU_MAX           // sobe e fica um instante no fim
  return { tau, f: Math.sqrt(1 + tau * tau) }
}

export default function PrincipioIncertezaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, drag: false, hover: false, moved: false }), [])
  const step = useCallback((s, dt) => { s.t += dt }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    const { compact, stageW, top, bot } = boxes(view)
    const { sigma, k0, part, evolve } = read(p)
    const { tau, f } = spread(s, evolve)
    const sx = sigma * f                 // largura em posição, agora
    const sk = 1 / (2 * sigma)           // largura em momento (não muda com o tempo)

    // ── Posição: |ψ|² e a onda por dentro ─────────────────────────
    const dens = [], wave = []
    for (let i = 0; i <= 400; i++) {
      const x = -X_MAX + (i / 400) * 2 * X_MAX
      const g = Math.exp(-(x * x) / (2 * sx * sx)) / f          // a altura cai quando alarga
      dens.push([x, g])
      wave.push([x, Math.sqrt(g) * Math.cos(k0 * x - 2.2 * s.t)])
    }
    caption(ctx, 'onde a partícula está', top.x, top.y - 12, A)
    const m1 = plot(ctx, top, {
      xDomain: [-X_MAX, X_MAX], yDomain: [-1.1, 1.1],
      xTicks: 4, yTicks: 2,
      fmtX: q => q.toFixed(0), fmtY: () => '',
      xLabel: 'posição x (nm)',
      rules: [{ y: 0 }, { x: -sx, color: hexA(Q.warn, 0.7) }, { x: sx, color: hexA(Q.warn, 0.7), label: 'Δx' }],
      series: [
        { points: wave, color: hexA(C.ink, 0.45), width: 1.2 },
        { points: dens, color: A, width: 2.2, fill: true },
      ],
    })
    // alça na borda do pacote (a 1 desvio-padrão do centro)
    const hx = m1.sx(sigma), hy = m1.sy(Math.exp(-0.5))
    if (!evolve) handle(ctx, hx, hy, 7, s.hover || s.drag, Q.warn)

    // ── Momento: |φ(k)|² ──────────────────────────────────────────
    const mom = []
    for (let i = 0; i <= 400; i++) {
      const k = -K_MAX + (i / 400) * 2 * K_MAX
      mom.push([k, Math.exp(-((k - k0) ** 2) / (2 * sk * sk))])
    }
    caption(ctx, 'que momento ela tem', bot.x, bot.y - 12, Q.velocity)
    plot(ctx, bot, {
      xDomain: [-K_MAX, K_MAX], yDomain: [0, 1.1],
      xTicks: 4, yTicks: 2,
      fmtX: q => q.toFixed(0), fmtY: () => '',
      xLabel: 'momento p / ħ (nm⁻¹)',
      rules: [{ x: k0 - sk, color: hexA(Q.warn, 0.7) }, { x: k0 + sk, color: hexA(Q.warn, 0.7), label: 'Δp' }],
      series: [{ points: mom, color: Q.velocity, width: 2.2, fill: true }],
    })

    caption(ctx, evolve ? `livre, o pacote se espalha: Δx já é ${f.toFixed(2)}× o inicial`
      : sigma < 0.2 ? 'posição bem definida → momento quase desconhecido'
      : sigma > 1.2 ? 'momento bem definido → posição espalhada'
      : 'apertar um dos dois alarga o outro', 16, h - 12, C.dim)
    if (!s.moved && !evolve) text(ctx, 'arraste a borda do pacote', hx + 16, hy + 20, { size: 9, color: Q.warn })

    // ── Leituras ──────────────────────────────────────────────────
    const dpEv = (HBARC * sk)                                  // Δp·c em eV
    const dv = (HBAR * sk * 1e9) / part.m                      // m/s
    const ts = (2 * part.m * (sigma * 1e-9) ** 2) / HBAR       // s
    readout(ctx, w - 14, 14, [
      { k: 'partícula', v: part.nome },
      { k: 'Δx  incerteza na posição', v: `${sx.toFixed(3)} nm`, c: A },
      { k: 'Δp  incerteza no momento', v: `${dpEv.toFixed(0)} eV/c`, c: Q.velocity },
      { k: 'Δx·Δp / ħ', v: (0.5 * f).toFixed(2), c: Q.warn },
      { k: 'mínimo permitido', v: '0,50' },
      { k: 'Δv  incerteza na velocidade', v: `${sci(dv, 2)} m/s` },
      { k: 'λ  médio de de Broglie', v: k0 > 0.05 ? `${((2 * Math.PI) / k0).toFixed(2)} nm` : '—' },
      { k: 'tempo para dobrar de largura', v: `${sci(ts * Math.sqrt(3), 2)} s` },
      { k: 'tempo decorrido', v: evolve ? `${tau.toFixed(2)} tₛ` : 'parado em t = 0' },
    ], { title: 'Δx · Δp ≥ ħ/2', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ A troca: hipérbole Δp = ħ/(2Δx) ══════════════════════════
    const px = stageW + 46
    const pw = w - px - 26
    const py = 44, ph = h * 0.50
    caption(ctx, 'a troca entre os dois', px, 26, Q.warn)
    const hyp = []
    for (let i = 0; i <= 120; i++) {
      const x = 0.05 + (i / 120) * 3.95
      hyp.push([x, 1 / (2 * x)])
    }
    const m2 = plot(ctx, { x: px, y: py, w: pw, h: ph }, {
      xDomain: [0, 4], yDomain: [0, 6],
      xTicks: 4, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'Δx (nm)', yLabel: 'Δp / ħ (nm⁻¹)',
      series: [{ points: hyp, color: Q.warn, width: 1.8, fill: true }],
      markers: [{ x: clamp(sx, 0, 4), y: clamp(sk, 0, 6), color: C.ink, r: 4 }],
    })
    text(ctx, 'proibido', m2.sx(0.5), m2.sy(0.25), { size: 9, weight: 700, color: Q.warn })
    text(ctx, 'permitido', m2.sx(2.2), m2.sy(3.4), { size: 9, color: C.dim })

    let ny = py + ph + 48
    for (const line of ['Nenhum estado fica abaixo da', 'curva. O pacote gaussiano parado', 'fica exatamente em cima dela.']) {
      text(ctx, line, px, ny, { size: 9, color: C.muted }); ny += 14
    }
  }, [])

  // Arrastar a borda do pacote na horizontal muda Δx (com o tempo parado).
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { top } = boxes(view)
    const { sigma, evolve } = read(p)
    if (evolve) { s.hover = false; s.drag = false; return null }
    const toPx = x => top.x + ((x + X_MAX) / (2 * X_MAX)) * top.w
    const hy = top.y + top.h - ((Math.exp(-0.5) + 1.1) / 2.2) * top.h
    const over = Math.hypot(pt.x - toPx(sigma), pt.y - hy) < 26

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = false
    if (s.drag) {
      const x = ((pt.x - top.x) / top.w) * 2 * X_MAX - X_MAX
      view.setParams?.({ sigma: clamp(Math.abs(x), 0.05, 2) })
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

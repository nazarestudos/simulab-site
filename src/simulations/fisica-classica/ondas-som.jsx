// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Acústica e Ondulatória
//
// Som é onda LONGITUDINAL: o ar não sobe e desce, ele comprime e rarefaz
// na direção da propagação. A faixa principal mostra isso de verdade —
// moléculas oscilando em torno da posição de repouso por
//
//   s(x,t) = s₀·sen(kx − ωt),   k = 2π/λ,   λ = v/f,   v = 343 m/s
//
// Duas honestidades:
//  · A animação está em câmera lenta (fator no HUD). A 440 Hz, uma onda
//    real cruzaria a tela ~400× por segundo.
//  · dB é logarítmico. 60 dB não é "o dobro" de 30 dB: é ~32× mais
//    pressão. O HUD converte para pascals de verdade:  p = p₀·10^(dB/20)
//  · A velocidade do som NÃO é uma constante — ela cresce com a raiz da
//    temperatura absoluta:  v = 331,3·√(1 + T/273,15)  (≈ +0,6 m/s por °C).
//    Por isso um mesmo dedilhado soa mais grave numa sala fria: v cai, e
//    como λ = v/f, o comprimento de onda também. É a física por trás de
//    instrumentos de sopro desafinarem antes de aquecer.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout, panel,
  plot, hexA, clamp, rng, sci,
} from '../engine'

const A     = ACCENT['fisica-classica']
const P_REF = 20e-6    // Pa — limiar da audição humana (0 dB SPL)

/** Velocidade do som no ar seco em função da temperatura (°C). */
const vSound = (tempC) => 331.3 * Math.sqrt(1 + tempC / 273.15)

const NOTES = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si']
/** Nota musical mais próxima, a partir de Lá4 = 440 Hz. */
function noteName(f) {
  const n = Math.round(12 * Math.log2(f / 440))
  const idx = ((n + 9) % 12 + 12) % 12
  const oct = 4 + Math.floor((n + 9) / 12)
  const cents = Math.round(1200 * Math.log2(f / (440 * 2 ** (n / 12))))
  return `${NOTES[idx]}${oct} ${cents >= 0 ? '+' : ''}${cents}¢`
}

export default function OndasSomCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(7)
    return {
      phase: 0,
      // Posições de repouso das moléculas: 3 fileiras, jitter fixo (não treme).
      mol: Array.from({ length: 460 }, () => ({ u: rand(), row: rand(), j: rand() })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const f = p.frequency ?? 440
    // Câmera lenta: a fase avança a 0,45 ciclo/s na tela, seja qual for f.
    s.phase = (s.phase + 0.45 * dt) % 1
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const f  = p.frequency ?? 440
    const dB = p.amplitude ?? 60
    const tempC = p.temperature ?? 20
    const V_SOM = vSound(tempC)       // m/s — depende da temperatura
    const lambda = V_SOM / f          // m
    const T = 1 / f                   // s
    const pPa = P_REF * 10 ** (dB / 20)
    const slow = f / 0.45             // fator de câmera lenta

    const compact = w < 700
    const stageW = compact ? w : w * 0.62
    const pad = 22

    // A amplitude de deslocamento das moléculas cresce ~logaritmicamente
    // com dB (é isso que o ouvido percebe como "volume").
    const amp = clamp((dB - 10) / 90, 0, 1)

    // ── Faixa longitudinal ────────────────────────────────────────
    // Janela de 2,5 λ — a barra de escala embaixo diz quanto isso vale
    // em metros. É o λ que muda, não a janela.
    const fx = pad, fw = stageW - pad * 2
    const fy = h * 0.16, fh = h * 0.30
    const windowM = 2.5 * lambda
    const k = 2 * Math.PI / lambda

    ctx.save()
    ctx.beginPath(); ctx.rect(fx, fy, fw, fh); ctx.clip()
    ctx.fillStyle = 'rgba(255,255,255,0.015)'
    ctx.fillRect(fx, fy, fw, fh)

    const dispPx = amp * (fw / 2.5) * 0.085   // deslocamento máximo, em px
    for (const m of s.mol) {
      const x0 = m.u * windowM                                   // repouso, em m
      const disp = dispPx * Math.sin(k * x0 - 2 * Math.PI * s.phase)
      const px = fx + (x0 / windowM) * fw + disp
      const py = fy + 10 + m.row * (fh - 20) + (m.j - 0.5) * 3

      // Onde há compressão, o gradiente de deslocamento é negativo →
      // moléculas mais juntas. Realço isso com brilho.
      const grad = Math.cos(k * x0 - 2 * Math.PI * s.phase)
      const dens = clamp(0.22 + amp * 0.75 * -grad, 0.06, 1)
      ctx.fillStyle = hexA(A, dens)
      ctx.beginPath()
      ctx.arc(px, py, 1.7, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.restore()

    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(fx + 0.5, fy + 0.5, fw, fh)
    caption(ctx, 'Ar · compressões e rarefações', fx, fy - 10, A)

    // Marcação de um λ, medido na própria faixa
    const lamPx = fw / 2.5
    const ly = fy + fh + 15
    ctx.strokeStyle = hexA(Q.kinetic, 0.8)
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(fx, ly); ctx.lineTo(fx + lamPx, ly)
    ctx.moveTo(fx, ly - 3); ctx.lineTo(fx, ly + 3)
    ctx.moveTo(fx + lamPx, ly - 3); ctx.lineTo(fx + lamPx, ly + 3)
    ctx.stroke()
    const lamTxt = lambda >= 1 ? `λ = ${lambda.toFixed(2)} m` : `λ = ${(lambda * 100).toFixed(1)} cm`
    text(ctx, lamTxt, fx + lamPx / 2, ly + 15, { size: 9.5, weight: 700, color: Q.kinetic, align: 'center' })

    // ── Osciloscópio: pressão num ponto fixo, ao longo do tempo ───
    const oy = h * 0.62
    const oh = h * 0.26
    const wave = []
    for (let i = 0; i <= 240; i++) {
      const tt = (i / 240) * 3     // 3 períodos
      wave.push([tt, amp * Math.sin(2 * Math.PI * (tt - s.phase))])
    }
    caption(ctx, 'Osciloscópio · pressão em um ponto', fx, oy - 10, A)
    plot(ctx, { x: fx + 30, y: oy, w: fw - 34, h: oh }, {
      xDomain: [0, 3], yDomain: [-1, 1],
      xTicks: 3, yTicks: 2,
      fmtX: v => `${(v * T * 1000).toFixed(T * 1000 > 10 ? 0 : 2)}ms`,
      fmtY: v => v.toFixed(0),
      xLabel: `tempo  ·  T = ${T * 1000 >= 1 ? (T * 1000).toFixed(2) + ' ms' : (T * 1e6).toFixed(0) + ' µs'}`,
      rules: [{ y: 0, color: C.faint }],
      series: [{ points: wave, color: A, width: 1.8 }],
      markers: [{ x: 3 * ((s.phase) % 1) * 0 + 0.001, y: amp * Math.sin(2 * Math.PI * (-s.phase)), color: Q.kinetic, r: 3 }],
    })

    // ── Leituras ──────────────────────────────────────────────────
    const audible = f >= 20 && f <= 20000
    readout(ctx, w - 14, 14, [
      { k: 'f  frequência', v: `${f >= 1000 ? (f / 1000).toFixed(2) + ' kHz' : f + ' Hz'}`, c: A },
      { k: 'λ  compr. onda', v: lambda >= 1 ? `${lambda.toFixed(2)} m` : `${(lambda * 100).toFixed(1)} cm`, c: Q.kinetic },
      { k: 'T  período',    v: T * 1000 >= 1 ? `${(T * 1000).toFixed(2)} ms` : `${(T * 1e6).toFixed(0)} µs` },
      { k: `v  ar a ${tempC}°C`, v: `${V_SOM.toFixed(1)} m/s`, c: Q.field },
      { k: 'NPS',           v: `${dB} dB` },
      { k: 'p  pressão',    v: `${sci(pPa, 2)} Pa`, c: Q.thermal },
      { k: 'nota',          v: audible ? noteName(f) : '—', c: C.dim },
      { k: 'câmera lenta',  v: `${sci(slow, 1)}×`, c: C.muted },
    ], { title: 'v = λ · f', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ── Escala logarítmica de λ ───────────────────────────────────
    // A comparação que o artigo faz: graves "dobram" esquinas porque seu λ
    // é da ordem de metros; agudos são bloqueados por qualquer obstáculo.
    const px = stageW + 30
    const pw = w - px - 26
    const sy = h - 96
    caption(ctx, 'Comprimento de onda na escala real', px, sy - 46, A)

    const lo = Math.log10(0.01), hi = Math.log10(20)
    const toX = m => px + ((Math.log10(m) - lo) / (hi - lo)) * pw

    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(px, sy); ctx.lineTo(px + pw, sy); ctx.stroke()

    const refs = [
      { m: 0.017, l: '20 kHz' },
      { m: 0.1,   l: '10 cm' },
      { m: 0.78,  l: 'voz' },
      { m: 6.86,  l: '50 Hz' },
      { m: 17.15, l: '20 Hz' },
    ]
    for (const r of refs) {
      const rx = toX(r.m)
      ctx.strokeStyle = C.faint
      ctx.beginPath(); ctx.moveTo(rx, sy - 4); ctx.lineTo(rx, sy + 4); ctx.stroke()
      text(ctx, r.l, rx, sy + 16, { size: 8, color: C.muted, align: 'center' })
    }

    const mx = clamp(toX(lambda), px, px + pw)
    ctx.fillStyle = Q.kinetic
    ctx.beginPath()
    ctx.moveTo(mx, sy - 12); ctx.lineTo(mx - 4, sy - 20); ctx.lineTo(mx + 4, sy - 20)
    ctx.closePath(); ctx.fill()
    text(ctx, lamTxt, mx, sy - 25, { size: 9, weight: 700, color: Q.kinetic, align: 'center' })

    if (!audible) {
      text(ctx, f < 20 ? 'infrassom — fora da audição' : 'ultrassom — fora da audição',
        px, h - 18, { size: 9, weight: 700, color: Q.warn })
    } else {
      text(ctx, 'dentro da faixa audível (20 Hz – 20 kHz)', px, h - 18,
        { size: 9, color: C.muted })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

// ═══════════════════════════════════════════════════════════════════
// MEDICINA — Eletrocardiograma (Derivação II)
//
// O traçado é sintetizado como soma de gaussianas — a abordagem do
// modelo de McSharry (2003), padrão para gerar ECG realista. Cada onda
// tem posição, largura e amplitude fisiológicas:
//
//   P    despolarização atrial          (~0,08 s, 0,15 mV)
//   QRS  despolarização ventricular     (~0,08 s, 1,0 mV) — Q e S negativos
//   T    repolarização ventricular      (~0,16 s, 0,3 mV)
//
// (A repolarização atrial existe, mas fica escondida sob o QRS.)
//
// O papel é o de verdade: 25 mm/s e 10 mm/mV. Quadradinho pequeno =
// 0,04 s × 0,1 mV; quadrado grande = 0,20 s × 0,5 mV. É assim que um
// cardiologista mede um intervalo — contando quadradinhos.
//
// O QT encurta quando o coração acelera, então ele é corrigido pela
// fórmula de BAZETT:  QTc = QT / √RR. Um QTc > 0,45 s é bandeira
// vermelha (risco de arritmia) — e o painel avisa.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, glow,
} from '../engine'

const A = ACCENT['medicina']

// As ondas são posicionadas em TEMPO (segundos, relativo ao pico R), não
// em fração do ciclo. É assim no coração de verdade: quando a frequência
// muda, quem estica ou encolhe é a pausa entre os batimentos (o trecho
// T–P); o complexo P–QRS–T quase não muda de largura.
const PHI_R     = 0.30     // fase do ciclo em que cai o pico R
const QRS_ONSET = -0.035   // s — início do QRS, antes do pico R
const QRS_DUR   = 0.08     // s — não depende da frequência

/** Intervalos (em segundos) de um coração normal na frequência dada. */
function intervals(bpm) {
  const rr = 60 / bpm
  // PR: ~160 ms em repouso, encurta um pouco no esforço (120 ms a 180 bpm)
  const pr = 0.16 - 0.04 * clamp((bpm - 60) / 120, 0, 1)
  // QT acompanha √RR — é a hipótese da fórmula de Bazett. QTc = 400 ms.
  const qt = 0.40 * Math.sqrt(rr)
  return { rr, pr, qrs: QRS_DUR, qt, qtc: qt / Math.sqrt(rr) }
}

/** Ondas: centro (s, relativo ao pico R), amplitude (mV), largura σ (s). */
function waves(bpm) {
  const { pr, qt } = intervals(bpm)
  return [
    { c: QRS_ONSET - pr + 0.045, a:  0.15, w: 0.022 },   // P  (dura ~0,09 s)
    { c: -0.022,                 a: -0.10, w: 0.007 },   // Q
    { c:  0.000,                 a:  1.00, w: 0.009 },   // R
    { c:  0.024,                 a: -0.22, w: 0.008 },   // S
    { c: QRS_ONSET + qt - 0.08,  a:  0.30, w: 0.040 },   // T  (termina no fim do QT)
  ]
}

/** Amplitude do ECG (mV) na fase φ ∈ [0,1) do ciclo cardíaco. */
function ecgAt(phi, gain, bpm) {
  const rr = 60 / bpm
  const tau = (phi - PHI_R) * rr          // tempo desde o pico R
  let v = 0
  for (const wv of waves(bpm)) {
    let d = tau - wv.c
    if (d > rr / 2) d -= rr
    if (d < -rr / 2) d += rr
    v += wv.a * Math.exp(-(d * d) / (2 * wv.w * wv.w))
  }
  return v * gain
}

export default function EcgCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    phase: 0,
    t: 0,
    beats: 0,
    trace: [],     // [t (s), mV]
    beat: 0,       // pulso visual do coração
  }), [])

  const step = useCallback((s, dt, p) => {
    const bpm = p.bpm ?? 72
    const rr = 60 / bpm            // intervalo R-R, em segundos

    s.t += dt
    const prev = s.phase
    s.phase = (s.phase + dt / rr) % 1
    if (s.phase < prev) s.beats++

    // Sístole: contração logo após o QRS
    const dR = Math.abs(s.phase - PHI_R)
    s.beat = Math.max(0, 1 - dR * 12)

    s.trace.push([s.t, ecgAt(s.phase, p.amplitude ?? 1, bpm)])
    // 6 segundos de tira, a 240 amostras/s
    while (s.trace.length && s.t - s.trace[0][0] > 6) s.trace.shift()
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const bpm  = p.bpm ?? 72
    const gain = p.amplitude ?? 1
    const rr   = 60 / bpm

    // Intervalos: os mesmos que posicionam as ondas no traçado
    const { pr, qrs, qt, qtc } = intervals(bpm)

    const compact = w < 720
    const stripW = compact ? w - 20 : w * 0.74
    const sx = 12
    const sy = h * 0.10
    const sh = h * 0.72

    // ══ PAPEL DE ECG ═════════════════════════════════════════════
    // 25 mm/s · 10 mm/mV. Escolho px por mm para caber 6 s na tira.
    const mmPerSec = 25
    const secShown = 6
    const pxPerMm = stripW / (secShown * mmPerSec)
    const pxPerSec = pxPerMm * mmPerSec
    const pxPerMv = pxPerMm * 10
    const baseline = sy + sh * 0.55

    ctx.save()
    ctx.beginPath(); ctx.rect(sx, sy, stripW, sh); ctx.clip()

    // quadradinhos de 1 mm
    ctx.strokeStyle = hexA(A, 0.10)
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let x = 0; x <= stripW; x += pxPerMm) { ctx.moveTo(sx + x, sy); ctx.lineTo(sx + x, sy + sh) }
    for (let y = baseline; y >= sy; y -= pxPerMm) { ctx.moveTo(sx, y); ctx.lineTo(sx + stripW, y) }
    for (let y = baseline; y <= sy + sh; y += pxPerMm) { ctx.moveTo(sx, y); ctx.lineTo(sx + stripW, y) }
    ctx.stroke()

    // quadrados grandes de 5 mm
    ctx.strokeStyle = hexA(A, 0.26)
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let x = 0; x <= stripW; x += pxPerMm * 5) { ctx.moveTo(sx + x, sy); ctx.lineTo(sx + x, sy + sh) }
    for (let y = baseline; y >= sy; y -= pxPerMm * 5) { ctx.moveTo(sx, y); ctx.lineTo(sx + stripW, y) }
    for (let y = baseline; y <= sy + sh; y += pxPerMm * 5) { ctx.moveTo(sx, y); ctx.lineTo(sx + stripW, y) }
    ctx.stroke()

    // ══ TRAÇADO ══════════════════════════════════════════════════
    const tEnd = s.t
    const tStart = tEnd - secShown
    ctx.beginPath()
    let started = false
    for (const [tt, mv] of s.trace) {
      const X = sx + (tt - tStart) * pxPerSec
      const Y = baseline - mv * pxPerMv
      if (!started) { ctx.moveTo(X, Y); started = true } else ctx.lineTo(X, Y)
    }
    ctx.strokeStyle = '#7fd1a8'
    ctx.lineWidth = 1.7
    ctx.lineJoin = 'round'
    ctx.shadowBlur = 6
    ctx.shadowColor = hexA('#7fd1a8', 0.5)
    ctx.stroke()
    ctx.shadowBlur = 0

    // cursor
    const cxr = sx + (tEnd - tStart) * pxPerSec
    glow(ctx, cxr, baseline - ecgAt(s.phase, gain, bpm) * pxPerMv, 3, '#7fd1a8', 1)

    ctx.restore()

    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(sx + 0.5, sy + 0.5, stripW, sh)

    // Rótulos das ondas, no último batimento completo
    const lastR = tEnd - (s.phase - PHI_R) * rr
    const wv = waves(bpm)
    const labelAt = (tau, name, col) => {          // tau: segundos desde o pico R
      const tt = lastR + tau
      if (tt < tStart + 0.2 || tt > tEnd) return
      const X = sx + (tt - tStart) * pxPerSec
      const Y = baseline - ecgAt(PHI_R + tau / rr, gain, bpm) * pxPerMv
      text(ctx, name, X, Y - 10, { size: 10, weight: 700, color: col, align: 'center' })
    }
    labelAt(wv[0].c, 'P', Q.field)
    labelAt(0, 'R', A)
    labelAt(wv[4].c, 'T', Q.warn)

    // Escala do papel
    text(ctx, '25 mm/s · 10 mm/mV · derivação II', sx, sy + sh + 16,
      { size: 8.5, color: C.muted })

    // ══ CORAÇÃO ══════════════════════════════════════════════════
    if (!compact) {
      const hx = stripW + 60
      const hy = h * 0.24
      const pulse = 1 + s.beat * 0.16
      ctx.save()
      ctx.translate(hx, hy)
      ctx.scale(pulse, pulse)
      // silhueta cardíaca (duas curvas + ponta)
      ctx.beginPath()
      ctx.moveTo(0, 16)
      ctx.bezierCurveTo(-20, -2, -17, -18, -8, -18)
      ctx.bezierCurveTo(-3, -18, 0, -13, 0, -10)
      ctx.bezierCurveTo(0, -13, 3, -18, 8, -18)
      ctx.bezierCurveTo(17, -18, 20, -2, 0, 16)
      ctx.closePath()
      ctx.fillStyle = hexA(A, 0.30 + s.beat * 0.5)
      ctx.fill()
      ctx.strokeStyle = hexA(A, 0.9)
      ctx.lineWidth = 1.2
      ctx.stroke()
      ctx.restore()

      text(ctx, `${bpm}`, hx, hy + 44, { size: 24, weight: 700, color: A, align: 'center' })
      text(ctx, 'bpm', hx, hy + 58, { size: 9, color: C.muted, align: 'center' })
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const rhythm = bpm < 60 ? { t: 'bradicardia (< 60 bpm)', c: Q.field }
      : bpm > 100 ? { t: 'taquicardia (> 100 bpm)', c: Q.danger }
      : { t: 'ritmo sinusal normal', c: Q.potential }
    const qtcFlag = qtc > 0.45

    readout(ctx, w - 14, h - 14 - 152, [
      { k: 'FC  frequência', v: `${bpm} bpm`, c: A },
      { k: 'RR  intervalo',  v: `${rr.toFixed(2)} s` },
      { k: 'PR  intervalo',  v: `${(pr * 1000).toFixed(0)} ms`, c: pr > 0.20 ? Q.warn : C.ink },
      { k: 'QRS duração',    v: `${(qrs * 1000).toFixed(0)} ms`, c: qrs > 0.12 ? Q.warn : C.ink },
      { k: 'QT',             v: `${(qt * 1000).toFixed(0)} ms` },
      { k: 'QTc  Bazett',    v: `${(qtc * 1000).toFixed(0)} ms`, c: qtcFlag ? Q.danger : Q.potential },
      { k: 'batimentos',     v: s.beats },
    ], { title: rhythm.t, anchor: 'right', accent: rhythm.c, minWidth: 200 })

    caption(ctx, rhythm.t, sx, sy - 10, rhythm.c)

    if (qtcFlag) {
      text(ctx, 'QTc prolongado — risco de arritmia', sx, h - 12,
        { size: 9, weight: 700, color: Q.danger })
    } else {
      text(ctx, 'P: átrios · QRS: ventrículos · T: repolarização', sx, h - 12,
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

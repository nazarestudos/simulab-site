// ═══════════════════════════════════════════════════════════════════
// MEDICINA — Farmacocinética (modelo de 1 compartimento, via oral)
//
// A concentração plasmática segue a função de BATEMAN, solução exata do
// sistema de dois compartimentos em cascata (intestino → sangue):
//
//     C(t) = (F·D·ka) / (Vd·(ka − ke)) · (e^(−ke·t) − e^(−ka·t))
//
// Dela saem, analiticamente:
//     t_max = ln(ka/ke) / (ka − ke)      ← quando o pico acontece
//     t½    = ln 2 / ke                  ← meia-vida de eliminação
//     AUC   = F·D / (Vd·ke)              ← exposição total ao fármaco
//
// A JANELA TERAPÊUTICA é o que decide se um remédio funciona: abaixo da
// concentração mínima efetiva ele não faz nada; acima da concentração
// tóxica, envenena. Todo o trabalho de posologia é manter a curva
// dentro dessa faixa — por isso a simulação dá doses repetidas a cada
// 8 h e mostra o ACÚMULO até o estado estacionário.
//
// Curiosidade contraintuitiva no modelo: se ka < ke (absorção mais lenta
// que a eliminação), quem manda na queda final é a ABSORÇÃO, não os rins.
// É a "cinética flip-flop", e é o princípio das cápsulas de liberação
// prolongada.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, mix,
} from '../engine'

const A = ACCENT['medicina']

const DOSE = 500     // mg
const F_BIO = 0.8    // biodisponibilidade
const VD = 40        // L — volume de distribuição
const TAU = 8        // h — intervalo entre doses
const MEC = 4        // mg/L — concentração mínima efetiva
const MTC = 14       // mg/L — concentração tóxica mínima
const HOURS = 32     // janela exibida

/** Bateman: contribuição de UMA dose administrada há `t` horas. */
function bateman(t, ka, ke) {
  if (t <= 0) return 0
  if (Math.abs(ka - ke) < 1e-6) {
    // Caso degenerado ka = ke: o limite é (F·D/Vd)·ke·t·e^(−ke·t)
    return (F_BIO * DOSE / VD) * ke * t * Math.exp(-ke * t)
  }
  return (F_BIO * DOSE * ka) / (VD * (ka - ke)) *
         (Math.exp(-ke * t) - Math.exp(-ka * t))
}

/** Soma das doses já administradas até o instante t. */
function concAt(t, ka, ke, nDoses) {
  let c = 0
  for (let i = 0; i < nDoses; i++) {
    const td = i * TAU
    if (t >= td) c += bateman(t - td, ka, ke)
  }
  return c
}

export default function FarmacocineticaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    t: 0,     // horas
  }), [])

  const step = useCallback((s, dt) => {
    s.t += dt * 1.6         // 1,6 h simuladas por segundo
    if (s.t > HOURS) s.t = 0
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    // Sliders 1–100 → constantes de velocidade plausíveis (h⁻¹)
    const ka = 0.08 + ((p.kAbs  ?? 50) / 100) * 1.5     // 0,08 – 1,58
    const ke = 0.03 + ((p.kElim ?? 50) / 100) * 0.45    // 0,03 – 0,48

    const tHalf = Math.log(2) / ke
    const tMax = Math.abs(ka - ke) > 1e-6
      ? Math.log(ka / ke) / (ka - ke)
      : 1 / ke
    const cMax = bateman(tMax, ka, ke)
    const auc = (F_BIO * DOSE) / (VD * ke)
    const clearance = ke * VD                            // L/h
    const flipFlop = ka < ke

    const nDoses = Math.floor(s.t / TAU) + 1
    const cNow = concAt(s.t, ka, ke, nDoses)

    const compact = w < 720
    const gx = 50
    const gw = (compact ? w : w * 0.72) - gx - 26
    const gy = h * 0.16
    const gh = h * 0.64

    // ══ CURVA ════════════════════════════════════════════════════
    const totalDoses = Math.ceil(HOURS / TAU)
    const curve = []
    const single = []
    let peak = 0
    for (let i = 0; i <= 400; i++) {
      const t = (i / 400) * HOURS
      const cm = concAt(t, ka, ke, totalDoses)
      curve.push([t, cm])
      single.push([t, bateman(t, ka, ke)])
      peak = Math.max(peak, cm)
    }
    const traced = curve.filter(c => c[0] <= s.t)
    const yMax = Math.max(peak * 1.15, MTC * 1.2)

    caption(ctx, `Concentração plasmática · ${DOSE} mg a cada ${TAU} h`, gx, gy - 12, A)

    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, HOURS], yDomain: [0, yMax],
      xTicks: 4, yTicks: 4,
      fmtX: q => `${q.toFixed(0)}h`, fmtY: q => q.toFixed(0),
      xLabel: 'tempo (h)', yLabel: 'C (mg/L)',
      rules: [
        { y: MTC, color: hexA(Q.danger, 0.7),   label: 'concentração tóxica' },
        { y: MEC, color: hexA(Q.potential, 0.7), label: 'concentração mínima efetiva' },
      ],
      series: [
        { points: curve,  color: hexA(C.ink, 0.16), width: 1.3 },
        { points: single, color: hexA(Q.field, 0.5), width: 1.2, dash: [3, 3] },
        { points: traced, color: A, width: 2.2, fill: true },
      ],
      markers: [{ x: s.t, y: cNow, color: Q.kinetic, r: 4.5 }],
    })

    // Marcas das doses
    for (let i = 0; i < totalDoses; i++) {
      const td = i * TAU
      const X = gx + (td / HOURS) * gw
      const given = td <= s.t
      ctx.fillStyle = given ? A : hexA(C.ink, 0.18)
      ctx.beginPath()
      ctx.moveTo(X, gy + gh + 4)
      ctx.lineTo(X - 3.5, gy + gh + 11)
      ctx.lineTo(X + 3.5, gy + gh + 11)
      ctx.closePath()
      ctx.fill()
    }

    legend(ctx, gx, gy + gh + 34, [
      { label: 'doses repetidas', color: A },
      { label: 'dose única', color: hexA(Q.field, 0.8) },
    ])

    // ══ Estado clínico ═══════════════════════════════════════════
    const status = cNow > MTC ? { t: 'ZONA TÓXICA — concentração perigosa', c: Q.danger }
      : cNow >= MEC ? { t: 'janela terapêutica — o remédio está fazendo efeito', c: Q.potential }
      : { t: 'abaixo da dose efetiva — sem efeito clínico', c: Q.warn }
    caption(ctx, status.t, gx, 24, status.c)

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'ka  absorção',  v: `${ka.toFixed(2)} h⁻¹`, c: Q.field },
      { k: 'ke  eliminação', v: `${ke.toFixed(2)} h⁻¹`, c: Q.negative },
      { k: 't½  meia-vida',  v: `${tHalf.toFixed(1)} h`, c: A },
      { k: 't_max pico',     v: `${tMax.toFixed(1)} h` },
      { k: 'C_max',          v: `${cMax.toFixed(1)} mg/L` },
      { k: 'AUC',            v: `${auc.toFixed(0)} mg·h/L` },
      { k: 'clearance',      v: `${clearance.toFixed(1)} L/h` },
      { k: 'C  agora',       v: `${cNow.toFixed(2)} mg/L`, c: status.c },
      { k: 't  decorrido',   v: `${s.t.toFixed(1)} h` },
    ], { title: 'C(t) — função de Bateman', anchor: 'right', accent: A, minWidth: 208 })

    // Alerta de cinética flip-flop
    if (flipFlop) {
      text(ctx, 'ka < ke — cinética flip-flop: a ABSORÇÃO limita a queda',
        gx, h - 14, { size: 9, weight: 700, color: Q.warn })
      text(ctx, '(é assim que funciona uma cápsula de liberação prolongada)',
        gx + 320, h - 14, { size: 8.5, color: C.muted })
    } else {
      text(ctx, `estado estacionário em ~${(4.3 * tHalf).toFixed(0)} h (≈ 4–5 meias-vidas)`,
        gx, h - 14, { size: 9, color: C.muted })
    }

    if (compact) return

    // ══ Compartimentos ═══════════════════════════════════════════
    const bx = w - 200
    const by = h - 118

    // Fração da dose ainda no trato GI (não absorvida)
    const tSince = s.t - (nDoses - 1) * TAU
    const gut = Math.exp(-ka * Math.max(tSince, 0))

    const tank = (x, y, label, frac, col) => {
      const tw = 54, th = 44
      ctx.strokeStyle = C.faint
      ctx.lineWidth = 1
      ctx.strokeRect(x + 0.5, y + 0.5, tw, th)
      ctx.fillStyle = hexA(col, 0.30)
      ctx.fillRect(x, y + th * (1 - frac), tw, th * frac)
      text(ctx, label, x + tw / 2, y + th + 12, { size: 8.5, color: C.muted, align: 'center' })
    }
    tank(bx, by, 'intestino', clamp(gut, 0, 1), Q.field)
    tank(bx + 78, by, 'sangue', clamp(cNow / yMax, 0, 1), A)

    // seta ka
    ctx.strokeStyle = hexA(Q.field, 0.7)
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(bx + 56, by + 22); ctx.lineTo(bx + 74, by + 22)
    ctx.stroke()
    text(ctx, 'ka', bx + 65, by + 16, { size: 8, weight: 700, color: Q.field, align: 'center' })

    // seta ke (para fora)
    ctx.strokeStyle = hexA(Q.negative, 0.7)
    ctx.beginPath()
    ctx.moveTo(bx + 134, by + 22); ctx.lineTo(bx + 154, by + 22)
    ctx.stroke()
    text(ctx, 'ke', bx + 144, by + 16, { size: 8, weight: 700, color: Q.negative, align: 'center' })
    text(ctx, 'rins', bx + 158, by + 26, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

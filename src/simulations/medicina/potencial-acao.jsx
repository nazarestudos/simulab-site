// ═══════════════════════════════════════════════════════════════════
// MEDICINA — Potencial de Ação: modelo de HODGKIN–HUXLEY
//
// Não é uma curva desenhada à mão que "parece" um potencial de ação.
// São as equações de 1952 que deram o Nobel a Hodgkin e Huxley,
// integradas de verdade, com as constantes originais do axônio de lula:
//
//   C_m·dV/dt = I − gNa·m³h·(V−E_Na) − gK·n⁴·(V−E_K) − gL·(V−E_L)
//
//   dm/dt = αm(V)·(1−m) − βm(V)·m      ← ativação do sódio   (RÁPIDA)
//   dh/dt = αh(V)·(1−h) − βh(V)·h      ← inativação do sódio (lenta)
//   dn/dt = αn(V)·(1−n) − βn(V)·n      ← ativação do potássio (lenta)
//
// Toda a fisiologia EMERGE daí, ninguém programou nenhuma delas:
//  · LIMIAR e lei do TUDO-OU-NADA — estímulo fraco não dispara; passou
//    do limiar, o pico é sempre o mesmo tamanho.
//  · PERÍODO REFRATÁRIO — enquanto h (inativação do Na⁺) não se
//    recupera, nenhum estímulo dispara nada.
//  · HIPERPOLARIZAÇÃO — o K⁺ demora a fechar e o potencial "passa do
//    ponto", ficando abaixo do repouso.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, glow,
} from '../engine'

const A = ACCENT['medicina']

// Constantes originais de Hodgkin–Huxley (axônio gigante de lula, 6,3 °C)
const CM   = 1.0      // µF/cm²
const G_NA = 120      // mS/cm²
const G_K  = 36
const G_L  = 0.3
const E_NA = 50       // mV
const E_K  = -77
const E_L  = -54.4
const V_REST = -65

// Estímulo: pulso de 1 ms a cada 25 ms
const PULSE_MS  = 1.0
const PERIOD_MS = 25

// αm e αn têm a forma  k·x / (1 − e^(−x/10)), que é 0/0 em x = 0.
// Por L'Hôpital o limite ali vale k·10 — sem esse tratamento, o modelo
// estoura exatamente em V = −40 mV e V = −55 mV.
const rate = (k, x) =>
  Math.abs(x) < 1e-6 ? k * 10 : (k * x) / (1 - Math.exp(-x / 10))

const alphaM = V => rate(0.1,  V + 40)
const betaM  = V => 4 * Math.exp(-(V + 65) / 18)
const alphaH = V => 0.07 * Math.exp(-(V + 65) / 20)
const betaH  = V => 1 / (1 + Math.exp(-(V + 35) / 10))
const alphaN = V => rate(0.01, V + 55)
const betaN  = V => 0.125 * Math.exp(-(V + 65) / 80)

export default function PotencialAcaoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    // Valores de repouso das comportas: m∞, h∞, n∞ em V_REST
    const V = V_REST
    const m = alphaM(V) / (alphaM(V) + betaM(V))
    const hh = alphaH(V) / (alphaH(V) + betaH(V))
    const n = alphaN(V) / (alphaN(V) + betaN(V))
    return {
      V, m, h: hh, n,
      tms: 0,           // tempo do neurônio, em ms
      trace: [],        // [t, V]
      gates: [],        // [t, m, h, n]
      cond: [],         // [t, gNa, gK]
      spikes: 0,
      lastV: V,
      peak: V,
      fired: false,
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const speed = p.speed ?? 1
    const stim  = p.stimulus ?? 50
    // Corrente injetada durante o pulso, em µA/cm²
    const I_amp = (stim / 100) * 20

    // Tempo de neurônio por segundo real (câmera lenta ~125×)
    const msTotal = dt * 8 * speed
    const H = 0.008                       // passo de integração, ms
    const steps = Math.min(Math.ceil(msTotal / H), 400)
    const hstep = msTotal / steps

    for (let i = 0; i < steps; i++) {
      const V = s.V
      // Corrente de estímulo: pulso periódico
      const phase = s.tms % PERIOD_MS
      const I = phase < PULSE_MS ? I_amp : 0

      const gNa = G_NA * s.m ** 3 * s.h
      const gK  = G_K  * s.n ** 4

      const dV = (I
        - gNa * (V - E_NA)
        - gK  * (V - E_K)
        - G_L * (V - E_L)) / CM

      const dm = alphaM(V) * (1 - s.m) - betaM(V) * s.m
      const dh = alphaH(V) * (1 - s.h) - betaH(V) * s.h
      const dn = alphaN(V) * (1 - s.n) - betaN(V) * s.n

      s.V += dV * hstep
      s.m = clamp(s.m + dm * hstep, 0, 1)
      s.h = clamp(s.h + dh * hstep, 0, 1)
      s.n = clamp(s.n + dn * hstep, 0, 1)
      s.tms += hstep

      // Conta disparos: cruzou 0 mV subindo
      if (s.lastV < 0 && s.V >= 0) { s.spikes++; s.fired = true }
      s.lastV = s.V
      s.peak = Math.max(s.peak, s.V)
    }

    const gNa = G_NA * s.m ** 3 * s.h
    const gK  = G_K  * s.n ** 4
    s.trace.push([s.tms, s.V])
    s.gates.push([s.tms, s.m, s.h, s.n])
    s.cond.push([s.tms, gNa, gK])
    if (s.trace.length > 1400) { s.trace.shift(); s.gates.shift(); s.cond.shift() }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const stim = p.stimulus ?? 50
    const I_amp = (stim / 100) * 20
    const gNa = G_NA * s.m ** 3 * s.h
    const gK  = G_K  * s.n ** 4

    const compact = w < 720
    const t1 = Math.max(60, s.tms)
    const t0 = t1 - 60

    const leftW = compact ? w : w * 0.68
    const gx = 46
    const gw = leftW - gx - 26

    // ══ V(t) — o potencial de ação ═══════════════════════════════
    caption(ctx, 'Potencial de membrana', gx, 24, A)
    plot(ctx, { x: gx, y: 34, w: gw, h: h * 0.34 }, {
      xDomain: [t0, t1], yDomain: [-90, 60],
      xTicks: 4, yTicks: 5,
      // Só o gráfico de baixo mostra o eixo do tempo — aqui os números
      // cairiam em cima da legenda do painel seguinte.
      fmtX: () => '', fmtY: q => q.toFixed(0),
      yLabel: 'V (mV)',
      rules: [
        { y: V_REST, color: hexA(C.ink, 0.25), label: 'repouso' },
        { y: -55,    color: hexA(Q.warn, 0.6), label: 'limiar' },
        { y: 0,      color: C.grid },
      ],
      series: [{ points: s.trace, color: A, width: 2 }],
      markers: [{ x: s.tms, y: s.V, color: Q.kinetic, r: 4 }],
    })

    // ══ Comportas m, h, n ════════════════════════════════════════
    // Legendas ficam NA LINHA do título, à direita — empilhá-las embaixo
    // de cada gráfico não cabe em três painéis.
    const y2 = h * 0.34 + 62
    caption(ctx, 'Comportas dos canais', gx, y2 - 10, C.muted)
    legend(ctx, gx + 150, y2 - 8, [
      { label: 'm  ativa Na⁺', color: Q.negative },
      { label: 'h  inativa Na⁺', color: Q.warn },
      { label: 'n  ativa K⁺', color: Q.field },
    ])
    plot(ctx, { x: gx, y: y2, w: gw, h: h * 0.17 }, {
      xDomain: [t0, t1], yDomain: [0, 1],
      xTicks: 4, yTicks: 2,
      fmtX: () => '', fmtY: q => q.toFixed(1),
      series: [
        { points: s.gates.map(g => [g[0], g[1]]), color: Q.negative, width: 1.5 },
        { points: s.gates.map(g => [g[0], g[2]]), color: Q.warn,     width: 1.5, dash: [3, 2] },
        { points: s.gates.map(g => [g[0], g[3]]), color: Q.field,    width: 1.5 },
      ],
    })

    // ══ Condutâncias ═════════════════════════════════════════════
    const y3 = y2 + h * 0.17 + 40
    const h3 = h - y3 - 46
    caption(ctx, 'Condutâncias', gx, y3 - 10, C.muted)
    legend(ctx, gx + 100, y3 - 8, [
      { label: 'g_Na  dispara e já inativa', color: Q.negative },
      { label: 'g_K  lento, repolariza', color: Q.field },
    ])
    plot(ctx, { x: gx, y: y3, w: gw, h: h3 }, {
      xDomain: [t0, t1], yDomain: [0, 40],
      xTicks: 4, yTicks: 2,
      fmtX: q => `${q.toFixed(0)}ms`, fmtY: q => q.toFixed(0),
      xLabel: 'tempo (ms)', yLabel: 'mS/cm²',
      series: [
        { points: s.cond.map(c => [c[0], c[1]]), color: Q.negative, width: 1.6, fill: true },
        { points: s.cond.map(c => [c[0], c[2]]), color: Q.field,    width: 1.6 },
      ],
    })

    // ══ Leituras ═════════════════════════════════════════════════
    // Limiar: com pulso de 1 ms, ~6 µA/cm² é o mínimo para disparar.
    const supra = I_amp >= 6.2
    const phase = s.V > 0 ? { t: 'despolarização — Na⁺ entra', c: Q.negative }
      : s.V < V_REST - 2 ? { t: 'hiperpolarização — K⁺ ainda aberto', c: Q.field }
      : s.h < 0.35 ? { t: 'período refratário — h ainda fechado', c: Q.warn }
      : { t: 'repouso', c: C.dim }

    const box = readout(ctx, w - 14, 14, [
      { k: 'V  membrana',  v: `${s.V.toFixed(1)} mV`, c: A },
      { k: 'I  estímulo',  v: `${I_amp.toFixed(1)} µA/cm²`, c: supra ? Q.potential : Q.danger },
      { k: 'limiar',       v: supra ? 'atingido' : 'não atingido', c: supra ? Q.potential : Q.danger },
      { k: 'm  Na⁺ ativ.',  v: s.m.toFixed(3), c: Q.negative },
      { k: 'h  Na⁺ inativ.', v: s.h.toFixed(3), c: Q.warn },
      { k: 'n  K⁺ ativ.',   v: s.n.toFixed(3), c: Q.field },
      { k: 'g_Na',         v: `${gNa.toFixed(1)}`, c: Q.negative },
      { k: 'g_K',          v: `${gK.toFixed(1)}`, c: Q.field },
      { k: 'disparos',     v: s.spikes },
    ], { title: 'Hodgkin–Huxley 1952', anchor: 'right', accent: A, minWidth: 206 })

    // Fase do ciclo e aviso de limiar ficam sob o painel, na coluna da
    // direita — o rodapé dos gráficos já está ocupado pelos eixos.
    const rx = w - 14 - box.w
    caption(ctx, 'fase atual', rx, box.h + 34, C.muted)
    text(ctx, phase.t, rx, box.h + 50, { size: 9, weight: 700, color: phase.c })

    if (!supra) {
      text(ctx, 'abaixo do limiar:', rx, box.h + 76, { size: 9, weight: 700, color: Q.danger })
      text(ctx, 'a membrana só "borbulha"', rx, box.h + 90, { size: 8.5, color: C.muted })
      text(ctx, 'e volta — tudo-ou-nada.', rx, box.h + 103, { size: 8.5, color: C.muted })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

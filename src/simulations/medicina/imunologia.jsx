// ═══════════════════════════════════════════════════════════════════
// MEDICINA — Resposta Imune Adaptativa
//
// Modelo de dinâmica viral com resposta imune (família Nowak–May), um
// sistema de EDOs que é o pão-com-manteiga da imunologia quantitativa:
//
//   dT/dt = λ − d·T − β·T·V              células saudáveis (alvo)
//   dI/dt = β·T·V − δ·I − k·I·E          células infectadas
//   dV/dt = p·I − c·V − g·V·Ab           partículas virais
//   dE/dt = a·I·E − dₑ·E                 linfócitos T citotóxicos
//   dAb/dt = h·E − dₐ·Ab                 anticorpos
//   dM/dt = mem·E                        células de MEMÓRIA
//
// O ponto alto: a MEMÓRIA. Aos 30 dias, a simulação reinfecta o
// organismo com a MESMA carga viral. Na primeira vez, o vírus teve dias
// livres para se multiplicar enquanto o sistema imune "aprendia". Na
// segunda, as células de memória partem de uma população já alta e o
// vírus é esmagado antes de causar doença.
//
// Essa diferença entre as duas curvas — o pico alto e lento contra o
// pico baixo e rápido — É a vacinação. É o gráfico inteiro da imunologia
// num único quadro.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, rng, glow,
} from '../engine'

const A = ACCENT['medicina']

const DAYS = 45
const REINFECT_DAY = 30

export default function ImunologiaCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const rand = rng(9)
    return {
      day: 0,
      T: 1000,     // células-alvo saudáveis
      I: 0,        // infectadas
      V: 1,        // vírus (carga inicial)
      E: 1,        // linfócitos T efetores
      Ab: 0,       // anticorpos
      M: 0,        // memória
      reinfected: false,
      hist: [],    // [dia, V, E, Ab, M]
      peak1: 0,
      peak2: 0,
      cells: Array.from({ length: 46 }, () => ({
        x: rand(), y: rand(),
        vx: (rand() - 0.5) * 0.05,
        vy: (rand() - 0.5) * 0.05,
        kind: 0,          // 0 saudável, 1 infectada, 2 linfócito
        r: rand(),
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const strength = (p.immuneStrength ?? 50) / 50   // 0,2 – 2,0
    const load     = (p.viralLoad ?? 50) / 50

    // Parâmetros do modelo (por dia)
    const lam = 10, d = 0.01
    const beta = 0.00035 * load
    const delta = 0.35
    const k = 0.010 * strength
    const pv = 22 * load
    const c = 2.8
    const g = 0.020 * strength
    const a = 0.0022 * strength
    const de = 0.12
    const hAb = 0.9 * strength
    const da = 0.20
    const mem = 0.020 * strength

    const days = dt * 2.2      // dias simulados por segundo
    const sub = 12
    const H = days / sub

    for (let i = 0; i < sub; i++) {
      if (!s.reinfected && s.day >= REINFECT_DAY) {
        s.V += 1                 // MESMA carga viral da primeira vez
        s.reinfected = true
        // A memória "acorda" e vira efetora — é isso que a vacina compra.
        s.E += s.M * 0.55
      }

      const { T, I, V, E, Ab, M } = s
      const dT  = lam - d * T - beta * T * V
      const dI  = beta * T * V - delta * I - k * I * E
      const dV  = pv * I - c * V - g * V * Ab
      const dE  = a * I * E - de * E + 0.02
      const dAb = hAb * E - da * Ab
      const dM  = mem * E - 0.001 * M

      s.T  = Math.max(0, T  + dT  * H)
      s.I  = Math.max(0, I  + dI  * H)
      s.V  = Math.max(0, V  + dV  * H)
      s.E  = Math.max(0, E  + dE  * H)
      s.Ab = Math.max(0, Ab + dAb * H)
      s.M  = Math.max(0, M  + dM  * H)
      s.day += H

      if (s.day < REINFECT_DAY) s.peak1 = Math.max(s.peak1, s.V)
      else s.peak2 = Math.max(s.peak2, s.V)
    }

    if (s.day > DAYS) {
      // reinicia o experimento
      Object.assign(s, {
        day: 0, T: 1000, I: 0, V: 1, E: 1, Ab: 0, M: 0,
        reinfected: false, hist: [], peak1: 0, peak2: 0,
      })
      return
    }

    if (s.hist.length === 0 || s.day - s.hist[s.hist.length - 1][0] > 0.12) {
      s.hist.push([s.day, s.V, s.E, s.Ab, s.M])
    }

    // Células no campo visual: a proporção segue o modelo
    const infFrac = clamp(s.I / (s.T + s.I + 1), 0, 1)
    const eFrac = clamp(s.E / 60, 0, 1)
    s.cells.forEach((cl, idx) => {
      cl.x += cl.vx * dt; cl.y += cl.vy * dt
      if (cl.x < 0 || cl.x > 1) cl.vx *= -1
      if (cl.y < 0 || cl.y > 1) cl.vy *= -1
      cl.x = clamp(cl.x, 0, 1); cl.y = clamp(cl.y, 0, 1)
      const u = idx / s.cells.length
      cl.kind = u < eFrac * 0.45 ? 2 : u < eFrac * 0.45 + infFrac ? 1 : 0
    })
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const compact = w < 720
    const stageW = compact ? w : w * 0.40

    // ══ TECIDO ═══════════════════════════════════════════════════
    const tx = 22, ty = h * 0.16
    const tw = stageW - 44, th = h * 0.50

    ctx.fillStyle = 'rgba(255,255,255,0.015)'
    ctx.fillRect(tx, ty, tw, th)
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(tx + 0.5, ty + 0.5, tw, th)
    caption(ctx, 'Tecido', tx, ty - 10, A)

    for (const cl of s.cells) {
      const X = tx + cl.x * tw, Y = ty + cl.y * th
      if (cl.kind === 2) {
        // linfócito T — com receptores
        glow(ctx, X, Y, 4, Q.field, 0.6)
        ctx.strokeStyle = hexA(Q.field, 0.8)
        ctx.lineWidth = 1
        for (let a2 = 0; a2 < 6; a2++) {
          const an = (a2 / 6) * Math.PI * 2
          ctx.beginPath()
          ctx.moveTo(X + Math.cos(an) * 4, Y + Math.sin(an) * 4)
          ctx.lineTo(X + Math.cos(an) * 6.5, Y + Math.sin(an) * 6.5)
          ctx.stroke()
        }
      } else if (cl.kind === 1) {
        ctx.fillStyle = hexA(Q.danger, 0.85)
        ctx.beginPath(); ctx.arc(X, Y, 4, 0, Math.PI * 2); ctx.fill()
      } else {
        ctx.fillStyle = hexA(C.ink, 0.20)
        ctx.beginPath(); ctx.arc(X, Y, 4, 0, Math.PI * 2); ctx.fill()
      }
    }

    // legenda
    const ly = ty + th + 18
    const dot = (x, col, lbl) => {
      ctx.fillStyle = col
      ctx.beginPath(); ctx.arc(x, ly - 3, 3.4, 0, Math.PI * 2); ctx.fill()
      text(ctx, lbl, x + 8, ly, { size: 8.5, color: C.dim })
    }
    dot(tx + 4, hexA(C.ink, 0.25), 'saudável')
    dot(tx + 74, Q.danger, 'infectada')
    dot(tx + 152, Q.field, 'linfócito T')

    // ══ Leituras ═════════════════════════════════════════════════
    const sick = s.V > 25
    readout(ctx, w - 14, 14, [
      { k: 'dia',           v: s.day.toFixed(1), c: A },
      { k: 'V   carga viral', v: s.V.toFixed(1), c: sick ? Q.danger : C.ink },
      { k: 'T   saudáveis',  v: s.T.toFixed(0) },
      { k: 'I   infectadas', v: s.I.toFixed(1), c: Q.danger },
      { k: 'E   linfócitos', v: s.E.toFixed(1), c: Q.field },
      { k: 'Ab  anticorpos', v: s.Ab.toFixed(1), c: Q.potential },
      { k: 'M   memória',    v: s.M.toFixed(1), c: Q.warn },
    ], { title: sick ? 'infecção ativa' : 'sob controle', anchor: 'right',
         accent: sick ? Q.danger : Q.potential, minWidth: 196 })

    const phase = s.day < REINFECT_DAY
      ? { t: '1ª exposição — o sistema imune está APRENDENDO', c: Q.danger }
      : { t: '2ª exposição — a memória já sabe o que fazer', c: Q.potential }
    caption(ctx, phase.t, 22, 24, phase.c)

    if (compact) return

    // ══ AS DUAS RESPOSTAS, LADO A LADO ═══════════════════════════
    const gx = stageW + 50
    const gw = w - gx - 26
    const gy = h * 0.14
    const gh = h * 0.44

    const vMax = Math.max(20, s.peak1 * 1.2)

    caption(ctx, 'Resposta primária × secundária', gx, gy - 12, A)
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, DAYS], yDomain: [0, vMax],
      xTicks: 3, yTicks: 3,
      fmtX: q => `${q.toFixed(0)}d`, fmtY: q => q.toFixed(0),
      yLabel: 'carga viral',
      rules: [{ x: REINFECT_DAY, color: hexA(Q.warn, 0.7), label: 'reinfecção' }],
      series: [{ points: s.hist.map(d => [d[0], d[1]]), color: Q.danger, width: 2, fill: true }],
    })

    // Comparação numérica dos dois picos — o argumento da vacina
    if (s.peak2 > 0 && s.day > REINFECT_DAY + 3) {
      const red = s.peak1 > 0 ? (1 - s.peak2 / s.peak1) * 100 : 0
      text(ctx, `pico 2 é ${red.toFixed(0)}% menor que o pico 1`,
        gx + gw, gy + 14, { size: 9, weight: 700, color: Q.potential, align: 'right' })
    }

    // ── Defesas ──────────────────────────────────────────────────
    const py = gy + gh + 46
    const ph = h - py - 52
    const eMax = Math.max(20, ...s.hist.map(d => Math.max(d[2], d[3], d[4]))) * 1.15

    caption(ctx, 'Defesas', gx, py - 10, C.muted)
    plot(ctx, { x: gx, y: py, w: gw, h: ph }, {
      xDomain: [0, DAYS], yDomain: [0, eMax],
      xTicks: 3, yTicks: 2,
      fmtX: q => `${q.toFixed(0)}d`, fmtY: q => q.toFixed(0),
      xLabel: 'dias', yLabel: 'população',
      rules: [{ x: REINFECT_DAY, color: hexA(Q.warn, 0.5) }],
      series: [
        { points: s.hist.map(d => [d[0], d[2]]), color: Q.field,     width: 1.7 },
        { points: s.hist.map(d => [d[0], d[3]]), color: Q.potential, width: 1.7 },
        { points: s.hist.map(d => [d[0], d[4]]), color: Q.warn,      width: 1.7, dash: [4, 2] },
      ],
    })
    legend(ctx, gx, h - 14, [
      { label: 'linfócitos T', color: Q.field },
      { label: 'anticorpos', color: Q.potential },
      { label: 'memória', color: Q.warn },
    ])
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

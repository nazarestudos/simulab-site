// ═══════════════════════════════════════════════════════════════════
// QUÍMICA — Pilha de Daniell (Célula Galvânica)
//
//   Ânodo   (−)  Zn⁰ → Zn²⁺ + 2e⁻      E° = −0,76 V   (oxidação)
//   Cátodo  (+)  Cu²⁺ + 2e⁻ → Cu⁰      E° = +0,34 V   (redução)
//   Global       Zn + Cu²⁺ → Zn²⁺ + Cu     E°cel = +1,10 V
//
// A tensão NÃO é fixa em 1,10 V. Ela depende das concentrações, pela
// equação de NERNST:
//
//     E = E° − (RT / nF) · ln Q,      Q = [Zn²⁺] / [Cu²⁺]
//
// A 25 °C isso vira E = E° − (0,0592/n)·log₁₀ Q. Conforme a pilha
// trabalha, [Zn²⁺] sobe e [Cu²⁺] cai, Q cresce e a tensão DESPENCA —
// é literalmente a bateria descarregando. Quando E = 0, Q = K e o
// sistema atingiu o equilíbrio: pilha morta.
//
// A ponte salina não é decoração: sem ela, a solução do ânodo acumularia
// carga + e a do cátodo carga −, e o fluxo de elétrons pararia em
// microssegundos.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['quimica']

const E0 = 1.10          // V — potencial padrão da célula
const R  = 8.314
const F  = 96485
const T  = 298.15
const N  = 2             // elétrons transferidos

const V_SOL = 0.5        // L por semicélula

export default function PilhasCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const rand = rng(1799)
    return {
      cZn: p.cZn ?? 0.10,     // mol/L inicial
      cCu: p.cCu ?? 1.00,
      cZn0: p.cZn ?? 0.10,
      cCu0: p.cCu ?? 1.00,
      charge: 0,              // carga transferida, C
      t: 0,
      dead: false,
      electrons: Array.from({ length: 26 }, (_, i) => i / 26),
      ions: Array.from({ length: 26 }, () => ({ u: rand(), side: rand() < 0.5 })),
      hist: [],
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const cZn0 = p.cZn ?? 0.10
    const cCu0 = p.cCu ?? 1.00

    // Mexer nas concentrações iniciais monta uma pilha nova.
    if (cZn0 !== s.cZn0 || cCu0 !== s.cCu0) {
      s.cZn0 = cZn0; s.cCu0 = cCu0
      s.cZn = cZn0; s.cCu = cCu0
      s.charge = 0; s.t = 0; s.dead = false; s.hist = []
      return
    }

    const rate = p.rate ?? 1
    s.t += dt

    // Tensão atual pela equação de Nernst
    const Qr = s.cZn / Math.max(s.cCu, 1e-9)
    const E = E0 - (R * T / (N * F)) * Math.log(Qr)

    if (E <= 0.001 || s.cCu <= 1e-4) { s.dead = true }

    if (!s.dead) {
      // A corrente cai junto com a tensão (carga a resistência constante).
      const I = clamp(E * 0.42 * rate, 0, 3)     // A
      const dq = I * dt * 60                     // C (tempo acelerado 60×)
      const dn = dq / (N * F)                    // mol de Zn oxidado

      s.cZn = clamp(s.cZn + dn / V_SOL, 0, 5)
      s.cCu = clamp(s.cCu - dn / V_SOL, 0, 5)
      s.charge += dq

      // Elétrons marcham pelo fio externo; velocidade ∝ corrente
      for (let i = 0; i < s.electrons.length; i++) {
        s.electrons[i] = (s.electrons[i] + I * 0.28 * dt) % 1
      }
      // Íons migram pela ponte salina
      for (const io of s.ions) {
        io.u = (io.u + I * 0.16 * dt) % 1
      }
    }

    if (s.hist.length === 0 || s.t - s.hist[s.hist.length - 1][0] > 0.08) {
      s.hist.push([s.t, Math.max(0, E)])
      if (s.hist.length > 500) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const Qr = s.cZn / Math.max(s.cCu, 1e-9)
    const E = Math.max(0, E0 - (R * T / (N * F)) * Math.log(Qr))
    const I = s.dead ? 0 : clamp(E * 0.42 * (p.rate ?? 1), 0, 3)
    // Constante de equilíbrio: em E = 0, ln K = nFE°/RT
    const K = Math.exp(N * F * E0 / (R * T))

    const compact = w < 700
    const stageW = compact ? w : w * 0.58

    // ══ GEOMETRIA ════════════════════════════════════════════════
    const bw = stageW * 0.30
    const bh = h * 0.42
    const by = h * 0.34
    const lx = stageW * 0.10           // béquer do ânodo (Zn)
    const rx = stageW * 0.58           // béquer do cátodo (Cu)

    // ── Fio externo + voltímetro ─────────────────────────────────
    const wy = h * 0.16
    const elx = lx + bw / 2
    const erx = rx + bw / 2
    ctx.strokeStyle = hexA(C.ink, 0.4)
    ctx.lineWidth = 1.6
    ctx.beginPath()
    ctx.moveTo(elx, by - 26); ctx.lineTo(elx, wy)
    ctx.lineTo(erx, wy);      ctx.lineTo(erx, by - 26)
    ctx.stroke()

    // Voltímetro
    const vx = (elx + erx) / 2
    ctx.fillStyle = C.bg
    ctx.beginPath(); ctx.arc(vx, wy, 25, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.2
    ctx.stroke()
    text(ctx, `${E.toFixed(3)}`, vx, wy - 1, { size: 13, weight: 700, color: s.dead ? Q.danger : A, align: 'center' })
    text(ctx, 'V', vx, wy + 12, { size: 8.5, color: C.muted, align: 'center' })

    // ── Elétrons no fio: sempre do ânodo (−) para o cátodo (+) ───
    const segA = by - 26 - wy
    const segB = erx - elx
    const total = segA * 2 + segB
    for (const e of s.electrons) {
      const d = e * total
      let ex, ey
      if (d < segA)            { ex = elx; ey = (by - 26) - d }
      else if (d < segA + segB) { ex = elx + (d - segA); ey = wy }
      else                      { ex = erx; ey = wy + (d - segA - segB) }
      if (!s.dead) glow(ctx, ex, ey, 2.2, Q.field, 0.6)
    }
    if (!s.dead) {
      text(ctx, 'e⁻ →', vx, wy - 34, { size: 9, weight: 700, color: Q.field, align: 'center' })
    }

    // ── Ponte salina ─────────────────────────────────────────────
    const py = by + bh * 0.18
    ctx.strokeStyle = hexA(C.ink, 0.18)
    ctx.lineWidth = 9
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(lx + bw - 8, py)
    ctx.quadraticCurveTo((lx + rx + bw) / 2, py - 26, rx + 8, py)
    ctx.stroke()
    ctx.lineCap = 'butt'

    for (const io of s.ions) {
      const t = io.u
      const x0 = lx + bw - 8, x1 = rx + 8
      const cxq = (lx + rx + bw) / 2
      const u = io.side ? t : 1 - t
      const X = (1 - u) ** 2 * x0 + 2 * (1 - u) * u * cxq + u * u * x1
      const Y = (1 - u) ** 2 * py + 2 * (1 - u) * u * (py - 26) + u * u * py
      ctx.fillStyle = io.side ? hexA('#7f8fc2', 0.85) : hexA('#c2704f', 0.85)
      ctx.beginPath(); ctx.arc(X, Y, 2.2, 0, Math.PI * 2); ctx.fill()
    }
    text(ctx, 'ponte salina (KCl)', (lx + rx + bw) / 2, py - 34,
      { size: 8.5, color: C.muted, align: 'center' })

    // ══ SEMICÉLULAS ══════════════════════════════════════════════
    const halfCell = (x, label, sol, conc, col, electrodeCol, eLabel, sign, growing) => {
      // béquer
      ctx.strokeStyle = C.faint
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(x, by); ctx.lineTo(x, by + bh)
      ctx.lineTo(x + bw, by + bh); ctx.lineTo(x + bw, by)
      ctx.stroke()

      // solução — a cor satura com a concentração (o azul do Cu²⁺ some
      // conforme o cobre é consumido: isso acontece de verdade)
      const sat = clamp(conc / 1.2, 0.05, 1)
      ctx.fillStyle = hexA(col, 0.10 + sat * 0.28)
      ctx.fillRect(x, by + bh * 0.16, bw, bh * 0.84)

      // eletrodo — engorda ou afina conforme deposita/dissolve
      const wear = clamp(growing, -1, 1)
      const ew = 13 + wear * 5
      const ex = x + bw / 2 - ew / 2
      ctx.fillStyle = electrodeCol
      ctx.fillRect(ex, by - 26, ew, bh * 0.80 + 26)
      ctx.strokeStyle = hexA('#ffffff', 0.2)
      ctx.lineWidth = 1
      ctx.strokeRect(ex + 0.5, by - 26 + 0.5, ew, bh * 0.80 + 26)

      text(ctx, eLabel, x + bw / 2, by - 34, { size: 11, weight: 700, color: electrodeCol, align: 'center' })
      text(ctx, sign, x + bw / 2, by - 48, { size: 12, weight: 700, color: sign === '−' ? Q.negative : Q.positive, align: 'center' })

      caption(ctx, label, x, by + bh + 18, C.muted)
      text(ctx, sol, x, by + bh + 34, { size: 9.5, weight: 700, color: col })
      text(ctx, `${conc.toFixed(3)} M`, x, by + bh + 48, { size: 9, color: C.dim })
    }

    // Ânodo: Zn se dissolve (eletrodo afina, [Zn²⁺] sobe)
    const znWear = -clamp((s.cZn - s.cZn0) / 1.2, 0, 1)
    halfCell(lx, 'ânodo · oxidação', 'ZnSO₄', s.cZn, '#9aa6b5', '#8d949c', 'Zn', '−', znWear)

    // Cátodo: Cu se deposita (eletrodo engorda, [Cu²⁺] cai e a cor azul some)
    const cuGain = clamp((s.cCu0 - s.cCu) / 1.2, 0, 1)
    halfCell(rx, 'cátodo · redução', 'CuSO₄', s.cCu, '#4a86a8', '#b5714e', 'Cu', '+', cuGain)

    // ── Semirreações ─────────────────────────────────────────────
    text(ctx, 'Zn⁰ → Zn²⁺ + 2e⁻', lx, h - 30, { size: 9, color: '#9aa6b5' })
    text(ctx, 'Cu²⁺ + 2e⁻ → Cu⁰', rx, h - 30, { size: 9, color: '#b5714e' })

    if (s.dead) {
      caption(ctx, 'pilha esgotada — Q atingiu K, E = 0', 16, 24, Q.danger)
    } else {
      caption(ctx, 'Zn + Cu²⁺ → Zn²⁺ + Cu', 16, 24, A)
    }

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'E°  padrão',  v: `${E0.toFixed(2)} V` },
      { k: 'E   Nernst',  v: `${E.toFixed(3)} V`, c: s.dead ? Q.danger : A },
      { k: 'Q   quociente', v: Qr < 1000 ? Qr.toFixed(3) : Qr.toExponential(1), c: Q.warn },
      { k: 'K   equilíbrio', v: K.toExponential(1) },
      { k: '[Zn²⁺]',      v: `${s.cZn.toFixed(3)} M`, c: '#9aa6b5' },
      { k: '[Cu²⁺]',      v: `${s.cCu.toFixed(3)} M`, c: '#4a86a8' },
      { k: 'I   corrente', v: `${I.toFixed(2)} A`, c: Q.field },
      { k: 'carga',       v: `${(s.charge / 1000).toFixed(2)} kC` },
    ], { title: 'E = E° − (RT/nF)·ln Q', anchor: 'right', accent: A, minWidth: 216 })

    if (compact) return

    // ══ E × log Q — a reta de Nernst ═════════════════════════════
    const gx = stageW + 46
    const gw = w - gx - 26
    const gy = h * 0.52
    const gh = h - gy - 54

    caption(ctx, 'Descarga · E(t)', gx, 26, A)
    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.34 }, {
      xDomain: [0, Math.max(12, s.t)], yDomain: [0, 1.3],
      xTicks: 3, yTicks: 3,
      fmtX: q => `${q.toFixed(0)}s`, fmtY: q => q.toFixed(1),
      yLabel: 'E (V)',
      rules: [{ y: E0, color: hexA(C.ink, 0.25), label: 'E° = 1,10 V' }],
      series: [{ points: s.hist, color: A, width: 2, fill: true }],
    })

    caption(ctx, 'Nernst · E × log₁₀ Q', gx, gy - 10, Q.warn)
    const nern = []
    for (let lq = -4; lq <= 6; lq += 0.1) {
      nern.push([lq, E0 - (0.0592 / N) * lq])
    }
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [-4, 6], yDomain: [0.8, 1.35],
      xTicks: 5, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(2),
      xLabel: 'log₁₀ Q', yLabel: 'E (V)',
      rules: [{ y: E0, color: hexA(C.ink, 0.2) }],
      series: [{ points: nern, color: hexA(Q.warn, 0.85), width: 1.8 }],
      markers: [{ x: Math.log10(Math.max(Qr, 1e-9)), y: E, color: Q.kinetic, r: 4 }],
    })
    text(ctx, 'inclinação −0,0592/n V por década', gx, h - 16,
      { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

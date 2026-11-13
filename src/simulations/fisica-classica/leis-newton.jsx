// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Dinâmica Newtoniana e Atrito
//
// O detalhe que quase toda simulação escolar erra: atrito ESTÁTICO e
// atrito CINÉTICO são coisas diferentes.
//
//   Parado:   f_at = F  (se |F| ≤ μₑ·N)  →  a = 0. O atrito estático se
//             ajusta à força aplicada; ele não tem valor fixo, tem TETO.
//   Movendo:  f_at = μc·N, sempre contrário a v  →  a = (F − μc·N)/m
//
// Como μc < μₑ, o bloco "salta" ao partir: é por isso que empurrar um
// móvel pesado custa no primeiro instante e alivia logo depois.
//
// Contabilidade de energia (teorema trabalho–energia). Partindo do
// repouso, todo o trabalho da força aplicada se reparte entre energia
// cinética e o calor dissipado pelo atrito:
//
//   W_F = ∫F·dx   =   K + Q ,     K = ½·m·v² ,     Q = ∫f·dx
//
// As barras mostram essa igualdade ao vivo — é onde a energia "some"
// quando você empurra algo com atrito.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, bars, plot, legend, hexA, clamp,
} from '../engine'

const A    = ACCENT['fisica-classica']
const G    = 9.81
// O atrito estático é sempre um pouco maior que o cinético (~25% em
// superfícies secas típicas). É essa diferença que faz o bloco "saltar"
// ao partir. O slider controla μc; μₑ acompanha por essa razão fixa.
const MU_RATIO = 1.25
const muK = (p) => p?.friction ?? 0.28
const muS = (p) => (p?.friction ?? 0.28) * MU_RATIO

export default function LeisNewtonCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => ({
    x: 0, v: 0, a: 0,
    fat: 0,
    moving: false,
    t: 0,
    hist: [],
    Wf: 0, Q: 0,          // trabalho da força aplicada e calor dissipado (J)
    m: p?.mass ?? 10,     // massa vigente — muda-la zera a contabilidade de energia
  }), [])

  const step = useCallback((s, dt, p) => {
    const F = p.force ?? 100
    const m = p.mass  ?? 10
    const N = m * G
    const fsMax = muS(p) * N
    const fk    = muK(p) * N

    // Trocar a massa no meio da corrida invalida K = ½mv²; reinicia a
    // contabilidade de energia (a posição e a velocidade continuam).
    if (m !== s.m) {
      s.m = m
      s.Wf = 0; s.Q = 0
    }

    if (!s.moving) {
      if (F > fsMax) {
        s.moving = true
        s.fat = -fk
        s.a = (F - fk) / m
      } else {
        // Equilíbrio: o atrito estático cancela exatamente a força aplicada.
        s.fat = -F
        s.a = 0
        s.v = 0
      }
    } else {
      s.fat = -Math.sign(s.v || 1) * fk
      s.a = (F + s.fat) / m
      if (s.v > 0 && s.v + s.a * dt < 0 && F <= fsMax) {
        s.v = 0; s.a = 0; s.moving = false; s.fat = -F
      }
    }

    if (s.moving) {
      s.v += s.a * dt
      const dx = s.v * dt
      s.x += dx
      // O bloco só anda no sentido +x, então dx ≥ 0: o trabalho da força
      // aplicada entra positivo e o atrito sempre subtrai (dissipa) calor.
      s.Wf += F  * dx
      s.Q  += fk * dx
    }
    s.t += dt

    if (s.hist.length === 0 || s.t - s.hist[s.hist.length - 1][0] > 0.02) {
      s.hist.push([s.t, s.v, s.a])
      if (s.hist.length > 900) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const F = p.force ?? 100
    const m = p.mass  ?? 10
    const N = m * G
    const fsMax = muS(p) * N
    const compact = w < 700
    const stageW = compact ? w : w * 0.60

    const groundY = h * 0.62
    // Lado ∝ ∛m: massa é volume. Um bloco 8× mais pesado é 2× mais alto.
    const side = clamp(24 + Math.cbrt(m) * 11, 30, 88)
    const bxs  = stageW * 0.32
    const ppm  = 26   // px por metro

    // ── Piso rolante: o bloco fica fixo, o mundo desliza sob ele ──
    const off = ((s.x * ppm) % 40 + 40) % 40
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let gx = -off; gx < stageW + 40; gx += 40) {
      ctx.moveTo(gx, groundY)
      ctx.lineTo(gx - 12, groundY + 13)
    }
    ctx.stroke()
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(0, groundY + 0.5); ctx.lineTo(stageW, groundY + 0.5)
    ctx.stroke()

    // Marcos de distância — dão a medida real do deslocamento
    for (let mk = Math.max(0, Math.floor(s.x) - 5); mk < s.x + stageW / ppm; mk++) {
      const mx = bxs + (mk - s.x) * ppm
      if (mx < 4 || mx > stageW - 4) continue
      ctx.fillStyle = C.muted
      ctx.fillRect(mx, groundY + 2, 1, 4)
      if (mk % 5 === 0) text(ctx, `${mk} m`, mx, groundY + 20, { size: 8.5, color: C.muted, align: 'center' })
    }

    // ── Bloco ─────────────────────────────────────────────────────
    const byT = groundY - side
    ctx.fillStyle = hexA(A, 0.16)
    ctx.fillRect(bxs - side / 2, byT, side, side)
    ctx.strokeStyle = hexA(A, 0.75)
    ctx.lineWidth = 1.3
    ctx.strokeRect(bxs - side / 2 + 0.5, byT + 0.5, side, side)
    text(ctx, `${m} kg`, bxs, byT + side / 2 + 4, { size: 10, weight: 700, color: C.ink, align: 'center' })

    // ── Diagrama de corpo livre, à escala (px por newton) ─────────
    const cx = bxs, cy = byT + side / 2
    const fs = clamp(88 / Math.max(F, N, 1), 0.04, 0.85)

    arrow(ctx, cx, cy, cx, cy + N * fs, { color: hexA(C.ink, 0.30), width: 1.4, label: 'P' })
    arrow(ctx, cx, cy, cx, cy - N * fs, { color: hexA(C.ink, 0.30), width: 1.4, label: 'N' })
    arrow(ctx, cx, cy, cx + F * fs, cy,  { color: Q.force,   width: 2.2, label: 'F' })
    arrow(ctx, cx, cy, cx + s.fat * fs, cy, { color: Q.thermal, width: 2.2, label: 'f' })

    const Fr = F + s.fat
    if (Math.abs(Fr) > 0.5) {
      arrow(ctx, cx, byT - 24, cx + Fr * fs, byT - 24, { color: Q.kinetic, width: 2.4, label: 'Fᵣ' })
    }

    // ── Regime atual ──────────────────────────────────────────────
    const st = s.moving
      ? { txt: 'deslizando · atrito cinético', c: Q.kinetic }
      : F > fsMax
        ? { txt: 'rompendo a inércia', c: Q.warn }
        : { txt: 'equilíbrio · atrito estático', c: Q.potential }
    caption(ctx, st.txt, 20, 26, st.c)

    if (!s.moving) {
      const bw = Math.min(200, stageW - 44)
      const frac = clamp(F / fsMax, 0, 1)
      ctx.fillStyle = 'rgba(255,255,255,0.05)'
      ctx.fillRect(20, 38, bw, 4)
      ctx.fillStyle = frac > 0.98 ? Q.warn : Q.potential
      ctx.fillRect(20, 38, bw * frac, 4)
      text(ctx, `F / μₑN = ${(frac * 100).toFixed(0)}%  ·  limiar ${fsMax.toFixed(0)} N`,
        20, 56, { size: 9, color: C.muted })
    }

    // ── Energia: W_F = K + Q (teorema trabalho–energia) ───────────
    const K = 0.5 * m * s.v * s.v
    const eb0 = 22
    const ebY = h - 96
    caption(ctx, 'Energia (J)', eb0, ebY - 10, A)
    bars(ctx, eb0, ebY, 78, 60, [
      { label: 'W', value: s.Wf,     max: s.Wf || 1, color: Q.force },
      { label: 'K', value: K,        max: s.Wf || 1, color: Q.kinetic },
      { label: 'Q', value: s.Q,      max: s.Wf || 1, color: Q.thermal },
    ], { barWidth: 16 })
    text(ctx, 'W = K + Q', eb0, h - 12, { size: 9, color: C.muted })

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'F  aplicada',   v: `${F.toFixed(0)} N`, c: Q.force },
      { k: 'N  normal',     v: `${N.toFixed(0)} N` },
      { k: 'f  atrito',     v: `${Math.abs(s.fat).toFixed(0)} N`, c: Q.thermal },
      { k: 'Fᵣ resultante', v: `${Fr.toFixed(0)} N`, c: Q.kinetic },
      { k: 'a  aceleração', v: `${s.a.toFixed(2)} m/s²`, c: A },
      { k: 'v  velocidade', v: `${s.v.toFixed(2)} m/s` },
      { k: 'x  distância',  v: `${s.x.toFixed(1)} m` },
      { k: 'K  cinética',   v: `${K.toFixed(0)} J`, c: Q.kinetic },
      { k: 'Q  dissipado',  v: `${s.Q.toFixed(0)} J`, c: Q.thermal },
    ], { title: `μₑ ${muS(p).toFixed(2)} · μc ${muK(p).toFixed(2)}`, anchor: 'right', accent: A, minWidth: 186 })

    if (compact) return

    // ── v(t) e a(t) ───────────────────────────────────────────────
    const px = stageW + 44
    const pw = w - px - 26
    const t1 = Math.max(6, s.t)
    const t0 = Math.max(0, t1 - 6)
    const vMax = Math.max(1, ...s.hist.map(d => Math.abs(d[1]))) * 1.25
    const aMax = Math.max(0.5, Math.abs(s.a)) * 1.35

    caption(ctx, 'Velocidade', px, 26, A)
    plot(ctx, { x: px, y: 36, w: pw, h: h * 0.30 }, {
      xDomain: [t0, t1], yDomain: [0, vMax],
      xTicks: 3, yTicks: 3,
      fmtX: v => `${v.toFixed(0)}s`, fmtY: v => v.toFixed(1),
      yLabel: 'v (m/s)',
      series: [{ points: s.hist.map(d => [d[0], d[1]]), color: Q.velocity, width: 1.7, fill: true }],
    })

    const py = h * 0.30 + 86
    caption(ctx, 'Aceleração', px, py - 10, A)
    plot(ctx, { x: px, y: py, w: pw, h: h - py - 52 }, {
      xDomain: [t0, t1], yDomain: [-aMax * 0.25, aMax],
      xTicks: 3, yTicks: 3,
      fmtX: v => `${v.toFixed(0)}s`, fmtY: v => v.toFixed(1),
      xLabel: 'tempo (s)', yLabel: 'a (m/s²)',
      rules: [{ y: 0, color: C.faint }],
      series: [{ points: s.hist.map(d => [d[0], d[2]]), color: Q.kinetic, width: 1.7 }],
    })
    legend(ctx, px, h - 14, [{ label: 'a = (F − μc·N) / m', color: Q.kinetic }])
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

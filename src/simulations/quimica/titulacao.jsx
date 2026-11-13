// ═══════════════════════════════════════════════════════════════════
// QUÍMICA — Titulação Ácido-Base (HCl × NaOH)
//
// O pH NÃO é interpolado nem "chutado" perto da viragem. Ele sai do
// balanço de cargas, resolvendo a equação exata que inclui a
// autoionização da água:
//
//     [H⁺] − [OH⁻] = C_excesso        e     [H⁺]·[OH⁻] = Kw
//   ⟹ [H⁺]² − C·[H⁺] − Kw = 0
//   ⟹ [H⁺] = ( C + √(C² + 4Kw) ) / 2
//
// É justamente esse termo Kw que produz o SALTO vertical no ponto de
// equivalência. Um modelo que ignora a água dá pH = −log(0) = ∞ ali e
// quebra. Aqui, no ponto exato, C = 0 e a fórmula devolve [H⁺] = √Kw =
// 1e−7 → pH 7,00. Exato.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, mix, rng,
} from '../engine'

const A  = ACCENT['quimica']
const KW = 1e-14
const V_ACID = 25      // mL de ácido no erlenmeyer
const C_BASE = 0.1     // mol/L de NaOH na bureta
const V_MAX  = 50      // mL — capacidade da bureta

/** pH exato de uma mistura de ácido forte + base forte. */
function phAt(vBase, cAcid) {
  const nA = cAcid * V_ACID / 1000        // mol de H⁺
  const nB = C_BASE * vBase / 1000        // mol de OH⁻
  const vTot = (V_ACID + vBase) / 1000    // L
  const Cexc = (nA - nB) / vTot           // > 0 ácido em excesso; < 0 base
  const Hp = (Cexc + Math.sqrt(Cexc * Cexc + 4 * KW)) / 2
  return -Math.log10(Hp)
}

/** Cor da fenolftaleína: incolor abaixo de 8,2; rosa acima de 10. */
function phenol(pH) {
  const f = clamp((pH - 8.2) / 1.8, 0, 1)
  return { alpha: f, color: '#c2557f' }
}

export default function TitulacaoCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const rand = rng(88)
    return {
      vBase: 0,
      cAcid: p.concAcid ?? 0.1,
      drops: [],
      swirl: 0,
      rand,
      done: false,
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const cAcid = p.concAcid ?? 0.1
    if (Math.abs(cAcid - s.cAcid) > 1e-9) {
      s.cAcid = cAcid
      s.vBase = 0
      s.drops = []
      s.done = false
      return
    }
    if (s.done) return

    const speed = p.dropSpeed ?? 1
    s.vBase += dt * 1.6 * speed
    if (s.vBase >= V_MAX) { s.vBase = V_MAX; s.done = true }

    // gotas caindo
    if (Math.random() < dt * 7 * speed) s.drops.push({ y: 0, id: Math.random() })
    for (const d of s.drops) d.y += dt * 1.9
    s.drops = s.drops.filter(d => d.y < 1)

    s.swirl += dt * 2
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const cAcid = p.concAcid ?? 0.1
    const pH = phAt(s.vBase, cAcid)
    // Volume de equivalência: n_ácido = n_base
    const vEq = (cAcid * V_ACID) / C_BASE
    const ind = phenol(pH)

    const compact = w < 700
    const stageW = compact ? w : w * 0.46

    // ══ BURETA ═══════════════════════════════════════════════════
    const bx = stageW * 0.40
    const bTop = h * 0.05
    const bH = h * 0.36
    const bW = 15

    const filled = 1 - s.vBase / V_MAX
    ctx.fillStyle = 'rgba(255,255,255,0.03)'
    ctx.fillRect(bx - bW / 2, bTop, bW, bH)
    ctx.fillStyle = hexA('#8fa9c9', 0.30)
    ctx.fillRect(bx - bW / 2, bTop + bH * (1 - filled), bW, bH * filled)
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.strokeRect(bx - bW / 2 + 0.5, bTop + 0.5, bW, bH)

    // graduação
    for (let v = 0; v <= V_MAX; v += 10) {
      const gy = bTop + (v / V_MAX) * bH
      ctx.strokeStyle = C.faint
      ctx.beginPath(); ctx.moveTo(bx + bW / 2, gy); ctx.lineTo(bx + bW / 2 + 4, gy); ctx.stroke()
      text(ctx, `${v}`, bx + bW / 2 + 7, gy + 3, { size: 7.5, color: C.muted })
    }

    // torneira + bico
    ctx.fillStyle = C.faint
    ctx.fillRect(bx - 5, bTop + bH, 10, 7)
    ctx.beginPath()
    ctx.moveTo(bx - 2, bTop + bH + 7); ctx.lineTo(bx + 2, bTop + bH + 7)
    ctx.lineTo(bx + 1, bTop + bH + 17); ctx.lineTo(bx - 1, bTop + bH + 17)
    ctx.closePath(); ctx.fill()

    caption(ctx, `NaOH ${C_BASE} M`, bx + bW / 2 + 7, bTop - 8, C.muted)
    text(ctx, `${s.vBase.toFixed(1)} mL`, bx - bW / 2 - 7, bTop + bH / 2,
      { size: 11, weight: 700, color: A, align: 'right' })

    // ══ ERLENMEYER ═══════════════════════════════════════════════
    const fy = bTop + bH + 26
    const fh = h * 0.40
    const fw = Math.min(stageW * 0.55, 120)
    const fNeck = 20

    // corpo (trapézio)
    const flx = bx - fw / 2
    ctx.beginPath()
    ctx.moveTo(bx - fNeck / 2, fy)
    ctx.lineTo(bx - fNeck / 2, fy + fh * 0.20)
    ctx.lineTo(flx, fy + fh)
    ctx.lineTo(flx + fw, fy + fh)
    ctx.lineTo(bx + fNeck / 2, fy + fh * 0.20)
    ctx.lineTo(bx + fNeck / 2, fy)
    ctx.closePath()
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.2
    ctx.stroke()

    // líquido (cresce com o volume adicionado)
    const liqFrac = clamp(0.42 + (s.vBase / V_MAX) * 0.30, 0, 0.92)
    const liqTop = fy + fh * (1 - liqFrac)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(bx - fNeck / 2, fy)
    ctx.lineTo(bx - fNeck / 2, fy + fh * 0.20)
    ctx.lineTo(flx, fy + fh)
    ctx.lineTo(flx + fw, fy + fh)
    ctx.lineTo(bx + fNeck / 2, fy + fh * 0.20)
    ctx.lineTo(bx + fNeck / 2, fy)
    ctx.closePath()
    ctx.clip()

    // A cor é a da fenolftaleína no pH atual — incolor → rosa.
    const base = hexA('#9fb4c9', 0.12)
    ctx.fillStyle = base
    ctx.fillRect(flx - 10, liqTop, fw + 20, fh)
    if (ind.alpha > 0.01) {
      ctx.fillStyle = hexA(ind.color, ind.alpha * 0.75)
      ctx.fillRect(flx - 10, liqTop, fw + 20, fh)
    }

    // superfície com leve agitação
    ctx.strokeStyle = hexA('#ffffff', 0.16)
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let i = 0; i <= 24; i++) {
      const X = flx - 10 + (i / 24) * (fw + 20)
      const Y = liqTop + Math.sin(i * 0.6 + s.swirl) * 1.4
      i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
    }
    ctx.stroke()
    ctx.restore()

    // gotas
    for (const d of s.drops) {
      const dy = fy - 26 + d.y * (liqTop - (fy - 26))
      ctx.fillStyle = hexA('#8fa9c9', 0.85)
      ctx.beginPath()
      ctx.ellipse(bx, dy, 2, 3.2, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    caption(ctx, `HCl ${cAcid.toFixed(2)} M · ${V_ACID} mL`, flx, fy + fh + 18, C.muted)
    text(ctx, 'fenolftaleína', flx, fy + fh + 32, { size: 8.5, color: C.muted })

    // ══ pH grande ════════════════════════════════════════════════
    const phCol = pH < 6 ? '#c2704f' : pH > 8 ? '#7f8fc2' : Q.potential
    const hx = compact ? w - 90 : stageW - 10
    caption(ctx, 'pH', hx, h * 0.10, C.muted)
    text(ctx, pH.toFixed(2), hx, h * 0.10 + 30, { size: 30, weight: 700, color: phCol })

    // ══ Leituras ═════════════════════════════════════════════════
    const nA = cAcid * V_ACID / 1000
    const nB = C_BASE * s.vBase / 1000
    const Hp = 10 ** -pH
    const OH = KW / Hp

    readout(ctx, w - 14, 14, [
      { k: 'V  NaOH', v: `${s.vBase.toFixed(1)} mL`, c: A },
      { k: 'V_eq equivalência', v: `${vEq.toFixed(1)} mL`, c: Q.warn },
      { k: 'n  H⁺', v: `${(nA * 1000).toFixed(2)} mmol` },
      { k: 'n  OH⁻', v: `${(nB * 1000).toFixed(2)} mmol` },
      { k: '[H⁺]', v: `${Hp.toExponential(1)} M`, c: '#c2704f' },
      { k: '[OH⁻]', v: `${OH.toExponential(1)} M`, c: '#7f8fc2' },
      { k: 'pH', v: pH.toFixed(2), c: phCol },
    ], { title: 'HCl + NaOH → NaCl + H₂O', anchor: 'right', accent: A, minWidth: 208 })

    // Estado
    const near = Math.abs(s.vBase - vEq) < 0.4
    const st = near ? { t: 'ponto de equivalência — pH salta', c: Q.warn }
      : s.vBase < vEq ? { t: 'ácido em excesso', c: '#c2704f' }
      : { t: 'base em excesso', c: '#7f8fc2' }
    caption(ctx, st.t, 16, 24, st.c)

    if (compact) return

    // ══ CURVA DE TITULAÇÃO ═══════════════════════════════════════
    const gx = stageW + 52
    const gw = w - gx - 26
    const gh = h - 100

    caption(ctx, 'Curva de titulação', gx, 26, A)

    const curve = []
    for (let v = 0; v <= V_MAX; v += 0.12) curve.push([v, phAt(v, cAcid)])
    const trace = curve.filter(c => c[0] <= s.vBase)

    plot(ctx, { x: gx, y: 40, w: gw, h: gh }, {
      xDomain: [0, V_MAX], yDomain: [0, 14],
      xTicks: 5, yTicks: 7,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'volume de NaOH (mL)', yLabel: 'pH',
      rules: [
        { y: 7, color: hexA(Q.potential, 0.5), label: 'neutro' },
        { x: vEq, color: hexA(Q.warn, 0.6), label: 'V_eq' },
        { y: 8.2, color: hexA('#c2557f', 0.35), label: 'viragem' },
      ],
      series: [
        { points: curve, color: hexA(C.ink, 0.18), width: 1.4 },
        { points: trace, color: A, width: 2.2 },
      ],
      markers: [{ x: s.vBase, y: pH, color: phCol, r: 4.5 }],
    })

    text(ctx, 'o salto vertical existe porque a água se autoioniza (Kw)',
      gx, h - 16, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

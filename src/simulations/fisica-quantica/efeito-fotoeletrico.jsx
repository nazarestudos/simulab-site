// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Efeito Fotoelétrico
//
// O experimento que matou a física clássica e deu o Nobel a Einstein
// (1921) — não pela relatividade, por ISTO.
//
//     E_fóton = h·f          K_max = h·f − φ
//
// A onda clássica previa: luz mais INTENSA = mais energia = elétrons mais
// rápidos, e com luz fraca bastaria ESPERAR o metal acumular energia.
//
// A natureza responde três "nãos" que a onda não explica de jeito nenhum:
//
// 1. EXISTE UM LIMIAR. Abaixo de f₀ = φ/h, NADA acontece — nem com um
//    laser de mil watts. Aumente a intensidade à vontade: zero elétrons.
//    Uma onda contínua não teria como se recusar assim.
//
// 2. A INTENSIDADE NÃO MUDA A ENERGIA. Dobrar a intensidade dobra o
//    NÚMERO de elétrons, mas cada um sai com a MESMA K_max. Confira nos
//    dois painéis: mexer na intensidade move a corrente e não encosta na
//    energia.
//
// 3. É INSTANTÂNEO. Não há tempo de "carregar" o metal.
//
// A explicação: a luz chega em PACOTES. Um fóton, um elétron. Ou o pacote
// tem energia suficiente, ou não tem — e mais pacotes não ajudam.
//
// BÔNUS: o gráfico K_max × f é uma RETA de inclinação h. Foi medindo
// exatamente essa reta que Millikan (1916) determinou a constante de
// Planck — tentando, ironicamente, PROVAR que Einstein estava errado.
// Passou dez anos nisso e acabou confirmando a teoria.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp, mix,
} from '../engine'

const A = ACCENT['fisica-quantica']

const H_EV = 4.135667696e-15   // eV·s
const C_L = 299792458

// Funções trabalho reais (eV)
const METALS = [
  { n: 'Césio',   phi: 2.10, col: '#c9a24a' },
  { n: 'Sódio',   phi: 2.28, col: '#c9805a' },
  { n: 'Cálcio',  phi: 2.87, col: '#8fa88a' },
  { n: 'Zinco',   phi: 4.30, col: '#8fa9c9' },
  { n: 'Cobre',   phi: 4.70, col: '#b5714e' },
  { n: 'Platina', phi: 5.65, col: '#a9adb5' },
]

/** Cor aproximada de um comprimento de onda visível (nm). */
function wlColor(nm) {
  if (nm < 380) return '#8f6fc9'   // UV → violeta forçado
  if (nm < 440) return '#7a5fc9'
  if (nm < 490) return '#5f8fc9'
  if (nm < 510) return '#5fc9a8'
  if (nm < 580) return '#a8c95f'
  if (nm < 645) return '#c9985f'
  return '#c95f5f'
}

export default function FotoeletricoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    t: 0,
    photons: [],
    electrons: [],
    spawn: 0,
    ejected: 0,
  }), [])

  const step = useCallback((s, dt, p) => {
    const fPct = p.frequency ?? 50
    const iPct = p.intensity ?? 50
    const mIdx = Math.min(Math.round((p.metal ?? 0) / 100 * (METALS.length - 1)), METALS.length - 1)
    const phi = METALS[mIdx].phi

    // Frequência: 0–100 % → 3e14 a 1,8e15 Hz (IR → UV)
    const f = 3e14 + (fPct / 100) * 1.5e15
    const E = H_EV * f
    const Kmax = E - phi
    const emits = Kmax > 0

    s.t += dt

    // Fótons chegam a uma taxa proporcional à INTENSIDADE
    s.spawn += dt * (iPct / 100) * 26
    while (s.spawn >= 1) {
      s.spawn -= 1
      s.photons.push({ u: 0, y: Math.random(), f })
    }

    for (const ph of s.photons) ph.u += dt * 1.6
    const landed = s.photons.filter(ph => ph.u >= 1)

    for (const ph of landed) {
      if (emits) {
        // Um fóton → um elétron. A energia cinética é SEMPRE Kmax,
        // não importa quantos fótons chegam.
        s.electrons.push({
          u: 0,
          y: ph.y,
          k: Kmax,
          vy: (Math.random() - 0.5) * 0.35,
        })
        s.ejected++
      }
    }
    s.photons = s.photons.filter(ph => ph.u < 1)

    for (const e of s.electrons) {
      // A velocidade na tela reflete √K — energia vira velocidade
      e.u += dt * (0.4 + Math.sqrt(Math.max(e.k, 0)) * 0.42)
      e.y += e.vy * dt * 0.12
    }
    s.electrons = s.electrons.filter(e => e.u < 1)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const fPct = p.frequency ?? 50
    const iPct = p.intensity ?? 50
    const mIdx = Math.min(Math.round((p.metal ?? 0) / 100 * (METALS.length - 1)), METALS.length - 1)
    const metal = METALS[mIdx]
    const phi = metal.phi

    const f = 3e14 + (fPct / 100) * 1.5e15
    const E = H_EV * f
    const Kmax = E - phi
    const emits = Kmax > 0
    const f0 = phi / H_EV               // frequência de corte
    const lambda = (C_L / f) * 1e9      // nm
    const vMax = emits ? Math.sqrt(2 * Kmax * 1.602e-19 / 9.109e-31) : 0
    const stopV = Math.max(0, Kmax)     // tensão de corte (V) = Kmax/e

    const compact = w < 760
    const stageW = compact ? w : w * 0.48

    // ══ APARATO ══════════════════════════════════════════════════
    // Como numa fotocélula de verdade: a luz atravessa o coletor (uma
    // grade) e bate na face da placa; os elétrons saem DESSA MESMA face
    // e voltam até o coletor. Eles não atravessam o metal.
    const plateX = stageW - 34
    const cy = h * 0.30
    const plateH = h * 0.36

    // Feixe de luz incidente
    const beamCol = wlColor(lambda)
    const beamAlpha = clamp(iPct / 100, 0.05, 1)
    const bg = ctx.createLinearGradient(20, 0, plateX, 0)
    bg.addColorStop(0, hexA(beamCol, 0))
    bg.addColorStop(1, hexA(beamCol, 0.16 * beamAlpha))
    ctx.fillStyle = bg
    ctx.fillRect(20, cy - plateH / 2, plateX - 20, plateH)

    // Fótons
    for (const ph of s.photons) {
      const X = 24 + ph.u * (plateX - 26)
      const Y = cy - plateH / 2 + ph.y * plateH
      ctx.strokeStyle = hexA(beamCol, 0.9)
      ctx.lineWidth = 1.6
      ctx.beginPath()
      // ondulazinha — a "cor" é a frequência
      for (let k = 0; k < 8; k++) {
        const px = X - k * 2
        const py = Y + Math.sin(k * (0.6 + fPct / 90)) * 2.4
        k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    // Placa metálica
    ctx.fillStyle = hexA(metal.col, 0.35)
    ctx.fillRect(plateX, cy - plateH / 2, 12, plateH)
    ctx.strokeStyle = hexA(metal.col, 0.9)
    ctx.lineWidth = 1.2
    ctx.strokeRect(plateX + 0.5, cy - plateH / 2 + 0.5, 12, plateH)
    text(ctx, metal.n, plateX + 6, cy - plateH / 2 - 8,
      { size: 9.5, weight: 700, color: metal.col, align: 'center' })
    text(ctx, `φ = ${phi} eV`, plateX + 6, cy + plateH / 2 + 16,
      { size: 9, weight: 700, color: metal.col, align: 'center' })

    // Elétrons ejetados
    for (const e of s.electrons) {
      const X = plateX - 5 - e.u * (plateX - 34)
      const Y = cy - plateH / 2 + clamp(e.y, 0, 1) * plateH
      glow(ctx, X, Y, 2.6, Q.field, 0.8)
    }

    // Coletor
    const colX = 22
    ctx.strokeStyle = hexA(C.ink, 0.5)
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])           // grade: a luz passa por ela
    ctx.beginPath()
    ctx.moveTo(colX, cy - plateH / 2); ctx.lineTo(colX, cy + plateH / 2)
    ctx.stroke()
    ctx.setLineDash([])
    text(ctx, 'coletor', colX, cy + plateH / 2 + 16, { size: 9, color: C.muted })

    // ══ Veredito ═════════════════════════════════════════════════
    if (!emits) {
      caption(ctx, 'NENHUM elétron é ejetado', 22, 24, Q.danger)
      text(ctx, `E_fóton = ${E.toFixed(2)} eV  <  φ = ${phi} eV`, 22, 42,
        { size: 9.5, weight: 700, color: Q.danger })
      text(ctx, 'e aumentar a INTENSIDADE não muda nada.', 22, 58,
        { size: 9, weight: 700, color: Q.warn })
    } else {
      caption(ctx, 'elétrons ejetados', 22, 24, Q.potential)
      text(ctx, `K_max = hf − φ = ${E.toFixed(2)} − ${phi} = ${Kmax.toFixed(2)} eV`, 22, 42,
        { size: 9.5, weight: 700, color: Q.potential })
    }

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'f  frequência', v: `${(f / 1e14).toFixed(2)}e14 Hz`, c: beamCol },
      { k: 'λ  onda',       v: `${lambda.toFixed(0)} nm` },
      { k: 'E = hf',        v: `${E.toFixed(2)} eV`, c: A },
      { k: 'φ  trabalho',   v: `${phi} eV`, c: metal.col },
      { k: 'f₀ corte',      v: `${(f0 / 1e14).toFixed(2)}e14 Hz`, c: Q.warn },
      { k: 'K_max',         v: emits ? `${Kmax.toFixed(2)} eV` : 'nenhum elétron',
        c: emits ? Q.potential : Q.danger },
      { k: 'v_max',         v: emits ? `${(vMax / 1e6).toFixed(2)}e6 m/s` : '—' },
      { k: 'V₀ tensão corte', v: emits ? `${stopV.toFixed(2)} V` : '—' },
      { k: 'intensidade',   v: `${iPct} %`, c: Q.field },
      { k: 'elétrons/s',    v: emits ? `${(iPct * 0.26).toFixed(0)}` : '0', c: Q.field },
    ], { title: 'K_max = hf − φ', anchor: 'right', accent: A, minWidth: 210 })

    if (compact) return

    // ══ K_max × f — A RETA DE MILLIKAN ═══════════════════════════
    const gx = stageW + 46
    const gw = w - gx - 26

    caption(ctx, 'K_max × f  —  a reta de inclinação h', gx, 26, A)

    const line = []
    for (let i = 0; i <= 100; i++) {
      const ff = 3e14 + (i / 100) * 1.5e15
      line.push([ff / 1e14, H_EV * ff - phi])
    }
    // só a parte física (K ≥ 0)
    const phys = line.filter(pt => pt[1] >= 0)

    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.32 }, {
      xDomain: [3, 18], yDomain: [-2, 4],
      xTicks: 5, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'frequência (×10¹⁴ Hz)', yLabel: 'K_max (eV)',
      rules: [
        { y: 0, color: hexA(C.ink, 0.3) },
        { x: f0 / 1e14, color: Q.warn, label: 'f₀' },
      ],
      series: [
        { points: line, color: hexA(C.ink, 0.15), width: 1.2, dash: [3, 3] },
        { points: phys, color: A, width: 2 },
      ],
      markers: [{ x: f / 1e14, y: Kmax, color: emits ? Q.potential : Q.danger, r: 4.5 }],
    })
    text(ctx, `inclinação = h = 4,136e−15 eV·s  ·  intercepto = −φ`, gx, h * 0.32 + 58,
      { size: 8.5, color: C.muted })

    // ══ CORRENTE × INTENSIDADE ═══════════════════════════════════
    const py = h * 0.32 + 92
    const ph = h - py - 68

    caption(ctx, 'A intensidade muda a CORRENTE, não a energia', gx, py - 10, Q.field)

    const curr = []
    const energ = []
    for (let i = 0; i <= 100; i++) {
      curr.push([i, emits ? i / 100 : 0])
      energ.push([i, emits ? clamp(Kmax / 4, 0, 1) : 0])   // constante!
    }

    plot(ctx, { x: gx, y: py, w: gw, h: ph }, {
      xDomain: [0, 100], yDomain: [0, 1.1],
      xTicks: 4, yTicks: 2,
      fmtX: q => `${q.toFixed(0)}%`, fmtY: () => '',
      xLabel: 'intensidade luminosa',
      series: [
        { points: curr,  color: Q.field, width: 2, fill: true },
        { points: energ, color: Q.potential, width: 2, dash: [5, 3] },
      ],
      markers: [
        { x: iPct, y: emits ? iPct / 100 : 0, color: Q.field, r: 4 },
        { x: iPct, y: emits ? clamp(Kmax / 4, 0, 1) : 0, color: Q.potential, r: 4 },
      ],
    })

    let ty = h - 46
    ctx.fillStyle = Q.field
    ctx.fillRect(gx, ty - 5, 9, 2.5)
    text(ctx, 'corrente (nº de elétrons) — SOBE', gx + 15, ty, { size: 8.5, color: C.dim })
    ty += 14
    ctx.fillStyle = Q.potential
    ctx.fillRect(gx, ty - 5, 5, 2.5)
    ctx.fillRect(gx + 7, ty - 5, 3, 2.5)
    text(ctx, 'K_max (energia de cada um) — RETA', gx + 15, ty,
      { size: 8.5, weight: 700, color: Q.potential })
    ty += 14
    text(ctx, 'a onda clássica errava exatamente aqui.', gx, ty,
      { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

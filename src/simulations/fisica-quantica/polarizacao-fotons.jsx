// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Polarização, fóton a fóton
//
// Um polarizador só deixa passar luz que vibra ao longo do seu eixo. Com
// muita luz vale a lei de Malus:  I = I₀·cos²θ.  Com UM fóton de cada
// vez não existe "meio fóton": ele passa inteiro ou é absorvido, e
//
//   P(passar) = cos²θ        θ = ângulo entre a polarização e o eixo
//
// Quem passa sai polarizado NO EIXO do polarizador — a medida refaz o
// estado. Daí o paradoxo dos três polarizadores:
//
//   0° e 90° cruzados                →  não passa nada
//   0°, 45° no meio, 90°             →  passa ¼ do que saiu do primeiro
//
// Colocar um obstáculo a mais AUMENTA a luz. O do meio não "filtra" o
// que já estava a 45°: ele reorienta cada fóton que deixa passar, e um
// fóton a 45° tem 50 % de chance no último.
//
// A fonte é luz comum (sem polarização): metade passa pelo primeiro.
//
// Interação: gire os polarizadores arrastando a ponta do eixo.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, handle,
} from '../engine'

const A = ACCENT['fisica-quantica']
const RAD = Math.PI / 180
const FLIGHT = 2.6                         // s — da fonte ao detector
const U = [0.24, 0.50, 0.76]               // posição dos três polarizadores no percurso
const cos2 = d => Math.cos(d * RAD) ** 2

const read = p => ({
  a2: clamp(p.angulo2 ?? 45, 0, 180),
  a3: clamp(p.angulo3 ?? 90, 0, 180),
  mid: (p.meio ?? 0) > 0,
  rate: p.taxa ?? 40,
})

function geom(view) {
  const { w, h } = view
  const compact = w < 700
  const stageW = compact ? w : w * 0.66
  const cy = h * 0.38
  const xSrc = 34, xDet = stageW - 34
  const X = u => xSrc + u * (xDet - xSrc)
  const R = clamp(h * 0.115, 26, 46)
  return { compact, stageW, cy, xSrc, xDet, X, R }
}

/** Frações previstas depois de cada estágio (em relação ao emitido). */
function predicted(a2, a3, mid) {
  const f1 = 0.5
  const f2 = mid ? f1 * cos2(a2) : f1
  const f3 = mid ? f2 * cos2(a3 - a2) : f1 * cos2(a3)
  return [f1, f2, f3]
}

export default function PolarizacaoCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => ({
    photons: [], spawn: 0,
    done: 0,                         // fótons que já foram absorvidos ou detectados
    pass: [0, 0, 0],                 // desses, quantos passaram do 1º, do 2º e do 3º
    flashes: [],                     // { i, y, t } absorções recentes
    t: 0,
    key: '',
    drag: null, hover: null, moved: false,
  }), [])

  const step = useCallback((s, dt, p) => {
    const { a2, a3, mid, rate } = read(p)
    const key = `${a2}|${a3}|${mid}`
    if (key !== s.key) {             // mudou o arranjo: zera a contagem
      s.key = key; s.done = 0; s.pass = [0, 0, 0]; s.photons = []; s.flashes = []
    }
    s.t += dt
    s.spawn += dt * rate
    while (s.spawn >= 1) {
      s.spawn -= 1
      // luz comum: cada fóton chega com uma polarização qualquer
      s.photons.push({ u: 0, pol: Math.random() * 180, y: (Math.random() - 0.5) * 16, stage: 0 })
    }

    const axes = [0, a2, a3]
    const alive = []
    for (const ph of s.photons) {
      ph.u += dt / FLIGHT
      // Só entra na estatística quem já teve seu destino (absorvido ou
      // detectado): contar os que ainda estão voando puxaria as frações
      // para baixo.
      let absorbedAt = -1
      for (let i = ph.stage; i < 3 && ph.u >= U[i]; i++) {
        ph.stage = i + 1
        if (i === 1 && !mid) continue                             // polarizador do meio ausente
        if (Math.random() < cos2(ph.pol - axes[i])) {
          ph.pol = axes[i]                                        // passou: sai no eixo do polarizador
        } else {
          s.flashes.push({ i, y: ph.y, t: s.t })
          absorbedAt = i
          break
        }
      }
      if (absorbedAt >= 0) {
        s.done++
        for (let k = 0; k < absorbedAt; k++) s.pass[k]++
        continue
      }
      if (ph.u >= 1) { s.done++; s.pass[0]++; s.pass[1]++; s.pass[2]++; continue }
      alive.push(ph)
    }
    s.photons = alive
    while (s.flashes.length && s.t - s.flashes[0].t > 0.35) s.flashes.shift()
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    const { compact, stageW, cy, xSrc, xDet, X, R } = geom(view)
    const { a2, a3, mid } = read(p)
    const axes = [0, a2, a3]
    const pred = predicted(a2, a3, mid)

    // ── Fonte e detector ──────────────────────────────────────────
    ctx.strokeStyle = C.faint; ctx.lineWidth = 1.4
    ctx.strokeRect(xSrc - 20.5, cy - 14.5, 22, 29)
    text(ctx, 'luz comum', xSrc - 9, cy + 32, { size: 9, color: C.muted, align: 'center' })
    ctx.strokeStyle = C.ink; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(xDet, cy - 22); ctx.lineTo(xDet, cy + 22); ctx.stroke()
    text(ctx, 'detector', xDet, cy + 40, { size: 9, color: C.muted, align: 'center' })
    ctx.strokeStyle = hexA(C.ink, 0.1); ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(xSrc + 2, cy); ctx.lineTo(xDet, cy); ctx.stroke()

    // ── Polarizadores ─────────────────────────────────────────────
    const NAMES = ['1º', '2º (meio)', '3º']
    for (let i = 0; i < 3; i++) {
      const x = X(U[i])
      const off = i === 1 && !mid
      const th = axes[i] * RAD
      const ax = Math.sin(th), ay = -Math.cos(th)       // 0° = vertical
      const col = off ? C.faint : i === 0 ? C.ink : Q.warn

      ctx.strokeStyle = col; ctx.lineWidth = 1.4
      ctx.setLineDash(off ? [4, 4] : [])
      ctx.fillStyle = off ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.05)'
      ctx.beginPath(); ctx.arc(x, cy, R, 0, Math.PI * 2); ctx.fill(); ctx.stroke()
      ctx.setLineDash([])
      if (off) {
        text(ctx, 'retirado', x, cy + R + 18, { size: 9, color: C.muted, align: 'center' })
        continue
      }
      // grade: linhas paralelas ao eixo de transmissão
      ctx.save()
      ctx.beginPath(); ctx.arc(x, cy, R - 1, 0, Math.PI * 2); ctx.clip()
      ctx.strokeStyle = hexA(col === C.ink ? '#ffffff' : Q.warn, 0.28); ctx.lineWidth = 1
      for (let k = -4; k <= 4; k++) {
        if (k === 0) continue
        const ox = -ay * k * (R / 4.5), oy = ax * k * (R / 4.5)   // deslocamento perpendicular
        ctx.beginPath(); ctx.moveTo(x + ox - ax * R, cy + oy - ay * R); ctx.lineTo(x + ox + ax * R, cy + oy + ay * R); ctx.stroke()
      }
      ctx.restore()
      ctx.strokeStyle = col; ctx.lineWidth = 2.4
      ctx.beginPath(); ctx.moveTo(x - ax * R, cy - ay * R); ctx.lineTo(x + ax * R, cy + ay * R); ctx.stroke()
      if (i > 0) handle(ctx, x + ax * R, cy + ay * R, 6, s.hover === i || s.drag === i, Q.warn)
      text(ctx, `${NAMES[i]}: ${axes[i].toFixed(0)}°`, x, cy + R + 18, { size: 9.5, weight: 700, color: col, align: 'center' })
    }

    // clarão onde um fóton foi absorvido
    for (const fl of s.flashes) {
      const k = 1 - (s.t - fl.t) / 0.35
      ctx.fillStyle = hexA(Q.danger, 0.9 * k)
      ctx.fillRect(X(U[fl.i]) - 3, cy + fl.y - 3, 6, 6)
    }

    // ── Fótons: um tracinho na direção da polarização ─────────────
    ctx.lineWidth = 2; ctx.lineCap = 'round'
    for (const ph of s.photons) {
      const x = X(ph.u), y = cy + ph.y
      const th = ph.pol * RAD
      const dx = Math.sin(th) * 5, dy = -Math.cos(th) * 5
      ctx.strokeStyle = ph.stage === 0 ? hexA(C.ink, 0.55) : A
      ctx.beginPath(); ctx.moveTo(x - dx, y - dy); ctx.lineTo(x + dx, y + dy); ctx.stroke()
    }
    ctx.lineCap = 'butt'

    const dark = pred[2] < 0.005
    caption(ctx, dark ? 'polarizadores cruzados: nenhum fóton chega ao detector'
      : mid ? 'o polarizador do meio reorienta os fótons que deixa passar'
            : 'cada fóton passa inteiro ou é absorvido — nunca pela metade', 16, 24, dark ? Q.danger : A)
    if (!s.moved) caption(ctx, mid ? 'gire os polarizadores arrastando a ponta do eixo'
      : 'gire o último arrastando a ponta do eixo, ou coloque o do meio', 16, 44, C.dim)

    // ── Quantos sobrevivem a cada etapa ───────────────────────────
    const N0 = s.done
    const labels = ['contados', 'após o 1º', mid ? 'após o 2º' : '(sem o 2º)', 'detectados']
    const fr = [1, ...pred]
    const bx0 = 30, bwAll = stageW - 60, by0 = h * 0.70, bhMax = h * 0.17
    const colW = bwAll / 4
    for (let i = 0; i < 4; i++) {
      const x = bx0 + i * colW + 10, bw = colW - 20
      const meas = N0 > 0 ? (i === 0 ? 1 : s.pass[i - 1] / N0) : 0
      ctx.fillStyle = 'rgba(255,255,255,0.07)'; ctx.fillRect(x, by0, bw, bhMax)
      ctx.fillStyle = i === 3 ? Q.positive : hexA(A, 0.85)
      ctx.fillRect(x, by0 + bhMax * (1 - meas), bw, bhMax * meas)
      // traço da previsão
      ctx.fillStyle = C.ink; ctx.fillRect(x - 3, by0 + bhMax * (1 - fr[i]) - 1, bw + 6, 2)
      text(ctx, labels[i], x + bw / 2, by0 + bhMax + 15, { size: 9, color: C.dim, align: 'center' })
      text(ctx, `${(meas * 100).toFixed(0)} %`, x + bw / 2, by0 - 6, { size: 9.5, weight: 700, color: C.ink, align: 'center' })
    }
    text(ctx, 'traço branco: previsão', bx0 + bwAll, h - 12, { size: 8.5, color: C.muted, align: 'right' })

    // ── Leituras ──────────────────────────────────────────────────
    const fDet = N0 > 0 ? s.pass[2] / N0 : 0
    readout(ctx, w - 14, 14, [
      { k: 'eixo do 1º', v: '0° (vertical)' },
      { k: 'eixo do 2º (meio)', v: mid ? `${a2.toFixed(0)}°` : 'retirado', c: mid ? Q.warn : undefined },
      { k: 'eixo do 3º', v: `${a3.toFixed(0)}°`, c: Q.warn },
      { k: 'passam pelo 1º', v: '50,0 %' },
      { k: 'passam pelo 2º', v: mid ? `${(cos2(a2) * 100).toFixed(1)} % dos que chegam` : '—' },
      { k: 'passam pelo 3º', v: `${(cos2(mid ? a3 - a2 : a3) * 100).toFixed(1)} % dos que chegam` },
      { k: 'previsto no detector', v: `${(pred[2] * 100).toFixed(1)} %`, c: Q.positive },
      { k: 'medido no detector', v: N0 > 0 ? `${(fDet * 100).toFixed(1)} %` : '—', c: Q.positive },
      { k: 'fótons contados', v: `${N0}` },
    ], { title: 'P(passar) = cos²θ', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ Fração detectada × ângulo ════════════════════════════════
    const px = stageW + 46
    const pw = w - px - 26
    const py = 44, ph2 = h * 0.42
    const curve = []
    for (let d = 0; d <= 180; d += 2) curve.push([d, mid ? predicted(d, a3, true)[2] : predicted(0, d, false)[2]])
    caption(ctx, mid ? 'detectado conforme o ângulo do meio' : 'lei de Malus: detectado × ângulo do 3º', px, 26, Q.positive)
    plot(ctx, { x: px, y: py, w: pw, h: ph2 }, {
      xDomain: [0, 180], yDomain: [0, 0.55],
      xTicks: 4, yTicks: 2,
      fmtX: q => `${q.toFixed(0)}°`, fmtY: q => `${(q * 100).toFixed(0)} %`,
      xLabel: mid ? 'ângulo do 2º' : 'ângulo do 3º',
      rules: mid ? [{ y: 0.5 * cos2(a3), color: hexA(Q.danger, 0.8), label: 'sem o do meio' }] : [],
      series: [{ points: curve, color: hexA(Q.positive, 0.9), width: 2, fill: true }],
      markers: [
        { x: mid ? a2 : a3, y: pred[2], color: C.ink, r: 4 },
        ...(N0 >= 30 ? [{ x: mid ? a2 : a3, y: fDet, color: Q.warn, r: 3.5 }] : []),
      ],
    })
    let ny = py + ph2 + 48
    for (const line of mid
      ? ['Acima da linha vermelha, pôr um', 'polarizador a mais deixa passar', 'MAIS luz do que sem ele.']
      : ['Com os eixos cruzados (90°) nada', 'passa. Coloque o do meio e veja', 'a luz voltar.']) {
      text(ctx, line, px, ny, { size: 9, color: C.muted }); ny += 14
    }
  }, [])

  // Girar o 2º ou o 3º polarizador arrastando a ponta do eixo.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { cy, X, R } = geom(view)
    const { a2, a3, mid } = read(p)
    const tip = (i, deg) => [X(U[i]) + Math.sin(deg * RAD) * R, cy - Math.cos(deg * RAD) * R]
    const near = (i, deg) => {
      // o eixo não tem sentido: as duas pontas servem
      const [x, y] = tip(i, deg), [x2, y2] = tip(i, deg + 180)
      return Math.min(Math.hypot(pt.x - x, pt.y - y), Math.hypot(pt.x - x2, pt.y - y2)) < 22
    }
    const over = near(2, a3) ? 2 : (mid && near(1, a2)) ? 1 : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag) {
      let deg = Math.atan2(pt.x - X(U[s.drag]), -(pt.y - cy)) / RAD      // −180…180, 0 = para cima
      deg = ((deg % 180) + 180) % 180                                    // eixo: 0…180
      view.setParams?.({ [s.drag === 1 ? 'angulo2' : 'angulo3']: deg })
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

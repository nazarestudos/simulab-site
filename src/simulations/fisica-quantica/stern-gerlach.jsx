// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Experimento de Stern–Gerlach (spin ½)
//
// Um ímã de campo não uniforme empurra cada átomo de prata conforme a
// componente do seu spin ao longo do eixo do ímã. Classicamente o feixe
// deveria se abrir numa mancha contínua (o "ímãzinho" de cada átomo
// aponta para qualquer lado). O que se vê são DUAS manchas: o spin, medido
// num eixo, só dá +ħ/2 ou −ħ/2.
//
// Dois ímãs em sequência mostram o resto da história. O primeiro
// separa e deixa passar só os átomos "para cima" no eixo z. O segundo
// mede num eixo inclinado de θ:
//
//   P(↑) = cos²(θ/2)        P(↓) = sen²(θ/2)
//
// θ = 0° → sempre ↑.  θ = 180° → sempre ↓.  θ = 90° → meio a meio,
// puro acaso: saber o spin em z não diz NADA sobre o spin em x.
//
// Sem o primeiro ímã, o feixe do forno não tem direção preferida e a
// divisão é sempre 50/50, qualquer que seja θ.
//
// Interação: o eixo do segundo ímã pode ser girado arrastando a ponta
// da seta no mostrador.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, arrow, hexA, clamp, handle, rng, gauss,
} from '../engine'

const A = ACCENT['fisica-quantica']
const RAD = Math.PI / 180
const FLIGHT = 2.4          // s — do forno à tela
const U_SG1 = 0.22          // fração do percurso em que fica o 1º ímã
const U_SG2 = 0.52          // idem, 2º ímã
const MAX_HITS = 700

const noise = rng(4242)

function geom(view) {
  const { w, h } = view
  const compact = w < 700
  const stageW = compact ? w : w * 0.68
  const cy = h * 0.42
  const xOven = 34
  const SR = clamp(h * 0.14, 34, 56)           // raio da tela
  const xScreen = stageW - SR - 18
  const X = u => xOven + u * (xScreen - xOven)
  const R = clamp(h * 0.11, 26, 44)            // raio do mostrador do 2º ímã
  return { compact, stageW, cy, xOven, xScreen, X, R, SR, xd: X(U_SG2) }
}

const readAngle = p => clamp(p.angulo ?? 60, 0, 180)

export default function SternGerlachCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => ({
    atoms: [],            // { u, firstUp, up, jx, jy }
    spawn: 0,
    up: 0, down: 0,
    hits: [],             // { dx, dy, up } em relação ao centro da tela
    theta: readAngle(p),
    filter: (p.filtro ?? 1) > 0,
    drag: false, hover: false, moved: false,
  }), [])

  const step = useCallback((s, dt, p) => {
    const theta = readAngle(p)
    const filter = (p.filtro ?? 1) > 0
    // mudar o experimento zera a contagem
    if (theta !== s.theta || filter !== s.filter) {
      s.theta = theta; s.filter = filter
      s.up = 0; s.down = 0; s.hits = []; s.atoms = []
    }

    s.spawn += dt * (p.taxa ?? 25)
    while (s.spawn >= 1) {
      s.spawn -= 1
      s.atoms.push({ u: 0, firstUp: Math.random() < 0.5, up: null, jx: gauss(noise), jy: gauss(noise) })
    }

    const pUp = filter ? Math.cos((theta * RAD) / 2) ** 2 : 0.5
    for (const a of s.atoms) {
      const before = a.u
      a.u += dt / FLIGHT
      // 2º ímã: aqui o resultado é sorteado, e só aqui
      if (before < U_SG2 && a.u >= U_SG2) a.up = Math.random() < pUp
    }

    const kept = []
    for (const a of s.atoms) {
      // com o filtro, os "para baixo" do 1º ímã param no anteparo
      if (filter && !a.firstUp && a.u > U_SG1 + 0.12) continue
      if (a.u >= 1) {
        if (a.up) s.up++; else s.down++
        s.hits.push({ sign: a.up ? 1 : -1, jx: a.jx, jy: a.jy })
        if (s.hits.length > MAX_HITS) s.hits.shift()
        continue
      }
      kept.push(a)
    }
    s.atoms = kept
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    const { compact, stageW, cy, xOven, xScreen, X, R, SR, xd } = geom(view)
    const theta = readAngle(p)
    const th = theta * RAD
    const filter = (p.filtro ?? 1) > 0
    const ax = Math.sin(th), ay = -Math.cos(th)         // eixo do 2º ímã (θ = 0 aponta para cima)
    const pUp = filter ? Math.cos(th / 2) ** 2 : 0.5
    const total = s.up + s.down
    const SPREAD = SR * 0.45                            // separação das manchas na tela

    // ── Forno ─────────────────────────────────────────────────────
    ctx.strokeStyle = C.faint; ctx.lineWidth = 1.4
    ctx.strokeRect(xOven - 22.5, cy - 16.5, 26, 33)
    text(ctx, 'forno', xOven - 9, cy + 34, { size: 9, color: C.muted, align: 'center' })

    // ── 1º ímã (eixo z) ───────────────────────────────────────────
    const x1 = X(U_SG1)
    const boxW = 46, boxH = clamp(h * 0.26, 70, 104)
    ctx.strokeStyle = filter ? hexA(A, 0.9) : C.faint
    ctx.fillStyle = filter ? hexA(A, 0.10) : 'rgba(255,255,255,0.03)'
    ctx.lineWidth = 1.4
    ctx.fillRect(x1 - boxW / 2, cy - boxH / 2, boxW, boxH)
    ctx.strokeRect(x1 - boxW / 2 + 0.5, cy - boxH / 2 + 0.5, boxW, boxH)
    text(ctx, 'N', x1, cy - boxH / 2 + 15, { size: 10, weight: 700, color: filter ? A : C.muted, align: 'center' })
    text(ctx, 'S', x1, cy + boxH / 2 - 7, { size: 10, weight: 700, color: filter ? A : C.muted, align: 'center' })
    text(ctx, filter ? '1º ímã: eixo z' : '1º ímã desligado', x1, cy + boxH / 2 + 18, { size: 9, color: filter ? C.dim : C.muted, align: 'center' })

    // anteparo que barra os "para baixo"
    const xStop = X(U_SG1 + 0.12), yStop = cy + boxH * 0.42
    if (filter) {
      ctx.fillStyle = hexA(C.ink, 0.7)
      ctx.fillRect(xStop - 3, yStop - 12, 6, 24)
      text(ctx, 'barrados', xStop + 10, yStop + 4, { size: 8.5, color: C.muted })
    }

    // ── 2º ímã: mostrador com o eixo de medida ────────────────────
    ctx.strokeStyle = hexA(A, 0.9); ctx.lineWidth = 1.4
    ctx.fillStyle = hexA(A, 0.08)
    ctx.beginPath(); ctx.arc(xd, cy, R, 0, Math.PI * 2); ctx.fill(); ctx.stroke()
    // referência: o eixo z
    ctx.setLineDash([3, 4]); ctx.strokeStyle = C.faint; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(xd, cy - R - 10); ctx.lineTo(xd, cy + R + 10); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, 'z', xd + 6, cy - R - 12, { size: 9, color: C.muted })
    // arco do ângulo
    if (theta > 0.5) {
      ctx.strokeStyle = hexA(Q.warn, 0.9); ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.arc(xd, cy, R * 0.45, -Math.PI / 2, -Math.PI / 2 + th); ctx.stroke()
    }
    const tipX = xd + ax * (R - 6), tipY = cy + ay * (R - 6)
    arrow(ctx, xd - ax * (R - 6), cy - ay * (R - 6), tipX, tipY, { color: Q.warn, width: 2.2 })
    handle(ctx, tipX, tipY, 7, s.hover || s.drag, Q.warn)
    text(ctx, `2º ímã: θ = ${theta.toFixed(0)}°`, xd, cy + R + 26, { size: 9.5, weight: 700, color: Q.warn, align: 'center' })

    // ── Tela, vista de frente ─────────────────────────────────────
    ctx.strokeStyle = C.line; ctx.lineWidth = 1.2
    ctx.fillStyle = 'rgba(255,255,255,0.03)'
    ctx.beginPath(); ctx.arc(xScreen, cy, SR, 0, Math.PI * 2); ctx.fill(); ctx.stroke()
    ctx.setLineDash([3, 4]); ctx.strokeStyle = C.faint; ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(xScreen - ax * SR, cy - ay * SR); ctx.lineTo(xScreen + ax * SR, cy + ay * SR)
    ctx.stroke(); ctx.setLineDash([])
    text(ctx, '↑', xScreen + ax * (SR + 12), cy + ay * (SR + 12) + 4, { size: 11, weight: 700, color: Q.positive, align: 'center' })
    text(ctx, '↓', xScreen - ax * (SR + 12), cy - ay * (SR + 12) + 4, { size: 11, weight: 700, color: Q.negative, align: 'center' })
    text(ctx, 'tela (de frente)', xScreen, cy + SR + 30, { size: 9, color: C.muted, align: 'center' })

    for (const hit of s.hits) {
      ctx.fillStyle = hexA(hit.sign > 0 ? Q.positive : Q.negative, 0.75)
      ctx.fillRect(xScreen + hit.sign * ax * SPREAD + hit.jx * 5 - 1.2, cy + hit.sign * ay * SPREAD + hit.jy * 5 - 1.2, 2.4, 2.4)
    }

    // ── Átomos em voo ─────────────────────────────────────────────
    ctx.strokeStyle = hexA(C.ink, 0.12); ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(xOven + 4, cy); ctx.lineTo(xd - R, cy); ctx.stroke()

    for (const a of s.atoms) {
      let x = X(a.u), y = cy
      let col = hexA(C.ink, 0.85)
      if (filter && a.u > U_SG1) {
        if (!a.firstUp) {                 // desviado para o anteparo
          const k = clamp((a.u - U_SG1) / 0.12, 0, 1)
          y = cy + k * (yStop - cy)
          col = hexA(Q.negative, 0.8)
        } else col = Q.positive           // já "para cima" em z
      }
      if (a.u > U_SG2 && a.up !== null) {
        const k = (a.u - U_SG2) / (1 - U_SG2)
        const sign = a.up ? 1 : -1
        x = xd + k * (xScreen + sign * ax * SPREAD + a.jx * 5 - xd)
        y = cy + k * (cy + sign * ay * SPREAD + a.jy * 5 - cy)
        col = a.up ? Q.positive : Q.negative
      }
      ctx.fillStyle = col
      ctx.fillRect(x - 1.8, y - 1.8, 3.6, 3.6)
    }

    caption(ctx, 'só existem dois resultados — nunca um valor intermediário', 16, 24, A)
    if (!s.moved) caption(ctx, 'gire o segundo ímã arrastando a ponta da seta', 16, 44, C.dim)

    // contagem em barras sob o aparato
    const by = h * 0.80, bw = stageW - 60
    const fUp = total > 0 ? s.up / total : 0
    ctx.fillStyle = 'rgba(255,255,255,0.08)'; ctx.fillRect(30, by, bw, 14)
    if (total > 0) {
      ctx.fillStyle = Q.positive; ctx.fillRect(30, by, bw * fUp, 14)
      ctx.fillStyle = Q.negative; ctx.fillRect(30 + bw * fUp, by, bw * (1 - fUp), 14)
    }
    // marca da previsão
    ctx.fillStyle = C.ink; ctx.fillRect(30 + bw * pUp - 1, by - 5, 2, 24)
    text(ctx, `↑ ${s.up}`, 30, by + 32, { size: 10, weight: 700, color: Q.positive })
    text(ctx, `↓ ${s.down}`, 30 + bw, by + 32, { size: 10, weight: 700, color: Q.negative, align: 'right' })
    text(ctx, 'traço branco = previsão', 30 + bw / 2, by + 32, { size: 8.5, color: C.muted, align: 'center' })

    // ── Leituras ──────────────────────────────────────────────────
    const err = total > 0 ? Math.sqrt((pUp * (1 - pUp)) / total) : 0
    readout(ctx, w - 14, 14, [
      { k: 'feixe que chega ao 2º ímã', v: filter ? 'spin ↑ em z' : 'sem direção preferida' },
      { k: 'θ  eixo do 2º ímã', v: `${theta.toFixed(0)}°`, c: Q.warn },
      { k: 'P(↑) previsto', v: `${(pUp * 100).toFixed(1)} %`, c: Q.positive },
      { k: 'P(↓) previsto', v: `${((1 - pUp) * 100).toFixed(1)} %`, c: Q.negative },
      { k: 'contados ↑', v: `${s.up}`, c: Q.positive },
      { k: 'contados ↓', v: `${s.down}`, c: Q.negative },
      { k: 'fração ↑ medida', v: total > 0 ? `${(fUp * 100).toFixed(1)} %` : '—' },
      { k: 'margem do acaso (±)', v: total > 0 ? `${(err * 100).toFixed(1)} %` : '—' },
    ], { title: filter ? 'P(↑) = cos²(θ/2)' : 'feixe não polarizado: sempre 50 %', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ P(↑) × θ ═════════════════════════════════════════════════
    const px = stageW + 46
    const pw = w - px - 26
    const py = 44, ph = h * 0.44
    caption(ctx, 'chance de sair ↑', px, 26, Q.positive)

    const curve = []
    for (let d = 0; d <= 180; d += 3) curve.push([d, filter ? Math.cos((d * RAD) / 2) ** 2 : 0.5])
    plot(ctx, { x: px, y: py, w: pw, h: ph }, {
      xDomain: [0, 180], yDomain: [0, 1.05],
      xTicks: 4, yTicks: 2,
      fmtX: q => `${q.toFixed(0)}°`, fmtY: q => q.toFixed(1),
      xLabel: 'θ', yLabel: 'P(↑)',
      rules: [{ y: 0.5, color: C.faint }],
      series: [{ points: curve, color: hexA(Q.positive, 0.9), width: 2 }],
      markers: [
        { x: theta, y: pUp, color: C.ink, r: 4 },
        ...(total >= 10 ? [{ x: theta, y: fUp, color: Q.warn, r: 3.5 }] : []),
      ],
    })

    let ny = py + ph + 50
    for (const line of filter
      ? ['branco: a previsão', 'amarelo: o que foi contado', '', 'A 90° é puro acaso: saber', 'o spin num eixo apaga a', 'informação sobre o outro.']
      : ['Sem o primeiro ímã, girar', 'o segundo não muda nada:', 'metade sobe, metade desce.']) {
      if (line) text(ctx, line, px, ny, { size: 9, color: C.muted })
      ny += 14
    }
  }, [])

  // Girar o eixo do 2º ímã arrastando a ponta da seta.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { cy, xd, R } = geom(view)
    const th = readAngle(p) * RAD
    const tipX = xd + Math.sin(th) * (R - 6), tipY = cy - Math.cos(th) * (R - 6)
    const over = Math.hypot(pt.x - tipX, pt.y - tipY) < 24

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = false
    if (s.drag) {
      // ângulo medido a partir de z (para cima); os dois lados valem
      const deg = Math.abs(Math.atan2(pt.x - xd, -(pt.y - cy))) / RAD
      view.setParams?.({ angulo: clamp(deg, 0, 180) })
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

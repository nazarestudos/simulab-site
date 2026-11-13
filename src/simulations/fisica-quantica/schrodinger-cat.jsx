// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — O Gato de Schrödinger
//
// Primeiro, o que quase todo mundo erra: Schrödinger criou o gato em 1935
// para RIDICULARIZAR a interpretação de Copenhague, não para defendê-la.
// Ele achava absurdo que um gato pudesse estar vivo e morto ao mesmo
// tempo — e o absurdo era exatamente o argumento.
//
// O átomo, esse sim, fica em superposição de verdade:
//
//   |ψ⟩ = α|intacto⟩ + β|decaído⟩       |α|² + |β|² = 1
//   |α|² = e^(−λt)                       ← lei do decaimento radioativo
//   λ = ln2 / t½
//
// O decaimento é o acaso mais puro que existe. Nada dentro do núcleo
// "conta os segundos". Não há causa, não há gatilho — só probabilidade.
//
// E A DECOERÊNCIA é a resposta moderna ao paradoxo. Um gato tem ~10²⁶
// partículas, todas trocando fótons e colisões com o ambiente. Cada
// interação dessas MEDE o sistema. O tempo de decoerência de um objeto
// macroscópico é da ordem de 10⁻²⁰ s — inimaginavelmente mais rápido do
// que qualquer coisa que se possa observar.
//
// Ou seja: o gato NUNCA chega a estar em superposição. Não porque a
// mecânica quântica falhe nele, mas porque o ambiente o mede
// continuamente. O paradoxo se dissolve — o gato já estava vivo ou morto
// muito antes de alguém abrir a caixa.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp, rng, sci,
} from '../engine'

const A = ACCENT['fisica-quantica']

const RUN_TIME = 12       // s de "experimento" antes de abrir a caixa

export default function SchrodingerCatCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    t: 0,
    decayed: false,
    decayT: null,
    opened: false,
    alive: null,
    trials: 0,
    deadCount: 0,
    hist: [],
    rand: rng(1935),
    blink: 0,
  }), [])

  const step = useCallback((s, dt, p) => {
    const rate = p.decayRate ?? 50
    // Meia-vida: slider 1–99 % → t½ entre 20 s e 1 s
    const halfLife = 20 - (rate / 100) * 19
    const lambda = Math.log(2) / halfLife

    s.t += dt
    s.blink += dt

    // ── O decaimento: um sorteio a cada instante, sem memória ────
    // P(decair em dt) = λ·dt. O núcleo não "envelhece".
    if (!s.decayed) {
      if (Math.random() < lambda * dt) {
        s.decayed = true
        s.decayT = s.t
      }
    }

    // Ao fim do tempo, abre a caixa
    if (s.t >= RUN_TIME && !s.opened) {
      s.opened = true
      s.alive = !s.decayed
      s.trials++
      if (s.decayed) s.deadCount++
      s.hist.push(s.decayed ? 1 : 0)
      if (s.hist.length > 200) s.hist.shift()
    }

    // Reinicia com um átomo novo
    if (s.t >= RUN_TIME + 2.2) {
      s.t = 0
      s.decayed = false
      s.decayT = null
      s.opened = false
      s.alive = null
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const rate = p.decayRate ?? 50
    const halfLife = 20 - (rate / 100) * 19
    const lambda = Math.log(2) / halfLife

    // Amplitudes da superposição do ÁTOMO
    const pIntact = Math.exp(-lambda * s.t)
    const pDecay = 1 - pIntact
    const alpha = Math.sqrt(pIntact)
    const beta = Math.sqrt(pDecay)

    const compact = w < 760
    const stageW = compact ? w : w * 0.52

    // ══ CAIXA ════════════════════════════════════════════════════
    const bx = 34
    const by = h * 0.16
    const bw = stageW - 80
    const bh = h * 0.52

    ctx.fillStyle = 'rgba(255,255,255,0.015)'
    ctx.fillRect(bx, by, bw, bh)
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.3
    ctx.strokeRect(bx + 0.5, by + 0.5, bw, bh)

    // tampa (abre no fim)
    const lidLift = s.opened ? clamp((s.t - RUN_TIME) * 60, 0, 34) : 0
    ctx.strokeStyle = hexA(C.ink, 0.4)
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(bx - 4, by - lidLift); ctx.lineTo(bx + bw + 4, by - lidLift)
    ctx.stroke()

    // ── O ÁTOMO ──────────────────────────────────────────────────
    const ax = bx + bw * 0.20
    const ay = by + bh * 0.32

    if (!s.opened) {
      // Superposição: as DUAS possibilidades coexistem, com opacidade
      // igual ao módulo da amplitude.
      glow(ctx, ax, ay, 8, A, alpha)
      ctx.strokeStyle = hexA(Q.warn, beta)
      ctx.lineWidth = 1.4
      for (let i = 0; i < 6; i++) {
        const an = (i / 6) * Math.PI * 2 + s.t
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(ax + Math.cos(an) * (12 + beta * 12), ay + Math.sin(an) * (12 + beta * 12))
        ctx.stroke()
      }
    } else {
      glow(ctx, ax, ay, 8, s.decayed ? Q.danger : A, 1)
    }
    text(ctx, 'átomo', ax, ay + 30, { size: 8.5, color: C.muted, align: 'center' })

    // amplitudes
    text(ctx, `α|intacto⟩ + β|decaído⟩`, ax, ay - 26,
      { size: 9, weight: 700, color: A, align: 'center' })
    text(ctx, `${alpha.toFixed(3)}          ${beta.toFixed(3)}`, ax, ay - 12,
      { size: 8.5, color: C.muted, align: 'center' })

    // ── Detector Geiger ──────────────────────────────────────────
    const gx2 = bx + bw * 0.50
    const gy2 = by + bh * 0.32
    const triggered = s.decayed
    ctx.strokeStyle = hexA(triggered ? Q.danger : C.ink, triggered ? 1 : 0.3)
    ctx.lineWidth = 1.3
    ctx.strokeRect(gx2 - 14, gy2 - 12, 28, 24)
    if (triggered && Math.sin(s.blink * 18) > 0) {
      ctx.fillStyle = hexA(Q.danger, 0.5)
      ctx.fillRect(gx2 - 13, gy2 - 11, 26, 22)
    }
    text(ctx, 'Geiger', gx2, gy2 + 26, { size: 8.5, color: C.muted, align: 'center' })

    // ── O GATO ───────────────────────────────────────────────────
    const cx = bx + bw * 0.80
    const cy = by + bh * 0.34

    const drawCat = (x, y, alive, alpha2) => {
      const col = alive ? Q.potential : Q.danger
      ctx.strokeStyle = hexA(col, alpha2)
      ctx.fillStyle = hexA(col, alpha2 * 0.22)
      ctx.lineWidth = 1.5

      // corpo
      ctx.beginPath()
      ctx.ellipse(x, y + 12, 17, 11, 0, 0, Math.PI * 2)
      ctx.fill(); ctx.stroke()
      // cabeça
      ctx.beginPath()
      ctx.arc(x - 6, y - 6, 10, 0, Math.PI * 2)
      ctx.fill(); ctx.stroke()
      // orelhas
      ctx.beginPath()
      ctx.moveTo(x - 13, y - 12); ctx.lineTo(x - 15, y - 20); ctx.lineTo(x - 8, y - 14)
      ctx.moveTo(x - 1, y - 13); ctx.lineTo(x + 2, y - 20); ctx.lineTo(x - 3, y - 15)
      ctx.stroke()
      // cauda
      ctx.beginPath()
      ctx.moveTo(x + 16, y + 12)
      ctx.quadraticCurveTo(x + 30, y + (alive ? -2 : 14), x + 26, y + (alive ? -12 : 18))
      ctx.stroke()
      // olhos
      if (alive) {
        ctx.fillStyle = hexA(col, alpha2)
        ctx.beginPath(); ctx.arc(x - 10, y - 7, 1.6, 0, Math.PI * 2); ctx.fill()
        ctx.beginPath(); ctx.arc(x - 2, y - 7, 1.6, 0, Math.PI * 2); ctx.fill()
      } else {
        // X X
        ctx.strokeStyle = hexA(col, alpha2)
        ctx.lineWidth = 1.3
        for (const ex of [-10, -2]) {
          ctx.beginPath()
          ctx.moveTo(x + ex - 2, y - 9); ctx.lineTo(x + ex + 2, y - 5)
          ctx.moveTo(x + ex + 2, y - 9); ctx.lineTo(x + ex - 2, y - 5)
          ctx.stroke()
        }
      }
    }

    if (!s.opened) {
      // Os dois gatos, sobrepostos — a imagem do paradoxo
      drawCat(cx, cy, true, alpha)
      drawCat(cx, cy, false, beta)
      text(ctx, 'superposição', cx, cy + 40,
        { size: 9, weight: 700, color: Q.warn, align: 'center' })
    } else {
      drawCat(cx, cy, s.alive, 1)
      text(ctx, s.alive ? 'VIVO' : 'MORTO', cx, cy + 40,
        { size: 11, weight: 700, color: s.alive ? Q.potential : Q.danger, align: 'center' })
    }

    // Estado da caixa
    caption(ctx,
      s.opened ? 'CAIXA ABERTA — o resultado é definido'
               : `caixa fechada · t = ${s.t.toFixed(1)} s`,
      34, 24, s.opened ? (s.alive ? Q.potential : Q.danger) : A)

    // ── Barra de probabilidade ───────────────────────────────────
    const pby = by + bh + 26
    const pbw = bw
    ctx.fillStyle = hexA(Q.potential, 0.7)
    ctx.fillRect(bx, pby, pbw * pIntact, 14)
    ctx.fillStyle = hexA(Q.danger, 0.7)
    ctx.fillRect(bx + pbw * pIntact, pby, pbw * pDecay, 14)
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(bx + 0.5, pby + 0.5, pbw, 14)

    text(ctx, `|α|² = ${(pIntact * 100).toFixed(1)} % vivo`, bx, pby + 28,
      { size: 9, weight: 700, color: Q.potential })
    text(ctx, `|β|² = ${(pDecay * 100).toFixed(1)} % morto`, bx + pbw, pby + 28,
      { size: 9, weight: 700, color: Q.danger, align: 'right' })

    // ══ Leituras ═════════════════════════════════════════════════
    // Tempo de decoerência de um objeto macroscópico — a ordem de grandeza
    // que dissolve o paradoxo.
    const tDecoh = 1e-20

    readout(ctx, w - 14, 14, [
      { k: 't½  meia-vida',  v: `${halfLife.toFixed(1)} s`, c: A },
      { k: 'λ  constante',   v: `${lambda.toFixed(4)} s⁻¹` },
      { k: '|α|²  intacto',  v: `${(pIntact * 100).toFixed(1)} %`, c: Q.potential },
      { k: '|β|²  decaído',  v: `${(pDecay * 100).toFixed(1)} %`, c: Q.danger },
      { k: 'ensaios',        v: s.trials },
      { k: 'gatos mortos',   v: s.trials > 0 ? `${s.deadCount} (${(s.deadCount / s.trials * 100).toFixed(0)} %)` : '—',
        c: Q.danger },
      { k: 't decoerência',  v: `${sci(tDecoh, 0)} s`, c: Q.warn },
    ], { title: 'Decaimento radioativo', anchor: 'right', accent: A, minWidth: 208 })

    if (compact) return

    // ══ CURVA DE DECAIMENTO ══════════════════════════════════════
    const gx = stageW + 46
    const gw = w - gx - 26

    caption(ctx, 'Lei do decaimento  |α|² = e^(−λt)', gx, 26, A)

    const curve = []
    for (let i = 0; i <= 120; i++) {
      const tt = (i / 120) * RUN_TIME
      curve.push([tt, Math.exp(-lambda * tt)])
    }

    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.32 }, {
      xDomain: [0, RUN_TIME], yDomain: [0, 1.08],
      xTicks: 4, yTicks: 2,
      fmtX: q => `${q.toFixed(0)}s`, fmtY: q => q.toFixed(1),
      xLabel: 'tempo', yLabel: 'P(intacto)',
      rules: [
        { y: 0.5, color: hexA(Q.warn, 0.6), label: 'meia-vida' },
        { x: Math.min(halfLife, RUN_TIME), color: hexA(Q.warn, 0.5) },
      ],
      series: [{ points: curve, color: A, width: 2, fill: true }],
      markers: [{ x: Math.min(s.t, RUN_TIME), y: pIntact, color: Q.kinetic, r: 4 }],
    })

    // ══ HISTOGRAMA DOS ENSAIOS ═══════════════════════════════════
    let ty = h * 0.32 + 78
    caption(ctx, 'Resultados acumulados', gx, ty - 12, C.muted)

    const hw = gw
    const dead = s.trials > 0 ? s.deadCount / s.trials : 0
    const expected = 1 - Math.exp(-lambda * RUN_TIME)

    ctx.fillStyle = hexA(Q.potential, 0.6)
    ctx.fillRect(gx, ty, hw * (1 - dead), 18)
    ctx.fillStyle = hexA(Q.danger, 0.6)
    ctx.fillRect(gx + hw * (1 - dead), ty, hw * dead, 18)
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(gx + 0.5, ty + 0.5, hw, 18)

    // marca da previsão teórica
    const ex = gx + hw * (1 - expected)
    ctx.strokeStyle = Q.warn
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(ex, ty - 4); ctx.lineTo(ex, ty + 22); ctx.stroke()
    text(ctx, 'previsto', ex, ty - 8, { size: 8, weight: 700, color: Q.warn, align: 'center' })

    ty += 34
    text(ctx, `medido: ${(dead * 100).toFixed(1)} % mortos`, gx, ty,
      { size: 9, weight: 700, color: Q.danger })
    text(ctx, `teoria: ${(expected * 100).toFixed(1)} %`, gx + hw, ty,
      { size: 9, weight: 700, color: Q.warn, align: 'right' })

    // ══ A dissolução do paradoxo ═════════════════════════════════
    ty += 30
    ctx.strokeStyle = C.line
    ctx.beginPath(); ctx.moveTo(gx, ty - 12); ctx.lineTo(gx + gw, ty - 12); ctx.stroke()

    text(ctx, 'Schrödinger inventou o gato para', gx, ty, { size: 8.5, color: C.dim })
    ty += 13
    text(ctx, 'RIDICULARIZAR a ideia — não para', gx, ty, { size: 8.5, color: C.dim })
    ty += 13
    text(ctx, 'defendê-la. E ele tinha razão:', gx, ty, { size: 8.5, color: C.dim })
    ty += 20
    text(ctx, 'um gato tem ~10²⁶ partículas trocando', gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'fótons com o ambiente. Cada troca é uma', gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'medição. A decoerência leva ~10⁻²⁰ s.', gx, ty, { size: 8.5, weight: 700, color: Q.warn })
    ty += 20
    text(ctx, 'O gato NUNCA esteve em superposição.', gx, ty,
      { size: 9, weight: 700, color: Q.potential })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

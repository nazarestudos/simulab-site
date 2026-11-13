// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Emaranhamento e a Desigualdade de Bell
//
// Par no estado singleto:  |ψ⟩ = (|↑↓⟩ − |↓↑⟩)/√2
//
// Cada partícula, sozinha, é 50/50. Mas as medidas são CORRELACIONADAS,
// e a correlação quântica vale
//
//     E(a,b) = −cos(a − b)
//
// Aqui está a questão de US$ 1 milhão: seria possível explicar isso com
// "variáveis ocultas" — as partículas já saírem combinadas de casa?
// John Bell provou que NÃO, e provou com uma DESIGUALDADE testável.
//
// Teste CHSH, com quatro ângulos:
//
//     S = |E(a,b) − E(a,b′) + E(a′,b) + E(a′,b′)|
//
//   · Qualquer teoria realista local  ⟹  S ≤ 2      (limite de Bell)
//   · A mecânica quântica prevê       ⟹  S = 2√2 ≈ 2,828
//
// Os ângulos ótimos (0°, 45°, 22,5°, 67,5°) violam o limite. A simulação
// MEDE pares de verdade, sorteando resultados pela regra de Born, e o S
// medido converge para 2,828 — acima de 2. Aspect (1982) e o experimento
// sem brechas de Hensen (2015) mediram exatamente isso. Rendeu o Nobel
// de Física de 2022.
//
// E O QUE NÃO ACONTECE: nada viaja. Olhe o painel "marginal" — o lado de
// Alice é 50/50 INDEPENDENTEMENTE do que Bob faz. A correlação só aparece
// quando os dois COMPARAM as listas, e essa comparação viaja num
// telefone comum, no máximo à velocidade da luz. O emaranhamento não
// transmite informação.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, glow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-quantica']

const DEG = Math.PI / 180

// Ângulos CHSH ótimos PARA SPIN-1/2, onde E(θ) = −cos θ.
//   a = 0°, a′ = 90°, b = 45°, b′ = 135°
// Com eles:  E(a,b) = E(a′,b) = E(a′,b′) = −√2/2  e  E(a,b′) = +√2/2,
// logo S = |−0,707 − 0,707 − 0,707 − 0,707| = 2√2 ≈ 2,828.
//
// Cuidado: o conjunto (0°, 45°, 22,5°, 67,5°) que circula por aí é o de
// FÓTONS, onde a correlação é cos(2θ) — o fator 2 da polarização. Usá-lo
// aqui daria S = 2,39: ainda violaria Bell, mas ficaria longe do máximo
// quântico, e a simulação estaria mentindo sobre atingir 2√2.
const ANG = { a: 0, a2: 90, b: 45, b2: 135 }
const PAIRS = [['a', 'b'], ['a', 'b2'], ['a2', 'b'], ['a2', 'b2']]

export default function EmaranhamentoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    t: 0,
    flight: 0,
    // contadores por par de ângulos: [++, +-, -+, --]
    counts: Object.fromEntries(PAIRS.map(([x, y]) => [`${x}${y}`, [0, 0, 0, 0]])),
    n: 0,
    aliceUp: 0,      // marginal de Alice
    last: null,
    hist: [],
  }), [])

  const step = useCallback((s, dt, p) => {
    s.t += dt
    s.flight = (s.flight + dt * 0.75) % 1

    // Cada ciclo do "voo" = um par medido
    const rate = 40
    const nNew = Math.max(1, Math.floor(dt * rate))

    for (let i = 0; i < nNew; i++) {
      // Sorteia aleatoriamente qual par de ângulos cada lado usa —
      // é o que fecha a brecha da "escolha livre" no experimento real.
      const [ka, kb] = PAIRS[Math.floor(Math.random() * 4)]
      const theta = (ANG[ka] - ANG[kb]) * DEG

      // Regra de Born para o singleto:
      //   P(mesmo resultado)     = sen²(θ/2)
      //   P(resultados opostos)  = cos²(θ/2)
      const pSame = Math.sin(theta / 2) ** 2

      // Alice: 50/50 sempre (é o marginal — não depende de nada)
      const aUp = Math.random() < 0.5
      const same = Math.random() < pSame
      const bUp = same ? aUp : !aUp

      const key = `${ka}${kb}`
      const idx = (aUp ? 0 : 2) + (bUp ? 0 : 1)
      s.counts[key][idx]++
      s.n++
      if (aUp) s.aliceUp++
      s.last = { ka, kb, aUp, bUp }
    }

    // S medido a cada tanto
    if (s.n > 40 && (s.hist.length === 0 || s.n - s.hist[s.hist.length - 1][0] > 60)) {
      const E = key => {
        const [pp, pm, mp, mm] = s.counts[key]
        const tot = pp + pm + mp + mm
        return tot > 0 ? (pp - pm - mp + mm) / tot : 0
      }
      const S = Math.abs(E('ab') - E('ab2') + E('a2b') + E('a2b2'))
      s.hist.push([s.n, S])
      if (s.hist.length > 300) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const dist = p.distance ?? 50    // ms-luz de separação

    const E = key => {
      const [pp, pm, mp, mm] = s.counts[key]
      const tot = pp + pm + mp + mm
      return tot > 0 ? (pp - pm - mp + mm) / tot : 0
    }
    const Eab = E('ab'), Eab2 = E('ab2'), Ea2b = E('a2b'), Ea2b2 = E('a2b2')
    const S = Math.abs(Eab - Eab2 + Ea2b + Ea2b2)
    const S_QM = 2 * Math.sqrt(2)
    const violated = S > 2 && s.n > 200

    const compact = w < 760
    const stageW = compact ? w : w * 0.50

    // ══ FONTE E OS DOIS DETECTORES ═══════════════════════════════
    const cx = stageW * 0.5
    const cy = h * 0.28
    const spread = stageW * 0.36

    // fonte
    glow(ctx, cx, cy, 5, A, 1)
    text(ctx, 'fonte de pares', cx, cy + 24, { size: 8.5, color: C.muted, align: 'center' })
    text(ctx, '|↑↓⟩ − |↓↑⟩', cx, cy - 16, { size: 9.5, weight: 700, color: A, align: 'center' })

    // partículas voando
    for (const sgn of [-1, 1]) {
      const X = cx + sgn * spread * s.flight
      glow(ctx, X, cy, 3, sgn < 0 ? Q.field : Q.warn, 0.8)
      ctx.strokeStyle = hexA(C.ink, 0.10)
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(cx, cy); ctx.lineTo(cx + sgn * spread, cy)
      ctx.stroke()
    }

    // detectores
    const det = (x, name, col, angle, result) => {
      ctx.strokeStyle = hexA(col, 0.8)
      ctx.lineWidth = 1.4
      ctx.beginPath(); ctx.arc(x, cy, 17, 0, Math.PI * 2); ctx.stroke()
      // eixo do analisador
      const a = angle * DEG
      ctx.strokeStyle = col
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(x - Math.cos(a) * 13, cy + Math.sin(a) * 13)
      ctx.lineTo(x + Math.cos(a) * 13, cy - Math.sin(a) * 13)
      ctx.stroke()

      text(ctx, name, x, cy - 26, { size: 9.5, weight: 700, color: col, align: 'center' })
      text(ctx, `${angle}°`, x, cy + 32, { size: 8.5, color: C.muted, align: 'center' })
      if (result !== null) {
        text(ctx, result ? '↑' : '↓', x, cy + 50,
          { size: 15, weight: 700, color: result ? Q.potential : Q.danger, align: 'center' })
      }
    }
    const L = s.last
    det(cx - spread, 'ALICE', Q.field, L ? ANG[L.ka] : 0, L ? L.aUp : null)
    det(cx + spread, 'BOB', Q.warn, L ? ANG[L.kb] : 22.5, L ? L.bUp : null)

    text(ctx, `separação: ${dist} ms-luz`, cx, h * 0.44,
      { size: 8.5, color: C.muted, align: 'center' })

    // ══ O NÚMERO S ═══════════════════════════════════════════════
    const sy = h * 0.54
    caption(ctx, 'Teste CHSH', 22, sy - 10, A)

    const barW = stageW - 60
    const bx = 22
    const sMax = 3.0

    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(bx, sy, barW, 18)
    ctx.fillStyle = violated ? hexA(Q.potential, 0.85) : hexA(A, 0.6)
    ctx.fillRect(bx, sy, barW * clamp(S / sMax, 0, 1), 18)

    // limite clássico em 2
    const x2 = bx + (2 / sMax) * barW
    ctx.strokeStyle = Q.danger
    ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(x2, sy - 5); ctx.lineTo(x2, sy + 23); ctx.stroke()
    text(ctx, 'limite clássico  S = 2', x2, sy - 9,
      { size: 8.5, weight: 700, color: Q.danger, align: 'center' })

    // previsão quântica 2√2
    const xq = bx + (S_QM / sMax) * barW
    ctx.strokeStyle = Q.potential
    ctx.setLineDash([3, 3])
    ctx.lineWidth = 1.4
    ctx.beginPath(); ctx.moveTo(xq, sy - 5); ctx.lineTo(xq, sy + 23); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, '2√2 ≈ 2,828', xq, sy + 34,
      { size: 8.5, weight: 700, color: Q.potential, align: 'center' })

    text(ctx, `S = ${S.toFixed(3)}`, bx, sy + 48,
      { size: 15, weight: 700, color: violated ? Q.potential : C.dim })

    if (violated) {
      text(ctx, 'DESIGUALDADE DE BELL VIOLADA', bx + 90, sy + 48,
        { size: 9.5, weight: 700, color: Q.potential })
      text(ctx, 'nenhuma variável oculta local explica isso',
        bx, sy + 66, { size: 8.5, color: C.muted })
    } else {
      text(ctx, `coletando pares… (${s.n})`, bx + 90, sy + 48,
        { size: 9, color: C.muted })
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const marginal = s.n > 0 ? (s.aliceUp / s.n) * 100 : 50
    readout(ctx, w - 14, 14, [
      { k: 'pares medidos', v: s.n, c: A },
      { k: 'E(a,b)',    v: Eab.toFixed(3) },
      { k: 'E(a,b′)',   v: Eab2.toFixed(3) },
      { k: 'E(a′,b)',   v: Ea2b.toFixed(3) },
      { k: 'E(a′,b′)',  v: Ea2b2.toFixed(3) },
      { k: 'S  medido', v: S.toFixed(3), c: violated ? Q.potential : C.ink },
      { k: 'S  quântico', v: S_QM.toFixed(3), c: Q.potential },
      { k: 'S  clássico máx.', v: '2,000', c: Q.danger },
      { k: 'marginal de Alice', v: `${marginal.toFixed(1)} % ↑`, c: Q.field },
    ], { title: 'Desigualdade de Bell', anchor: 'right', accent: A, minWidth: 208 })

    if (compact) return

    // ══ CURVA DE CORRELAÇÃO ══════════════════════════════════════
    const gx = stageW + 44
    const gw = w - gx - 26

    caption(ctx, 'Correlação E(θ) = −cos θ', gx, 26, A)

    const qm = [], cl = []
    for (let i = 0; i <= 120; i++) {
      const th = (i / 120) * 360
      qm.push([th, -Math.cos(th * DEG)])
      // Melhor modelo realista local: correlação linear "triangular"
      const t = th % 360
      const lin = t <= 180 ? -1 + (2 * t) / 180 : 3 - (2 * t) / 180
      cl.push([th, lin])
    }

    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.34 }, {
      xDomain: [0, 360], yDomain: [-1.15, 1.15],
      xTicks: 4, yTicks: 4,
      fmtX: q => `${q.toFixed(0)}°`, fmtY: q => q.toFixed(1),
      xLabel: 'ângulo entre analisadores', yLabel: 'correlação',
      rules: [{ y: 0, color: C.faint }],
      series: [
        { points: cl, color: hexA(Q.danger, 0.7), width: 1.5, dash: [4, 3] },
        { points: qm, color: A, width: 2 },
      ],
      markers: PAIRS.map(([ka, kb]) => ({
        x: Math.abs(ANG[ka] - ANG[kb]),
        y: -Math.cos((ANG[ka] - ANG[kb]) * DEG),
        color: Q.kinetic, r: 3.5,
      })),
    })

    let ty = h * 0.34 + 62
    ctx.fillStyle = A
    ctx.fillRect(gx, ty - 5, 9, 2.5)
    text(ctx, 'quântico  −cos θ', gx + 15, ty, { size: 8.5, color: C.dim })
    ty += 14
    ctx.fillStyle = Q.danger
    ctx.fillRect(gx, ty - 5, 9, 2.5)
    text(ctx, 'melhor modelo local possível', gx + 15, ty, { size: 8.5, color: C.dim })

    // ══ CONVERGÊNCIA DE S ════════════════════════════════════════
    const py = h * 0.34 + 96
    const ph = h - py - 66

    caption(ctx, 'S conforme os pares acumulam', gx, py - 10, C.muted)
    plot(ctx, { x: gx, y: py, w: gw, h: ph }, {
      xDomain: [0, Math.max(2000, s.n)], yDomain: [1.4, 3.0],
      xTicks: 3, yTicks: 3,
      fmtX: q => q >= 1000 ? `${(q / 1000).toFixed(0)}k` : q.toFixed(0),
      fmtY: q => q.toFixed(1),
      xLabel: 'pares medidos', yLabel: 'S',
      rules: [
        { y: 2, color: Q.danger, label: 'limite de Bell' },
        { y: S_QM, color: hexA(Q.potential, 0.7), label: '2√2' },
      ],
      series: [{ points: s.hist, color: A, width: 1.7 }],
    })

    text(ctx, 'nada viaja: o lado de Alice é 50/50 faça Bob o que fizer.',
      gx, h - 30, { size: 8.5, color: C.muted })
    text(ctx, 'a correlação só aparece ao COMPARAR as listas — por telefone.',
      gx, h - 17, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

// ═══════════════════════════════════════════════════════════════════
// INFORMÁTICA — Rede Neural APRENDENDO de verdade
//
// Isto não é uma animação de bolinhas piscando: é um MLP 2→8→8→1 com
// retropropagação implementada de ponta a ponta, treinando ao vivo por
// gradiente descendente estocástico.
//
//   forward:   a = tanh(W·x + b)          saída: σ(w·a + b)
//   perda:     entropia cruzada binária
//   backward:  δ_saída = ŷ − y
//              δ_oculta = (Wᵀ·δ) ⊙ (1 − a²)      ← derivada da tanh
//   update:    W ← W − η·δ·aᵀ
//
// O problema é o das DUAS ESPIRAIS entrelaçadas — o clássico exemplo de
// dado NÃO LINEARMENTE SEPARÁVEL. Nenhuma reta resolve isso. Uma regressão
// logística (ou um perceptron de camada única) fica travada em ~50 % de
// acerto para sempre.
//
// A FRONTEIRA DE DECISÃO é pintada avaliando a rede em cada ponto de uma
// grade. Assista: ela começa como uma mancha reta e vai se ENTORTANDO até
// abraçar as espirais. É literalmente o gradiente esculpindo a fronteira.
//
// A taxa de aprendizado é a faca de dois gumes: baixa demais e a rede
// engatinha; alta demais e a perda explode e oscila sem convergir.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['informatica']

const H1 = 12, H2 = 12     // neurônios nas camadas ocultas
const N_PTS = 180
const GRID = 34           // resolução da fronteira de decisão

const COL_0 = '#7a8fa8'
const COL_1 = '#c9805a'

/**
 * Duas espirais entrelaçadas — o dataset que exige não linearidade.
 * 1,15 volta: já é impossível para uma reta, mas ainda aprendível por um
 * MLP pequeno em segundos. Espirais muito enroladas saturam as tanh e o
 * gradiente morre antes de convergir.
 */
function makeSpirals(rand) {
  const pts = []
  const per = N_PTS / 2
  for (let c = 0; c < 2; c++) {
    for (let i = 0; i < per; i++) {
      const r = 0.12 + (i / per) * 0.83
      const t = 1.15 * (i / per) * Math.PI * 2 + c * Math.PI
      const noise = 0.035
      pts.push({
        x: r * Math.sin(t) + (rand() - 0.5) * noise,
        y: r * Math.cos(t) + (rand() - 0.5) * noise,
        label: c,
      })
    }
  }
  return pts
}

/** Matriz aleatória com inicialização de Xavier — evita saturar a tanh. */
function randMat(rows, cols, rand) {
  const s = Math.sqrt(2 / (rows + cols))
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => (rand() * 2 - 1) * s * 2))
}

const sigmoid = z => 1 / (1 + Math.exp(-clamp(z, -30, 30)))

export default function RedeNeuralCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(Math.floor(Math.random() * 1e6))
    return {
      pts: makeSpirals(rand),
      W1: randMat(H1, 2, rand),  b1: new Array(H1).fill(0),
      W2: randMat(H2, H1, rand), b2: new Array(H2).fill(0),
      W3: randMat(1, H2, rand),  b3: [0],
      epoch: 0,
      loss: 1,
      acc: 0,
      hist: [],
      grid: null,
      gridEpoch: -1,
      act: { a1: new Array(H1).fill(0), a2: new Array(H2).fill(0), out: 0 },
    }
  }, [])

  /** Passagem para frente. Devolve as ativações de cada camada. */
  const forward = (s, x, y) => {
    const a1 = new Array(H1)
    for (let i = 0; i < H1; i++) {
      a1[i] = Math.tanh(s.W1[i][0] * x + s.W1[i][1] * y + s.b1[i])
    }
    const a2 = new Array(H2)
    for (let i = 0; i < H2; i++) {
      let z = s.b2[i]
      for (let j = 0; j < H1; j++) z += s.W2[i][j] * a1[j]
      a2[i] = Math.tanh(z)
    }
    let z3 = s.b3[0]
    for (let j = 0; j < H2; j++) z3 += s.W3[0][j] * a2[j]
    return { a1, a2, out: sigmoid(z3) }
  }

  const step = useCallback((s, dt, p) => {
    // O motor já chama step a 240 Hz, então 1 época por passo dá ~240
    // épocas/s — rápido o bastante. Empilhar 6 épocas por passo com η alto
    // fazia os pesos crescerem, as tanh saturarem (1 − a² → 0) e o
    // gradiente MORRER: a rede travava em 50 % de acerto para sempre.
    const lr = (p.learningRate ?? 1) * 0.02

    {
      let lossSum = 0, correct = 0

      // SGD: uma amostra por vez, em ordem embaralhada
      const order = s.pts.map((_, i) => i)
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[order[i], order[j]] = [order[j], order[i]]
      }

      for (const idx of order) {
        const pt = s.pts[idx]
        const { a1, a2, out } = forward(s, pt.x, pt.y)
        const yTrue = pt.label

        // Entropia cruzada binária
        lossSum += -(yTrue * Math.log(out + 1e-9) + (1 - yTrue) * Math.log(1 - out + 1e-9))
        if ((out > 0.5 ? 1 : 0) === yTrue) correct++

        // ── Retropropagação ──────────────────────────────────────
        // Com sigmoide + entropia cruzada, o gradiente da saída é
        // simplesmente (ŷ − y). Os termos feios se cancelam.
        const d3 = clamp(out - yTrue, -1, 1)

        // camada 3 → 2
        const d2 = new Array(H2)
        for (let k = 0; k < H2; k++) {
          // derivada da tanh: 1 − tanh²
          d2[k] = s.W3[0][k] * d3 * (1 - a2[k] * a2[k])
        }
        // camada 2 → 1
        const d1 = new Array(H1)
        for (let k = 0; k < H1; k++) {
          let sum = 0
          for (let m = 0; m < H2; m++) sum += s.W2[m][k] * d2[m]
          d1[k] = sum * (1 - a1[k] * a1[k])
        }

        // ── Atualização dos pesos ────────────────────────────────
        for (let k = 0; k < H2; k++) s.W3[0][k] -= lr * d3 * a2[k]
        s.b3[0] -= lr * d3

        for (let m = 0; m < H2; m++) {
          for (let k = 0; k < H1; k++) s.W2[m][k] -= lr * d2[m] * a1[k]
          s.b2[m] -= lr * d2[m]
        }
        for (let m = 0; m < H1; m++) {
          s.W1[m][0] -= lr * d1[m] * pt.x
          s.W1[m][1] -= lr * d1[m] * pt.y
          s.b1[m] -= lr * d1[m]
        }
      }

      s.epoch++
      s.loss = lossSum / s.pts.length
      s.acc = correct / s.pts.length
    }

    if (s.hist.length === 0 || s.epoch - s.hist[s.hist.length - 1][0] > 4) {
      s.hist.push([s.epoch, s.loss, s.acc])
      if (s.hist.length > 400) s.hist.shift()
    }

    // Ativações do ponto central, só para o diagrama
    s.act = forward(s, 0.35, 0.35)

    // Recalcula a fronteira periodicamente (é caro: GRID² forwards)
    if (s.epoch - s.gridEpoch > 6) {
      s.gridEpoch = s.epoch
      const g = new Float32Array(GRID * GRID)
      for (let i = 0; i < GRID; i++) {
        for (let j = 0; j < GRID; j++) {
          const x = -1.15 + (i / (GRID - 1)) * 2.3
          const y = -1.15 + (j / (GRID - 1)) * 2.3
          g[j * GRID + i] = forward(s, x, y).out
        }
      }
      s.grid = g
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const compact = w < 760
    const stageW = compact ? w : w * 0.42

    // ══ FRONTEIRA DE DECISÃO ═════════════════════════════════════
    const px = 22, py = h * 0.14
    const size = Math.min(stageW - 44, h * 0.66)
    const toPx = (x, y) => [px + ((x + 1.15) / 2.3) * size, py + ((y + 1.15) / 2.3) * size]

    if (s.grid) {
      const cell = size / (GRID - 1)
      for (let i = 0; i < GRID; i++) {
        for (let j = 0; j < GRID; j++) {
          const v = s.grid[j * GRID + i]
          const X = px + (i / (GRID - 1)) * size
          const Y = py + (j / (GRID - 1)) * size
          // confiança: 0,5 é indecisão (transparente); 0 ou 1 é convicção
          const conf = Math.abs(v - 0.5) * 2
          ctx.fillStyle = hexA(v > 0.5 ? COL_1 : COL_0, 0.10 + conf * 0.30)
          ctx.fillRect(X - cell / 2, Y - cell / 2, cell + 1, cell + 1)
        }
      }
    }

    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(px + 0.5, py + 0.5, size, size)

    // pontos de treino
    for (const pt of s.pts) {
      const [X, Y] = toPx(pt.x, pt.y)
      ctx.fillStyle = pt.label === 1 ? COL_1 : COL_0
      ctx.beginPath(); ctx.arc(X, Y, 3, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = hexA('#000', 0.5)
      ctx.lineWidth = 0.7
      ctx.stroke()
    }

    caption(ctx, 'Fronteira de decisão · duas espirais', px, py - 10, A)
    text(ctx, 'nenhuma RETA separa isso', px, py + size + 16, { size: 8.5, color: C.muted })

    // ══ Leituras ═════════════════════════════════════════════════
    const lr = (p.learningRate ?? 1) * 0.06
    const nParams = (2 * H1 + H1) + (H1 * H2 + H2) + (H2 + 1)
    const diverged = !isFinite(s.loss) || s.loss > 3

    readout(ctx, w - 14, 14, [
      { k: 'época',      v: s.epoch, c: A },
      { k: 'perda',      v: isFinite(s.loss) ? s.loss.toFixed(4) : '∞',
        c: diverged ? Q.danger : s.loss < 0.1 ? Q.potential : Q.warn },
      { k: 'acurácia',   v: `${(s.acc * 100).toFixed(1)} %`,
        c: s.acc > 0.95 ? Q.potential : s.acc > 0.8 ? Q.warn : Q.danger },
      { k: 'η  taxa aprend.', v: lr.toFixed(3), c: Q.field },
      { k: 'arquitetura', v: `2–${H1}–${H2}–1` },
      { k: 'parâmetros',  v: nParams },
      { k: 'ativação',    v: 'tanh / sigmoide' },
    ], { title: 'MLP com retropropagação', anchor: 'right', accent: A, minWidth: 208 })

    if (diverged) {
      text(ctx, 'η alto demais — a perda explodiu e o treino divergiu',
        px, h - 16, { size: 9, weight: 700, color: Q.danger })
    } else if (s.acc > 0.97) {
      text(ctx, 'a rede aprendeu a espiral — fronteira não linear',
        px, h - 16, { size: 9, weight: 700, color: Q.potential })
    }

    if (compact) return

    // ══ ARQUITETURA ══════════════════════════════════════════════
    const nx = stageW + 40
    const nw = (w - nx - 26) * 0.46
    const ny = h * 0.14
    const nh = h * 0.40

    caption(ctx, 'Arquitetura', nx, ny - 10, C.muted)

    const layers = [
      { n: 2,  act: [0.35, 0.35] },
      { n: H1, act: s.act.a1 },
      { n: H2, act: s.act.a2 },
      { n: 1,  act: [s.act.out] },
    ]
    const colX = layers.map((_, i) => nx + (i / (layers.length - 1)) * nw)
    const nodeY = (li, i) => {
      const L = layers[li]
      return ny + (nh / (L.n + 1)) * (i + 1)
    }

    // conexões, com espessura ∝ |peso|
    const drawConn = (li, Wm) => {
      for (let i = 0; i < layers[li + 1].n; i++) {
        for (let j = 0; j < layers[li].n; j++) {
          const wgt = Wm[i][j]
          const mag = clamp(Math.abs(wgt) / 2.2, 0, 1)
          if (mag < 0.06) continue
          ctx.strokeStyle = hexA(wgt > 0 ? COL_1 : COL_0, 0.10 + mag * 0.55)
          ctx.lineWidth = 0.4 + mag * 1.7
          ctx.beginPath()
          ctx.moveTo(colX[li], nodeY(li, j))
          ctx.lineTo(colX[li + 1], nodeY(li + 1, i))
          ctx.stroke()
        }
      }
    }
    drawConn(0, s.W1)
    drawConn(1, s.W2)
    drawConn(2, s.W3)

    layers.forEach((L, li) => {
      for (let i = 0; i < L.n; i++) {
        const a = L.act[i] ?? 0
        const mag = clamp(Math.abs(a), 0, 1)
        ctx.fillStyle = hexA(a > 0 ? COL_1 : COL_0, 0.25 + mag * 0.7)
        ctx.beginPath()
        ctx.arc(colX[li], nodeY(li, i), 5.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = hexA(C.ink, 0.25)
        ctx.lineWidth = 0.8
        ctx.stroke()
      }
    })
    text(ctx, 'x, y', colX[0], ny + nh + 14, { size: 8, color: C.muted, align: 'center' })
    text(ctx, 'ŷ', colX[3], ny + nh + 14, { size: 8, color: C.muted, align: 'center' })
    text(ctx, 'espessura = |peso|', nx, ny + nh + 28, { size: 8, color: C.muted })

    // ══ CURVA DE PERDA ═══════════════════════════════════════════
    const gx = nx + nw + 62
    const gw = w - gx - 26
    const gy = h * 0.62
    const gh = h - gy - 52

    caption(ctx, 'Perda e acurácia', gx, gy - 10, A)
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [Math.max(0, s.epoch - 400), Math.max(60, s.epoch)],
      // Folga nas pontas: convergida, a acurácia encosta em 1 e a perda em
      // 0. Sem margem, as duas linhas somem em cima da moldura.
      yDomain: [-0.06, 1.10],
      xTicks: 3, yTicks: 3,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(1),
      xLabel: 'épocas',
      rules: [{ y: 1, color: hexA(Q.potential, 0.35), label: '100 %' }],
      series: [
        { points: s.hist.map(d => [d[0], clamp(d[1], 0, 1)]), color: Q.danger, width: 1.7 },
        { points: s.hist.map(d => [d[0], d[2]]), color: Q.potential, width: 1.7 },
      ],
    })
    let ty = gy - 10
    text(ctx, 'perda', gx + gw - 60, ty, { size: 8.5, weight: 700, color: Q.danger, align: 'right' })
    text(ctx, 'acurácia', gx + gw, ty, { size: 8.5, weight: 700, color: Q.potential, align: 'right' })

    // Painel da arquitetura — abaixo do diagrama, sem colidir com ele
    const ax2 = nx
    let ay2 = ny + nh + 52
    text(ctx, 'as camadas ocultas DOBRAM o espaço', ax2, ay2, { size: 8.5, weight: 700, color: C.dim })
    ay2 += 14
    text(ctx, 'até a espiral virar linearmente', ax2, ay2, { size: 8.5, color: C.muted })
    ay2 += 13
    text(ctx, 'separável. Sem elas, a rede só', ax2, ay2, { size: 8.5, color: C.muted })
    ay2 += 13
    text(ctx, 'traça RETAS — e trava em ~50 %.', ax2, ay2, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

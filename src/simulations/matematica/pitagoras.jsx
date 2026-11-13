// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Teorema de Pitágoras
//
//     a² + b² = c²
//
// Os três quadrados são construídos de verdade sobre os lados, e a área
// impressa dentro de cada um é literalmente lado². Dá para conferir a
// igualdade só de olhar: os dois quadrados menores somam o maior.
//
// Mas o ponto alto é o CONTRAEXEMPLO. Pitágoras só vale em triângulo
// retângulo, e a razão aparece na lei dos cossenos — o caso geral:
//
//     c² = a² + b² − 2ab·cos γ
//
// O termo −2ab·cos γ é o "corretor". Quando γ = 90°, cos 90° = 0, ele
// desaparece e sobra exatamente a² + b² = c². Em qualquer outro ângulo
// ele NÃO some, e a igualdade quebra.
//
// Mexa no ângulo: o painel mostra o erro percentual crescendo. Pitágoras
// não é uma lei universal dos triângulos — é um caso particular de uma
// lei mais geral.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, lerp,
} from '../engine'

const A = ACCENT['matematica']

const COL_A = '#7ea88f'   // cateto a
const COL_B = '#7a8fa8'   // cateto b
const COL_C = '#a89a7a'   // hipotenusa

export default function PitagorasCanvas({ params, running, resetKey }) {
  // Diagrama estático: não há nada evoluindo no tempo. Ele responde aos
  // sliders (lados e ângulo), e é só o que precisa fazer.
  const setup = useCallback(() => ({}), [])
  const step = useCallback(() => {}, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    // Catetos em unidades reais (o slider vem em "px", uso como unidade)
    const a = p.sideA ?? 80
    const b = p.sideB ?? 110
    const gamma = p.angle ?? 90          // ângulo entre os catetos, em graus

    // Lei dos cossenos — o caso geral
    const gRad = gamma * Math.PI / 180
    const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(gRad))
    const pyth = Math.sqrt(a * a + b * b)   // o que Pitágoras prevê
    const isRight = Math.abs(gamma - 90) < 0.5
    const err = ((c - pyth) / pyth) * 100

    const compact = w < 720
    const stageW = compact ? w : w * 0.62

    // Escala para caber tudo
    const span = a + b + c
    const k = Math.min(stageW * 0.9, h * 0.9) / (span * 0.92)

    // Vértices do triângulo: C na origem, B ao longo de +x, A pelo ângulo
    const A_ = a * k, B_ = b * k, C_ = c * k
    const ox = stageW * 0.44
    const oy = h * 0.50

    // Vértices (C = vértice do ângulo γ)
    const Vc = [ox, oy]
    const Vb = [ox + B_, oy]
    const Va = [ox + A_ * Math.cos(gRad), oy - A_ * Math.sin(gRad)]

    // ── Triângulo ────────────────────────────────────────────────
    ctx.beginPath()
    ctx.moveTo(...Vc); ctx.lineTo(...Vb); ctx.lineTo(...Va)
    ctx.closePath()
    ctx.fillStyle = hexA(C.ink, 0.06)
    ctx.fill()
    ctx.strokeStyle = hexA(C.ink, 0.5)
    ctx.lineWidth = 1.4
    ctx.stroke()

    // Marca de ângulo reto (só se for reto)
    if (isRight) {
      const m = 10
      ctx.strokeStyle = hexA(Q.potential, 0.9)
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.moveTo(Vc[0] + m, Vc[1])
      ctx.lineTo(Vc[0] + m, Vc[1] - m)
      ctx.lineTo(Vc[0], Vc[1] - m)
      ctx.stroke()
    } else {
      ctx.strokeStyle = hexA(Q.danger, 0.7)
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.arc(Vc[0], Vc[1], 20, -gRad, 0)
      ctx.stroke()
      text(ctx, `${gamma.toFixed(0)}°`, Vc[0] + 28, Vc[1] - 9,
        { size: 9.5, weight: 700, color: Q.danger })
    }

    // Baricentro — referência para jogar cada quadrado "para fora".
    const bc = [(Va[0] + Vb[0] + Vc[0]) / 3, (Va[1] + Vb[1] + Vc[1]) / 3]

    /** Desenha um quadrado apoiado no segmento P→Q, do lado de fora. */
    const squareOn = (P, Qp, col, label, area) => {
      const dx = Qp[0] - P[0], dy = Qp[1] - P[1]
      // normal (girada 90°) — escolho o sentido que afasta do baricentro
      let nx = dy, ny = -dx
      const mid = [(P[0] + Qp[0]) / 2, (P[1] + Qp[1]) / 2]
      if ((mid[0] + nx - bc[0]) ** 2 + (mid[1] + ny - bc[1]) ** 2 <
          (mid[0] - nx - bc[0]) ** 2 + (mid[1] - ny - bc[1]) ** 2) {
        nx = -nx; ny = -ny
      }
      const P2 = [P[0] + nx, P[1] + ny]
      const Q2 = [Qp[0] + nx, Qp[1] + ny]

      ctx.beginPath()
      ctx.moveTo(...P); ctx.lineTo(...Qp); ctx.lineTo(...Q2); ctx.lineTo(...P2)
      ctx.closePath()
      ctx.fillStyle = hexA(col, 0.22)
      ctx.fill()
      ctx.strokeStyle = hexA(col, 0.85)
      ctx.lineWidth = 1.3
      ctx.stroke()

      const cxq = (P[0] + Qp[0] + P2[0] + Q2[0]) / 4
      const cyq = (P[1] + Qp[1] + P2[1] + Q2[1]) / 4
      text(ctx, label, cxq, cyq - 2, { size: 12, weight: 700, color: col, align: 'center' })
      text(ctx, `${area.toFixed(0)}`, cxq, cyq + 13, { size: 9, color: hexA(col, 0.8), align: 'center' })
      return { P, Qp, P2, Q2, cx: cxq, cy: cyq }
    }

    // Quadrados sobre cada lado. As áreas exibidas são as REAIS.
    squareOn(Vc, Va, COL_A, 'a²', a * a)                 // sobre o cateto a
    squareOn(Vb, Vc, COL_B, 'b²', b * b)                 // sobre o cateto b
    const sqC = squareOn(Va, Vb, COL_C, 'c²', c * c)     // sobre a hipotenusa

    // ── Verificação ──────────────────────────────────────────────
    const sum = a * a + b * b
    const c2 = c * c
    const ok = Math.abs(sum - c2) / c2 < 0.005

    caption(ctx,
      isRight ? 'triângulo retângulo — Pitágoras vale' : 'não é retângulo — Pitágoras FALHA',
      16, 24, isRight ? Q.potential : Q.danger)

    // Equação embaixo
    const eqY = h - 18
    const eq = `${a * a} + ${b * b} = ${sum}   ·   c² = ${c2.toFixed(0)}`
    text(ctx, eq, stageW / 2, eqY, {
      size: 11, weight: 700,
      color: ok ? Q.potential : Q.danger,
      align: 'center',
    })

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'a  cateto',     v: a.toFixed(0), c: COL_A },
      { k: 'b  cateto',     v: b.toFixed(0), c: COL_B },
      { k: 'γ  ângulo',     v: `${gamma.toFixed(0)}°`, c: isRight ? Q.potential : Q.danger },
      { k: 'c  hipotenusa', v: c.toFixed(2), c: COL_C },
      { k: 'a² + b²',       v: sum.toFixed(0), c: A },
      { k: 'c²',            v: c2.toFixed(0), c: COL_C },
      { k: 'erro',          v: `${err >= 0 ? '+' : ''}${err.toFixed(2)} %`, c: ok ? Q.potential : Q.danger },
    ], { title: 'Lei dos cossenos', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ Painel explicativo ═══════════════════════════════════════
    const tx = stageW + 24
    let ty = h * 0.20

    text(ctx, 'c² = a² + b² − 2ab·cos γ', tx, ty, { size: 11, weight: 700, color: A })
    ty += 20
    text(ctx, 'este é o caso GERAL —', tx, ty, { size: 9, color: C.dim })
    ty += 13
    text(ctx, 'a lei dos cossenos.', tx, ty, { size: 9, color: C.dim })
    ty += 26

    const cosTerm = -2 * a * b * Math.cos(gRad)
    text(ctx, 'termo extra:', tx, ty, { size: 9, color: C.muted })
    const cosShown = Math.abs(cosTerm) < 0.5 ? '0' : `${cosTerm > 0 ? '+' : ''}${cosTerm.toFixed(0)}`
    text(ctx, cosShown, tx + 100, ty,
      { size: 10, weight: 700, color: isRight ? Q.potential : Q.danger })
    ty += 22

    if (isRight) {
      text(ctx, 'γ = 90° → cos γ = 0', tx, ty, { size: 9.5, weight: 700, color: Q.potential })
      ty += 14
      text(ctx, 'o termo extra some, e sobra', tx, ty, { size: 9, color: C.muted })
      ty += 13
      text(ctx, 'exatamente a² + b² = c².', tx, ty, { size: 9, color: C.muted })
      ty += 13
      text(ctx, 'Pitágoras é um CASO PARTICULAR.', tx, ty, { size: 9, weight: 700, color: A })
    } else {
      text(ctx, `cos ${gamma.toFixed(0)}° = ${Math.cos(gRad).toFixed(3)} ≠ 0`, tx, ty,
        { size: 9.5, weight: 700, color: Q.danger })
      ty += 14
      text(ctx, 'o termo extra NÃO some —', tx, ty, { size: 9, color: C.muted })
      ty += 13
      text(ctx, 'e a soma dos quadrados dos', tx, ty, { size: 9, color: C.muted })
      ty += 13
      text(ctx, 'catetos deixa de bater com c².', tx, ty, { size: 9, color: C.muted })
    }

    ty += 30
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(w - 26, ty); ctx.stroke()
    ty += 20
    text(ctx, 'a área de cada quadrado é', tx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'literalmente o lado ao quadrado —', tx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'os números nos quadrados são reais.', tx, ty, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

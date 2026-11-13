// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Fibonacci e a Proporção Áurea
//
//   F(n) = F(n−1) + F(n−2)        1, 1, 2, 3, 5, 8, 13, 21, 34…
//   F(n)/F(n−1) → φ = (1+√5)/2 ≈ 1,6180339887…
//
// A convergência é ALTERNADA: as razões pulam por cima e por baixo de φ,
// se aproximando a cada passo. O gráfico mostra esse ziguezague.
//
// A PARTE BOTÂNICA é onde φ deixa de ser curiosidade e vira engenharia.
// Numa inflorescência, cada semente nova nasce girada um ângulo fixo em
// relação à anterior. O ângulo áureo é
//
//     360° / φ² ≈ 137,507°
//
// Por que ESTE ângulo? Porque φ é o número mais "irracional" que existe
// — o mais difícil de aproximar por frações. Um ângulo racional (como
// 360/8 = 45°) faz as sementes se alinharem em poucos braços, deixando
// buracos enormes. Com 137,507° nenhuma semente cai em cima da anterior,
// NUNCA, e o empacotamento fica ótimo.
//
// Mexa no ângulo e veja: 1° de diferença destrói o girassol. A natureza
// não escolheu φ por estética. Escolheu porque é o que funciona.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, mix,
} from '../engine'

const A = ACCENT['matematica']
const PHI = (1 + Math.sqrt(5)) / 2
const GOLDEN_ANGLE = 360 / (PHI * PHI)   // ≈ 137,507°

export default function FibonacciCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, grow: 0 }), [])

  const step = useCallback((s, dt) => {
    s.t += dt
    s.grow = Math.min(1, s.grow + dt * 0.45)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const n = Math.round(p.terms ?? 8)
    const botanic = (p.viewType ?? 0) > 50
    const angle = p.angle ?? GOLDEN_ANGLE

    // Sequência
    const fib = [1, 1]
    for (let i = 2; i < n + 2; i++) fib.push(fib[i - 1] + fib[i - 2])

    const compact = w < 720
    const stageW = compact ? w : w * 0.60

    if (!botanic) {
      // ══ ESPIRAL DE RETÂNGULOS ══════════════════════════════════
      // Retângulos de lado F(k), encaixados girando 90° a cada passo.
      const used = fib.slice(0, n)
      const total = used[used.length - 1] + used[used.length - 2]
      const k = Math.min(stageW * 0.78, h * 0.76) / total

      // Monta a cadeia de retângulos (algoritmo clássico do "gnômon")
      let x = 0, y = 0, dir = 0
      const rects = []
      for (let i = 0; i < used.length; i++) {
        const f = used[i]
        if (i === 0) {
          rects.push({ x: 0, y: 0, s: f })
          x = 0; y = 0
        } else {
          const prev = rects[i - 1]
          // gira no sentido horário: direita, baixo, esquerda, cima
          dir = (i - 1) % 4
          let nx = prev.x, ny = prev.y
          if (dir === 0)      { nx = prev.x + prev.s; ny = prev.y }
          else if (dir === 1) { nx = prev.x + prev.s - f; ny = prev.y + prev.s }
          else if (dir === 2) { nx = prev.x - f; ny = prev.y + prev.s - f }
          else                { nx = prev.x; ny = prev.y - f }
          rects.push({ x: nx, y: ny, s: f })
        }
      }

      // Bounding box para centralizar
      const minX = Math.min(...rects.map(r => r.x))
      const maxX = Math.max(...rects.map(r => r.x + r.s))
      const minY = Math.min(...rects.map(r => r.y))
      const maxY = Math.max(...rects.map(r => r.y + r.s))
      const ox = stageW / 2 - ((minX + maxX) / 2) * k
      const oy = h / 2 - ((minY + maxY) / 2) * k

      rects.forEach((r, i) => {
        const X = ox + r.x * k, Y = oy + r.y * k, S = r.s * k
        const t = i / Math.max(1, rects.length - 1)
        const col = mix('#5f5d78', A, t)
        ctx.fillStyle = hexA(col, 0.10)
        ctx.fillRect(X, Y, S, S)
        ctx.strokeStyle = hexA(col, 0.7)
        ctx.lineWidth = 1.1
        ctx.strokeRect(X + 0.5, Y + 0.5, S, S)
        if (S > 22) {
          text(ctx, `${r.s}`, X + S / 2, Y + S / 2 + 4,
            { size: Math.min(13, S / 3), weight: 700, color: hexA(col, 0.95), align: 'center' })
        }
      })

      // ── A espiral: quartos de círculo dentro de cada quadrado ──
      ctx.strokeStyle = Q.warn
      ctx.lineWidth = 2
      ctx.beginPath()
      rects.forEach((r, i) => {
        const X = ox + r.x * k, Y = oy + r.y * k, S = r.s * k
        const d = (i - 1) % 4
        // centro do arco = o canto onde os quadrados se encontram
        let cxa, cya, a0
        if (i === 0)      { cxa = X + S; cya = Y + S; a0 = Math.PI }
        else if (d === 0) { cxa = X;     cya = Y + S; a0 = -Math.PI / 2 }
        else if (d === 1) { cxa = X;     cya = Y;     a0 = 0 }
        else if (d === 2) { cxa = X + S; cya = Y;     a0 = Math.PI / 2 }
        else              { cxa = X + S; cya = Y + S; a0 = Math.PI }
        ctx.arc(cxa, cya, S, a0, a0 + Math.PI / 2)
      })
      ctx.stroke()

      caption(ctx, 'Espiral de Fibonacci', 16, 24, A)

    } else {
      // ══ FILOTAXIA — o girassol ═════════════════════════════════
      const cx = stageW * 0.5, cy = h * 0.5
      const N = 420
      const R = Math.min(stageW * 0.42, h * 0.44)
      const c = R / Math.sqrt(N)
      const aRad = angle * Math.PI / 180

      const visible = Math.floor(N * s.grow)
      for (let i = 0; i < visible; i++) {
        // Modelo de Vogel (1979): r = c·√i, θ = i·ângulo
        const r = c * Math.sqrt(i)
        const th = i * aRad
        const X = cx + r * Math.cos(th)
        const Y = cy + r * Math.sin(th)
        const t = i / N
        const sz = 1.6 + t * 2.4
        ctx.fillStyle = hexA(mix('#8c8aa6', '#d3a04a', t), 0.9)
        ctx.beginPath()
        ctx.arc(X, Y, sz, 0, Math.PI * 2)
        ctx.fill()
      }

      const off = Math.abs(angle - GOLDEN_ANGLE)
      caption(ctx,
        off < 0.05 ? 'ângulo áureo — empacotamento perfeito'
                   : `${off.toFixed(2)}° fora do áureo — surgem braços e buracos`,
        16, 24, off < 0.05 ? Q.potential : Q.danger)
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const ratio = fib[n] / fib[n - 1]
    const err = Math.abs(ratio - PHI)

    readout(ctx, w - 14, 14, [
      { k: 'F(n)',        v: fib[n - 1], c: A },
      { k: 'F(n−1)',      v: fib[n - 2] },
      { k: 'razão F(n)/F(n−1)', v: ratio.toFixed(8), c: Q.kinetic },
      { k: 'φ  áureo',    v: PHI.toFixed(8), c: Q.warn },
      { k: 'erro',        v: err.toExponential(1) },
      ...(botanic ? [
        { k: 'ângulo',       v: `${angle.toFixed(3)}°`, c: A },
        { k: 'ângulo áureo', v: `${GOLDEN_ANGLE.toFixed(3)}°`, c: Q.warn },
      ] : []),
    ], { title: 'φ = (1+√5)/2', anchor: 'right', accent: A, minWidth: 214 })

    if (compact) return

    // ══ CONVERGÊNCIA ALTERNADA ═══════════════════════════════════
    const gx = stageW + 48
    const gw = w - gx - 26

    caption(ctx, 'A razão converge para φ — pulando em volta', gx, 26, A)

    const seq = [1, 1]
    for (let i = 2; i < 18; i++) seq.push(seq[i - 1] + seq[i - 2])
    const ratios = []
    for (let i = 2; i < 18; i++) ratios.push([i - 1, seq[i] / seq[i - 1]])

    plot(ctx, { x: gx, y: 38, w: gw, h: h * 0.34 }, {
      xDomain: [1, 16], yDomain: [1.4, 2.05],
      xTicks: 3, yTicks: 4,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(2),
      xLabel: 'n', yLabel: 'F(n+1)/F(n)',
      rules: [{ y: PHI, color: Q.warn, label: 'φ' }],
      series: [{ points: ratios, color: hexA(A, 0.9), width: 1.8 }],
      markers: [{ x: n - 1, y: ratio, color: Q.kinetic, r: 4 }],
    })

    // ══ Sequência ════════════════════════════════════════════════
    let ty = h * 0.34 + 74
    caption(ctx, 'sequência', gx, ty - 12, C.muted)
    let bx = gx
    for (let i = 0; i < n; i++) {
      const str = String(fib[i])
      ctx.font = '700 11px "Archivo", sans-serif'
      const tw = ctx.measureText(str).width + 10
      if (bx + tw > w - 26) { bx = gx; ty += 20 }
      ctx.fillStyle = hexA(A, 0.12)
      ctx.fillRect(bx, ty - 10, tw, 15)
      text(ctx, str, bx + tw / 2, ty + 1, { size: 10, weight: 700, color: A, align: 'center' })
      bx += tw + 4
    }

    ty += 34
    text(ctx, 'φ é o número mais difícil de', gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'aproximar por frações — e é EXATAMENTE', gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'por isso que a planta o usa: nenhuma', gx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'semente cai em cima da anterior.', gx, ty, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

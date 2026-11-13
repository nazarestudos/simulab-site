// ═══════════════════════════════════════════════════════════════════
// QUÍMICA — Escala de pH
//
// A ideia que a escala esconde: pH é LOGARÍTMICO.
//
//     pH = −log₁₀[H⁺]      [H⁺]·[OH⁻] = Kw = 1e−14 (a 25 °C)
//     pH + pOH = 14
//
// Um suco de limão (pH 2) não é "3,5× mais ácido" que a água (pH 7):
// é 100 000 vezes. A régua de bolinhas mostra a razão real [H⁺]/[OH⁻]
// numa escala log — a única em que os dois cabem na mesma tela.
//
// E o detalhe que quase todo material escolar erra: pH 7 só é neutro
// A 25 °C. Kw depende da temperatura; a 100 °C a água neutra tem pH 6,14
// e continua neutra, porque [H⁺] = [OH⁻].
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['quimica']

/** Cor do indicador universal ao longo da escala de pH. */
const SCALE = [
  [0,  '#b5443c'], [2,  '#c4603a'], [4,  '#c9a24a'],
  [6,  '#a9b04e'], [7,  '#6f9e6a'], [8,  '#4f9c8a'],
  [10, '#4a7fa8'], [12, '#5a5f9e'], [14, '#6b4a8f'],
]
function phColor(pH) {
  const v = clamp(pH, 0, 14)
  for (let i = 0; i < SCALE.length - 1; i++) {
    const [p0, c0] = SCALE[i], [p1, c1] = SCALE[i + 1]
    if (v >= p0 && v <= p1) return mix(c0, c1, (v - p0) / (p1 - p0))
  }
  return SCALE[SCALE.length - 1][1]
}

// Referências reais
const REFS = [
  { pH: 0.5,  n: 'ácido de bateria' },
  { pH: 2.0,  n: 'suco de limão' },
  { pH: 2.5,  n: 'refrigerante' },
  { pH: 3.5,  n: 'suco de laranja' },
  { pH: 4.5,  n: 'chuva ácida' },
  { pH: 5.5,  n: 'café' },
  { pH: 6.5,  n: 'leite' },
  { pH: 7.0,  n: 'água pura' },
  { pH: 7.4,  n: 'sangue' },
  { pH: 8.3,  n: 'água do mar' },
  { pH: 10.5, n: 'leite de magnésia' },
  { pH: 12.5, n: 'água sanitária' },
  { pH: 14.0, n: 'soda cáustica' },
]

export default function PhEscalaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(606)
    return {
      t: 0,
      ions: Array.from({ length: 160 }, () => ({
        x: rand(), y: rand(),
        vx: (rand() - 0.5) * 0.06,
        vy: (rand() - 0.5) * 0.06,
        r: rand(),
      })),
    }
  }, [])

  const step = useCallback((s, dt) => {
    s.t += dt
    for (const i of s.ions) {
      i.x += i.vx * dt
      i.y += i.vy * dt
      if (i.x < 0 || i.x > 1) i.vx *= -1
      if (i.y < 0 || i.y > 1) i.vy *= -1
      i.x = clamp(i.x, 0, 1)
      i.y = clamp(i.y, 0, 1)
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const pH  = clamp(p.ph ?? 7, 0, 14)
    const pOH = 14 - pH
    const Hp  = 10 ** -pH
    const OH  = 10 ** -pOH
    const col = phColor(pH)

    const compact = w < 700
    const stageW = compact ? w : w * 0.52

    // ══ BÉQUER ═══════════════════════════════════════════════════
    const bw = Math.min(stageW * 0.44, 150)
    const bx = 34
    const by = h * 0.16
    const bh = h * 0.56

    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(bx, by); ctx.lineTo(bx, by + bh)
    ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by)
    ctx.stroke()

    const liqTop = by + bh * 0.18
    ctx.save()
    ctx.beginPath()
    ctx.rect(bx, liqTop, bw, by + bh - liqTop)
    ctx.clip()
    ctx.fillStyle = hexA(col, 0.30)
    ctx.fillRect(bx, liqTop, bw, bh)

    // ── Íons: a PROPORÇÃO na tela é a proporção real, em escala log ──
    // Mostrar 10⁷ vezes mais H⁺ que OH⁻ literalmente é impossível; então
    // o número de bolinhas segue log — e o HUD dá o número exato.
    const fH = clamp((14 - pH) / 14, 0, 1)
    const nH = Math.round(fH * 90) + (pH < 7 ? 6 : 1)
    const nOH = Math.round((1 - fH) * 90) + (pH > 7 ? 6 : 1)

    s.ions.forEach((i, idx) => {
      const isH = idx < nH
      const isOH = idx >= 80 && idx < 80 + nOH
      if (!isH && !isOH) return
      const X = bx + i.x * bw
      const Y = liqTop + i.y * (by + bh - liqTop)
      const c = isH ? '#c2704f' : '#6f9ec2'
      ctx.fillStyle = hexA(c, 0.9)
      ctx.beginPath()
      ctx.arc(X, Y, isH ? 3.0 : 2.6, 0, Math.PI * 2)
      ctx.fill()
      text(ctx, isH ? '+' : '−', X, Y - 5, { size: 7, weight: 700, color: hexA(c, 0.8), align: 'center' })
    })
    ctx.restore()

    // superfície
    ctx.strokeStyle = hexA('#ffffff', 0.16)
    ctx.lineWidth = 1
    ctx.beginPath()
    for (let i = 0; i <= 30; i++) {
      const X = bx + (i / 30) * bw
      const Y = liqTop + Math.sin(i * 0.5 + s.t * 1.5) * 1.2
      i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
    }
    ctx.stroke()

    caption(ctx, 'H₃O⁺  vs  OH⁻', bx, by - 12, C.muted)
    ctx.fillStyle = '#c2704f'
    ctx.beginPath(); ctx.arc(bx + 4, by + bh + 18, 3.2, 0, Math.PI * 2); ctx.fill()
    text(ctx, 'H₃O⁺', bx + 12, by + bh + 21, { size: 9, color: C.dim })
    ctx.fillStyle = '#6f9ec2'
    ctx.beginPath(); ctx.arc(bx + 54, by + bh + 18, 3.2, 0, Math.PI * 2); ctx.fill()
    text(ctx, 'OH⁻', bx + 62, by + bh + 21, { size: 9, color: C.dim })

    // ══ pH gigante ═══════════════════════════════════════════════
    const px = bx + bw + 34
    caption(ctx, pH < 7 ? 'ácido' : pH > 7 ? 'básico' : 'neutro', px, by - 12, col)
    text(ctx, pH.toFixed(1), px, by + 34, { size: 44, weight: 700, color: col })
    text(ctx, `pOH ${pOH.toFixed(1)}`, px, by + 56, { size: 11, color: C.dim })

    // Quantas vezes mais ácido/básico que a água pura?
    const factor = 10 ** Math.abs(7 - pH)
    if (Math.abs(pH - 7) > 0.05) {
      text(ctx,
        `${factor.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}× mais ${pH < 7 ? 'ácido' : 'básico'}`,
        px, by + 78, { size: 10, weight: 700, color: Q.warn })
      text(ctx, 'que a água pura', px, by + 92, { size: 9, color: C.muted })
    } else {
      text(ctx, '[H⁺] = [OH⁻]', px, by + 78, { size: 10, weight: 700, color: Q.potential })
    }

    // ══ RÉGUA DE pH ══════════════════════════════════════════════
    const sx = 34
    const sw = stageW - 68
    const sy = h - 46

    for (let i = 0; i < sw; i++) {
      ctx.fillStyle = phColor((i / sw) * 14)
      ctx.fillRect(sx + i, sy, 1, 14)
    }
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(sx + 0.5, sy + 0.5, sw, 14)

    for (let i = 0; i <= 14; i += 2) {
      const X = sx + (i / 14) * sw
      text(ctx, `${i}`, X, sy + 26, { size: 8, color: C.muted, align: 'center' })
    }

    const mx = sx + (pH / 14) * sw
    ctx.fillStyle = C.ink
    ctx.beginPath()
    ctx.moveTo(mx, sy - 3); ctx.lineTo(mx - 4, sy - 10); ctx.lineTo(mx + 4, sy - 10)
    ctx.closePath(); ctx.fill()

    // ══ Leituras ═════════════════════════════════════════════════
    // Substância mais próxima do pH atual
    const near = REFS.reduce((a, b) => Math.abs(b.pH - pH) < Math.abs(a.pH - pH) ? b : a)

    readout(ctx, w - 14, 14, [
      { k: 'pH',    v: pH.toFixed(1), c: col },
      { k: 'pOH',   v: pOH.toFixed(1) },
      { k: '[H₃O⁺]', v: `${Hp.toExponential(1)} M`, c: '#c2704f' },
      { k: '[OH⁻]',  v: `${OH.toExponential(1)} M`, c: '#6f9ec2' },
      { k: 'Kw = [H⁺][OH⁻]', v: (Hp * OH).toExponential(0) },
      { k: 'parecido com', v: near.n, c: C.dim },
    ], { title: 'pH = −log₁₀[H⁺]', anchor: 'right', accent: A, minWidth: 206 })

    if (compact) return

    // ══ [H⁺] em escala LOG × pH ══════════════════════════════════
    const gx = stageW + 52
    const gw = w - gx - 26
    const gy = h * 0.44
    const gh = h - gy - 54

    caption(ctx, 'Cada passo de pH = 10× na concentração', gx, gy - 12, Q.warn)

    const cH = [], cOH = []
    for (let i = 0; i <= 140; i++) {
      const v = (i / 140) * 14
      cH.push([v, -v])            // log₁₀[H⁺] = −pH
      cOH.push([v, -(14 - v)])
    }
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, 14], yDomain: [-14, 0],
      xTicks: 7, yTicks: 7,
      fmtX: q => q.toFixed(0), fmtY: q => `1e${q.toFixed(0)}`,
      xLabel: 'pH', yLabel: 'concentração (M)',
      rules: [{ x: 7, color: hexA(Q.potential, 0.5), label: 'neutro' }],
      series: [
        { points: cH,  color: '#c2704f', width: 1.8 },
        { points: cOH, color: '#6f9ec2', width: 1.8 },
      ],
      markers: [
        { x: pH, y: -pH, color: '#c2704f', r: 4 },
        { x: pH, y: -(14 - pH), color: '#6f9ec2', r: 4 },
      ],
    })

    // Referências reais
    caption(ctx, 'referências', gx, 26, C.muted)
    let ry = 44
    for (const r of REFS.filter((_, i) => i % 2 === 0)) {
      const isNear = r === near
      ctx.fillStyle = phColor(r.pH)
      ctx.fillRect(gx, ry - 7, 3, 9)
      text(ctx, r.n, gx + 9, ry, { size: 9, color: isNear ? C.ink : C.muted })
      text(ctx, r.pH.toFixed(1), gx + gw, ry,
        { size: 9, weight: isNear ? 700 : 500, color: isNear ? phColor(r.pH) : C.muted, align: 'right' })
      ry += 15
    }

    text(ctx, 'pH 7 só é neutro a 25 °C — Kw varia com a temperatura',
      gx, h - 16, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

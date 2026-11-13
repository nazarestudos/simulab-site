// ═══════════════════════════════════════════════════════════════════
// BIOLOGIA — Seleção Natural: as mariposas de Manchester
//
// Genética de populações de verdade, não "bichinhos somem da tela".
// Dois alelos: M (melânico, escuro, DOMINANTE) e m (claro, recessivo).
//
// Equilíbrio de HARDY–WEINBERG dá as frequências genotípicas:
//     MM = p²      Mm = 2pq      mm = q²          (p + q = 1)
//
// A SELEÇÃO muda p a cada geração pela recorrência clássica:
//     w̄  = p²·w_MM + 2pq·w_Mm + q²·w_mm          (aptidão média)
//     p' = (p²·w_MM + pq·w_Mm) / w̄
//
// E a MUTAÇÃO empurra de volta:  p'' = p'(1−µ) + (1−p')·µ
//
// A tensão entre as duas produz o EQUILÍBRIO SELEÇÃO–MUTAÇÃO: a seleção
// nunca elimina um alelo por completo, porque a mutação o recria.
//
// O caso real: em Manchester, a fuligem industrial escureceu os troncos.
// A forma melânica saltou de ~2 % para ~98 % da população em ~50 gerações
// — e depois VOLTOU a cair quando o ar limpou, nos anos 1970. É um dos
// casos de seleção natural mais bem documentados que existem, e a
// simulação reproduz as duas metades da história.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['biologia']

const LIGHT = '#cfc9bd'
const DARK  = '#3a3630'

const N_MOTHS = 44
const MAX_GEN = 120

export default function EvolucaoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(1848)   // ano do primeiro registro da mariposa melânica
    return {
      p: 0.02,          // frequência do alelo melânico M — começa raríssimo
      gen: 0,
      acc: 0,
      hist: [],
      moths: Array.from({ length: N_MOTHS }, () => ({
        x: rand(), y: rand(),
        r: rand(),
        rot: (rand() - 0.5) * 0.5,
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const mu   = (p.mutationRate ?? 5) / 100 * 0.02   // até 0,4 % por geração
    const poll = (p.envPressure ?? 30) / 100          // poluição / fuligem

    s.acc += dt * 1.8
    if (s.acc < 1) return
    s.acc = 0

    // ── Aptidão: quem se camufla no tronco sobrevive ─────────────
    // Tronco claro (líquens) → mariposa clara se esconde.
    // Tronco escuro (fuligem) → mariposa escura se esconde.
    // A seleção é a PREDAÇÃO VISUAL por pássaros.
    const sCoef = 0.35                       // intensidade da seleção
    const wDark  = 1 - sCoef * (1 - poll)    // escura sofre em tronco claro
    const wLight = 1 - sCoef * poll          // clara sofre em tronco escuro

    // M é DOMINANTE: MM e Mm têm o mesmo fenótipo (escuro).
    const w_MM = wDark, w_Mm = wDark, w_mm = wLight

    const pp = s.p, q = 1 - pp
    const wBar = pp * pp * w_MM + 2 * pp * q * w_Mm + q * q * w_mm
    let pNext = wBar > 0
      ? (pp * pp * w_MM + pp * q * w_Mm) / wBar
      : pp

    // Mutação nos dois sentidos
    pNext = pNext * (1 - mu) + (1 - pNext) * mu
    s.p = clamp(pNext, 0.0005, 0.9995)

    s.gen++
    s.hist.push([s.gen, s.p, poll])
    if (s.gen > MAX_GEN) {
      s.gen = 0
      s.p = 0.02
      s.hist = []
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const poll = (p.envPressure ?? 30) / 100
    const mu   = (p.mutationRate ?? 5) / 100 * 0.02

    const pp = s.p, q = 1 - pp
    // Hardy–Weinberg
    const fMM = pp * pp
    const fMm = 2 * pp * q
    const fmm = q * q
    const darkPheno = fMM + fMm          // M é dominante

    const sCoef = 0.35
    const wDark  = 1 - sCoef * (1 - poll)
    const wLight = 1 - sCoef * poll

    const compact = w < 720
    const stageW = compact ? w : w * 0.48

    // ══ TRONCO ═══════════════════════════════════════════════════
    const bx = 22, by = h * 0.14
    const bw = stageW - 44, bh = h * 0.62

    // A cor do tronco é a poluição
    const barkCol = mix('#b9b2a3', '#2a2724', poll)
    ctx.fillStyle = barkCol
    ctx.fillRect(bx, by, bw, bh)

    // textura de casca
    const rand = rng(7)
    ctx.strokeStyle = hexA('#000000', 0.12)
    ctx.lineWidth = 1
    for (let i = 0; i < 26; i++) {
      const X = bx + rand() * bw
      ctx.beginPath()
      ctx.moveTo(X, by)
      ctx.lineTo(X + (rand() - 0.5) * 12, by + bh)
      ctx.stroke()
    }
    // líquens (só sobrevivem no ar limpo — some com a poluição)
    if (poll < 0.6) {
      for (let i = 0; i < 18; i++) {
        const X = bx + rand() * bw, Y = by + rand() * bh
        ctx.fillStyle = hexA('#8fa88a', (0.6 - poll) * 0.5)
        ctx.beginPath()
        ctx.ellipse(X, Y, 5 + rand() * 7, 3 + rand() * 4, rand() * 3, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(bx + 0.5, by + 0.5, bw, bh)

    // ── Mariposas ────────────────────────────────────────────────
    const nDark = Math.round(darkPheno * N_MOTHS)
    s.moths.forEach((m, i) => {
      const isDark = i < nDark
      const X = bx + 16 + m.x * (bw - 32)
      const Y = by + 16 + m.y * (bh - 32)
      const col = isDark ? DARK : LIGHT

      ctx.save()
      ctx.translate(X, Y)
      ctx.rotate(m.rot)
      // asas
      ctx.fillStyle = hexA(col, 0.95)
      ctx.beginPath()
      ctx.ellipse(-5, 0, 7, 4.2, -0.35, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(5, 0, 7, 4.2, 0.35, 0, Math.PI * 2)
      ctx.fill()
      // corpo
      ctx.fillStyle = hexA(isDark ? '#1d1b19' : '#8f8a80', 1)
      ctx.beginPath()
      ctx.ellipse(0, 0, 1.8, 5, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })

    caption(ctx, poll > 0.5 ? 'tronco coberto de fuligem' : 'tronco claro, com líquens',
      bx, by - 10, poll > 0.5 ? Q.warn : Q.potential)

    // Legenda de aptidão
    const ly = by + bh + 20
    ctx.fillStyle = DARK
    ctx.fillRect(bx, ly - 8, 10, 8)
    text(ctx, `melânica  w = ${wDark.toFixed(2)}`, bx + 16, ly,
      { size: 9, color: wDark > wLight ? Q.potential : C.muted })
    ctx.fillStyle = LIGHT
    ctx.fillRect(bx + 150, ly - 8, 10, 8)
    text(ctx, `clara  w = ${wLight.toFixed(2)}`, bx + 166, ly,
      { size: 9, color: wLight > wDark ? Q.potential : C.muted })

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'geração',   v: s.gen, c: A },
      { k: 'p  alelo M', v: pp.toFixed(4), c: DARK === '#3a3630' ? '#8a8378' : DARK },
      { k: 'q  alelo m', v: q.toFixed(4), c: LIGHT },
      { k: 'MM  (p²)',  v: `${(fMM * 100).toFixed(1)} %` },
      { k: 'Mm  (2pq)', v: `${(fMm * 100).toFixed(1)} %` },
      { k: 'mm  (q²)',  v: `${(fmm * 100).toFixed(1)} %` },
      { k: 'fenótipo escuro', v: `${(darkPheno * 100).toFixed(1)} %`, c: Q.warn },
      { k: 'µ  mutação', v: mu.toExponential(1) },
    ], { title: 'Hardy–Weinberg + seleção', anchor: 'right', accent: A, minWidth: 214 })

    if (compact) return

    // ══ FREQUÊNCIA ALÉLICA AO LONGO DAS GERAÇÕES ═════════════════
    const gx = stageW + 50
    const gw = w - gx - 26
    const gy = h * 0.14
    const gh = h * 0.40

    caption(ctx, 'Frequência do alelo melânico', gx, gy - 12, A)
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, MAX_GEN], yDomain: [0, 1],
      xTicks: 4, yTicks: 4,
      fmtX: q2 => q2.toFixed(0), fmtY: q2 => q2.toFixed(1),
      xLabel: 'gerações', yLabel: 'p (alelo M)',
      rules: [{ y: 0.5, color: hexA(C.ink, 0.15) }],
      series: [{ points: s.hist.map(d => [d[0], d[1]]), color: Q.warn, width: 2, fill: true }],
      markers: [{ x: s.gen, y: pp, color: Q.kinetic, r: 4 }],
    })

    // ══ GENÓTIPOS (Hardy–Weinberg) ═══════════════════════════════
    const py = gy + gh + 54
    const ph = h - py - 56

    caption(ctx, 'Genótipos · Hardy–Weinberg', gx, py - 10, C.muted)

    // Barra empilhada: p², 2pq, q²
    const bxs = gx
    const bws = gw
    const bys = py + 10
    const bhs = 22
    let cx2 = bxs
    const segs = [
      { f: fMM, col: DARK,  l: 'MM' },
      { f: fMm, col: mix(DARK, LIGHT, 0.5), l: 'Mm' },
      { f: fmm, col: LIGHT, l: 'mm' },
    ]
    for (const sg of segs) {
      const sw = sg.f * bws
      ctx.fillStyle = sg.col
      ctx.fillRect(cx2, bys, sw, bhs)
      if (sw > 26) {
        text(ctx, sg.l, cx2 + sw / 2, bys + 15,
          { size: 9, weight: 700, color: sg.col === LIGHT ? '#333' : '#eee', align: 'center' })
      }
      cx2 += sw
    }
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.strokeRect(bxs + 0.5, bys + 0.5, bws, bhs)

    text(ctx, `p² = ${fMM.toFixed(3)}`, bxs, bys + bhs + 16, { size: 8.5, color: C.muted })
    text(ctx, `2pq = ${fMm.toFixed(3)}`, bxs + gw / 2, bys + bhs + 16,
      { size: 8.5, color: C.muted, align: 'center' })
    text(ctx, `q² = ${fmm.toFixed(3)}`, bxs + gw, bys + bhs + 16,
      { size: 8.5, color: C.muted, align: 'right' })

    // O ponto que mais confunde: heterozigotos escondem o alelo recessivo
    text(ctx, 'os heterozigotos Mm são ESCUROS — o alelo claro fica escondido',
      gx, bys + bhs + 40, { size: 8.5, color: C.dim })
    text(ctx, 'e é por isso que a seleção nunca elimina m de vez',
      gx, bys + bhs + 54, { size: 8.5, color: C.muted })

    text(ctx, 'Manchester, 1848–1900: 2 % → 98 % de mariposas escuras',
      gx, h - 16, { size: 8.5, weight: 700, color: Q.warn })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

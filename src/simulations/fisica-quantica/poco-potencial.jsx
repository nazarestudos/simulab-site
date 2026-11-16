// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Partícula num poço de potencial infinito
//
// Um elétron preso entre duas paredes impenetráveis só pode existir em
// ondas estacionárias que cabem inteiras na caixa — como a corda de um
// violão. Isso fixa o comprimento de onda e, com ele, a energia:
//
//   ψₙ(x) = √(2/L) · sen(nπx/L)        λₙ = 2L/n
//   Eₙ = n²·h² / (8mL²)                (elétron: 0,376 eV·nm² · n²/L²)
//
// Três consequências que a física clássica não tem:
//  · a energia mínima NÃO é zero (E₁ > 0): partícula presa não para;
//  · apertar a caixa custa energia — E cresce com 1/L²;
//  · a partícula tem lugares preferidos e lugares proibidos (os nós).
//
// Um estado único é estacionário: |ψ|² não muda no tempo. Somando dois
// níveis, a probabilidade passa a balançar de um lado para o outro com
// período T = h / ΔE — é o começo de todo movimento quântico.
//
// Interação: a parede da direita pode ser arrastada para mudar L.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  bars, hexA, clamp, handle,
} from '../engine'

const A = ACCENT['fisica-quantica']
const E_UNIT = 0.376030     // eV·nm² — h²/(8·mₑ)
const HC = 1239.84198       // eV·nm
const H_EVFS = 4.135668     // eV·fs — constante de Planck
const N_MAX = 6
const L_MIN = 0.2, L_MAX = 2
const SAMPLES = 160

const levelE = (n, L) => (E_UNIT * n * n) / (L * L)

function geom(view) {
  const { w, h } = view
  const compact = w < 700
  const stageW = compact ? w : w * 0.62
  const wx0 = 64
  const pxPerNm = (stageW - wx0 - 70) / L_MAX
  const top = h * 0.14, base = h * 0.80
  return { compact, stageW, wx0, pxPerNm, top, base }
}

const read = p => ({
  n: clamp(Math.round(p.nivel ?? 1), 1, N_MAX),
  L: clamp(p.largura ?? 1, L_MIN, L_MAX),
  mix: (p.superposicao ?? 0) > 0,
  wave: (p.onda ?? 1) > 0,
})

/** Re ψ e |ψ|² (em unidades de 2/L) no ponto u = x/L ∈ [0,1], instante t. */
function state(u, n, mix, t) {
  const w1 = 0.5 * n * n            // frequência de exibição ∝ Eₙ
  const s1 = Math.sin(n * Math.PI * u)
  if (!mix) return { re: s1 * Math.cos(w1 * t), dens: s1 * s1 }
  const m = n + 1, w2 = 0.5 * m * m
  const s2 = Math.sin(m * Math.PI * u)
  const re = (s1 * Math.cos(w1 * t) + s2 * Math.cos(w2 * t)) / Math.SQRT2
  const im = -(s1 * Math.sin(w1 * t) + s2 * Math.sin(w2 * t)) / Math.SQRT2
  return { re, dens: re * re + im * im }
}

export default function PocoPotencialCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, drag: false, hover: false, moved: false }), [])
  const step = useCallback((s, dt) => { s.t += dt }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    const { compact, stageW, wx0, pxPerNm, top, base } = geom(view)
    const { n, L, mix, wave } = read(p)
    const Lpx = L * pxPerNm
    const wx1 = wx0 + Lpx

    const E = levelE(n, L), E1 = levelE(1, L)
    const Enext = levelE(n + 1, L)
    const span = base - top - 12
    const yOf = k => base - ((k * k) / (N_MAX * N_MAX)) * span   // escada n² fiel

    // ── Paredes e fundo do poço ───────────────────────────────────
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(wx0 - 26, top - 6, 26, base - top + 6)
    ctx.fillRect(wx1, top - 6, 26, base - top + 6)
    ctx.strokeStyle = C.ink; ctx.lineWidth = 2.4
    ctx.beginPath()
    ctx.moveTo(wx0, top - 6); ctx.lineTo(wx0, base); ctx.lineTo(wx1, base); ctx.lineTo(wx1, top - 6)
    ctx.stroke()
    text(ctx, 'V = ∞', wx0 - 13, top + 10, { size: 9, color: C.muted, align: 'center' })
    text(ctx, 'V = ∞', wx1 + 13, top + 10, { size: 9, color: C.muted, align: 'center' })
    text(ctx, `L = ${L.toFixed(2)} nm`, (wx0 + wx1) / 2, base + 18, { size: 10, weight: 700, color: C.ink, align: 'center' })

    // ── Níveis de energia (escala real: Eₙ ∝ n²) ──────────────────
    for (let k = 1; k <= N_MAX; k++) {
      const y = Math.round(yOf(k)) + 0.5
      const on = k === n || (mix && k === n + 1)
      ctx.strokeStyle = on ? hexA(A, 0.9) : hexA(C.ink, 0.18)
      ctx.lineWidth = on ? 1.6 : 1
      ctx.setLineDash(on ? [] : [3, 4])
      ctx.beginPath(); ctx.moveTo(wx0, y); ctx.lineTo(wx1, y); ctx.stroke()
      ctx.setLineDash([])
      text(ctx, `n = ${k}`, wx0 - 32, y + 4, { size: 9, weight: on ? 700 : 500, color: on ? A : C.muted, align: 'right' })
    }

    // ── A onda, desenhada sobre o seu nível ───────────────────────
    const y0 = yOf(mix ? n + 0.5 : n)
    const amp = clamp(span / 6.5, 26, 50)

    // |ψ|²: onde a partícula tem chance de ser encontrada
    ctx.beginPath(); ctx.moveTo(wx0, y0)
    for (let i = 0; i <= SAMPLES; i++) {
      const u = i / SAMPLES
      ctx.lineTo(wx0 + u * Lpx, y0 - state(u, n, mix, s.t).dens * amp * (mix ? 0.75 : 1))
    }
    ctx.lineTo(wx1, y0); ctx.closePath()
    ctx.fillStyle = hexA(A, 0.28); ctx.fill()
    ctx.strokeStyle = hexA(A, 0.95); ctx.lineWidth = 1.6; ctx.stroke()

    // Re ψ: a onda em si, que oscila
    if (wave) {
      ctx.strokeStyle = hexA(C.ink, 0.75); ctx.lineWidth = 1.4; ctx.setLineDash([4, 3])
      ctx.beginPath()
      for (let i = 0; i <= SAMPLES; i++) {
        const u = i / SAMPLES
        const y = y0 - state(u, n, mix, s.t).re * amp
        i === 0 ? ctx.moveTo(wx0 + u * Lpx, y) : ctx.lineTo(wx0 + u * Lpx, y)
      }
      ctx.stroke(); ctx.setLineDash([])
    }

    // nós: pontos onde a partícula nunca é encontrada (só no estado puro)
    if (!mix) {
      for (let k = 1; k < n; k++) {
        ctx.fillStyle = Q.warn
        ctx.fillRect(wx0 + (k / n) * Lpx - 2.5, y0 - 2.5, 5, 5)
      }
    }

    // alça na parede direita
    handle(ctx, wx1, (top + base) / 2, 8, s.hover || s.drag, C.ink)

    caption(ctx, mix ? `soma dos níveis ${n} e ${n + 1}: a probabilidade balança`
                     : `estado n = ${n}: ${n} ventre${n > 1 ? 's' : ''}, ${n - 1} nó${n - 1 === 1 ? '' : 's'}`, 16, 24, A)
    if (!s.moved) caption(ctx, 'arraste a parede da direita para apertar ou alargar o poço', 16, 44, C.dim)
    text(ctx, 'área cheia: chance de encontrar a partícula   ·   tracejado: a onda ψ', 16, h - 14, { size: 8.5, color: C.muted })

    // ── Leituras ──────────────────────────────────────────────────
    const dE = Enext - E
    readout(ctx, w - 14, 14, [
      { k: 'nível n', v: mix ? `${n} + ${n + 1}` : `${n}`, c: A },
      { k: 'largura L', v: `${L.toFixed(2)} nm` },
      { k: 'Eₙ  energia', v: `${E.toFixed(3)} eV`, c: A },
      { k: 'E₁  energia mínima', v: `${E1.toFixed(3)} eV` },
      { k: 'λ  de de Broglie = 2L/n', v: `${((2 * L) / n).toFixed(3)} nm` },
      { k: 'nós internos', v: mix ? '—' : `${n - 1}`, c: Q.warn },
      { k: `ΔE até n = ${n + 1}`, v: `${dE.toFixed(3)} eV` },
      { k: 'fóton dessa transição', v: `${(HC / dE).toFixed(0)} nm` },
      { k: 'período do balanço h/ΔE', v: mix ? `${(H_EVFS / dE).toFixed(2)} fs` : '—' },
    ], { title: 'Eₙ = n²·h² / (8mL²)', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ Onde está a partícula? ═══════════════════════════════════
    const px = stageW + 34
    const pw = w - px - 26
    caption(ctx, 'chance de achá-la em cada terço do poço', px, 26, A)

    const thirds = [0, 0, 0]
    let total = 0
    for (let i = 0; i < 300; i++) {
      const u = (i + 0.5) / 300
      const d = state(u, n, mix, s.t).dens
      thirds[Math.min(2, Math.floor(u * 3))] += d
      total += d
    }
    const bh = h * 0.30
    bars(ctx, px + 10, 46, Math.min(pw - 20, 170), bh, ['esquerda', 'meio', 'direita'].map((label, i) => ({
      label, value: thirds[i] / total, max: 0.75, color: A,
    })), { barWidth: 34 })
    // linha do palpite clássico: 1/3 em cada parte
    const yc = 46 + bh - (1 / 3 / 0.75) * bh
    ctx.setLineDash([4, 4]); ctx.strokeStyle = Q.warn; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(px, yc); ctx.lineTo(px + Math.min(pw, 190), yc); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, 'clássico: 33 %', px + Math.min(pw, 190), yc - 5, { size: 8.5, color: Q.warn, align: 'right' })
    thirds.forEach((v, i) => {
      text(ctx, `${((v / total) * 100).toFixed(0)} %`, px + 10 + 17 + i * ((Math.min(pw - 20, 170) - 34) / 2), 40,
        { size: 9.5, weight: 700, color: C.ink, align: 'center' })
    })

    let ny = 46 + bh + 44
    caption(ctx, 'energias neste poço', px, ny, C.dim); ny += 18
    for (let k = 1; k <= N_MAX; k++) {
      const on = k === n || (mix && k === n + 1)
      text(ctx, `n = ${k}`, px, ny, { size: 9.5, weight: on ? 700 : 500, color: on ? A : C.muted })
      text(ctx, `${levelE(k, L).toFixed(2)} eV`, px + Math.min(pw, 150), ny, { size: 9.5, weight: on ? 700 : 500, color: on ? C.ink : C.muted, align: 'right' })
      ny += 15
    }
  }, [])

  // Arrastar a parede direita muda a largura do poço.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { wx0, pxPerNm, top, base } = geom(view)
    const wx1 = wx0 + read(p).L * pxPerNm
    const over = Math.abs(pt.x - wx1) < 16 && pt.y > top - 10 && pt.y < base + 10

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = false
    if (s.drag) {
      view.setParams?.({ largura: clamp((pt.x - wx0) / pxPerNm, L_MIN, L_MAX) })
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

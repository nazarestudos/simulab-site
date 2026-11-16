// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — Átomo de Bohr e o espectro do hidrogênio
//
// Num átomo de um elétron só, a energia não pode ter qualquer valor:
//
//   Eₙ = −13,6 eV · Z² / n²        n = 1, 2, 3, …
//
// Quando o elétron troca de nível, a diferença sai (ou entra) como UM
// fóton, de energia exata — e portanto de cor exata:
//
//   ΔE = 13,6·Z²·(1/n_f² − 1/n_i²)        λ = h·c / ΔE
//
// É por isso que o hidrogênio não brilha com todas as cores, e sim com
// linhas finas. As que terminam em n = 2 (série de Balmer) caem no
// visível: 656 nm (vermelho), 486 nm (azul-esverdeado), 434 e 410 nm
// (violeta). As que terminam em n = 1 (Lyman) são ultravioleta; em n = 3
// (Paschen), infravermelho.
//
// Interação: os dois níveis da transição podem ser arrastados no
// diagrama; os controles da página acompanham.
//
// Nota de desenho: os degraus encolhem 40 % a cada nível, não ∝ 1/n².
// Na escala verdadeira, n = 4, 5, 6 ficariam espremidos em poucos
// pixels logo abaixo do zero. As energias escritas ao lado são as reais.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, ACCENT, clear, text, caption, readout,
  arrow, glow, hexA, clamp, handle, wavelengthColor,
} from '../engine'

const A = ACCENT['fisica-quantica']
const RY = 13.605693      // eV — energia de Rydberg
const HC = 1239.84198     // eV·nm
const A0 = 0.0529177      // nm — raio de Bohr
const C_NM = 2.99792458e17 // nm/s
const N_MAX = 6
const CYCLE = 2.8         // s — duração de um salto animado

const SERIES = ['', 'Lyman', 'Balmer', 'Paschen', 'Brackett', 'Pfund', 'Humphreys']
const ATOMS = { 1: 'hidrogênio (H)', 2: 'hélio ionizado (He⁺)', 3: 'lítio duas vezes ionizado (Li²⁺)' }

const energy = (n, Z) => (-RY * Z * Z) / (n * n)
const region = nm => (nm < 380 ? 'ultravioleta' : nm <= 750 ? 'visível' : 'infravermelho')
const lineNm = (hi, lo, Z) => HC / (RY * Z * Z * (1 / (lo * lo) - 1 / (hi * hi)))
const ease = u => u * u * (3 - 2 * u)

/** Geometria do diagrama — a mesma para desenhar e para o ponteiro. */
function geom(view) {
  const { w, h } = view
  const compact = w < 700
  const stageW = compact ? w : w * 0.54
  const top = h * 0.16, bottom = h * 0.82
  const x0 = 64, x1 = stageW - 84
  const xa = x0 + (x1 - x0) * 0.42          // coluna do elétron
  // n = 1 embaixo; cada degrau acima é 60 % do anterior, de modo que os
  // níveis se aproximam do zero (no topo) sem se empilharem
  const Y = n => bottom - (bottom - top) * (1 - Math.pow(0.6, n - 1))
  return { compact, stageW, top, bottom, x0, x1, xa, Y }
}

const readLevels = p => ({
  ni: clamp(Math.round(p.nInicial ?? 3), 1, N_MAX),
  nf: clamp(Math.round(p.nFinal ?? 2), 1, N_MAX),
  Z:  clamp(Math.round(p.atomo ?? 1), 1, 3),
})

export default function AtomoBohrCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, drag: null, hover: null, moved: false }), [])
  const step = useCallback((s, dt) => { s.t += dt }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)
    const { compact, stageW, top, x0, x1, xa, Y } = geom(view)
    const { ni, nf, Z } = readLevels(p)

    const Ei = energy(ni, Z), Ef = energy(nf, Z)
    const dE = Math.abs(Ei - Ef)
    const emits = ni > nf, absorbs = ni < nf
    const lam = dE > 0 ? HC / dE : Infinity
    const col = dE > 0 ? wavelengthColor(lam) : null
    const lineCol = col ?? hexA(C.ink, 0.75)
    const lower = Math.min(ni, nf)

    // ── Níveis de energia ─────────────────────────────────────────
    ctx.setLineDash([4, 4]); ctx.strokeStyle = C.faint; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x0, top + 0.5); ctx.lineTo(x1, top + 0.5); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, '0 eV — elétron livre', x1 + 8, top + 4, { size: 9, color: C.muted })

    for (let n = 1; n <= N_MAX; n++) {
      const y = Math.round(Y(n)) + 0.5
      const on = n === ni || n === nf
      ctx.strokeStyle = on ? C.ink : hexA(C.ink, 0.4)
      ctx.lineWidth = on ? 2 : 1
      ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke()
      text(ctx, `n = ${n}`, x0 - 8, y + 4, { size: 9.5, weight: on ? 700 : 500, color: on ? C.ink : C.muted, align: 'right' })
      text(ctx, `${energy(n, Z).toFixed(2)} eV`, x1 + 8, y + 4, { size: 9, weight: on ? 700 : 500, color: on ? C.ink : C.muted })
    }

    // ── O salto ───────────────────────────────────────────────────
    const yi = Y(ni), yf = Y(nf)
    const xArrow = xa + 38
    if (ni !== nf) {
      arrow(ctx, xArrow, yi, xArrow, yf, { color: lineCol, width: 2.2 })
      text(ctx, `${emits ? 'emite' : 'absorve'} ${dE.toFixed(2)} eV`, xArrow + 12, (yi + yf) / 2 + 4,
        { size: 9.5, weight: 700, color: lineCol })
    }

    // Animação: em repouso → salto → fóton saindo (emissão), ou
    // fóton chegando → salto (absorção). Arrastando, tudo fica parado.
    const u = s.drag ? 0 : (s.t % CYCLE) / CYCLE
    let ey = yi
    let photon = null       // { x, y } da frente do fóton
    const ymid = (yi + yf) / 2
    if (emits) {
      if (u >= 0.3) ey = yi + (yf - yi) * ease(clamp((u - 0.3) / 0.15, 0, 1))
      if (u >= 0.45) photon = { x: xa + 16 + ((u - 0.45) / 0.55) * (x1 + 70 - xa), y: ymid }
    } else if (absorbs) {
      if (u < 0.45) photon = { x: x0 - 30 + (u / 0.45) * (xa - 14 - (x0 - 30)), y: ymid }
      else ey = yi + (yf - yi) * ease(clamp((u - 0.45) / 0.15, 0, 1))
    }

    if (photon) {
      // um trem de onda curto; o passo do zigue-zague acompanha λ
      const wig = clamp(4 + Math.log10(lam) * 2.2, 4, 14)
      ctx.strokeStyle = lineCol; ctx.lineWidth = 2; ctx.lineJoin = 'round'
      ctx.beginPath()
      for (let k = 0; k <= 26; k++) {
        const px = photon.x - k * 1.6
        const py = photon.y + Math.sin((k * 1.6 * Math.PI * 2) / wig) * 5 * Math.sin((k / 26) * Math.PI)
        k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
    }

    glow(ctx, xa, ey, 6, A, 0.9)

    // alças: de qual nível sai e em qual nível chega
    handle(ctx, xa, yi, 7, s.hover === 'i' || s.drag === 'i', A)
    if (ni !== nf) handle(ctx, xArrow, yf, 6, s.hover === 'f' || s.drag === 'f', lineCol)

    caption(ctx, ni === nf ? 'escolha dois níveis diferentes'
      : emits ? `emissão: o elétron cai de n = ${ni} para n = ${nf}`
              : `absorção: o elétron sobe de n = ${ni} para n = ${nf}`, 16, 24, ni === nf ? C.muted : lineCol)
    if (!s.moved) caption(ctx, 'arraste o elétron ou a ponta da seta para outro nível', 16, 44, C.dim)
    text(ctx, 'níveis espaçados fora de escala, para caberem; as energias ao lado são as reais',
      16, h - 14, { size: 8.5, color: C.muted })

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'átomo', v: ATOMS[Z] },
      { k: 'nível de partida', v: `n = ${ni}`, c: A },
      { k: 'nível de chegada', v: `n = ${nf}` },
      { k: 'E de partida', v: `${Ei.toFixed(2)} eV` },
      { k: 'E de chegada', v: `${Ef.toFixed(2)} eV` },
      { k: 'ΔE do fóton', v: ni === nf ? '—' : `${dE.toFixed(3)} eV`, c: col ?? undefined },
      { k: 'λ  comprimento de onda', v: ni === nf ? '—' : `${lam >= 1000 ? (lam / 1000).toFixed(3) + ' µm' : lam.toFixed(1) + ' nm'}`, c: col ?? undefined },
      { k: 'f  frequência', v: ni === nf ? '—' : `${(C_NM / lam / 1e14).toFixed(2)}e14 Hz` },
      { k: 'faixa', v: ni === nf ? '—' : region(lam) },
      { k: 'série', v: ni === nf ? '—' : (SERIES[lower] ?? `n = ${lower}`) },
      { k: 'raio da órbita de partida', v: `${((ni * ni * A0) / Z).toFixed(3)} nm` },
    ], { title: 'Eₙ = −13,6 eV · Z² / n²', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ ESPECTRO: onde a linha cai ═══════════════════════════════
    const px = stageW + 34
    const pw = w - px - 26
    const ay = h * 0.34                                   // eixo dos comprimentos de onda
    const lo = Math.log10(10), hi = Math.log10(6000)
    const toX = nm => px + ((Math.log10(clamp(nm, 10, 6000)) - lo) / (hi - lo)) * pw

    caption(ctx, ni === nf ? 'espectro' : `série de ${SERIES[lower] ?? 'n = ' + lower}: tudo que termina em n = ${lower}`, px, 26, A)

    // faixa do visível, pintada com as cores de verdade
    for (let x = toX(380); x < toX(750); x += 2) {
      const nm = Math.pow(10, lo + ((x - px) / pw) * (hi - lo))
      ctx.fillStyle = wavelengthColor(nm) ?? '#000'
      ctx.fillRect(x, ay - 46, 2.2, 10)
    }
    text(ctx, 'ultravioleta', px, ay - 54, { size: 8.5, color: C.muted })
    text(ctx, 'visível', (toX(380) + toX(750)) / 2, ay - 54, { size: 8.5, color: C.dim, align: 'center' })
    text(ctx, 'infravermelho', px + pw, ay - 54, { size: 8.5, color: C.muted, align: 'right' })

    ctx.strokeStyle = C.line; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(px, ay + 0.5); ctx.lineTo(px + pw, ay + 0.5); ctx.stroke()
    for (const tick of [10, 100, 1000]) {
      const tx = toX(tick)
      ctx.beginPath(); ctx.moveTo(tx + 0.5, ay); ctx.lineTo(tx + 0.5, ay + 5); ctx.stroke()
      text(ctx, tick === 1000 ? '1 µm' : `${tick} nm`, tx, ay + 18, { size: 8.5, color: C.muted, align: 'center' })
    }

    // todas as linhas da série (de n = lower+1 até N_MAX para n = lower)
    for (let n = lower + 1; n <= N_MAX; n++) {
      const nm = lineNm(n, lower, Z)
      const cur = n === Math.max(ni, nf) && ni !== nf
      ctx.strokeStyle = wavelengthColor(nm) ?? hexA(C.ink, cur ? 0.9 : 0.4)
      ctx.lineWidth = cur ? 3 : 1.4
      const x = toX(nm)
      ctx.beginPath(); ctx.moveTo(x, ay - 32); ctx.lineTo(x, ay); ctx.stroke()
    }
    if (ni !== nf) {
      const x = toX(lam)
      ctx.fillStyle = C.ink
      ctx.beginPath(); ctx.moveTo(x, ay + 26); ctx.lineTo(x - 5, ay + 35); ctx.lineTo(x + 5, ay + 35); ctx.closePath(); ctx.fill()
      text(ctx, 'esta linha', clamp(x, px + 28, px + pw - 28), ay + 48, { size: 9, weight: 700, color: C.ink, align: 'center' })
    }

    // amostra da cor: é isto que um olho veria
    const sy = h * 0.56, sh = Math.min(74, h * 0.16)
    caption(ctx, 'a cor desta luz', px, sy - 10, C.dim)
    if (col) {
      ctx.fillStyle = col
      ctx.fillRect(px, sy, pw, sh)
      text(ctx, `${lam.toFixed(1)} nm`, px + 12, sy + sh / 2 + 5, { size: 13, weight: 700, color: '#000' })
    } else {
      ctx.setLineDash([5, 5]); ctx.strokeStyle = C.faint; ctx.lineWidth = 1
      ctx.strokeRect(px + 0.5, sy + 0.5, pw, sh)
      ctx.setLineDash([])
      text(ctx, ni === nf ? 'sem transição, sem luz' : `invisível ao olho: ${region(lam)}`,
        px + 12, sy + sh / 2 + 4, { size: 10, weight: 700, color: C.dim })
    }

    const ny = sy + sh + 26
    text(ctx, 'Cada elemento tem seu conjunto de linhas.', px, ny, { size: 9, color: C.muted })
    text(ctx, 'É assim que se descobre do que são feitas', px, ny + 14, { size: 9, color: C.muted })
    text(ctx, 'as estrelas sem sair da Terra.', px, ny + 28, { size: 9, color: C.muted })
  }, [])

  // Arrastar: o elétron (nível de partida) ou a ponta da seta (chegada)
  // seguem o ponteiro e grudam no nível mais próximo.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { xa, Y } = geom(view)
    const { ni, nf } = readLevels(p)
    const near = (x, y) => Math.hypot(pt.x - x, pt.y - y) < 24
    const over = near(xa, Y(ni)) ? 'i' : (ni !== nf && near(xa + 38, Y(nf))) ? 'f' : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag) {
      let best = 1
      for (let n = 2; n <= N_MAX; n++) if (Math.abs(Y(n) - pt.y) < Math.abs(Y(best) - pt.y)) best = n
      view.setParams?.({ [s.drag === 'i' ? 'nInicial' : 'nFinal']: best })
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

// ═══════════════════════════════════════════════════════════════════
// INFORMÁTICA — Algoritmos de Ordenação: uma CORRIDA
//
// Três algoritmos, o MESMO array embaralhado, rodando lado a lado. Não é
// uma animação bonitinha: cada operação é contada de verdade.
//
//   Bubble Sort     O(n²)        ~n²/2 comparações
//   Insertion Sort  O(n²)        rápido em arrays quase ordenados
//   Merge Sort      O(n log n)   estável, mas precisa de memória extra
//   Quick Sort      O(n log n)   in-place; O(n²) no pior caso
//
// Com n = 40, n² = 1600 e n·log₂n ≈ 213. É uma diferença de ~7×, e ela
// aparece na tela: o Bubble ainda está arrastando bolhas quando o Merge
// já terminou.
//
// E a diferença EXPLODE com n. Para ordenar 1 milhão de itens:
//   n·log₂n ≈ 20 milhões de operações  → menos de um segundo
//   n²      ≈ 1 trilhão de operações   → mais de uma semana
//
// É por isso que a escolha do algoritmo importa mais que a velocidade
// do computador.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, rng, mix,
} from '../engine'

const A = ACCENT['informatica']
const N = 40

// ── Gravadores de operações ──────────────────────────────────────
// Cada algoritmo roda até o fim de uma vez e grava um "filme" de frames
// (snapshots + destaques). A animação depois só reproduz. Assim os
// contadores são exatos e o replay é barato.

function recordBubble(arr) {
  const a = [...arr]
  const frames = []
  let cmp = 0, swaps = 0
  for (let i = 0; i < a.length - 1; i++) {
    let swapped = false
    for (let j = 0; j < a.length - 1 - i; j++) {
      cmp++
      frames.push({ a: [...a], hi: [j, j + 1], done: a.length - i, cmp, swaps })
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        swaps++
        swapped = true
      }
    }
    if (!swapped) break
  }
  frames.push({ a: [...a], hi: [], done: 0, cmp, swaps })
  return frames
}

function recordInsertion(arr) {
  const a = [...arr]
  const frames = []
  let cmp = 0, swaps = 0
  for (let i = 1; i < a.length; i++) {
    const key = a[i]
    let j = i - 1
    while (j >= 0) {
      cmp++
      frames.push({ a: [...a], hi: [j, j + 1], sorted: i, cmp, swaps })
      if (a[j] <= key) break
      a[j + 1] = a[j]
      swaps++
      j--
    }
    a[j + 1] = key
  }
  frames.push({ a: [...a], hi: [], sorted: a.length, cmp, swaps })
  return frames
}

function recordMerge(arr) {
  const a = [...arr]
  const frames = []
  let cmp = 0, swaps = 0

  const merge = (lo, mid, hi) => {
    const left = a.slice(lo, mid + 1)
    const right = a.slice(mid + 1, hi + 1)
    let i = 0, j = 0, k = lo
    while (i < left.length && j < right.length) {
      cmp++
      if (left[i] <= right[j]) a[k++] = left[i++]
      else { a[k++] = right[j++]; swaps++ }
      frames.push({ a: [...a], hi: [k - 1], range: [lo, hi], cmp, swaps })
    }
    while (i < left.length) { a[k++] = left[i++]; frames.push({ a: [...a], hi: [k - 1], range: [lo, hi], cmp, swaps }) }
    while (j < right.length) { a[k++] = right[j++]; frames.push({ a: [...a], hi: [k - 1], range: [lo, hi], cmp, swaps }) }
  }
  const sort = (lo, hi) => {
    if (lo >= hi) return
    const mid = (lo + hi) >> 1
    sort(lo, mid); sort(mid + 1, hi); merge(lo, mid, hi)
  }
  sort(0, a.length - 1)
  frames.push({ a: [...a], hi: [], cmp, swaps })
  return frames
}

function recordQuick(arr) {
  const a = [...arr]
  const frames = []
  let cmp = 0, swaps = 0

  const part = (lo, hi) => {
    const pivot = a[hi]
    let i = lo - 1
    for (let j = lo; j < hi; j++) {
      cmp++
      frames.push({ a: [...a], hi: [j, hi], range: [lo, hi], cmp, swaps })
      if (a[j] < pivot) {
        i++
        ;[a[i], a[j]] = [a[j], a[i]]
        swaps++
      }
    }
    ;[a[i + 1], a[hi]] = [a[hi], a[i + 1]]
    swaps++
    return i + 1
  }
  const sort = (lo, hi) => {
    if (lo >= hi) return
    const p = part(lo, hi)
    sort(lo, p - 1); sort(p + 1, hi)
  }
  sort(0, a.length - 1)
  frames.push({ a: [...a], hi: [], cmp, swaps })
  return frames
}

const ALGOS = [
  { name: 'Bubble Sort',    big: 'O(n²)',      rec: recordBubble,    col: '#b5544e' },
  { name: 'Insertion Sort', big: 'O(n²)',      rec: recordInsertion, col: '#c9a24a' },
  { name: 'Merge Sort',     big: 'O(n log n)', rec: recordMerge,     col: '#7ea88f' },
  { name: 'Quick Sort',     big: 'O(n log n)', rec: recordQuick,     col: '#7a8fa8' },
]

export default function OrdenacaoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(Math.floor(Math.random() * 1e6))
    const base = Array.from({ length: N }, (_, i) => i + 1)
    // embaralha (Fisher–Yates)
    for (let i = N - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1))
      ;[base[i], base[j]] = [base[j], base[i]]
    }
    const runs = ALGOS.map(al => ({ ...al, frames: al.rec(base) }))
    return {
      base,
      runs,
      cursor: 0,          // índice de frame (fracionário)
      maxLen: Math.max(...runs.map(r => r.frames.length)),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const speed = p.speed ?? 5
    s.cursor += dt * speed * 26
    if (s.cursor > s.maxLen + 90) s.cursor = 0    // reinicia a corrida
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const compact = w < 720
    const cols = compact ? 1 : 2
    const rows = Math.ceil(ALGOS.length / cols)

    const padX = 18, padY = 44
    const cellW = (w - padX * 2 - (cols - 1) * 22) / cols
    const cellH = (h - padY - 56 - (rows - 1) * 24) / rows

    caption(ctx, `mesma lista de ${N} números · quem termina primeiro?`, padX, 24, A)

    let finishedFirst = null

    s.runs.forEach((run, idx) => {
      const cx = padX + (idx % cols) * (cellW + 22)
      const cy = padY + Math.floor(idx / cols) * (cellH + 24)

      const fi = Math.min(Math.floor(s.cursor), run.frames.length - 1)
      const f = run.frames[fi]
      const done = fi >= run.frames.length - 1

      if (done && finishedFirst === null) finishedFirst = run

      // ── Barras ─────────────────────────────────────────────────
      const barW = cellW / N
      const maxV = N
      for (let i = 0; i < N; i++) {
        const v = f.a[i]
        const bh = (v / maxV) * (cellH - 30)
        const bx = cx + i * barW
        const by = cy + (cellH - 30) - bh + 22

        const isHi = f.hi && f.hi.includes(i)
        const inRange = f.range && i >= f.range[0] && i <= f.range[1]

        let col
        if (done) col = hexA(run.col, 0.95)
        else if (isHi) col = Q.warn
        else if (inRange) col = hexA(run.col, 0.75)
        else col = hexA(run.col, 0.32)

        ctx.fillStyle = col
        ctx.fillRect(bx, by, Math.max(1, barW - 1), bh)
      }

      // ── Cabeçalho do painel ────────────────────────────────────
      text(ctx, run.name, cx, cy + 10, { size: 10, weight: 700, color: run.col })
      text(ctx, run.big, cx + cellW, cy + 10,
        { size: 9, weight: 700, color: hexA(run.col, 0.7), align: 'right' })

      // ── Contadores ─────────────────────────────────────────────
      const label = done
        ? `concluído · ${f.cmp} comparações`
        : `${f.cmp} comparações · ${f.swaps} trocas`
      text(ctx, label, cx, cy + cellH + 14,
        { size: 8.5, weight: done ? 700 : 500, color: done ? Q.potential : C.muted })

      // Barra de progresso
      const prog = clamp(s.cursor / run.frames.length, 0, 1)
      ctx.fillStyle = 'rgba(255,255,255,0.05)'
      ctx.fillRect(cx, cy + cellH + 18, cellW, 2)
      ctx.fillStyle = done ? Q.potential : run.col
      ctx.fillRect(cx, cy + cellH + 18, cellW * prog, 2)
    })

    // ══ Placar ═══════════════════════════════════════════════════
    const totals = s.runs.map(r => {
      const last = r.frames[r.frames.length - 1]
      return { name: r.name, cmp: last.cmp, col: r.col, len: r.frames.length }
    }).sort((x, y) => x.cmp - y.cmp)

    const bestCmp = totals[0].cmp
    const worstCmp = totals[totals.length - 1].cmp

    readout(ctx, w - 14, h - 14 - 118, [
      ...totals.map(t => ({
        k: t.name.replace(' Sort', ''),
        v: `${t.cmp} comp.`,
        c: t.col,
      })),
      { k: 'pior / melhor', v: `${(worstCmp / bestCmp).toFixed(1)}×`, c: Q.warn },
    ], { title: 'Comparações totais', anchor: 'right', accent: A, minWidth: 190 })

    // Teoria vs medido — a prova de que a notação O() não é decoração
    const n2 = (N * N) / 2
    const nlogn = N * Math.log2(N)
    text(ctx, `n = ${N}  ·  n²/2 ≈ ${n2.toFixed(0)}  ·  n·log₂n ≈ ${nlogn.toFixed(0)}`,
      18, h - 32, { size: 9, color: C.dim })
    text(ctx, 'com 1 milhão de itens essa diferença vira: menos de 1 s contra mais de 1 semana',
      18, h - 16, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

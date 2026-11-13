// ═══════════════════════════════════════════════════════════════════
// INFORMÁTICA — Árvores Binárias de Busca (e por que AVL existe)
//
// Numa BST, buscar custa O(altura). Se a árvore está equilibrada,
// altura ≈ log₂ n e a busca é relâmpago. O problema é que isso NÃO é
// garantido.
//
// O PIOR CASO É O MAIS COMUM: insira dados já ORDENADOS numa BST comum e
// cada novo item vai sempre para a direita. A árvore degenera numa LISTA
// LIGADA — altura n, busca O(n). Toda a vantagem evapora, e acontece
// justamente no caso mais provável do mundo real (dados vindos ordenados
// de um banco).
//
// A resposta é a árvore AVL. Ela mantém, para todo nó,
//
//     |altura(esq) − altura(dir)| ≤ 1
//
// e, quando esse invariante quebra, ROTACIONA para restaurá-lo. As
// rotações são O(1) e garantem altura ≤ 1,44·log₂ n para SEMPRE.
//
// Compare os dois modos com dados ordenados: a BST vira um espeto de
// altura 15; a AVL fica com altura 4. Mesmo dado, mesma inserção.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, rng,
} from '../engine'

const A = ACCENT['informatica']

const N_KEYS = 15

// ── Nós ──────────────────────────────────────────────────────────
const node = v => ({ v, l: null, r: null, h: 1 })
const height = n => (n ? n.h : 0)
const update = n => { n.h = 1 + Math.max(height(n.l), height(n.r)) }
const balance = n => (n ? height(n.l) - height(n.r) : 0)

/** Rotação simples à direita. O coração do rebalanceamento. */
function rotR(y) {
  const x = y.l
  y.l = x.r
  x.r = y
  update(y); update(x)
  return x
}
function rotL(x) {
  const y = x.r
  x.r = y.l
  y.l = x
  update(x); update(y)
  return y
}

/** Insere. Se `avl`, rebalanceia no caminho de volta. */
function insert(n, v, avl, stats) {
  if (!n) return node(v)
  stats.comparisons++
  if (v < n.v) n.l = insert(n.l, v, avl, stats)
  else if (v > n.v) n.r = insert(n.r, v, avl, stats)
  else return n

  update(n)
  if (!avl) return n

  const b = balance(n)
  // esquerda-esquerda
  if (b > 1 && v < n.l.v) { stats.rotations++; return rotR(n) }
  // direita-direita
  if (b < -1 && v > n.r.v) { stats.rotations++; return rotL(n) }
  // esquerda-direita
  if (b > 1 && v > n.l.v) { stats.rotations += 2; n.l = rotL(n.l); return rotR(n) }
  // direita-esquerda
  if (b < -1 && v < n.r.v) { stats.rotations += 2; n.r = rotR(n.r); return rotL(n) }
  return n
}

/** Caminho da raiz até `v` — é literalmente o que a busca percorre. */
function searchPath(root, v) {
  const path = []
  let n = root
  while (n) {
    path.push(n)
    if (v === n.v) return { path, found: true }
    n = v < n.v ? n.l : n.r
  }
  return { path, found: false }
}

export default function ArvoresCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const sorted = (p.sorted ?? 0) > 50
    const rand = rng(Math.floor(Math.random() * 1e6))

    let keys
    if (sorted) {
      keys = Array.from({ length: N_KEYS }, (_, i) => (i + 1) * 6)
    } else {
      keys = Array.from({ length: N_KEYS }, (_, i) => (i + 1) * 6)
      for (let i = keys.length - 1; i > 0; i--) {
        const j = Math.floor(rand() * (i + 1))
        ;[keys[i], keys[j]] = [keys[j], keys[i]]
      }
    }
    return {
      keys,
      sorted,
      avl: (p.avl ?? 0) > 50,
      inserted: 0,
      acc: 0,
      bst: null,
      statsBst: { comparisons: 0, rotations: 0 },
      target: null,
      seekT: 0,
      seekPath: [],
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const sorted = (p.sorted ?? 0) > 50
    const avl = (p.avl ?? 0) > 50
    const speed = p.speed ?? 2

    // Trocar o modo reconstrói a árvore do zero
    if (sorted !== s.sorted || avl !== s.avl) {
      const rand = rng(Math.floor(Math.random() * 1e6))
      let keys = Array.from({ length: N_KEYS }, (_, i) => (i + 1) * 6)
      if (!sorted) {
        for (let i = keys.length - 1; i > 0; i--) {
          const j = Math.floor(rand() * (i + 1))
          ;[keys[i], keys[j]] = [keys[j], keys[i]]
        }
      }
      s.keys = keys
      s.sorted = sorted
      s.avl = avl
      s.inserted = 0
      s.acc = 0
      s.bst = null
      s.statsBst = { comparisons: 0, rotations: 0 }
      s.target = null
      s.seekPath = []
      return
    }

    s.acc += dt * speed * 0.9

    if (s.inserted < s.keys.length) {
      if (s.acc >= 1) {
        s.acc = 0
        s.bst = insert(s.bst, s.keys[s.inserted], s.avl, s.statsBst)
        s.inserted++
      }
    } else {
      // Árvore pronta → fica buscando chaves aleatórias
      s.seekT += dt * speed * 0.55
      if (s.seekT >= 1) {
        s.seekT = 0
        const v = s.keys[Math.floor(Math.random() * s.keys.length)]
        s.target = v
        s.seekPath = searchPath(s.bst, v).path
      }
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const H = height(s.bst)
    const n = s.inserted
    const ideal = n > 0 ? Math.ceil(Math.log2(n + 1)) : 0
    const degenerate = H > ideal * 2 && n > 5

    const compact = w < 720
    const stageW = compact ? w : w * 0.68

    // ── Layout da árvore ─────────────────────────────────────────
    // Coordenada x pelo percurso EM ORDEM (in-order): garante que nenhum
    // nó se sobreponha, e mostra a propriedade da BST — in-order é a
    // sequência ORDENADA.
    const order = []
    const inorder = (nd) => { if (!nd) return; inorder(nd.l); order.push(nd); inorder(nd.r) }
    inorder(s.bst)

    const top = h * 0.16
    const bottom = h * 0.86
    const levelH = H > 1 ? Math.min((bottom - top) / (H - 1), 56) : 0
    const spanX = stageW - 70
    const stepX = order.length > 1 ? spanX / (order.length - 1) : 0

    const pos = new Map()
    order.forEach((nd, i) => {
      pos.set(nd, { x: 40 + i * stepX, y: 0 })
    })
    // profundidade → y
    const setDepth = (nd, d) => {
      if (!nd) return
      pos.get(nd).y = top + d * levelH
      setDepth(nd.l, d + 1)
      setDepth(nd.r, d + 1)
    }
    setDepth(s.bst, 0)

    const onPath = new Set(s.seekPath)

    // ── Arestas ──────────────────────────────────────────────────
    const drawEdges = (nd) => {
      if (!nd) return
      const P = pos.get(nd)
      for (const kid of [nd.l, nd.r]) {
        if (!kid) continue
        const K = pos.get(kid)
        const hot = onPath.has(nd) && onPath.has(kid)
        ctx.strokeStyle = hot ? Q.warn : hexA(C.ink, 0.16)
        ctx.lineWidth = hot ? 2 : 1
        ctx.beginPath()
        ctx.moveTo(P.x, P.y)
        ctx.lineTo(K.x, K.y)
        ctx.stroke()
        drawEdges(kid)
      }
    }
    drawEdges(s.bst)

    // ── Nós ──────────────────────────────────────────────────────
    const drawNodes = (nd) => {
      if (!nd) return
      drawNodes(nd.l); drawNodes(nd.r)
      const P = pos.get(nd)
      const hot = onPath.has(nd)
      const isTarget = s.target === nd.v && hot
      const bal = balance(nd)
      const unbalanced = Math.abs(bal) > 1

      const r = 12
      ctx.fillStyle = isTarget ? Q.potential
        : hot ? hexA(Q.warn, 0.85)
        : unbalanced ? hexA(Q.danger, 0.55)
        : hexA(A, 0.28)
      ctx.beginPath(); ctx.arc(P.x, P.y, r, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = hot ? Q.warn : hexA(A, 0.7)
      ctx.lineWidth = hot ? 1.8 : 1
      ctx.stroke()

      text(ctx, String(nd.v), P.x, P.y + 3.5,
        { size: 9, weight: 700, color: C.ink, align: 'center' })

      // fator de equilíbrio (só no modo AVL, onde ele importa)
      if (s.avl && H <= 6) {
        text(ctx, String(bal), P.x + r + 2, P.y - r + 2,
          { size: 7.5, color: bal === 0 ? C.muted : Q.field })
      }
    }
    drawNodes(s.bst)

    // ── Rótulos ──────────────────────────────────────────────────
    const modeTxt = s.avl ? 'AVL — auto-balanceada' : 'BST simples'
    const dataTxt = s.sorted ? 'inserindo dados ORDENADOS' : 'inserindo dados embaralhados'
    caption(ctx, `${modeTxt}  ·  ${dataTxt}`, 22, 24, s.avl ? Q.potential : A)

    if (degenerate) {
      text(ctx, 'DEGENERADA — virou uma lista ligada. Busca O(n).',
        22, 42, { size: 9.5, weight: 700, color: Q.danger })
    }

    if (s.target !== null && s.inserted >= s.keys.length) {
      text(ctx, `buscando ${s.target} — ${s.seekPath.length} comparações`,
        22, h - 16, { size: 9, weight: 700, color: Q.warn })
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const worst = H
    readout(ctx, w - 14, 14, [
      { k: 'n  nós',        v: n, c: A },
      { k: 'altura real',   v: H, c: degenerate ? Q.danger : Q.potential },
      { k: 'log₂(n+1) ideal', v: ideal, c: Q.field },
      { k: 'busca pior caso', v: `${worst} comparações`, c: degenerate ? Q.danger : Q.potential },
      { k: 'rotações',      v: s.statsBst.rotations, c: s.avl ? Q.warn : C.muted },
      { k: 'complexidade',  v: degenerate ? 'O(n)' : 'O(log n)',
        c: degenerate ? Q.danger : Q.potential },
    ], { title: s.avl ? '|bal| ≤ 1 garantido' : 'sem garantia de equilíbrio',
         anchor: 'right', accent: A, minWidth: 214 })

    if (compact) return

    // ══ Painel lateral ═══════════════════════════════════════════
    const tx = stageW + 20
    let ty = h * 0.52

    if (s.sorted && !s.avl) {
      text(ctx, 'O pior caso é o mais comum:', tx, ty, { size: 9.5, weight: 700, color: Q.danger })
      ty += 16
      text(ctx, 'dados vêm ordenados o tempo', tx, ty, { size: 8.5, color: C.dim })
      ty += 13
      text(ctx, 'todo (de um banco, de um', tx, ty, { size: 8.5, color: C.dim })
      ty += 13
      text(ctx, 'arquivo já classificado).', tx, ty, { size: 8.5, color: C.dim })
      ty += 22
      text(ctx, 'A BST então degenera e você', tx, ty, { size: 8.5, color: C.muted })
      ty += 13
      text(ctx, 'perde TODA a vantagem da árvore.', tx, ty, { size: 8.5, color: C.muted })
      ty += 22
      text(ctx, '→ ligue o modo AVL e compare.', tx, ty, { size: 9, weight: 700, color: Q.potential })
    } else if (s.avl) {
      text(ctx, 'A AVL rotaciona ao inserir', tx, ty, { size: 9.5, weight: 700, color: Q.potential })
      ty += 16
      text(ctx, `— já foram ${s.statsBst.rotations} rotações.`, tx, ty, { size: 8.5, color: C.dim })
      ty += 22
      text(ctx, 'Cada rotação custa O(1) e', tx, ty, { size: 8.5, color: C.muted })
      ty += 13
      text(ctx, 'devolve o invariante |bal| ≤ 1.', tx, ty, { size: 8.5, color: C.muted })
      ty += 22
      text(ctx, 'Resultado: altura ≤ 1,44·log₂n', tx, ty, { size: 9, weight: 700, color: Q.field })
      ty += 13
      text(ctx, 'SEMPRE — inclusive no pior caso.', tx, ty, { size: 8.5, color: C.muted })
      ty += 22
      text(ctx, 'os números ao lado dos nós são', tx, ty, { size: 8, color: C.muted })
      ty += 12
      text(ctx, 'o fator de equilíbrio (esq − dir).', tx, ty, { size: 8, color: C.muted })
    } else {
      text(ctx, 'Com dados embaralhados, a BST', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'fica razoavelmente equilibrada', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'por sorte — não por garantia.', tx, ty, { size: 9, color: C.dim })
      ty += 22
      text(ctx, '→ ligue "dados ordenados" e veja', tx, ty, { size: 9, weight: 700, color: Q.warn })
      ty += 13
      text(ctx, '   a árvore desabar numa lista.', tx, ty, { size: 9, weight: 700, color: Q.warn })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

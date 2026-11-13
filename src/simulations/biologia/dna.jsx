// ═══════════════════════════════════════════════════════════════════
// BIOLOGIA — DNA: dupla hélice, replicação e transcrição
//
// A geometria é a real (B-DNA):
//   · 10,5 pares de base por volta completa
//   · 3,4 Å de subida por par  →  passo da hélice = 34 Å
//   · fitas ANTIPARALELAS: uma corre 5'→3', a outra 3'→5'
//
// O detalhe que decide tudo: A–T faz 2 pontes de hidrogênio, C–G faz 3.
// Consequências que a simulação mostra de verdade:
//
// · DESNATURAÇÃO — ao subir a temperatura, as regiões ricas em A–T
//   abrem PRIMEIRO, porque são as mais fracas. A T_m depende do conteúdo
//   de G+C:   Tm ≈ 64,9 + 41·(G+C − 16,4)/N
//
// · REPLICAÇÃO — como a polimerase só sabe sintetizar 5'→3', uma fita
//   sai contínua (LÍDER) e a outra sai em pedaços (fragmentos de
//   OKAZAKI), costurados depois pela ligase. Não é um detalhe chato: é
//   uma consequência inevitável da antiparalelidade.
//
// · TRANSCRIÇÃO — o RNA troca T por URACILA e a ribose leva um OH a mais.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, rng, glow, mix,
} from '../engine'

const A = ACCENT['biologia']

const BASE_COL = {
  A: '#7ea88f',   // adenina
  T: '#a89a7a',   // timina
  C: '#7a8fa8',   // citosina
  G: '#a67e93',   // guanina
  U: '#c9a24a',   // uracila (só no RNA)
}
const PAIR = { A: 'T', T: 'A', C: 'G', G: 'C' }
const BONDS = { A: 2, T: 2, C: 3, G: 3 }   // pontes de hidrogênio

const N_BASES = 26

export default function DnaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(1953)   // ano do paper de Watson & Crick
    const seq = Array.from({ length: N_BASES }, () => {
      const r = rand()
      return r < 0.28 ? 'A' : r < 0.56 ? 'T' : r < 0.78 ? 'C' : 'G'
    })
    return {
      seq,
      spin: 0,
      fork: 0,        // posição da forquilha de replicação
      rna: 0,         // quanto de RNA já foi transcrito
      t: 0,
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const phase = p.phase ?? 0
    const speed = p.transcription ?? 20

    s.t += dt
    s.spin += dt * 0.32

    if (phase < 34) {
      s.fork = 0; s.rna = 0
    } else if (phase < 67) {
      // Replicação
      s.fork += dt * (speed / 40)
      if (s.fork > 1) s.fork = 0
      s.rna = 0
    } else {
      // Transcrição
      s.rna += dt * (speed / 40)
      if (s.rna > 1) s.rna = 0
      s.fork = 0
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const phase = p.phase ?? 0
    const temp  = p.temperature ?? 37

    // Conteúdo GC e temperatura de melting (fórmula de Wallace estendida)
    const gc = s.seq.filter(b => b === 'G' || b === 'C').length
    const gcPct = (gc / N_BASES) * 100
    const Tm = 64.9 + 41 * (gc - 16.4) / N_BASES

    const mode = phase < 34 ? 'helice' : phase < 67 ? 'replicacao' : 'transcricao'
    const modeLabel = { helice: 'Dupla hélice', replicacao: 'Replicação', transcricao: 'Transcrição' }[mode]

    const compact = w < 720
    const stageW = compact ? w : w * 0.66

    const cx = stageW * 0.5
    const top = h * 0.10
    const bot = h * 0.88
    const span = bot - top
    const amp = Math.min(stageW * 0.16, 78)

    // ── Desnaturação térmica ─────────────────────────────────────
    // Cada par abre com uma probabilidade que depende da sua força.
    // A–T (2 pontes) abre antes de C–G (3 pontes). Isso é literalmente
    // o que acontece num termociclador de PCR.
    const meltFrac = clamp((temp - (Tm - 18)) / 24, 0, 1)

    const isOpen = (i) => {
      const b = s.seq[i]
      const weak = BONDS[b] === 2
      // pares fracos abrem com metade da "energia"
      const thresh = weak ? 0.35 : 0.75
      return meltFrac > thresh
    }

    // ── Hélice ───────────────────────────────────────────────────
    // 10,5 bases por volta: o ângulo por base é 2π/10,5.
    const perTurn = 10.5
    const angOf = i => (i / perTurn) * Math.PI * 2 + s.spin

    for (let i = 0; i < N_BASES; i++) {
      const y = top + (i / (N_BASES - 1)) * span
      const ang = angOf(i)

      const forkY = mode === 'replicacao' ? s.fork : mode === 'transcricao' ? s.rna : 0
      const passed = (i / (N_BASES - 1)) < forkY
      const open = isOpen(i) || (mode !== 'helice' && passed)

      // Separação das fitas quando aberto
      const sep = open ? amp * 0.55 : 0

      const x1 = cx + Math.cos(ang) * amp - sep
      const x2 = cx - Math.cos(ang) * amp + sep
      const depth1 = (Math.sin(ang) + 1) / 2     // profundidade → opacidade
      const depth2 = (-Math.sin(ang) + 1) / 2

      const b1 = s.seq[i]
      const b2 = PAIR[b1]

      // Ponte de hidrogênio (2 ou 3 tracinhos — o número REAL)
      if (!open) {
        const nb = BONDS[b1]
        for (let k = 0; k < nb; k++) {
          const off = (k - (nb - 1) / 2) * 2.6
          ctx.strokeStyle = hexA(C.ink, 0.16 + 0.10 * Math.min(depth1, depth2))
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(x1 + (x2 - x1) * 0.22, y + off)
          ctx.lineTo(x1 + (x2 - x1) * 0.78, y + off)
          ctx.stroke()
        }
      }

      // Bases
      const drawBase = (x, base, depth) => {
        const r = 3.4 + depth * 1.5
        ctx.fillStyle = hexA(BASE_COL[base], 0.35 + depth * 0.6)
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
        if (depth > 0.55 && amp > 50) {
          text(ctx, base, x, y + 3, { size: 8, weight: 700, color: hexA('#000', 0.7), align: 'center' })
        }
      }
      drawBase(x1, b1, depth1)

      // Na transcrição, a fita molde é copiada para RNA (T → U)
      if (mode === 'transcricao' && passed) {
        drawBase(x2, b2 === 'T' ? 'U' : b2, depth2)
      } else {
        drawBase(x2, b2, depth2)
      }

      // Esqueleto açúcar-fosfato
      if (i > 0) {
        const yp = top + ((i - 1) / (N_BASES - 1)) * span
        const ap = angOf(i - 1)
        const sepP = (isOpen(i - 1) || (mode !== 'helice' && (i - 1) / (N_BASES - 1) < forkY))
          ? amp * 0.55 : 0
        ctx.strokeStyle = hexA('#c8c8c8', 0.30)
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(ap) * amp - sepP, yp)
        ctx.lineTo(x1, y)
        ctx.stroke()
        ctx.strokeStyle = hexA('#9a9a9a', 0.30)
        ctx.beginPath()
        ctx.moveTo(cx - Math.cos(ap) * amp + sepP, yp)
        ctx.lineTo(x2, y)
        ctx.stroke()
      }
    }

    // Rótulos de polaridade — as fitas são ANTIPARALELAS
    text(ctx, "5'", cx - amp - 16, top - 4, { size: 10, weight: 700, color: C.dim })
    text(ctx, "3'", cx - amp - 16, bot + 14, { size: 10, weight: 700, color: C.dim })
    text(ctx, "3'", cx + amp + 8, top - 4, { size: 10, weight: 700, color: C.dim })
    text(ctx, "5'", cx + amp + 8, bot + 14, { size: 10, weight: 700, color: C.dim })

    // ── Forquilha / RNA polimerase ───────────────────────────────
    if (mode === 'replicacao') {
      const fy = top + s.fork * span
      glow(ctx, cx, fy, 7, Q.warn, 0.9)
      text(ctx, 'helicase', cx + 14, fy + 3, { size: 8.5, weight: 700, color: Q.warn })

      // Fragmentos de Okazaki na fita atrasada — o preço da antiparalelidade
      const nOka = Math.floor(s.fork * 5)
      for (let k = 0; k < nOka; k++) {
        const oy = top + (k / 5) * span + span * 0.05
        ctx.strokeStyle = hexA(Q.field, 0.75)
        ctx.lineWidth = 2.6
        ctx.beginPath()
        ctx.moveTo(cx + amp * 0.62, oy)
        ctx.lineTo(cx + amp * 0.62, oy + span * 0.11)
        ctx.stroke()
      }
      if (nOka > 0) {
        text(ctx, 'fragmentos de Okazaki', cx + amp * 0.62 + 10, top + span * 0.5,
          { size: 8.5, color: Q.field })
        text(ctx, 'fita líder (contínua)', cx - amp - 10, top + span * 0.5,
          { size: 8.5, color: Q.potential, align: 'right' })
      }
    }

    if (mode === 'transcricao') {
      const ry = top + s.rna * span
      glow(ctx, cx, ry, 7, Q.potential, 0.9)
      text(ctx, 'RNA polimerase', cx + 14, ry + 3, { size: 8.5, weight: 700, color: Q.potential })
    }

    // ── Desnaturação ─────────────────────────────────────────────
    if (meltFrac > 0.35) {
      const openCount = s.seq.filter((_, i) => isOpen(i)).length
      caption(ctx,
        meltFrac > 0.75 ? 'DESNATURADO — as duas fitas se soltaram'
                        : 'as regiões A–T (2 pontes) abrem primeiro',
        20, 24, meltFrac > 0.75 ? Q.danger : Q.warn)
      text(ctx, `${openCount}/${N_BASES} pares abertos`, 20, 40,
        { size: 9, color: C.muted })
    } else {
      caption(ctx, modeLabel, 20, 24, A)
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const tempCol = mix('#7f8fc2', '#c2704f', clamp(temp / 100, 0, 1))
    readout(ctx, w - 14, 14, [
      { k: 'fase',        v: modeLabel, c: A },
      { k: 'pares de base', v: `${N_BASES} pb` },
      { k: 'conteúdo GC', v: `${gcPct.toFixed(0)} %`, c: Q.field },
      { k: 'Tm  melting',  v: `${Tm.toFixed(1)} °C`, c: Q.warn },
      { k: 'T  temperatura', v: `${temp} °C`, c: tempCol },
      { k: 'A–T pontes',   v: '2', c: BASE_COL.A },
      { k: 'C–G pontes',   v: '3', c: BASE_COL.G },
      { k: 'passo da hélice', v: '34 Å / 10,5 pb' },
    ], { title: 'B-DNA', anchor: 'right', accent: A, minWidth: 200 })

    if (compact) return

    // ══ Sequência + legenda ══════════════════════════════════════
    const sx = stageW + 30
    const sw = w - sx - 26
    let sy = h * 0.52

    caption(ctx, 'Fita codificadora  5’ → 3’', sx, sy - 12, C.muted)
    let bx = sx
    for (let i = 0; i < N_BASES; i++) {
      const b = s.seq[i]
      ctx.fillStyle = hexA(BASE_COL[b], isOpen(i) ? 0.35 : 1)
      ctx.fillRect(bx, sy - 8, 9, 11)
      text(ctx, b, bx + 4.5, sy + 1, { size: 7.5, weight: 700, color: '#000', align: 'center' })
      bx += 10.5
      if (bx > sx + sw - 12) { bx = sx; sy += 15 }
    }

    sy += 30
    caption(ctx, mode === 'transcricao' ? 'RNA transcrito  (T → U)' : 'Fita molde  3’ → 5’', sx, sy - 12, C.muted)
    bx = sx
    for (let i = 0; i < N_BASES; i++) {
      let b = PAIR[s.seq[i]]
      if (mode === 'transcricao' && b === 'T') b = 'U'
      const shown = mode !== 'transcricao' || (i / (N_BASES - 1)) < s.rna
      ctx.fillStyle = shown ? hexA(BASE_COL[b], 1) : hexA(C.ink, 0.08)
      ctx.fillRect(bx, sy - 8, 9, 11)
      if (shown) text(ctx, b, bx + 4.5, sy + 1, { size: 7.5, weight: 700, color: '#000', align: 'center' })
      bx += 10.5
      if (bx > sx + sw - 12) { bx = sx; sy += 15 }
    }

    // legenda de bases
    sy += 34
    let lx = sx
    for (const b of ['A', 'T', 'C', 'G']) {
      ctx.fillStyle = BASE_COL[b]
      ctx.fillRect(lx, sy - 7, 8, 8)
      text(ctx, `${b} (${BONDS[b]})`, lx + 12, sy, { size: 8.5, color: C.dim })
      lx += 50
    }
    text(ctx, 'entre parênteses: pontes de hidrogênio', sx, sy + 18,
      { size: 8, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

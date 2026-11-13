// ═══════════════════════════════════════════════════════════════════
// BIOLOGIA — Mitose e o Ciclo Celular
//
// As fases seguem a duração RELATIVA real de uma célula humana em
// cultura (~24 h no total):
//
//   G1  ~11 h   crescimento          ┐
//   S    ~8 h   duplicação do DNA    ├ INTERFASE — 95 % do tempo
//   G2   ~4 h   preparação           ┘
//   M    ~1 h   mitose propriamente dita (prófase → citocinese)
//
// A mitose é o que aparece nos livros, mas é a MENOR fatia do ciclo.
// O anel externo mostra essa proporção real.
//
// O CHECKPOINT DO FUSO (SAC) é o herói invisível: a anáfase fica
// BLOQUEADA até que TODOS os cinetocoros estejam presos a microtúbulos
// dos dois polos. Uma única cromátide solta segura a célula inteira. É
// esse mecanismo que impede aneuploidia — e é ele que falha no câncer.
//
// O controle de dano ativa a via p53: com dano alto, a célula ou
// trava em G1 ou entra em APOPTOSE. "O guardião do genoma" prefere
// matar a célula a deixá-la se dividir com o DNA quebrado.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, rng, glow, lerp,
} from '../engine'

const A = ACCENT['biologia']

// [nome, duração relativa, cor]
const PHASES = [
  { id: 'G1',   label: 'G1 · crescimento',    dur: 11,  col: '#7ea88f' },
  { id: 'S',    label: 'S · duplica o DNA',   dur: 8,   col: '#7a8fa8' },
  { id: 'G2',   label: 'G2 · preparação',     dur: 4,   col: '#8c8aa6' },
  { id: 'PRO',  label: 'Prófase',             dur: 0.35, col: '#a89a7a' },
  { id: 'META', label: 'Metáfase',            dur: 0.25, col: '#c9a24a' },
  { id: 'ANA',  label: 'Anáfase',             dur: 0.15, col: '#a67e93' },
  { id: 'TELO', label: 'Telófase + citocinese', dur: 0.25, col: '#8fa9c9' },
]
const TOTAL = PHASES.reduce((a, b) => a + b.dur, 0)

const N_CHROM = 4

export default function MitoseCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(46)   // 46 cromossomos :)
    return {
      t: 0,             // tempo no ciclo, em "horas"
      cycles: 0,
      apoptotic: false,
      arrested: false,
      sacWait: 0,       // quanto tempo o checkpoint segurou
      attached: 0,      // fração de cinetocoros ligados
      chrom: Array.from({ length: N_CHROM }, (_, i) => ({
        jitter: rand() * 0.5 + 0.75,
        off: (i - (N_CHROM - 1) / 2),
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const speed = p.division  ?? 1
    const dmg   = (p.apoptosis ?? 0) / 100

    if (s.apoptotic) return

    const step_h = dt * speed * 2.2

    // Fase atual
    let acc = 0, cur = PHASES[0]
    for (const ph of PHASES) {
      if (s.t < acc + ph.dur) { cur = ph; break }
      acc += ph.dur
    }

    // ── Checkpoint G1 (p53) ──────────────────────────────────────
    // Com dano alto, a célula trava antes de duplicar o DNA — ou morre.
    if (cur.id === 'G1' && dmg > 0.05) {
      const risk = dmg
      if (Math.random() < risk * dt * 0.35) {
        if (risk > 0.30) { s.apoptotic = true; return }
        s.arrested = true
      }
      if (s.arrested) {
        // reparo: com o tempo, a célula pode voltar a andar
        if (Math.random() < dt * 0.25) s.arrested = false
        return
      }
    }

    // ── Checkpoint do fuso (SAC) ─────────────────────────────────
    // A metáfase não termina até todos os cinetocoros estarem ligados.
    if (cur.id === 'META') {
      s.attached = clamp(s.attached + dt * 1.1 * speed, 0, 1)
      if (s.attached < 0.999) {
        s.sacWait += dt
        return                    // ANÁFASE BLOQUEADA
      }
    } else if (cur.id === 'G1') {
      s.attached = 0
      s.sacWait = 0
    }

    s.t += step_h
    if (s.t >= TOTAL) {
      s.t = 0
      s.cycles++
      s.attached = 0
      s.sacWait = 0
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const dmg = (p.apoptosis ?? 0) / 100

    // Fase e progresso dentro dela
    let acc = 0, cur = PHASES[0], local = 0
    for (const ph of PHASES) {
      if (s.t < acc + ph.dur) { cur = ph; local = (s.t - acc) / ph.dur; break }
      acc += ph.dur
    }
    const inMitosis = ['PRO', 'META', 'ANA', 'TELO'].includes(cur.id)

    const compact = w < 720
    const stageW = compact ? w : w * 0.60
    const cx = stageW * 0.5
    const cy = h * 0.50
    const R = Math.min(stageW * 0.30, h * 0.34)

    // ══ CÉLULA ═══════════════════════════════════════════════════
    if (s.apoptotic) {
      // Apoptose: a célula encolhe e se fragmenta em corpos apoptóticos
      const rand = rng(5)
      for (let i = 0; i < 9; i++) {
        const an = (i / 9) * Math.PI * 2
        const d = R * 0.5 + rand() * R * 0.4
        glow(ctx, cx + Math.cos(an) * d, cy + Math.sin(an) * d,
          4 + rand() * 5, Q.danger, 0.6)
      }
      caption(ctx, 'APOPTOSE — a célula se autodestruiu', 20, 24, Q.danger)
      text(ctx, 'p53 detectou dano irreparável no DNA e acionou a morte programada.',
        20, h - 30, { size: 9, color: C.dim })
      text(ctx, 'Melhor morrer do que se dividir com o genoma quebrado.',
        20, h - 16, { size: 9, color: C.muted })
    } else {
      // Citocinese: a membrana estrangula no meio
      const pinch = cur.id === 'TELO' ? local : 0
      const sepX = cur.id === 'ANA' ? local * R * 0.75
        : cur.id === 'TELO' ? R * 0.75 + local * R * 0.35 : 0

      const drawCell = (ox) => {
        ctx.beginPath()
        if (pinch > 0.02 && ox === 0) {
          ctx.ellipse(cx, cy, R, R, 0, 0, Math.PI * 2)
        } else {
          ctx.ellipse(cx + ox, cy, R * (1 - pinch * 0.25), R, 0, 0, Math.PI * 2)
        }
        ctx.fillStyle = hexA(A, 0.05)
        ctx.fill()
        ctx.strokeStyle = hexA(A, 0.45)
        ctx.lineWidth = 1.4
        ctx.stroke()
      }

      if (pinch > 0.35) {
        drawCell(-sepX * 0.5)
        drawCell(+sepX * 0.5)
      } else {
        drawCell(0)
        if (pinch > 0.02) {
          // sulco de clivagem (anel de actina)
          ctx.strokeStyle = hexA(Q.warn, 0.7)
          ctx.lineWidth = 2
          const inset = pinch * R * 0.9
          ctx.beginPath()
          ctx.arc(cx, cy - R, inset, Math.PI * 0.5, Math.PI * 0.5, true)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(cx - R, cy); ctx.lineTo(cx - R + inset, cy)
          ctx.moveTo(cx + R, cy); ctx.lineTo(cx + R - inset, cy)
          ctx.stroke()
        }
      }

      // ── Envoltório nuclear (some na prófase, volta na telófase) ──
      const nucleus = cur.id === 'G1' || cur.id === 'S' || cur.id === 'G2'
        ? 1 : cur.id === 'PRO' ? 1 - local : cur.id === 'TELO' ? local : 0
      if (nucleus > 0.02) {
        const nR = R * 0.55
        if (sepX > 1) {
          for (const ox of [-sepX * 0.5, sepX * 0.5]) {
            ctx.strokeStyle = hexA('#c8c8c8', 0.35 * nucleus)
            ctx.setLineDash([3, 3])
            ctx.lineWidth = 1.2
            ctx.beginPath(); ctx.arc(cx + ox, cy, nR * 0.75, 0, Math.PI * 2); ctx.stroke()
            ctx.setLineDash([])
          }
        } else {
          ctx.strokeStyle = hexA('#c8c8c8', 0.35 * nucleus)
          ctx.setLineDash([3, 3])
          ctx.lineWidth = 1.2
          ctx.beginPath(); ctx.arc(cx, cy, nR, 0, Math.PI * 2); ctx.stroke()
          ctx.setLineDash([])
        }
      }

      // ── Centrossomos e fuso ──────────────────────────────────────
      if (inMitosis) {
        const poleD = cur.id === 'PRO' ? lerp(R * 0.3, R * 0.95, local) : R * 0.95
        for (const sgn of [-1, 1]) {
          const px = cx + sgn * poleD
          glow(ctx, px, cy, 3.5, Q.field, 0.8)
          // microtúbulos (áster)
          ctx.strokeStyle = hexA(Q.field, 0.22)
          ctx.lineWidth = 0.8
          for (let k = 0; k < 7; k++) {
            const an = -0.9 + (k / 6) * 1.8
            ctx.beginPath()
            ctx.moveTo(px, cy)
            ctx.lineTo(px - sgn * Math.cos(an) * R * 0.85, cy + Math.sin(an) * R * 0.85)
            ctx.stroke()
          }
        }
      }

      // ── Cromossomos ──────────────────────────────────────────────
      s.chrom.forEach((c, i) => {
        const spread = R * 0.42
        const yy = cy + c.off * (spread / N_CHROM) * 1.9

        if (cur.id === 'G1') {
          // cromatina difusa, 1 cromátide
          drawChromatid(ctx, cx + c.off * 16, yy, 1, hexA(A, 0.35), false)
        } else if (cur.id === 'S') {
          // duplicando: aparece a irmã
          drawChromatid(ctx, cx + c.off * 16, yy, 1, hexA(A, 0.45), false)
          if (local > 0.4) {
            drawChromatid(ctx, cx + c.off * 16 + 5, yy, 1, hexA(A, 0.30 * local), false)
          }
        } else if (cur.id === 'G2' || cur.id === 'PRO') {
          // condensados, 2 cromátides irmãs unidas pelo centrômero
          const cond = cur.id === 'PRO' ? 0.5 + local * 0.5 : 0.5
          drawX(ctx, cx + c.off * 20, yy, 12 * cond + 4, cur.col)
        } else if (cur.id === 'META') {
          // alinhados na placa equatorial
          const tx = cx
          const ty = cy + c.off * (R * 0.42 / N_CHROM) * 2.4
          drawX(ctx, lerp(cx + c.off * 20, tx, clamp(local * 2, 0, 1)), ty, 16, cur.col)
          // fibras do cinetocoro
          const linked = (i / N_CHROM) < s.attached
          for (const sgn of [-1, 1]) {
            ctx.strokeStyle = linked ? hexA(Q.potential, 0.7) : hexA(Q.danger, 0.7)
            ctx.lineWidth = 1.2
            ctx.setLineDash(linked ? [] : [2, 3])
            ctx.beginPath()
            ctx.moveTo(cx + sgn * R * 0.95, cy)
            ctx.lineTo(tx + sgn * 5, ty)
            ctx.stroke()
            ctx.setLineDash([])
          }
        } else if (cur.id === 'ANA' || cur.id === 'TELO') {
          // cromátides IRMÃS separadas: cada polo recebe uma
          const d = cur.id === 'ANA' ? local * R * 0.75 : R * 0.75 + local * R * 0.35
          const ty = cy + c.off * (R * 0.42 / N_CHROM) * 2.0
          for (const sgn of [-1, 1]) {
            drawChromatid(ctx, cx + sgn * d, ty, cur.id === 'TELO' ? 1 - local * 0.5 : 1,
              cur.col, true)
            if (cur.id === 'ANA') {
              ctx.strokeStyle = hexA(Q.field, 0.3)
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(cx + sgn * R * 0.95, cy)
              ctx.lineTo(cx + sgn * d, ty)
              ctx.stroke()
            }
          }
        }
      })

      // Placa metafásica
      if (cur.id === 'META') {
        ctx.strokeStyle = hexA(C.ink, 0.14)
        ctx.setLineDash([4, 4])
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(cx, cy - R * 0.8); ctx.lineTo(cx, cy + R * 0.8)
        ctx.stroke()
        ctx.setLineDash([])
      }

      caption(ctx, cur.label, 20, 24, cur.col)
    }

    // ══ ANEL DO CICLO — as proporções reais ══════════════════════
    if (!compact) {
      const rx = w * 0.72
      const ry = h * 0.30
      const rr = Math.min(58, h * 0.16)

      let a0 = -Math.PI / 2
      for (const ph of PHASES) {
        const a1 = a0 + (ph.dur / TOTAL) * Math.PI * 2
        const active = ph.id === cur.id && !s.apoptotic
        ctx.strokeStyle = active ? ph.col : hexA(ph.col, 0.22)
        ctx.lineWidth = active ? 13 : 9
        ctx.beginPath()
        ctx.arc(rx, ry, rr, a0, a1)
        ctx.stroke()
        a0 = a1
      }
      // ponteiro
      const ang = -Math.PI / 2 + (s.t / TOTAL) * Math.PI * 2
      ctx.strokeStyle = C.ink
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.moveTo(rx, ry)
      ctx.lineTo(rx + Math.cos(ang) * (rr + 10), ry + Math.sin(ang) * (rr + 10))
      ctx.stroke()

      text(ctx, 'INTERFASE', rx, ry - 4, { size: 9, weight: 700, color: C.dim, align: 'center' })
      text(ctx, '95 % do ciclo', rx, ry + 9, { size: 8, color: C.muted, align: 'center' })
      text(ctx, 'a mitose é a fatia fina', rx, ry + rr + 26,
        { size: 8.5, color: C.muted, align: 'center' })
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const ploidy = ['S', 'G2', 'PRO', 'META'].includes(cur.id) ? '4n (duplicado)'
      : cur.id === 'ANA' ? '2n + 2n (separando)' : '2n'

    const sacBlocked = cur.id === 'META' && s.attached < 0.999

    readout(ctx, w - 14, h - 14 - 150, [
      { k: 'fase',     v: cur.id, c: cur.col },
      { k: 'ploidia',  v: ploidy },
      { k: 'cinetocoros', v: cur.id === 'META' ? `${(s.attached * 100).toFixed(0)} % ligados` : '—',
        c: sacBlocked ? Q.danger : Q.potential },
      { k: 'dano no DNA', v: `${(dmg * 100).toFixed(0)} %`, c: dmg > 0.3 ? Q.danger : dmg > 0.05 ? Q.warn : Q.potential },
      { k: 'divisões',  v: s.cycles, c: A },
      { k: 'estado',    v: s.apoptotic ? 'apoptose' : s.arrested ? 'parada em G1' : 'ciclando',
        c: s.apoptotic ? Q.danger : s.arrested ? Q.warn : Q.potential },
    ], { title: 'Ciclo celular · 24 h', anchor: 'right', accent: A, minWidth: 208 })

    // Avisos dos checkpoints
    if (sacBlocked) {
      text(ctx, 'CHECKPOINT DO FUSO: anáfase bloqueada', 20, h - 30,
        { size: 9.5, weight: 700, color: Q.danger })
      text(ctx, 'uma única cromátide solta segura a célula inteira', 20, h - 16,
        { size: 8.5, color: C.muted })
    } else if (s.arrested) {
      text(ctx, 'p53 parou o ciclo em G1 para reparar o DNA', 20, h - 16,
        { size: 9, weight: 700, color: Q.warn })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

/** Uma cromátide simples (bastão). */
function drawChromatid(ctx, x, y, scale, col, condensed) {
  ctx.strokeStyle = col
  ctx.lineWidth = condensed ? 4.5 : 3
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(x, y - 9 * scale)
  ctx.lineTo(x, y + 9 * scale)
  ctx.stroke()
  ctx.lineCap = 'butt'
}

/** Cromossomo em X: duas cromátides irmãs presas no centrômero. */
function drawX(ctx, x, y, size, col) {
  ctx.strokeStyle = col
  ctx.lineWidth = 4.5
  ctx.lineCap = 'round'
  const s = size / 2
  ctx.beginPath()
  ctx.moveTo(x - 3, y - s); ctx.quadraticCurveTo(x - 1, y, x - 3, y + s)
  ctx.moveTo(x + 3, y - s); ctx.quadraticCurveTo(x + 1, y, x + 3, y + s)
  ctx.stroke()
  ctx.lineCap = 'butt'
  // centrômero
  ctx.fillStyle = 'rgba(255,255,255,0.55)'
  ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill()
}

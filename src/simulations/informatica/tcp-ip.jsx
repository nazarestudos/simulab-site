// ═══════════════════════════════════════════════════════════════════
// INFORMÁTICA — TCP: confiabilidade sobre uma rede que não a oferece
//
// O IP não promete NADA: pacotes podem sumir, chegar fora de ordem ou
// duplicados. O TCP constrói entrega confiável em cima disso, e o
// mecanismo é honesto e simples: numerar tudo, confirmar tudo,
// retransmitir o que não voltou.
//
// HANDSHAKE DE 3 VIAS — antes de qualquer dado:
//     SYN (seq=x) → · ← SYN-ACK (seq=y, ack=x+1) · → ACK (ack=y+1)
// Três mensagens porque AMBOS os lados precisam provar que enviam E
// recebem. Com duas, um dos lados ficaria no escuro.
//
// CONTROLE DE CONGESTIONAMENTO — a parte genial. Ninguém informa ao TCP
// qual é a capacidade da rede; ele DESCOBRE, empurrando até doer:
//
//   Slow start ....... cwnd DOBRA a cada RTT (crescimento exponencial)
//   Congestion avoid . cwnd += 1 por RTT     (crescimento linear, AIMD)
//   Perda detectada .. ssthresh = cwnd/2, e cwnd DESPENCA
//
// O resultado é o famoso DENTE DE SERRA. Esse gráfico é o motivo de a
// internet não entrar em colapso: milhões de conexões, todas recuando
// sozinhas quando a rede satura, sem nenhum coordenador central.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, legend, hexA, clamp, glow,
} from '../engine'

const A = ACCENT['informatica']

const PHASES = { HANDSHAKE: 0, DATA: 1 }

export default function TcpIpCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    phase: PHASES.HANDSHAKE,
    hsStep: 0,        // 0 SYN, 1 SYN-ACK, 2 ACK, 3 pronto
    hsT: 0,
    t: 0,

    cwnd: 1,          // janela de congestionamento (em segmentos)
    ssthresh: 16,
    state: 'slow-start',
    rttT: 0,

    seq: 1,
    acked: 0,
    sent: 0,
    lost: 0,
    retrans: 0,

    packets: [],      // em voo
    hist: [],         // [t, cwnd, ssthresh]
    events: [],       // perdas, para marcar no gráfico
  }), [])

  const step = useCallback((s, dt, p) => {
    const loss = (p.lossRate ?? 5) / 100
    const speed = p.speed ?? 1

    s.t += dt * speed

    // ── Handshake ────────────────────────────────────────────────
    if (s.phase === PHASES.HANDSHAKE) {
      s.hsT += dt * speed * 0.9
      if (s.hsT >= 1) {
        s.hsT = 0
        s.hsStep++
        if (s.hsStep > 2) s.phase = PHASES.DATA
      }
      return
    }

    // ── Transferência ────────────────────────────────────────────
    // Um RTT: envia uma janela inteira, espera os ACKs.
    s.rttT += dt * speed * 0.85

    // Move os pacotes em voo
    for (const pk of s.packets) pk.u += dt * speed * 1.1
    s.packets = s.packets.filter(pk => pk.u < 1.9)

    if (s.rttT >= 1) {
      s.rttT = 0

      // Envia uma janela
      const n = Math.max(1, Math.floor(s.cwnd))
      let anyLost = false
      for (let i = 0; i < n; i++) {
        const dropped = Math.random() < loss
        s.packets.push({
          seq: s.seq++,
          u: 0,
          lost: dropped,
          dropAt: 0.35 + Math.random() * 0.25,
        })
        s.sent++
        if (dropped) { s.lost++; anyLost = true }
        else s.acked++
      }

      if (anyLost) {
        // ── Perda: recuo multiplicativo ────────────────────────
        // ssthresh cai pela metade e cwnd desaba. É o "MD" do AIMD.
        s.ssthresh = Math.max(2, Math.floor(s.cwnd / 2))
        s.cwnd = s.ssthresh          // fast recovery (TCP Reno)
        s.state = 'congestion-avoidance'
        s.retrans++
        s.events.push([s.t, s.cwnd])
        if (s.events.length > 40) s.events.shift()
      } else if (s.cwnd < s.ssthresh) {
        // ── Slow start: DOBRA por RTT ─────────────────────────
        s.cwnd = Math.min(s.cwnd * 2, 64)
        s.state = 'slow-start'
      } else {
        // ── Congestion avoidance: +1 por RTT (o "AI" do AIMD) ──
        s.cwnd = Math.min(s.cwnd + 1, 64)
        s.state = 'congestion-avoidance'
      }

      s.hist.push([s.t, s.cwnd, s.ssthresh])
      if (s.hist.length > 500) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const loss = (p.lossRate ?? 5) / 100

    const compact = w < 760
    const stageW = compact ? w : w * 0.46

    // ══ CLIENTE ↔ SERVIDOR ═══════════════════════════════════════
    const cx = 52
    const sx2 = stageW - 52
    const top = h * 0.20
    const bot = h * 0.72

    // torres
    const host = (x, label, col) => {
      ctx.fillStyle = hexA(col, 0.14)
      ctx.fillRect(x - 22, top - 34, 44, 26)
      ctx.strokeStyle = hexA(col, 0.7)
      ctx.lineWidth = 1.2
      ctx.strokeRect(x - 21.5, top - 33.5, 43, 26)
      text(ctx, label, x, top - 17, { size: 9, weight: 700, color: col, align: 'center' })
      // linha do tempo
      ctx.strokeStyle = hexA(C.ink, 0.10)
      ctx.lineWidth = 1
      ctx.setLineDash([2, 4])
      ctx.beginPath(); ctx.moveTo(x, top - 6); ctx.lineTo(x, bot + 20); ctx.stroke()
      ctx.setLineDash([])
    }
    host(cx, 'CLIENTE', A)
    host(sx2, 'SERVIDOR', Q.field)

    if (s.phase === PHASES.HANDSHAKE) {
      // ── Handshake de 3 vias ────────────────────────────────────
      caption(ctx, 'Handshake de 3 vias', 20, 24, Q.warn)

      const msgs = [
        { txt: 'SYN  seq=0',            dir: 1 },
        { txt: 'SYN-ACK  seq=0 ack=1',  dir: -1 },
        { txt: 'ACK  ack=1',            dir: 1 },
      ]
      msgs.forEach((m, i) => {
        const y = top + 24 + i * 46
        const done = i < s.hsStep
        const active = i === s.hsStep
        if (!done && !active) return

        const prog = active ? clamp(s.hsT, 0, 1) : 1
        const x0 = m.dir > 0 ? cx : sx2
        const x1 = m.dir > 0 ? sx2 : cx
        const X = x0 + (x1 - x0) * prog

        ctx.strokeStyle = done ? hexA(Q.potential, 0.5) : Q.warn
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.moveTo(x0, y); ctx.lineTo(X, y)
        ctx.stroke()

        // ponta
        ctx.fillStyle = done ? hexA(Q.potential, 0.7) : Q.warn
        ctx.beginPath()
        ctx.moveTo(X, y)
        ctx.lineTo(X - m.dir * 6, y - 3.5)
        ctx.lineTo(X - m.dir * 6, y + 3.5)
        ctx.closePath(); ctx.fill()

        text(ctx, m.txt, (cx + sx2) / 2, y - 7,
          { size: 8.5, weight: 700, color: done ? Q.potential : Q.warn, align: 'center' })
      })

      text(ctx, 'três mensagens porque os DOIS lados precisam', 20, h - 30,
        { size: 8.5, color: C.muted })
      text(ctx, 'provar que enviam E recebem', 20, h - 16,
        { size: 8.5, color: C.muted })

    } else {
      // ── Transferência de dados ─────────────────────────────────
      caption(ctx, `Transferindo · janela = ${Math.floor(s.cwnd)} segmentos`, 20, 24, A)

      for (const pk of s.packets) {
        if (pk.u <= 1) {
          // indo (cliente → servidor)
          if (pk.lost && pk.u > pk.dropAt) {
            // Pacote descartado no caminho — some de vez
            const X = cx + (sx2 - cx) * pk.dropAt
            const Y = top + 30 + (pk.seq % 9) * ((bot - top - 30) / 9)
            const fade = clamp(1 - (pk.u - pk.dropAt) * 5, 0, 1)
            ctx.strokeStyle = hexA(Q.danger, fade)
            ctx.lineWidth = 1.6
            ctx.beginPath()
            ctx.moveTo(X - 5, Y - 5); ctx.lineTo(X + 5, Y + 5)
            ctx.moveTo(X + 5, Y - 5); ctx.lineTo(X - 5, Y + 5)
            ctx.stroke()
            continue
          }
          const X = cx + (sx2 - cx) * pk.u
          const Y = top + 30 + (pk.seq % 9) * ((bot - top - 30) / 9)
          ctx.fillStyle = hexA(A, 0.85)
          ctx.fillRect(X - 8, Y - 4, 16, 8)
          if (!compact) {
            text(ctx, String(pk.seq), X, Y + 2.5,
              { size: 6.5, weight: 700, color: '#000', align: 'center' })
          }
        } else if (!pk.lost) {
          // ACK voltando (servidor → cliente)
          const back = pk.u - 1
          const X = sx2 - (sx2 - cx) * back
          const Y = top + 30 + (pk.seq % 9) * ((bot - top - 30) / 9)
          ctx.fillStyle = hexA(Q.potential, 0.7)
          ctx.beginPath()
          ctx.arc(X, Y, 3.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // legenda
      const ly = bot + 34
      ctx.fillStyle = A
      ctx.fillRect(20, ly - 6, 12, 7)
      text(ctx, 'segmento', 37, ly, { size: 8.5, color: C.dim })
      ctx.fillStyle = Q.potential
      ctx.beginPath(); ctx.arc(105, ly - 3, 3.2, 0, Math.PI * 2); ctx.fill()
      text(ctx, 'ACK', 113, ly, { size: 8.5, color: C.dim })
      ctx.strokeStyle = Q.danger
      ctx.lineWidth = 1.4
      ctx.beginPath()
      ctx.moveTo(150, ly - 7); ctx.lineTo(158, ly + 1)
      ctx.moveTo(158, ly - 7); ctx.lineTo(150, ly + 1)
      ctx.stroke()
      text(ctx, 'perdido', 165, ly, { size: 8.5, color: C.dim })
    }

    // ══ Leituras ═════════════════════════════════════════════════
    const lossReal = s.sent > 0 ? (s.lost / s.sent) * 100 : 0
    readout(ctx, w - 14, 14, [
      { k: 'estado', v: s.phase === PHASES.HANDSHAKE ? 'handshake' : s.state,
        c: s.state === 'slow-start' ? Q.warn : A },
      { k: 'cwnd  janela', v: `${Math.floor(s.cwnd)} seg.`, c: A },
      { k: 'ssthresh',     v: s.ssthresh, c: Q.field },
      { k: 'enviados',     v: s.sent },
      { k: 'confirmados',  v: s.acked, c: Q.potential },
      { k: 'perdidos',     v: s.lost, c: Q.danger },
      { k: 'perda real',   v: `${lossReal.toFixed(1)} %` },
      { k: 'retransmissões', v: s.retrans, c: Q.warn },
    ], { title: 'TCP Reno', anchor: 'right', accent: A, minWidth: 194 })

    if (compact) return

    // ══ O DENTE DE SERRA ═════════════════════════════════════════
    const gx = stageW + 50
    const gw = w - gx - 26
    const gy = h * 0.16
    const gh = h - gy - 66

    caption(ctx, 'Controle de congestionamento · AIMD', gx, gy - 12, A)

    const t1 = Math.max(20, s.t)
    const t0 = Math.max(0, t1 - 20)
    const cMax = Math.max(20, ...s.hist.map(d => d[1])) * 1.2

    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [t0, t1], yDomain: [0, cMax],
      xTicks: 4, yTicks: 4,
      fmtX: q => `${q.toFixed(0)}s`, fmtY: q => q.toFixed(0),
      xLabel: 'tempo', yLabel: 'cwnd (segmentos)',
      series: [
        { points: s.hist.map(d => [d[0], d[2]]), color: hexA(Q.field, 0.7), width: 1.3, dash: [4, 3] },
        { points: s.hist.map(d => [d[0], d[1]]), color: A, width: 2, fill: true },
      ],
      markers: s.events
        .filter(e => e[0] >= t0)
        .map(e => ({ x: e[0], y: e[1], color: Q.danger, r: 3.5 })),
    })

    legend(ctx, gx, h - 44, [
      { label: 'cwnd', color: A },
      { label: 'ssthresh', color: Q.field },
      { label: 'perda', color: Q.danger },
    ])

    text(ctx, 'sobe até doer, recua pela metade, sobe de novo —', gx, h - 26,
      { size: 8.5, color: C.muted })
    text(ctx, 'é isso que impede a internet de entrar em colapso.', gx, h - 13,
      { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

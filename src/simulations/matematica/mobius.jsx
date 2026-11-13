// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Fita de Möbius e Superfícies Não Orientáveis
//
// Parametrização padrão da fita, com k meias-torções:
//
//   x = (R + v·cos(k·u/2))·cos u
//   y = (R + v·cos(k·u/2))·sin u
//   z =       v·sin(k·u/2)
//
//   u ∈ [0, 2π)  — volta em torno do anel
//   v ∈ [−W, W]  — largura da fita
//
// O "k/2" é a alma da coisa: enquanto u dá UMA volta completa, a fita
// gira apenas MEIA volta (k = 1). Ao voltar ao ponto de partida, ela
// chegou de cabeça para baixo — e por isso os dois "lados" são, na
// verdade, um só.
//
// A PROVA está na formiga: ela anda pela superfície e a simulação NUNCA
// a faz atravessar borda nenhuma. Mesmo assim, depois de uma volta ela
// aparece do lado oposto, e só depois de DUAS voltas retorna à posição
// original. Uma superfície onde isso acontece é NÃO ORIENTÁVEL — não dá
// para definir "dentro" e "fora" de forma consistente.
//
// A paridade de k decide tudo:
//   k ÍMPAR → Möbius: 1 face, 1 borda.
//   k PAR   → cilindro (torcido): 2 faces, 2 bordas. Orientável.
// Mude o número de torções e veja a contagem de faces mudar no painel.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp, mix,
} from '../engine'

const A = ACCENT['matematica']

const NU = 150   // resolução ao longo do anel
const NV = 12    // resolução na largura

export default function MobiusCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, ant: 0 }), [])

  const step = useCallback((s, dt) => {
    s.t += dt * 0.32
    // A formiga anda. Precisa de DUAS voltas (u de 0 a 4π) para voltar
    // ao mesmo ponto E à mesma orientação.
    s.ant = (s.ant + dt * 0.16) % 2
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const k = Math.round(p.twists ?? 1)
    const W = ((p.width ?? 50) / 100) * 0.55 + 0.12

    const odd = k % 2 === 1
    const faces = odd ? 1 : 2
    const edges = odd ? 1 : 2
    const eulerChi = 0                     // χ = 0 para fita e cilindro

    const compact = w < 720
    const stageW = compact ? w : w * 0.62
    const cx = stageW * 0.5, cy = h * 0.52
    const scale = Math.min(stageW * 0.30, h * 0.34)

    const R = 1.0
    const yaw = s.t
    const pitch = 0.52                    // inclinação fixa da câmera

    /** Ponto 3D da superfície → tela, com rotação e perspectiva. */
    const project = (u, v) => {
      const half = (k * u) / 2
      const rad = R + v * Math.cos(half)
      let x = rad * Math.cos(u)
      let y = rad * Math.sin(u)
      let z = v * Math.sin(half)

      // rotação em torno de Z (yaw)
      const x1 = x * Math.cos(yaw) - y * Math.sin(yaw)
      const y1 = x * Math.sin(yaw) + y * Math.cos(yaw)
      // inclinação em torno de X (pitch)
      const y2 = y1 * Math.cos(pitch) - z * Math.sin(pitch)
      const z2 = y1 * Math.sin(pitch) + z * Math.cos(pitch)

      // perspectiva
      const d = 4.2
      const f = d / (d - z2)
      return {
        X: cx + x1 * scale * f,
        Y: cy + y2 * scale * f,
        Z: z2,
      }
    }

    // ── Malha de quadriláteros, ordenada por profundidade ────────
    // Sem painter's algorithm a fita fica um espaguete: as faces de trás
    // aparecem por cima das da frente.
    const quads = []
    for (let i = 0; i < NU; i++) {
      const u0 = (i / NU) * Math.PI * 2
      const u1 = ((i + 1) / NU) * Math.PI * 2
      for (let j = 0; j < NV; j++) {
        const v0 = -W + (j / NV) * 2 * W
        const v1 = -W + ((j + 1) / NV) * 2 * W

        const a = project(u0, v0)
        const b = project(u1, v0)
        const c = project(u1, v1)
        const d = project(u0, v1)

        const zAvg = (a.Z + b.Z + c.Z + d.Z) / 4

        // Normal aproximada em tela → sombreamento (qual lado nos encara)
        const ux = b.X - a.X, uy = b.Y - a.Y
        const vx = d.X - a.X, vy = d.Y - a.Y
        const nz = ux * vy - uy * vx        // componente z do produto vetorial

        quads.push({ a, b, c, d, zAvg, nz, u: u0, v: v0 })
      }
    }
    quads.sort((p1, p2) => p1.zAvg - p2.zAvg)   // do fundo para a frente

    for (const q of quads) {
      // A cor varia ao longo de u — é o que deixa evidente que, ao dar
      // uma volta, você chega "do outro lado" com a cor continuando.
      const t = (q.u / (Math.PI * 2))
      const base = mix('#5f5d78', A, t)

      // sombreamento pela orientação da face
      const lit = clamp(0.30 + 0.55 * Math.abs(q.nz) / 60, 0.18, 0.92)
      // profundidade → mais escuro atrás
      const depth = clamp((q.zAvg + 1.4) / 2.8, 0.15, 1)

      ctx.beginPath()
      ctx.moveTo(q.a.X, q.a.Y)
      ctx.lineTo(q.b.X, q.b.Y)
      ctx.lineTo(q.c.X, q.c.Y)
      ctx.lineTo(q.d.X, q.d.Y)
      ctx.closePath()

      // A face "de trás" (nz < 0) ganha um tom diferente — mas repare:
      // percorrendo a fita, você passa de uma para a outra SEM cruzar
      // borda. É a não orientabilidade, visível.
      ctx.fillStyle = hexA(q.nz > 0 ? base : mix(base, '#000000', 0.45),
        lit * depth)
      ctx.fill()
      ctx.strokeStyle = hexA('#000000', 0.10)
      ctx.lineWidth = 0.5
      ctx.stroke()
    }

    // ── Borda(s) ─────────────────────────────────────────────────
    // Numa Möbius, percorrer a borda leva 2 voltas de u para fechar:
    // é UMA borda só, com o dobro do comprimento.
    const edgeTurns = odd ? 2 : 1
    for (const sgn of odd ? [1] : [1, -1]) {
      ctx.beginPath()
      const N = NU * edgeTurns
      for (let i = 0; i <= N; i++) {
        const u = (i / NU) * Math.PI * 2
        const pt = project(u, sgn * W)
        i === 0 ? ctx.moveTo(pt.X, pt.Y) : ctx.lineTo(pt.X, pt.Y)
      }
      ctx.strokeStyle = odd ? Q.warn : hexA(Q.field, 0.9)
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // ── A formiga ────────────────────────────────────────────────
    // Caminha na LINHA CENTRAL (v = 0), então nunca chega perto de borda.
    const au = s.ant * Math.PI * 2
    const ant = project(au, 0)
    // vetor normal da superfície na posição da formiga, para mostrar
    // para que lado ela está "de pé"
    const half = (k * au) / 2
    const nOff = 0.10
    const antUp = project(au, nOff)
    const flipped = s.ant >= 1 && odd

    ctx.strokeStyle = flipped ? Q.danger : Q.potential
    ctx.lineWidth = 1.6
    ctx.beginPath()
    ctx.moveTo(ant.X, ant.Y)
    ctx.lineTo(antUp.X + (antUp.X - ant.X) * 2, antUp.Y + (antUp.Y - ant.Y) * 2)
    ctx.stroke()

    ctx.fillStyle = flipped ? Q.danger : Q.potential
    ctx.beginPath()
    ctx.arc(ant.X, ant.Y, 4.5, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 0.8
    ctx.stroke()

    // ── Rótulos ──────────────────────────────────────────────────
    caption(ctx,
      odd ? 'FITA DE MÖBIUS — não orientável' : 'CILINDRO torcido — orientável',
      16, 24, odd ? A : Q.field)

    const voltas = s.ant.toFixed(2)
    text(ctx,
      odd
        ? (flipped ? `formiga: ${voltas} voltas — está de CABEÇA PARA BAIXO`
                   : `formiga: ${voltas} voltas — orientação original`)
        : `formiga: ${voltas} voltas`,
      16, h - 16,
      { size: 9, weight: 700, color: flipped ? Q.danger : Q.potential })

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'k  meias-torções', v: k, c: A },
      { k: 'paridade',   v: odd ? 'ímpar' : 'par', c: odd ? A : Q.field },
      { k: 'faces',      v: faces, c: odd ? Q.warn : Q.field },
      { k: 'bordas',     v: edges, c: odd ? Q.warn : Q.field },
      { k: 'orientável', v: odd ? 'NÃO' : 'sim', c: odd ? Q.danger : Q.potential },
      { k: 'χ  Euler',   v: eulerChi },
      { k: 'volta p/ voltar', v: odd ? '2 voltas' : '1 volta' },
    ], { title: 'Topologia', anchor: 'right', accent: A, minWidth: 208 })

    if (compact) return

    // ══ Painel explicativo ═══════════════════════════════════════
    const tx = stageW + 24
    let ty = h * 0.50

    if (odd) {
      text(ctx, 'Corte a fita ao meio,', tx, ty, { size: 9.5, weight: 700, color: A })
      ty += 15
      text(ctx, 'no comprimento:', tx, ty, { size: 9.5, weight: 700, color: A })
      ty += 20
      text(ctx, 'ela NÃO se divide em duas.', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'Vira uma fita só, mais longa,', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'com DUAS torções — e orientável.', tx, ty, { size: 9, color: C.dim })
      ty += 26
      text(ctx, 'Porque só existe uma borda:', tx, ty, { size: 8.5, color: C.muted })
      ty += 13
      text(ctx, 'o corte volta ao ponto de partida', tx, ty, { size: 8.5, color: C.muted })
      ty += 13
      text(ctx, 'depois de dar duas voltas.', tx, ty, { size: 8.5, color: C.muted })
    } else {
      text(ctx, 'Com k par, a fita fecha', tx, ty, { size: 9.5, weight: 700, color: Q.field })
      ty += 15
      text(ctx, 'alinhada consigo mesma.', tx, ty, { size: 9.5, weight: 700, color: Q.field })
      ty += 22
      text(ctx, 'Duas faces, duas bordas:', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'dá para pintar um lado de', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'vermelho e o outro de azul,', tx, ty, { size: 9, color: C.dim })
      ty += 13
      text(ctx, 'sem que se toquem.', tx, ty, { size: 9, color: C.dim })
      ty += 24
      text(ctx, 'É topologicamente um cilindro.', tx, ty, { size: 8.5, color: C.muted })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

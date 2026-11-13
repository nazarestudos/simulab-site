// ═══════════════════════════════════════════════════════════════════
// FÍSICA QUÂNTICA — A Fenda Dupla
//
// "O único mistério" da mecânica quântica, nas palavras de Feynman.
//
// As partículas são disparadas UMA POR VEZ. Cada uma chega como um ponto
// único — sem dúvida uma partícula. Mas a posição de cada impacto é
// sorteada pela distribuição de probabilidade |ψ|², e ψ é a SOMA das
// amplitudes dos dois caminhos possíveis:
//
//     ψ = ψ₁ + ψ₂        P = |ψ₁ + ψ₂|²  ≠  |ψ₁|² + |ψ₂|²
//
// Aquele "≠" é o mistério inteiro. A intensidade real, com difração de
// fenda de largura a e separação d, é
//
//     I(θ) = I₀ · [sen(β)/β]² · cos²(δ/2)
//     β = πa·senθ/λ          δ = 2πd·senθ/λ
//
// O termo cos² é a INTERFERÊNCIA (as franjas); o [senβ/β]² é a DIFRAÇÃO
// (a envoltória que apaga as franjas nas bordas). Quase toda simulação
// esquece a envoltória — e aí as franjas ficam com brilho igual até a
// borda, o que nenhum laboratório jamais observou.
//
// COM DETECTOR: medir por qual fenda a partícula passou destrói a
// coerência. ψ deixa de ser uma soma de amplitudes e P vira a soma
// CLÁSSICA das probabilidades: duas manchas, sem franjas. Não é o
// detector "empurrando" a partícula — é a informação de caminho que
// mata a interferência.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, glow,
} from '../engine'

const A = ACCENT['fisica-quantica']

const N_BINS = 220

export default function FendaDuplaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    bins: new Array(N_BINS).fill(0),
    hits: 0,
    flight: [],       // partículas a caminho
    spawn: 0,
    observing: false,
    maxBin: 1,
  }), [])

  /**
   * Intensidade normalizada na posição y da tela (−1 a 1).
   * `observe` liga a soma clássica (sem interferência).
   */
  const intensity = (yn, slitNm, observe) => {
    // Elétrons lentos (~318 eV): comprimento de onda de de Broglie de
    // 0,069 nm, fendas a dezenas de nanômetros — franjas a cada ~1 mrad.
    const d = slitNm * 1e-9               // separação entre as fendas
    const a = d * 0.28                    // largura de cada fenda
    const lambda = 68.75e-12              // λ = h/p do elétron
    const theta = yn * 0.045              // ângulo pequeno

    const beta = (Math.PI * a * Math.sin(theta)) / lambda
    const delta = (2 * Math.PI * d * Math.sin(theta)) / lambda

    // Difração de fenda única — a ENVOLTÓRIA
    const sinc = Math.abs(beta) < 1e-9 ? 1 : Math.sin(beta) / beta
    const envelope = sinc * sinc

    if (observe) {
      // Com informação de caminho: P = |ψ₁|² + |ψ₂|², sem termo cruzado.
      // Resultado: duas manchas de difração, deslocadas. Sem franjas.
      const s1 = Math.exp(-((yn - 0.22) ** 2) / (2 * 0.16 ** 2))
      const s2 = Math.exp(-((yn + 0.22) ** 2) / (2 * 0.16 ** 2))
      return envelope * (s1 + s2) * 0.5
    }
    // Coerente: interferência de duas fendas
    return envelope * Math.cos(delta / 2) ** 2
  }

  const step = useCallback((s, dt, p) => {
    const slit = p.slitDist ?? 50
    const observe = (p.observing ?? 0) > 50

    if (observe !== s.observing) {
      s.observing = observe
      s.bins = new Array(N_BINS).fill(0)
      s.hits = 0
      s.flight = []
      s.maxBin = 1
      return
    }

    // Emite partículas, uma de cada vez
    s.spawn += dt * 26
    while (s.spawn >= 1) {
      s.spawn -= 1

      // Amostragem por rejeição de |ψ|²: é assim que a natureza sorteia.
      let yn, tries = 0
      do {
        yn = (Math.random() * 2 - 1)
        tries++
      } while (Math.random() > intensity(yn, slit, observe) && tries < 60)

      s.flight.push({
        u: 0,
        yn,
        // por qual fenda "passou" (só faz sentido se houver detector)
        slit: Math.random() < 0.5 ? -1 : 1,
      })
    }

    for (const f of s.flight) f.u += dt * 1.5
    const arrived = s.flight.filter(f => f.u >= 1)
    for (const f of arrived) {
      const bin = clamp(Math.floor(((f.yn + 1) / 2) * N_BINS), 0, N_BINS - 1)
      s.bins[bin]++
      s.maxBin = Math.max(s.maxBin, s.bins[bin])
      s.hits++
    }
    s.flight = s.flight.filter(f => f.u < 1)
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const slit = p.slitDist ?? 50
    const observe = (p.observing ?? 0) > 50

    const compact = w < 720
    const stageW = compact ? w : w * 0.60

    const gunX = 34
    const wallX = stageW * 0.40
    const scrX = stageW - 40
    const cy = h * 0.50
    const scrH = h * 0.72

    // ══ CANHÃO ═══════════════════════════════════════════════════
    ctx.fillStyle = hexA(A, 0.25)
    ctx.fillRect(gunX - 12, cy - 9, 20, 18)
    ctx.strokeStyle = hexA(A, 0.8)
    ctx.lineWidth = 1
    ctx.strokeRect(gunX - 11.5, cy - 8.5, 20, 18)
    text(ctx, 'fonte', gunX - 2, cy + 26, { size: 8, color: C.muted, align: 'center' })
    text(ctx, '1 elétron', gunX - 2, cy - 18, { size: 8, color: C.muted, align: 'center' })
    text(ctx, 'por vez', gunX - 2, cy - 8 - 2, { size: 8, color: C.muted, align: 'center' })

    // ══ BARREIRA COM AS DUAS FENDAS ══════════════════════════════
    const sep = clamp(slit * 0.32, 10, 44)
    const slitH = 11
    ctx.fillStyle = hexA(C.ink, 0.22)
    // partes cheias da barreira
    ctx.fillRect(wallX - 3, cy - scrH / 2, 6, (scrH / 2) - sep - slitH / 2)
    ctx.fillRect(wallX - 3, cy - sep + slitH / 2, 6, 2 * sep - slitH)
    ctx.fillRect(wallX - 3, cy + sep + slitH / 2, 6, (scrH / 2) - sep - slitH / 2)

    text(ctx, 'd', wallX + 10, cy, { size: 9, weight: 700, color: A })
    ctx.strokeStyle = hexA(A, 0.5)
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(wallX + 7, cy - sep); ctx.lineTo(wallX + 7, cy + sep)
    ctx.stroke()

    // ══ DETECTOR ═════════════════════════════════════════════════
    if (observe) {
      for (const sgn of [-1, 1]) {
        const dy = cy + sgn * sep
        ctx.strokeStyle = Q.danger
        ctx.lineWidth = 1.4
        ctx.beginPath()
        ctx.arc(wallX + 14, dy, 7, 0, Math.PI * 2)
        ctx.stroke()
        ctx.fillStyle = hexA(Q.danger, 0.25)
        ctx.fill()
      }
      text(ctx, 'DETECTOR LIGADO', wallX + 26, cy - scrH / 2 + 12,
        { size: 9, weight: 700, color: Q.danger })
    }

    // ══ PARTÍCULAS EM VOO ════════════════════════════════════════
    for (const f of s.flight) {
      const yScr = cy + f.yn * (scrH / 2)
      let X, Y
      if (f.u < 0.5) {
        // fonte → fenda
        const t = f.u / 0.5
        X = gunX + (wallX - gunX) * t
        Y = cy + (cy + (observe ? f.slit * sep : 0) - cy) * t
      } else {
        // fenda → tela
        const t = (f.u - 0.5) / 0.5
        const yStart = cy + (observe ? f.slit * sep : 0)
        X = wallX + (scrX - wallX) * t
        Y = yStart + (yScr - yStart) * t
      }
      glow(ctx, X, Y, 2, observe ? Q.danger : A, 0.7)
    }

    // ══ TELA + HISTOGRAMA ════════════════════════════════════════
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(scrX, cy - scrH / 2); ctx.lineTo(scrX, cy + scrH / 2)
    ctx.stroke()

    // impactos acumulados: cada ponto é UMA partícula
    const binH = scrH / N_BINS
    for (let i = 0; i < N_BINS; i++) {
      const cnt = s.bins[i]
      if (cnt === 0) continue
      const Y = cy - scrH / 2 + i * binH
      const inten = clamp(cnt / s.maxBin, 0, 1)
      ctx.fillStyle = hexA(observe ? Q.danger : A, 0.15 + inten * 0.85)
      ctx.fillRect(scrX + 2, Y, 12, Math.max(1, binH))
      // barra de contagem
      ctx.fillStyle = hexA(observe ? Q.danger : A, 0.55)
      ctx.fillRect(scrX + 16, Y, inten * 34, Math.max(1, binH))
    }

    // ── Curva teórica |ψ|², sobreposta ──────────────────────────
    ctx.strokeStyle = hexA(Q.warn, 0.85)
    ctx.lineWidth = 1.5
    ctx.beginPath()
    for (let i = 0; i <= 160; i++) {
      const yn = -1 + (i / 160) * 2
      const I = intensity(yn, slit, observe)
      const X = scrX + 16 + I * 34
      const Y = cy + yn * (scrH / 2)
      i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
    }
    ctx.stroke()

    // ══ Rótulos ══════════════════════════════════════════════════
    caption(ctx,
      observe ? 'COM detector — as franjas SUMIRAM'
              : 'SEM detector — franjas de interferência',
      20, 24, observe ? Q.danger : A)

    text(ctx,
      observe ? 'P = |ψ₁|² + |ψ₂|²   (soma clássica)'
              : 'P = |ψ₁ + ψ₂|²   (soma de amplitudes)',
      20, 42, { size: 9.5, weight: 700, color: observe ? Q.danger : Q.potential })

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, 14, [
      { k: 'partículas',   v: s.hits, c: A },
      { k: 'd  entre fendas', v: `${slit} nm` },
      { k: 'λ  do elétron', v: '0,069 nm' },
      { k: 'energia do elétron', v: '318 eV' },
      { k: 'detector',     v: observe ? 'LIGADO' : 'desligado',
        c: observe ? Q.danger : Q.potential },
      { k: 'coerência',    v: observe ? 'destruída' : 'preservada',
        c: observe ? Q.danger : Q.potential },
      { k: 'padrão',       v: observe ? '2 manchas' : 'franjas', c: Q.warn },
    ], { title: 'Fenda dupla', anchor: 'right', accent: A, minWidth: 198 })

    if (compact) return

    // ══ Painel explicativo ═══════════════════════════════════════
    const tx = stageW + 30
    const tw = w - tx - 26

    caption(ctx, 'Distribuição |ψ|²', tx, h * 0.16, Q.warn)

    const curveI = []
    const curveC = []
    for (let i = 0; i <= 200; i++) {
      const yn = -1 + (i / 200) * 2
      curveI.push([yn, intensity(yn, slit, false)])
      curveC.push([yn, intensity(yn, slit, true)])
    }

    plot(ctx, { x: tx, y: h * 0.20, w: tw, h: h * 0.30 }, {
      xDomain: [-1, 1], yDomain: [0, 1.1],
      xTicks: 4, yTicks: 2,
      fmtX: q => q.toFixed(1), fmtY: () => '',
      xLabel: 'posição na tela',
      series: [
        { points: observe ? curveI : curveC, color: hexA(C.ink, 0.16), width: 1.2, dash: [3, 3] },
        { points: observe ? curveC : curveI, color: observe ? Q.danger : A, width: 2, fill: true },
      ],
    })

    let ty = h * 0.58
    text(ctx, 'A envoltória é DIFRAÇÃO —', tx, ty, { size: 9, weight: 700, color: Q.warn })
    ty += 14
    text(ctx, 'largura finita de cada fenda.', tx, ty, { size: 8.5, color: C.dim })
    ty += 13
    text(ctx, 'As franjas dentro dela são', tx, ty, { size: 8.5, color: C.dim })
    ty += 13
    text(ctx, 'INTERFERÊNCIA entre as duas.', tx, ty, { size: 8.5, color: C.dim })

    ty += 26
    text(ctx, 'Cada elétron chega como PONTO.', tx, ty, { size: 9, weight: 700, color: A })
    ty += 14
    text(ctx, 'O padrão só emerge depois de', tx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'milhares — cada um interferindo', tx, ty, { size: 8.5, color: C.muted })
    ty += 13
    text(ctx, 'CONSIGO MESMO. Não há multidão.', tx, ty, { size: 8.5, color: C.muted })

    ty += 26
    if (observe) {
      text(ctx, 'O detector não "empurra" nada:', tx, ty, { size: 8.5, weight: 700, color: Q.danger })
      ty += 13
      text(ctx, 'é a INFORMAÇÃO de caminho que', tx, ty, { size: 8.5, color: C.muted })
      ty += 13
      text(ctx, 'destrói a interferência.', tx, ty, { size: 8.5, color: C.muted })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

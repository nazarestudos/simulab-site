// ═══════════════════════════════════════════════════════════════════
// QUÍMICA — Gases Ideais e Teoria Cinética
//
// A pressão NÃO é lida de uma fórmula e desenhada num mostrador. Ela é
// MEDIDA: cada vez que uma molécula bate na parede, o impulso 2m·|vₓ| é
// somado; a pressão é a média temporal desse impulso por área.
//
//     P_medida = Σ(impulsos) / (Δt · A)
//
// E aí o painel compara com  P = nRT/V. As duas coincidem — porque a lei
// dos gases ideais é uma CONSEQUÊNCIA das colisões, não um postulado.
//
// As velocidades seguem Maxwell–Boltzmann (2D), com v_rms = √(3RT/M)
// no caso 3D exibido no HUD. Aquecer o gás não empurra o pistão "por
// mágica": as moléculas passam a bater mais forte e mais vezes.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout, panel,
  plot, hexA, clamp, rng, gauss, mix,
} from '../engine'

const A    = ACCENT['quimica']
const R    = 8.314        // J/(mol·K)
const N_A  = 6.02214e23
const N_MOL = 0.020       // mol de gás na câmara
const M_MOLAR = 0.028     // kg/mol (N₂)
const N_PART = 170        // partículas desenhadas (amostra)

export default function GasesIdeaisCanvas({ params, running, resetKey }) {
  const setup = useCallback((view, p) => {
    const rand = rng(77)
    const T = p.temp ?? 350
    // Velocidade característica em px/s, calibrada para ficar visível
    const vScale = 26 * Math.sqrt(T / 300)
    return {
      T,
      parts: Array.from({ length: N_PART }, () => ({
        x: rand(), y: rand(),                         // normalizado na câmara
        vx: gauss(rand) * vScale,
        vy: gauss(rand) * vScale,
      })),
      piston: 0.5,       // fração da altura ocupada pelo gás
      impulse: 0,        // acumulador de impulso nas paredes
      window: 0,         // janela de tempo do acumulador
      pMeas: 0,          // pressão medida (unidades internas)
      pSm: 0,            // suavizada para exibir
      hist: [],
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    const T = p.temp   ?? 350
    const V = p.volume ?? 50      // "litros" no slider

    // O pistão vai para a altura que corresponde ao volume pedido.
    const target = clamp(V / 100, 0.10, 1)
    s.piston += (target - s.piston) * clamp(dt * 3, 0, 1)

    // ── Termostato: reescala as velocidades para a T pedida ───────
    // v_rms ∝ √T. Mudar o slider de T muda literalmente o quão rápido
    // as moléculas se movem.
    const wanted = 26 * Math.sqrt(T / 300)
    let sum = 0
    for (const q of s.parts) sum += q.vx * q.vx + q.vy * q.vy
    const rms = Math.sqrt(sum / s.parts.length / 2)
    if (rms > 1e-6) {
      const f = 1 + (wanted / rms - 1) * clamp(dt * 4, 0, 1)
      for (const q of s.parts) { q.vx *= f; q.vy *= f }
    }
    s.T = T

    // ── Dinâmica + medição de pressão pelos impulsos ──────────────
    // Paredes em x ∈ [0,1] e y ∈ [1−piston, 1] (o gás fica embaixo).
    const top = 1 - s.piston
    let impY = 0
    for (const q of s.parts) {
      q.x += q.vx * dt * 0.01
      q.y += q.vy * dt * 0.01

      if (q.x < 0)      { q.x = 0; q.vx = -q.vx }
      else if (q.x > 1) { q.x = 1; q.vx = -q.vx }

      // Só o pistão e o fundo entram na medida: as duas têm a mesma área,
      // então impulso/tempo/área é a pressão. (As paredes laterais mudam
      // de área com o volume e não podem ser somadas direto.)
      if (q.y > 1)      { q.y = 1; q.vy = -q.vy; impY += 2 * Math.abs(q.vy) }
      else if (q.y < top) {
        q.y = top
        q.vy = -q.vy
        impY += 2 * Math.abs(q.vy)     // impulso NO PISTÃO
      }
    }

    s.impulse += impY / 2          // média das duas faces
    s.window  += dt
    if (s.window > 0.5) {
      // impulso por tempo por "área" → pressão medida (unidades arbitrárias
      // internas, calibradas abaixo contra a lei ideal)
      s.pMeas = s.impulse / s.window
      s.impulse = 0
      s.window = 0
    }
    s.pSm += (s.pMeas - s.pSm) * clamp(dt * 3, 0, 1)

    if (s.hist.length === 0 || s.hist[s.hist.length - 1][0] !== V) {
      s.hist = s.hist.filter(d => d[0] !== V)
      s.hist.push([V, (N_MOL * R * T) / (V / 1000) / 1000])   // kPa
      if (s.hist.length > 80) s.hist.shift()
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const T = p.temp   ?? 350
    const V = p.volume ?? 50            // L
    const Vm3 = V / 1000                // m³
    // Lei dos gases ideais — a previsão
    const P_ideal = (N_MOL * R * T) / Vm3        // Pa
    const P_kPa = P_ideal / 1000
    const P_atm = P_ideal / 101325
    const vRms = Math.sqrt(3 * R * T / M_MOLAR)  // m/s (3D)

    const compact = w < 700
    const stageW = compact ? w : w * 0.52

    // ── Cilindro ──────────────────────────────────────────────────
    const cw = Math.min(stageW * 0.46, 180)
    const cx = stageW * 0.42 - cw / 2
    const cyTop = h * 0.10
    const ch = h * 0.74

    const gasTop = cyTop + ch * (1 - s.piston)
    const gasH   = ch * s.piston

    // corpo
    ctx.fillStyle = 'rgba(255,255,255,0.02)'
    ctx.fillRect(cx, cyTop, cw, ch)

    // O gás fica mais quente → tinge de terracota
    const heat = clamp((T - 100) / 500, 0, 1)
    const gasCol = mix('#6f8ea8', '#c2704f', heat)
    const gg = ctx.createLinearGradient(0, cyTop + ch, 0, gasTop)
    gg.addColorStop(0, hexA(gasCol, 0.16))
    gg.addColorStop(1, hexA(gasCol, 0.03))
    ctx.fillStyle = gg
    ctx.fillRect(cx, gasTop, cw, gasH)

    // ── Moléculas ─────────────────────────────────────────────────
    for (const q of s.parts) {
      const px = cx + q.x * cw
      // q.y vive em [1−piston, 1]; normalizo para [0,1] dentro do gás.
      const u = clamp((q.y - (1 - s.piston)) / Math.max(s.piston, 1e-3), 0, 1)
      const py = gasTop + u * gasH
      const sp = Math.hypot(q.vx, q.vy)
      const f = clamp(sp / (26 * Math.sqrt(T / 300) * 2.2), 0, 1)
      ctx.fillStyle = hexA(mix('#8fa9c9', '#e0764f', f), 0.9)
      ctx.beginPath()
      ctx.arc(px, py, 2.2, 0, Math.PI * 2)
      ctx.fill()
    }

    // ── Pistão ────────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(255,255,255,0.14)'
    ctx.fillRect(cx, gasTop - 9, cw, 9)
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.strokeRect(cx + 0.5, gasTop - 8.5, cw - 1, 9)
    ctx.fillStyle = 'rgba(255,255,255,0.10)'
    ctx.fillRect(cx + cw / 2 - 4, cyTop - 16, 8, gasTop - cyTop - 9 + 16)

    // paredes
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(cx, cyTop - 16); ctx.lineTo(cx, cyTop + ch)
    ctx.lineTo(cx + cw, cyTop + ch); ctx.lineTo(cx + cw, cyTop - 16)
    ctx.stroke()

    // Chama/gelo — indicador de temperatura, sem emoji
    const tbW = 8
    const tbX = cx - 22
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(tbX, cyTop + ch * 0.25, tbW, ch * 0.6)
    ctx.fillStyle = mix('#6f8ea8', '#c2704f', heat)
    const tfrac = clamp((T - 100) / 500, 0, 1)
    ctx.fillRect(tbX, cyTop + ch * 0.25 + ch * 0.6 * (1 - tfrac), tbW, ch * 0.6 * tfrac)
    text(ctx, `${T} K`, tbX + tbW / 2, cyTop + ch * 0.25 - 8,
      { size: 9, weight: 700, color: mix('#8fa9c9', '#e0764f', heat), align: 'center' })

    caption(ctx, 'Câmara · 0,020 mol de N₂', cx, cyTop - 26, A)
    text(ctx, `V = ${V} L`, cx + cw + 12, gasTop + gasH / 2,
      { size: 9.5, weight: 700, color: Q.potential })

    // ── Manômetro: medido × previsto ──────────────────────────────
    // Calibração: converte as unidades internas do medidor para kPa
    // usando um único fator constante (não depende de T nem de V).
    // De onde vem o fator: cada partícula bate numa face a cada ida e
    // volta, entregando 2|v_y|; na média isso dá 0,01·N·⟨v_y²⟩/altura por
    // face, com ⟨v_y²⟩ = 26²·T/300 nas unidades do desenho. Igualando a
    // n·R·T/V com V = 100 L × altura, o fator sai constante — não depende
    // de T nem de V, e por isso a medida confere com a lei em toda a faixa.
    const CAL = (N_MOL * R / 100) / (0.01 * N_PART * 26 * 26 / 300)
    const pMeasKPa = s.pSm * CAL

    const mx = compact ? w - 150 : stageW * 0.78
    const my = h * 0.20

    panel(ctx, mx - 8, my - 20, 132, 108)
    caption(ctx, 'pressão', mx, my - 6, C.muted)
    text(ctx, `${P_kPa.toFixed(2)} kPa`, mx, my + 16, { size: 17, weight: 700, color: A })
    text(ctx, `${P_atm.toFixed(2)} atm`, mx, my + 33, { size: 10, color: C.dim })
    ctx.strokeStyle = C.line
    ctx.beginPath(); ctx.moveTo(mx, my + 42); ctx.lineTo(mx + 112, my + 42); ctx.stroke()
    text(ctx, 'medida por impulso', mx, my + 56, { size: 8, color: C.muted })
    text(ctx, `${pMeasKPa.toFixed(2)} kPa`, mx, my + 72,
      { size: 10, weight: 700, color: Q.kinetic })

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'P  pressão',  v: `${P_kPa.toFixed(2)} kPa`, c: A },
      { k: 'P  medida nos impactos', v: `${pMeasKPa.toFixed(2)} kPa`, c: Q.kinetic },
      { k: 'V  volume',   v: `${V} L`, c: Q.potential },
      { k: 'n  matéria',  v: `${N_MOL} mol` },
      { k: 'R  constante', v: '8,314 J/mol·K' },
      { k: 'T  temperatura', v: `${T} K`, c: Q.thermal },
      { k: 'v_rms',       v: `${vRms.toFixed(0)} m/s`, c: Q.velocity },
      { k: 'N  moléculas', v: `${(N_MOL * N_A).toExponential(1)}` },
    ], { title: 'P·V = n·R·T', anchor: 'right', accent: A, minWidth: 196 })

    if (compact) return

    // ── Isoterma de Boyle ─────────────────────────────────────────
    const gx = stageW + 52
    const gw = w - gx - 26

    caption(ctx, 'Isoterma  P = nRT/V', gx, 26, A)
    const iso = []
    for (let v = 10; v <= 100; v += 2) iso.push([v, (N_MOL * R * T) / (v / 1000) / 1000])
    const pTop = (N_MOL * R * 600) / (10 / 1000) / 1000 * 0.35

    plot(ctx, { x: gx, y: 36, w: gw, h: h * 0.34 }, {
      xDomain: [0, 100], yDomain: [0, Math.max(pTop, P_kPa * 1.2)],
      xTicks: 4, yTicks: 4,
      fmtX: q => q.toFixed(0), fmtY: q => q.toFixed(0),
      xLabel: 'volume (L)', yLabel: 'P (kPa)',
      series: [{ points: iso, color: hexA(A, 0.85), width: 1.8 }],
      markers: [{ x: V, y: P_kPa, color: Q.kinetic, r: 4 }],
    })
    text(ctx, 'P × V = constante — a hipérbole de Boyle', gx, h * 0.34 + 62,
      { size: 8.5, color: C.muted })

    // ── Distribuição de Maxwell–Boltzmann ─────────────────────────
    const py = h * 0.34 + 92
    const ph = h - py - 52
    caption(ctx, 'Maxwell–Boltzmann · velocidades', gx, py - 10, Q.velocity)

    const vmax = 1800
    const mb = []
    for (let i = 0; i <= 90; i++) {
      const v = (i / 90) * vmax
      // f(v) = 4π (M/2πRT)^{3/2} v² exp(−Mv²/2RT)
      const a1 = Math.pow(M_MOLAR / (2 * Math.PI * R * T), 1.5)
      const f = 4 * Math.PI * a1 * v * v * Math.exp(-M_MOLAR * v * v / (2 * R * T))
      mb.push([v, f])
    }
    const fmax = Math.max(...mb.map(m => m[1])) * 1.15

    plot(ctx, { x: gx, y: py, w: gw, h: ph }, {
      xDomain: [0, vmax], yDomain: [0, fmax],
      xTicks: 3, yTicks: 2, tickLabels: true,
      fmtX: q => q.toFixed(0), fmtY: () => '',
      xLabel: 'velocidade (m/s)',
      rules: [{ x: vRms, color: hexA(Q.velocity, 0.7), label: 'v_rms' }],
      series: [{ points: mb, color: Q.thermal, width: 1.8, fill: true }],
    })
    text(ctx, 'aquecer desloca a curva para a direita', gx, h - 16,
      { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

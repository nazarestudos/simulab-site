// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Conservação da Energia Mecânica
//
// A bolinha num trilho em forma de vale troca energia potencial por
// cinética e vice-versa. As barras mostram a igualdade ao vivo:
//
//   E_mec = E_c + E_p = constante   (sem atrito)
//   no alto: tudo potencial (v = 0)   ·   no fundo: tudo cinética (v máx)
//
// Ligue o atrito e a energia mecânica é dissipada em calor a cada
// passagem — a bolinha sobe cada vez menos, até parar no fundo. O total
// (mecânica + calor) continua conservado; só a parcela mecânica cai.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  bars, glow, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const M = 1.0          // kg — massa fixa, para os números do HUD ficarem limpos
const HMAX = 5.0       // m — altura das bordas do trilho
const XMAX = 4.5       // m — meia-largura do vale
const KTRACK = HMAX / (XMAX * XMAX)   // y = k·x²

export default function ConservacaoEnergiaCanvas({ params, running, resetKey }) {
  const init = (p) => {
    const h0 = clamp(p.alturaInicial ?? 4, 0.2, HMAX)
    const x0 = -Math.sqrt(h0 / KTRACK)      // solta da borda esquerda
    return { x: x0, v: 0, h0 }              // v: velocidade ao longo do trilho (+ = para a direita)
  }

  // Aceleração tangencial num ponto do trilho y = k·x².
  //   peso:    −g·sen φ                      (φ = inclinação local)
  //   atrito:  −μ·N/m, contra o movimento,   N/m = g·cos φ + v²·κ
  // O termo v²·κ é a parte centrípeta da normal: no fundo do vale a
  // bolinha "pesa mais" contra o trilho, e o atrito cresce com isso.
  const accel = (x, v, mu) => {
    const slope = 2 * KTRACK * x
    const q = Math.sqrt(1 + slope * slope)
    const sin = slope / q, cos = 1 / q
    const kappa = (2 * KTRACK) / (q * q * q)
    const nOverM = G * cos + v * v * kappa
    return { a: -G * sin - Math.sign(v) * mu * nOverM, cos, sin, nOverM }
  }

  const setup = useCallback((view, p) => init(p), [])

  const step = useCallback((s, dt, p) => {
    if ((p.alturaInicial ?? 4) !== s.h0) { Object.assign(s, init(p)); return }

    const mu = p.atrito ?? 0

    // Parada: com atrito, a bolinha fica onde o peso tangencial não
    // vence o atrito estático (tan φ ≤ μ).
    const here = accel(s.x, 0, 0)
    const holds = Math.abs(G * here.sin) <= mu * here.nOverM
    if (Math.abs(s.v) < 1e-3 && holds) { s.v = 0; return }

    // Runge–Kutta de 4ª ordem em (x, v):  dx/dt = v·cos φ ,  dv/dt = a
    const f = (x, v) => { const k = accel(x, v, mu); return [v * k.cos, k.a] }
    const [k1x, k1v] = f(s.x, s.v)
    const [k2x, k2v] = f(s.x + k1x * dt / 2, s.v + k1v * dt / 2)
    const [k3x, k3v] = f(s.x + k2x * dt / 2, s.v + k2v * dt / 2)
    const [k4x, k4v] = f(s.x + k3x * dt, s.v + k3v * dt)
    const vNew = s.v + (dt / 6) * (k1v + 2 * k2v + 2 * k3v + k4v)
    s.x = clamp(s.x + (dt / 6) * (k1x + 2 * k2x + 2 * k3x + k4x), -XMAX, XMAX)

    // O atrito freia, não empurra: se a velocidade trocou de sinal num
    // ponto onde o atrito estático segura, a bolinha parou ali.
    s.v = (s.v !== 0 && Math.sign(vNew) !== Math.sign(s.v) && holds) ? 0 : vNew
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const compact = w < 700
    const stageW = w

    // ── Sistema de coordenadas do vale ────────────────────────────
    const cx = stageW * 0.5
    const valleyY = h * 0.80
    const ppmX = (stageW * 0.42) / XMAX
    const ppmY = (h * 0.56) / HMAX
    const SX = x => cx + x * ppmX
    const SY = y => valleyY - y * ppmY

    // ── Trilho (parábola) ─────────────────────────────────────────
    ctx.strokeStyle = hexA(A, 0.7); ctx.lineWidth = 2.4; ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let i = 0; i <= 100; i++) {
      const x = -XMAX + (i / 100) * 2 * XMAX
      const y = KTRACK * x * x
      i === 0 ? ctx.moveTo(SX(x), SY(y)) : ctx.lineTo(SX(x), SY(y))
    }
    ctx.stroke()

    // linha da altura inicial (referência do topo)
    ctx.strokeStyle = hexA(C.ink, 0.15); ctx.setLineDash([4, 4]); ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(0, SY(s.h0)); ctx.lineTo(w, SY(s.h0)); ctx.stroke()
    ctx.setLineDash([])
    text(ctx, `altura inicial ${s.h0.toFixed(1)} m`, 16, SY(s.h0) - 6, { size: 8.5, color: C.muted })

    // ── Bolinha ───────────────────────────────────────────────────
    const y = KTRACK * s.x * s.x
    const Ep = M * G * y
    const Ec = 0.5 * M * s.v * s.v
    const v = Math.abs(s.v)
    const Em = Ec + Ep
    const bx = SX(s.x), by = SY(y)
    glow(ctx, bx, by - 6, 7, A, 0.9)
    ctx.strokeStyle = hexA('#fff', 0.6); ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(bx, by - 6, 7, 0, Math.PI * 2); ctx.stroke()

    caption(ctx, 'potencial ↔ cinética  ·  o total se conserva (sem atrito)', 16, 24, C.muted)

    // ── Barras de energia ─────────────────────────────────────────
    const E0 = M * G * s.h0
    // Calor: o que falta da energia mecânica em relação à inicial.
    const calor = Math.max(0, E0 - Em)
    const bx0 = 22, by0 = h - 96
    caption(ctx, 'Energia (J)', bx0, by0 - 10, A)
    bars(ctx, bx0, by0, 96, 60, [
      { label: 'E_c', value: Ec,     max: E0 || 1, color: Q.kinetic },
      { label: 'E_p', value: Ep,     max: E0 || 1, color: Q.potential },
      { label: 'E_m', value: Em,     max: E0 || 1, color: hexA(C.ink, 0.55) },
      { label: 'Q',   value: calor,  max: E0 || 1, color: Q.thermal },
    ], { barWidth: 15 })
    text(ctx, 'E_m = E_c + E_p', bx0, h - 12, { size: 9, color: C.muted })

    // ── HUD ───────────────────────────────────────────────────────
    const dissip = E0 > 0 ? (calor / E0) * 100 : 0
    readout(ctx, w - 14, 14, [
      { k: 'altura',       v: `${y.toFixed(2)} m`, c: Q.potential },
      { k: 'v  velocidade', v: `${v.toFixed(2)} m/s`, c: Q.velocity },
      { k: 'E_c cinética', v: `${Ec.toFixed(1)} J`, c: Q.kinetic },
      { k: 'E_p potencial', v: `${Ep.toFixed(1)} J`, c: Q.potential },
      { k: 'E_mec total',  v: `${Em.toFixed(1)} J`, c: C.ink },
      { k: 'Q  dissipado', v: `${calor.toFixed(1)} J`, c: Q.thermal },
      { k: '% dissipado',  v: `${dissip.toFixed(0)} %`, c: dissip > 1 ? Q.thermal : C.dim },
    ], { title: 'E_c + E_p = constante', anchor: 'right', accent: A, minWidth: 196 })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

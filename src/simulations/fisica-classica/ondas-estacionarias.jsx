// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Ondas Estacionárias numa Corda
//
// Uma onda estacionária não é um tipo novo de onda: é a SOMA de duas
// ondas iguais viajando em sentidos opostos (a que vai e a que voltou
// refletida na ponta presa):
//
//   A·sen(kx − ωt) + A·sen(kx + ωt) = 2A·sen(kx)·cos(ωt)
//
// O resultado oscila no lugar. Onde sen(kx) = 0 a corda nunca se move
// (NÓS); onde |sen(kx)| = 1 ela oscila ao máximo (VENTRES). Como as duas
// pontas presas têm de ser nós, só cabem na corda comprimentos de onda
// que fecham certinho — e isso quantiza as frequências:
//
//   λₙ = 2L / n        fₙ = n · v / (2L) = n · f₁
//
// Ligue "ondas viajantes" para ver as duas parcelas correndo por baixo
// da soma. O movimento é mostrado em câmera lenta (20×).
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  handle, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const L = 1.0          // m — comprimento da corda
const SLOW = 1 / 20    // câmera lenta: 1 s de tela = 50 ms de corda
const N_MAX = 7

function geom(view) {
  const { w, h } = view
  const pad = w < 640 ? 28 : 56
  return {
    x0: pad, x1: w - pad,
    midY: h * 0.36,
    ampMax: Math.min(h * 0.20, 96),
    specY: h * 0.73,                 // topo do espectro
    specH: Math.max(56, h * 0.27 - 50),
  }
}

export default function OndasEstacionariasCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0, drag: false, hover: null, moved: false }), [])
  const step = useCallback((s, dt) => { s.t += dt }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const n   = clamp(Math.round(p.harmonico ?? 1), 1, N_MAX)
    const amp = (p.amplitude ?? 60) / 100
    const vel = p.velocidade ?? 10
    const showTravel = (p.viajantes ?? 1) === 1

    const lambda = (2 * L) / n
    const f1   = vel / (2 * L)
    const freq = n * f1
    const k    = (n * Math.PI) / L
    const wt   = 2 * Math.PI * freq * s.t * SLOW

    const { x0, x1, midY, ampMax, specY, specH } = geom(view)
    const span = x1 - x0
    const ampPx = ampMax * amp
    const X = xn => x0 + xn * span

    // ── Envelope: a região que a corda varre ──────────────────────
    // Numa corda real vibrando rápido é isto que o olho vê: um borrão
    // em forma de fusos, com os nós nítidos entre eles.
    ctx.fillStyle = hexA(A, 0.10)
    ctx.beginPath()
    for (let i = 0; i <= 200; i++) { const xn = i / 200; ctx.lineTo(X(xn), midY - ampPx * Math.abs(Math.sin(k * xn * L))) }
    for (let i = 200; i >= 0; i--) { const xn = i / 200; ctx.lineTo(X(xn), midY + ampPx * Math.abs(Math.sin(k * xn * L))) }
    ctx.closePath()
    ctx.fill()

    // posição de repouso
    ctx.strokeStyle = C.grid
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x0, midY + 0.5); ctx.lineTo(x1, midY + 0.5); ctx.stroke()

    // ── As duas ondas viajantes (metade da amplitude cada) ────────
    if (showTravel) {
      const draw = (dir, color) => {
        ctx.strokeStyle = hexA(color, 0.75)
        ctx.lineWidth = 1.4
        ctx.beginPath()
        for (let i = 0; i <= 200; i++) {
          const xn = i / 200
          const y = (ampPx / 2) * Math.sin(k * xn * L - dir * wt)
          i === 0 ? ctx.moveTo(X(xn), midY - y) : ctx.lineTo(X(xn), midY - y)
        }
        ctx.stroke()
      }
      draw(1, Q.kinetic)     // vai para a direita
      draw(-1, Q.potential)  // vai para a esquerda
    }

    // ── A corda: a soma das duas ──────────────────────────────────
    const phase = Math.cos(wt)
    ctx.strokeStyle = A
    ctx.lineWidth = 3
    ctx.lineJoin = 'round'
    ctx.beginPath()
    for (let i = 0; i <= 240; i++) {
      const xn = i / 240
      const y = ampPx * Math.sin(k * xn * L) * phase
      i === 0 ? ctx.moveTo(X(xn), midY - y) : ctx.lineTo(X(xn), midY - y)
    }
    ctx.stroke()

    // presilhas
    ctx.fillStyle = C.ink
    ctx.fillRect(x0 - 4, midY - 16, 4, 32)
    ctx.fillRect(x1, midY - 16, 4, 32)

    // nós (parados) — quadrados; ventres — alça arrastável no primeiro
    for (let i = 0; i <= n; i++) {
      ctx.fillStyle = Q.warn
      ctx.fillRect(X(i / n) - 3.5, midY - 3.5, 7, 7)
    }
    const vx = X(0.5 / n)
    const vy = midY - ampPx * phase
    ctx.fillStyle = Q.velocity
    for (let i = 0; i < n; i++) {
      const xn = (i + 0.5) / n
      ctx.beginPath()
      ctx.arc(X(xn), midY - ampPx * Math.sin(k * xn * L) * phase, 4, 0, Math.PI * 2)
      ctx.fill()
    }
    handle(ctx, vx, vy, 5, s.hover === 'amp' || s.drag, Q.velocity)

    // meio comprimento de onda = distância entre dois nós vizinhos
    const by = midY + ampMax + 12
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(X(0), by - 4); ctx.lineTo(X(0), by + 4)
    ctx.moveTo(X(1 / n), by - 4); ctx.lineTo(X(1 / n), by + 4)
    ctx.moveTo(X(0), by); ctx.lineTo(X(1 / n), by)
    ctx.stroke()
    text(ctx, `λ/2 = ${(lambda / 2).toFixed(2).replace('.', ',')} m`, X(0.5 / n), by + 16,
      { size: 10, color: C.dim, align: 'center' })
    text(ctx, `L = ${L.toFixed(0)} m`, x1, by + 16, { size: 10, color: C.muted, align: 'right' })

    // sonda: amplitude local sob o ponteiro
    const ptr = view.pointer
    if (ptr.inside && !s.drag && ptr.x > x0 && ptr.x < x1 && ptr.y < by) {
      const xn = (ptr.x - x0) / span
      const local = Math.abs(Math.sin(k * xn * L))
      ctx.strokeStyle = C.faint
      ctx.setLineDash([3, 3])
      ctx.beginPath(); ctx.moveTo(ptr.x, midY - ampMax - 6); ctx.lineTo(ptr.x, midY + ampMax + 6); ctx.stroke()
      ctx.setLineDash([])
      text(ctx, `aqui a corda oscila ${(local * 100).toFixed(0)}% do máximo`,
        clamp(ptr.x, x0 + 110, x1 - 110), midY - ampMax - 12, { size: 10, color: C.ink, align: 'center' })
    }

    caption(ctx, `${n}º harmônico: ${n} ${n > 1 ? 'ventres' : 'ventre'}, ${n + 1} nós`, 16, 24, A)
    if (showTravel) {
      legend(ctx, Math.max(16, w - 372), 24, [
        { label: 'onda que vai', color: Q.kinetic },
        { label: 'onda que volta', color: Q.potential },
        { label: 'soma', color: A },
      ])
    }

    // ── Espectro: só estas frequências cabem na corda ─────────────
    // Cada haste é um harmônico; clicar numa escolhe o modo.
    const fTop = N_MAX * f1
    const sx = f => x0 + (f / (fTop * 1.06)) * span
    const base = specY + specH
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(x0, base + 0.5); ctx.lineTo(x1, base + 0.5); ctx.stroke()
    caption(ctx, 'Frequências que cabem na corda (clique para escolher)', x0, specY - 22, C.dim)
    for (let i = 1; i <= N_MAX; i++) {
      const hx = sx(i * f1)
      const on = i === n
      const hot = s.hover === i
      const hh = on ? specH * 0.9 : specH * 0.55
      ctx.fillStyle = on ? A : hot ? C.ink : C.faint
      ctx.fillRect(hx - (on ? 3 : 2), base - hh, on ? 6 : 4, hh)
      text(ctx, `${(i * f1).toFixed(i * f1 < 100 ? 1 : 0).replace('.', ',')} Hz`, hx, base + 15,
        { size: 10, weight: on ? 700 : 500, color: on ? C.ink : C.muted, align: 'center' })
      text(ctx, i === 1 ? 'f₁' : `${i}·f₁`, hx, base - hh - 7,
        { size: 10, weight: on ? 700 : 500, color: on ? A : C.muted, align: 'center' })
    }

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'n  harmônico',  v: `${n}`, c: A },
      { k: 'modo',          v: n === 1 ? 'fundamental' : `${n}º harmônico` },
      { k: 'v  propagação', v: `${vel.toFixed(0)} m/s`, c: Q.velocity },
      { k: 'λ = 2L/n',      v: `${lambda.toFixed(2)} m`, c: Q.kinetic },
      { k: 'f = n·v/2L',    v: `${freq.toFixed(1)} Hz`, c: Q.warn },
      { k: 'f₁ fundamental', v: `${f1.toFixed(1)} Hz` },
      { k: 'T  período',    v: `${(1000 / freq).toFixed(1)} ms` },
      { k: 'câmera lenta',  v: '20×' },
    ], { title: 'λₙ = 2L / n', anchor: 'right', accent: A, minWidth: 200 })
  }, [])

  // Arraste o primeiro ventre para mudar a amplitude; clique numa haste
  // do espectro para trocar de harmônico.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { x0, x1, midY, ampMax, specY, specH } = geom(view)
    const span = x1 - x0
    const n   = clamp(Math.round(p.harmonico ?? 1), 1, N_MAX)
    const f1  = (p.velocidade ?? 10) / (2 * L)
    const amp = (p.amplitude ?? 60) / 100
    const k   = (n * Math.PI) / L
    const wt  = 2 * Math.PI * n * f1 * s.t * SLOW

    const vx = x0 + (0.5 / n) * span
    const vy = midY - ampMax * amp * Math.cos(wt)
    const overAmp = Math.hypot(pt.x - vx, pt.y - vy) < 20

    let overBar = null
    if (pt.y > specY - 24 && pt.y < specY + specH + 22) {
      for (let i = 1; i <= N_MAX; i++) {
        const hx = x0 + ((i * f1) / (N_MAX * f1 * 1.06)) * span
        if (Math.abs(pt.x - hx) < Math.max(14, span / (N_MAX * 2.4))) overBar = i
      }
    }

    if (kind === 'down') {
      if (overAmp) s.drag = true
      else if (overBar) { view.setParams?.({ harmonico: overBar }); s.moved = true }
    }
    if (kind === 'up') s.drag = false
    if (s.drag) {
      view.setParams?.({ amplitude: clamp((Math.abs(pt.y - midY) / ampMax) * 100, 20, 100) })
      s.moved = true
      return 'grab'
    }
    s.hover = overAmp ? 'amp' : overBar
    return overAmp || overBar ? 'grab' : null
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render} onPointer={onPointer}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

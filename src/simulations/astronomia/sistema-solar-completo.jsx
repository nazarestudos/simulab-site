// ═══════════════════════════════════════════════════════════════════
// ASTRONOMIA — Sistema Solar
//
// Não é uma animação decorativa: são EFEMÉRIDES. Cada planeta usa seus
// elementos orbitais reais (J2000) e a posição sai da equação de Kepler
//
//     M = E − e·sen E
//
// resolvida por Newton–Raphson a cada frame. O resultado é que os
// planetas ficam nas casas certas para a data simulada (mostrada no HUD),
// andam mais rápido no periélio (2ª lei) e respeitam T² ∝ a³ (3ª lei).
//
// Escala radial: real e proporcional. Netuno está 77× mais longe que
// Mercúrio — o zoom existe justamente para você sentir esse abismo, em
// vez de escondê-lo com uma escala falsa.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  glow, hexA, clamp, rng,
} from '../engine'

const A = ACCENT['astronomia']

// Elementos orbitais J2000 (a em UA, e, longitude do periélio ϖ e
// longitude média L em graus, período em dias julianos).
const PLANETS = [
  { n: 'Mercúrio', a: 0.38710, e: 0.20563, peri: 77.46,  L0: 252.25, T: 87.969,   r: 2.4,  col: '#9a9086' },
  { n: 'Vênus',    a: 0.72333, e: 0.00677, peri: 131.53, L0: 181.98, T: 224.701,  r: 3.6,  col: '#c9a77a' },
  { n: 'Terra',    a: 1.00000, e: 0.01671, peri: 102.95, L0: 100.46, T: 365.256,  r: 3.8,  col: '#7a9ac9' },
  { n: 'Marte',    a: 1.52371, e: 0.09339, peri: 336.04, L0: 355.45, T: 686.980,  r: 3.0,  col: '#b5654e' },
  { n: 'Júpiter',  a: 5.20288, e: 0.04839, peri: 14.73,  L0: 34.40,  T: 4332.589, r: 9.5,  col: '#c2a184' },
  { n: 'Saturno',  a: 9.53667, e: 0.05386, peri: 92.60,  L0: 49.95,  T: 10759.22, r: 8.2,  col: '#d0bb8a' },
  { n: 'Urano',    a: 19.1891, e: 0.04726, peri: 170.95, L0: 313.24, T: 30685.4,  r: 5.6,  col: '#8fb5bb' },
  { n: 'Netuno',   a: 30.0699, e: 0.00859, peri: 44.96,  L0: -55.12, T: 60189.0,  r: 5.4,  col: '#6f89bb' },
]

const DEG = Math.PI / 180

/** Resolve M = E − e·sen E por Newton–Raphson. Converge em ~4 iterações. */
function keplerE(M, e) {
  let E = M + e * Math.sin(M)   // chute inicial clássico
  for (let i = 0; i < 6; i++) {
    const f  = E - e * Math.sin(E) - M
    const fp = 1 - e * Math.cos(E)
    const d  = f / fp
    E -= d
    if (Math.abs(d) < 1e-12) break
  }
  return E
}

/** Posição heliocêntrica (UA) do planeta em `days` dias desde J2000. */
function positionAt(pl, days) {
  const n = 360 / pl.T                                    // graus/dia
  const M = ((pl.L0 - pl.peri + n * days) % 360 + 360) % 360
  const E = keplerE(M * DEG, pl.e)
  // Anomalia verdadeira e raio-vetor
  const nu = 2 * Math.atan2(
    Math.sqrt(1 + pl.e) * Math.sin(E / 2),
    Math.sqrt(1 - pl.e) * Math.cos(E / 2),
  )
  const r = pl.a * (1 - pl.e * Math.cos(E))
  const lon = nu + pl.peri * DEG
  return [r * Math.cos(lon), r * Math.sin(lon), r, nu]
}

export default function SistemaSolarCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(2024)
    return {
      days: 0,   // dias desde J2000 (1 jan 2000, 12h TT)
      stars: Array.from({ length: 220 }, () => ({
        x: rand(), y: rand(), r: rand() * 1.1 + 0.2, a: rand() * 0.45 + 0.12,
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    // timeScale: dias simulados por segundo real
    s.days += dt * (p.timeScale ?? 10) * 3.0
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view, { vignette: false })

    const zoom = p.zoom ?? 100
    const compact = w < 720
    const stageW = compact ? w : w * 0.72
    const cx = stageW * 0.5, cy = h * 0.5

    // Campo de visão: zoom alto → sistema interno; zoom baixo → tudo.
    const viewAU = 35 * (20 / clamp(zoom, 20, 200)) ** 1.4
    const ppau = Math.min(stageW, h) * 0.46 / viewAU

    for (const st of s.stars) {
      ctx.fillStyle = hexA('#ffffff', st.a)
      ctx.beginPath()
      ctx.arc(st.x * stageW, st.y * h, st.r, 0, Math.PI * 2)
      ctx.fill()
    }

    // ── Órbitas (elipses reais, Sol num dos focos) ────────────────
    for (const pl of PLANETS) {
      const b = pl.a * Math.sqrt(1 - pl.e * pl.e)
      const ax = pl.a * ppau, bx = b * ppau
      if (ax < 4) continue
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(pl.peri * DEG)
      ctx.translate(-pl.a * pl.e * ppau, 0)
      ctx.strokeStyle = hexA(pl.col, 0.24)
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.ellipse(0, 0, ax, bx, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    // ── Sol ───────────────────────────────────────────────────────
    glow(ctx, cx, cy, clamp(ppau * 0.02, 5, 13), '#e8c07a', 1)

    // ── Planetas ──────────────────────────────────────────────────
    const rows = []
    for (const pl of PLANETS) {
      const [x, y, r, nu] = positionAt(pl, s.days)
      const X = cx + x * ppau, Y = cy + y * ppau
      // Velocidade orbital instantânea por vis-viva, em km/s.
      // 29,7847 km/s é a velocidade orbital média da Terra.
      const vk = 29.7847 * Math.sqrt(2 / r - 1 / pl.a)

      const onScreen = Math.abs(X - cx) < stageW * 0.55 && Math.abs(Y - cy) < h * 0.6
      if (onScreen) {
        const pr = clamp(pl.r * (0.5 + 0.5 * Math.min(1, ppau / 30)), 2, 11)
        glow(ctx, X, Y, pr, pl.col, 0.75)
        if (ppau * pl.a > 26) {
          text(ctx, pl.n, X, Y - pr - 7, { size: 8.5, color: hexA(pl.col, 0.95), align: 'center' })
        }
        // Anel de Saturno — detalhe, mas na inclinação certa faz diferença
        if (pl.n === 'Saturno' && pr > 5) {
          ctx.strokeStyle = hexA('#d0bb8a', 0.5)
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.ellipse(X, Y, pr * 2.0, pr * 0.55, -0.35, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
      rows.push({ pl, r, vk })
    }

    // ── Data simulada ─────────────────────────────────────────────
    const date = new Date(Date.UTC(2000, 0, 1, 12) + s.days * 86400000)
    const dstr = date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' })
    caption(ctx, 'data simulada', 16, 24, C.muted)
    text(ctx, dstr, 16, 42, { size: 14, weight: 700, color: C.ink })
    text(ctx, `campo de visão: ${viewAU.toFixed(1)} UA  ·  ${(p.timeScale ?? 10).toFixed(1)} × 3 dias/s`,
      16, h - 16, { size: 8.5, color: C.muted })

    if (compact) return

    // ── Tabela: distância e velocidade AGORA ──────────────────────
    // A 2ª lei fica evidente aqui: r e v se movem em sentidos opostos.
    const tx = stageW + 20
    const tw = w - tx - 18
    caption(ctx, 'Planetas · agora', tx, 26, A)

    let ty = 44
    text(ctx, 'r (UA)', tx + tw - 62, ty, { size: 8, color: C.muted, align: 'right' })
    text(ctx, 'v (km/s)', tx + tw, ty, { size: 8, color: C.muted, align: 'right' })
    ty += 6
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx + tw, ty); ctx.stroke()
    ty += 15

    for (const { pl, r, vk } of rows) {
      ctx.fillStyle = pl.col
      ctx.beginPath(); ctx.arc(tx + 4, ty - 3, 3, 0, Math.PI * 2); ctx.fill()
      text(ctx, pl.n, tx + 13, ty, { size: 9.5, color: C.dim })
      text(ctx, r.toFixed(2), tx + tw - 62, ty, { size: 9.5, weight: 700, color: C.ink, align: 'right' })
      text(ctx, vk.toFixed(1), tx + tw, ty, { size: 9.5, weight: 700, color: Q.velocity, align: 'right' })
      ty += 17
    }

    ty += 10
    ctx.strokeStyle = C.line
    ctx.beginPath(); ctx.moveTo(tx, ty - 8); ctx.lineTo(tx + tw, ty - 8); ctx.stroke()
    text(ctx, 'quanto mais longe, mais devagar:', tx, ty + 6, { size: 8.5, color: C.muted })
    text(ctx, 'v ∝ 1/√r  ·  T² ∝ a³', tx, ty + 22, { size: 10, weight: 700, color: A })
    text(ctx, 'posições por equação de Kepler', tx, ty + 42, { size: 8.5, color: C.muted })
    text(ctx, 'elementos J2000 reais', tx, ty + 56, { size: 8.5, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

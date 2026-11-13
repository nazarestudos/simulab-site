// ═══════════════════════════════════════════════════════════════════
// ASTRONOMIA — Detecção de Exoplanetas por Trânsito
//
// É assim que o Kepler e o TESS acharam milhares de mundos: medindo o
// quanto uma estrela escurece quando um planeta passa na frente.
//
//   profundidade δ = (Rp/R★)²        ← só a razão de RAIOS, não de massas
//   período       P = √(a³/M★)        (3ª lei, em anos/UA/M☉)
//   duração       t ≈ (P/π)·asen(R★/a)
//
// O ESCURECIMENTO DE BORDA é o detalhe que separa uma curva de luz de
// brinquedo de uma real: o disco da estrela não tem brilho uniforme —
// a borda é mais fria e escura. Uso a lei quadrática
//
//   I(μ)/I(0) = 1 − u₁(1−μ) − u₂(1−μ)²,   μ = cos(ângulo)
//
// É por isso que a curva real tem fundo ARREDONDADO (em "U"), e não o
// fundo chato de um degrau.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  plot, hexA, clamp, rng, glow,
} from '../engine'

const A = ACCENT['astronomia']

const R_SUN  = 696340      // km
const R_EARTH = 6371       // km
const AU_KM  = 1.495979e8  // km

// Escurecimento de borda solar (banda visível)
const U1 = 0.44, U2 = 0.23

/** Cor aproximada de um corpo negro, em kelvin (aprox. de Tanner Helland). */
function kelvinColor(T) {
  const t = clamp(T, 1000, 40000) / 100
  let r, g, b
  if (t <= 66) { r = 255 } else { r = clamp(329.7 * Math.pow(t - 60, -0.1332), 0, 255) }
  if (t <= 66) { g = clamp(99.47 * Math.log(t) - 161.12, 0, 255) }
  else { g = clamp(288.12 * Math.pow(t - 60, -0.0755), 0, 255) }
  if (t >= 66) { b = 255 }
  else if (t <= 19) { b = 0 }
  else { b = clamp(138.52 * Math.log(t - 10) - 305.04, 0, 255) }
  return `rgb(${r | 0},${g | 0},${b | 0})`
}

/** Massa e raio de uma estrela de sequência principal, a partir de T_ef. */
function mainSequence(T) {
  const M = clamp(Math.pow(T / 5772, 1.7), 0.1, 3.0)    // M☉
  const R = clamp(Math.pow(M, 0.85), 0.12, 2.6)         // R☉
  const L = R * R * Math.pow(T / 5772, 4)               // L☉
  return { M, R, L }
}

/** Intensidade relativa a uma distância normalizada d ∈ [0,1] do centro do disco. */
function limbDark(d) {
  if (d >= 1) return 0
  const mu = Math.sqrt(1 - d * d)
  return 1 - U1 * (1 - mu) - U2 * (1 - mu) ** 2
}

/**
 * Fluxo relativo com o planeta a uma distância projetada `sep` (em raios
 * estelares) do centro. Integra numericamente o disco da estrela com
 * escurecimento de borda, ocultando o que o planeta cobre.
 */
function fluxAt(sep, k) {          // k = Rp/R★
  const N = 44
  let total = 0, blocked = 0
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const x = -1 + (2 * (i + 0.5)) / N
      const y = -1 + (2 * (j + 0.5)) / N
      const d = Math.hypot(x, y)
      if (d >= 1) continue
      const I = limbDark(d)
      total += I
      if (Math.hypot(x - sep, y) < k) blocked += I
    }
  }
  return total > 0 ? 1 - blocked / total : 1
}

export default function ExoplanetaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(451)
    return {
      phase: 0.62,     // fase orbital ∈ [0,1); 0 = meio do trânsito
      curve: [],
      stars: Array.from({ length: 90 }, () => ({
        x: rand(), y: rand(), r: rand() * 0.9 + 0.2, a: rand() * 0.35 + 0.1,
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    s.phase = (s.phase + dt * 0.12) % 1
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view, { vignette: false })

    const Teff = p.starTemp     ?? 5800
    const Rp   = p.planetRadius ?? 1.0     // R⊕
    const aAU  = p.orbitDist    ?? 1.0     // UA

    const star = mainSequence(Teff)
    const Rstar_km = star.R * R_SUN
    const Rp_km    = Rp * R_EARTH
    const k = Rp_km / Rstar_km                       // razão de raios
    const depth = k * k                              // profundidade do trânsito
    const P = Math.sqrt(aAU ** 3 / star.M)           // anos
    const Pdays = P * 365.25
    const aOverR = (aAU * AU_KM) / Rstar_km          // a / R★
    // Duração do trânsito central
    const dur = aOverR > 1
      ? (Pdays / Math.PI) * Math.asin(1 / aOverR) * 24    // horas
      : 0
    // Temperatura de equilíbrio do planeta (albedo 0,3)
    const Teq = Teff * Math.sqrt(1 / (2 * aOverR)) * Math.pow(1 - 0.3, 0.25)
    // Zona habitável (Kopparapu, aproximada por √L)
    const hzIn  = 0.95 * Math.sqrt(star.L)
    const hzOut = 1.37 * Math.sqrt(star.L)
    const inHZ  = aAU >= hzIn && aAU <= hzOut

    const starCol = kelvinColor(Teff)

    const compact = w < 720
    const stageH = compact ? h * 0.52 : h * 0.55

    for (const st of s.stars) {
      ctx.fillStyle = hexA('#ffffff', st.a)
      ctx.beginPath(); ctx.arc(st.x * w, st.y * stageH, st.r, 0, Math.PI * 2); ctx.fill()
    }

    // ── Estrela, com escurecimento de borda desenhado de verdade ──
    const cx = w * 0.5, cy = stageH * 0.5
    const Rpx = Math.min(w * 0.20, stageH * 0.38)

    glow(ctx, cx, cy, Rpx * 0.2, starCol, 0.5)
    // Anéis concêntricos com a lei quadrática — o limbo escurece.
    const steps = 46
    for (let i = steps; i >= 1; i--) {
      const d = i / steps
      const I = limbDark(d * 0.999)
      ctx.fillStyle = hexA(starCol, clamp(I, 0, 1))
      ctx.beginPath()
      ctx.arc(cx, cy, d * Rpx, 0, Math.PI * 2)
      ctx.fill()
    }

    // ── Planeta ───────────────────────────────────────────────────
    // Fase 0 = centro do trânsito. Mapeio a fase para a separação
    // projetada em raios estelares.
    const ang = s.phase * Math.PI * 2
    const sep = aOverR * Math.sin(ang)          // separação projetada (R★)
    const front = Math.cos(ang) > 0             // na frente da estrela?

    const pxPl = cx + sep * Rpx
    const prPl = Math.max(1.6, k * Rpx)

    if (!front) {
      // atrás — desenha antes (fica ocultado se entrar no disco)
      if (Math.hypot(sep, 0) > 1 + k) {
        ctx.fillStyle = '#2a2a2e'
        ctx.beginPath(); ctx.arc(pxPl, cy, prPl, 0, Math.PI * 2); ctx.fill()
      }
    }

    // Órbita (vista de cima, esquemática)
    ctx.strokeStyle = hexA(C.ink, 0.10)
    ctx.setLineDash([3, 4])
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.ellipse(cx, cy, aOverR * Rpx, aOverR * Rpx * 0.10, 0, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])

    if (front) {
      ctx.fillStyle = '#121214'
      ctx.beginPath(); ctx.arc(pxPl, cy, prPl, 0, Math.PI * 2); ctx.fill()
      ctx.strokeStyle = hexA('#000', 0.9)
      ctx.lineWidth = 0.8
      ctx.stroke()
    }

    // ── Curva de luz ──────────────────────────────────────────────
    const flux = front ? fluxAt(sep, k) : 1
    s.curve.push([s.phase, flux])
    if (s.curve.length > 900) s.curve.shift()

    // Curva teórica ao longo de uma órbita inteira
    const model = []
    for (let i = 0; i <= 260; i++) {
      const ph = i / 260
      const an = ph * Math.PI * 2
      const sp = aOverR * Math.sin(an)
      const fr = Math.cos(an) > 0
      model.push([ph, fr ? fluxAt(sp, k) : 1])
    }

    const gy = stageH + 40
    const gh = h - gy - 46
    const dmin = Math.min(...model.map(m => m[1]))
    const pad = Math.max((1 - dmin) * 0.25, 1e-5)

    caption(ctx, 'Curva de luz · fluxo observado', 60, gy - 12, A)
    plot(ctx, { x: 60, y: gy, w: w - 100, h: gh }, {
      xDomain: [0, 1], yDomain: [dmin - pad, 1 + pad * 0.6],
      xTicks: 4, yTicks: 3,
      fmtX: q => q.toFixed(2),
      fmtY: q => { const ppm = Math.round((q - 1) * 1e6); return ppm === 0 ? '0' : `${ppm} ppm` },
      xLabel: 'fase orbital', yLabel: 'fluxo relativo',
      rules: [{ y: 1, color: C.faint, label: 'fora do trânsito' }],
      series: [{ points: model, color: hexA(A, 0.85), width: 1.8 }],
      markers: [{ x: s.phase, y: flux, color: Q.warn, r: 4 }],
    })

    // ── Leituras ──────────────────────────────────────────────────
    const hzTxt = inHZ ? 'na zona habitável' : aAU < hzIn ? 'quente demais' : 'fria demais'
    readout(ctx, w - 14, 14, [
      { k: 'T★ efetiva',    v: `${Teff} K`, c: starCol },
      { k: 'R★ raio',       v: `${star.R.toFixed(2)} R☉` },
      { k: 'M★ massa',      v: `${star.M.toFixed(2)} M☉` },
      { k: 'Rp/R★',         v: k.toFixed(4), c: A },
      { k: 'δ  profundidade', v: `${(depth * 1e6).toFixed(0)} ppm`, c: Q.warn },
      { k: 'P  período',    v: Pdays > 400 ? `${P.toFixed(2)} anos` : `${Pdays.toFixed(1)} dias` },
      { k: 't  duração',    v: `${dur.toFixed(1)} h` },
      { k: 'T_eq planeta',  v: `${Teq.toFixed(0)} K`, c: Q.thermal },
      { k: 'zona habitável', v: hzTxt, c: inHZ ? Q.potential : C.dim },
    ], { title: 'δ = (Rp/R★)²', anchor: 'right', accent: A, minWidth: 210 })

    // Barra da zona habitável
    const bx = 16, by = 24, bw = Math.min(190, w * 0.24)
    caption(ctx, 'zona habitável', bx, by - 8, C.muted)
    const scale = 3.0
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(bx, by, bw, 5)
    ctx.fillStyle = hexA(Q.potential, 0.55)
    ctx.fillRect(bx + (hzIn / scale) * bw, by, ((hzOut - hzIn) / scale) * bw, 5)
    const mx = clamp(bx + (aAU / scale) * bw, bx, bx + bw)
    ctx.fillStyle = inHZ ? Q.potential : Q.warn
    ctx.fillRect(mx - 1, by - 3, 2, 11)
    text(ctx, `${aAU.toFixed(1)} UA`, mx, by + 20, { size: 8.5, weight: 700, color: inHZ ? Q.potential : Q.warn, align: 'center' })
    text(ctx, `${hzIn.toFixed(2)}–${hzOut.toFixed(2)} UA`, bx, by + 20, { size: 8, color: C.muted })

    // Detectabilidade — o Kepler media ~20 ppm no melhor caso
    const det = depth * 1e6
    const dtxt = det > 10000 ? 'trânsito gigante (Júpiter quente)'
      : det > 1000 ? 'fácil de detectar'
      : det > 84   ? 'detectável (Terra ≈ 84 ppm)'
      : 'no limite do ruído instrumental'
    text(ctx, dtxt, 16, h - 16, { size: 9, color: det > 84 ? Q.potential : Q.warn })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

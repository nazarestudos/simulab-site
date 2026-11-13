// ═══════════════════════════════════════════════════════════════════
// ASTRONOMIA — Buraco Negro de Schwarzschild
//
// Raio de Schwarzschild:  r_s = 2GM/c²   (≈ 2,95 km por massa solar)
//   · esfera de fótons ......... 1,5 r_s  — luz orbita em círculo
//   · ISCO (última órbita) ..... 3,0 r_s  — borda interna do disco
//   · sombra aparente .......... √27/2 · r_s ≈ 2,598 r_s
//
// A LENTE GRAVITACIONAL é real, não um filtro: cada estrela do fundo é
// resolvida pela equação da lente pontual
//
//     β = θ − θ_E²/θ    →    θ± = ½·(β ± √(β² + 4θ_E²))
//
// Isso produz DUAS imagens de cada estrela — a direta (θ+) e a invertida
// do outro lado (θ−) — e, quando uma estrela passa exatamente atrás,
// elas se fundem no anel de Einstein. A magnificação μ± = |θ±/β| · |dθ±/dβ|
// controla o brilho: por isso as imagens esticam perto do anel.
//
// O disco de acreção tem BEAMING relativístico: o lado que vem na nossa
// direção fica muito mais brilhante. É a assimetria que a foto do M87*
// mostrou ao mundo em 2019.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  glow, hexA, clamp, rng, mix, sci,
} from '../engine'

const A     = ACCENT['astronomia']
const G     = 6.674e-11
const C_L   = 299792458
const M_SUN = 1.98847e30

export default function BuracoNegroCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => {
    const rand = rng(1987)
    return {
      t: 0,
      // Estrelas de fundo em coordenadas normalizadas centradas no BN
      stars: Array.from({ length: 260 }, () => ({
        // distribuição uniforme em disco, para não acumular no centro
        ang: rand() * Math.PI * 2,
        rad: Math.sqrt(rand()),
        b: rand() * 0.55 + 0.25,
        sz: rand() * 0.9 + 0.45,
      })),
      // Partículas do disco de acreção. Vão da ISCO (3 r_s — dentro dela
      // não existe órbita estável) até 9 r_s. Espalhar até 14 r_s deixava
      // o disco raro demais para aparecer.
      disk: Array.from({ length: 1100 }, () => ({
        r: 3 + Math.pow(rand(), 0.7) * 6,
        ph: rand() * Math.PI * 2,
        s: rand() * 0.5 + 0.75,
      })),
    }
  }, [])

  const step = useCallback((s, dt, p) => {
    s.t += dt
    // Rotação kepleriana: ω ∝ r^-3/2. O interior gira MUITO mais rápido.
    for (const d of s.disk) {
      d.ph += dt * 1.9 * Math.pow(d.r, -1.5) * 14
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view, { vignette: false })

    const M   = (p.mass ?? 20)                    // massas solares
    const acc = (p.accretion ?? 70) / 100
    const rs  = 2 * G * (M * M_SUN) / (C_L * C_L) // metros

    const compact = w < 720
    const stageW = compact ? w : w * 0.63
    const cx = stageW * 0.5, cy = h * 0.5

    // Escala de tela: o raio da sombra ocupa uma fração fixa da tela,
    // e a massa altera o quanto o disco/lente se estendem em r_s.
    const RS = Math.min(stageW, h) * 0.085     // pixels por r_s
    const shadow = 2.598 * RS                  // sombra aparente
    const thetaE = shadow * 1.02               // raio de Einstein, em px

    // ═══ LENTE GRAVITACIONAL ═══════════════════════════════════════
    // Para cada estrela, resolvo a equação da lente e desenho as DUAS
    // imagens, com brilho pela magnificação.
    const maxR = Math.hypot(stageW, h) * 0.62
    for (const st of s.stars) {
      const beta = st.rad * maxR              // posição verdadeira (px do centro)
      if (beta < 0.5) continue
      const disc = Math.sqrt(beta * beta + 4 * thetaE * thetaE)
      const tPlus  = 0.5 * (beta + disc)      // imagem direta
      const tMinus = 0.5 * (beta - disc)      // imagem secundária (negativa → lado oposto)

      const u = beta / thetaE
      // Magnificações da lente pontual
      const muP = (u * u + 2) / (2 * u * Math.sqrt(u * u + 4)) + 0.5
      const muM = Math.abs((u * u + 2) / (2 * u * Math.sqrt(u * u + 4)) - 0.5)

      const ca = Math.cos(st.ang), sa = Math.sin(st.ang)

      // imagem primária
      const x1 = cx + ca * tPlus, y1 = cy + sa * tPlus
      const a1 = clamp(st.b * Math.sqrt(muP), 0, 1)
      ctx.fillStyle = hexA('#ffffff', a1)
      ctx.beginPath()
      ctx.arc(x1, y1, st.sz * clamp(Math.sqrt(muP), 0.7, 2.2), 0, Math.PI * 2)
      ctx.fill()

      // imagem secundária: sempre do lado oposto, dentro do anel
      const rM = Math.abs(tMinus)
      if (rM > shadow * 0.98) {
        const x2 = cx - ca * rM, y2 = cy - sa * rM
        const a2 = clamp(st.b * Math.sqrt(muM), 0, 1)
        ctx.fillStyle = hexA('#cfd8e8', a2)
        ctx.beginPath()
        ctx.arc(x2, y2, st.sz * clamp(Math.sqrt(muM), 0.5, 1.8), 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // ═══ DISCO DE ACREÇÃO ══════════════════════════════════════════
    // Visto quase de perfil. Cada partícula tem:
    //  · temperatura ∝ r^-3/4 (disco de Shakura–Sunyaev) → cor
    //  · beaming relativístico: o lado que se aproxima brilha mais
    if (acc > 0.02) {
      const tilt = 0.24   // inclinação do disco (quase de perfil)
      // Blending aditivo: partículas sobrepostas SOMAM luz, como faria um
      // plasma de verdade. Sem isso o disco fica com cara de confete.
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      for (const d of s.disk) {
        const px = Math.cos(d.ph) * d.r * RS
        const pz = Math.sin(d.ph) * d.r * RS
        const py = pz * tilt

        const X = cx + px
        const Y = cy + py

        // atrás do buraco? o topo do disco continua visível por lente,
        // mas o trecho ocultado pela sombra some.
        const behind = pz < 0
        const rr = Math.hypot(X - cx, Y - cy)
        if (behind && rr < shadow) continue

        // Temperatura do disco: T ∝ r^-3/4 → interior azul, exterior vermelho
        const tNorm = clamp(Math.pow(3 / d.r, 0.75), 0, 1)
        const col = mix('#c2704f', '#cfe0ff', tNorm)

        // Beaming: v_orb/c no raio r; o lado que se aproxima (vx > 0) brilha.
        const vOrb = Math.sqrt(1 / (2 * d.r))          // em unidades de c
        const approaching = Math.cos(d.ph + Math.PI / 2)
        const beam = clamp(1 + 3.2 * vOrb * approaching, 0.12, 2.6)

        // Alfa baixo por partícula: com blending aditivo elas se somam e
        // o disco emerge liso, em vez de virar um amontoado de pontos.
        const alpha = clamp(0.30 * acc * d.s * beam * (0.4 + 0.6 * tNorm), 0, 1)
        ctx.fillStyle = hexA(col, alpha)
        ctx.beginPath()
        ctx.arc(X, Y, 2.4 + tNorm * 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    // ═══ SOMBRA + ANEL DE FÓTONS ═══════════════════════════════════
    // A sombra é preta de verdade: nada escapa de dentro dela.
    ctx.fillStyle = '#000000'
    ctx.beginPath(); ctx.arc(cx, cy, shadow, 0, Math.PI * 2); ctx.fill()

    // Anel de fótons: luz que orbitou e escapou — sempre presente,
    // mesmo sem disco.
    const ring = ctx.createRadialGradient(cx, cy, shadow * 0.97, cx, cy, shadow * 1.14)
    ring.addColorStop(0, hexA('#ffdca8', 0))
    ring.addColorStop(0.35, hexA('#ffdca8', 0.85))
    ring.addColorStop(1, hexA('#ffdca8', 0))
    ctx.fillStyle = ring
    ctx.beginPath(); ctx.arc(cx, cy, shadow * 1.14, 0, Math.PI * 2); ctx.fill()

    // Anel de Einstein (onde as imagens se fundem)
    ctx.strokeStyle = hexA('#8fa9c9', 0.14)
    ctx.setLineDash([2, 5])
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.arc(cx, cy, thetaE, 0, Math.PI * 2); ctx.stroke()
    ctx.setLineDash([])

    // ═══ ESCALAS ═══════════════════════════════════════════════════
    caption(ctx, 'sombra 2,6 r_s', cx, cy - shadow - 10, hexA('#ffdca8', 0.8))

    // Grandezas físicas
    const rsKm  = rs / 1000
    const iscoKm = 3 * rsKm
    // Temperatura característica do disco (ordem de grandeza, ∝ M^-1/4)
    const tDisk = 2e7 * Math.pow(10 / M, 0.25)
    // Tempo de queda do horizonte (ordem de grandeza)
    const tFall = rs / C_L

    readout(ctx, w - 14, 14, [
      { k: 'M  massa',       v: `${M} M☉`, c: A },
      { k: 'r_s Schwarzschild', v: rsKm >= 1 ? `${rsKm.toFixed(1)} km` : `${(rs).toFixed(0)} m` },
      { k: 'esfera de fótons', v: `${(1.5 * rsKm).toFixed(1)} km`, c: '#ffdca8' },
      { k: 'ISCO',           v: `${iscoKm.toFixed(1)} km`, c: Q.warn },
      { k: 'sombra aparente', v: `${(2.598 * rsKm).toFixed(1)} km` },
      { k: 'T do disco',     v: `${sci(tDisk, 1)} K`, c: Q.thermal },
      { k: 'r_s / c',        v: `${sci(tFall, 1)} s`, c: C.dim },
    ], { title: 'r_s = 2GM/c²', anchor: 'right', accent: A, minWidth: 208 })

    text(ctx, 'cada estrela aparece DUAS vezes: lente gravitacional', 16, h - 30,
      { size: 9, color: C.dim })
    text(ctx, 'o lado esquerdo do disco brilha mais — beaming relativístico', 16, h - 16,
      { size: 8.5, color: C.muted })

    caption(ctx, 'Buraco negro de Schwarzschild', 16, 24, A)
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

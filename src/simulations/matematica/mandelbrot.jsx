// ═══════════════════════════════════════════════════════════════════
// MATEMÁTICA — Conjunto de Mandelbrot
//
//     z₀ = 0 ;  z_{n+1} = z_n² + c        (c ∈ ℂ)
//
// Um ponto c pertence ao conjunto se a órbita NUNCA escapa. Prova-se que
// basta |z| > 2 uma única vez para a órbita divergir para sempre — daí o
// raio de escape 2.
//
// Duas coisas que separam um Mandelbrot de verdade de um "gradiente
// bonito":
//
// · CONTAGEM SUAVE DE ESCAPE. Contar iterações inteiras produz faixas
//   grosseiras. O truque é
//       ν = n + 1 − log₂(log|z_n|)
//   que interpola continuamente entre as faixas. É por isso que os
//   gradientes aqui são lisos.
//
// · VERIFICAÇÃO DE CARDIOIDE E BULBO. O corpo principal e o bulbo
//   circular à esquerda são regiões conhecidas ANALITICAMENTE. Testá-las
//   antes evita iterar o máximo de vezes no miolo — é o que faz o
//   zoom render rápido em vez de travar.
//
// Clique e arraste para navegar; a órbita do ponto sob o cursor é
// desenhada em tempo real.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, text, caption, readout, hexA, clamp,
} from '../engine'

const A = ACCENT['matematica']

/** HSL → RGB direto no buffer (evita alocar strings por pixel). */
function hsl(hDeg, s, l) {
  const h = ((hDeg % 360) + 360) % 360 / 60
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h % 2) - 1))
  const m = l - c / 2
  let r = 0, g = 0, b = 0
  if (h < 1)      { r = c; g = x }
  else if (h < 2) { r = x; g = c }
  else if (h < 3) { g = c; b = x }
  else if (h < 4) { g = x; b = c }
  else if (h < 5) { r = x; b = c }
  else            { r = c; b = x }
  return [(r + m) * 255, (g + m) * 255, (b + m) * 255]
}

export default function MandelbrotCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    cx: -0.6, cy: 0,        // centro no plano complexo
    scale: 1.35,            // metade da altura visível
    img: null,
    dirty: true,
    lastKey: '',
    drag: null,
    orbit: [],
    mouse: null,
    t: 0,
  }), [])

  // O fractal não evolui no tempo: ele é recalculado quando você navega
  // ou mexe nos parâmetros. Nada a integrar.
  const step = useCallback(() => {}, [])

  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return
    if (kind === 'down') {
      s.drag = { x: pt.x, y: pt.y, cx: s.cx, cy: s.cy }
    } else if (kind === 'up') {
      s.drag = null
    } else if (kind === 'move') {
      const { w, h } = view
      const stageW = w < 720 ? w : w * 0.66
      const ppu = h / (2 * s.scale)
      if (s.drag) {
        s.cx = s.drag.cx - (pt.x - s.drag.x) / ppu
        s.cy = s.drag.cy - (pt.y - s.drag.y) / ppu
        s.dirty = true
      }
      // órbita sob o cursor
      if (pt.x < stageW) {
        const re = s.cx + (pt.x - stageW / 2) / ppu
        const im = s.cy + (pt.y - h / 2) / ppu
        s.mouse = [re, im]
        const orb = []
        let zr = 0, zi = 0
        for (let i = 0; i < 60; i++) {
          const t2 = zr * zr - zi * zi + re
          zi = 2 * zr * zi + im
          zr = t2
          if (zr * zr + zi * zi > 64) break
          orb.push([zr, zi])
        }
        s.orbit = orb
      } else {
        s.mouse = null
        s.orbit = []
      }
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    const maxIter = Math.round(p.maxIter ?? 50)
    const shift = p.colorShift ?? 180

    // Ampliação exponencial: cada passo do slider aproxima ~7 %.
    // Em 100 passos isso dá ~1000× — o suficiente para achar cópias
    // em miniatura do próprio conjunto (é autossimilar).
    s.scale = 1.35 * Math.pow(0.933, p.zoom ?? 0)

    const compact = w < 720
    const stageW = Math.round(compact ? w : w * 0.66)

    // ── Recalcula o fractal só quando algo muda ──────────────────
    // Resolução da imagem: pixels do dispositivo (limitada, é o trecho caro)
    const res = Math.min(view.scale ?? 1, 1.5)
    const key = `${s.cx.toFixed(9)}|${s.cy.toFixed(9)}|${s.scale.toFixed(9)}|${maxIter}|${shift}|${stageW}x${h}@${res}`
    if (key !== s.lastKey) {
      s.lastKey = key
      const iw = Math.max(1, Math.round(stageW * res)), ih = Math.max(1, Math.round(h * res))
      const img = ctx.createImageData(iw, ih)
      const d = img.data
      const ppu = ih / (2 * s.scale)

      for (let py = 0; py < ih; py++) {
        const ci = s.cy + (py - ih / 2) / ppu
        for (let px = 0; px < iw; px++) {
          const cr = s.cx + (px - iw / 2) / ppu
          const o = (py * iw + px) * 4

          // Atalhos analíticos: cardioide principal e bulbo período-2.
          // Sem isso, o miolo custa maxIter iterações por pixel à toa.
          const q = (cr - 0.25) ** 2 + ci * ci
          const inCardioid = q * (q + (cr - 0.25)) <= 0.25 * ci * ci
          const inBulb = (cr + 1) ** 2 + ci * ci <= 0.0625
          if (inCardioid || inBulb) {
            d[o] = 0; d[o + 1] = 0; d[o + 2] = 0; d[o + 3] = 255
            continue
          }

          let zr = 0, zi = 0, n = 0
          let zr2 = 0, zi2 = 0
          while (zr2 + zi2 <= 64 && n < maxIter) {
            zi = 2 * zr * zi + ci
            zr = zr2 - zi2 + cr
            zr2 = zr * zr
            zi2 = zi * zi
            n++
          }

          if (n >= maxIter) {
            d[o] = 0; d[o + 1] = 0; d[o + 2] = 0; d[o + 3] = 255
          } else {
            // Contagem SUAVE de escape — elimina as faixas.
            const modz = Math.sqrt(zr2 + zi2)
            const nu = n + 1 - Math.log2(Math.max(Math.log(modz), 1e-9))
            const t = clamp(nu / maxIter, 0, 1)
            // Rampa não linear: dá detalhe onde o escape é lento.
            const hue = shift + 300 * Math.pow(t, 0.42)
            const lig = 0.5 * Math.pow(t, 0.32)
            const [r, g, b] = hsl(hue, 0.55, clamp(lig, 0, 0.72))
            d[o] = r; d[o + 1] = g; d[o + 2] = b; d[o + 3] = 255
          }
        }
      }
      if (!s.off) s.off = document.createElement('canvas')
      s.off.width = iw; s.off.height = ih
      s.off.getContext('2d').putImageData(img, 0, 0)
      s.img = img
    }

    if (s.off) ctx.drawImage(s.off, 0, 0, stageW, h)

    // Limpa a faixa lateral (o putImageData escreveu só o palco)
    if (!compact) {
      ctx.fillStyle = C.bg
      ctx.fillRect(stageW, 0, w - stageW, h)
    }

    const ppu = h / (2 * s.scale)
    const toPx = (re, im) => [
      stageW / 2 + (re - s.cx) * ppu,
      h / 2 + (im - s.cy) * ppu,
    ]

    // ── Órbita sob o cursor: z → z² + c, passo a passo ───────────
    if (s.orbit.length > 1) {
      ctx.save()
      ctx.beginPath(); ctx.rect(0, 0, stageW, h); ctx.clip()
      ctx.strokeStyle = hexA('#ffffff', 0.55)
      ctx.lineWidth = 1
      ctx.beginPath()
      s.orbit.forEach(([re, im], i) => {
        const [X, Y] = toPx(re, im)
        i === 0 ? ctx.moveTo(X, Y) : ctx.lineTo(X, Y)
      })
      ctx.stroke()
      for (const [re, im] of s.orbit) {
        const [X, Y] = toPx(re, im)
        ctx.fillStyle = hexA('#ffffff', 0.8)
        ctx.beginPath(); ctx.arc(X, Y, 1.6, 0, Math.PI * 2); ctx.fill()
      }
      ctx.restore()
    }

    // ── HUD ──────────────────────────────────────────────────────
    caption(ctx, 'z ↦ z² + c   ·   arraste para navegar', 16, 24, hexA('#ffffff', 0.75))

    const zoom = 1.35 / s.scale
    let escaped = null
    if (s.mouse) {
      const [re, im] = s.mouse
      let zr = 0, zi = 0, n = 0
      while (zr * zr + zi * zi <= 4 && n < maxIter) {
        const t2 = zr * zr - zi * zi + re
        zi = 2 * zr * zi + im
        zr = t2
        n++
      }
      escaped = n >= maxIter ? null : n
    }

    readout(ctx, w - 14, 14, [
      { k: 'centro re', v: s.cx.toFixed(6), c: A },
      { k: 'centro im', v: s.cy.toFixed(6), c: A },
      { k: 'zoom',      v: `${zoom < 1000 ? zoom.toFixed(1) : zoom.toExponential(1)}×` },
      { k: 'iterações', v: maxIter, c: Q.warn },
      { k: 'c sob o cursor', v: s.mouse ? `${s.mouse[0].toFixed(3)}` : '—' },
      { k: 'escapou em', v: escaped !== null ? `${escaped} passos` : (s.mouse ? 'nunca — está no conjunto' : '—'),
        c: escaped !== null ? Q.warn : Q.potential },
    ], { title: 'Mandelbrot', anchor: 'right', accent: A, minWidth: 210 })

    if (compact) return

    // Explicação lateral
    const tx = stageW + 24
    let ty = h * 0.52
    text(ctx, 'raio de escape = 2', tx, ty, { size: 10, weight: 700, color: A })
    ty += 18
    text(ctx, 'se |z| passa de 2 uma vez,', tx, ty, { size: 9, color: C.dim })
    ty += 13
    text(ctx, 'a órbita diverge para sempre.', tx, ty, { size: 9, color: C.dim })
    ty += 26
    text(ctx, 'preto = a órbita nunca escapa', tx, ty, { size: 9, color: C.muted })
    ty += 13
    text(ctx, 'cor = velocidade do escape', tx, ty, { size: 9, color: C.muted })
    ty += 26
    text(ctx, 'a borda tem dimensão fractal 2', tx, ty, { size: 9, weight: 700, color: Q.warn })
    ty += 13
    text(ctx, '— é infinitamente rugosa,', tx, ty, { size: 9, color: C.muted })
    ty += 13
    text(ctx, 'em qualquer ampliação.', tx, ty, { size: 9, color: C.muted })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render} onPointer={onPointer}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Lentes e Formação de Imagem
//
// Traçado de raios de verdade, com a equação dos pontos conjugados:
//
//   1/f = 1/p + 1/p'      →     p' = (p · f) / (p − f)
//   aumento A = −p' / p   (negativo = invertida)
//
// Dois raios notáveis bastam para achar a imagem:
//   · o raio PARALELO ao eixo → refrata passando pelo foco
//   · o raio pelo CENTRO óptico → segue reto, sem desviar
//
// Onde eles se cruzam está a imagem. Se os raios divergem depois da
// lente, o cruzamento é dos seus PROLONGAMENTOS: imagem virtual
// (tracejada) — é o caso da lupa e de toda lente divergente.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, hexA, clamp,
  handle,
} from '../engine'

const A = ACCENT['fisica-classica']

export default function LentesCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ t: 0 }), [])
  const step = useCallback((s, dt) => { s.t += dt }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const pObj = p.distanciaObjeto ?? 30       // p  — distância do objeto
    const divergente = (p.tipoLente ?? 0) > 50
    const f = (p.distanciaFocal ?? 15) * (divergente ? -1 : 1)   // f < 0 se divergente

    // ── Equação dos pontos conjugados ─────────────────────────────
    const denom = pObj - f
    const noInfinito = Math.abs(denom) < 0.4
    const pImg = noInfinito ? Infinity : (pObj * f) / denom      // p'
    const aum  = noInfinito ? Infinity : -pImg / pObj            // aumento

    // ── Geometria ─────────────────────────────────────────────────
    const cx = w * 0.5, cy = h * 0.52
    const ppu = clamp(Math.min(w * 0.44 / 62, h * 0.32 / 22), 2, 9)
    const X = u => cx + u * ppu
    const hObj = 20 * ppu * 0.5      // altura do objeto, em px

    // eixo óptico
    ctx.strokeStyle = hexA(C.ink, 0.28); ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(0, cy + 0.5); ctx.lineTo(w, cy + 0.5); ctx.stroke()

    // ── A lente ───────────────────────────────────────────────────
    const lh = Math.min(h * 0.40, 150)
    ctx.strokeStyle = hexA(A, 0.9); ctx.lineWidth = 2
    ctx.fillStyle = hexA(A, 0.10)
    ctx.beginPath()
    if (!divergente) {
      // convergente: biconvexa
      ctx.moveTo(cx, cy - lh / 2)
      ctx.quadraticCurveTo(cx + 16, cy, cx, cy + lh / 2)
      ctx.quadraticCurveTo(cx - 16, cy, cx, cy - lh / 2)
    } else {
      // divergente: bicôncava
      ctx.moveTo(cx - 9, cy - lh / 2)
      ctx.quadraticCurveTo(cx + 2, cy, cx - 9, cy + lh / 2)
      ctx.lineTo(cx + 9, cy + lh / 2)
      ctx.quadraticCurveTo(cx - 2, cy, cx + 9, cy - lh / 2)
      ctx.closePath()
    }
    ctx.fill(); ctx.stroke()

    // focos (nos dois lados)
    const fAbs = Math.abs(f)
    for (const sgn of [-1, 1]) {
      const fx = X(sgn * fAbs)
      ctx.fillStyle = Q.warn
      ctx.beginPath(); ctx.arc(fx, cy, 2.6, 0, Math.PI * 2); ctx.fill()
      text(ctx, 'F', fx, cy + 16, { size: 9, weight: 700, color: Q.warn, align: 'center' })
    }

    // ── Objeto (seta para cima, à esquerda) ───────────────────────
    const xo = X(-pObj)
    arrow(ctx, xo, cy, xo, cy - hObj, { color: Q.velocity, width: 2.4 })
    text(ctx, 'objeto', xo, cy + 16, { size: 9, color: Q.velocity, align: 'center' })

    // ── Traçado dos dois raios notáveis ───────────────────────────
    const topO = cy - hObj
    // Altura da imagem em px, positiva PARA CIMA: A = −p'/p > 0 é imagem
    // direita (acima do eixo); A < 0 é invertida (abaixo). É a mesma
    // altura em que os dois raios notáveis se cruzam.
    const hImg = noInfinito ? 0 : aum * hObj
    const xi = noInfinito ? 0 : X(pImg)
    const topI = cy - hImg

    ctx.lineWidth = 1.4

    // Raio 1: paralelo ao eixo até a lente, depois pelo foco
    ctx.strokeStyle = hexA(Q.kinetic, 0.85)
    ctx.beginPath(); ctx.moveTo(xo, topO); ctx.lineTo(cx, topO); ctx.stroke()
    if (!noInfinito) {
      ctx.beginPath(); ctx.moveTo(cx, topO)
      if (pImg > 0) {
        // imagem real: o raio refratado passa pelo ponto de imagem e segue
        const k = 1.6
        ctx.lineTo(cx + (xi - cx) * k, topO + (topI - topO) * k)
      } else {
        // imagem virtual: o raio refratado se AFASTA dela; é o seu
        // prolongamento para trás (tracejado, abaixo) que chega à imagem
        const k = Math.min(3, (w - cx) / Math.max(1, cx - xi))
        ctx.lineTo(cx + (cx - xi) * k, topO + (topO - topI) * k)
      }
      ctx.stroke()
    }

    // Raio 2: pelo centro óptico, sem desviar
    ctx.strokeStyle = hexA(Q.potential, 0.85)
    ctx.beginPath(); ctx.moveTo(xo, topO); ctx.lineTo(cx, cy)
    const k2 = 2.2
    ctx.lineTo(cx + (cx - xo) * k2, cy + (cy - topO) * k2)
    ctx.stroke()

    // Prolongamentos tracejados (imagem virtual)
    if (!noInfinito && pImg < 0) {
      ctx.setLineDash([4, 4]); ctx.lineWidth = 1
      ctx.strokeStyle = hexA(Q.kinetic, 0.5)
      ctx.beginPath(); ctx.moveTo(cx, topO); ctx.lineTo(xi, topI); ctx.stroke()
      ctx.strokeStyle = hexA(Q.potential, 0.5)
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(xi, topI); ctx.stroke()
      ctx.setLineDash([])
    }

    // ── A imagem ──────────────────────────────────────────────────
    if (!noInfinito) {
      const virtual = pImg < 0
      ctx.save()
      if (virtual) ctx.setLineDash([5, 4])
      arrow(ctx, xi, cy, xi, topI, { color: virtual ? Q.field : Q.warn, width: 2.4 })
      ctx.restore()
      text(ctx, virtual ? 'imagem virtual' : 'imagem real', xi, hImg < 0 ? cy - 10 : cy + 18,
        { size: 9, weight: 700, color: virtual ? Q.field : Q.warn, align: 'center' })
    } else {
      caption(ctx, 'objeto no foco — os raios saem paralelos: imagem no infinito', 16, h - 18, Q.danger)
    }

    // ── HUD ───────────────────────────────────────────────────────
    const tipoImg = noInfinito ? '—'
      : pImg > 0 ? 'real e invertida'
      : 'virtual e direita'
    const tamanho = noInfinito ? '—'
      : Math.abs(aum) > 1.02 ? 'ampliada'
      : Math.abs(aum) < 0.98 ? 'reduzida' : 'mesmo tamanho'

    readout(ctx, w - 14, 14, [
      { k: 'lente', v: divergente ? 'divergente' : 'convergente', c: A },
      { k: 'f   focal', v: `${f.toFixed(1)} cm`, c: Q.warn },
      { k: 'p   objeto', v: `${pObj.toFixed(1)} cm`, c: Q.velocity },
      { k: "p'  imagem", v: noInfinito ? '∞' : `${pImg.toFixed(1)} cm`, c: pImg > 0 ? Q.warn : Q.field },
      { k: 'A   aumento', v: noInfinito ? '∞' : `${aum.toFixed(2)}×` },
      { k: 'natureza', v: tipoImg, c: !noInfinito && pImg > 0 ? Q.warn : Q.field },
      { k: 'tamanho', v: tamanho },
    ], { title: "1/f = 1/p + 1/p'", anchor: 'right', accent: A, minWidth: 206 })

    caption(ctx,
      divergente ? 'divergente: imagem sempre virtual, direita e reduzida'
                 : pObj < Math.abs(f) ? 'objeto dentro do foco → é a LUPA (virtual e ampliada)'
                 : 'objeto além do foco → imagem real e invertida (câmera, olho)',
      16, 24, divergente ? Q.field : pObj < Math.abs(f) ? Q.potential : C.muted)

    // alça: o objeto pode ser arrastado ao longo do eixo
    handle(ctx, X(-pObj), cy - hObj, 7, s.hover || s.drag, A)
    if (!s.moved) caption(ctx, 'arraste o objeto ao longo do eixo', 16, 44, C.dim)
  }, [])

  // Arrastar o objeto ao longo do eixo óptico muda a distância p —
  // e o slider acompanha.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { w, h } = view
    const cx = w * 0.5, cy = h * 0.52
    const ppu = clamp(Math.min(w * 0.44 / 62, h * 0.32 / 22), 2, 9)
    const objX = cx - (p.distanciaObjeto ?? 30) * ppu
    const hObj = 20 * ppu * 0.5
    const over = Math.abs(pt.x - objX) < 22 && pt.y > cy - hObj - 20 && pt.y < cy + 20

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = false
    if (s.drag) {
      view.setParams?.({ distanciaObjeto: clamp((cx - pt.x) / ppu, 4, 60) })
      s.moved = true
      return 'grab'
    }
    s.hover = over
    return over ? 'grab' : null
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render} onPointer={onPointer}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

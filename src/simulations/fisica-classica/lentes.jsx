// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Lentes e Formação de Imagem
//
// Traçado de raios com a lei da lente delgada. Um raio que chega à
// lente na altura y com inclinação m sai com inclinação
//
//   m' = m − y / f
//
// (é só isso que uma lente delgada faz). Dessa regra saem os três raios
// notáveis e a equação dos pontos conjugados:
//
//   1/f = 1/p + 1/p'      →     p' = p·f / (p − f)
//   aumento A = −p'/p     (negativo = invertida)
//
//   · raio PARALELO ao eixo → sai passando pelo foco
//   · raio pelo CENTRO      → segue reto (y = 0, não desvia)
//   · raio pelo FOCO        → sai paralelo ao eixo
//
// Onde os três se cruzam está a imagem. Se depois da lente eles se
// afastam, quem se cruza são os PROLONGAMENTOS para trás (tracejados):
// imagem virtual — a lupa e toda lente divergente.
//
// O gráfico de baixo é p' em função de p: uma hipérbole com assíntota no
// foco. Arrastar o objeto faz o ponto correr por ela, e explica por que
// a imagem "foge para o infinito" quando o objeto chega ao foco.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, handle, plot, legend, hexA, clamp,
} from '../engine'

const A = ACCENT['fisica-classica']
const H_OBJ = 9          // cm — altura do objeto
const RAYS = [Q.kinetic, Q.potential, Q.negative]

function geom(view) {
  const { w, h } = view
  const compact = w < 640
  const benchH = compact ? h : h * 0.60          // a bancada óptica ocupa o alto do palco
  return {
    compact, benchH,
    cx: w * 0.5,
    cy: compact ? h * 0.5 : benchH * 0.55,
    ppu: clamp(Math.min((w * 0.46) / 62, (benchH * 0.36) / H_OBJ), 2, 9),   // px por cm
  }
}

export default function LentesCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ drag: null, hover: null, moved: false }), [])
  const step = useCallback(() => {}, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const pObj = p.distanciaObjeto ?? 30
    const divergente = (p.tipoLente ?? 0) > 50
    const fAbs = p.distanciaFocal ?? 15
    const f = divergente ? -fAbs : fAbs

    const denom = pObj - f
    const noInf = Math.abs(denom) < 0.3
    const pImg = noInf ? Infinity : (pObj * f) / denom
    const aum  = noInf ? Infinity : -pImg / pObj
    const virtual = !noInf && pImg < 0

    const { compact, benchH, cx, cy, ppu } = geom(view)
    const X = u => cx + u * ppu           // cm → px (lente em 0, objeto em −p)
    const Yc = y => cy - y * ppu          // cm → px (para cima positivo)

    // ── Eixo óptico com régua em cm ───────────────────────────────
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(0, cy + 0.5); ctx.lineTo(w, cy + 0.5); ctx.stroke()
    for (let u = -70; u <= 70; u += 10) {
      if (u === 0 || X(u) < 8 || X(u) > w - 8) continue
      ctx.fillStyle = C.muted
      ctx.fillRect(X(u), cy, 1, 5)
      text(ctx, `${Math.abs(u)}`, X(u), cy + 18, { size: 9, color: C.muted, align: 'center' })
    }
    text(ctx, 'cm', w - 10, cy + 32, { size: 9, color: C.muted, align: 'right' })

    // ── Raios (recortados à bancada) ──────────────────────────────
    ctx.save()
    ctx.beginPath(); ctx.rect(0, 30, w, benchH - 30); ctx.clip()

    const xo = X(-pObj), yo = Yc(H_OBJ)
    const lensHalf = Math.min(benchH * 0.40, 120) / ppu        // meia altura útil da lente, cm
    const xi = noInf ? 0 : X(pImg)
    const yi = noInf ? 0 : Yc(aum * H_OBJ)

    // cada raio sai da ponta do objeto com inclinação m (cm/cm)
    const slopes = [
      0,                              // paralelo ao eixo
      -H_OBJ / pObj,                  // pelo centro óptico
      noInf ? null : -H_OBJ / (pObj - f),   // pelo foco (ou apontando para ele)
    ]
    slopes.forEach((m, i) => {
      if (m === null) return
      const yL = H_OBJ + m * pObj                 // altura em que toca a lente
      if (Math.abs(yL) > lensHalf * 1.02) return  // não passa pela lente
      const mOut = m - yL / f                     // lei da lente delgada
      ctx.strokeStyle = RAYS[i]
      ctx.lineWidth = 1.8
      ctx.beginPath()
      ctx.moveTo(xo, yo)
      ctx.lineTo(cx, Yc(yL))
      const far = (w - cx) / ppu + 4
      ctx.lineTo(X(far), Yc(yL + mOut * far))
      ctx.stroke()
      if (virtual) {
        // o prolongamento para trás é o que o olho "vê": chega à imagem
        ctx.strokeStyle = hexA(RAYS[i], 0.6)
        ctx.setLineDash([4, 5])
        ctx.lineWidth = 1.2
        ctx.beginPath(); ctx.moveTo(cx, Yc(yL)); ctx.lineTo(xi, yi); ctx.stroke()
        ctx.setLineDash([])
      }
    })

    // ── Imagem ────────────────────────────────────────────────────
    if (!noInf) {
      const col = virtual ? Q.field : Q.warn
      if (virtual) ctx.setLineDash([5, 4])
      arrow(ctx, xi, cy, xi, yi, { color: col, width: 2.6 })
      ctx.setLineDash([])
    }
    ctx.restore()

    // ── Lente ─────────────────────────────────────────────────────
    const lh = Math.min(benchH * 0.80, 240)
    ctx.strokeStyle = A
    ctx.lineWidth = 2
    ctx.fillStyle = hexA(A, 0.16)
    ctx.beginPath()
    if (!divergente) {
      const bulge = clamp(260 / fAbs, 8, 26)        // lente mais forte, mais barriguda
      ctx.moveTo(cx, cy - lh / 2)
      ctx.quadraticCurveTo(cx + bulge, cy, cx, cy + lh / 2)
      ctx.quadraticCurveTo(cx - bulge, cy, cx, cy - lh / 2)
    } else {
      const waist = clamp(120 / fAbs, 3, 9)
      ctx.moveTo(cx - 11, cy - lh / 2)
      ctx.quadraticCurveTo(cx - 11 + waist * 1.6, cy, cx - 11, cy + lh / 2)
      ctx.lineTo(cx + 11, cy + lh / 2)
      ctx.quadraticCurveTo(cx + 11 - waist * 1.6, cy, cx + 11, cy - lh / 2)
      ctx.closePath()
    }
    ctx.fill(); ctx.stroke()

    // ── Focos (F) e pontos 2F ─────────────────────────────────────
    for (const sgn of [-1, 1]) {
      for (const [k, lab] of [[1, 'F'], [2, '2F']]) {
        const fx = X(sgn * k * fAbs)
        if (fx < 10 || fx > w - 10) continue
        ctx.fillStyle = k === 1 ? Q.warn : hexA(Q.warn, 0.55)
        ctx.fillRect(fx - 3, cy - 3, 6, 6)
        // abaixo dos números da régua: acima do eixo ficam o objeto e a imagem
        text(ctx, lab, fx, cy + 34, { size: 10, weight: 700, color: k === 1 ? Q.warn : hexA(Q.warn, 0.7), align: 'center' })
      }
    }
    handle(ctx, X(fAbs), cy, 4, s.hover === 'f' || s.drag === 'f', Q.warn)

    // ── Objeto ────────────────────────────────────────────────────
    arrow(ctx, xo, cy, xo, yo, { color: Q.velocity, width: 2.8 })
    text(ctx, 'objeto', xo - 12, (cy + yo) / 2 + 4, { size: 10, weight: 700, color: Q.velocity, align: 'right' })
    handle(ctx, xo, yo, 6, s.hover === 'o' || s.drag === 'o', Q.velocity)

    if (!noInf && xi > 20 && xi < w - 20) {
      // ao lado da seta, do lado de fora (longe da lente), a meia altura
      const ly = clamp((cy + yi) / 2 + 4, 58, benchH - 8)
      text(ctx, virtual ? 'imagem virtual' : 'imagem real', xi + (virtual ? -12 : 12), ly,
        { size: 10, weight: 700, color: virtual ? Q.field : Q.warn, align: virtual ? 'right' : 'left' })
    }

    // ── Estado ────────────────────────────────────────────────────
    const est = noInf
      ? { t: 'Objeto no foco: os raios saem paralelos e a imagem vai para o infinito', c: Q.danger }
      : divergente
        ? { t: 'Lente divergente: imagem sempre virtual, direita e menor', c: Q.field }
        : pObj < fAbs
          ? { t: 'Objeto dentro do foco: é a lupa, imagem virtual e ampliada', c: Q.field }
          : Math.abs(pObj - 2 * fAbs) < 0.6
            ? { t: 'Objeto em 2F: imagem real, invertida e do mesmo tamanho', c: Q.potential }
            : pObj > 2 * fAbs
              ? { t: 'Além de 2F: imagem real, invertida e menor (câmera, olho)', c: Q.warn }
              : { t: 'Entre F e 2F: imagem real, invertida e maior (projetor)', c: Q.warn }
    const hintY = caption(ctx, est.t, 16, 24, est.c, w - 28)
    if (!s.moved) caption(ctx, 'Arraste o objeto ou o foco F ao longo do eixo', 16, hintY + 4, C.dim)

    // ── Leituras ──────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'lente',       v: divergente ? 'divergente' : 'convergente', c: A },
      { k: 'f   focal',   v: `${f.toFixed(1)} cm`, c: Q.warn },
      { k: 'p   objeto',  v: `${pObj.toFixed(1)} cm`, c: Q.velocity },
      { k: "p'  imagem",  v: noInf ? '∞' : `${pImg.toFixed(1)} cm`, c: virtual ? Q.field : Q.warn },
      { k: 'A   aumento', v: noInf ? '∞' : `${aum.toFixed(2)}×` },
      { k: 'natureza',    v: noInf ? '—' : virtual ? 'virtual' : 'real', c: virtual ? Q.field : Q.warn },
      { k: 'orientação',  v: noInf ? '—' : aum < 0 ? 'invertida' : 'direita' },
      { k: 'vergência',   v: `${(100 / f).toFixed(1)} di` },
    ], { title: "1/f = 1/p + 1/p'", anchor: 'right', accent: A, minWidth: 206 })

    if (compact) return

    // ── p' em função de p: a hipérbole da lente ───────────────────
    const gy = benchH + 34
    const gh = h - gy - 40
    if (gh < 50) return
    const gx = 56, gw = w - gx - 24
    const yLim = 90
    const branches = [[], []]          // antes e depois da assíntota
    for (let pp = 4; pp <= 60; pp += 0.25) {
      if (Math.abs(pp - f) < 0.3) continue
      const v = (pp * f) / (pp - f)
      branches[!divergente && pp < f ? 0 : 1].push([pp, clamp(v, -yLim * 1.5, yLim * 1.5)])
    }
    caption(ctx, 'Onde a imagem se forma, para cada posição do objeto', gx, gy - 12, A)
    plot(ctx, { x: gx, y: gy, w: gw, h: gh }, {
      xDomain: [0, 60], yDomain: [-yLim, yLim],
      xTicks: 6, yTicks: 2,
      fmtX: x => x.toFixed(0), fmtY: y => y.toFixed(0),
      xLabel: 'distância do objeto p (cm)', yLabel: "p' (cm)",
      rules: [
        { y: 0, color: C.faint, dash: [] },
        ...(!divergente ? [{ x: fAbs, color: Q.warn, label: 'foco' }, { x: 2 * fAbs, color: hexA(Q.warn, 0.5), label: '2F' }] : []),
      ],
      series: branches.map((pts, i) => ({ points: pts, color: i === 0 ? Q.field : (divergente ? Q.field : Q.warn), width: 2 })),
      markers: noInf ? [] : [{ x: pObj, y: clamp(pImg, -yLim, yLim), color: Q.velocity, r: 4.5 }],
    })
    legend(ctx, gx + gw - 250, gy - 12, [
      { label: 'imagem real', color: Q.warn },
      { label: 'imagem virtual', color: Q.field },
    ])
  }, [])

  // O objeto e o foco podem ser arrastados ao longo do eixo.
  const onPointer = useCallback((kind, pt, s, p, view) => {
    if (!s) return null
    const { cx, cy, ppu } = geom(view)
    const xo = cx - (p.distanciaObjeto ?? 30) * ppu
    const xf = cx + (p.distanciaFocal ?? 15) * ppu
    const overO = Math.abs(pt.x - xo) < 22 && pt.y > cy - H_OBJ * ppu - 26 && pt.y < cy + 22
    const overF = Math.hypot(pt.x - xf, pt.y - cy) < 20
    const over = overO ? 'o' : overF ? 'f' : null

    if (kind === 'down') s.drag = over
    if (kind === 'up') s.drag = null
    if (s.drag === 'o') view.setParams?.({ distanciaObjeto: clamp((cx - pt.x) / ppu, 4, 60) })
    if (s.drag === 'f') view.setParams?.({ distanciaFocal: clamp((pt.x - cx) / ppu, 5, 30) })
    if (s.drag) { s.moved = true; return 'grab' }
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

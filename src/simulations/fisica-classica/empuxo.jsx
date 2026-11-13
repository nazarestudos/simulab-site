// ═══════════════════════════════════════════════════════════════════
// FÍSICA CLÁSSICA — Empuxo e Flutuação (Arquimedes)
//
// O corpo encontra sozinho a profundidade de equilíbrio, e o resultado
// é a relação mais elegante da hidrostática: a FRAÇÃO SUBMERSA é a
// razão entre as densidades.
//
//   flutuando:  E = P  →  ρ_líq·V_sub·g = ρ_obj·V·g
//               V_sub / V = ρ_obj / ρ_líq
//
// É por isso que um iceberg (ρ≈917) fica ~92 % submerso na água do mar
// (ρ≈1025) — e por que o navio de aço flutua se sua densidade MÉDIA
// (casco oco, cheio de ar) for menor que a da água.
//
// Se ρ_obj > ρ_líq, o empuxo não dá conta do peso e o corpo afunda até
// o fundo, onde a normal completa o equilíbrio.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  arrow, hexA, clamp, mix,
} from '../engine'

const A = ACCENT['fisica-classica']
const G = 9.8
const V = 1.0   // m³ — volume do bloco (fixo, para os números do HUD)

export default function EmpuxoCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({ by: null }), [])

  const step = useCallback((s, dt, p) => {
    // A posição do bloco converge suavemente para o equilíbrio.
    // (o alvo é calculado no render, que conhece a geometria da tela)
    if (s.target != null) {
      if (s.by == null) s.by = s.target
      s.by += (s.target - s.by) * clamp(dt * 3.2, 0, 1)
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const dObj = p.densidadeObjeto  ?? 600     // kg/m³
    const dLiq = p.densidadeLiquido ?? 1000    // kg/m³ (água = 1000)

    const flutua = dObj <= dLiq                // iguais: fica em equilíbrio, todo submerso
    const fracSub = flutua ? dObj / dLiq : 1   // fração submersa

    // ── Geometria do tanque ───────────────────────────────────────
    const compact = w < 640
    const tw = Math.min(w * (compact ? 0.72 : 0.46), 300)
    const tx = compact ? (w - tw) / 2 : w * 0.30 - tw / 2
    const ty = h * 0.16
    const th = h * 0.66
    const surfaceY = ty
    const bottomY = ty + th

    // paredes do tanque
    ctx.strokeStyle = C.faint
    ctx.lineWidth = 1.4
    ctx.beginPath()
    ctx.moveTo(tx, ty - 18); ctx.lineTo(tx, bottomY)
    ctx.lineTo(tx + tw, bottomY); ctx.lineTo(tx + tw, ty - 18)
    ctx.stroke()

    // líquido (cor varia com a densidade: mais denso, mais "pesado")
    const liqCol = mix('#5a86a8', '#3f5a7a', clamp((dLiq - 500) / 1000, 0, 1))
    ctx.fillStyle = hexA(liqCol, 0.30)
    ctx.fillRect(tx, surfaceY, tw, th)
    ctx.strokeStyle = hexA(liqCol, 0.8)
    ctx.lineWidth = 1.5
    ctx.beginPath(); ctx.moveTo(tx, surfaceY + 0.5); ctx.lineTo(tx + tw, surfaceY + 0.5); ctx.stroke()

    // ── Bloco: posição de equilíbrio ──────────────────────────────
    const bs = Math.min(tw * 0.42, th * 0.30)
    const bx = tx + tw / 2 - bs / 2
    // flutuando: parte de fora = (1 − fração submersa)
    // afundado: repousa no fundo
    s.target = flutua ? surfaceY - bs * (1 - fracSub) : bottomY - bs
    const by = s.by ?? s.target

    const objCol = mix('#c9a24a', '#a9705a', clamp((dObj - 200) / 2800, 0, 1))
    ctx.fillStyle = hexA(objCol, 0.9)
    ctx.fillRect(bx, by, bs, bs)
    ctx.strokeStyle = hexA('#000', 0.5)
    ctx.lineWidth = 1
    ctx.strokeRect(bx + 0.5, by + 0.5, bs, bs)

    // linha da superfície por cima do bloco (para ver a parte submersa)
    if (flutua) {
      ctx.strokeStyle = hexA(liqCol, 0.95)
      ctx.lineWidth = 1.5
      ctx.beginPath(); ctx.moveTo(tx, surfaceY + 0.5); ctx.lineTo(tx + tw, surfaceY + 0.5); ctx.stroke()
    }

    // ── Forças ────────────────────────────────────────────────────
    const peso   = dObj * V * G                      // N
    const empuxo = dLiq * V * fracSub * G            // N  (= ρ_líq·V_sub·g)
    const cxB = bx + bs / 2, cyB = by + bs / 2
    const fs = clamp(70 / Math.max(peso, empuxo, 1), 0.004, 0.05)

    arrow(ctx, cxB, cyB, cxB, cyB + peso * fs,   { color: Q.force,    width: 2, label: 'P' })
    arrow(ctx, cxB, cyB, cxB, cyB - empuxo * fs, { color: Q.potential, width: 2, label: 'E' })
    // No fundo, quem completa o equilíbrio é a normal: N = P − E
    if (!flutua && Math.abs(by - s.target) < 1.5) {
      arrow(ctx, cxB + bs * 0.3, cyB, cxB + bs * 0.3, cyB - (peso - empuxo) * fs, { color: hexA(C.ink, 0.7), width: 2, label: 'N' })
    }

    // ── Estado ────────────────────────────────────────────────────
    const estado = !flutua
      ? { t: 'AFUNDA — o empuxo não vence o peso', c: Q.danger }
      : Math.abs(dObj - dLiq) < 12
        ? { t: 'equilíbrio — quase toda submersa', c: Q.warn }
        : { t: 'FLUTUA — empuxo iguala o peso', c: Q.potential }
    caption(ctx, estado.t, 16, 24, estado.c)

    if (flutua) {
      text(ctx, `${(fracSub * 100).toFixed(0)} % submerso`, tx + tw / 2, bottomY + 22,
        { size: 10, weight: 700, color: Q.potential, align: 'center' })
    }

    // ── HUD ───────────────────────────────────────────────────────
    readout(ctx, w - 14, 14, [
      { k: 'ρ  objeto',   v: `${dObj.toFixed(0)} kg/m³`, c: objCol },
      { k: 'ρ  líquido',  v: `${dLiq.toFixed(0)} kg/m³`, c: liqCol },
      { k: 'V  volume',   v: `${V.toFixed(1)} m³` },
      { k: 'P  peso',     v: `${(peso / 1000).toFixed(2)} kN`, c: Q.force },
      { k: 'E  empuxo',   v: `${(empuxo / 1000).toFixed(2)} kN`, c: Q.potential },
      { k: 'V_sub / V',   v: `${(fracSub * 100).toFixed(0)} %`, c: A },
      { k: 'resultado',   v: flutua ? 'flutua' : 'afunda', c: flutua ? Q.potential : Q.danger },
    ], { title: 'V_sub/V = ρ_obj / ρ_líq', anchor: 'right', accent: A, minWidth: 202 })

    if (!compact) {
      const nx = tx + tw + 26
      let ny = h * 0.62
      caption(ctx, 'referências (kg/m³)', nx, ny - 12, C.muted)
      for (const [nome, d] of [['isopor', 20], ['gelo', 917], ['água', 1000], ['água do mar', 1025], ['alumínio', 2700]]) {
        text(ctx, `${nome}`, nx, ny, { size: 9, color: C.dim })
        text(ctx, `${d}`, nx + 116, ny, { size: 9, weight: 700, color: C.muted, align: 'right' })
        ny += 15
      }
      text(ctx, 'gelo em água do mar → 89 % submerso', nx, ny + 12,
        { size: 8.5, color: C.muted })
      text(ctx, 'é o iceberg escondendo a maior parte', nx, ny + 25,
        { size: 8.5, color: C.muted })
    }
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

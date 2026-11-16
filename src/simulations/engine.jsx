// ═══════════════════════════════════════════════════════════════════
// src/simulations/engine.jsx — Motor comum de todas as simulações.
//
// Contrato de uma simulação:
//   setup(view, p)              → devolve o objeto de estado inicial
//   step(s, dt, p, view)        → avança a física com dt FIXO em segundos
//   render(ctx, s, p, view)     → desenha (chamado mesmo em pausa)
//
// O motor cuida de: DPR (nitidez em telas retina), passo fixo de 240 Hz
// (a física não depende do monitor), ZOOM do palco (em telas largas
// tudo é desenhado maior, sem mudar o layout de cada simulação), tamanho
// mínimo de texto e das LEITURAS, que saem do canvas para um painel HTML
// quando a página oferece um (ver SimClock.onReadout).
// ═══════════════════════════════════════════════════════════════════
import { useRef, useEffect, createContext, useContext } from 'react'

const FIXED_DT   = 1 / 240
const MAX_FRAME  = 0.25   // s — evita "espiral da morte" ao voltar de uma aba oculta
const MAX_STEPS  = 60
const STEP_BURST = 8      // passos por clique em "avançar quadro" (1/30 s)

// Zoom do palco: as simulações foram compostas para ~720px de largura.
// Acima disso, em vez de espalhar o desenho num vazio, ampliamos tudo.
const DESIGN_W = 720
const MAX_ZOOM = 1.4
const MIN_TEXT_PX = 12    // nenhum texto fica menor que isto na tela

// ═══════════════════════════════════════════════════════════════════
// PALETA
// O site é preto e branco; cor, aqui, é sempre informação.
// ═══════════════════════════════════════════════════════════════════
export const C = {
  bg:    '#000000',
  bg2:   '#0a0a0a',
  ink:   '#ffffff',
  dim:   'rgba(255,255,255,0.76)',
  muted: 'rgba(255,255,255,0.54)',
  faint: 'rgba(255,255,255,0.28)',
  line:  'rgba(255,255,255,0.24)',
  grid:  'rgba(255,255,255,0.08)',
}

/** Cor de cada área — as mesmas de TOPIC_COLORS em src/data/index.js */
export const ACCENT = {
  'fisica-classica': '#4D9FFF',
  'fisica-quantica': '#A98BFF',
  'matematica':      '#FFD23F',
  'quimica':         '#FF8A3D',
  'astronomia':      '#3FD6E0',
  'biologia':        '#4ADE80',
  'medicina':        '#FF5C7A',
  'informatica':     '#F06FE0',
}

/** Cor de cada grandeza física — a mesma em todas as simulações. */
export const Q = {
  kinetic:   '#FFB224',  // energia cinética  — âmbar
  potential: '#34D399',  // energia potencial — verde
  thermal:   '#FF5A36',  // calor / entropia  — vermelho-alaranjado
  velocity:  '#FF7A59',  // vetor velocidade  — coral
  force:     '#5AA9FF',  // vetor força       — azul
  field:     '#B197FC',  // campo / potencial — lilás
  positive:  '#4ADE80',  // carga +, cátion, ganho
  negative:  '#FF6B8B',  // carga −, ânion, perda
  warn:      '#FFD23F',  // alerta / limiar
  danger:    '#FF4D4D',  // falha / colapso
}

const FONT = '"Archivo", system-ui, sans-serif'

/** Garante o tamanho mínimo na tela, descontando o zoom do palco. */
function fitSize(ctx, size) {
  const z = ctx.canvas.__zoom || 1
  return Math.max(size, MIN_TEXT_PX / z)
}
const fontOf = (ctx, size, weight = 500) =>
  `${weight >= 600 ? 700 : 500} ${fitSize(ctx, size)}px ${FONT}`

// ═══════════════════════════════════════════════════════════════════
// PRIMITIVAS DE DESENHO
// ═══════════════════════════════════════════════════════════════════

/** Fundo: preto puro. */
export function clear(ctx, view, opts = {}) {
  ctx.fillStyle = opts.bg ?? C.bg
  ctx.fillRect(0, 0, view.w, view.h)
}

/** Grade de fundo: pontos nos cruzamentos (a mesma malha do hero do site). */
export function grid(ctx, view, step = 32, color) {
  const { w, h } = view
  ctx.fillStyle = color ?? 'rgba(255,255,255,0.17)'
  for (let y = step; y < h; y += step) {
    for (let x = step; x < w; x += step) ctx.fillRect(x - 0.6, y - 0.6, 1.2, 1.2)
  }
}

export function roundRect(ctx, x, y, w, h, r = 0) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

/** Painel: preto opaco com borda nítida, cantos retos. */
export function panel(ctx, x, y, w, h, opts = {}) {
  if (ctx.canvas.__bare) return
  roundRect(ctx, x, y, w, h, opts.radius ?? 0)
  ctx.fillStyle = opts.fill ?? 'rgba(0,0,0,0.88)'
  ctx.fill()
  ctx.strokeStyle = opts.stroke ?? C.line
  ctx.lineWidth = 1
  ctx.stroke()
}

/** Texto. `weight` ≥ 600 vira negrito; o resto, médio. Nunca menor que 12px na tela. */
export function text(ctx, str, x, y, opts = {}) {
  if (ctx.canvas.__bare) return   // prévia: só o fenômeno, sem rótulos
  ctx.font      = fontOf(ctx, opts.size ?? 11, opts.weight ?? 500)
  ctx.fillStyle = opts.color ?? C.dim
  ctx.textAlign = opts.align ?? 'left'
  ctx.textBaseline = opts.baseline ?? 'alphabetic'
  ctx.fillText(str, x, y)
  ctx.textBaseline = 'alphabetic'
}

/** Legenda de estado/seção: frase curta, só a inicial maiúscula. */
export function caption(ctx, str, x, y, color = C.muted, maxW) {
  const raw = String(str)
  const s = raw.charAt(0).toUpperCase() + raw.slice(1)
  const lh = fitSize(ctx, 9.5) + 4
  if (ctx.canvas.__bare) return y + lh
  // Em telas estreitas a frase não cabe numa linha: quebra em até duas,
  // em vez de sair cortada pela borda do palco.
  const room = maxW ?? (ctx.canvas.clientWidth || 720) / (ctx.canvas.__zoom || 1) - x - 12
  ctx.font = fontOf(ctx, 9.5, 500)
  let lines = [s]
  if (ctx.measureText(s).width > room) {
    const words = s.split(' ')
    let first = ''
    let i = 0
    while (i < words.length && ctx.measureText(first ? `${first} ${words[i]}` : words[i]).width <= room) {
      first = first ? `${first} ${words[i]}` : words[i]
      i++
    }
    if (first && i < words.length) lines = [first, words.slice(i).join(' ')]
  }
  lines.forEach((ln, k) => text(ctx, ln, x, y + k * lh, { size: 9.5, weight: 500, color }))
  return y + lines.length * lh      // linha livre seguinte, para quem empilha legendas
}

// ── Leituras ─────────────────────────────────────────────────────
// rows = [{ k, v, c? }] — nome, valor, cor opcional.
// Se a página registrou um destino (SimClock.onReadout), as leituras
// NÃO são desenhadas: vão para um painel HTML sob o palco, e o canvas
// fica só com o fenômeno. Sem destino, desenhamos o painel aqui mesmo.
const pendingReadouts = new WeakMap()   // canvas → [{ x, y, rows, opts }]

function measureReadout(ctx, rows, opts) {
  const padX = 12, padY = 10
  const lh = fitSize(ctx, 10) + 6
  ctx.font = fontOf(ctx, 10, 500)
  let wKey = 0
  for (const r of rows) wKey = Math.max(wKey, ctx.measureText(r.k).width)
  ctx.font = fontOf(ctx, 10, 700)
  let wVal = 0
  for (const r of rows) wVal = Math.max(wVal, ctx.measureText(String(r.v)).width)
  let w = padX * 2 + wKey + 16 + wVal
  if (opts.title) w = Math.max(w, padX * 2 + ctx.measureText(opts.title).width)
  w = Math.max(w, opts.minWidth ?? 0)
  const h = padY * 2 + rows.length * lh + (opts.title ? lh + 4 : 0) - 4
  return { w, h, padX, padY, lh }
}

function drawReadout(ctx, x, y, rows, opts) {
  const { w, h, padX, padY, lh } = measureReadout(ctx, rows, opts)
  const px = opts.anchor === 'right' ? x - w : x
  panel(ctx, px, y, w, h)
  let cy = y + padY + lh - 6
  if (opts.title) {
    text(ctx, opts.title, px + padX, cy, { size: 10, weight: 700, color: opts.accent ?? C.ink })
    cy += lh + 4
  }
  for (const r of rows) {
    text(ctx, r.k, px + padX, cy, { size: 10, color: C.muted })
    text(ctx, String(r.v), px + w - padX, cy, { size: 10, weight: 700, color: r.c ?? C.ink, align: 'right' })
    cy += lh
  }
  return { w, h }
}

export function readout(ctx, x, y, rows, opts = {}) {
  const queue = pendingReadouts.get(ctx.canvas)
  if (queue) {
    queue.push({ x, y, rows, opts })
    const { w, h } = measureReadout(ctx, rows, opts)
    return { w, h }
  }
  return drawReadout(ctx, x, y, rows, opts)
}

/** Seta vetorial com ponta sólida. */
export function arrow(ctx, x1, y1, x2, y2, opts = {}) {
  const color = opts.color ?? C.ink
  const lw    = Math.max(opts.width ?? 1.8, 1.5)
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.hypot(dx, dy)
  if (len < 1.5) return
  const head = Math.min(opts.head ?? 8, len * 0.45)
  const ux = dx / len, uy = dy / len
  const bx = x2 - ux * head, by = y2 - uy * head

  ctx.strokeStyle = color
  ctx.lineWidth = lw
  ctx.lineCap = 'butt'
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(bx, by)
  ctx.stroke()

  ctx.fillStyle = color
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(bx - uy * head * 0.42, by + ux * head * 0.42)
  ctx.lineTo(bx + uy * head * 0.42, by - ux * head * 0.42)
  ctx.closePath()
  ctx.fill()

  if (opts.label) {
    text(ctx, opts.label, x2 + ux * 11, y2 + uy * 11 + 3, { size: 10, weight: 700, color, align: 'center' })
  }
}

/**
 * Corpo / partícula: disco cheio com um anel fino em volta.
 * (O nome ficou de quando era um halo borrado; o anel nítido lê melhor
 * sobre preto e não "suja" o que está por perto.)
 */
export function glow(ctx, x, y, r, color, strength = 0.5) {
  ctx.strokeStyle = hexA(color, 0.25 + 0.35 * Math.min(1, strength))
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.arc(x, y, r + Math.max(3, r * 0.55), 0, Math.PI * 2)
  ctx.stroke()
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.arc(x, y, r, 0, Math.PI * 2)
  ctx.fill()
}

/**
 * Alça: quatro cantoneiras em volta de algo que pode ser arrastado.
 * Discreta em repouso, cheia quando o ponteiro está em cima ou puxando.
 */
export function handle(ctx, x, y, r, active = false, color = C.ink) {
  if (ctx.canvas.__bare) return
  const d = r + 7, k = 6
  ctx.strokeStyle = active ? color : hexA('#ffffff', 0.5)
  ctx.lineWidth = active ? 2 : 1.2
  ctx.beginPath()
  for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    ctx.moveTo(x + sx * d, y + sy * (d - k)); ctx.lineTo(x + sx * d, y + sy * d); ctx.lineTo(x + sx * (d - k), y + sy * d)
  }
  ctx.stroke()
}

/**
 * Rastro: polilinha que some para trás. pts = [[x,y],…], do ponto mais
 * antigo ao mais novo. É o que faz um movimento "ler" numa imagem parada.
 * Desenha em faixas de opacidade (um stroke por faixa, não por ponto).
 */
export function trail(ctx, pts, color, opts = {}) {
  const n = pts.length
  if (n < 2) return
  const bands = Math.min(opts.bands ?? 12, n - 1)
  const peak  = opts.alpha ?? 0.85
  ctx.lineWidth = opts.width ?? 2
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  for (let b = 0; b < bands; b++) {
    const i0 = Math.floor((b / bands) * (n - 1))
    const i1 = Math.floor(((b + 1) / bands) * (n - 1))
    if (i1 <= i0) continue
    ctx.strokeStyle = hexA(color, peak * Math.pow((b + 1) / bands, 1.7))
    ctx.beginPath()
    ctx.moveTo(pts[i0][0], pts[i0][1])
    for (let i = i0 + 1; i <= i1; i++) ctx.lineTo(pts[i][0], pts[i][1])
    ctx.stroke()
  }
  ctx.lineCap = 'butt'
}

/** Chão / parede fixa: linha cheia com hachuras do lado "sólido". */
export function ground(ctx, x0, x1, y, opts = {}) {
  const step = opts.step ?? 14
  const drop = opts.drop ?? 9          // negativo = hachura para cima (teto)
  ctx.strokeStyle = C.grid
  ctx.lineWidth = 1
  ctx.beginPath()
  for (let x = x0 + step; x <= x1; x += step) {
    ctx.moveTo(x, y)
    ctx.lineTo(x - Math.abs(drop) * 0.8, y + drop)
  }
  ctx.stroke()
  ctx.strokeStyle = opts.color ?? C.line
  ctx.lineWidth = opts.width ?? 1.5
  ctx.beginPath()
  ctx.moveTo(x0, y + 0.5)
  ctx.lineTo(x1, y + 0.5)
  ctx.stroke()
}

/**
 * Bloco de massa: quadrado centrado em (cx, cy), tingido pela cor da área,
 * com o rótulo dentro. O lado costuma vir de massSide(m).
 */
export function block(ctx, cx, cy, side, color, label, opts = {}) {
  const x = cx - side / 2, y = cy - side / 2
  ctx.fillStyle = hexA(color, opts.fill ?? 0.26)
  ctx.fillRect(x, y, side, side)
  ctx.strokeStyle = color
  ctx.lineWidth = opts.active ? 2.2 : 1.5
  ctx.strokeRect(x + 0.5, y + 0.5, side - 1, side - 1)
  // faixa de cima mais clara: dá "topo" ao bloco sem recorrer a sombra
  ctx.fillStyle = hexA(color, 0.55)
  ctx.fillRect(x, y, side, 3)
  if (label) text(ctx, label, cx, cy + 4, { size: 10, weight: 700, color: C.ink, align: 'center' })
}

/** Lado de um bloco ∝ ∛m: massa é volume. 8× mais massa, 2× mais alto. */
export const massSide = (m, lo = 24, hi = 60) => clamp(16 + Math.cbrt(m) * 13, lo, hi)

/**
 * Régua vertical em unidades do mundo. De y0 (valor v0) até y1 (valor v1),
 * com um traço a cada `every` e rótulo a cada `labelEvery` traços.
 */
export function ruler(ctx, x, y0, y1, v0, v1, opts = {}) {
  const every = opts.every ?? 0.5
  const labelEvery = opts.labelEvery ?? 2
  const unit = opts.unit ?? 'm'
  const side = opts.side ?? -1       // −1 rótulos à esquerda, +1 à direita
  ctx.strokeStyle = C.line
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(x + 0.5, y0); ctx.lineTo(x + 0.5, y1)
  const n = Math.round(Math.abs(v1 - v0) / every)
  for (let i = 0; i <= n; i++) {
    const y = Math.round(y0 + (i / n) * (y1 - y0)) + 0.5
    const major = i % labelEvery === 0
    ctx.moveTo(x, y); ctx.lineTo(x + side * (major ? 8 : 4), y)
  }
  ctx.stroke()
  for (let i = 0; i <= n; i += labelEvery) {
    const v = v0 + (i / n) * (v1 - v0)
    const y = y0 + (i / n) * (y1 - y0)
    text(ctx, `${Number(v.toFixed(2))} ${unit}`, x + side * 12, y + 4,
      { size: 9, color: C.muted, align: side < 0 ? 'right' : 'left' })
  }
}

/**
 * Barras verticais de energia / proporção.
 * items = [{ label, value, max, color }] — value/max normaliza a altura.
 */
export function bars(ctx, x, y, w, h, items, opts = {}) {
  const n  = items.length
  const bw = Math.min(opts.barWidth ?? 18, (w - (n - 1) * 8) / n)
  const gp = n > 1 ? (w - bw * n) / (n - 1) : 0
  items.forEach((it, i) => {
    const bx = x + i * (bw + gp)
    ctx.fillStyle = 'rgba(255,255,255,0.09)'
    ctx.fillRect(bx, y, bw, h)
    const frac = it.max > 0 ? Math.max(0, Math.min(1, it.value / it.max)) : 0
    const bh   = frac * h
    ctx.fillStyle = it.color
    ctx.fillRect(bx, y + h - bh, bw, bh)
    text(ctx, it.label, bx + bw / 2, y + h + 14, { size: 10, color: C.dim, align: 'center' })
  })
}

/**
 * Gráfico de linha com eixos.
 * series = [{ points: [[x,y],…], color, width?, dash?, fill? }]
 */
export function plot(ctx, box, opts) {
  const { x, y, w, h } = box
  const [x0, x1] = opts.xDomain
  const [y0, y1] = opts.yDomain
  const sx = v => x + ((v - x0) / (x1 - x0)) * w
  const sy = v => y + h - ((v - y0) / (y1 - y0)) * h

  // grade
  const xt = opts.xTicks ?? 4
  const yt = opts.yTicks ?? 4
  ctx.strokeStyle = C.grid
  ctx.lineWidth = 1
  ctx.beginPath()
  for (let i = 1; i < xt; i++) { const px = Math.round(x + (i / xt) * w) + 0.5; ctx.moveTo(px, y); ctx.lineTo(px, y + h) }
  for (let i = 1; i < yt; i++) { const py = Math.round(y + (i / yt) * h) + 0.5; ctx.moveTo(x, py); ctx.lineTo(x + w, py) }
  ctx.stroke()

  // eixos: só a base e a esquerda, como num gráfico de caderno
  ctx.strokeStyle = C.line
  ctx.beginPath()
  ctx.moveTo(x + 0.5, y); ctx.lineTo(x + 0.5, y + h + 0.5); ctx.lineTo(x + w, y + h + 0.5)
  ctx.stroke()

  if (opts.tickLabels !== false) {
    const fmt = opts.fmtX ?? (v => v.toFixed(0))
    const fmY = opts.fmtY ?? (v => v.toFixed(0))
    for (let i = 0; i <= xt; i++) {
      const v = x0 + (i / xt) * (x1 - x0)
      text(ctx, fmt(v), sx(v), y + h + 12, { size: 8.5, color: C.muted, align: 'center' })
    }
    for (let i = 0; i <= yt; i++) {
      const v = y0 + (i / yt) * (y1 - y0)
      text(ctx, fmY(v), x - 6, sy(v) + 3, { size: 8.5, color: C.muted, align: 'right' })
    }
  }

  // linhas de referência (ex.: y = 0, limiar)
  for (const r of opts.rules ?? []) {
    ctx.save()
    ctx.strokeStyle = r.color ?? C.faint
    ctx.setLineDash(r.dash ?? [4, 4])
    ctx.lineWidth = 1
    ctx.beginPath()
    if (r.y !== undefined) { ctx.moveTo(x, sy(r.y)); ctx.lineTo(x + w, sy(r.y)) }
    if (r.x !== undefined) { ctx.moveTo(sx(r.x), y); ctx.lineTo(sx(r.x), y + h) }
    ctx.stroke()
    ctx.restore()
    if (r.label) {
      const ly = r.y !== undefined ? sy(r.y) - 5 : y + 12
      const lx = r.x !== undefined ? sx(r.x) + 5 : x + w - 4
      text(ctx, r.label, lx, ly, { size: 8.5, color: r.color ?? C.muted, align: r.x !== undefined ? 'left' : 'right' })
    }
  }

  // séries (recortadas à área do gráfico)
  ctx.save()
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.clip()
  for (const s of opts.series ?? []) {
    if (!s.points || s.points.length < 2) continue
    const trace = () => {
      ctx.beginPath()
      s.points.forEach(([px, py], i) => {
        const cx = sx(px), cy = sy(py)
        i === 0 ? ctx.moveTo(cx, cy) : ctx.lineTo(cx, cy)
      })
    }
    if (s.fill) {
      trace()
      ctx.lineTo(sx(s.points[s.points.length - 1][0]), sy(y0))
      ctx.lineTo(sx(s.points[0][0]), sy(y0))
      ctx.closePath()
      ctx.fillStyle = hexA(s.color, 0.18)
      ctx.fill()
    }
    trace()
    ctx.setLineDash(s.dash ?? [])
    ctx.strokeStyle = s.color
    ctx.lineWidth = Math.max(s.width ?? 2, 1.5)
    ctx.lineJoin = 'round'
    ctx.stroke()
    ctx.setLineDash([])
  }
  for (const m of opts.markers ?? []) {
    glow(ctx, sx(m.x), sy(m.y), m.r ?? 4, m.color, 0.9)
  }
  ctx.restore()

  // leitura sob o ponteiro: cruz + coordenadas nas unidades do gráfico
  const ptr = ctx.canvas.__pointer
  if (ptr && ptr.inside && !ctx.canvas.__bare &&
      ptr.x >= x && ptr.x <= x + w && ptr.y >= y && ptr.y <= y + h) {
    const vx = x0 + ((ptr.x - x) / w) * (x1 - x0)
    const vy = y0 + ((y + h - ptr.y) / h) * (y1 - y0)
    ctx.save()
    ctx.strokeStyle = C.faint; ctx.lineWidth = 1; ctx.setLineDash([3, 3])
    ctx.beginPath()
    ctx.moveTo(ptr.x, y); ctx.lineTo(ptr.x, y + h)
    ctx.moveTo(x, ptr.y); ctx.lineTo(x + w, ptr.y)
    ctx.stroke()
    ctx.restore()
    const fx = opts.fmtX ?? (v => v.toFixed(1)), fy = opts.fmtY ?? (v => v.toFixed(1))
    const label = `${fx(vx)}  ·  ${fy(vy)}`
    ctx.font = fontOf(ctx, 9.5, 700)
    const tw = ctx.measureText(label).width + 12, th = fitSize(ctx, 9.5) + 8
    const lx = ptr.x + 10 + tw > x + w ? ptr.x - 10 - tw : ptr.x + 10
    const ly = ptr.y - 10 - th < y ? ptr.y + 10 : ptr.y - 10 - th
    ctx.fillStyle = '#fff'; ctx.fillRect(lx, ly, tw, th)
    text(ctx, label, lx + 6, ly + th - 6, { size: 9.5, weight: 700, color: '#000' })
  }

  // rótulos de eixo
  // rótulo do eixo x na ponta direita: o meio costuma ter notas da simulação
  if (opts.xLabel) text(ctx, opts.xLabel, x + w, y + h + 26, { size: 9, color: C.dim, align: 'right' })
  if (opts.yLabel) {
    ctx.save()
    ctx.translate(x - 30, y + h / 2)
    ctx.rotate(-Math.PI / 2)
    text(ctx, opts.yLabel, 0, 0, { size: 9, color: C.dim, align: 'center' })
    ctx.restore()
  }
  return { sx, sy }
}

/** Legenda horizontal de séries. */
export function legend(ctx, x, y, items, opts = {}) {
  if (ctx.canvas.__bare) return
  let cx = x
  for (const it of items) {
    ctx.fillStyle = it.color
    if (opts.dash) {
      ctx.fillRect(cx, y - 4, 5, 2)
      ctx.fillRect(cx + 7, y - 4, 5, 2)
    } else {
      ctx.fillRect(cx, y - 8, 8, 8)
    }
    text(ctx, it.label, cx + 15, y, { size: 9.5, color: C.dim })
    ctx.font = fontOf(ctx, 9.5, 500)
    cx += 15 + ctx.measureText(it.label).width + 18
  }
}

// ── Utilidades numéricas ─────────────────────────────────────────
/** '#rrggbb' ou 'rgb(r,g,b)' + alpha → 'rgba(r,g,b,a)'. Devolve rgba() intacto. */
export function hexA(hex, a) {
  if (!hex) return hex
  if (hex[0] === '#') {
    const n = parseInt(hex.slice(1), 16)
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`
  }
  // 'rgb(r,g,b)' — é o que mix() devolve. Sem isto, um preenchimento
  // pedido como translúcido saía opaco.
  if (hex.startsWith('rgb(')) return `rgba(${hex.slice(4, -1)},${a})`
  return hex
}
/** Mistura linear entre duas cores hex. t ∈ [0,1] */
export function mix(a, b, t) {
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16)
  const r = Math.round((((pa >> 16) & 255) * (1 - t)) + (((pb >> 16) & 255) * t))
  const g = Math.round((((pa >> 8) & 255) * (1 - t)) + (((pb >> 8) & 255) * t))
  const c = Math.round(((pa & 255) * (1 - t)) + ((pb & 255) * t))
  return `rgb(${r},${g},${c})`
}
/**
 * Cor aproximada de uma luz monocromática (comprimento de onda em nm).
 * Devolve '#rrggbb' no visível (380–750 nm) e null fora dele — o olho
 * não vê ultravioleta nem infravermelho, então não há cor a mostrar.
 */
export function wavelengthColor(nm) {
  if (nm < 380 || nm > 750) return null
  let r = 0, g = 0, b = 0
  if (nm < 440)      { r = (440 - nm) / 60; b = 1 }
  else if (nm < 490) { g = (nm - 440) / 50; b = 1 }
  else if (nm < 510) { g = 1; b = (510 - nm) / 20 }
  else if (nm < 580) { r = (nm - 510) / 70; g = 1 }
  else if (nm < 645) { r = 1; g = (645 - nm) / 65 }
  else               { r = 1 }
  // o olho perde sensibilidade nas duas pontas do espectro
  const edge = nm < 420 ? 0.35 + 0.65 * (nm - 380) / 40
             : nm > 700 ? 0.35 + 0.65 * (750 - nm) / 50 : 1
  const ch = v => Math.round(255 * Math.pow(v * edge, 0.8)).toString(16).padStart(2, '0')
  return `#${ch(r)}${ch(g)}${ch(b)}`
}

export const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
export const lerp  = (a, b, t) => a + (b - a) * t

/** Formata em notação científica quando a magnitude foge de [0.01, 10000). */
export function sci(v, digits = 2) {
  if (v === 0) return '0'
  const a = Math.abs(v)
  if (a >= 1e4 || a < 1e-2) {
    const e = Math.floor(Math.log10(a))
    const m = v / 10 ** e
    return `${m.toFixed(digits)}e${e}`
  }
  return v.toFixed(digits)
}

/** PRNG determinístico — campos de estrelas e ruído que NÃO devem tremer. */
export function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

/** Gaussiana N(0,1) por Box–Muller, usando um `rng` fornecido. */
export function gauss(rand) {
  let u = 0, v = 0
  while (u === 0) u = rand()
  while (v === 0) v = rand()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

// ═══════════════════════════════════════════════════════════════════
// <SimCanvas /> — plumbing compartilhado
// ═══════════════════════════════════════════════════════════════════

/**
 * Relógio e saída da simulação, por contexto (assim vale para todas as
 * simulações sem que cada arquivo repasse nada):
 *   speed      escala de tempo (0.25 = câmera lenta, 2 = dobro)
 *   stepKey    incrementar avança um quadro (só em pausa)
 *   onReadout  recebe as leituras [{ title, rows:[{k,v,c}] }] para a
 *              página mostrar em HTML; se ausente, vão no canvas
 *   zoom       sobrepõe o zoom do palco ('fit' encaixa o desenho de
 *              720px na largura disponível — usado nas prévias)
 *   bare       prévia: desenha só o fenômeno, sem textos nem leituras
 *   onParams   a simulação devolve valores para os controles da página
 *              (view.setParams({ id: valor })) — é como arrastar algo no
 *              palco move o slider correspondente
 */
export const SimClock = createContext({ speed: 1, stepKey: 0, onReadout: null, zoom: null, bare: false, onParams: null, onTick: null })

const READOUT_INTERVAL = 120   // ms — números mudando 60×/s não dá para ler

/**
 * @param {(view, params) => object}                     setup
 * @param {(s, dt, params, view) => void}                step   dt fixo, em segundos
 * @param {(ctx, s, params, view) => void}               render
 * @param {object}  params    valores dos sliders (ao vivo)
 * @param {boolean} running   pausa apenas a física; render continua
 * @param {number}  resetKey  incrementar força novo setup()
 * @param {'auto'|number} zoom  'auto' amplia em telas largas; número fixa
 * @param {string}  touchAction  'none' captura gestos; 'auto' deixa a página rolar
 */
export function SimCanvas({
  setup, step, render, params, running, resetKey = 0, onPointer,
  zoom = 'auto', touchAction = 'none',
}) {
  const clock = useContext(SimClock)
  const { speed, stepKey, onReadout, bare } = clock
  const zoomMode = clock.zoom ?? zoom
  const canvasRef = useRef(null)
  const stateRef  = useRef(null)
  const viewRef   = useRef({ w: 0, h: 0, dpr: 1, zoom: 1, scale: 1, t: 0, pointer: { x: 0, y: 0, down: false, inside: false } })
  const paramsRef = useRef(params)
  const runRef    = useRef(running)
  const speedRef  = useRef(speed)
  const sinkRef   = useRef(onReadout)
  const paramSink = useRef(clock.onParams)
  const tickSink  = useRef(clock.onTick)
  const stepSeen  = useRef(stepKey)
  const stepReq   = useRef(0)

  // Entram por ref: mexer num slider não deve recriar o loop.
  paramsRef.current = params
  runRef.current    = running
  speedRef.current  = speed
  sinkRef.current   = onReadout
  paramSink.current = clock.onParams
  tickSink.current  = clock.onTick
  if (stepKey !== stepSeen.current) { stepSeen.current = stepKey; stepReq.current += 1 }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx  = canvas.getContext('2d', { alpha: false })
    const view = viewRef.current

    // ── tamanho: DPR × zoom ───────────────────────────────────────
    // canvas.width é em pixels do dispositivo. A simulação desenha em
    // unidades lógicas (view.w × view.h); view.scale converte.
    let dirty = true   // algo mudou e precisa de novo desenho (em pausa)
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const cw = canvas.clientWidth
      const ch = canvas.clientHeight
      if (cw === 0 || ch === 0) return
      const z = zoomMode === 'auto' ? clamp(cw / DESIGN_W, 1, MAX_ZOOM)
              : zoomMode === 'fit' ? cw / DESIGN_W
              : zoomMode
      canvas.width  = Math.round(cw * dpr)
      canvas.height = Math.round(ch * dpr)
      canvas.__zoom = z
      canvas.__bare = bare
      dirty = true
      view.w = cw / z; view.h = ch / z
      view.dpr = dpr; view.zoom = z; view.scale = dpr * z
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Fora da tela, a simulação não gasta CPU: nem física, nem desenho.
    let visible = true
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(canvas)

    // ── ponteiro (unidades lógicas, relativas ao canvas) ──────────
    const pt = view.pointer
    const toLocal = e => {
      const r = canvas.getBoundingClientRect()
      pt.x = (e.clientX - r.left) / view.zoom
      pt.y = (e.clientY - r.top) / view.zoom
    }
    // O retorno de onPointer diz se há algo pegável sob o ponteiro:
    // qualquer valor verdadeiro marca o canvas com .sim-grab (cursor de pegar).
    const hint = r => { canvas.classList.toggle('sim-grab', Boolean(r)) }
    view.setParams = patch => paramSink.current?.(patch)
    canvas.__pointer = pt
    const onMove  = e => { toLocal(e); pt.inside = true; dirty = true; hint(onPointer?.('move', pt, stateRef.current, paramsRef.current, view)) }
    const onDown  = e => {
      toLocal(e); pt.down = true; dirty = true
      const r = onPointer?.('down', pt, stateRef.current, paramsRef.current, view)
      // algo foi pego: o arraste continua mesmo se o ponteiro sair do canvas
      if (r) { try { canvas.setPointerCapture(e.pointerId) } catch { /* ok */ } }
      hint(r)
    }
    const onUp    = () => { if (!pt.down) return; pt.down = false; dirty = true; hint(onPointer?.('up', pt, stateRef.current, paramsRef.current, view)) }
    const onLeave = () => { pt.inside = false; dirty = true; if (!pt.down) hint(null) }
    canvas.addEventListener('pointermove',  onMove)
    canvas.addEventListener('pointerdown',  onDown)
    window.addEventListener('pointerup',    onUp)
    canvas.addEventListener('pointerleave', onLeave)

    // ── leituras: fila por quadro → painel HTML ou canvas ─────────
    const queue = []
    pendingReadouts.set(canvas, queue)
    let lastSent = 0, lastJson = ''
    const flushReadouts = now => {
      if (queue.length === 0) return
      const sink = sinkRef.current
      if (bare) {
        // prévia: descarta
      } else if (!sink) {
        for (const q of queue) drawReadout(ctx, q.x, q.y, q.rows, q.opts)
      } else if (now - lastSent >= READOUT_INTERVAL) {
        const panels = queue.map(q => ({
          title: q.opts.title ?? '',
          rows: q.rows.map(r => ({ k: String(r.k), v: String(r.v), c: r.c ?? null })),
        }))
        const json = JSON.stringify(panels)
        if (json !== lastJson) { lastJson = json; sink(panels) }
        lastSent = now
      } else {
        // Ainda dentro do intervalo: pede mais um quadro, senão uma
        // simulação pausada ficaria com a penúltima leitura na tela.
        dirty = true
      }
      queue.length = 0
    }

    // relógio da simulação → cabeçalho do palco (tempo simulado, não real)
    let lastTick = -Infinity
    const draw = now => {
      ctx.setTransform(view.scale, 0, 0, view.scale, 0, 0)
      render(ctx, stateRef.current, paramsRef.current, view)
      flushReadouts(now)
      if (tickSink.current && now - lastTick >= READOUT_INTERVAL) {
        lastTick = now
        tickSink.current(view.t)
      }
    }

    view.t = 0
    stateRef.current = setup(view, paramsRef.current)

    // Primeiro quadro síncrono: a simulação já nasce desenhada.
    draw(performance.now() + READOUT_INTERVAL)

    let raf = 0
    let lastParams = paramsRef.current
    let last = performance.now()
    let acc  = 0

    const frame = now => {
      raf = requestAnimationFrame(frame)
      const real = Math.min((now - last) / 1000, MAX_FRAME)
      last = now
      if (!visible) return
      let stepped = false

      // Passo fixo: a física é idêntica em 60, 120 ou 144 Hz.
      if (runRef.current) {
        acc += real * speedRef.current
        let n = 0
        while (acc >= FIXED_DT && n < MAX_STEPS) {
          step(stateRef.current, FIXED_DT, paramsRef.current, view)
          view.t += FIXED_DT
          acc -= FIXED_DT
          n++
        }
        if (n === MAX_STEPS) acc = 0   // não deixa a dívida crescer
        stepReq.current = 0
      } else if (stepReq.current > 0) {
        // Em pausa: cada pedido avança um "quadro" de física.
        stepReq.current--
        stepped = true
        for (let i = 0; i < STEP_BURST; i++) {
          step(stateRef.current, FIXED_DT, paramsRef.current, view)
          view.t += FIXED_DT
        }
      }

      // Em pausa só redesenha se algo mudou (slider, ponteiro, tamanho,
      // avanço de quadro) — uma simulação parada não gasta nada.
      const moved = runRef.current || stepped || dirty || paramsRef.current !== lastParams
      if (!moved) return
      dirty = false
      lastParams = paramsRef.current
      draw(now)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      pendingReadouts.delete(canvas)
      canvas.removeEventListener('pointermove',  onMove)
      canvas.removeEventListener('pointerdown',  onDown)
      window.removeEventListener('pointerup',    onUp)
      canvas.removeEventListener('pointerleave', onLeave)
    }
    // resetKey na lista → Reiniciar reconstrói o estado do zero.
  }, [setup, step, render, resetKey, onPointer, zoomMode, bare])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{ touchAction }}
    />
  )
}

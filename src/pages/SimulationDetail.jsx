// ─────────────────────────────────────────────────────────────
// pages/SimulationDetail.jsx
// Cada simulação tem seu próprio Canvas com física real.
// Para adicionar uma nova simulação: crie um componente Canvas
// e adicione o caso no switch dentro de <SimulationCanvas>.
// ─────────────────────────────────────────────────────────────
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronRight, Info, RotateCcw, Play, Pause } from 'lucide-react'
import { getSimulationById } from '../data/content'
import { CategoryBadge, LevelBadge } from '../components/CategoryBadge'
import { SimCardRelated } from '../components/SimCard'

// ─────────────────────────────────────────────────────────────
// Utility: hook de canvas responsivo
// ─────────────────────────────────────────────────────────────
function useResponsiveCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ro = new ResizeObserver(() => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    })
    ro.observe(canvas)
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    return () => ro.disconnect()
  }, [ref])
}

// ═══════════════════════════════════════════════════════════
// 1. ÓRBITAS PLANETÁRIAS
// Física: órbita circular kepleriana
// ═══════════════════════════════════════════════════════════
function OrbitCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const angleRef  = useRef(0)
  const trailRef  = useRef([])
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const cx = W / 2, cy = H / 2

    const distNorm = (params.distance - 50) / 250
    const orbitR   = 60 + distNorm * (Math.min(W, H) / 2 - 90)
    const massNorm = params.mass / 100
    const velNorm  = params.velocity / 50
    const angSpeed = (velNorm * 0.015) / Math.max(0.2, distNorm + 0.3)
    const starR    = 18 + massNorm * 10
    const planetR  = 6 + massNorm * 6

    ctx.fillStyle = '#070d1a'
    ctx.fillRect(0, 0, W, H)

    // Stars
    for (let i = 0; i < 80; i++) {
      const sx = ((i * 137.508 * W / 100) % W)
      const sy = ((i * 97.31  * H / 100) % H)
      ctx.beginPath()
      ctx.arc(sx, sy, i % 3 === 0 ? 1.2 : 0.6, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${0.15 + (i % 5) * 0.1})`
      ctx.fill()
    }

    // Orbit ring
    ctx.beginPath()
    ctx.arc(cx, cy, orbitR, 0, Math.PI * 2)
    ctx.strokeStyle = 'rgba(0,212,255,0.12)'
    ctx.lineWidth = 1
    ctx.setLineDash([4, 6])
    ctx.stroke()
    ctx.setLineDash([])

    // Star glow
    const sg = ctx.createRadialGradient(cx, cy, 0, cx, cy, starR * 3.5)
    sg.addColorStop(0,   'rgba(255,220,80,0.5)')
    sg.addColorStop(0.5, 'rgba(255,160,30,0.1)')
    sg.addColorStop(1,   'transparent')
    ctx.beginPath(); ctx.arc(cx, cy, starR * 3.5, 0, Math.PI * 2)
    ctx.fillStyle = sg; ctx.fill()

    // Star
    ctx.beginPath(); ctx.arc(cx, cy, starR, 0, Math.PI * 2)
    ctx.fillStyle = '#ffc840'
    ctx.shadowBlur = 28; ctx.shadowColor = '#ff9500'; ctx.fill(); ctx.shadowBlur = 0

    // Planet
    const px = cx + orbitR * Math.cos(angleRef.current)
    const py = cy + orbitR * Math.sin(angleRef.current)

    // Trail
    if (running) trailRef.current.push({ x: px, y: py })
    if (trailRef.current.length > 80) trailRef.current.shift()
    for (let i = 0; i < trailRef.current.length; i++) {
      const t = trailRef.current[i]
      ctx.beginPath(); ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0,212,255,${(i / trailRef.current.length) * 0.4})`
      ctx.fill()
    }

    // Planet glow
    const pg = ctx.createRadialGradient(px, py, 0, px, py, planetR * 3)
    pg.addColorStop(0, 'rgba(0,212,255,0.35)'); pg.addColorStop(1, 'transparent')
    ctx.beginPath(); ctx.arc(px, py, planetR * 3, 0, Math.PI * 2); ctx.fillStyle = pg; ctx.fill()

    ctx.beginPath(); ctx.arc(px, py, planetR, 0, Math.PI * 2)
    ctx.fillStyle = '#00d4ff'; ctx.shadowBlur = 14; ctx.shadowColor = '#00d4ff'; ctx.fill(); ctx.shadowBlur = 0

    // Speed label
    ctx.fillStyle = 'rgba(255,255,255,0.4)'
    ctx.font = '11px monospace'
    const period = (2 * Math.PI / Math.max(angSpeed, 0.001) / 60).toFixed(1)
    ctx.fillText(`T ≈ ${period}s sim`, 12, H - 12)

    if (running) angleRef.current += angSpeed
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    trailRef.current = []
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 2. PÊNDULO SIMPLES
// Física real: θ'' = -(g/L)·sin(θ) - b·θ' (com amortecimento)
// ═══════════════════════════════════════════════════════════
function PenduloCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const stateRef  = useRef({ theta: null, omega: 0, t: 0 })
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height

    const L     = params.length          // metros
    const amp   = (params.amplitude * Math.PI) / 180  // rad
    const g     = params.gravity         // m/s²
    const b     = 0.03                   // coef. amortecimento

    if (stateRef.current.theta === null) stateRef.current.theta = amp

    // ── Física (Runge-Kutta 4) ──
    if (running) {
      const dt = 0.016
      const f = (th, om) => -( g / L) * Math.sin(th) - b * om
      const { theta: th, omega: om } = stateRef.current
      const k1v = f(th, om);                    const k1p = om
      const k2v = f(th + k1p*dt/2, om+k1v*dt/2); const k2p = om+k1v*dt/2
      const k3v = f(th + k2p*dt/2, om+k2v*dt/2); const k3p = om+k2v*dt/2
      const k4v = f(th + k3p*dt,   om+k3v*dt);   const k4p = om+k3v*dt
      stateRef.current.theta = th + (dt/6)*(k1p+2*k2p+2*k3p+k4p)
      stateRef.current.omega = om + (dt/6)*(k1v+2*k2v+2*k3v+k4v)
    }

    const theta = stateRef.current.theta

    // ── Desenho ──
    ctx.fillStyle = '#070d1a'
    ctx.fillRect(0, 0, W, H)

    // Grid de fundo
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'
    ctx.lineWidth = 1
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke() }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke() }

    // Ponto de pivô
    const pivX = W / 2, pivY = H * 0.1
    const scale = Math.min(W, H) / (L * 2.4 + 0.5)
    const pxLen = L * scale

    const bobX = pivX + pxLen * Math.sin(theta)
    const bobY = pivY + pxLen * Math.cos(theta)

    // Suporte
    ctx.fillStyle = 'rgba(255,255,255,0.15)'
    ctx.fillRect(pivX - 40, pivY - 8, 80, 8)
    ctx.beginPath(); ctx.arc(pivX, pivY, 5, 0, Math.PI * 2)
    ctx.fillStyle = '#64748b'; ctx.fill()

    // Haste
    const grad = ctx.createLinearGradient(pivX, pivY, bobX, bobY)
    grad.addColorStop(0, 'rgba(255,255,255,0.6)')
    grad.addColorStop(1, 'rgba(255,255,255,0.2)')
    ctx.beginPath(); ctx.moveTo(pivX, pivY); ctx.lineTo(bobX, bobY)
    ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.stroke()

    // Trajetória (arco pontilhado)
    ctx.beginPath()
    ctx.arc(pivX, pivY, pxLen, Math.PI/2 - amp, Math.PI/2 + amp)
    ctx.strokeStyle = 'rgba(34,211,238,0.15)'; ctx.lineWidth = 1
    ctx.setLineDash([3,5]); ctx.stroke(); ctx.setLineDash([])

    // Bob (massa)
    const bobR = 14 + (params.length * 2)
    const bobGlow = ctx.createRadialGradient(bobX, bobY, 0, bobX, bobY, bobR * 2.5)
    bobGlow.addColorStop(0, 'rgba(34,211,238,0.4)'); bobGlow.addColorStop(1, 'transparent')
    ctx.beginPath(); ctx.arc(bobX, bobY, bobR * 2.5, 0, Math.PI * 2); ctx.fillStyle = bobGlow; ctx.fill()

    const bobGrad = ctx.createRadialGradient(bobX - bobR*0.3, bobY - bobR*0.3, 0, bobX, bobY, bobR)
    bobGrad.addColorStop(0, '#60e6fa'); bobGrad.addColorStop(1, '#0891b2')
    ctx.beginPath(); ctx.arc(bobX, bobY, bobR, 0, Math.PI * 2)
    ctx.fillStyle = bobGrad; ctx.shadowBlur = 16; ctx.shadowColor = '#22d3ee'; ctx.fill(); ctx.shadowBlur = 0

    // Período teórico
    const T = 2 * Math.PI * Math.sqrt(L / g)
    ctx.fillStyle = 'rgba(148,163,184,0.7)'; ctx.font = '12px monospace'
    ctx.fillText(`T = 2π√(L/g) ≈ ${T.toFixed(2)}s`, 12, H - 32)
    ctx.fillText(`θ = ${(theta * 180 / Math.PI).toFixed(1)}°`, 12, H - 14)

    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    stateRef.current = { theta: null, omega: 0, t: 0 }
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 3. CIRCUITO ELÉTRICO
// Lei de Ohm: I = V/R, P = V·I, animação de elétrons
// ═══════════════════════════════════════════════════════════
function CircuitoCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const tRef      = useRef(0)
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const V = params.voltage, R = params.resistance
    const I = V / R, P = V * I

    ctx.fillStyle = '#070d1a'; ctx.fillRect(0, 0, W, H)

    // ── Desenha o circuito ──
    const mx = W / 2, my = H / 2
    const bw = Math.min(W * 0.7, 320)
    const bh = Math.min(H * 0.55, 200)
    const x1 = mx - bw/2, x2 = mx + bw/2
    const y1 = my - bh/2, y2 = my + bh/2

    // Fios
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(x1, y1); ctx.lineTo(x2, y1)  // top
    ctx.moveTo(x2, y1); ctx.lineTo(x2, y2)  // right
    ctx.moveTo(x2, y2); ctx.lineTo(x1, y2)  // bottom
    ctx.moveTo(x1, y2); ctx.lineTo(x1, y1)  // left
    ctx.stroke()

    // ── Resistor (centro direita) ──
    const rcx = x2, rcy = my
    const rw = 36, rh = 16
    ctx.fillStyle = '#1e293b'
    ctx.strokeStyle = '#f97316'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.roundRect(rcx - rw/2, rcy - rh/2, rw, rh, 4)
    ctx.fill(); ctx.stroke()
    // zigzag inside
    ctx.strokeStyle = '#f97316'; ctx.lineWidth = 1.5
    ctx.beginPath()
    const nz = 5
    for (let i = 0; i <= nz; i++) {
      const xi = (rcx - rw/2 + 4) + i * ((rw - 8) / nz)
      const yi = rcy + (i % 2 === 0 ? -5 : 5)
      i === 0 ? ctx.moveTo(xi, rcy) : ctx.lineTo(xi, yi)
    }
    ctx.lineTo(rcx + rw/2 - 4, rcy); ctx.stroke()
    ctx.fillStyle = '#f97316'; ctx.font = 'bold 11px monospace'
    ctx.textAlign = 'center'
    ctx.fillText(`${R}Ω`, rcx + rw/2 + 20, rcy + 4)

    // ── Bateria (centro esquerda) ──
    const bcx = x1, bcy = my
    const bpw = 8, bph = 28
    ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2
    // Placas
    ctx.beginPath(); ctx.moveTo(bcx, bcy - bph/2); ctx.lineTo(bcx, bcy + bph/2); ctx.stroke()
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(bcx - 2, bcy - bph/3); ctx.lineTo(bcx - 2, bcy + bph/3); ctx.stroke()
    // + / -
    ctx.fillStyle = '#22d3ee'; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center'
    ctx.fillText('+', bcx - 18, y1 + 16)
    ctx.fillText('−', bcx - 18, y2 - 8)
    ctx.fillText(`${V}V`, bcx - 20, my + 4)

    // ── Elétrons animados ──
    const speed = Math.min(I / 2, 4) * (running ? 1 : 0)
    const nElec = Math.min(Math.floor(I * 3 + 3), 14)

    // Percurso: top (x1→x2), right (x2 y1→y2), bottom (x2→x1), left (x1 y2→y1)
    const perim = 2 * bw + 2 * bh
    const segLengths = [bw, bh, bw, bh]
    const segStarts  = [0, bw, bw + bh, 2 * bw + bh]

    for (let i = 0; i < nElec; i++) {
      const pos = ((tRef.current * speed * 0.4 + (i / nElec) * perim) % perim + perim) % perim

      let ex, ey
      let seg = 0
      let rem = pos
      for (let s = 0; s < 4; s++) {
        if (rem < segLengths[s]) { seg = s; break }
        rem -= segLengths[s]
      }
      const t = rem / segLengths[seg]
      if (seg === 0)      { ex = x1 + t * bw; ey = y1 }
      else if (seg === 1) { ex = x2;           ey = y1 + t * bh }
      else if (seg === 2) { ex = x2 - t * bw; ey = y2 }
      else                { ex = x1;           ey = y2 - t * bh }

      ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2)
      ctx.fillStyle = '#60e6fa'
      ctx.shadowBlur = 8; ctx.shadowColor = '#22d3ee'; ctx.fill(); ctx.shadowBlur = 0
    }

    // ── Métricas ──
    ctx.textAlign = 'left'; ctx.font = '13px monospace'
    const lineH = 22
    const labX = 16, labY = H - 14 - lineH * 2
    const data = [
      { label: 'I (corrente)', val: `${I.toFixed(3)} A`, color: '#22d3ee' },
      { label: 'P (potência)', val: `${P.toFixed(2)} W`, color: '#f97316' },
    ]
    data.forEach(({ label, val, color }, i) => {
      ctx.fillStyle = 'rgba(148,163,184,0.6)'; ctx.fillText(label + ': ', labX, labY + i * lineH)
      ctx.fillStyle = color; ctx.fillText(val, labX + ctx.measureText(label + ': ').width + 2, labY + i * lineH)
    })

    if (running) tRef.current++
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    tRef.current = 0
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 4. ONDAS E SOM
// Onda senoidal animada + visualização de partículas de ar
// ═══════════════════════════════════════════════════════════
function OndasCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const tRef      = useRef(0)
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height

    const freq  = params.frequency   // Hz (visual: ciclos por tela)
    const amp   = params.amplitude   // dB → amplitude visual
    const ampPx = (amp / 100) * (H * 0.35)
    const k     = (freq / 440) * 4  // número de ondas visíveis
    const omega = (freq / 440) * 0.08

    ctx.fillStyle = '#070d1a'; ctx.fillRect(0, 0, W, H)

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'; ctx.lineWidth = 1
    for (let y = H * 0.1; y < H; y += H / 8) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
    }

    const cy = H / 2

    // Onda 1 (principal)
    const grad = ctx.createLinearGradient(0, cy - ampPx, 0, cy + ampPx)
    grad.addColorStop(0, 'rgba(34,211,238,0.9)')
    grad.addColorStop(0.5, 'rgba(14,165,201,0.7)')
    grad.addColorStop(1, 'rgba(34,211,238,0.9)')

    ctx.beginPath()
    for (let x = 0; x <= W; x += 2) {
      const phase = (x / W) * k * 2 * Math.PI - tRef.current * omega
      const y = cy + ampPx * Math.sin(phase)
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.strokeStyle = grad; ctx.lineWidth = 2.5; ctx.stroke()

    // Onda atenuada (reflexo)
    ctx.beginPath()
    for (let x = 0; x <= W; x += 2) {
      const phase = (x / W) * k * 2 * Math.PI - tRef.current * omega
      const att = 1 - x / W
      const y = cy + ampPx * 0.4 * att * Math.sin(phase * 1.5 + 0.5)
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
    }
    ctx.strokeStyle = 'rgba(99,102,241,0.35)'; ctx.lineWidth = 1.5; ctx.stroke()

    // Linha central
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy)
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 1; ctx.stroke()

    // Comprimento de onda (λ)
    const lambdaW = W / k
    const arrowY = cy + ampPx + 28
    ctx.strokeStyle = 'rgba(34,211,238,0.4)'; ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(20, arrowY); ctx.lineTo(20 + lambdaW, arrowY); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(20, arrowY - 5); ctx.lineTo(20, arrowY + 5); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(20 + lambdaW, arrowY - 5); ctx.lineTo(20 + lambdaW, arrowY + 5); ctx.stroke()
    ctx.fillStyle = 'rgba(34,211,238,0.6)'; ctx.font = '11px monospace'; ctx.textAlign = 'center'
    ctx.fillText('λ', 20 + lambdaW / 2, arrowY - 6)

    // Métricas
    ctx.textAlign = 'left'; ctx.font = '12px monospace'
    const v = 343
    const lambda = v / freq
    ctx.fillStyle = 'rgba(148,163,184,0.7)'; ctx.fillText(`f = ${freq} Hz`, 12, 24)
    ctx.fillStyle = '#22d3ee';               ctx.fillText(`λ = ${lambda.toFixed(2)} m`, 12, 42)
    ctx.fillStyle = 'rgba(148,163,184,0.7)'; ctx.fillText(`v = ${v} m/s (ar)`, 12, 60)

    if (running) tRef.current++
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    tRef.current = 0
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 5. FOTOSSÍNTESE INTERATIVA
// Animação de fótons → cloroplasto → glucose/O₂
// ═══════════════════════════════════════════════════════════
function FotossintesCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const tRef      = useRef(0)
  const photonsRef = useRef([])
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height

    const light    = params.light / 100000      // 0–1
    const co2      = params.co2 / 2000          // 0–1
    const rate     = light * co2                // 0–1
    const photonSpd = 1.5 + light * 3

    ctx.fillStyle = '#070d1a'; ctx.fillRect(0, 0, W, H)

    // ── Fundo: gradiente de céu ──
    const sky = ctx.createLinearGradient(0, 0, 0, H * 0.45)
    sky.addColorStop(0, `rgba(14,165,201,${light * 0.15})`)
    sky.addColorStop(1, 'transparent')
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H * 0.45)

    // ── Sol ──
    const sunX = W * 0.85, sunY = H * 0.12
    const sunR = 28
    const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * 4)
    sunGlow.addColorStop(0,   `rgba(255,220,0,${light * 0.7})`)
    sunGlow.addColorStop(0.4, `rgba(255,180,0,${light * 0.2})`)
    sunGlow.addColorStop(1,   'transparent')
    ctx.beginPath(); ctx.arc(sunX, sunY, sunR * 4, 0, Math.PI * 2)
    ctx.fillStyle = sunGlow; ctx.fill()
    ctx.beginPath(); ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,220,0,${0.4 + light * 0.6})`; ctx.fill()

    // ── Fótons (raios de luz) ──
    if (running && Math.random() < light * 0.6) {
      photonsRef.current.push({
        x: sunX + (Math.random() - 0.5) * 60,
        y: sunY + sunR,
        vx: (Math.random() - 0.5) * 1.5,
        vy: photonSpd,
        life: 1,
      })
    }
    photonsRef.current = photonsRef.current.filter(p => p.life > 0)
    photonsRef.current.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,230,50,${p.life * 0.85})`
      ctx.shadowBlur = 8; ctx.shadowColor = '#ffe040'; ctx.fill(); ctx.shadowBlur = 0
      if (running) { p.x += p.vx; p.y += p.vy; p.life -= 0.012 }
    })

    // ── Folha ──
    const lx = W * 0.38, ly = H * 0.55
    const lw = Math.min(W * 0.55, 240), lh = Math.min(H * 0.35, 130)

    ctx.save()
    ctx.translate(lx, ly)
    // Forma de folha (elipse inclinada)
    ctx.rotate(-0.25)
    ctx.beginPath()
    ctx.ellipse(0, 0, lw / 2, lh / 2, 0, 0, Math.PI * 2)
    const leafGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, lw / 2)
    const greenAlpha = 0.7 + rate * 0.3
    leafGrad.addColorStop(0, `rgba(34,197,94,${greenAlpha})`)
    leafGrad.addColorStop(0.5, `rgba(22,163,74,${greenAlpha})`)
    leafGrad.addColorStop(1, `rgba(15,118,54,${greenAlpha})`)
    ctx.fillStyle = leafGrad; ctx.fill()
    // Veias
    ctx.strokeStyle = `rgba(16,185,129,0.4)`; ctx.lineWidth = 1.5
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath(); ctx.moveTo(-lw/2 + 10, i * lh/8)
      ctx.quadraticCurveTo(0, i * lh / 10, lw/2 - 10, i * lh/8)
      ctx.stroke()
    }
    ctx.restore()

    // ── Cloroplastos pulsando ──
    const nChlo = Math.floor(4 + rate * 6)
    for (let i = 0; i < nChlo; i++) {
      const cx2 = lx + (Math.cos(i * 1.4) * lw * 0.3)
      const cy2 = ly + (Math.sin(i * 1.2) * lh * 0.25)
      const pulse = 0.8 + 0.2 * Math.sin(tRef.current * 0.07 + i)
      ctx.beginPath(); ctx.ellipse(cx2, cy2, 8 * pulse, 5 * pulse, i * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(74,222,128,${0.5 + rate * 0.4})`; ctx.fill()
    }

    // ── Moléculas saindo (O₂, Glicose) ──
    const nOut = Math.floor(rate * 8)
    for (let i = 0; i < nOut; i++) {
      const phase = (tRef.current * 0.015 + i * 0.8) % 1
      const mx = lx - lw * 0.3 + i * 18
      const my2 = ly - lh * 0.3 - phase * 80
      ctx.beginPath(); ctx.arc(mx, my2, 5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(34,211,238,${1 - phase})`
      ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'
      ctx.fillStyle = `rgba(34,211,238,${1 - phase})`
      ctx.fillText(i % 2 === 0 ? 'O₂' : 'C₆H₁₂O₆', mx, my2)
    }

    // ── Taxa fotossintética ──
    const ratePercent = (rate * 100).toFixed(0)
    ctx.textAlign = 'left'; ctx.font = '12px monospace'
    ctx.fillStyle = 'rgba(148,163,184,0.7)'
    ctx.fillText(`Taxa fotossintética: `, 12, H - 32)
    ctx.fillStyle = '#4ade80'
    ctx.fillText(`${ratePercent}%`, 12 + ctx.measureText('Taxa fotossintética: ').width + 5, H - 32)
    ctx.fillStyle = 'rgba(148,163,184,0.5)'
    ctx.fillText(`CO₂ + H₂O + luz → C₆H₁₂O₆ + O₂`, 12, H - 14)

    if (running) tRef.current++
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    tRef.current = 0; photonsRef.current = []
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 6. REAÇÕES QUÍMICAS
// Colisão de moléculas com taxa dependente de temperatura
// ═══════════════════════════════════════════════════════════
function ReacoesCanvas({ params, running }) {
  const canvasRef   = useRef(null)
  const animRef     = useRef(null)
  const moleculesRef = useRef([])
  const reactionsRef = useRef(0)
  const tRef        = useRef(0)
  useResponsiveCanvas(canvasRef)

  // Inicializa moléculas
  useEffect(() => {
    moleculesRef.current = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 400 + 50,
      y: Math.random() * 250 + 50,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      type: i < 10 ? 'A' : 'B',
      r: 10,
      reacted: false,
      flashTimer: 0,
    }))
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height

    const temp = params.temp          // -50 a 500
    const conc = params.concentration // 0.1 a 10
    const speedMult = 0.5 + ((temp + 50) / 550) * 3.5
    const reactProb = 0.008 * conc * (1 + (temp + 50) / 200)

    ctx.fillStyle = '#070d1a'; ctx.fillRect(0, 0, W, H)

    // Recipiente (frasco)
    const fx = W * 0.1, fy = H * 0.08
    const fw = W * 0.8, fh = H * 0.75
    ctx.strokeStyle = 'rgba(34,211,238,0.3)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.roundRect(fx, fy, fw, fh, 8); ctx.stroke()

    // Cor do fluido (muda com temperatura)
    const tempNorm = (temp + 50) / 550
    const r2 = Math.floor(30 + tempNorm * 225)
    const g2 = Math.floor(60 - tempNorm * 30)
    const b2 = Math.floor(120 - tempNorm * 80)
    ctx.fillStyle = `rgba(${r2},${g2},${b2},0.07)`
    ctx.beginPath(); ctx.roundRect(fx + 2, fy + 2, fw - 4, fh - 4, 6); ctx.fill()

    // Termômetro visual à direita
    const tx = fx + fw + 20, ty = fy
    const th = fh, barH = (temp + 50) / 550 * th
    ctx.fillStyle = '#1e293b'; ctx.beginPath(); ctx.roundRect(tx, ty, 16, th, 8); ctx.fill()
    const thermGrad = ctx.createLinearGradient(0, ty + th, 0, ty)
    thermGrad.addColorStop(0, '#22d3ee'); thermGrad.addColorStop(0.5, '#f97316'); thermGrad.addColorStop(1, '#ef4444')
    ctx.fillStyle = thermGrad
    ctx.beginPath(); ctx.roundRect(tx, ty + th - barH, 16, barH, barH > 10 ? [0,0,8,8] : 8); ctx.fill()
    ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = '10px monospace'; ctx.textAlign = 'center'
    ctx.fillText(`${temp}°C`, tx + 8, ty - 6)

    // Atualiza moléculas
    const mols = moleculesRef.current
    const bounds = { x1: fx + 12, y1: fy + 12, x2: fx + fw - 12, y2: fy + fh - 12 }

    if (running) {
      mols.forEach(m => {
        if (m.reacted) { m.flashTimer = Math.max(0, m.flashTimer - 1); return }
        m.x += m.vx * speedMult; m.y += m.vy * speedMult
        if (m.x < bounds.x1 || m.x > bounds.x2) m.vx *= -1
        if (m.y < bounds.y1 || m.y > bounds.y2) m.vy *= -1
        m.x = Math.max(bounds.x1, Math.min(bounds.x2, m.x))
        m.y = Math.max(bounds.y1, Math.min(bounds.y2, m.y))
        if (m.flashTimer > 0) m.flashTimer--
      })

      // Colisões e reações
      for (let i = 0; i < mols.length; i++) {
        for (let j = i + 1; j < mols.length; j++) {
          const a = mols[i], b = mols[j]
          if (a.reacted || b.reacted) continue
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < a.r + b.r + 4 && a.type !== b.type) {
            if (Math.random() < reactProb) {
              a.reacted = true; b.reacted = true
              a.flashTimer = 45; b.flashTimer = 45
              reactionsRef.current++
              // Respawn como produto C
              setTimeout(() => {
                a.reacted = false; a.type = 'C'; a.vx = (Math.random()-0.5)*2; a.vy = (Math.random()-0.5)*2
                b.reacted = false; b.type = 'C'; b.vx = (Math.random()-0.5)*2; b.vy = (Math.random()-0.5)*2
                setTimeout(() => { a.type = Math.random()<0.5?'A':'B'; b.type = Math.random()<0.5?'A':'B' }, 2000)
              }, 800)
            }
          }
        }
      }
    }

    // Desenha moléculas
    mols.forEach(m => {
      if (m.reacted && m.flashTimer > 0) {
        // Flash de reação
        ctx.beginPath(); ctx.arc(m.x, m.y, m.r * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,200,0,${m.flashTimer / 45 * 0.5})`; ctx.fill()
      }
      ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2)
      let col = m.type === 'A' ? '#22d3ee' : m.type === 'B' ? '#f97316' : '#4ade80'
      ctx.fillStyle = col; ctx.shadowBlur = 8; ctx.shadowColor = col; ctx.fill(); ctx.shadowBlur = 0
      ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center'
      ctx.fillText(m.type, m.x, m.y + 3)
    })

    // Métricas
    ctx.textAlign = 'left'; ctx.font = '12px monospace'
    ctx.fillStyle = 'rgba(148,163,184,0.7)'
    ctx.fillText(`Reações: ${reactionsRef.current}`, 12, H - 14)
    ctx.fillStyle = '#4ade80'
    ctx.fillText(`Taxa: ${(reactProb * 1000).toFixed(1)} × 10⁻³/s`, 12 + 120, H - 14)

    if (running) tRef.current++
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    reactionsRef.current = 0; tRef.current = 0
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 7. SISTEMA SOLAR COMPLETO
// 8 planetas com dados orbitais reais (escala visual)
// ═══════════════════════════════════════════════════════════
const PLANETS_DATA = [
  { name: 'Mercúrio', color: '#a0916a', r: 4,  orbit: 55,  period: 0.24, tilt: 0 },
  { name: 'Vênus',    color: '#e8c87c', r: 7,  orbit: 80,  period: 0.62, tilt: 0 },
  { name: 'Terra',    color: '#4a9eff', r: 7,  orbit: 108, period: 1.00, tilt: 0 },
  { name: 'Marte',    color: '#c1440e', r: 5,  orbit: 136, period: 1.88, tilt: 0 },
  { name: 'Júpiter',  color: '#c88b3a', r: 16, orbit: 175, period: 11.9, tilt: 0 },
  { name: 'Saturno',  color: '#e4c77c', r: 13, orbit: 215, period: 29.5, tilt: 0 },
  { name: 'Urano',    color: '#7de8e8', r: 10, orbit: 252, period: 84,   tilt: 0 },
  { name: 'Netuno',   color: '#5b7de8', r: 9,  orbit: 286, period: 165,  tilt: 0 },
]

function SistemaSolarCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const tRef      = useRef(0)
  const anglesRef = useRef(PLANETS_DATA.map((_, i) => i * 0.8))
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const cx = W / 2, cy = H / 2
    const scale = Math.min(W, H) / 620

    ctx.fillStyle = '#040a14'; ctx.fillRect(0, 0, W, H)

    // Estrelas
    for (let i = 0; i < 120; i++) {
      const sx = ((i * 83.7 * W / 100) % W)
      const sy = ((i * 61.3 * H / 100) % H)
      ctx.beginPath(); ctx.arc(sx, sy, i % 4 === 0 ? 1.2 : 0.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${0.1 + (i % 6) * 0.08})`; ctx.fill()
    }

    const speed = params.speed

    // Sol
    const sunGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 38 * scale)
    sunGlow.addColorStop(0, 'rgba(255,200,50,0.8)'); sunGlow.addColorStop(0.4, 'rgba(255,120,0,0.2)'); sunGlow.addColorStop(1, 'transparent')
    ctx.beginPath(); ctx.arc(cx, cy, 38 * scale, 0, Math.PI * 2); ctx.fillStyle = sunGlow; ctx.fill()
    ctx.beginPath(); ctx.arc(cx, cy, 18 * scale, 0, Math.PI * 2)
    ctx.fillStyle = '#ffc840'; ctx.shadowBlur = 30; ctx.shadowColor = '#ff8800'; ctx.fill(); ctx.shadowBlur = 0

    PLANETS_DATA.forEach((p, i) => {
      const orbitR = p.orbit * scale
      const ang = anglesRef.current[i]

      // Órbita
      ctx.beginPath(); ctx.arc(cx, cy, orbitR, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.lineWidth = 1; ctx.stroke()

      const px = cx + orbitR * Math.cos(ang)
      const py = cy + orbitR * Math.sin(ang)

      // Anéis de Saturno
      if (p.name === 'Saturno') {
        ctx.save(); ctx.translate(px, py)
        ctx.scale(1, 0.35)
        ctx.beginPath(); ctx.arc(0, 0, p.r * scale * 2.2, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(228,199,124,0.5)'; ctx.lineWidth = 3 * scale; ctx.stroke()
        ctx.restore()
      }

      // Glow
      const pg = ctx.createRadialGradient(px, py, 0, px, py, p.r * scale * 2.5)
      pg.addColorStop(0, p.color + '55'); pg.addColorStop(1, 'transparent')
      ctx.beginPath(); ctx.arc(px, py, p.r * scale * 2.5, 0, Math.PI * 2); ctx.fillStyle = pg; ctx.fill()

      // Planeta
      ctx.beginPath(); ctx.arc(px, py, p.r * scale, 0, Math.PI * 2)
      ctx.fillStyle = p.color; ctx.fill()

      // Label
      if (p.r * scale > 5) {
        ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.font = `${Math.max(9, p.r * scale * 0.9)}px monospace`
        ctx.textAlign = 'center'; ctx.fillText(p.name, px, py - p.r * scale - 5)
      }

      if (running) anglesRef.current[i] += (speed / p.period) * 0.002
    })

    ctx.textAlign = 'left'; ctx.font = '11px monospace'
    ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.fillText(`Velocidade: ${speed}×`, 12, H - 14)

    if (running) tRef.current++
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 8. SATÉLITES ARTIFICIAIS
// Terra + satélite em órbita ajustável (LEO/MEO/GEO)
// ═══════════════════════════════════════════════════════════
function SateliteCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const angRef    = useRef(0)
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height
    const cx = W / 2, cy = H / 2

    const altitude = params.orbit_height   // km
    const earthR   = Math.min(W, H) * 0.2
    const maxOrbit = Math.min(W, H) * 0.45
    const orbitR   = earthR + (altitude / 36000) * (maxOrbit - earthR) * 1.2

    // Vel orbital: v = sqrt(GM/r)  → simplificado para visual
    const GM = 3.986e14
    const rMeters = (6371 + altitude) * 1000
    const vOrbit  = Math.sqrt(GM / rMeters)
    const period  = (2 * Math.PI * rMeters / vOrbit) / 60  // minutos

    const angSpeed = running ? (0.03 / (altitude / 400 + 0.5)) : 0

    ctx.fillStyle = '#040a14'; ctx.fillRect(0, 0, W, H)

    // Estrelas
    for (let i = 0; i < 100; i++) {
      ctx.beginPath(); ctx.arc(((i*83.7)%W), ((i*61.3)%H), i%4===0?1.2:0.5, 0, Math.PI*2)
      ctx.fillStyle = `rgba(255,255,255,${0.1+(i%5)*0.08})`; ctx.fill()
    }

    // Tipo de órbita
    let orbitLabel, orbitColor
    if (altitude < 2000) { orbitLabel = 'LEO (Baixa Órbita)'; orbitColor = '#22d3ee' }
    else if (altitude < 20000) { orbitLabel = 'MEO (Órbita Média)'; orbitColor = '#f97316' }
    else { orbitLabel = 'GEO (Órbita Geoestacionária)'; orbitColor = '#4ade80' }

    // Anel de órbita
    ctx.beginPath(); ctx.arc(cx, cy, orbitR, 0, Math.PI * 2)
    ctx.strokeStyle = orbitColor + '30'; ctx.lineWidth = 1
    ctx.setLineDash([4, 6]); ctx.stroke(); ctx.setLineDash([])

    // Atmosfera
    const atm = ctx.createRadialGradient(cx, cy, earthR * 0.95, cx, cy, earthR * 1.12)
    atm.addColorStop(0, 'rgba(100,180,255,0.15)'); atm.addColorStop(1, 'transparent')
    ctx.beginPath(); ctx.arc(cx, cy, earthR * 1.12, 0, Math.PI * 2); ctx.fillStyle = atm; ctx.fill()

    // Terra
    const earthGrad = ctx.createRadialGradient(cx - earthR*0.3, cy - earthR*0.3, 0, cx, cy, earthR)
    earthGrad.addColorStop(0,   '#4a9eff')
    earthGrad.addColorStop(0.4, '#2563eb')
    earthGrad.addColorStop(0.7, '#1d4ed8')
    earthGrad.addColorStop(1,   '#1e3a8a')
    ctx.beginPath(); ctx.arc(cx, cy, earthR, 0, Math.PI * 2)
    ctx.fillStyle = earthGrad; ctx.shadowBlur = 20; ctx.shadowColor = '#3b82f6'; ctx.fill(); ctx.shadowBlur = 0

    // Continentes (simplificado)
    ctx.fillStyle = 'rgba(74,222,128,0.35)'
    const continents = [
      { x: cx - earthR*0.3, y: cy - earthR*0.2, rx: earthR*0.25, ry: earthR*0.3 },
      { x: cx + earthR*0.15, y: cy - earthR*0.1, rx: earthR*0.2, ry: earthR*0.25 },
      { x: cx - earthR*0.1, y: cy + earthR*0.2, rx: earthR*0.15, ry: earthR*0.15 },
    ]
    continents.forEach(c => { ctx.beginPath(); ctx.ellipse(c.x, c.y, c.rx, c.ry, 0.3, 0, Math.PI * 2); ctx.fill() })

    // Satélite
    const sx = cx + orbitR * Math.cos(angRef.current)
    const sy = cy + orbitR * Math.sin(angRef.current)

    // Trilha
    ctx.beginPath()
    for (let i = 1; i <= 30; i++) {
      const ta = angRef.current - i * 0.04
      const tx = cx + orbitR * Math.cos(ta)
      const ty = cy + orbitR * Math.sin(ta)
      i === 1 ? ctx.moveTo(tx, ty) : ctx.lineTo(tx, ty)
    }
    ctx.strokeStyle = orbitColor + '40'; ctx.lineWidth = 1.5; ctx.stroke()

    // Corpo do satélite
    ctx.save(); ctx.translate(sx, sy)
    ctx.fillStyle = '#94a3b8'
    ctx.fillRect(-8, -4, 16, 8)  // corpo
    ctx.fillStyle = '#3b82f6'
    ctx.fillRect(-18, -2, 8, 4)  // painel esq
    ctx.fillRect(10, -2, 8, 4)   // painel dir
    ctx.fillStyle = orbitColor
    ctx.shadowBlur = 10; ctx.shadowColor = orbitColor
    ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0
    ctx.restore()

    // Métricas
    ctx.textAlign = 'left'; ctx.font = '12px monospace'
    ctx.fillStyle = orbitColor; ctx.fillText(orbitLabel, 12, 28)
    ctx.fillStyle = 'rgba(148,163,184,0.7)'
    ctx.fillText(`Alt: ${altitude.toLocaleString()} km`, 12, H - 48)
    ctx.fillText(`v = ${(vOrbit / 1000).toFixed(2)} km/s`, 12, H - 30)
    ctx.fillText(`T = ${period.toFixed(0)} min`, 12, H - 12)

    if (running) angRef.current += angSpeed
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

// ═══════════════════════════════════════════════════════════
// 9. LEIS DE NEWTON
// F = ma — bloco em superfície com vetores de força
// ═══════════════════════════════════════════════════════════
function NewtonCanvas({ params, running }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const stateRef  = useRef({ x: 0, v: 0, t: 0 })
  useResponsiveCanvas(canvasRef)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = canvas.width, H = canvas.height

    const F    = params.force   // N
    const m    = params.mass    // kg
    const a    = F / m          // m/s²
    const mu   = 0.3            // coef. atrito

    ctx.fillStyle = '#070d1a'; ctx.fillRect(0, 0, W, H)

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)'; ctx.lineWidth = 1
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke() }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke() }

    const groundY = H * 0.68
    const blockH  = Math.min(40 + m * 0.5, 80)
    const blockW  = Math.min(50 + m * 0.5, 100)

    // Superfície
    ctx.fillStyle = 'rgba(30,41,59,0.8)'
    ctx.fillRect(0, groundY, W, H - groundY)
    // Textura do chão
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'; ctx.lineWidth = 1
    for (let x = 0; x < W; x += 24) {
      ctx.beginPath(); ctx.moveTo(x, groundY); ctx.lineTo(x - 12, groundY + 16); ctx.stroke()
    }
    ctx.strokeStyle = 'rgba(34,211,238,0.25)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(0, groundY); ctx.lineTo(W, groundY); ctx.stroke()

    // Física (integração simples)
    if (running) {
      const dt   = 0.016
      const fr   = mu * m * 9.8  // força de atrito
      const aNet = (F - fr) / m
      stateRef.current.v += aNet * dt
      stateRef.current.x += stateRef.current.v * dt
      if (stateRef.current.x > W * 0.6) {
        stateRef.current.x = -blockW
        stateRef.current.v = 0
      }
    }

    const bx = W * 0.15 + stateRef.current.x * 40
    const by = groundY - blockH

    // Rastro
    ctx.fillStyle = 'rgba(34,211,238,0.04)'
    ctx.fillRect(W * 0.15 - 20, by + blockH - 3, Math.max(0, stateRef.current.x * 40), 3)

    // Bloco
    const blockGrad = ctx.createLinearGradient(bx, by, bx, by + blockH)
    blockGrad.addColorStop(0, '#3b82f6'); blockGrad.addColorStop(1, '#1d4ed8')
    ctx.fillStyle = blockGrad
    ctx.beginPath(); ctx.roundRect(bx, by, blockW, blockH, 4); ctx.fill()
    ctx.strokeStyle = 'rgba(34,211,238,0.4)'; ctx.lineWidth = 1.5; ctx.stroke()

    // Massa no bloco
    ctx.fillStyle = 'white'; ctx.font = `bold ${Math.min(14, blockH * 0.3)}px monospace`
    ctx.textAlign = 'center'; ctx.fillText(`${m} kg`, bx + blockW/2, by + blockH/2 + 4)

    // Vetor Força aplicada (→)
    const arrowLen = Math.min(F * 0.4, 100)
    drawArrow(ctx, bx + blockW, by + blockH / 2, bx + blockW + arrowLen, by + blockH / 2, '#22d3ee', `F=${F}N`)

    // Vetor Atrito (←)
    const frArrowLen = Math.min(mu * m * 9.8 * 0.4, 60)
    if (running && stateRef.current.v > 0.01) {
      drawArrow(ctx, bx, by + blockH * 0.7, bx - frArrowLen, by + blockH * 0.7, '#f97316', `fr=${(mu*m*9.8).toFixed(1)}N`)
    }

    // Vetor Peso (↓)
    const wLen = Math.min(m * 0.3, 50)
    drawArrow(ctx, bx + blockW/2, by + blockH, bx + blockW/2, by + blockH + wLen, '#4ade80', `P=${(m*9.8).toFixed(0)}N`)

    // Acelerômetro
    ctx.textAlign = 'left'; ctx.font = '12px monospace'
    ctx.fillStyle = 'rgba(148,163,184,0.7)'
    ctx.fillText(`F = m·a  →  ${F} = ${m} × ${a.toFixed(2)} m/s²`, 12, H - 32)
    ctx.fillStyle = '#22d3ee'
    ctx.fillText(`v = ${Math.abs(stateRef.current.v).toFixed(2)} m/s`, 12, H - 14)

    if (running) stateRef.current.t++
    animRef.current = requestAnimationFrame(draw)
  }, [params, running])

  useEffect(() => {
    stateRef.current = { x: 0, v: 0, t: 0 }
    animRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animRef.current)
  }, [draw])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" style={{ minHeight: 320 }} />
}

function drawArrow(ctx, x1, y1, x2, y2, color, label) {
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.sqrt(dx*dx + dy*dy)
  if (len < 2) return
  const nx = dx/len, ny = dy/len
  ctx.strokeStyle = color; ctx.lineWidth = 2.5
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
  // Ponta
  const hs = 8
  ctx.beginPath()
  ctx.moveTo(x2, y2)
  ctx.lineTo(x2 - hs*(nx+ny*0.5), y2 - hs*(ny-nx*0.5))
  ctx.lineTo(x2 - hs*(nx-ny*0.5), y2 - hs*(ny+nx*0.5))
  ctx.closePath(); ctx.fillStyle = color; ctx.fill()
  // Label
  if (label) {
    ctx.fillStyle = color; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'
    ctx.fillText(label, (x1+x2)/2, (y1+y2)/2 - 10)
  }
}

// ═══════════════════════════════════════════════════════════
// Switch: roteador de simulações por ID
// PARA ADICIONAR: crie um componente Canvas e adicione o case
// ═══════════════════════════════════════════════════════════
function SimulationCanvas({ id, params, running, onStart }) {
  const props = { params, running }

  switch (id) {
    case 'orbitas-planetarias':
      return <OrbitCanvas {...props} />
    case 'pendulo-simples':
      return <PenduloCanvas {...props} />
    case 'circuito-eletrico':
    case 'leis-newton':   // leis-newton usa canvas semelhante
      return id === 'circuito-eletrico'
        ? <CircuitoCanvas {...props} />
        : <NewtonCanvas {...props} />
    case 'ondas-som':
      return <OndasCanvas {...props} />
    case 'fotossintese':
      return <FotossintesCanvas {...props} />
    case 'reacoes-quimicas':
      return <ReacoesCanvas {...props} />
    case 'sistema-solar-completo':
      return <SistemaSolarCanvas {...props} />
    case 'satelites-artificiais':
      return <SateliteCanvas {...props} />
    default:
      // Fallback genérico para simulações não implementadas
      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 min-h-[320px]">
          {!running ? (
            <>
              <button
                onClick={onStart}
                className="w-16 h-16 rounded-full border-2 border-sl-cyan flex items-center justify-center
                           hover:bg-sl-cyan/10 transition-all duration-200 shadow-[0_0_24px_rgba(0,212,255,0.2)]"
              >
                <Play size={24} className="text-sl-cyan translate-x-0.5" />
              </button>
              <p className="text-sl-cyan text-[0.83rem] font-semibold">Área da Simulação</p>
              <p className="text-sl-muted text-[0.75rem]">Clique para iniciar</p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full border-2 border-sl-cyan/30 border-t-sl-cyan animate-spin" />
              <p className="text-sl-dim text-[0.83rem]">Simulação em execução…</p>
            </>
          )}
        </div>
      )
  }
}

// ═══════════════════════════════════════════════════════════
// Componente principal da página
// ═══════════════════════════════════════════════════════════
export default function SimulationDetail() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const sim      = getSimulationById(id)

  const [values,  setValues]  = useState(() =>
    sim ? Object.fromEntries(sim.controls.map(c => [c.id, c.default])) : {}
  )
  const [applied, setApplied] = useState(() =>
    sim ? Object.fromEntries(sim.controls.map(c => [c.id, c.default])) : {}
  )
  const [running, setRunning] = useState(false)

  if (!sim) return (
    <div className="max-w-7xl mx-auto px-4 py-32 text-center">
      <p className="text-sl-dim">Simulação não encontrada.</p>
      <button onClick={() => navigate('/simulacoes')} className="mt-4 text-sl-cyan hover:underline">
        Voltar às simulações
      </button>
    </div>
  )

  const relatedSims = (sim.relatedIds ?? [])
    .map(rid => getSimulationById(rid)).filter(Boolean).slice(0, 3)

  // Auto-inicia simulações com canvas próprio
  const hasOwnCanvas = [
    'orbitas-planetarias','pendulo-simples','circuito-eletrico',
    'ondas-som','fotossintese','reacoes-quimicas','sistema-solar-completo',
    'satelites-artificiais','leis-newton',
  ].includes(id)

  const effectiveRunning = hasOwnCanvas ? true : running

  function handleApply() { setApplied({ ...values }); setRunning(true) }
  function handleReset() {
    const d = Object.fromEntries(sim.controls.map(c => [c.id, c.default]))
    setValues(d); setApplied(d); setRunning(false)
  }

  return (
    <div className="page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[0.82rem] text-sl-dim mb-8">
          <Link to="/"           className="hover:text-sl-text transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link to="/simulacoes" className="hover:text-sl-text transition-colors">Simulações</Link>
          <ChevronRight size={13} />
          <span className="text-sl-cyan">{sim.category}</span>
        </nav>

        <div className="flex items-center gap-2 mb-5">
          <CategoryBadge category={sim.category} />
          <LevelBadge level={sim.level} />
        </div>

        <h1 className="font-display font-800 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-sl-text mb-4 max-w-3xl">
          {sim.subtitle}
        </h1>
        <p className="text-sl-dim text-[0.95rem] leading-relaxed mb-10 max-w-3xl">
          {sim.description}
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Esquerda: Canvas + Controles */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-sl-border bg-[#040a14]" style={{ minHeight: 360 }}>
              <div style={{ height: 360 }}>
                <SimulationCanvas
                  id={id}
                  params={applied}
                  running={effectiveRunning}
                  onStart={() => setRunning(true)}
                />
              </div>
            </div>

            {/* Controles */}
            <div className="bg-sl-card rounded-2xl border border-sl-border p-6">
              <h2 className="flex items-center gap-2 font-display font-700 text-[1rem] text-sl-text mb-6">
                <Info size={16} className="text-sl-cyan" /> Controles da Simulação
              </h2>
              <div className="flex flex-col gap-7">
                {sim.controls.map(ctrl => (
                  <div key={ctrl.id}>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sl-dim text-[0.88rem] font-500">{ctrl.label}</label>
                      <span className="text-sl-cyan text-[0.88rem] font-700 font-display">
                        {Number(values[ctrl.id]).toFixed(ctrl.step < 1 ? String(ctrl.step).split('.')[1]?.length ?? 1 : 0)}
                        {' '}<span className="text-sl-dim text-[0.78rem] font-400">{ctrl.unit}</span>
                      </span>
                    </div>
                    <input
                      type="range"
                      min={ctrl.min} max={ctrl.max} step={ctrl.step}
                      value={values[ctrl.id]}
                      onChange={e => setValues(v => ({ ...v, [ctrl.id]: parseFloat(e.target.value) }))}
                      className="sim-slider"
                    />
                    <div className="flex justify-between text-sl-muted text-[0.72rem] mt-1.5">
                      <span>{ctrl.min}</span><span>{ctrl.max}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleApply}
                  className="flex-1 py-3 rounded-xl font-display font-700 text-[0.9rem]
                             bg-sl-cyan text-sl-bg hover:shadow-[0_0_24px_rgba(0,212,255,0.4)]
                             hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200
                             flex items-center justify-center gap-2"
                >
                  {running ? <><Pause size={15} /> Aplicar Mudanças</> : <><Play size={15} /> Iniciar Simulação</>}
                </button>
                <button
                  onClick={handleReset}
                  className="sm:w-auto px-6 py-3 rounded-xl font-display font-700 text-[0.9rem]
                             border border-sl-border text-sl-dim hover:border-white/20 hover:text-sl-text
                             hover:bg-sl-card2 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <RotateCcw size={14} /> Resetar
                </button>
              </div>
            </div>
          </div>

          {/* Direita: Sidebar */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 flex flex-col gap-6">
            <div className="bg-sl-card rounded-2xl border border-sl-border p-6">
              <h3 className="font-display font-700 text-[1rem] text-sl-text mb-3">Sobre esta simulação</h3>
              <p className="text-sl-dim text-[0.85rem] leading-relaxed mb-5">{sim.about}</p>
              <div>
                <p className="text-sl-muted text-[0.72rem] font-700 tracking-widest uppercase mb-3">Conceitos Relacionados</p>
                <div className="flex flex-wrap gap-2">
                  {sim.concepts.map(c => (
                    <span key={c} className="px-3 py-1 rounded-full text-[0.75rem] font-500
                                             border border-sl-border text-sl-dim
                                             hover:border-sl-cyan/40 hover:text-sl-cyan cursor-default
                                             transition-all duration-200">{c}</span>
                  ))}
                </div>
              </div>
            </div>
            {relatedSims.length > 0 && (
              <div>
                <h3 className="font-display font-700 text-[1rem] text-sl-text mb-4">Simulações Relacionadas</h3>
                <div className="flex flex-col gap-3">
                  {relatedSims.map(rs => <SimCardRelated key={rs.id} sim={rs} />)}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}

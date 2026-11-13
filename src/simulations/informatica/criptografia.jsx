// ═══════════════════════════════════════════════════════════════════
// INFORMÁTICA — Criptografia: o que quebra e o que resiste
//
// PAINEL 1 — CIFRA DE CÉSAR, e o ataque que a destrói.
// Deslocar as letras parece seguro até você contar as LETRAS. Cada idioma
// tem uma assinatura de frequências (em português, A ≈ 14 %, E ≈ 12 %,
// O ≈ 10 %). A cifra de César não esconde isso: ela só EMPURRA o
// histograma para o lado.
//
// Então testam-se as 25 chaves possíveis e escolhe-se a que melhor casa
// com o português, por qui-quadrado:
//
//     χ² = Σ (observado − esperado)² / esperado
//
// A menor χ² é a chave. O ataque roda no mesmo frame — nem 26 tentativas
// um computador precisa suar. Uma cifra com 25 chaves possíveis não é
// criptografia, é um enigma de jornal.
//
// PAINEL 2 — RSA, com aritmética modular DE VERDADE.
//   p = 61, q = 53  →  n = 3233,  φ(n) = 3120
//   e = 17  (público)   ·   d = 2753  (privado, e·d ≡ 1 mod φ)
//   cifrar:   c = mᵉ mod n          decifrar:  m = cᵈ mod n
//
// Os números são calculados, não fingidos. A segurança não vem de
// esconder o algoritmo — e, n são PÚBLICOS — mas de fatorar n. Com 61×53
// é trivial. Com dois primos de 1024 bits, todos os computadores do
// planeta levariam mais que a idade do universo.
// ═══════════════════════════════════════════════════════════════════
import { useCallback } from 'react'
import {
  SimCanvas, C, Q, ACCENT, clear, text, caption, readout,
  hexA, clamp,
} from '../engine'

const A = ACCENT['informatica']

const PLAIN = 'ATAQUE AO AMANHECER'

// Frequência das letras em português (%), fonte: corpora padrão
const PT_FREQ = {
  A: 14.63, B: 1.04, C: 3.88, D: 4.99, E: 12.57, F: 1.02, G: 1.30,
  H: 1.28, I: 6.18, J: 0.40, K: 0.02, L: 2.78, M: 4.74, N: 5.05,
  O: 10.73, P: 2.52, Q: 1.20, R: 6.53, S: 7.81, T: 4.34, U: 4.63,
  V: 1.67, W: 0.01, X: 0.21, Y: 0.01, Z: 0.47,
}
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const caesar = (txt, k) => txt.replace(/[A-Z]/g, ch =>
  ALPHA[(ALPHA.indexOf(ch) + k + 26) % 26])

/** Exponenciação modular por quadrados sucessivos — é assim que RSA roda. */
function modPow(base, exp, mod) {
  let result = 1n
  let b = BigInt(base) % BigInt(mod)
  let e = BigInt(exp)
  const m = BigInt(mod)
  while (e > 0n) {
    if (e & 1n) result = (result * b) % m
    b = (b * b) % m
    e >>= 1n
  }
  return Number(result)
}

/** Qui-quadrado do texto contra as frequências do português. */
function chiSq(txt) {
  const letters = txt.replace(/[^A-Z]/g, '')
  const n = letters.length
  if (n === 0) return Infinity
  const counts = {}
  for (const ch of letters) counts[ch] = (counts[ch] || 0) + 1
  let chi = 0
  for (const L of ALPHA) {
    const expected = (PT_FREQ[L] / 100) * n
    const observed = counts[L] || 0
    if (expected > 0) chi += ((observed - expected) ** 2) / expected
  }
  return chi
}

// RSA com primos pequenos — didáticos, mas as contas são reais
const RSA_P = 61, RSA_Q = 53
const RSA_N = RSA_P * RSA_Q          // 3233
const RSA_PHI = (RSA_P - 1) * (RSA_Q - 1)  // 3120
const RSA_E = 17
const RSA_D = 2753                    // e·d ≡ 1 (mod φ)

export default function CriptografiaCanvas({ params, running, resetKey }) {
  const setup = useCallback(() => ({
    reveal: 0,     // quantos caracteres já foram cifrados
    t: 0,
    rsaIdx: 0,
    rsaT: 0,
  }), [])

  const step = useCallback((s, dt, p) => {
    const speed = p.speed ?? 1
    s.t += dt
    s.reveal += dt * speed * 5
    if (s.reveal > PLAIN.length + 6) s.reveal = 0

    s.rsaT += dt * speed * 0.9
    if (s.rsaT >= 1) {
      s.rsaT = 0
      s.rsaIdx = (s.rsaIdx + 1) % PLAIN.replace(/ /g, '').length
    }
  }, [])

  const render = useCallback((ctx, s, p, view) => {
    const { w, h } = view
    clear(ctx, view)

    const shift = Math.round(p.shift ?? 3)
    const cipher = caesar(PLAIN, shift)

    // ── O ATAQUE: testa as 25 chaves e escolhe a melhor por χ² ────
    const attacks = []
    for (let k = 1; k < 26; k++) {
      const guess = caesar(cipher, -k)
      attacks.push({ k, guess, chi: chiSq(guess) })
    }
    attacks.sort((a, b) => a.chi - b.chi)
    const best = attacks[0]
    const broken = best.k === shift

    const compact = w < 760
    const colW = compact ? w - 36 : (w - 60) / 2
    const lx = 20
    const rx = compact ? 20 : lx + colW + 24

    // ══════════ PAINEL 1 — CÉSAR ═════════════════════════════════
    caption(ctx, 'Cifra de César', lx, 24, A)

    let ty = 48
    text(ctx, 'texto claro', lx, ty, { size: 8.5, color: C.muted })
    ty += 16
    const cellW = Math.min(15, colW / PLAIN.length)
    for (let i = 0; i < PLAIN.length; i++) {
      const X = lx + i * cellW
      ctx.fillStyle = hexA(C.ink, 0.10)
      if (PLAIN[i] !== ' ') ctx.fillRect(X, ty - 10, cellW - 1.5, 14)
      text(ctx, PLAIN[i], X + cellW / 2 - 0.5, ty + 1,
        { size: 8.5, weight: 700, color: C.dim, align: 'center' })
    }

    // seta do deslocamento
    ty += 24
    text(ctx, `↓  deslocar +${shift}`, lx, ty, { size: 9, weight: 700, color: Q.warn })

    ty += 20
    text(ctx, 'texto cifrado', lx, ty, { size: 8.5, color: C.muted })
    ty += 16
    for (let i = 0; i < PLAIN.length; i++) {
      const X = lx + i * cellW
      const shown = i < s.reveal
      ctx.fillStyle = shown ? hexA(A, 0.30) : hexA(C.ink, 0.05)
      if (PLAIN[i] !== ' ') ctx.fillRect(X, ty - 10, cellW - 1.5, 14)
      if (shown) {
        text(ctx, cipher[i], X + cellW / 2 - 0.5, ty + 1,
          { size: 8.5, weight: 700, color: A, align: 'center' })
      }
    }

    // ── Histograma de frequências ────────────────────────────────
    ty += 34
    caption(ctx, 'O ataque: contar as letras', lx, ty, Q.danger)
    ty += 14

    const hh = clamp(h * 0.20, 44, 90)
    const bw = colW / 26
    const cipherLetters = cipher.replace(/[^A-Z]/g, '')
    const counts = {}
    for (const ch of cipherLetters) counts[ch] = (counts[ch] || 0) + 1
    const maxC = Math.max(1, ...Object.values(counts))
    const maxF = Math.max(...Object.values(PT_FREQ))

    for (let i = 0; i < 26; i++) {
      const L = ALPHA[i]
      const X = lx + i * bw

      // esperado no português (fantasma)
      const eh = (PT_FREQ[L] / maxF) * hh
      ctx.fillStyle = hexA(C.ink, 0.10)
      ctx.fillRect(X, ty + hh - eh, bw - 1, eh)

      // observado no texto cifrado
      const oh = ((counts[L] || 0) / maxC) * hh
      ctx.fillStyle = hexA(Q.danger, 0.8)
      ctx.fillRect(X, ty + hh - oh, bw - 1, oh)

      if (bw > 8) {
        text(ctx, L, X + bw / 2, ty + hh + 10,
          { size: 6.5, color: C.muted, align: 'center' })
      }
    }
    ty += hh + 22

    ctx.fillStyle = hexA(C.ink, 0.15)
    ctx.fillRect(lx, ty - 6, 8, 6)
    text(ctx, 'esperado (português)', lx + 12, ty, { size: 8, color: C.muted })
    ctx.fillStyle = Q.danger
    ctx.fillRect(lx + 130, ty - 6, 8, 6)
    text(ctx, 'observado (cifrado)', lx + 142, ty, { size: 8, color: C.muted })

    ty += 22
    text(ctx, `chave quebrada em 25 tentativas: +${best.k}`, lx, ty,
      { size: 9.5, weight: 700, color: broken ? Q.danger : Q.warn })
    ty += 15
    text(ctx, `"${best.guess}"`, lx, ty,
      { size: 9, weight: 700, color: broken ? Q.potential : C.dim })
    ty += 15
    text(ctx, `χ² = ${best.chi.toFixed(1)}  (menor = melhor encaixe)`, lx, ty,
      { size: 8.5, color: C.muted })

    if (compact) return

    // ══════════ PAINEL 2 — RSA ═══════════════════════════════════
    caption(ctx, 'RSA · aritmética modular real', rx, 24, Q.potential)

    let ry = 50
    // Chaves
    const kv = (label, val, col) => {
      text(ctx, label, rx, ry, { size: 9, color: C.muted })
      text(ctx, val, rx + colW, ry, { size: 9.5, weight: 700, color: col, align: 'right' })
      ry += 16
    }
    kv('p, q  (primos secretos)', `${RSA_P}, ${RSA_Q}`, Q.danger)
    kv('n = p·q  (público)', `${RSA_N}`, Q.potential)
    kv('φ(n) = (p−1)(q−1)', `${RSA_PHI}`, C.dim)
    kv('e  (expoente público)', `${RSA_E}`, Q.potential)
    kv('d  (expoente privado)', `${RSA_D}`, Q.danger)

    ry += 8
    ctx.strokeStyle = C.line
    ctx.lineWidth = 1
    ctx.beginPath(); ctx.moveTo(rx, ry); ctx.lineTo(rx + colW, ry); ctx.stroke()
    ry += 20

    // Cifra caractere por caractere, de verdade
    const letters = PLAIN.replace(/ /g, '')
    const idx = s.rsaIdx % letters.length
    const ch = letters[idx]
    const m = ch.charCodeAt(0)                 // mensagem = código ASCII
    const c = modPow(m, RSA_E, RSA_N)          // cifrar
    const back = modPow(c, RSA_D, RSA_N)       // decifrar

    text(ctx, 'cifrando o caractere', rx, ry, { size: 8.5, color: C.muted })
    ry += 22
    text(ctx, `'${ch}'`, rx, ry, { size: 20, weight: 700, color: C.ink })
    text(ctx, `m = ${m}`, rx + 42, ry - 3, { size: 10, color: C.dim })
    ry += 26

    text(ctx, `c = m^${RSA_E} mod ${RSA_N}`, rx, ry, { size: 9.5, weight: 700, color: Q.potential })
    ry += 17
    text(ctx, `c = ${m}^${RSA_E} mod ${RSA_N} = ${c}`, rx, ry, { size: 10, weight: 700, color: A })
    ry += 26

    text(ctx, `m = c^${RSA_D} mod ${RSA_N}`, rx, ry, { size: 9.5, weight: 700, color: Q.danger })
    ry += 17
    const okRsa = back === m
    text(ctx, `m = ${c}^${RSA_D} mod ${RSA_N} = ${back}  '${String.fromCharCode(back)}'`,
      rx, ry, { size: 10, weight: 700, color: okRsa ? Q.potential : Q.danger })
    ry += 28

    ctx.strokeStyle = C.line
    ctx.beginPath(); ctx.moveTo(rx, ry - 10); ctx.lineTo(rx + colW, ry - 10); ctx.stroke()

    text(ctx, 'quebrar RSA = fatorar n.', rx, ry + 6, { size: 9, weight: 700, color: Q.warn })
    ry += 21
    text(ctx, `3233 = 61 × 53 → trivial.`, rx, ry, { size: 8.5, color: C.muted })
    ry += 13
    text(ctx, 'com primos de 1024 bits, nem todos os', rx, ry, { size: 8.5, color: C.muted })
    ry += 13
    text(ctx, 'computadores do planeta dariam conta', rx, ry, { size: 8.5, color: C.muted })
    ry += 13
    text(ctx, 'antes do fim do universo.', rx, ry, { size: 8.5, color: C.muted })

    // ══ Leituras ═════════════════════════════════════════════════
    readout(ctx, w - 14, h - 14 - 100, [
      { k: 'César · chaves', v: '25', c: Q.danger },
      { k: 'César · quebra', v: 'instantânea', c: Q.danger },
      { k: 'RSA · chaves',   v: '~2^1024', c: Q.potential },
      { k: 'RSA · verifica', v: okRsa ? 'm = (mᵉ)ᵈ ✓' : 'erro', c: okRsa ? Q.potential : Q.danger },
    ], { title: 'Segurança', anchor: 'right', accent: A, minWidth: 178 })
  }, [])

  return (
    <SimCanvas
      setup={setup} step={step} render={render}
      params={params} running={running} resetKey={resetKey}
    />
  )
}

// ─────────────────────────────────────────────────────────────
// components/Reveal.jsx
// Animation primitives — agency-grade reveal system:
//  · BlurReveal    — entrada seca: sobe 8px e aparece em 300ms (sem blur)
//  · MaskReveal    — content slides up from behind a mask
//  · SplitText     — word-by-word stagger reveal
//  · Stagger / StaggerItem — parent/child staggered reveals
//  · ParallaxWrap  — scroll-driven vertical parallax
//  · ScaleFade     — scale + fade on scroll
// Shared ease: [0.16, 1, 0.3, 1] (easeOutExpo-ish)
//
// Acessibilidade: todos respeitam `prefers-reduced-motion`. Quando o
// usuário pede menos movimento, trocamos deslocamento/blur/escala por
// um fade simples de opacidade (opacidade não é "movimento") — o
// conteúdo aparece calmo, sem transladar nem borrar.
// ─────────────────────────────────────────────────────────────
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const EASE = [0.16, 1, 0.3, 1]
export const EASE_IN = [0.7, 0, 0.84, 0]

// ── BlurReveal ──────────────────────────────────────────────
export function BlurReveal({ children, delay = 0, className = '', once = true, as = 'div' }) {
  const Tag = motion[as] ?? motion.div
  const reduce = useReducedMotion()
  return (
    <Tag
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: reduce ? 0.2 : 0.3, delay: reduce ? 0 : delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  )
}

// ── MaskReveal ──────────────────────────────────────────────
export function MaskReveal({ children, delay = 0, className = '', once = true }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, margin: '-40px' }}
        transition={{ duration: 0.2, ease: EASE }}
      >
        {children}
      </motion.div>
    )
  }
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '120%' }}
        whileInView={{ y: 0 }}
        viewport={{ once, margin: '-40px' }}
        transition={{ duration: 0.3, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// ── SplitText — word-by-word reveal ─────────────────────────
export function SplitText({
  children,
  className = '',
  as = 'div',
  once = true,
  delay = 0,
  staggerDelay = 0.03,
}) {
  const reduce = useReducedMotion()
  if (typeof children !== 'string') return <div className={className}>{children}</div>

  const Tag = motion[as] ?? motion.div

  // Reduced motion: um único fade, sem quebra por palavra nem translação.
  if (reduce) {
    return (
      <Tag
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once, margin: '-60px' }}
        transition={{ duration: 0.2, delay, ease: EASE }}
        className={className}
      >
        {children}
      </Tag>
    )
  }

  const words = children.split(' ')

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      className={className}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span key={i} className="split-word" aria-hidden="true">
          <motion.span
            variants={{
              hidden: { y: '110%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: delay + i * staggerDelay,
                  ease: EASE,
                },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}

// ── Stagger container / item ────────────────────────────────
const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
}

const staggerChild = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
}

const staggerChildReduced = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, ease: EASE } },
}

export function Stagger({ children, className = '', once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={staggerParent}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div variants={reduce ? staggerChildReduced : staggerChild} className={className}>
      {children}
    </motion.div>
  )
}

// ── ParallaxWrap — scroll-driven vertical offset ────────────
export function ParallaxWrap({
  children,
  speed = 0.15,
  className = '',
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`])

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

// ── ScaleFade — element scales and fades based on scroll ────
export function ScaleFade({
  children,
  className = '',
  scaleFrom = 0.92,
  scaleTo = 1,
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [scaleFrom, scaleTo, scaleTo, scaleFrom])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4])

  if (reduce) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

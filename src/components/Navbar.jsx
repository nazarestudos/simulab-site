// ─────────────────────────────────────────────────────────────
// components/Navbar.jsx
// Premium floating header — transparent at top, gains glass
// opaque black bar on scroll. No glass, no blur.
// ─────────────────────────────────────────────────────────────
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EASE, EASE_IN } from './Reveal'
import { RollText } from './Kinetic'

// ── SimuLab logo mark ───────────────────────────────────────
function LogoMark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#ffffff" />
      <circle cx="16" cy="16" r="6" stroke="#000000" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="2" fill="#000000" />
      <line x1="16" y1="4"  x2="16" y2="10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="22" x2="16" y2="28" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="4"  y1="16" x2="10" y2="16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="16" x2="28" y2="16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const NAV_ITEMS = [
  { label: 'Início',   href: '/'                  },
  { label: 'Acervo',   href: '/acervo'            },
  { label: 'Sobre',    href: '/sobre'             },
]

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.15, ease: EASE_IN },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: EASE },
  },
}

const mobileItemVariants = {
  closed: { opacity: 0, x: -6 },
  open: i => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: i * 0.03, ease: EASE },
  }),
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  function isActive(href) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Fundo opaco que aparece ao rolar (só opacidade anima) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-black border-b border-sl-border2
                    transition-opacity duration-200 ease-out ${scrolled ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="relative container-xl flex items-center justify-between h-[var(--nav-height)]">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="SimuLab — Página inicial"
        >
          <div>
            <LogoMark />
          </div>
          <span className="font-display font-700 text-[1rem] tracking-tight text-sl-text">
            SimuLab
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="relative px-4 py-2 text-[0.875rem] font-body font-500 transition-colors duration-300 group"
            >
              <span className={isActive(href) ? 'text-sl-text' : 'text-sl-dim group-hover:text-sl-text'}>
                <RollText>{label}</RollText>
              </span>
              {/* Active indicator */}
              <motion.span
                className="absolute bottom-1 left-4 right-4 h-px bg-white"
                initial={false}
                animate={{ scaleX: isActive(href) ? 1 : 0, opacity: isActive(href) ? 1 : 0 }}
                transition={{ duration: 0.2, ease: EASE }}
                style={{ originX: 0 }}
              />
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <Link
          to="/acervo?sim=1"
          data-cursor="frame"
          className="hidden md:block px-5 py-2.5 text-[0.875rem] font-700
                     text-black bg-white border-2 border-white
                     hover:bg-black hover:text-white
                     transition-colors duration-200"
        >
          <RollText>Simulações</RollText>
        </Link>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2.5 border border-sl-border text-sl-text
                     active:scale-90 transition-transform duration-200"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 right-0 px-4 pt-2 pb-6"
          >
            <div className="border border-sl-border2 bg-black p-2 flex flex-col">
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.div key={href} custom={i} variants={mobileItemVariants}>
                  <Link
                    to={href}
                    className={[
                      'block px-4 py-3.5 text-[1rem] font-500 transition-colors duration-200 border-l-2',
                      isActive(href)
                        ? 'text-sl-text bg-white/8 border-white'
                        : 'text-sl-dim hover:text-sl-text hover:bg-white/4 border-transparent',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={NAV_ITEMS.length} variants={mobileItemVariants}>
                <Link
                  to="/acervo?sim=1"
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-3.5
                             font-700 text-[1rem] bg-white text-black"
                >
                  Simulações
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { LogoMark }

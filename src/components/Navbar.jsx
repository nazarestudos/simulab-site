// ─────────────────────────────────────────────────────────────
// components/Navbar.jsx
// Top navigation bar — animação hambúrguer, slide-down mobile,
// hover effects em todos os links e logo.
// ─────────────────────────────────────────────────────────────
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

// ── SimuLab logo mark ────────────────────────────────────────
function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0ea5e9" />
      <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="16" cy="16" r="2" fill="white" />
      <line x1="16" y1="4"  x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="22" x2="16" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="4"  y1="16" x2="10" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="16" x2="28" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ── Nav items ────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home',       href: '/'           },
  { label: 'Notícias',   href: '/noticias'   },
  { label: 'Simulações', href: '/simulacoes' },
  { label: 'Sobre',      href: '/sobre'      },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Fecha menu ao trocar de rota
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Sombra extra ao rolar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function isActive(href) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-sl-border transition-shadow duration-300"
      style={{
        background: 'rgba(7,12,24,0.88)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          aria-label="SimuLab — Página inicial"
        >
          <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <LogoMark />
          </div>
          <span className="font-display font-700 text-[1.15rem] tracking-tight text-sl-text
                           group-hover:text-sl-cyan transition-colors duration-200">
            SimuLab
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                to={href}
                className={[
                  'relative px-4 py-2 text-[0.9rem] font-body font-500 rounded-lg',
                  'transition-all duration-200 hover:scale-[1.04] active:scale-95',
                  isActive(href)
                    ? 'text-sl-text font-600'
                    : 'text-sl-dim hover:text-sl-text hover:bg-white/5',
                ].join(' ')}
              >
                {label}
                {/* Active indicator dot */}
                {isActive(href) && (
                  <span className="block mx-auto mt-0.5 h-0.5 w-4 bg-sl-cyan rounded-full
                                   shadow-[0_0_6px_rgba(0,212,255,0.7)]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA Desktop ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/simulacoes"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.85rem]
                       font-display font-600 bg-sl-cyan text-sl-bg
                       hover:bg-cyan-400 hover:shadow-[0_0_18px_rgba(0,212,255,0.4)]
                       hover:scale-105 active:scale-95
                       transition-all duration-300"
          >
            Explorar
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          id="navbar-menu-toggle"
          className="md:hidden p-2 rounded-lg text-sl-dim hover:text-sl-text
                     hover:bg-white/5 active:scale-90
                     transition-all duration-200"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block transition-all duration-300"
            style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={[
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <div className="border-t border-sl-border px-4 py-3 flex flex-col gap-1"
          style={{ background: 'rgba(11,18,34,0.97)', backdropFilter: 'blur(16px)' }}>
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className={[
                'px-4 py-3 rounded-xl text-[0.9rem] font-500 transition-all duration-200',
                'hover:translate-x-1 active:scale-95',
                isActive(href)
                  ? 'text-sl-cyan bg-sl-cyan/10 border border-sl-cyan/20'
                  : 'text-sl-dim hover:text-sl-text hover:bg-white/5',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          {/* Mobile CTA */}
          <Link
            to="/simulacoes"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                       font-display font-600 text-[0.9rem]
                       bg-sl-cyan text-sl-bg hover:bg-cyan-400
                       transition-all duration-200 active:scale-95"
          >
            Explorar Simulações
          </Link>
        </div>
      </div>
    </header>
  )
}

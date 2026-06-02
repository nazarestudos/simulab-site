// ─────────────────────────────────────────────────────────────
// components/Navbar.jsx
// Top navigation bar.
// EDIT HERE: change nav links, logo text, or add new routes.
// ─────────────────────────────────────────────────────────────
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

// ── SimuLab logo mark as inline SVG ─────────────────────────
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

  // Determine active link: hash-based path matching
  function isActive(href) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sl-border"
      style={{ background: 'rgba(7,12,24,0.85)', backdropFilter: 'blur(16px)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <LogoMark />
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
                  'px-4 py-2 text-[0.9rem] font-body font-500 rounded-lg transition-all duration-200',
                  isActive(href)
                    ? 'text-sl-text font-600'
                    : 'text-sl-dim hover:text-sl-text hover:bg-white/5',
                ].join(' ')}
              >
                {label}
                {/* Active underline dot */}
                {isActive(href) && (
                  <span className="block mx-auto mt-0.5 h-0.5 w-4 bg-sl-cyan rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 text-sl-dim hover:text-sl-text transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div className="md:hidden border-t border-sl-border bg-sl-bg2 px-4 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setMenuOpen(false)}
              className={[
                'px-4 py-3 rounded-lg text-[0.9rem] font-500 transition-colors',
                isActive(href)
                  ? 'text-sl-cyan bg-sl-cyan-dim'
                  : 'text-sl-dim hover:text-sl-text hover:bg-white/5',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

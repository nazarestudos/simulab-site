// ─────────────────────────────────────────────────────────────
// components/Footer.jsx
// Site footer with logo and nav links.
// EDIT HERE: update links, social icons, or copyright year.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-sl-border bg-sl-bg2 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Top row: logo + nav ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#0ea5e9" />
              <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="16" cy="16" r="2" fill="white" />
              <line x1="16" y1="4"  x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="16" y1="22" x2="16" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="4"  y1="16" x2="10" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="22" y1="16" x2="28" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-display font-700 text-sl-text">SimuLab</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {[
              ['Home',       '/'],
              ['Notícias',   '/noticias'],
              ['Simulações', '/simulacoes'],
              ['Sobre',      '/sobre'],
            ].map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="text-[0.85rem] text-sl-dim hover:text-sl-text transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-sl-border mt-8 pt-6 text-center">
          <p className="text-sl-muted text-[0.8rem]">
            © {new Date().getFullYear()} SimuLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

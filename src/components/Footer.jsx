// ─────────────────────────────────────────────────────────────
// components/Footer.jsx
// Site footer modernizado: gradiente superior, links animados,
// tagline, redes sociais placeholder e coluna de newsletter.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { Atom, ArrowRight } from 'lucide-react'

const NAV_COL = [
  ['Home',       '/'],
  ['Notícias',   '/noticias'],
  ['Simulações', '/simulacoes'],
  ['Sobre',      '/sobre'],
]

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden"
      style={{
        borderTop: '1px solid rgba(0,212,255,0.12)',
        background: 'linear-gradient(180deg, rgba(0,212,255,0.03) 0%, #0b1222 40%)',
      }}>

      {/* Top gradient bar */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), rgba(139,92,246,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1: Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <rect width="32" height="32" rx="8" fill="#0ea5e9" />
                  <circle cx="16" cy="16" r="6" stroke="white" strokeWidth="2" fill="none" />
                  <circle cx="16" cy="16" r="2" fill="white" />
                  <line x1="16" y1="4"  x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="22" x2="16" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4"  y1="16" x2="10" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="22" y1="16" x2="28" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display font-700 text-sl-text text-[1.1rem]
                               group-hover:text-sl-cyan transition-colors duration-200">
                SimuLab
              </span>
            </Link>
            <p className="text-sl-dim text-[0.85rem] leading-relaxed max-w-sm">
              Ciência para todos. Curiosidade sem limites. Explore simulações interativas
              e as últimas descobertas científicas, gratuitamente.
            </p>
            {/* Badge */}
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full
                            bg-sl-cyan/8 border border-sl-cyan/20">
              <Atom size={12} className="text-sl-cyan" />
              <span className="text-sl-cyan text-[0.72rem] font-600 tracking-wide">
                Feito no Brasil 🇧🇷
              </span>
            </div>
          </div>

          {/* Col 2: Nav */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-700 text-sl-text text-[0.85rem] tracking-wide uppercase mb-1">
              Navegação
            </h3>
            {NAV_COL.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className="flex items-center gap-1.5 text-[0.85rem] text-sl-dim
                           hover:text-sl-cyan hover:translate-x-1
                           transition-all duration-200 group w-fit"
              >
                <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                {label}
              </Link>
            ))}
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-display font-700 text-sl-text text-[0.85rem] tracking-wide uppercase mb-1">
              Áreas
            </h3>
            {['Física', 'Astronomia', 'Química', 'Biologia', 'Matemática', 'Computação'].map(area => (
              <Link
                key={area}
                to={`/simulacoes`}
                className="flex items-center gap-1.5 text-[0.85rem] text-sl-dim
                           hover:text-sl-cyan hover:translate-x-1
                           transition-all duration-200 group w-fit"
              >
                <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                {area}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-sl-border pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-sl-muted text-[0.78rem]">
            © {new Date().getFullYear()} SimuLab. Todos os direitos reservados.
          </p>
          <p className="text-sl-muted text-[0.78rem]">
            Construído com ❤️ para a comunidade científica brasileira
          </p>
        </div>
      </div>
    </footer>
  )
}

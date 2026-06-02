// ─────────────────────────────────────────────────────────────
// pages/Home.jsx
// Landing page com hero starfield, ícones de categoria,
// grid de notícias e grid de simulações em destaque.
// Micro-interações, gradientes e hover effects aprimorados.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Calculator, FlaskConical, Telescope, HeartPulse, Dna, Binary, ChevronRight } from 'lucide-react'
import { getFeaturedArticles, getFeaturedSimulations } from '../data/content'
import { NewsCardFeatured } from '../components/NewsCard'
import { SimCardHome } from '../components/SimCard'

// ── Category shortcut icons ──────────────────────────────────
const HERO_CATEGORIES = [
  { label: 'Física',      Icon: Zap,          color: '#06b6d4', href: '/simulacoes' },
  { label: 'Matemática',  Icon: Calculator,   color: '#6366f1', href: '/simulacoes' },
  { label: 'Química',     Icon: FlaskConical, color: '#f59e0b', href: '/simulacoes' },
  { label: 'Astronomia',  Icon: Telescope,    color: '#f97316', href: '/simulacoes' },
  { label: 'Medicina',    Icon: HeartPulse,   color: '#ec4899', href: '/simulacoes' },
  { label: 'Biologia',    Icon: Dna,          color: '#10b981', href: '/simulacoes' },
  { label: 'Computação',  Icon: Binary,       color: '#8b5cf6', href: '/simulacoes' },
]

export default function Home() {
  const featured = getFeaturedArticles()
  const sims     = getFeaturedSimulations()

  return (
    <div className="page-enter">

      {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 55% -15%, rgba(0,212,255,0.14) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 85% 85%, rgba(249,115,22,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(139,92,246,0.06) 0%, transparent 60%),
            #070c18
          `
        }}>

        {/* Starfield */}
        <div className="starfield" aria-hidden="true" />

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating orb top-right */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="max-w-2xl">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                            border border-sl-cyan/30 bg-sl-cyan/8 backdrop-blur-sm
                            text-sl-cyan text-[0.75rem] font-600 tracking-wider uppercase mb-8
                            animate-[float-in_0.5s_ease-out_0.1s_both]">
              <span className="w-1.5 h-1.5 rounded-full bg-sl-cyan animate-pulse" />
              Plataforma Científica Interativa
            </div>

            <h1 className="font-display font-800 text-[clamp(2.6rem,5.5vw,3.8rem)] leading-[1.08]
                           text-sl-text mb-6 tracking-tight
                           animate-[float-in_0.5s_ease-out_0.2s_both]">
              Explore a Ciência<br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff 30%, #8b5cf6 100%)' }}>
                de um jeito novo
              </span>
            </h1>

            <p className="text-sl-dim text-[1rem] leading-relaxed mb-10 max-w-lg
                          animate-[float-in_0.5s_ease-out_0.3s_both]">
              Descubra as últimas descobertas científicas e experimente simulações
              interativas que transformam conceitos complexos em experiências visuais.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 animate-[float-in_0.5s_ease-out_0.4s_both]">
              <Link
                to="/noticias"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-600
                           bg-sl-cyan text-sl-bg
                           hover:bg-cyan-400 hover:shadow-[0_0_32px_rgba(0,212,255,0.5)]
                           hover:scale-105 active:scale-95
                           transition-all duration-300"
              >
                Ver Notícias
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/simulacoes"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-600
                           border border-sl-cyan/40 text-sl-cyan
                           hover:bg-sl-cyan/10 hover:border-sl-cyan
                           hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]
                           hover:scale-105 active:scale-95
                           transition-all duration-300 backdrop-blur-sm"
              >
                Ver Simulações
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Category icons row ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 pt-4">
          <div className="flex flex-wrap items-center justify-start gap-3">
            {HERO_CATEGORIES.map(({ label, Icon, color, href }, i) => (
              <Link
                key={label}
                to={href}
                className="group flex flex-col items-center gap-2 px-5 py-4 rounded-2xl
                           border border-sl-border bg-sl-card/60 backdrop-blur-sm
                           hover:border-white/20 hover:-translate-y-1.5
                           hover:shadow-lg hover:bg-sl-card
                           active:scale-95
                           transition-all duration-300 min-w-[80px]"
                style={{ animationDelay: `${0.5 + i * 0.05}s` }}
              >
                <div className="p-2 rounded-xl transition-all duration-300
                                group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <span className="text-[0.72rem] font-600 text-sl-dim
                                 group-hover:text-sl-text transition-colors duration-200">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          NOTÍCIAS EM DESTAQUE
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-sl-cyan text-[0.75rem] font-600 tracking-wider uppercase mb-2">
              Em Destaque
            </p>
            <h2 className="font-display font-700 text-[clamp(1.5rem,3vw,1.9rem)] text-sl-text">
              Notícias em Destaque
            </h2>
          </div>
          <Link
            to="/noticias"
            className="flex items-center gap-1 text-sl-cyan text-[0.88rem] font-600 shrink-0
                       hover:gap-2.5 hover:text-cyan-300 active:scale-95
                       transition-all duration-200"
          >
            Ver todas <ChevronRight size={14} />
          </Link>
        </div>

        {featured.length >= 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <NewsCardFeatured article={featured[0]} />
            <div className="flex flex-col gap-5">
              {featured.slice(1).map(a => (
                <NewsCardFeatured key={a.id} article={a} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════
          SIMULAÇÕES EM DESTAQUE
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Section background accent */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 pt-4">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-sl-cyan text-[0.75rem] font-600 tracking-wider uppercase mb-2">
                Laboratório Virtual
              </p>
              <h2 className="font-display font-700 text-[clamp(1.5rem,3vw,1.9rem)] text-sl-text">
                Simulações em Destaque
              </h2>
            </div>
            <Link
              to="/simulacoes"
              className="flex items-center gap-1 text-sl-cyan text-[0.88rem] font-600 shrink-0
                         hover:gap-2.5 hover:text-cyan-300 active:scale-95
                         transition-all duration-200"
            >
              Ver todas <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sims.map(sim => (
              <SimCardHome key={sim.id} sim={sim} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

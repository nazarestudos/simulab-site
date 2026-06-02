// ─────────────────────────────────────────────────────────────
// pages/Home.jsx
// Landing page with starfield hero, category icons,
// featured news grid, and featured simulations grid.
// EDIT HERE: update hero copy, category list, or section titles.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Calculator, FlaskConical, Telescope, HeartPulse, Dna, Binary } from 'lucide-react'
import { getFeaturedArticles, getFeaturedSimulations } from '../data/content'
import { NewsCardFeatured, NewsCard } from '../components/NewsCard'
import { SimCardHome } from '../components/SimCard'

// ── Category shortcut icons shown below the hero ────────────
const HERO_CATEGORIES = [
  { label: 'Física',      Icon: Zap,          color: '#06b6d4' },
  { label: 'Matemática',  Icon: Calculator,   color: '#6366f1' },
  { label: 'Química',     Icon: FlaskConical, color: '#f59e0b' },
  { label: 'Astronomia',  Icon: Telescope,    color: '#f97316' },
  { label: 'Medicina',    Icon: HeartPulse,   color: '#ec4899' },
  { label: 'Biologia',    Icon: Dna,          color: '#10b981' },
  { label: 'Computação',  Icon: Binary,       color: '#8b5cf6' },
]

export default function Home() {
  const featured   = getFeaturedArticles()
  const sims       = getFeaturedSimulations()

  return (
    <div className="page-enter">
      {/* ════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden
                          bg-hero-gradient">
        {/* Starfield background */}
        <div className="starfield" aria-hidden="true" />

        {/* Subtle red/orange glow top-right (matches Figma screenshot) */}
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 10%, rgba(249,115,22,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <div className="max-w-2xl">
            <h1 className="font-display font-800 text-[clamp(2.4rem,5vw,3.5rem)] leading-[1.1]
                           text-sl-text mb-6 tracking-tight">
              Explore a Ciência<br />
              <span className="text-sl-cyan">de um jeito novo</span>
            </h1>
            <p className="text-sl-dim text-[1rem] leading-relaxed mb-10 max-w-lg">
              Descubra as últimas descobertas científicas e experimente simulações
              interativas que transformam conceitos complexos em experiências visuais.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/noticias"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-display font-600
                           bg-sl-cyan text-sl-bg hover:bg-cyan-400
                           transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,212,255,0.4)]
                           hover:-translate-y-0.5 active:translate-y-0"
              >
                Ver Notícias
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/simulacoes"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-display font-600
                           border border-sl-cyan/50 text-sl-cyan
                           hover:bg-sl-cyan-dim hover:border-sl-cyan
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                Ver Simulações
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Category icons row ── */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex flex-wrap items-center justify-start gap-3">
            {HERO_CATEGORIES.map(({ label, Icon, color }) => (
              <Link
                key={label}
                to={`/noticias?cat=${label}`}
                className="flex flex-col items-center gap-2 px-5 py-4 bg-sl-card/70
                           rounded-2xl border border-sl-border
                           hover:border-white/20 hover:-translate-y-1
                           transition-all duration-200 min-w-[80px]
                           backdrop-blur-sm"
              >
                <div className="p-2 rounded-xl" style={{ background: `${color}18` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <span className="text-[0.75rem] font-600 text-sl-dim">{label}</span>
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-700 text-[1.6rem] text-sl-text">
            Notícias em Destaque
          </h2>
          <Link
            to="/noticias"
            className="flex items-center gap-1 text-sl-cyan text-[0.88rem] font-600
                       hover:gap-2 transition-all duration-200"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured grid: 1 large left + 2 stacked right */}
        {featured.length >= 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Large featured card */}
            <NewsCardFeatured article={featured[0]} />

            {/* Two smaller cards stacked */}
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display font-700 text-[1.6rem] text-sl-text">
            Simulações em Destaque
          </h2>
          <Link
            to="/simulacoes"
            className="flex items-center gap-1 text-sl-cyan text-[0.88rem] font-600
                       hover:gap-2 transition-all duration-200"
          >
            Ver todas <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sims.map(sim => (
            <SimCardHome key={sim.id} sim={sim} />
          ))}
        </div>
      </section>
    </div>
  )
}

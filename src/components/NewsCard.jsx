// ─────────────────────────────────────────────────────────────
// components/NewsCard.jsx
// Cards de notícias com micro-interações, shimmer no hover,
// imagem com zoom suave e overlay de gradiente dinâmico.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { CategoryBadge } from './CategoryBadge'

// ── Standard card (grid layout) ─────────────────────────────
export function NewsCard({ article, className = '' }) {
  return (
    <Link
      to={`/noticias/${article.id}`}
      className={`group flex flex-col bg-sl-card rounded-2xl overflow-hidden
                  border border-sl-border hover:border-white/20
                  transition-all duration-300 hover:-translate-y-1.5
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Static gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sl-card/70 to-transparent" />
        {/* Hover color tint */}
        <div className="absolute inset-0 bg-sl-cyan/5 opacity-0 group-hover:opacity-100
                        transition-opacity duration-300" />
        {/* Category badge */}
        <div className="absolute top-3 left-3 transition-transform duration-200 group-hover:scale-105">
          <CategoryBadge category={article.category} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-700 text-sl-text text-[1rem] leading-snug
                       group-hover:text-sl-cyan transition-colors duration-200 mb-2 line-clamp-3">
          {article.title}
        </h3>
        {article.summary && (
          <p className="text-sl-dim text-[0.83rem] leading-relaxed line-clamp-2 mb-4 flex-1">
            {article.summary}
          </p>
        )}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1 text-sl-muted text-[0.78rem]">
            <Clock size={12} />
            <span>{article.readTime} min de leitura</span>
          </div>
          <span className="flex items-center gap-1 text-sl-cyan text-[0.78rem] font-600
                           opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0
                           transition-all duration-200">
            Ler <ArrowRight size={11} />
          </span>
        </div>
      </div>

      {/* Bottom shimmer on hover */}
      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: 'linear-gradient(90deg, #00d4ff, transparent)' }}
      />
    </Link>
  )
}

// ── Compact card (sidebar / related news) ───────────────────
export function NewsCardCompact({ article }) {
  return (
    <Link
      to={`/noticias/${article.id}`}
      className="group flex flex-col bg-sl-card/60 rounded-xl overflow-hidden
                 border border-sl-border hover:border-white/15
                 transition-all duration-200 hover:bg-sl-card2 hover:-translate-y-0.5 p-4 gap-2"
    >
      <CategoryBadge category={article.category} />
      <h4 className="font-display font-600 text-sl-text text-[0.88rem] leading-snug
                     group-hover:text-sl-cyan transition-colors duration-200 line-clamp-2">
        {article.title}
      </h4>
      <div className="flex items-center gap-1 text-sl-muted text-[0.75rem]">
        <Clock size={11} />
        <span>{article.readTime} min</span>
      </div>
    </Link>
  )
}

// ── Featured card — large hero-style ────────────────────────
export function NewsCardFeatured({ article }) {
  return (
    <Link
      to={`/noticias/${article.id}`}
      className="group relative flex flex-col justify-end bg-sl-card rounded-2xl overflow-hidden
                 border border-sl-border hover:border-white/20
                 transition-all duration-300 hover:-translate-y-1
                 hover:shadow-[0_24px_64px_rgba(0,0,0,0.6)]
                 min-h-[360px]"
    >
      {/* Background image */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-600 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay — deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-transparent
                      transition-opacity duration-300" />
      {/* Hover cyan tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-sl-cyan/8 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="transition-transform duration-200 group-hover:scale-105 w-fit mb-3">
          <CategoryBadge category={article.category} />
        </div>
        <h3 className="font-display font-700 text-sl-text text-[1.15rem] leading-snug
                       group-hover:text-sl-cyan transition-colors duration-200 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-white/70 text-[0.82rem] line-clamp-2 mb-3">{article.summary}</p>
        <span className="inline-flex items-center gap-1.5 text-sl-cyan text-[0.8rem] font-600
                         opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0
                         transition-all duration-300">
          Ler artigo <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  )
}

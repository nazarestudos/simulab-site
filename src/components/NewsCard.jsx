// ─────────────────────────────────────────────────────────────
// components/NewsCard.jsx
// Reusable news article card.
// Used in: Home (featured), News listing, Article (related sidebar).
// EDIT HERE: change card layout or add new metadata fields.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import { CategoryBadge } from './CategoryBadge'

// ── Standard card (grid layout) ─────────────────────────────
export function NewsCard({ article, className = '' }) {
  return (
    <Link
      to={`/noticias/${article.id}`}
      className={`group flex flex-col bg-sl-card rounded-2xl overflow-hidden
                  border border-sl-border hover:border-white/15
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sl-card/60 to-transparent" />
        {/* Category badge over image */}
        <div className="absolute top-3 left-3">
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
        <div className="flex items-center gap-1 text-sl-muted text-[0.78rem] mt-auto">
          <Clock size={12} />
          <span>{article.readTime} min de leitura</span>
        </div>
      </div>
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
                 transition-all duration-200 hover:bg-sl-card2 p-4 gap-2"
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

// ── Featured card — large hero-style (Home page left card) ──
export function NewsCardFeatured({ article }) {
  return (
    <Link
      to={`/noticias/${article.id}`}
      className="group relative flex flex-col justify-end bg-sl-card rounded-2xl overflow-hidden
                 border border-sl-border hover:border-white/15
                 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                 min-h-[360px]"
    >
      {/* Background image */}
      <img
        src={article.image}
        alt={article.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="relative z-10 p-6">
        <CategoryBadge category={article.category} className="mb-3" />
        <h3 className="font-display font-700 text-sl-text text-[1.15rem] leading-snug
                       group-hover:text-sl-cyan transition-colors duration-200 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-white/70 text-[0.82rem] line-clamp-2">{article.summary}</p>
      </div>
    </Link>
  )
}

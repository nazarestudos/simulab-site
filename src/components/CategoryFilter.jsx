// ─────────────────────────────────────────────────────────────
// components/CategoryFilter.jsx
// Horizontal scrollable category filter tabs.
// Used in: News, Simulations pages.
// EDIT HERE: pass different categories via the `categories` prop.
// ─────────────────────────────────────────────────────────────
import { CATEGORY_ICONS, CATEGORY_COLORS } from '../data/content'
import {
  Zap, Calculator, FlaskConical, Telescope, HeartPulse, Dna, Binary, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { useRef } from 'react'

// Map icon name string → Lucide component
const ICON_MAP = { Zap, Calculator, FlaskConical, Telescope, HeartPulse, Dna, Binary }

function CatIcon({ name, size = 14 }) {
  const Icon = ICON_MAP[name]
  return Icon ? <Icon size={size} /> : null
}

export default function CategoryFilter({ categories, active, onChange }) {
  const scrollRef = useRef(null)

  function scroll(dir) {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }

  return (
    <div className="relative flex items-center gap-2">
      {/* Left scroll button (hidden on mobile) */}
      <button
        onClick={() => scroll(-1)}
        className="hidden sm:flex flex-shrink-0 w-7 h-7 items-center justify-center
                   rounded-full border border-sl-border text-sl-dim
                   hover:text-sl-text hover:border-white/20 transition-all"
        aria-label="Rolar esquerda"
      >
        <ChevronLeft size={14} />
      </button>

      {/* Scrollable filter list */}
      <div
        ref={scrollRef}
        className="filter-scroll flex items-center gap-2 overflow-x-auto flex-1 py-1"
      >
        {categories.map(cat => {
          const isAll    = cat === 'Todas'
          const isActive = active === cat
          const iconName = CATEGORY_ICONS[cat]
          const catColor = CATEGORY_COLORS[cat]

          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={[
                'flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full',
                'text-[0.83rem] font-600 font-body transition-all duration-200',
                isActive
                  ? 'bg-sl-cyan text-sl-bg shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'bg-sl-card border border-sl-border text-sl-dim hover:text-sl-text hover:border-white/15',
              ].join(' ')}
            >
              {!isAll && iconName && (
                <CatIcon name={iconName} size={13} />
              )}
              {cat}
            </button>
          )
        })}
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll(1)}
        className="hidden sm:flex flex-shrink-0 w-7 h-7 items-center justify-center
                   rounded-full border border-sl-border text-sl-dim
                   hover:text-sl-text hover:border-white/20 transition-all"
        aria-label="Rolar direita"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// components/CategoryFilter.jsx
// Horizontal category filter with animated active indicator
// that slides between options via Framer Motion layoutId.
// ─────────────────────────────────────────────────────────────
import { motion } from 'framer-motion'
import { TOPIC_COLORS } from '../data'
import { useRef } from 'react'

export default function CategoryFilter({ categories, active, onChange }) {
  const scrollRef = useRef(null)

  return (
    <div
      ref={scrollRef}
      className="filter-scroll flex items-center gap-1.5 overflow-x-auto py-1"
    >
      {categories.map(cat => {
        const isAll    = cat === 'Todas'
        const isActive = active === cat

        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={[
              'relative flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-none',
              'text-[0.875rem] font-500 font-body transition-colors duration-150',
              isActive
                ? 'text-black'
                : 'text-sl-dim hover:text-sl-text',
            ].join(' ')}
          >
            {/* Animated background pill */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 bg-white rounded-none"
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {!isAll && (
                <span className="w-2 h-2 shrink-0" style={{ background: isActive ? '#000' : TOPIC_COLORS[cat] }} aria-hidden="true" />
              )}
              {cat}
            </span>
          </button>
        )
      })}
    </div>
  )
}

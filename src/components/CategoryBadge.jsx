// ─────────────────────────────────────────────────────────────
// components/CategoryBadge.jsx
// Renders a coloured pill badge for a category or difficulty level.
// EDIT HERE: add new categories to the CATEGORY_COLORS map in data/content.js
// ─────────────────────────────────────────────────────────────
import { CATEGORY_COLORS, LEVEL_COLORS } from '../data/content'

export function CategoryBadge({ category, className = '' }) {
  const color = CATEGORY_COLORS[category] ?? '#6b84a8'
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[0.72rem] font-600 font-body tracking-wide
                  transition-all duration-200 ${className}`}
      style={{
        backgroundColor: `${color}22`,
        color: color,
        border: `1px solid ${color}44`,
      }}
    >
      {category}
    </span>
  )
}

export function LevelBadge({ level, className = '' }) {
  const style = LEVEL_COLORS[level] ?? { bg: 'rgba(107,132,168,0.15)', text: '#6b84a8' }
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[0.72rem] font-600 font-body
                  tracking-wide ${className}`}
      style={{
        backgroundColor: style.bg,
        color: style.text,
        border: `1px solid ${style.text}44`,
      }}
    >
      {level}
    </span>
  )
}

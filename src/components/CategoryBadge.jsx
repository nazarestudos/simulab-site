// ─────────────────────────────────────────────────────────────
// components/CategoryBadge.jsx
// Minimal topic/level indicators — dot + text, no pill shapes.
// ─────────────────────────────────────────────────────────────
import { TOPIC_COLORS, LEVEL_COLORS } from '../data'

export function CategoryBadge({ category, className = '' }) {
  const color = TOPIC_COLORS[category] ?? '#555'
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="w-2 h-2 shrink-0"
        style={{ background: color }}
      />
      <span
        className="text-[0.875rem] font-500"
        style={{ color }}
      >
        {category}
      </span>
    </span>
  )
}

export function LevelBadge({ level, className = '' }) {
  const style = LEVEL_COLORS[level] ?? { bg: 'transparent', text: '#555' }
  return (
    <span
      className={`inline-block text-[0.875rem] font-500 ${className}`}
      style={{ color: style.text }}
    >
      {level}
    </span>
  )
}

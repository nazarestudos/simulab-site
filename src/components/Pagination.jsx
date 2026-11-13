// ─────────────────────────────────────────────────────────────
// components/Pagination.jsx — editorial pager
// Shows "page / total" with minimal prev/next arrows.
// ─────────────────────────────────────────────────────────────
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Pagination({ current, total, onChange }) {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-10 h-10 flex items-center justify-center rounded-none
                   border border-sl-border text-sl-dim
                   hover:border-white/15 hover:text-sl-text
                   disabled:opacity-20 disabled:cursor-not-allowed
                   transition-all duration-300"
        aria-label="Página anterior"
      >
        <ArrowLeft size={15} />
      </button>

      <span className="text-sl-dim text-[0.875rem] font-mono tabular-nums">
        <span className="text-sl-text font-500">{String(current).padStart(2, '0')}</span>
        {' '}
        <span className="text-sl-muted">/</span>
        {' '}
        {String(total).padStart(2, '0')}
      </span>

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-10 h-10 flex items-center justify-center rounded-none
                   border border-sl-border text-sl-dim
                   hover:border-white/15 hover:text-sl-text
                   disabled:opacity-20 disabled:cursor-not-allowed
                   transition-all duration-300"
        aria-label="Próxima página"
      >
        <ArrowRight size={15} />
      </button>
    </div>
  )
}

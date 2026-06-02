// ─────────────────────────────────────────────────────────────
// pages/Simulations.jsx
// Simulações Científicas — category filter + paginated grid.
// EDIT HERE: adjust ITEMS_PER_PAGE or add new filter options.
// ─────────────────────────────────────────────────────────────
import { useState, useMemo } from 'react'
import { SIMULATIONS, CATEGORIES } from '../data/content'
import { SimCard } from '../components/SimCard'
import CategoryFilter from '../components/CategoryFilter'

const ITEMS_PER_PAGE = 6

export default function Simulations() {
  const [activecat, setActiveCat] = useState('Todas')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (activecat === 'Todas') return SIMULATIONS
    return SIMULATIONS.filter(s => s.category === activecat)
  }, [activecat])

  const totalPages  = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems   = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  function handleCat(cat) { setActiveCat(cat); setPage(1) }

  return (
    <div className="page-enter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-10">
        <h1 className="font-display font-800 text-[clamp(2rem,4vw,2.8rem)] text-sl-text mb-2">
          Simulações Científicas
        </h1>
        <p className="text-sl-dim text-[0.95rem]">
          Experimente a ciência na prática, de forma interativa
        </p>
      </div>

      {/* ── Category filter ── */}
      <div className="mb-10">
        <CategoryFilter
          categories={CATEGORIES}
          active={activecat}
          onChange={handleCat}
        />
      </div>

      {/* ── Grid ── */}
      {pageItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pageItems.map(sim => (
            <SimCard key={sim.id} sim={sim} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-sl-dim">
          <p>Nenhuma simulação encontrada para esta categoria.</p>
        </div>
      )}

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <Pagination current={currentPage} total={totalPages} onChange={setPage} />
      )}
    </div>
  )
}

function Pagination({ current, total, onChange }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1).slice(0, 3)
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => onChange(p => Math.max(1, p - 1))}
        disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-sl-border
                   text-sl-dim hover:border-white/20 hover:text-sl-text
                   disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >‹</button>

      {pages.map(p => (
        <button key={p} onClick={() => onChange(p)}
          className={[
            'w-9 h-9 flex items-center justify-center rounded-lg font-600 text-[0.88rem] transition-all',
            p === current
              ? 'bg-sl-cyan text-sl-bg shadow-[0_0_16px_rgba(0,212,255,0.3)]'
              : 'border border-sl-border text-sl-dim hover:border-white/20 hover:text-sl-text',
          ].join(' ')}
        >{p}</button>
      ))}

      <button
        onClick={() => onChange(p => Math.min(total, p + 1))}
        disabled={current === total}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-sl-border
                   text-sl-dim hover:border-white/20 hover:text-sl-text
                   disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >›</button>
    </div>
  )
}

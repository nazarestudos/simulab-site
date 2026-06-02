// ─────────────────────────────────────────────────────────────
// pages/News.jsx
// Notícias Científicas — search, category filter, paginated grid.
// EDIT HERE: adjust ITEMS_PER_PAGE, add new filter logic.
// ─────────────────────────────────────────────────────────────
import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { ARTICLES, CATEGORIES } from '../data/content'
import { NewsCard } from '../components/NewsCard'
import CategoryFilter from '../components/CategoryFilter'

const ITEMS_PER_PAGE = 6

export default function News() {
  const [query,      setQuery]   = useState('')
  const [activecat,  setActiveCat] = useState('Todas')
  const [page,       setPage]    = useState(1)

  // Filtered & searched articles
  const filtered = useMemo(() => {
    let list = ARTICLES
    if (activecat !== 'Todas')
      list = list.filter(a => a.category === activecat || a.category.startsWith(activecat))
    if (query.trim())
      list = list.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        (a.summary ?? '').toLowerCase().includes(query.toLowerCase())
      )
    return list
  }, [activecat, query])

  // Pagination
  const totalPages  = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems   = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  function handleCat(cat) {
    setActiveCat(cat)
    setPage(1)
  }
  function handleSearch(e) {
    setQuery(e.target.value)
    setPage(1)
  }

  return (
    <div className="page-enter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* ── Page header ── */}
      <div className="mb-10">
        <h1 className="font-display font-800 text-[clamp(2rem,4vw,2.8rem)] text-sl-text mb-2">
          Notícias Científicas
        </h1>
        <p className="text-sl-dim text-[0.95rem]">Fique por dentro das últimas descobertas</p>
      </div>

      {/* ── Search bar ── */}
      <div className="relative mb-8 max-w-2xl">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-sl-muted" />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar notícias..."
          className="w-full bg-sl-card border border-sl-border rounded-xl
                     pl-11 pr-4 py-3.5 text-[0.9rem] text-sl-text
                     placeholder:text-sl-muted outline-none
                     focus:border-sl-cyan/40 focus:ring-2 focus:ring-sl-cyan/10
                     transition-all duration-200"
        />
      </div>

      {/* ── Category filter ── */}
      <div className="mb-10">
        <CategoryFilter
          categories={CATEGORIES}
          active={activecat}
          onChange={handleCat}
        />
      </div>

      {/* ── Articles grid ── */}
      {pageItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pageItems.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-sl-dim">
          <p className="text-[1rem]">Nenhuma notícia encontrada para esta busca.</p>
        </div>
      )}

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <Pagination current={currentPage} total={totalPages} onChange={setPage} />
      )}
    </div>
  )
}

// ── Pagination component ─────────────────────────────────────
function Pagination({ current, total, onChange }) {
  // Show at most 4 page buttons
  const pages = Array.from({ length: total }, (_, i) => i + 1).slice(0, 4)

  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Prev */}
      <button
        onClick={() => onChange(p => Math.max(1, p - 1))}
        disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg
                   border border-sl-border text-sl-dim
                   hover:border-white/20 hover:text-sl-text
                   disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ‹
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={[
            'w-9 h-9 flex items-center justify-center rounded-lg',
            'font-600 text-[0.88rem] transition-all duration-200',
            p === current
              ? 'bg-sl-cyan text-sl-bg shadow-[0_0_16px_rgba(0,212,255,0.3)]'
              : 'border border-sl-border text-sl-dim hover:border-white/20 hover:text-sl-text',
          ].join(' ')}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onChange(p => Math.min(total, p + 1))}
        disabled={current === total}
        className="w-9 h-9 flex items-center justify-center rounded-lg
                   border border-sl-border text-sl-dim
                   hover:border-white/20 hover:text-sl-text
                   disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ›
      </button>
    </div>
  )
}

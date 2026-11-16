// ─────────────────────────────────────────────────────────────
// pages/Acervo.jsx — hub do acervo: busca, filtro por tópico e por
// nível, ordenação, listagem editorial numerada ou grade de cards.
// ─────────────────────────────────────────────────────────────
import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Rows3, LayoutGrid, ArrowUpDown, PlayCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ARTIGOS, TOPICS } from '../data'
import { ArticleCard, ArticleListRow } from '../components/ArticleCard'
import { BlurReveal, EASE } from '../components/Reveal'
import CategoryFilter from '../components/CategoryFilter'
import Pagination from '../components/Pagination'
import { HoverPreview } from '../components/SimLive'

const ITEMS_PER_PAGE = 9

const LEVELS = ['Todos', 'Iniciante', 'Intermediário', 'Avançado']

const SORTS = [
  { id: 'padrao', label: 'Padrão' },
  { id: 'az',     label: 'Título A–Z' },
  { id: 'za',     label: 'Título Z–A' },
  { id: 'sim',    label: 'Com simulação' },
]

const LEVEL_ORDER = { 'Iniciante': 0, 'Intermediário': 1, 'Avançado': 2 }

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.02 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
}

export default function Acervo() {
  const [searchParams] = useSearchParams()
  const topicFromUrl = searchParams.get('topico')
  const [query,     setQuery]     = useState('')
  const [activeTop, setActiveTop] = useState(TOPICS.includes(topicFromUrl) ? topicFromUrl : 'Todas')
  const [level,     setLevel]     = useState('Todos')
  const [sort,      setSort]      = useState('padrao')
  const [simOnly,   setSimOnly]   = useState(searchParams.get('sim') === '1')
  const [page,      setPage]      = useState(1)
  // Quem chega pedindo simulações vê as simulações: grade com prévias vivas.
  const [view,      setView]      = useState(searchParams.get('sim') === '1' ? 'grid' : 'list')
  const [hoverSim,  setHoverSim]  = useState(null)

  const filtered = useMemo(() => {
    let list = ARTIGOS
    if (activeTop !== 'Todas')
      list = list.filter(a => a.topic === activeTop)
    if (level !== 'Todos')
      list = list.filter(a => a.level === level)
    if (simOnly)
      list = list.filter(a => a.simulation)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        (a.summary ?? '').toLowerCase().includes(q) ||
        (a.concepts ?? []).some(c => c.toLowerCase().includes(q))
      )
    }

    // Ordenação (cópia — nunca mutar ARTIGOS)
    if (sort !== 'padrao') {
      list = [...list].sort((a, b) => {
        if (sort === 'az') return a.title.localeCompare(b.title, 'pt')
        if (sort === 'za') return b.title.localeCompare(a.title, 'pt')
        if (sort === 'sim') return (b.simulation ? 1 : 0) - (a.simulation ? 1 : 0)
        return 0
      })
    }
    return list
  }, [activeTop, level, simOnly, query, sort])

  const totalPages  = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pageItems   = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const simTotal = useMemo(() => filtered.filter(a => a.simulation).length, [filtered])

  function handleTopic(topic) { setActiveTop(topic); setPage(1) }
  function handleSearch(e)    { setQuery(e.target.value); setPage(1) }
  function handleLevel(l)     { setLevel(l); setPage(1) }
  function handleSort(e)      { setSort(e.target.value); setPage(1) }
  function toggleSimOnly()    { setSimOnly(s => !s); setPage(1) }

  // A busca fica fora da chave: digitar filtra na hora, sem reencenar a lista.
  const listKey = `${view}-${activeTop}-${level}-${sort}-${simOnly}-${currentPage}`

  return (
    <div className="container-xl pt-28 pb-section">

      {/* Header */}
      <div className="mb-12">
        <BlurReveal as="h1" delay={0.05} className="font-display font-700 text-display-lg text-sl-text mb-3">
          Acervo de Ciências
        </BlurReveal>
        <BlurReveal as="p" delay={0.12} className="text-sl-dim text-[1rem]">
          {filtered.length} {filtered.length === 1 ? 'artigo' : 'artigos'}
          {simTotal > 0 && <span>, {simTotal} com simulação</span>}
        </BlurReveal>
      </div>

      {/* Search + View toggle row */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-lg">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-sl-muted" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Buscar por título, resumo ou conceito..."
            className="w-full bg-transparent border border-sl-border rounded-none
                       pl-11 pr-5 py-3 text-[0.875rem] text-sl-text
                       placeholder:text-sl-muted outline-none
                       focus:border-white/20
                       transition-all duration-200"
          />
        </div>

        {/* View toggle */}
        <div className="hidden sm:flex items-center gap-0.5 p-1 rounded-none border border-sl-border shrink-0">
          <button
            onClick={() => setView('list')}
            aria-label="Ver como lista"
            aria-pressed={view === 'list'}
            className={`p-2 rounded-none transition-all duration-200 ${
              view === 'list' ? 'bg-white text-black' : 'text-sl-dim hover:text-sl-text'
            }`}
          >
            <Rows3 size={14} />
          </button>
          <button
            onClick={() => setView('grid')}
            aria-label="Ver como grade"
            aria-pressed={view === 'grid'}
            className={`p-2 rounded-none transition-all duration-200 ${
              view === 'grid' ? 'bg-white text-black' : 'text-sl-dim hover:text-sl-text'
            }`}
          >
            <LayoutGrid size={14} />
          </button>
        </div>
      </div>

      {/* Category filter */}
      <div className="mb-5">
        <CategoryFilter categories={TOPICS} active={activeTop} onChange={handleTopic} />
      </div>

      {/* Level + sim toggle + sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-sl-border">
        <div className="flex flex-wrap items-center gap-4">
          {/* Nível */}
          <div className="flex items-center gap-1">
            <span className="text-sl-dim text-[0.875rem] mr-2 hidden sm:inline">
              Nível
            </span>
            {LEVELS.map(l => (
              <button
                key={l}
                onClick={() => handleLevel(l)}
                aria-pressed={level === l}
                className={`px-3 py-1.5 rounded-none text-[0.875rem] font-500 transition-all duration-300 ${
                  level === l
                    ? 'bg-white text-black border border-white'
                    : 'text-sl-dim hover:text-sl-text border border-transparent'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Só com simulação */}
          <button
            onClick={toggleSimOnly}
            aria-pressed={simOnly}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-[0.875rem] font-500
                        transition-all duration-300 border ${
              simOnly
                ? 'bg-white text-black border-white'
                : 'text-sl-dim hover:text-sl-text border-transparent'
            }`}
          >
            <PlayCircle size={12} />
            Só simulações
          </button>
        </div>

        {/* Ordenação */}
        <label className="flex items-center gap-2 text-sl-dim text-[0.875rem]">
          <ArrowUpDown size={13} className="text-sl-muted" />
          <span className="sr-only">Ordenar por</span>
          <select
            value={sort}
            onChange={handleSort}
            className="bg-transparent border border-sl-border rounded-none px-3 py-1.5
                       text-[0.875rem] text-sl-text outline-none focus:border-white/20
                       cursor-pointer transition-colors duration-300
                       [&>option]:bg-sl-bg [&>option]:text-sl-text"
          >
            {SORTS.map(s => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {pageItems.length > 0 ? (
          view === 'list' ? (
            <motion.div
              key={listKey}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="border-t-2 border-white mb-12"
              onMouseLeave={() => setHoverSim(null)}
            >
              {pageItems.map((article, i) => (
                <motion.div key={article.id} variants={itemVariants}>
                  <ArticleListRow
                    article={article}
                    index={(currentPage - 1) * ITEMS_PER_PAGE + i}
                    onHover={setHoverSim}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={listKey}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            >
              {pageItems.map(article => (
                <motion.div key={article.id} variants={itemVariants}>
                  <ArticleCard article={article} direct={simOnly} />
                </motion.div>
              ))}
            </motion.div>
          )
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-28 text-sl-dim"
          >
            <p className="text-[1rem]">Nada corresponde a esses filtros.</p>
            <button
              onClick={() => { setQuery(''); setLevel('Todos'); setSimOnly(false); setActiveTop('Todas'); setPage(1) }}
              className="mt-4 text-sl-text text-[0.875rem] link-underline"
            >
              Limpar filtros
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {totalPages > 1 && (
        <Pagination current={currentPage} total={totalPages} onChange={setPage} />
      )}

      {/* Na lista, a simulação do artigo aparece viva ao lado do cursor. */}
      <HoverPreview article={view === 'list' ? hoverSim : null} />
    </div>
  )
}

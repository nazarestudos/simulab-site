// ─────────────────────────────────────────────────────────────
// components/ArticleCard.jsx — variantes de exibição, sem imagens:
//  · ArticleCard        — card da grade do Acervo
//  · ArticleListRow     — linha da lista do Acervo
//  · ArticleFeatureRow  — linha grande (leituras da Home)
//  · SimHighlightCard   — abre direto a simulação (Home)
//  · ArticleCardCompact — lateral / relacionados
//
// Regra de interação: o que abre algo "de mexer" (simulação) inverte
// para branco no hover; o que abre leitura reage de forma mais calma.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { TOPIC_COLORS } from '../data'

function TopicDot({ topic, invertOnHover = false }) {
  const color = TOPIC_COLORS[topic] ?? '#777'
  return (
    <span className="flex items-center gap-2 min-w-0">
      <span
        className={`w-2 h-2 shrink-0 ${invertOnHover ? 'group-hover:!bg-black' : ''}`}
        style={{ background: color }}
        aria-hidden="true"
      />
      <span className={`text-[0.8rem] font-500 truncate ${
        invertOnHover ? 'text-sl-dim group-hover:text-black' : 'text-sl-dim'
      }`}>
        {topic}
      </span>
    </span>
  )
}

function SimIndicator() {
  return (
    <span className="flex items-center gap-1.5 text-sl-text text-[0.875rem] font-500 shrink-0">
      <Play size={9} fill="currentColor" strokeWidth={0} />
      Simulação
    </span>
  )
}

// ── Card (grade do Acervo) ───────────────────────────────────
export function ArticleCard({ article, className = '' }) {
  return (
    <Link
      to={`/acervo/${article.id}`}
      data-cursor-label
      className={`group flex flex-col h-full p-6 bg-sl-bg
                  border border-sl-border hover:border-white
                  transition-colors duration-200 ${className}`}
    >
      <div className="flex items-center justify-between gap-3 mb-5">
        <TopicDot topic={article.topic} />
        {article.simulation && <SimIndicator />}
      </div>
      <h3 className="font-display font-700 text-sl-text text-[1.12rem] leading-[1.15] tracking-[-0.015em] mb-3 line-clamp-3">
        {article.title}
      </h3>
      {article.summary && (
        <p className="text-sl-dim text-[0.875rem] leading-relaxed line-clamp-3 flex-1">
          {article.summary}
        </p>
      )}
      <span className="mt-6 pt-4 border-t border-sl-border text-sl-dim text-[0.8rem]">
        {article.level}
      </span>
    </Link>
  )
}

// ── Linha da lista (Acervo) ──────────────────────────────────
export function ArticleListRow({ article, index }) {
  return (
    <Link
      to={`/acervo/${article.id}`}
      data-cursor-label
      className="group relative flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-7
                 border-b border-sl-border"
    >
      {/* barra que entra pela esquerda no hover */}
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-white origin-top scale-y-0
                   group-hover:scale-y-100 transition-transform duration-200 ease-expo-out"
        aria-hidden="true"
      />

      <span className="text-sl-muted text-[0.875rem] w-9 shrink-0 tabular-nums sm:pt-1.5
                       transition-transform duration-200 ease-expo-out group-hover:translate-x-4">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="flex-1 min-w-0 transition-transform duration-200 ease-expo-out group-hover:translate-x-4">
        <h3 className="font-display font-700 text-[1.2rem] sm:text-[1.55rem] leading-[1.1] tracking-[-0.02em] text-sl-text">
          {article.title}
        </h3>
        {article.summary && (
          <p className="text-sl-dim text-[0.875rem] leading-relaxed mt-2.5 max-w-[62ch] line-clamp-2">
            {article.summary}
          </p>
        )}
      </div>

      <div className="flex sm:flex-col sm:items-end gap-x-4 gap-y-2 shrink-0 sm:pt-1.5 sm:w-44">
        <TopicDot topic={article.topic} />
        {article.simulation && <SimIndicator />}
      </div>
    </Link>
  )
}

// ── Linha grande (leituras da Home) ──────────────────────────
export function ArticleFeatureRow({ article }) {
  return (
    <Link
      to={`/acervo/${article.id}`}
      data-cursor-label
      className="group relative grid gap-4 lg:grid-cols-[1fr_22rem] lg:gap-12 lg:items-end py-9
                 border-b border-sl-border"
    >
      <span
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-white origin-top scale-y-0
                   group-hover:scale-y-100 transition-transform duration-200 ease-expo-out"
        aria-hidden="true"
      />
      <div className="min-w-0 transition-transform duration-200 ease-expo-out group-hover:translate-x-5">
        <div className="flex items-center gap-4 mb-4">
          <TopicDot topic={article.topic} />
          {article.simulation && <SimIndicator />}
        </div>
        <h3 className="font-display font-700 text-[1.5rem] sm:text-[2.1rem] lg:text-[2.6rem] leading-[1] tracking-[-0.03em] text-sl-text">
          {article.title}
        </h3>
      </div>
      <p className="text-sl-dim text-[1rem] leading-relaxed line-clamp-3
                    transition-transform duration-200 ease-expo-out group-hover:translate-x-5 lg:group-hover:translate-x-0">
        {article.summary}
      </p>
    </Link>
  )
}

// ── Card de simulação (Home) — inverte no hover ──────────────
export function SimHighlightCard({ article }) {
  const subtitle = typeof article.simulation === 'object'
    ? article.simulation.subtitle
    : article.title
  return (
    <Link
      to={`/acervo/${article.id}/simulacao`}
      data-cursor-label
      className="group flex flex-col min-h-[15rem] p-6 bg-sl-bg text-sl-text
                 hover:bg-white hover:text-black
                 transition-colors duration-150"
    >
      <div className="flex items-center justify-between gap-3">
        <TopicDot topic={article.topic} invertOnHover />
        <span
          className="flex items-center justify-center w-9 h-9 shrink-0
                     border border-sl-border2 group-hover:border-black group-hover:bg-black group-hover:text-white
                     transition-colors duration-150"
          aria-hidden="true"
        >
          <Play size={12} fill="currentColor" strokeWidth={0} />
        </span>
      </div>

      <h3 className="font-display font-700 text-[1.15rem] leading-[1.12] tracking-[-0.015em] mt-auto pt-10 line-clamp-3">
        {subtitle}
      </h3>
      <p className="text-sl-dim group-hover:text-black/70 text-[0.875rem] leading-relaxed line-clamp-2 mt-3">
        {article.summary}
      </p>
    </Link>
  )
}

// ── Compacto (lateral / relacionados) ────────────────────────
export function ArticleCardCompact({ article }) {
  return (
    <Link
      to={`/acervo/${article.id}`}
      className="group flex flex-col gap-2 py-4 border-b border-sl-border"
    >
      <div className="flex items-center justify-between gap-3">
        <TopicDot topic={article.topic} />
        {article.simulation && <Play size={9} fill="currentColor" strokeWidth={0} className="text-sl-text shrink-0" />}
      </div>
      <h4 className="font-body font-700 text-sl-text text-[1rem] leading-snug line-clamp-2
                     underline decoration-transparent group-hover:decoration-white underline-offset-4
                     transition-colors duration-200">
        {article.title}
      </h4>
    </Link>
  )
}

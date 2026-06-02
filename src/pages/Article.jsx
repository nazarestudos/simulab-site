// ─────────────────────────────────────────────────────────────
// pages/Article.jsx
// Individual news article page.
// Layout: breadcrumb → header → hero image → (content | sidebar)
// EDIT HERE: adjust sidebar, share buttons, or "more articles" section.
// ─────────────────────────────────────────────────────────────
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Calendar, Clock, User, ChevronRight, Twitter, Linkedin, Link2, ArrowRight } from 'lucide-react'
import { getArticleById, ARTICLES } from '../data/content'
import { CategoryBadge } from '../components/CategoryBadge'
import { NewsCard, NewsCardCompact } from '../components/NewsCard'

export default function Article() {
  const { id }     = useParams()
  const navigate   = useNavigate()
  const article    = getArticleById(id)

  // 404 fallback
  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <p className="text-sl-dim text-[1rem]">Artigo não encontrado.</p>
        <button
          onClick={() => navigate('/noticias')}
          className="mt-4 text-sl-cyan hover:underline"
        >
          Voltar às notícias
        </button>
      </div>
    )
  }

  // Resolve related articles
  const related = (article.relatedIds ?? [])
    .map(rid => getArticleById(rid))
    .filter(Boolean)
    .slice(0, 3)

  // More articles in same category (for bottom section)
  const moreSame = ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <div className="page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Breadcrumb ── */}
        <nav className="flex items-center gap-1.5 text-[0.82rem] text-sl-dim mb-8">
          <Link to="/"          className="hover:text-sl-text transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link to="/noticias"  className="hover:text-sl-text transition-colors">Notícias</Link>
          <ChevronRight size={13} />
          <span className="text-sl-cyan">{article.category}</span>
        </nav>

        {/* ── Article header ── */}
        <div className="mb-8 max-w-3xl">
          <CategoryBadge category={article.category} className="mb-4" />
          <h1 className="font-display font-800 text-[clamp(1.8rem,4vw,2.8rem)] leading-tight
                         text-sl-text mb-5">
            {article.title}
          </h1>
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sl-dim text-[0.83rem]">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime} min de leitura
            </span>
          </div>
        </div>

        {/* ── Hero image ── */}
        <figure className="mb-3 rounded-2xl overflow-hidden max-w-4xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[340px] sm:h-[420px] object-cover"
          />
        </figure>
        <p className="text-sl-muted text-[0.78rem] text-center mb-12 italic max-w-4xl">
          Imagem relacionada ao artigo: {article.title}
        </p>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Article body (left) ── */}
          <article className="flex-1 min-w-0">
            {/* Render HTML content */}
            <div
              className="prose-simulab"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                // Inline prose styles since we don't use @tailwindcss/typography
                color: '#d0ddef',
                lineHeight: '1.85',
                fontSize: '0.97rem',
              }}
            />

            {/* ── Share buttons ── */}
            <div className="mt-14 pt-8 border-t border-sl-border">
              <p className="text-sl-dim text-[0.83rem] mb-3 font-500">Compartilhar artigo</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                             border border-sl-border text-sl-dim text-[0.83rem] font-500
                             hover:border-white/20 hover:text-sl-text hover:bg-sl-card2
                             transition-all duration-200"
                >
                  <Twitter size={15} /> Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                             border border-sl-border text-sl-dim text-[0.83rem] font-500
                             hover:border-white/20 hover:text-sl-text hover:bg-sl-card2
                             transition-all duration-200"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <button
                  onClick={copyLink}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl
                             border border-sl-border text-sl-dim text-[0.83rem] font-500
                             hover:border-white/20 hover:text-sl-text hover:bg-sl-card2
                             transition-all duration-200"
                >
                  <Link2 size={15} /> Copiar link
                </button>
              </div>
            </div>
          </article>

          {/* ── Sidebar (right) ── */}
          {related.length > 0 && (
            <aside className="lg:w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-display font-700 text-[1rem] text-sl-text mb-4">
                  Notícias Relacionadas
                </h3>
                <div className="flex flex-col gap-3">
                  {related.map(a => (
                    <NewsCardCompact key={a.id} article={a} />
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════
          MORE IN CATEGORY section
      ════════════════════════════════════════════════════ */}
      {moreSame.length > 0 && (
        <section className="mt-16 border-t border-sl-border bg-sl-bg2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-700 text-[1.4rem] text-sl-text">
                Mais notícias de {article.category}
              </h2>
              <Link
                to="/noticias"
                className="flex items-center gap-1 text-sl-cyan text-[0.85rem] font-600
                           hover:gap-2 transition-all duration-200"
              >
                Ver todas <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreSame.map(a => <NewsCard key={a.id} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

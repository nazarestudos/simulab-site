// ─────────────────────────────────────────────────────────────
// pages/ArticleDetail.jsx — /acervo/:id
// Layout editorial, sem imagens: cabeçalho de texto, barra de leitura,
// conteúdo, CTA da simulação e navegação anterior/próximo.
// ─────────────────────────────────────────────────────────────
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ChevronRight, ChevronLeft, ArrowUpRight, PlayCircle } from 'lucide-react'
import { getArtigoById, ARTIGOS } from '../data'
import { CategoryBadge, LevelBadge } from '../components/CategoryBadge'
import { ArticleListRow, ArticleCardCompact } from '../components/ArticleCard'
import { BlurReveal, MaskReveal } from '../components/Reveal'

function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30, mass: 0.3 })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[1.5px] z-[60] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.9))',
      }}
    />
  )
}

export default function ArticleDetail() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const article  = getArtigoById(id)

  if (!article) {
    return (
      <div className="container-xl py-40 text-center">
        <p className="text-sl-dim text-[1rem]">Artigo não encontrado.</p>
        <button onClick={() => navigate('/acervo')} className="mt-4 text-sl-text hover:underline">
          Voltar ao acervo
        </button>
      </div>
    )
  }

  const related = (article.relatedIds ?? [])
    .map(rid => getArtigoById(rid))
    .filter(Boolean)
    .slice(0, 3)

  const moreSame = ARTIGOS
    .filter(a => a.topic === article.topic && a.id !== article.id)
    .slice(0, 3)

  const globalIndex = ARTIGOS.findIndex(a => a.id === article.id)
  const prevArtigo = ARTIGOS[(globalIndex - 1 + ARTIGOS.length) % ARTIGOS.length]
  const nextArtigo = ARTIGOS[(globalIndex + 1) % ARTIGOS.length]

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <div>
      <ReadingProgress />

      {/* ── Cabeçalho (texto, sem imagem) ── */}
      <section className="container-xl pt-28 pb-10 border-b border-sl-border">
        <nav className="flex items-center gap-1.5 text-[0.875rem] text-sl-dim mb-8">
          <Link to="/" className="hover:text-sl-text transition-colors">Início</Link>
          <ChevronRight size={12} />
          <Link to="/acervo" className="hover:text-sl-text transition-colors">Acervo</Link>
          <ChevronRight size={12} />
          <span className="text-sl-text">{article.topic}</span>
        </nav>

        <div className="flex items-center gap-3 mb-5">
          <CategoryBadge category={article.topic} />
          <LevelBadge level={article.level} />
          <span className="text-sl-muted text-[0.75rem] font-mono">
            {String(globalIndex + 1).padStart(2, '0')} / {String(ARTIGOS.length).padStart(2, '0')}
          </span>
        </div>

        <BlurReveal as="h1" className="font-display font-700 text-display-xl leading-[0.98] text-sl-text max-w-4xl mb-5">
          {article.title}
        </BlurReveal>
        <BlurReveal as="p" delay={0.1} className="text-sl-dim text-[1rem] leading-relaxed max-w-2xl">
          {article.summary}
        </BlurReveal>
      </section>

      {/* ── Corpo do artigo ── */}
      <div className="container-xl py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Conteúdo principal */}
          <article className="flex-1 min-w-0 max-w-3xl">

            {/* CTA da simulação */}
            {article.simulation && (
              <Link
                to={`/acervo/${article.id}/simulacao`}
                className="group flex items-center justify-between gap-4 mb-12 p-6
                           border border-white/10 hover:border-white/20
                           bg-white/[0.02] hover:bg-white/[0.04]
                           transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-none bg-white flex items-center justify-center shrink-0">
                    <PlayCircle size={20} className="text-black" />
                  </div>
                  <div>
                    <p className="font-display font-700 text-sl-text text-[1rem] leading-snug">
                      {article.simulation.subtitle}
                    </p>
                    <p className="text-sl-dim text-[0.8rem] mt-0.5">Simulação interativa</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-sl-dim group-hover:text-sl-text
                             transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}

            <div
              className="prose-simulab"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Compartilhar */}
            <div className="mt-16 pt-8 border-t border-sl-border">
              <p className="text-sl-muted text-label font-mono mb-4">Compartilhar</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Twitter', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}` },
                  { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-none border border-sl-border text-sl-dim text-[0.8rem] font-500
                               hover:border-white/15 hover:text-sl-text
                               transition-all duration-300"
                  >
                    {label}
                  </a>
                ))}
                <button
                  onClick={copyLink}
                  className="px-5 py-2.5 rounded-none border border-sl-border text-sl-dim text-[0.8rem] font-500
                             hover:border-white/15 hover:text-sl-text
                             transition-all duration-300"
                >
                  Copiar link
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          {related.length > 0 && (
            <aside className="lg:w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <h3 className="font-display font-700 text-[1rem] text-sl-text mb-5">
                  Conteúdos Relacionados
                </h3>
                <div className="flex flex-col">
                  {related.map(a => <ArticleCardCompact key={a.id} article={a} />)}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>

      {/* ── Anterior / Próximo (ordem do acervo) ── */}
      <section className="border-t border-sl-border">
        <div className="container-xl grid grid-cols-1 sm:grid-cols-2">
          <Link
            to={`/acervo/${prevArtigo.id}`}
            className="group flex items-center gap-5 py-12 sm:pr-10 sm:border-r border-sl-border"
          >
            <ChevronLeft
              size={18}
              className="text-sl-muted shrink-0 group-hover:-translate-x-1 transition-transform duration-300"
            />
            <div className="min-w-0">
              <p className="text-sl-muted text-label font-mono mb-2">Anterior</p>
              <p className="font-display font-700 text-sl-text text-[1rem] truncate
                            group-hover:text-white/60 transition-colors duration-300">
                {prevArtigo.title}
              </p>
            </div>
          </Link>
          <Link
            to={`/acervo/${nextArtigo.id}`}
            className="group flex items-center justify-end gap-5 py-12 sm:pl-10 text-right"
          >
            <div className="min-w-0">
              <p className="text-sl-muted text-label font-mono mb-2">Próximo</p>
              <p className="font-display font-700 text-sl-text text-[1rem] truncate
                            group-hover:text-white/60 transition-colors duration-300">
                {nextArtigo.title}
              </p>
            </div>
            <ChevronRight
              size={18}
              className="text-sl-muted shrink-0 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </section>

      {/* ── Mais no mesmo tópico ── */}
      {moreSame.length > 0 && (
        <section className="border-t border-sl-border">
          <div className="container-xl py-section-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-700 text-display-sm text-sl-text">
                Mais em {article.topic}
              </h2>
              <Link
                to="/acervo"
                className="link-underline flex items-center gap-1 text-sl-text text-[0.875rem] font-500"
              >
                Ver todos <ArrowUpRight size={12} />
              </Link>
            </div>
            <div className="border-t border-sl-border">
              {moreSame.map((a, i) => <ArticleListRow key={a.id} article={a} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

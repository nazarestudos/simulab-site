// ─────────────────────────────────────────────────────────────
// pages/ArticleDetail.jsx — /acervo/:id
// Layout editorial, sem imagens: cabeçalho de texto, barra de leitura,
// conteúdo, CTA da simulação e navegação anterior/próximo.
// ─────────────────────────────────────────────────────────────
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion'
import { ChevronRight, ChevronLeft, ArrowUpRight, Play } from 'lucide-react'
import { getArtigoById, ARTIGOS, TOPIC_COLORS } from '../data'
import { CategoryBadge, LevelBadge } from '../components/CategoryBadge'
import { ArticleListRow, ArticleCardCompact } from '../components/ArticleCard'
import { BlurReveal } from '../components/Reveal'
import { RollText } from '../components/Kinetic'
import { SimPreview } from '../components/SimLive'

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
  const reduce   = useReducedMotion()
  const hasSim   = Boolean(article?.simulation && typeof article.simulation === 'object')

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

        {/* Com simulação, o cabeçalho divide a tela com ela — rodando. */}
        <div className={hasSim ? 'grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-end' : ''}>
          <div className="min-w-0">
            <BlurReveal as="h1" className={`font-display font-700 leading-[0.98] text-sl-text mb-5 ${
              hasSim ? 'text-display-lg max-w-[16ch]' : 'text-display-xl max-w-4xl'
            }`}>
              {article.title}
            </BlurReveal>
            <BlurReveal as="p" delay={0.1} className="text-sl-dim text-[1rem] leading-relaxed max-w-2xl">
              {article.summary}
            </BlurReveal>
          </div>

          {hasSim && (
            <Link
              to={`/acervo/${article.id}/simulacao`}
              data-cursor-label="Mexer"
              className="group block"
              aria-label={`Abrir a simulação: ${article.simulation.subtitle ?? article.title}`}
            >
              <div className="relative aspect-[16/10] bg-black border border-sl-border2 group-hover:border-white
                              transition-colors duration-200 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                  <SimPreview article={article} running={!reduce} />
                </div>
                <div key={article.id} className="stage-fx" aria-hidden="true" />
                <span
                  className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0
                             group-hover:scale-x-100 transition-transform duration-300 ease-expo-out"
                  style={{ background: TOPIC_COLORS[article.topic] }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border border-t-0 border-sl-border2
                              group-hover:border-white group-hover:bg-white group-hover:text-black
                              px-5 py-3.5 transition-colors duration-150">
                <span className="font-700 text-[0.9375rem]">
                  <RollText>Mexer nesta simulação</RollText>
                </span>
                <Play size={11} fill="currentColor" strokeWidth={0} aria-hidden="true" />
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ── Corpo do artigo ── */}
      <div className="container-xl py-16">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Conteúdo principal */}
          <article className="flex-1 min-w-0 max-w-3xl">

            <div
              className="prose-simulab"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Depois de ler: a mesma simulação, agora com contexto */}
            {hasSim && (
              <Link
                to={`/acervo/${article.id}/simulacao`}
                data-cursor="frame"
                className="group mt-14 flex items-center justify-between gap-6 px-6 py-6
                           border-2 border-white/40 hover:border-white hover:bg-white hover:text-black
                           transition-colors duration-150"
              >
                <span>
                  <span className="block font-display font-700 text-[1.25rem] leading-tight tracking-[-0.02em]">
                    Agora teste o que você leu
                  </span>
                  <span className="block text-sl-dim group-hover:text-black/70 text-[0.875rem] mt-1.5">
                    {article.simulation.subtitle ?? article.title}
                  </span>
                </span>
                <Play size={14} fill="currentColor" strokeWidth={0} className="shrink-0" aria-hidden="true" />
              </Link>
            )}

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

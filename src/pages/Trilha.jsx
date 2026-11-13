// ─────────────────────────────────────────────────────────────
// pages/Trilha.jsx — /materia/:slug
// A "apostila": mostra uma matéria como uma trilha ordenada de
// módulos, cada um com suas aulas em sequência (do básico ao
// avançado). Módulos ainda sem aulas aparecem como "em breve",
// deixando a estrutura completa visível.
// ─────────────────────────────────────────────────────────────
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowUpRight, PlayCircle, Lock, BookOpen, Check } from 'lucide-react'
import { getCurriculum } from '../data/curriculum'
import { getArtigoById } from '../data'
import { useProgress } from '../hooks/useProgress'
import { LevelBadge } from '../components/CategoryBadge'
import { BlurReveal, MaskReveal, EASE } from '../components/Reveal'

export default function Trilha() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const curriculo = getCurriculum(slug)
  const { isDone, countDone } = useProgress()

  if (!curriculo) {
    return (
      <div className="container-xl py-40 text-center">
        <p className="text-sl-dim text-[1rem]">Trilha não encontrada.</p>
        <button onClick={() => navigate('/acervo')} className="mt-4 text-sl-text hover:underline">
          Voltar ao acervo
        </button>
      </div>
    )
  }

  const modules   = curriculo.modules ?? []
  const totalAulas = modules.reduce((n, m) => n + (m.lessons?.length ?? 0), 0)
  const prontos    = modules.filter(m => (m.lessons?.length ?? 0) > 0).length

  // Progresso do aluno (localStorage): quantas aulas já foram concluídas.
  const allLessonIds = modules.flatMap(m => m.lessons ?? [])
  const doneCount = countDone(allLessonIds)
  const pct = totalAulas > 0 ? Math.round((doneCount / totalAulas) * 100) : 0

  return (
    <div className="container-xl pt-28 pb-section">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[0.78rem] text-sl-dim mb-8">
        <Link to="/" className="hover:text-sl-text transition-colors">Início</Link>
        <ChevronRight size={12} />
        <Link to="/acervo" className="hover:text-sl-text transition-colors">Acervo</Link>
        <ChevronRight size={12} />
        <span className="text-sl-text">Trilha de {curriculo.title}</span>
      </nav>

      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <MaskReveal className="mb-3">
          <span className="text-sl-muted text-label font-mono uppercase">Trilha de estudos</span>
        </MaskReveal>
        <BlurReveal as="h1" delay={0.05} className="font-display font-800 text-display-lg text-sl-text mb-4">
          {curriculo.title}
        </BlurReveal>
        <BlurReveal as="p" delay={0.12} className="text-sl-dim text-[1rem] leading-relaxed mb-6">
          {curriculo.tagline}
        </BlurReveal>
        <div className="flex items-center gap-6 text-[0.8rem] text-sl-muted font-mono mb-7">
          <span>{modules.length} módulos</span>
          <span>{totalAulas} {totalAulas === 1 ? 'aula' : 'aulas'}</span>
          <span>{prontos} disponíveis</span>
        </div>

        {/* Barra de progresso do aluno */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sl-dim text-[0.8rem] font-500">Seu progresso</span>
            <span className="text-sl-text text-[0.8rem] font-mono font-700 tabular-nums">
              {doneCount}/{totalAulas} · {pct}%
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: EASE }}
            />
          </div>
        </div>
      </div>

      {/* Módulos */}
      <div className="flex flex-col gap-5">
        {modules.map((mod, i) => {
          const lessons = (mod.lessons ?? [])
            .map(getArtigoById)
            .filter(Boolean)
          const disponivel = lessons.length > 0
          const doneInModule = countDone(mod.lessons ?? [])
          const allDone = disponivel && doneInModule === lessons.length

          return (
            <motion.section
              key={mod.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: Math.min(i * 0.04, 0.4) }}
              className={`border ${disponivel ? 'border-sl-border' : 'border-sl-border/50'} bg-white/[0.01]`}
            >
              {/* Cabeçalho do módulo */}
              <div className="flex items-start gap-5 p-6 sm:p-7">
                <span className="font-mono text-[0.8rem] text-sl-muted pt-1 tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h2 className="font-display font-700 text-[1.15rem] text-sl-text leading-snug">
                      {mod.title}
                    </h2>
                    <LevelBadge level={mod.level} />
                  </div>
                  <p className="text-sl-dim text-[0.9rem] leading-relaxed">{mod.desc}</p>
                </div>
                <div className="shrink-0 flex items-center gap-2.5">
                  {disponivel && (
                    <span className={`text-[0.72rem] font-mono tabular-nums ${allDone ? 'text-sl-text' : 'text-sl-muted'}`}>
                      {doneInModule}/{lessons.length}
                    </span>
                  )}
                  <span className={allDone ? 'text-sl-text' : 'text-sl-muted'}>
                    {!disponivel
                      ? <Lock size={15} />
                      : allDone
                        ? <span className="w-[18px] h-[18px] rounded-full bg-white text-black flex items-center justify-center"><Check size={12} strokeWidth={3} /></span>
                        : <BookOpen size={16} />}
                  </span>
                </div>
              </div>

              {/* Aulas do módulo */}
              {disponivel ? (
                <div className="border-t border-sl-border">
                  {lessons.map((aula, j) => {
                    const aulaDone = isDone(aula.id)
                    return (
                    <Link
                      key={aula.id}
                      to={`/acervo/${aula.id}`}
                      className="group flex items-center gap-4 px-6 sm:px-7 py-4
                                 border-b border-sl-border/60 last:border-b-0
                                 hover:bg-white/[0.02] transition-colors duration-300"
                    >
                      <span className="shrink-0 w-[34px] flex items-center">
                        {aulaDone
                          ? <span className="w-[18px] h-[18px] rounded-full bg-white text-black flex items-center justify-center"><Check size={11} strokeWidth={3} /></span>
                          : <span className="font-mono text-[0.72rem] text-sl-muted tabular-nums">
                              {String(i + 1).padStart(2, '0')}.{String(j + 1).padStart(2, '0')}
                            </span>}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className={`text-[0.92rem] font-600 leading-snug transition-colors
                                       ${aulaDone ? 'text-sl-dim' : 'text-sl-text group-hover:text-white'}`}>
                          {aula.title}
                        </p>
                        <p className="text-sl-muted text-[0.8rem] truncate mt-0.5">{aula.summary}</p>
                      </div>
                      {aula.simulation && (
                        <span title="Tem simulação" className="shrink-0 text-sl-dim">
                          <PlayCircle size={15} />
                        </span>
                      )}
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-sl-muted group-hover:text-sl-text
                                   transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  )})}
                </div>
              ) : (
                <div className="border-t border-sl-border/50 px-6 sm:px-7 py-4">
                  <span className="text-sl-muted text-[0.78rem] font-mono uppercase tracking-[0.12em]">
                    Em breve
                  </span>
                </div>
              )}
            </motion.section>
          )
        })}
      </div>
    </div>
  )
}

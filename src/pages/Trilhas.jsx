// ─────────────────────────────────────────────────────────────
// pages/Trilhas.jsx — /trilhas
// Hub das apostilas estruturadas: lista as matérias que já têm uma
// trilha (Matemática, Física…), com progresso do aluno em cada uma.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Route } from 'lucide-react'
import { getCurriculumList } from '../data/curriculum'
import { useProgress } from '../hooks/useProgress'
import { BlurReveal, MaskReveal, EASE } from '../components/Reveal'

export default function Trilhas() {
  const trilhas = getCurriculumList()
  const { countDone } = useProgress()

  return (
    <div className="container-xl pt-28 pb-section">

      {/* Header */}
      <div className="mb-14 max-w-3xl">
        <MaskReveal className="mb-3">
          <span className="text-sl-muted text-label font-mono uppercase">Apostila estruturada</span>
        </MaskReveal>
        <BlurReveal as="h1" delay={0.05} className="font-display font-800 text-display-lg text-sl-text mb-4">
          Trilhas de Estudo
        </BlurReveal>
        <BlurReveal as="p" delay={0.12} className="text-sl-dim text-[1rem] leading-relaxed">
          Cada matéria organizada do básico ao avançado, módulo a módulo — com as simulações
          interativas encaixadas nas aulas. Escolha por onde começar.
        </BlurReveal>
      </div>

      {/* Grade de matérias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {trilhas.map((t, i) => {
          const modules = t.modules ?? []
          const allLessonIds = modules.flatMap(m => m.lessons ?? [])
          const total = allLessonIds.length
          const done = countDone(allLessonIds)
          const disponiveis = modules.filter(m => (m.lessons?.length ?? 0) > 0).length
          const pct = total > 0 ? Math.round((done / total) * 100) : 0

          return (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
            >
              <Link
                to={`/materia/${t.slug}`}
                className="group block h-full border border-sl-border hover:border-white/15
                           bg-white/[0.01] hover:bg-white/[0.03] p-7 transition-all duration-400"
              >
                <div className="flex items-start justify-between mb-5">
                  <Route size={20} className="text-sl-dim" />
                  <ArrowUpRight
                    size={18}
                    className="text-sl-muted group-hover:text-sl-text
                               transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <h2 className="font-display font-800 text-[1.6rem] text-sl-text mb-2 leading-tight">
                  {t.title}
                </h2>
                <p className="text-sl-dim text-[0.9rem] leading-relaxed mb-6">{t.tagline}</p>

                <div className="flex items-center gap-5 text-[0.75rem] text-sl-muted font-mono mb-5">
                  <span>{modules.length} módulos</span>
                  <span>{total} aulas</span>
                  <span>{disponiveis} disponíveis</span>
                </div>

                {/* Progresso */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sl-muted text-[0.72rem] font-mono uppercase tracking-[0.12em]">
                      {done > 0 ? 'Continuar' : 'Começar'}
                    </span>
                    <span className="text-sl-dim text-[0.75rem] font-mono tabular-nums">{done}/{total} · {pct}%</span>
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
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

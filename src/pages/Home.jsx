// ─────────────────────────────────────────────────────────────
// pages/Home.jsx
//
// 1. Hero — cuba de ondas ao vivo; as letras do título boiam nela e
//    cada clique solta um pulso. Fica presa enquanto o manifesto sobe
//    por cima.
// 2. Manifesto — acende palavra a palavra com a rolagem.
// 3. Áreas — passar o mouse mostra a simulação da área, viva, ao lado
//    do cursor.
// 4. Galeria — seção fixada que rola na horizontal; cada card roda a
//    simulação de verdade.
// 5. Faixa cinética + leituras.
// ─────────────────────────────────────────────────────────────
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ARTIGOS, getHighlightArtigos, getSimHighlights, TOPICS, TOPIC_COLORS } from '../data'
import { ArticleFeatureRow } from '../components/ArticleCard'
import { BlurReveal, EASE } from '../components/Reveal'
import { RollText, ScrollLit, VelocityBand } from '../components/Kinetic'
import { SimGallery, HoverPreview } from '../components/SimLive'
import { useMagneticHover } from '../hooks/useMagneticHover'
import HeroField from '../components/HeroField'
import { INTRO_DELAY_MS } from '../components/Intro'

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`

// ── Título cujas letras boiam na cuba ────────────────────────
// Cada letra vira um <span>; medimos onde ela está dentro do hero e
// entregamos a lista ao HeroField, que move cada uma com a água.
function FloatingTitle({ text, floaters, boundsRef, className }) {
  const ref = useRef(null)
  const words = text.split(' ')

  useEffect(() => {
    const h1 = ref.current
    const bounds = boundsRef.current
    if (!h1 || !bounds) return
    const letters = [...h1.querySelectorAll('.float-letter')]

    const measure = () => {
      const base = bounds.getBoundingClientRect()
      const saved = letters.map(el => el.style.transform)
      letters.forEach(el => { el.style.transform = '' })
      floaters.current = letters.map(el => {
        const r = el.getBoundingClientRect()
        return { el, x: r.left + r.width / 2 - base.left, y: r.top + r.height / 2 - base.top, size: r.height }
      })
      letters.forEach((el, i) => { el.style.transform = saved[i] })
    }

    measure()
    document.fonts?.ready.then(measure)
    const late = setTimeout(measure, INTRO_DELAY_MS + 1600)   // depois da entrada
    window.addEventListener('resize', measure)
    return () => {
      clearTimeout(late)
      window.removeEventListener('resize', measure)
      floaters.current = []
    }
  }, [floaters, boundsRef])

  return (
    <h1 ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true">
          <span className="float-word" style={{ animationDelay: `${INTRO_DELAY_MS + 120 + wi * 90}ms` }}>
            {[...word].map((ch, ci) => <span key={ci} className="float-letter">{ch}</span>)}
          </span>
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </h1>
  )
}

export default function Home() {
  const reduce        = useReducedMotion()
  const highlights    = getHighlightArtigos()
  const simHighlights = useMemo(() => getSimHighlights(), [])
  const topics        = TOPICS.filter(t => t !== 'Todas')
  const simCount      = ARTIGOS.filter(a => a.simulation).length
  const showcase      = useMemo(
    () => Object.fromEntries(simHighlights.map(a => [a.topic, a])),
    [simHighlights],
  )

  const [hoverTopic, setHoverTopic] = useState(null)
  const floaters = useRef([])
  const heroRef  = useRef(null)
  const coverRef = useRef(null)
  const ctaRef   = useMagneticHover(0.25)

  // O hero recua (escala e apaga) enquanto o manifesto sobe por cima.
  const { scrollYProgress: cover } = useScroll({ target: coverRef, offset: ['start start', 'end start'] })
  const heroScale   = useTransform(cover, [0, 0.6], [1, 0.9])
  const heroOpacity = useTransform(cover, [0, 0.55], [1, 0])

  const d0 = INTRO_DELAY_MS / 1000
  const rise = delay => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
    animate: reduce ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: reduce ? 0 : d0 + delay, ease: EASE },
  })

  const bandItems = simHighlights.map(a => a.title)

  return (
    <div>

      {/* ═══════════ HERO + MANIFESTO (o manifesto cobre o hero) ═══════════ */}
      <div ref={coverRef} className="relative">
        <section ref={heroRef} className="sticky top-0 h-[100svh] min-h-[560px] flex flex-col justify-end overflow-hidden">
          <motion.div
            className="hero-field absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: reduce ? 0 : d0 + 0.2 }}
            aria-hidden="true"
          >
            <HeroField floaters={floaters} />
          </motion.div>
          <div className="hero-fade absolute inset-x-0 bottom-0 h-[55%] pointer-events-none" aria-hidden="true" />

          <motion.div
            style={reduce ? undefined : { scale: heroScale, opacity: heroOpacity }}
            className="relative z-10 w-full container-xl pt-32 pb-10 sm:pb-14 pointer-events-none origin-bottom-left"
          >
            <FloatingTitle
              text="Ciência que você pode mexer."
              floaters={floaters}
              boundsRef={heroRef}
              className="font-display font-800 text-hero text-sl-text max-w-[12ch] mb-10"
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-end">
              <motion.p {...rise(0.55)} className="text-white/80 text-[1rem] sm:text-[1.125rem] leading-relaxed max-w-[34rem]">
                {simCount} simulações com física de verdade e {ARTIGOS.length} artigos
                que explicam o porquê de cada número. Grátis, sem cadastro.
              </motion.p>

              <motion.div {...rise(0.7)} className="flex flex-wrap gap-3 lg:justify-end pointer-events-auto">
                <Link
                  ref={ctaRef}
                  to="/acervo?sim=1"
                  data-cursor="frame"
                  className="px-7 py-4 font-700 text-[1rem] bg-white text-black border-2 border-white
                             hover:bg-black hover:text-white transition-colors duration-200"
                >
                  <RollText>Abrir as simulações</RollText>
                </Link>
                <Link
                  to="/acervo"
                  data-cursor="frame"
                  className="px-7 py-4 font-700 text-[1rem] text-white border-2 border-white/40
                             hover:border-white hover:bg-white hover:text-black transition-colors duration-200"
                >
                  <RollText>Ver o acervo</RollText>
                </Link>
              </motion.div>
            </div>

            <motion.p {...rise(1)} className="mt-9 pt-5 border-t border-sl-border2 text-sl-dim text-[0.875rem] max-w-[34rem]">
              O fundo é uma cuba de ondas rodando agora, e o título boia nela.
              <span className="hidden sm:inline"> Mova o cursor para virar uma fonte; clique para soltar um pulso.</span>
            </motion.p>
          </motion.div>
        </section>

        <section className="relative z-10 bg-black border-t-2 border-white">
          <div className="container-xl py-section">
            <ScrollLit
              className="font-display font-700 text-sl-text max-w-[22ch] sm:max-w-[26ch]
                         text-[clamp(1.9rem,5.4vw,4.75rem)] leading-[1.02] tracking-[-0.035em]"
              text="Ninguém entende um pêndulo decorando a fórmula. Você encurta o fio, vê o balanço acelerar, e só então a fórmula faz sentido."
            />
          </div>
        </section>
      </div>

      {/* ═══════════ ÁREAS — a simulação da área segue o cursor ═══════════ */}
      <section className="container-xl pb-section">
        <BlurReveal as="h2" className="font-display font-700 text-display-lg text-sl-text mb-10">
          Oito áreas
        </BlurReveal>

        <div className="border-t-2 border-white" onMouseLeave={() => setHoverTopic(null)}>
          {topics.map(topic => {
            const inTopic = ARTIGOS.filter(a => a.topic === topic)
            const sims    = inTopic.filter(a => a.simulation).length
            return (
              <Link
                key={topic}
                to={`/acervo?topico=${encodeURIComponent(topic)}`}
                onMouseEnter={() => setHoverTopic(topic)}
                onFocus={() => setHoverTopic(null)}
                className="group flex items-center gap-4 sm:gap-6 py-5 sm:py-7 px-3 sm:px-5 -mx-3 sm:-mx-5
                           border-b border-sl-border
                           hover:bg-white hover:text-black
                           transition-colors duration-150"
              >
                <span
                  className="w-3 h-3 shrink-0 group-hover:!bg-black transition-colors duration-150"
                  style={{ background: TOPIC_COLORS[topic] }}
                  aria-hidden="true"
                />
                <span className="font-display font-700 text-[1.25rem] sm:text-[2.4rem] leading-none tracking-[-0.03em] flex-1
                                 transition-transform duration-300 ease-expo-out group-hover:translate-x-3">
                  {topic}
                </span>
                <span className="hidden sm:block w-36 text-right text-[0.875rem] tabular-nums text-sl-dim group-hover:text-black">
                  {plural(sims, 'simulação', 'simulações')}
                </span>
                <span className="w-24 text-right text-[0.875rem] tabular-nums text-sl-dim group-hover:text-black">
                  {plural(inTopic.length, 'artigo', 'artigos')}
                </span>
              </Link>
            )
          })}
        </div>
        <HoverPreview article={hoverTopic ? showcase[hoverTopic] : null} />
      </section>

      {/* ═══════════ GALERIA — simulações rodando ═══════════ */}
      {simHighlights.length > 0 && (
        <SimGallery
          items={simHighlights}
          total={simCount}
          title="Comece mexendo"
          lead="Estas não são imagens: cada quadro é a simulação rodando. Abra uma e mude um parâmetro."
        />
      )}

      {/* ═══════════ FAIXA CINÉTICA ═══════════ */}
      <VelocityBand
        items={bandItems}
        className="font-display font-800 text-white leading-none tracking-[-0.04em]
                   text-[clamp(3rem,10vw,9rem)] py-10 sm:py-14 border-y border-sl-border"
      />

      {/* ═══════════ LEITURAS ═══════════ */}
      <section className="container-xl py-section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <BlurReveal as="h2" className="font-display font-700 text-display-lg text-sl-text">
            Ou comece lendo
          </BlurReveal>
          <Link to="/acervo" className="link-underline text-sl-text text-[1rem] font-500 shrink-0">
            Acervo completo
          </Link>
        </div>

        <div className="border-t-2 border-white">
          {highlights.map(a => <ArticleFeatureRow key={a.id} article={a} />)}
        </div>
      </section>

    </div>
  )
}

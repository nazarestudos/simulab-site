// ─────────────────────────────────────────────────────────────
// App.jsx — raiz do roteador. HashRouter para funcionar em host
// estático (GitHub Pages).
//
// Troca de página em duas fases, com uma cortina BRANCA (a mesma
// inversão dura do resto do site):
//   sair   → a cortina sobe de baixo e cobre a página atual
//   entrar → continua subindo e revela a página nova
//
// O wrapper da página nunca recebe transform nem filter: isso criaria
// um bloco de contenção e quebraria tudo que é position: fixed/sticky
// lá dentro (cortina, barra de leitura, hero e galeria presos).
// ─────────────────────────────────────────────────────────────
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Navbar          from './components/Navbar'
import Footer          from './components/Footer'
import SmoothScroll    from './components/SmoothScroll'
import CustomCursor    from './components/CustomCursor'
import Intro, { INTRO_PLAYS } from './components/Intro'
import Home            from './pages/Home'
import Acervo          from './pages/Acervo'
import ArticleDetail   from './pages/ArticleDetail'
import SimulationDetail from './pages/SimulationDetail'
import Sobre           from './pages/Sobre'
import NotFound        from './pages/NotFound'

if (typeof history !== 'undefined' && 'scrollRestoration' in history) history.scrollRestoration = 'manual'

const SWEEP = [0.76, 0, 0.24, 1]   // acelera e freia seco
const COVER_S  = 0.5
const REVEAL_S = 0.7

// Na primeira carga com abertura, a própria abertura faz o papel da cortina.
let firstRender = true

const pageVariants = {
  initial: { opacity: 1 },
  enter:   { opacity: 1 },
  // 0.999 só para o Framer manter a página montada enquanto a cortina cobre
  exit:    { opacity: 0.999, transition: { duration: COVER_S } },
}
const pageVariantsReduced = {
  initial: { opacity: 0 },
  enter:   { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
}

function Curtain({ skipReveal }) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[70] bg-white pointer-events-none"
      variants={{
        initial: { y: skipReveal ? '-100%' : '0%' },
        enter:   { y: '-100%', transition: { duration: REVEAL_S, ease: SWEEP } },
        exit:    { y: ['100%', '0%'], transition: { duration: COVER_S, ease: SWEEP } },
      }}
    />
  )
}

function resetScroll() {
  if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true })
  window.scrollTo(0, 0)
}

function AnimatedRoutes() {
  const location = useLocation()
  const reduce = useReducedMotion()
  const skipReveal = firstRender && INTRO_PLAYS
  firstRender = false

  return (
    <AnimatePresence mode="wait" onExitComplete={resetScroll}>
      <motion.div
        key={location.pathname}
        variants={reduce ? pageVariantsReduced : pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {!reduce && <Curtain skipReveal={skipReveal} />}
        <Routes location={location}>
          <Route path="/"                          element={<Home />} />
          <Route path="/acervo"                    element={<Acervo />} />
          <Route path="/acervo/:id"                element={<ArticleDetail />} />
          <Route path="/acervo/:id/simulacao"      element={<SimulationDetail />} />
          <Route path="/sobre"                     element={<Sobre />} />
          <Route path="*"                          element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <SmoothScroll>
        <Intro />
        <CustomCursor />
        <div className="min-h-screen flex flex-col bg-sl-bg font-body text-sl-text">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </HashRouter>
  )
}

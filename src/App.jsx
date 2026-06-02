// ─────────────────────────────────────────────────────────────
// App.jsx  — Router root + scroll-to-top on navigation
// Uses HashRouter so it works on GitHub Pages and static hosts
// without server-side URL rewriting.
// ─────────────────────────────────────────────────────────────
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home             from './pages/Home'
import News             from './pages/News'
import Article          from './pages/Article'
import Simulations      from './pages/Simulations'
import SimulationDetail from './pages/SimulationDetail'

// Scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-sl-bg font-body text-sl-text">
        {/* ── Top navigation (always visible) ── */}
        <Navbar />

        {/* ── Page content ── */}
        <main className="flex-1">
          <Routes>
            <Route path="/"                        element={<Home />} />
            <Route path="/noticias"                element={<News />} />
            <Route path="/noticias/:id"            element={<Article />} />
            <Route path="/simulacoes"              element={<Simulations />} />
            <Route path="/simulacoes/:id"          element={<SimulationDetail />} />
          </Routes>
        </main>

        {/* ── Footer (always visible) ── */}
        <Footer />
      </div>
    </HashRouter>
  )
}

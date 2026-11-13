// ─────────────────────────────────────────────────────────────
// pages/NotFound.jsx — expressive 404 with personality
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SplitText, BlurReveal } from '../components/Reveal'

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Ambient glow */}

      <div className="relative z-10">
        {/* Giant 404 — purely decorative */}
        <div className="select-none mb-6" aria-hidden="true">
          <span className="font-display font-700 text-[clamp(6rem,20vw,14rem)] leading-none text-stroke tracking-tight">
            404
          </span>
        </div>

        <SplitText
          as="h1"
          staggerDelay={0.05}
          className="font-display font-700 text-display-md text-sl-text mb-5"
        >
          Essa página não existe.
        </SplitText>

        <BlurReveal as="p" delay={0.3} className="text-sl-dim text-[1rem] max-w-md mb-12 mx-auto leading-relaxed">
          O link pode estar quebrado, ou o conteúdo foi movido. Volte para o acervo e continue explorando.
        </BlurReveal>

        <BlurReveal delay={0.5}>
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-none font-display font-500
                       bg-white text-black text-[0.9rem]
                       hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]
                       active:scale-[0.97]
                       transition-all duration-200"
          >
            Voltar para o início
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </BlurReveal>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// components/Footer.jsx — rodapé com o logotipo cinético: cada
// letra engorda e alarga quando o cursor chega perto (fonte variável).
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { LogoMark } from './Navbar'
import { TOPICS, TOPIC_COLORS } from '../data'
import { RollText, Wordmark } from './Kinetic'

const NAV_LINKS = [
  ['Início',  '/'],
  ['Acervo',  '/acervo'],
  ['Simulações', '/acervo?sim=1'],
  ['Sobre',   '/sobre'],
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto border-t-2 border-white overflow-hidden">
      <div className="container-xl pt-section pb-8">

        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] mb-16 lg:mb-24">
          <div className="flex flex-col gap-6 max-w-md">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <LogoMark size={28} />
              <span className="font-display font-700 text-sl-text text-[1.1rem]">SimuLab</span>
            </Link>
            <p className="text-sl-dim text-[1rem] leading-relaxed">
              Simulações interativas e artigos de física, química, biologia, astronomia,
              matemática, medicina e computação. Grátis, sem cadastro.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <nav aria-label="Rodapé" className="flex flex-col gap-3">
              <h3 className="text-sl-muted text-[0.875rem] mb-1">Navegar</h3>
              {NAV_LINKS.map(([label, href]) => (
                <Link key={href} to={href} className="text-[1rem] text-sl-text w-fit">
                  <RollText>{label}</RollText>
                </Link>
              ))}
            </nav>

            <nav aria-label="Áreas" className="flex flex-col gap-3">
              <h3 className="text-sl-muted text-[0.875rem] mb-1">Áreas</h3>
              {TOPICS.filter(t => t !== 'Todas').map(topic => (
                <Link
                  key={topic}
                  to={`/acervo?topico=${encodeURIComponent(topic)}`}
                  className="flex items-center gap-2.5 text-[1rem] text-sl-text w-fit"
                >
                  <span className="w-2 h-2 shrink-0" style={{ background: TOPIC_COLORS[topic] }} aria-hidden="true" />
                  <RollText>{topic}</RollText>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Wordmark
          text="SIMULAB"
          className="select-none text-white text-[clamp(4rem,21vw,20rem)] -mx-[2vw] mb-8"
        />

        <div className="border-t border-sl-border2 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2
                        text-sl-muted text-[0.875rem]">
          <p>© {year} SimuLab</p>
          <p>Feito no Brasil</p>
        </div>
      </div>
    </footer>
  )
}

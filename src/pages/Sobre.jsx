// ─────────────────────────────────────────────────────────────
// pages/Sobre.jsx — mission, technology, pillars, CTA.
// Asymmetric layouts, no amateur spinning circles.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ArrowUpRight, Globe, Cpu, FlaskConical, BrainCircuit,
  DatabaseZap, Atom, Rocket,
  GraduationCap, Telescope, Binary,
} from 'lucide-react'
import { BlurReveal, MaskReveal, SplitText, Stagger, StaggerItem, ParallaxWrap, EASE } from '../components/Reveal'
import { useMagneticHover } from '../hooks/useMagneticHover'

const TECH_ITEMS = [
  {
    Icon: Atom,
    title: 'Física computacional',
    desc: 'Cada simulação resolve equações reais — de mecânica clássica a colisões moleculares — numericamente, direto no navegador.',
  },
  {
    Icon: Cpu,
    title: 'Canvas em tempo real',
    desc: 'Renderização quadro a quadro, sem plugins nem instalação: só abrir o link e mexer nos parâmetros.',
  },
  {
    Icon: BrainCircuit,
    title: 'Um artigo por conceito',
    desc: 'Cada simulação vem acompanhada de um texto explicativo — e nem todo texto precisa de uma simulação para existir.',
  },
  {
    Icon: DatabaseZap,
    title: 'Constantes e fórmulas reais',
    desc: 'Os números por trás de cada simulação — de g a GM da Terra — são os mesmos usados em livros-texto de física.',
  },
  {
    Icon: Globe,
    title: 'Acesso sem barreiras',
    desc: '100% web, responsivo, gratuito. Funciona em qualquer navegador com uma conexão razoável.',
  },
  {
    Icon: FlaskConical,
    title: 'Mexa e observe',
    desc: 'Mude uma variável e veja o resultado na hora — a ideia é aprender testando, não só lendo.',
  },
]

const PILLARS = [
  {
    Icon: GraduationCap,
    title: 'Educação sem barreiras',
    desc: 'Conhecimento científico de qualidade não deveria depender de onde você mora ou quanto você pode pagar.',
  },
  {
    Icon: Telescope,
    title: 'Curiosidade em primeiro lugar',
    desc: 'Preferimos uma boa pergunta a uma resposta decorada. Aqui, não entender de primeira é normal.',
  },
  {
    Icon: Binary,
    title: 'Rigor com leveza',
    desc: 'Física de verdade, equações de verdade — mas explicadas sem jargão desnecessário.',
  },
  {
    Icon: Rocket,
    title: 'Sempre incompleto, de propósito',
    desc: 'Este acervo cresce toda semana. O que falta hoje é o que estamos escrevendo agora.',
  },
]

export default function Sobre() {
  const ctaRef = useMagneticHover(0.2)

  return (
    <div>

      {/* ════════════════════════════════════════════════════
          HERO — statement
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden">

        <div className="relative z-10 w-full container-xl pt-32 pb-16 sm:pb-20">

          <SplitText
            as="h1"
            delay={0.12}
            staggerDelay={0.03}
            className="font-display font-700 text-display-xl text-sl-text max-w-[52rem] mb-10"
          >
            O SimuLab começou de uma frustração simples: entender ciência direito costuma exigir livros caros ou laboratórios que a maioria das escolas não tem.
          </SplitText>

          <BlurReveal delay={0.5} className="max-w-xl">
            <p className="text-sl-dim text-[1rem] leading-relaxed">
              Este é um lugar para parar, mexer nos números e ver o que acontece.
            </p>
          </BlurReveal>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            className="mt-12"
          >
            <Link
              ref={ctaRef}
              to="/acervo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-none font-display font-500
                         bg-white text-black text-[0.9rem]
                         border-2 border-white hover:bg-black hover:text-white
                         transition-colors duration-200"
            >
              Explorar o Acervo
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          MISSÃO — large quote layout
      ════════════════════════════════════════════════════ */}
      <section className="container-xl py-section border-t border-sl-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div>
            <BlurReveal as="h2" delay={0.08} className="font-display font-700 text-display-lg text-sl-text">
              Explicar bem{' '}
              <span className="text-white/35">é um ato de respeito</span>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.2} className="space-y-5 text-sl-dim text-[1rem] leading-[1.85] lg:pt-12">
            <p>
              Quando alguém escreve um texto confuso de propósito, ou esconde uma fórmula atrás
              de jargão, está dizendo — sem querer — que você não merece entender aquilo direito.
              Achamos o oposto: quanto mais complexo o assunto, mais vale o esforço de explicar bem.
            </p>
            <p>
              Por isso o <strong className="text-sl-text font-500">SimuLab</strong> existe: um lugar
              onde física, química, biologia, astronomia, matemática, medicina e computação são
              explicadas de verdade — com simulações para quem aprende melhor vendo e mexendo, e
              artigos para quem quer entender o porquê por trás do número.
            </p>
            <p>
              Não é um curso, não tem certificado, não pede cadastro. É um lugar para ficar
              curioso de graça.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TECNOLOGIA — numbered list
      ════════════════════════════════════════════════════ */}
      <section className="container-xl py-section border-t border-sl-border">
        <div className="mb-12">
          <BlurReveal as="h2" delay={0.08} className="font-display font-700 text-display-lg text-sl-text mb-4 max-w-3xl">
            Nada de mágica, só código bem escrito
          </BlurReveal>
          <BlurReveal as="p" delay={0.16} className="text-sl-dim text-[1rem] leading-relaxed max-w-2xl">
            Cada simulação é uma pequena peça de engenharia própria — sem motor de física genérico,
            sem biblioteca pronta escondendo o que está de fato acontecendo.
          </BlurReveal>
        </div>

        <Stagger className="border-t border-sl-border">
          {TECH_ITEMS.map(({ Icon, title, desc }, i) => (
            <StaggerItem key={title}>
              <div className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_auto_1fr] items-start
                              gap-5 sm:gap-8 py-7 border-b border-sl-border
                              transition-all duration-200">
                <span className="text-sl-muted text-[0.75rem] font-mono tabular-nums pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-4 sm:contents">
                  <Icon size={16} className="text-sl-dim shrink-0 mt-1 sm:mt-0 sm:self-center" />
                  <div>
                    <h3 className="font-display font-700 text-sl-text text-[1.1rem] sm:text-[1.25rem] leading-snug mb-2">
                      {title}
                    </h3>
                    <p className="text-sl-dim text-[0.875rem] leading-relaxed max-w-lg">{desc}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ════════════════════════════════════════════════════
          PILARES — asymmetric staggered layout
      ════════════════════════════════════════════════════ */}
      <section className="py-section border-t border-sl-border">
        <div className="container-xl">
          <div className="mb-12">
            <BlurReveal as="h2" delay={0.08} className="font-display font-700 text-display-lg text-sl-text max-w-3xl">
              Quatro coisas em que acreditamos
            </BlurReveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sl-border border border-sl-border">
            {PILLARS.map(({ Icon, title, desc }, i) => (
              <StaggerItem key={title}>
                <div className="group h-full flex flex-col gap-6 p-8 sm:p-10 bg-sl-bg
                                hover:bg-white/[0.015] transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <Icon size={18} className="text-sl-dim" />
                    <span className="text-sl-muted text-[0.75rem] font-mono tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-display font-700 text-sl-text text-[1.2rem] mb-3 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sl-dim text-[0.875rem] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ABOUT THE PROJECT
      ════════════════════════════════════════════════════ */}
      <section className="container-xl py-section border-t border-sl-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <BlurReveal as="h2" delay={0.08} className="font-display font-700 text-display-md text-sl-text mb-8">
              Um projeto pequeno,{' '}
              <span className="text-white/35">feito aos poucos</span>
            </BlurReveal>
            <BlurReveal delay={0.16} className="space-y-4 text-sl-dim text-[0.875rem] leading-[1.85]">
              <p>
                Não tem investidor, não tem equipe de marketing. É um projeto brasileiro que
                cresce nas horas vagas — uma simulação nova aqui, um artigo reescrito ali.
              </p>
              <p>
                Isso significa que o acervo vai ficar incompleto por um bom tempo. Prefiro
                publicar 15 artigos bons hoje e mais 10 no mês que vem do que prometer 100
                de uma vez e entregar rasos.
              </p>
              <p>
                Se você é professor, pesquisador ou só encontrou um erro em algum lugar,{' '}
                <span className="text-sl-text font-500">a mensagem é sempre bem-vinda.</span>
              </p>
            </BlurReveal>
          </div>

          <Stagger className="border-t border-sl-border lg:mt-12">
            {[
              { label: 'Plataforma web',  desc: 'Sem instalação' },
              { label: '100% gratuito',   desc: 'Sem cadastro, sem paywall' },
              { label: 'Código aberto',   desc: 'Física com fórmulas reais' },
              { label: 'Feito no Brasil', desc: 'Em português, para todos' },
            ].map(({ label, desc }, i) => (
              <StaggerItem key={label}>
                <div className="flex items-baseline gap-6 py-6 border-b border-sl-border">
                  <span className="text-sl-muted text-[0.75rem] font-mono w-7 shrink-0 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display font-700 text-[1rem] text-sl-text flex-1">{label}</span>
                  <span className="text-sl-dim text-[0.875rem] text-right">{desc}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════════════ */}
      <section className="container-xl pb-section">
        <ParallaxWrap speed={0.05} className="text-center py-section border-t border-sl-border">
          <BlurReveal as="h2" className="font-display font-700 text-display-xl text-sl-text mb-5">
            Pronto para explorar?
          </BlurReveal>
          <BlurReveal as="p" delay={0.1} className="text-sl-dim text-[1rem] leading-relaxed mb-12 max-w-lg mx-auto">
            Dezenas de artigos e simulações interativas esperando. Tudo gratuito, tudo agora.
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <Link
              to="/acervo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none font-display font-700 text-[1rem]
                         bg-white text-black
                         border-2 border-white hover:bg-black hover:text-white
                         transition-colors duration-200"
            >
              <Rocket size={17} />
              Entrar no Acervo
            </Link>
          </BlurReveal>
        </ParallaxWrap>
      </section>

    </div>
  )
}

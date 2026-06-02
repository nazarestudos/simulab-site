// ─────────────────────────────────────────────────────────────
// pages/Sobre.jsx
// Página "Sobre o SimuLab" — missão, tecnologia, impacto, CTA.
// Paleta e tipografia idênticas ao restante do site.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, Globe, Cpu, FlaskConical, BrainCircuit,
  DatabaseZap, Atom, Users, BookOpen, Rocket, Star, HeartHandshake,
  GraduationCap, Telescope, Binary,
} from 'lucide-react'

// ── Dados das tecnologias ──────────────────────────────────────
const TECH_ITEMS = [
  {
    Icon: Atom,
    color: '#06b6d4',
    title: 'Física Computacional',
    desc: 'Simulações baseadas em equações reais — de mecânica quântica a dinâmica orbital — resolvidas numericamente em tempo real no navegador.',
  },
  {
    Icon: Cpu,
    color: '#8b5cf6',
    title: 'WebGL & Canvas API',
    desc: 'Renderização acelerada pela GPU diretamente no browser, garantindo visualizações fluidas e imersivas sem instalação de software.',
  },
  {
    Icon: BrainCircuit,
    color: '#ec4899',
    title: 'Inteligência Adaptativa',
    desc: 'Algoritmos que ajustam a complexidade das simulações ao perfil do usuário, tornando o aprendizado progressivo e personalizado.',
  },
  {
    Icon: DatabaseZap,
    color: '#f59e0b',
    title: 'Dados Científicos Reais',
    desc: 'Parâmetros e constantes extraídos de fontes como NASA, NIST e publicações peer-reviewed, assegurando fidelidade científica.',
  },
  {
    Icon: Globe,
    color: '#10b981',
    title: 'Acesso Universal',
    desc: 'Plataforma 100% web, responsiva e acessível. Zero barreiras: qualquer pessoa com um smartphone e conexão já pode explorar.',
  },
  {
    Icon: FlaskConical,
    color: '#f97316',
    title: 'Experimentos Interativos',
    desc: 'Modifique variáveis em tempo real e observe os efeitos instantaneamente, reproduzindo a experiência de um laboratório virtual.',
  },
]

// ── Estatísticas de impacto ────────────────────────────────────
const STATS = [
  { value: '20+', label: 'Simulações Ativas',  Icon: Zap,       color: '#06b6d4' },
  { value: '7',   label: 'Áreas do Saber',     Icon: BookOpen,  color: '#8b5cf6' },
  { value: '∞',   label: 'Curiosidades',       Icon: Star,      color: '#f59e0b' },
  { value: '100%',label: 'Gratuito & Aberto',  Icon: HeartHandshake, color: '#10b981' },
]

// ── Valores / pilares ──────────────────────────────────────────
const PILLARS = [
  {
    Icon: GraduationCap,
    color: '#06b6d4',
    title: 'Educação Sem Barreiras',
    desc: 'Democratizamos o acesso ao conhecimento científico de qualidade, independente de localização ou renda.',
  },
  {
    Icon: Telescope,
    color: '#8b5cf6',
    title: 'Curiosidade como Motor',
    desc: 'Acreditamos que a pergunta certa é mais poderosa que qualquer resposta. Aqui, a dúvida é celebrada.',
  },
  {
    Icon: Binary,
    color: '#f97316',
    title: 'Ciência & Tecnologia Juntas',
    desc: 'Unimos rigor científico com as melhores ferramentas digitais disponíveis para criar experiências únicas.',
  },
  {
    Icon: Rocket,
    color: '#ec4899',
    title: 'Sempre Evoluindo',
    desc: 'Novas simulações, notícias e funcionalidades são adicionadas continuamente, acompanhando a fronteira do conhecimento.',
  },
]

export default function Sobre() {
  return (
    <div className="page-enter">

      {/* ════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 90% 80%, rgba(139,92,246,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 10% 90%, rgba(249,115,22,0.07) 0%, transparent 60%),
            #070c18
          `
        }}
      >
        {/* Starfield */}
        <div className="starfield" aria-hidden="true" />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sl-cyan/30
                          bg-sl-cyan/8 backdrop-blur-sm mb-8
                          text-sl-cyan text-[0.78rem] font-600 tracking-wider uppercase">
            <Atom size={13} />
            Sobre o SimuLab
          </div>

          <h1 className="font-display font-800 text-[clamp(2.4rem,5.5vw,4rem)] leading-[1.08]
                         text-sl-text mb-6 tracking-tight max-w-4xl mx-auto">
            Onde a Ciência Encontra a{' '}
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)' }}>
              Imaginação
            </span>
          </h1>

          <p className="text-sl-dim text-[1.05rem] leading-relaxed max-w-2xl mx-auto mb-12">
            O SimuLab é uma plataforma brasileira de simulações científicas interativas e jornalismo
            científico de qualidade. Nossa missão é simples: tornar a ciência fascinante, acessível
            e viva para todos.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/simulacoes"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-600
                         bg-sl-cyan text-sl-bg
                         hover:bg-cyan-400 hover:shadow-[0_0_32px_rgba(0,212,255,0.45)]
                         hover:scale-105 active:scale-95
                         transition-all duration-300"
            >
              Explorar Simulações
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/noticias"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-display font-600
                         border border-sl-cyan/40 text-sl-cyan
                         hover:bg-sl-cyan/10 hover:border-sl-cyan hover:scale-105 active:scale-95
                         transition-all duration-300 backdrop-blur-sm"
            >
              Ler Notícias
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #070c18)' }} />
      </section>

      {/* ════════════════════════════════════════════════════
          NOSSA MISSÃO
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-sl-cyan/10 border border-sl-cyan/25 text-sl-cyan
                            text-[0.75rem] font-600 tracking-wider uppercase mb-6">
              <Star size={11} />
              Nossa Missão
            </div>
            <h2 className="font-display font-800 text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1]
                           text-sl-text mb-6 tracking-tight">
              Fazer a Ciência <br />
              <span className="text-sl-cyan">Brilhar para Todos</span>
            </h2>
            <div className="space-y-4 text-sl-dim text-[0.95rem] leading-relaxed">
              <p>
                Nascemos da convicção de que o conhecimento científico não deveria estar preso em
                artigos técnicos de difícil acesso ou em laboratórios caros. A ciência é patrimônio
                da humanidade — e deve estar ao alcance de qualquer pessoa curiosa.
              </p>
              <p>
                Por isso, construímos o <strong className="text-sl-text font-600">SimuLab</strong>: um
                ambiente onde estudantes, professores e entusiastas podem experimentar física,
                química, astronomia, biologia e muito mais, diretamente no navegador, de graça.
              </p>
              <p>
                Combinamos rigor científico com design moderno e tecnologia de ponta para criar
                uma experiência que educa, encanta e inspira.
              </p>
            </div>
          </div>

          {/* Right: decorative visual */}
          <div className="relative flex items-center justify-center">
            {/* Outer glow rings */}
            <div className="absolute w-72 h-72 rounded-full border border-sl-cyan/10
                            animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-56 h-56 rounded-full border border-purple-500/10
                            animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute w-40 h-40 rounded-full border border-orange-500/10
                            animate-[spin_10s_linear_infinite]" />

            {/* Center orb */}
            <div className="relative z-10 w-40 h-40 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, rgba(0,212,255,0.04) 60%, transparent 100%)',
                boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(139,92,246,0.08)',
                border: '1px solid rgba(0,212,255,0.2)',
              }}>
              <Atom size={56} className="text-sl-cyan opacity-80" />
            </div>

            {/* Orbiting dots */}
            {[
              { color: '#06b6d4', size: 10, top: '12%',  left: '50%' },
              { color: '#8b5cf6', size: 8,  top: '75%',  left: '20%' },
              { color: '#f97316', size: 7,  top: '60%',  left: '85%' },
              { color: '#10b981', size: 9,  top: '20%',  left: '80%' },
            ].map((dot, i) => (
              <div key={i}
                className="absolute rounded-full"
                style={{
                  width: dot.size, height: dot.size,
                  top: dot.top, left: dot.left,
                  background: dot.color,
                  boxShadow: `0 0 10px ${dot.color}`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          STATS / IMPACTO
      ════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.04) 50%, transparent 100%)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ value, label, Icon, color }) => (
              <div key={label}
                className="group flex flex-col items-center text-center gap-3
                           p-6 rounded-2xl border border-sl-border
                           hover:border-white/15 hover:-translate-y-1
                           transition-all duration-300
                           bg-sl-card/40 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="font-display font-800 text-[2.2rem] leading-none"
                  style={{ color }}>
                  {value}
                </span>
                <span className="text-sl-dim text-[0.82rem] font-500 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TECNOLOGIA INOVADORA
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-purple-500/10 border border-purple-500/25 text-purple-400
                          text-[0.75rem] font-600 tracking-wider uppercase mb-6">
            <Cpu size={11} />
            Tecnologia Inovadora
          </div>
          <h2 className="font-display font-800 text-[clamp(1.8rem,3.5vw,2.6rem)]
                         leading-tight text-sl-text mb-4 tracking-tight">
            Construído com o que há de Melhor
          </h2>
          <p className="text-sl-dim text-[0.95rem] leading-relaxed max-w-2xl mx-auto">
            Cada simulação é desenvolvida com tecnologias modernas para garantir precisão
            científica, performance e acessibilidade em qualquer dispositivo.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_ITEMS.map(({ Icon, color, title, desc }) => (
            <div key={title}
              className="group flex flex-col gap-4 p-6 rounded-2xl
                         bg-sl-card border border-sl-border
                         hover:border-white/15 hover:-translate-y-1.5
                         hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center
                              transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                <Icon size={22} style={{ color }} />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-700 text-sl-text text-[1rem] mb-2
                               group-hover:text-sl-cyan transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-sl-dim text-[0.83rem] leading-relaxed">{desc}</p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-auto h-0.5 w-0 group-hover:w-full rounded-full
                              transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          NOSSOS PILARES
      ════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.04) 50%, transparent 100%)`,
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-orange-500/10 border border-orange-500/25 text-orange-400
                            text-[0.75rem] font-600 tracking-wider uppercase mb-6">
              <HeartHandshake size={11} />
              Nossos Valores
            </div>
            <h2 className="font-display font-800 text-[clamp(1.8rem,3.5vw,2.6rem)]
                           leading-tight text-sl-text tracking-tight">
              Os Pilares que nos Movem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ Icon, color, title, desc }) => (
              <div key={title}
                className="group flex flex-col items-start gap-4 p-6 rounded-2xl
                           bg-sl-card/60 border border-sl-border
                           hover:border-white/15 hover:-translate-y-1
                           transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <h3 className="font-display font-700 text-sl-text text-[0.95rem] mb-2
                                 group-hover:text-sl-cyan transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sl-dim text-[0.82rem] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SOBRE O PROJETO
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-14"
          style={{
            background: `
              radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%),
              #0f1a2e
            `,
            border: '1px solid rgba(0,212,255,0.15)',
          }}>
          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 100% 0%, rgba(139,92,246,0.12) 0%, transparent 70%)',
            }} />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                              bg-sl-cyan/10 border border-sl-cyan/25 text-sl-cyan
                              text-[0.75rem] font-600 tracking-wider uppercase mb-6">
                <Users size={11} />
                Sobre o Projeto
              </div>
              <h2 className="font-display font-800 text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1]
                             text-sl-text mb-6 tracking-tight">
                Um Projeto com <br />
                <span className="text-sl-cyan">Propósito Genuíno</span>
              </h2>
              <div className="space-y-4 text-sl-dim text-[0.92rem] leading-relaxed">
                <p>
                  O SimuLab é um projeto brasileiro, desenvolvido com paixão por ciência e educação.
                  Não somos uma corporação — somos entusiastas que acreditam no poder transformador
                  do conhecimento científico.
                </p>
                <p>
                  Nossa plataforma cresce a cada semana, com novas simulações, artigos e melhorias
                  impulsionadas pelo feedback da nossa comunidade de estudantes, professores e
                  pesquisadores de todo o Brasil.
                </p>
                <p>
                  Se você é professor, pesquisador ou desenvolvedor e quer colaborar,{' '}
                  <span className="text-sl-cyan font-500">sua contribuição é muito bem-vinda!</span>
                </p>
              </div>
            </div>

            {/* Right: stat pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Plataforma web', desc: 'Sem instalação', color: '#06b6d4' },
                { label: '100% Gratuito', desc: 'Para sempre', color: '#10b981' },
                { label: 'Open Science', desc: 'Dados reais', color: '#f59e0b' },
                { label: 'Feito no Brasil', desc: 'Com orgulho 🇧🇷', color: '#ec4899' },
              ].map(({ label, desc, color }) => (
                <div key={label}
                  className="group flex flex-col gap-1 p-5 rounded-xl
                             bg-sl-bg/60 border border-sl-border
                             hover:border-white/15 hover:-translate-y-0.5
                             transition-all duration-300"
                >
                  <span className="font-display font-700 text-[1rem]" style={{ color }}>{label}</span>
                  <span className="text-sl-dim text-[0.8rem]">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA FINAL
      ════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="text-center">
          <h2 className="font-display font-800 text-[clamp(2rem,4vw,3rem)] leading-[1.1]
                         text-sl-text mb-4 tracking-tight">
            Pronto para Explorar?
          </h2>
          <p className="text-sl-dim text-[1rem] leading-relaxed mb-10 max-w-xl mx-auto">
            Mergulhe em dezenas de simulações científicas interativas ou leia as últimas
            descobertas da ciência mundial. Tudo gratuito, tudo agora.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/simulacoes"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-700
                         text-[1rem] bg-sl-cyan text-sl-bg
                         hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(0,212,255,0.5)]
                         hover:scale-105 active:scale-95
                         transition-all duration-300"
            >
              <Rocket size={18} />
              Iniciar Simulação
            </Link>
            <Link
              to="/noticias"
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-700
                         text-[1rem] border border-sl-border text-sl-dim
                         hover:border-white/20 hover:text-sl-text hover:bg-white/5
                         hover:scale-105 active:scale-95
                         transition-all duration-300"
            >
              <BookOpen size={18} />
              Ver Notícias
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

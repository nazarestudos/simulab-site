// ─────────────────────────────────────────────────────────────
// components/SimCard.jsx
// Simulation card — hover glow ciano, ícone com scale/rotate,
// shimmer accent line e micro-interações aprimoradas.
// ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CategoryBadge, LevelBadge } from './CategoryBadge'

// ── Icon thumbnail ───────────────────────────────────────────
function SimIcon({ type, color }) {
  const icons = {
    orbit: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="4" fill={color} />
        <ellipse cx="20" cy="20" rx="16" ry="8" stroke={color} strokeWidth="2" fill="none"
                 transform="rotate(-30 20 20)" />
        <circle cx="12" cy="14" r="2" fill={color} opacity="0.6" />
      </svg>
    ),
    wave: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M4 20 Q10 10 16 20 Q22 30 28 20 Q34 10 40 20"
              stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="20" y1="8" x2="20" y2="32" stroke={color} strokeWidth="1.5"
              strokeDasharray="2 3" opacity="0.4" />
      </svg>
    ),
    zap: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <polygon points="22,4 8,22 20,22 18,36 32,18 20,18"
                 fill={color} opacity="0.9" />
      </svg>
    ),
    waves: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M4 16 Q10 8 16 16 Q22 24 28 16 Q34 8 40 16"
              stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M4 24 Q10 16 16 24 Q22 32 28 24 Q34 16 40 24"
              stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    bio: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4 C20 4 28 12 28 20 C28 28 20 36 20 36 C20 36 12 28 12 20 C12 12 20 4 20 4Z"
              stroke={color} strokeWidth="2" fill="none" />
        <line x1="12" y1="20" x2="28" y2="20" stroke={color} strokeWidth="2" />
        <circle cx="20" cy="14" r="2" fill={color} />
        <circle cx="20" cy="26" r="2" fill={color} />
      </svg>
    ),
    flask: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M15 6 L15 20 L6 34 L34 34 L25 20 L25 6"
              stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13" y1="6" x2="27" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="28" r="2" fill={color} opacity="0.7" />
        <circle cx="22" cy="26" r="1.5" fill={color} opacity="0.5" />
        <circle cx="18" cy="31" r="1" fill={color} opacity="0.6" />
      </svg>
    ),
  }
  return icons[type] ?? icons.zap
}

// ── Standard card for Simulations page grid ─────────────────
export function SimCard({ sim, className = '' }) {
  return (
    <div
      className={`group flex flex-col bg-sl-card rounded-2xl overflow-hidden
                  border border-sl-border hover:border-white/20
                  transition-all duration-300 hover:-translate-y-1.5
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,212,255,0.08)] ${className}`}
    >
      {/* Icon thumbnail */}
      <div
        className="h-44 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${sim.iconColor}20 0%, transparent 70%),
                       linear-gradient(135deg, #0f1a2e 0%, #0b1222 100%)`,
        }}
      >
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${sim.iconColor}40 1px, transparent 1px),
                               linear-gradient(90deg, ${sim.iconColor}40 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Glow orb on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${sim.iconColor}15 0%, transparent 60%)`,
          }}
        />
        <div className="relative z-10 p-4 rounded-2xl
                        transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: `${sim.iconColor}18`, border: `1px solid ${sim.iconColor}30` }}>
          <SimIcon type={sim.icon} color={sim.iconColor} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <CategoryBadge category={sim.category} />
        </div>
        <h3 className="font-display font-700 text-sl-text text-[1rem] leading-snug
                       group-hover:text-sl-cyan transition-colors duration-200">
          {sim.title}
        </h3>
        <p className="text-sl-dim text-[0.83rem] leading-relaxed line-clamp-2 flex-1">
          {sim.description}
        </p>
        <Link
          to={`/simulacoes/${sim.id}`}
          className="mt-1 flex items-center gap-1.5 text-sl-cyan text-[0.83rem] font-600
                     hover:gap-3 hover:text-cyan-300 active:scale-95
                     transition-all duration-200 group/btn w-fit"
        >
          <span>Iniciar Simulação</span>
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>

      {/* Bottom accent shimmer on hover */}
      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${sim.iconColor}, transparent)` }}
      />
    </div>
  )
}

// ── Compact sim card for Home featured ───────────────────────
export function SimCardHome({ sim }) {
  return (
    <Link
      to={`/simulacoes/${sim.id}`}
      className="group flex flex-col bg-sl-card rounded-2xl overflow-hidden
                 border border-sl-border hover:border-white/20
                 transition-all duration-300 hover:-translate-y-1.5
                 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(0,212,255,0.06)]"
    >
      {/* Image / icon bg */}
      <div
        className="h-44 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${sim.iconColor}22 0%, transparent 70%),
                       linear-gradient(135deg, #0f1a2e 0%, #0b1222 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${sim.iconColor}40 1px, transparent 1px),
                               linear-gradient(90deg, ${sim.iconColor}40 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }} />

        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${sim.iconColor}18 0%, transparent 60%)`,
          }}
        />

        {/* Play overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center
                        opacity-0 group-hover:opacity-100 transition-all duration-300
                        bg-black/15">
          <div className="w-13 h-13 rounded-full bg-sl-cyan flex items-center justify-center
                          shadow-[0_0_24px_rgba(0,212,255,0.5)]
                          scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 translate-x-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 p-4 rounded-2xl
                        transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${sim.iconColor}18`, border: `1px solid ${sim.iconColor}30` }}>
          <SimIcon type={sim.icon} color={sim.iconColor} />
        </div>
      </div>

      {/* Footer */}
      <div className="p-4">
        <CategoryBadge category={sim.category} className="mb-2" />
        <h3 className="font-display font-700 text-sl-text text-[0.95rem] leading-snug
                       group-hover:text-sl-cyan transition-colors duration-200">
          {sim.title}
        </h3>
      </div>

      {/* Bottom shimmer */}
      <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${sim.iconColor}, transparent)` }}
      />
    </Link>
  )
}

// ── Related sim card (sidebar) ───────────────────────────────
export function SimCardRelated({ sim }) {
  return (
    <Link
      to={`/simulacoes/${sim.id}`}
      className="group flex flex-col gap-2 bg-sl-card/60 rounded-xl p-4
                 border border-sl-border hover:border-white/15
                 transition-all duration-200 hover:bg-sl-card2 hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between gap-2">
        <CategoryBadge category={sim.category} />
        <LevelBadge level={sim.level} />
      </div>
      <h4 className="font-display font-600 text-sl-text text-[0.88rem] leading-snug
                     group-hover:text-sl-cyan transition-colors duration-200">
        {sim.title}
      </h4>
    </Link>
  )
}

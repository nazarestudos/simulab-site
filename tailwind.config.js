/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ── SimuLab Design Tokens ──────────────────────────────────────
      colors: {
        // Backgrounds
        'sl-bg':       '#070c18',
        'sl-bg2':      '#0b1222',
        'sl-card':     '#0f1a2e',
        'sl-card2':    '#132038',
        // Accent
        'sl-cyan':     '#00d4ff',
        'sl-cyan-dim': 'rgba(0,212,255,0.15)',
        'sl-purple':   '#8b5cf6',
        'sl-orange':   '#f97316',
        // Text
        'sl-text':     '#ffffff',
        'sl-dim':      '#6b84a8',
        'sl-muted':    '#3d5273',
        // Borders
        'sl-border':   'rgba(255,255,255,0.07)',
        // Category palette
        'cat-astro':   '#f97316',
        'cat-fis':     '#06b6d4',
        'cat-bio':     '#10b981',
        'cat-quim':    '#f59e0b',
        'cat-med':     '#ec4899',
        'cat-info':    '#8b5cf6',
        'cat-mat':     '#6366f1',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(ellipse 90% 70% at 55% -15%, rgba(0,212,255,0.14) 0%, transparent 65%),
          radial-gradient(ellipse 60% 50% at 85% 85%, rgba(249,115,22,0.07) 0%, transparent 60%),
          radial-gradient(ellipse 40% 40% at 10% 80%, rgba(139,92,246,0.06) 0%, transparent 60%)
        `,
      },
      keyframes: {
        'float-in': {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          '50%':      { boxShadow: '0 0 44px rgba(0,212,255,0.45)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'float-in':   'float-in 0.5s ease-out forwards',
        'fade-up':    'fade-up 0.4s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer:      'shimmer 2s linear infinite',
        'spin-slow':  'spin-slow 20s linear infinite',
        'slide-down': 'slide-down 0.25s ease-out',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}

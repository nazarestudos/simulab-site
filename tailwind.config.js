/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ── SimuLab Design Tokens ──────────────────────────────────────
      colors: {
        // Backgrounds
        'sl-bg':       '#070c18',   // deepest background
        'sl-bg2':      '#0b1222',   // slightly lighter
        'sl-card':     '#0f1a2e',   // card surface
        'sl-card2':    '#132038',   // card hover / slightly lighter
        // Accent
        'sl-cyan':     '#00d4ff',   // primary cyan accent
        'sl-cyan-dim': 'rgba(0,212,255,0.15)',
        // Text
        'sl-text':     '#ffffff',
        'sl-dim':      '#6b84a8',   // secondary text
        'sl-muted':    '#3d5273',   // muted / placeholders
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
        // Display: Outfit – clean, geometric, sci-fi feel
        // Body: DM Sans – refined, readable
        display: ['Outfit', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 60% -10%, rgba(0,212,255,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(249,115,22,0.06) 0%, transparent 60%)',
      },
      keyframes: {
        'float-in': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(0,212,255,0.4)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-in':   'float-in 0.5s ease-out forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer:      'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
}

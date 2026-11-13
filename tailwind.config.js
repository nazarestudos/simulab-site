/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ── SimuLab Design Tokens — monochrome, premium ─────────────────
      colors: {
        // Backgrounds — near-black stepped surface scale
        'sl-bg':       '#000000',
        'sl-bg2':      '#070707',
        'sl-card':     '#0e0e0e',
        'sl-card2':    '#161616',
        // Text — true grayscale
        'sl-text':     '#ffffff',
        'sl-dim':      '#9a9a9a',
        'sl-muted':    '#767676',
        // Borders — brutalismo: arestas mais presentes, estruturais
        'sl-border':   'rgba(255,255,255,0.10)',
        'sl-border2':  'rgba(255,255,255,0.20)',
        'sl-hard':     'rgba(255,255,255,0.28)',
        // Category palette — desaturated, wayfinding accents only
        'cat-fisc':    '#8a97a6',
        'cat-fisq':    '#7a8fa8',
        'cat-mat':     '#8c8aa6',
        'cat-quim':    '#a89a7a',
        'cat-astro':   '#a6897a',
        'cat-bio':     '#7ea88f',
        'cat-med':     '#a67e93',
        'cat-info':    '#8f7ea6',
      },
      fontFamily: {
        // Grotesca unificada. Display usa a versão Expanded (larga, suíça,
        // impactante); corpo/UI usa Archivo normal; mono para dados.
        display: ['Archivo', 'sans-serif'],   // + font-stretch: 125% (index.css)
        body:    ['Archivo', 'sans-serif'],
        mono:    ['Archivo', 'sans-serif'],   // sem mono: uma família só
      },
      // O projeto usa classes numéricas (font-300 … font-900). Sem esta
      // escala elas não existem no Tailwind e tudo cai para o peso 400.
      fontWeight: {
        // Três pesos no site inteiro: texto, rótulo/botão, título.
        400: '400', 500: '500', 700: '700', 800: '800',
      },
      fontSize: {
        // Statement typography — maior, mais agressiva (brutalismo refinado)
        'hero':        ['clamp(2.4rem, 9vw, 8.5rem)',    { lineHeight: '0.9',  letterSpacing: '-0.045em' }],
        'display-xl':  ['clamp(2.8rem, 8vw, 7rem)',      { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        'display-lg':  ['clamp(2.2rem, 5.5vw, 4.5rem)',  { lineHeight: '0.94', letterSpacing: '-0.035em' }],
        'display-md':  ['clamp(1.7rem, 3.6vw, 2.8rem)',  { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'display-sm':  ['clamp(1.3rem, 2.2vw, 1.8rem)',  { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        // Label — system UI / captions
        'label':       ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'section': 'clamp(6rem, 12vh, 10rem)',
        'section-sm': 'clamp(4rem, 8vh, 7rem)',
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(ellipse 80% 60% at 50% -20%, rgba(255,255,255,0.05) 0%, transparent 65%),
          radial-gradient(ellipse 50% 40% at 80% 90%, rgba(255,255,255,0.02) 0%, transparent 55%)
        `,
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-down': {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'counter-up': {
          '0%':   { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer:      'shimmer 2.5s linear infinite',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        marquee:      'marquee 40s linear infinite',
        'counter-up': 'counter-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in':  'cubic-bezier(0.7, 0, 0.84, 0)',
        'quint-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: { 100: '100ms', 150: '150ms', 200: '200ms', 300: '300ms' },
    },
  },
  plugins: [],
}

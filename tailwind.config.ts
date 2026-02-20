import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e7eeff',
          500: '#4f7cff',
          600: '#3f67e6',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px rgba(2,8,23,0.35)',
      },
      backgroundImage: {
        'grid-light': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
} satisfies Config;

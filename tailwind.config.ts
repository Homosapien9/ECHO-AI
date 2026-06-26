import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#22d3ee',
        surface: '#0b1120',
        panel: '#111827',
      },
      boxShadow: {
        neon: '0 0 32px rgba(124,58,237,0.28)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(0.98)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        loaderFade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        glitchSlice: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        loaderFade: 'loaderFade 380ms ease forwards',
        glitchSlice: 'glitchSlice 700ms steps(2) infinite',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config

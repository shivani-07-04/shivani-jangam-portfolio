/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { /* ...your palette... */ },
        secondary: { /* ...your palette... */ },
        accent: { /* ...your palette... */ },
        success: { /* ...your palette... */ },
        warning: { /* ...your palette... */ },
        error: { /* ...your palette... */ },
        brand: { /* ...your palette... */ },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase }) {
      addBase({
        'h1': { fontSize: '2.25rem', fontWeight: '700' },
        'h2': { fontSize: '1.75rem', fontWeight: '600' },
        'p': { fontSize: '1rem', lineHeight: '1.75' },
      });
    }),
  ],
};

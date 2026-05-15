/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      colors: {
        ivory: {
          50: '#fdfdf8',
          100: '#f9f8f0',
          200: '#f2f0e0',
          300: '#e8e4cc',
        },
        sage: {
          200: '#c9d5c0',
          400: '#8fab80',
          600: '#5a7a52',
          800: '#3a5232',
        },
        blush: {
          100: '#f5e6e0',
          300: '#e8c4b8',
          500: '#d4896a',
        },
        gold: {
          300: '#e8d5a0',
          400: '#d4b96a',
          500: '#c4a044',
          600: '#a07830',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

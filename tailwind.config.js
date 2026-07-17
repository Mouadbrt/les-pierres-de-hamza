/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11110f',
        charcoal: '#1b1b18',
        ivory: '#f5f2ea',
        cream: '#e8e0d1',
        sand: '#c7b79d',
        stone: '#8d8a83',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.18em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
}

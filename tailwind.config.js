const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors:{
      'primary': '#7548F2',
      'primary-200': '#E9D7FE',
      'light-primary': '#F9F5FF',
      'gray' : '#667085',
      'black': '#101828',
      'white': '#ffffff',
      'red': '#F24739'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
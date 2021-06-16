const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '18': '4.5rem'
      },
      height: {
        '18': '4.5rem'
      },
      colors: {
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
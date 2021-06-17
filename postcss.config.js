module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-color-mod-function')
  ],
}

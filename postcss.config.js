module.exports = {
  plugins: [
    require('autoprefixer')({
      flexbox: 'no-2009',
      grid: 'autoplace',
    }),
    require('stylelint')(),
  ],
};
module.exports = {
  plugins: [
    require('postcss-combine-media-query')(),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};

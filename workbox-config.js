// eslint-disable-next-line no-undef
module.exports = {
  navigateFallback: '/index.html',
  // where to output the generated sw
  swDest: 'dist/sw.js',
  // directory to match patterns against to be precached
  globDirectory: 'dist/',
  // cache only non-legacy non-polyfill JS
  globPatterns: ['*.{html,js,css}'],
};

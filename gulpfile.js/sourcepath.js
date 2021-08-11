module.exports = {
  src: './src',
  dest: './dist',

  html: {
    src: 'src/html/pages/*.pug',
    dest: 'dist/',
    watch: 'src/html/**/*.pug',
  },

  js: {
    src: 'src/js/app.js',
    dest: 'dist/js/',
    watch: 'src/js/**/*.js',
  },

  css: {
    src: 'src/scss/style.scss',
    dest: 'dist/css/',
    watch: 'src/scss/**/*.scss',
  },

  image: {
    src: 'src/img/**/*.+(jpg|jpeg|gif|png)',
    dest: 'dist/img/',
    watch: 'src/img/**/*.+(jpg|jpeg|gif|png)',
  },
  sprite: {
    src: 'src/img/sprite/*.svg',
    dest: 'dist/img/',
    watch: 'src/img/sprite/*.svg',
  },
  fonts: {
    src: 'src/fonts/**.*',
    dest: 'dist/fonts/',
    watch: 'src/fonts/**.*',
  },
};

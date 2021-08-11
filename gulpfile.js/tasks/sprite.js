const { task, dest, src } = require('gulp');
const imagemin = require('gulp-imagemin');
const svgStore = require('gulp-svgstore');
const rename = require('gulp-rename');
const sourcepath = require('../sourcepath');

const sprite = () => src(sourcepath.sprite.src)
  .pipe(
    imagemin([
      imagemin.svgo({
        plugins: [{ removeViewBox: false }],
      }),
    ]),
  )
  .pipe(
    svgStore({
      inlineSvg: true,
    }),
  )
  .pipe(rename('sprite.svg'))
  .pipe(dest(sourcepath.sprite.dest));
task('sprite', sprite);
exports.default = sprite;

const { src, dest, task } = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const browser = require('browser-sync');
const sourcepath = require('../sourcepath');

const html = () => src(sourcepath.html.src)
  .pipe(plumber())
  .pipe(
    pug({
      pretty: true, // false to prod
    }),
  )
  .pipe(dest(sourcepath.html.dest))
  .pipe(browser.reload({ stream: true }));

task('html', html);
exports.default = html;

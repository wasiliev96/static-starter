const { src, dest, task } = require('gulp');
const browser = require('browser-sync');
const sourcepath = require('../sourcepath');

// Just take fonts to dist
const fonts = () => src([sourcepath.fonts.src])
  .pipe(dest(sourcepath.fonts.dest))
  .pipe(browser.reload({ stream: true }));

task('fonts', fonts);
exports.default = fonts;

const requireDir = require('require-dir');
const {
  task, parallel, series, watch,
} = require('gulp');
const sourcepath = require('./sourcepath');

requireDir('./tasks', { recurse: true });

// WATCHERS
task('watch:fonts', () => watch(sourcepath.fonts.watch, series('fonts'))); // inactive
task('watch:scripts', () => watch(sourcepath.js.watch, series('js'))); // inactive
task('watch:images', () => watch(sourcepath.image.watch, series('img'))); // inactive

task('watch:dev', () => watch(
  [sourcepath.css.watch, sourcepath.html.watch, sourcepath.js.watch],
  series('html', 'css', 'js'),
));
const watchDev = parallel('watch:dev', 'server');
task('watch', watchDev);

// BUILD
const buildDev = series('clean', 'fonts', 'html', 'js', 'css', 'img', 'sprite');
task('build:dev', buildDev);

const dev = series('build:dev', 'watch');

task('default', dev);
exports.default = {
  watchDev,
  dev,
};

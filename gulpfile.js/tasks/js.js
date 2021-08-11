const { src, dest, task } = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browser = require('browser-sync');
const stream = require('webpack-stream');
const sourcepath = require('../sourcepath');
const webpackConfig = require('../../webpack.config.js');

// JS proceed by webpack
const js = () => src(sourcepath.js.src)
  .pipe(stream(webpackConfig))
  .pipe(dest(sourcepath.js.dest))
  .pipe(browser.reload({ stream: true }));

task('js', js);
exports.default = js;

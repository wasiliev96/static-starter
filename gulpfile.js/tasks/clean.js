const { src, task, parallel } = require('gulp');
const del = require('del');
const cache = require('gulp-cache');
const sourcepath = require('../sourcepath');

const cleanDest = () => del(sourcepath.dest);

const cleanCache = () => cache.clearAll();

task('clean:dest', cleanDest);
task('clean:cache', cleanCache);

const clean = parallel('clean:cache', 'clean:dest');
task('clean', clean);

exports.default = { cleanDest, cleanCache, clean };

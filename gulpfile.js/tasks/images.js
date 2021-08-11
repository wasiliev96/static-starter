const { task, src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const cache = require('gulp-cache');
const rename = require('gulp-rename');
const browser = require('browser-sync');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const clone = require('gulp-clone');
const sourcepath = require('../sourcepath');

const clonesink = clone.sink();

const img = () => src(sourcepath.image.src)
  .pipe(plumber())
  .pipe(
    cache( // cache changes to prevent proceed all images on small change
      imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.optipng({ optimizationLevel: 3 }),
          imagemin.mozjpeg({ progressive: true }),
          imageminJpegRecompress({
            loops: 5,
            min: 65,
            max: 70,
            quality: 'medium',
          }),
          imagemin.svgo(),
          pngquant({
            quality: [0.65, 0.7],
            speed: 5,
          }), // better work with optipng
        ],
        { verbose: true },
      ),
    ),
  )
  .pipe(clonesink) // create separate files for .webp format
  .pipe(webp({ quality: 70 }))
  .pipe(clonesink.tap())
  .pipe(dest(sourcepath.image.dest))
  .pipe(browser.reload({ stream: true }));

task('img', img);
exports.default = img;

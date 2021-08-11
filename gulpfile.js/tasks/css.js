const { src, dest, task } = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const normalize = require('postcss-normalize');
const sass = require('gulp-sass');
const browser = require('browser-sync');
const font = require('postcss-font-magician');
const critical = require('critical');
const sourcepath = require('../sourcepath');

const postcssConfig = {
  development: {
    css: [
      normalize({
        // remove unused normalize styles(for browsers not listed in `browsers` prop)
        browsers: 'last 2 versions', // put there your browserlist setting
      }),
      autoprefixer(),
      font({
        // generate @font-face. Can auto get from google cdn, require config to achieve
        display: 'swap',
        custom: {
          // Put here your fonts
          // Raleway: {
          //   variants: {
          //     normal: {
          //       400: {
          //         url: {
          //           woff2: '../fonts/raleway-v19-latin_cyrillic-regular.woff2',
          //           woff: '../fonts/raleway-v19-latin_cyrillic-regular.woff',
          //         },
          //       },
          //     },
          //   },
          // },
        },
      }),
    ],
  },
};

const criticalUrl = {
  // pages that need extract critical css
  homepage: ['index'], // output file be homepage-index.css
  // pages:['category-1','category-2'],
  // blogPages:['blog','blog-inner'],
};

// Extract page critical(first screen) css to separate file
const criticalCSS = async () => {
  for (const key in criticalUrl) {
    for (const page of criticalUrl[key]) {
      const outputFilename = `${key}-${page}.css`;
      critical.generate({
        base: sourcepath.dest,
        src: `${page}.html`,
        dimensions: [
          // set media queries here
          {
            width: 320,
            height: 480,
          },
          {
            width: 768,
            height: 1024,
          },
          {
            width: 1280,
            height: 960,
          },
        ],
        // Output results to file
        target: {
          css: `css/${outputFilename}`,
          // html: 'index-critical.html', // can inline css into target page head
          // uncritical: "style.css",
        },
        minify: true,
        // extract: true,
        ignore: ['font-face', /url\(/], // ignore rulesw
      });
    }
  }
};

const css = () => src(sourcepath.css.src)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss(postcssConfig.development.css))
// .pipe(cssMin())
  .pipe(sourcemaps.write('.'))
  .pipe(dest(sourcepath.css.dest))
  .pipe(browser.reload({ stream: true }));

task('css', css);
task('criticalCSS', criticalCSS);
exports.default = { css, criticalCSS };

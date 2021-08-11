const { src, dest, task } = require('gulp');
const browser = require('browser-sync');
const sourcepath = require('../sourcepath');

const server = () => {
  browser.init({
    server: {
      baseDir: sourcepath.dest,
    },
  });
};
task('server', server);
exports.default = server;

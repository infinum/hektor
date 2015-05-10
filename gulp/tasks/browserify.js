var babelify = require('babelify');
var aliasify = require('aliasify');
var hbsfy = require('hbsfy');

module.exports = function(gulp, H, options) {
  options = options || false;

  gulp.task('browserify', function() {
    return gulp.src(options.src || H.paths.app + '/scripts/main.js')
      .pipe(H.deps.plumber({
        errorHandler: H.deps.notify.onError('Browserify: <%= error.message %>')
      }))
      .pipe(H.deps.browserify2({
        fileName: options.main || 'main.js',
        transform: [
          babelify.configure(options.babelify || {
            stage: 2
          }),
          {
            tr: aliasify,
            options: options.aliasify || {}
          },
          {
            tr: hbsfy,
            options: {
              compiler: 'require("hektor/node_modules/hbsfy/runtime")'
            }
          }
        ],
        options: {
          paths: options.nodePath || process.env.NODE_PATH,
          debug: !!options.debug
        }
      }))
      .pipe(gulp.dest(options.dest || '.tmp/scripts'))
      .pipe(H.deps.connect.reload());
  });
};

var babelify = require('babelify');
var aliasify = require('aliasify');
var hbsfy = require('hbsfy');

module.exports = function(gulp, H, options) {
  options = options || false;

  gulp.task('browserify', function() {
    return gulp.src(options.src || 'app/scripts/main.js')
      .pipe(H.plumber({
        errorHandler: H.notify.onError('Browserify: <%= error.message %>')
      }))
      .pipe(H.browserify2({
        fileName: options.main || 'main.js',
        transform: [
          babelify.configure(options.babelConfig || {
            stage: 1
          }),
          {
            tr: aliasify,
            options: options.aliasify || {}
          },
          hbsfy
        ],
        options: {
          paths: options.nodePath || process.env.NODE_PATH,
          debug: !!options.debug
        }
      }))
      .pipe(gulp.dest(options.dest || '.tmp/scripts'));
  });
};

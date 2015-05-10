module.exports = function(gulp, H, options) {
  options = options || false;
  return gulp.task('sass', function() {
    return gulp.src(options.src || 'app/styles/main.scss')
      .pipe(H.plumber({
        errorHandler: H.notify.onError('Sass: <%= error.message %>')
      }))
      .pipe(H.sourcemaps.init())
      .pipe(H.sass({
        includePaths: options.includePaths || 'app/bower_components'
      }))
      .pipe(H.autoprefixer({
          browsers: options.browsers || ['last 2 versions', 'ie 10'],
          cascade: false
      }))
      .pipe(H.sourcemaps.write())
      .pipe(gulp.dest(options.dest || '.tmp/styles'));
  });
};

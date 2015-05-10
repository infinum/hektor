module.exports = function(gulp, H, options) {

  // Options should always be optional
  options = options || false;

  // Create a standard gulp task
  return gulp.task('sass', function() {

    // By default, tasks run with maximum concurrency (https://github.com/gulpjs/gulp/blob/master/docs/API.md#async-task-support)
    // That's why a task should _ALWAYS_ do one of the following:
    // * return a stream
    // * return a promise
    // * call the callback function (the only argument in the task function)
    //   callback should get (null|undefined) as only argument if all OK, or an error object
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

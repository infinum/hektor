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
    return gulp.src(options.src || H.paths.app + '/styles/main.scss')
      .pipe(H.deps.plumber({
        errorHandler: H.deps.notify.onError('Sass: <%= error.message %>')
      }))
      .pipe(H.deps.sourcemaps.init())
      .pipe(H.deps.sass({
        includePaths: options.includePaths || H.paths.app + '/bower_components'
      }))
      .pipe(H.deps.autoprefixer({
          browsers: options.browsers || ['last 2 versions', 'ie 10'],
          cascade: false
      }))
      .pipe(H.deps.sourcemaps.write())
      .pipe(gulp.dest(options.dest || '.tmp/styles'))
      .pipe(H.deps.connect.reload());
  });
};

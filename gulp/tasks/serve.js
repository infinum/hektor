var _ = require('lodash');

module.exports = function(gulp, H, options) {
  options = options || false;

  var watch = options.watch || {
    'app/styles/{,**/}*.scss': ['sass'],
    'app/scripts/{,**/}*.{js,hbs}': ['browserify']
  };

  // Get all tasks that are called, and run them before the server is started
  // Is it safe to do compact here?
  var deps = _(watch).values().flatten().compact().value();

  gulp.task('serve', function() {
    H.run(deps, options.server || 'connect', function() {
      _.each(watch, function(tasks, path) {
        gulp.watch(path, tasks);
      });
    });
  });
};

var _ = require('lodash');

module.exports = function(gulp, H, options) {
  options = options || false;

  var watch = options.watch || {
    'app/styles/{,**/}*.scss': ['sass'],
    'app/scripts/{,**/}*.{js,hbs}': ['browserify']
  };

  var deps = _(watch).values().flatten().push('connect').value();

  gulp.task('serve', deps, function() {
    _.each(watch, function(tasks, path) {
      gulp.watch(path, tasks);
    });
  });
};
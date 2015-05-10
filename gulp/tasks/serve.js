var _ = require('lodash');

module.exports = function(gulp, H, options) {
  options = options || false;

  var defaultWatch = {};
  defaultWatch[H.paths.app + '/styles/{,**/}*.scss'] = ['sass'];
  defaultWatch[H.paths.app + '/scripts/{,**/}*.{js,hbs}'] = ['browserify'];

  var watch = options.watch || defaultWatch;

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

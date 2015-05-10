module.exports = function(gulp, H, options) {
  options = options || false;

  gulp.task('connect', function(callback) {
    try {
      H.deps.connect.server(options.config || {
        root: ['.tmp', 'app'],
        port: 9100,
        livereload: {
          port: 10100
        }
      });
      callback();
    } catch(e) {
      callback(e);
    }
  });
};

module.exports = function(gulp, H, options) {
  options = options || false;

  gulp.task('nodemon', function(callback) {
    try {
      H.deps.nodemon(options || {
        script: 'index.js',
        ext: 'js',
        ignore: [
          '.tmp/**',
          'app/*',
          'node_modules/*'
        ]
      });
      callback();
    } catch(e) {
      callback(e);
    }
  });
};
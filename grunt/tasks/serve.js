module.exports = function(grunt) {
  return function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
    }

    if (target === 'test') {
      return grunt.task.run([
        'clean:server',
        'createDefaultTemplate',
        'handlebars',
        'connect:test',
        'open:test',
        'watch'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'createDefaultTemplate',
      'translations',
      'handlebars',
      'spritem',
      'sass',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  };
};
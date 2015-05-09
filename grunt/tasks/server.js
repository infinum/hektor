module.exports = function(grunt) {
  grunt.registerTask('server', 'Serve the app', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    var args = Array.prototype.slice.call(arguments);
    grunt.task.run(['serve' + args.length > 0 ? (':' + args.join(':')) : '']);
  });
};
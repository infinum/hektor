module.exports = function(grunt) {
  grunt.loadTasks('node_modules/hektor/grunt/tasks');

  grunt.initConfig({
    open: {
      google: {
        path: 'http://google.com'
      }
    },
    notify: {
      hw: {
        options: {
          message: 'Hello world!'
        }
      },
      foo: {
        options: {
          message: "Bar"
        }
      }
    }
  });
};

module.exports = function(grunt) {
  // Require hektor and give it a grunt reference
  var hektor = require('../../grunt/main')(grunt);

  // This calls grunt.initConfig with your configuration deep merged with hektor default config
  hektor.initConfig({
    open: {
      google: {
        path: 'http://google.com'
      }
    }
  });

  // You can insert an array of default tasks here, no args registers all default tasks
  hektor.registerTasks();

  // You can register your custom task
  hektor.registerTask('custom', function() {
    grunt.log.write('This is my custom task!!');
  });
};
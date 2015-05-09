module.exports = function(grunt) {
  grunt.initConfig({
    open: {
      google: {
        path: 'http://google.com'
      }
    }
  });

  // Needs to be called after initConfig!
  require('hektor/grunt')(grunt);
};

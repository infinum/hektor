module.exports = function(grunt) {
  grunt.initConfig({
    paths: {
      app: 'app',
      dist: 'dist'
    },

    open: {
      google: {
        path: 'http://google.com'
      }
    },

    autoprefixer: require('hektor/grunt/config/autoprefixer')(['chrome 30', 'ios 7'])
  });

  // Needs to be called after initConfig!
  require('hektor/grunt')(grunt).loadAll();

  // It's also posible to load tasks one by one...
  // require('hektor/grunt')(grunt).load('notify');

  // ...or with an array
  // require('hektor/grunt')(grunt).load(['notify', 'open']);


  // You can still define your own
  grunt.registerTask('scss', ['sass:dist', 'autoprefixer:dist']);
};

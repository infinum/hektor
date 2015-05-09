module.exports = function(grunt) {
  grunt.initConfig({
    open: {
      google: {
        path: 'http://google.com'
      }
    }
  });

  // Needs to be called after initConfig!
  require('hektor/grunt')(grunt).loadAll();

  // It's also posible to load tasks one by one...
  // require('hektor/grunt')(grunt).load('notify');

  // ...or with an array
  // require('hektor/grunt')(grunt).load(['notify', 'open']);
};

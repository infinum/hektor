var gulp = require('gulp');

// H contains all the loaded tasks (including all the hektor gulp dependencies)
var H = require('hektor/gulp')(gulp).load({
  sass: {
    browsers: ['chrome 40', 'ios 7']
  }
});

// Load receives a task name, array of task names or object with taskName: taskOptions
// var H = require('hektor/gulp')(gulp).load('sass');

gulp.task('scss', ['sass'], function() {}); // Alias for sass, could also contain other tasks
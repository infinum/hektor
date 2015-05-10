var gulp = require('gulp');

// H is an object with two properties: deps (HEKTOR's gulp deps) and tasks (loaded HEKTOR tasks)
var H = require('hektor/gulp')(gulp).load({
  sass: {
    browsers: ['chrome 40', 'ios 7']
  },
  browserify: {
    aliasify: {
      aliases: {
        underscore: 'lodash'
      }
    }
  }
});

// Load receives a task name, array of task names or object with taskName: taskOptions
// var H = require('hektor/gulp')(gulp).load('sass');

gulp.task('scss', ['sass'], function() {}); // Alias for sass, could also contain other tasks
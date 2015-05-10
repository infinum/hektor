var gulp = require('gulp');

// H is an object with following properties:
// * deps (HEKTOR's gulp deps)
// * tasks (loaded HEKTOR tasks)
// * run - https://www.npmjs.com/package/run-sequence
// * paths - app, dist (used in task options)
var H = require('hektor/gulp')(gulp, { app: 'app', dist: 'dist'}).load({
  sass: {
    browsers: ['chrome 40', 'ios 7']
  },
  browserify: {
    aliasify: {
      aliases: {
        underscore: 'lodash'
      }
    }
  },
  serve: {}
});

// Load receives a task name, array of task names or object with taskName: taskOptions
// var H = require('hektor/gulp')(gulp).load('sass');

gulp.task('scss', ['sass'], function() {}); // Alias for sass, could also contain other tasks
module.exports = function(grunt) {
  var taskCompose = require('../utils/task-compose')(grunt);
  taskCompose('style', ['sass', 'autoprefixer']);
};
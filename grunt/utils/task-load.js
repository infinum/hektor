var path = require('path');
var _ = require('lodash');

module.exports = function(taskName, originalTask, cb) {

  // Set the defaults
  var taskOptions = _.extend({
    name: taskName, // Name of the task in the package
    taskFile: taskName, // Name of the task file
    packageName: 'grunt-' + taskName, // task package name
    path: 'tasks' // path to the task inside of the package
  }, originalTask || {});

  return function(grunt) {

    // Remember the original working directory
    var originalCWD = process.cwd();

    // Set the target package as current working directory
    var hektorModulesPath = __dirname + '../../../node_modules/';
    var packageCWD = path.normalize(hektorModulesPath + taskOptions.packageName);
    process.chdir(packageCWD);

    // Initialize the task
    require(taskOptions.packageName + '/' + taskOptions.path + '/' + taskOptions.taskFile)(grunt);

    // Restore the current working directory
    process.chdir(originalCWD);

    // Set the default config if we didn't set any and the default is defined
    if (!grunt.config.get(taskName)) {
      try {
        var config = require('../config/' + taskName);

        // Config can be a function that can receive some arguments. Those arguments must be optional.
        grunt.config.set(taskName, typeof config === 'function' ? config() : config);
      } catch(e) {}
    }

    // Call the callback (e.g. if this is used from task-wrap)
    if (cb) {
      cb(taskOptions);
    }
  };
};

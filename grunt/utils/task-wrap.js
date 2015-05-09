var taskLoad = require('./task-load');

module.exports = function(taskName, originalTask, transformer) {
  return function(grunt) {

    // Load the wanted task
    taskLoad(taskName, originalTask, function(taskOptions) {

      // Function that will transform our options into options that the wrapped task accepts
      transformer = transformer || function(options) { return options; };

      // Wrapped task name
      var wrappedTaskName = '_hektor_' + taskOptions.name;

      // Rename the loaded task
      grunt.task.renameTask(taskOptions.name, wrappedTaskName);

      // Register our wrapper task
      var description = grunt.task._tasks[wrappedTaskName].info;
      grunt.registerTask(taskName, description, function(target) {

        // Transform the options
        grunt.config.set(wrappedTaskName, transformer(grunt.config.get(taskName)));

        // Call the wrapped task
        var taskCall = target ? (wrappedTaskName + ':' + target) : wrappedTaskName;
        grunt.task.run(taskCall);
      });
      
    })(grunt);
  };
};
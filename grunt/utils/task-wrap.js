var taskLoad = require('./task-load');

module.exports = function(taskName, originalTask, transformer) {
  return function(grunt) {

    // Load the wanted task
    taskLoad(taskName, originalTask, function(taskOptions) {

      // Function that will transform our options into options that the wrapped task accepts
      transformer = transformer || function(options) { return options; };

      // Rename the loaded task with our prefix
      var wrappedTaskName = '_hektor_' + taskOptions.name;
      grunt.task.renameTask(taskOptions.name, wrappedTaskName);

      // Transform the options
      // getRaw is used in order to keep the <% %> templates
      grunt.config.set(wrappedTaskName, transformer(grunt.config.getRaw(taskName)));

      // Get the task description
      var wrappedDescription;
      try {
        // This is an undocumented grunt feature. That's why it's inside of a try-catch block
        wrappedDescription = grunt.task._tasks[wrappedTaskName].info;
      } catch(e) {}
      var description = taskOptions.description || wrappedDescription;

      // Register our wrapper task
      grunt.registerTask(taskName, description, function(target) {

        // Call the wrapped task, take care of the target
        var taskCall = target ? (wrappedTaskName + ':' + target) : wrappedTaskName;
        grunt.task.run(taskCall);
      });

    })(grunt);
  };
};

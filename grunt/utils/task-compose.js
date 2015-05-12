module.exports = function(grunt) {
  return function(name, definition, dependencies) {
    if (definition instanceof Array) {
      dependencies = definition;
    }

    dependencies.forEach(function(dependency) {
      if (!grunt.task.exists(dependency)) {
        require('../tasks/' + module)(grunt);
      }
    });

    grunt.registerTask(name, definition);
  };
};
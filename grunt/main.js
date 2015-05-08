var _ = require('lodash');
_.mergeDefaults = require('merge-defaults');

var defaultConfigs = ['imagemin', 'handlebars', 'rev', 'open'];
var defaultTaskConfig = {};
defaultConfigs.forEach(function(configName) {
  defaultTaskConfig[configName] = require('./config/' + configName);
});

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var defaultDefinitions = ['default', 'serve', 'server'];
  var defaultTaskDefinitions = {};
  defaultDefinitions.forEach(function(defName) {
    defaultTaskDefinitions[defName] = require('./tasks/' + defName)(grunt);
  });

  var hektor = {
    initConfig: function(projectConfig) {
      projectConfig = projectConfig || {};
      _.mergeDefaults(projectConfig, defaultTaskConfig);
      grunt.initConfig(projectConfig);
    },

    registerTasks: function(tasks) {
      if (tasks) {
        tasks.forEach(function(taskName) {
          if (defaultTaskDefinitions[taskName]) {
            grunt.registerTask(taskName, defaultTaskDefinitions[taskName]);
          } else {
            grunt.log.write('Default task "' + taskName + '" not found.');
          }
        });
      } else {
        hektor.registerTasks(Object.keys(defaultTaskDefinitions));
      }
    },

    registerTask: function() {
      grunt.registerTask.apply(grunt, arguments);
    }
  };

  return hektor;
};
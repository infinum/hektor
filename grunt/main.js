// Could be also done as require('hektor/grunt')(grunt, modules);
// where modules are optional, but I think that it's better to explicitely call loadAll

module.exports = function(grunt) {
  return {
    loadAll: function() {
      grunt.loadTasks(__dirname + '/tasks');
      grunt.loadTasks(__dirname + '/tasks');
    },
    load: function(modules) {
      modules = [].concat(modules);
      modules.forEach(function(module) {
        require('./tasks/' + module)(grunt);
      });
    }
  };
};
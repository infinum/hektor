var path = require('path');
var _ = require('lodash');

// Load the HEKTOR gulp dependencies
var H = require('gulp-load-plugins')({
  // We need to set the package.json path manually or it will take the project package, and we don't want that
  config: path.normalize(__dirname + '../../package.json')
});

module.exports = function(gulp) {

  function loadModules(modules) {
    // Transform the argument into an object where keys are task names and values are task options
    modules = modules || {};
    if (typeof modules === 'string') {
      modules = [].concat(modules);
    }
    if (modules instanceof Array) {
      modules = _.zipObject(modules);
    }

    _.each(modules, function(options, module) {
      if (H[module]) {
        // Make sure we don't overwrite a dependency task
        H['_hektor_' + module] = H[module];
      }

      // sass task is also documented
      H[module] = require('./tasks/' + module)(gulp, H, options);
    });
    return H;
  }
  
  return {
    loadAll: function() {
      console.error('Not implemented yet!');
      // TODO: Iterate trough files in the tasks folder
    },
    load: loadModules
  }
};

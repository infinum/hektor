var path = require('path');
var _ = require('lodash');

var H = require('gulp-load-plugins')({
  config: path.normalize(__dirname + '../../package.json')
});

module.exports = function(gulp) {

  function loadModules(modules) {
    if (typeof modules === 'string') {
      modules = [].concat(modules);
    }
    if (modules instanceof Array) {
      modules = _.zipObject(modules);
    }
    _.each(modules, function(options, module) {
      if (H[module]) {
        H['_hektor_' + module] = H[module];
      }
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

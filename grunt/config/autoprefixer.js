module.exports = function(browsers) {
  return {
    options: {
      browsers: browsers || ['last 2 versions', 'ie 10']
    },
    dist: {
      src: '.tmp/styles/main.css'
    }
  };
};

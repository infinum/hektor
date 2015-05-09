module.exports = {
  options: {
    sourceMap: false
  },
  dist: {
    files: {
      '.tmp/styles/main.css': '<%= paths.app %>/styles/main.scss'
    }
  }
};

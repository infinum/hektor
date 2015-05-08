module.exports = {
  dist: {
    files: {
      src: [
        '<%= paths.dist %>/scripts/{,*/}*.js',
        '<%= paths.dist %>/styles/{,*/}*.css',
        '<%= paths.dist %>/images/sprites*.png',
        '/styles/fonts/{,*/}*.*',
      ]
    }
  }
};
module.exports = {
  dist: {
    files: {
      src: [
        '<%= paths.dist %>/scripts/{,*/}*.js',
        '<%= paths.dist %>/styles/{,*/}*.css',
        '<%= paths.dist %>/images/sprites*.png',
        '<%= paths.dist %>/styles/fonts/{,*/}*.*',
      ]
    }
  }
};
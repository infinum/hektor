module.exports = {
  dist: {
    files: {
      src: [
        '<%= paths.dist %>/scripts/{,*/}*.js',
        '<%= paths.dist %>/styles/{,*/}*.css',
        '<%= paths.dist %>/images/{,*/}*.{jpg,gif,png,svg}',
        '<%= paths.dist %>/styles/fonts/{,*/}*.*',
      ]
    }
  }
};
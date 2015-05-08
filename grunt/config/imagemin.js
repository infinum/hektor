module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>/images',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: '<%= paths.dist %>/images'
    }]
  }
};
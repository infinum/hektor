module.exports = {
  server: {
    path: 'http://localhost:<%= connect.options.port %>'
  },
  test: {
    path: 'http://localhost:<%= connect.test.options.port %>'
  },
  dist: {
    path: 'http://localhost:<%= connect.dist.options.port %>'
  }
};
module.exports = {
  compile: {
    options: {
      namespace: 'JST',
      amd: true
    },
    files: {
      '.tmp/scripts/templates.js': ['<%= paths.app %>/scripts/templates/{,*/}*.hbs']
    }
  }
};
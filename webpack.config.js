module.exports = {
  entry: './src/js/index.js',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  }
};
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    "Vue": {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'vuemaskbr.js',
    library: 'vuemaskbr',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        query: {
          presets: ['es2015']
        },
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      }
    ]
  }
}
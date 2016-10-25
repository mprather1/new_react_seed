const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: path.join(__dirname, 'app', 'main.jsx'),
  output: {
    path: path.join(__dirname, 'app', 'public', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'app'),
      loader: ['babel-loader'],
      exclude:[__dirname + 'app/bower_components'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['es2015', 'react']
      }
    }]
},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
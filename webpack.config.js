var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
    ]
  }
};

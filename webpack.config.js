var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './scripts/example'
  ],
  output: {
    path: __dirname,
    filename: 'example.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx' },
    ]
  },
  externals: {
    'showdown': 'window.Showdown'
  }
};
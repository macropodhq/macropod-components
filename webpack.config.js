var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './packages',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'sass?includePaths[]=./packages/base/style',
        ],
      },
    ],
  },
};

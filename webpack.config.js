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
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'autoprefixer',
          'sass?includePaths[]=./style',
        ],
      },
      { test: /\.css$/,  loader: 'style-loader!css-loader' },
      { test: /\.png$/,  loader: 'url-loader?limit=100000&mimetype=image/png' },
      { test: /\.jpg$/,  loader: 'url-loader?limit=100000&mimetype=image/jpeg' },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/,  loader: 'file-loader' },
      { test: /\.eot$/,  loader: 'file-loader' },
      { test: /\.svg$/,  loader: 'file-loader' },
      { test: /\.pdf$/,  loader: 'file-loader' },
    ],
  },
};

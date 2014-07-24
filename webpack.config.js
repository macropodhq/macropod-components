module.exports = {
  entry: './scripts/example',
  output: {
    path: __dirname,
    filename: 'example.js',
    publicPath: '/scripts/'
  },
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
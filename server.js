#!/usr/bin/env node

var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
});

server.listen(3000, function(err) {
  if (err) {
    return console.warn(err);
  }

  console.log('Listening: %j', this.address());
});

var config = require('macropod-tools/webpack.config');

config.module.loaders.push({test: /\.md$/, loaders: ['html-loader', 'markdown-loader']});

if (typeof config.resolve.alias !== 'object') {
  config.resolve.alias = {};
}

if (process.env.NODE_ENV === 'production') {
  config.resolve.alias['react-a11y'] = './util/noop';
}

module.exports = config;

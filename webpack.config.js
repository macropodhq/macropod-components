var config = require('macropod-tools/webpack.config');

config.module.loaders.push({test: /\.md$/, loaders: ['html-loader','markdown-loader']});

if (typeof config.resolve.alias !== 'object') {
  config.resolve.alias = {};
}

if (process.env.NODE_ENV === 'production') {
  config.resolve.modulesDirectories.push('util');
  config.resolve.alias['react-a11y'] = 'noop';
}

module.exports = config;

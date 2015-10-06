var config = require('macropod-tools/webpack.config');

config.module.loaders.push({test: /\.md$/, loaders: ['html-loader', 'markdown-loader']});

// De-prioritise loading `.js` files so `.jsx` files take priority.
config.resolve.extensions.splice(config.resolve.extensions.indexOf('.js'), 1);
config.resolve.extensions.push('.js');

if (typeof config.resolve.alias !== 'object') {
  config.resolve.alias = {};
}

if (process.env.NODE_ENV === 'production') {
  config.resolve.alias['react-a11y'] = './util/noop';
}

module.exports = config;

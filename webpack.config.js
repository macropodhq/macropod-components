var config = require('macropod-tools/webpack.config');

config.module.loaders.push({test: /\.md$/, loaders: ['html-loader','markdown-loader']});

module.exports = config;

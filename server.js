var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var comments = [{author: 'Pete Hunt', text: 'Hey there!'}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3001);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

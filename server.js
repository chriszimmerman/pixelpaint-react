const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const bmpjs = require('bmp-js');
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.post('/save', (req, res) => {
  const body = req.body;
  const image = bmpjs.encode(body);

  fs.writeFileSync('www/image.bmp', image.data);
  res.end();
});
 
const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

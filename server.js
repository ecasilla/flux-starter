var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var options = {devtool: 'eval',lint: true}
var config = require('../config/webpack.config')(options);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

const webpack = require('./make-webpack-config');

module.exports = require('./make-webpack-config')({
  production: true,
  lint: true,
});

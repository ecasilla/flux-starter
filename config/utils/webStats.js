// borrowed from https://github.com/gpbl/isomorphic500/blob/master/webpack%2Futils%2Fwrite-stats.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var filepath = _path2['default'].resolve(__dirname, '../../webpack-stats.json');

exports['default'] = function (stats) {

  var publicPath = this.options.output.publicPath;
  var json = stats.toJson();

  // get chunks by name and extensions
  var getChunks = function getChunks(name, ext) {
    ext = ext || /.js$/;
    var chunks = json.assetsByChunkName[name];

    // a chunk could be a string or an array, so make sure it is an array
    if (!Array.isArray(chunks)) {
      chunks = [chunks];
    }

    return chunks.filter(function (chunk) {
      return ext.test(_path2['default'].extname(chunk));
    }) // filter by extension
    .map(function (chunk) {
      return '' + publicPath + chunk;
    }); // add public path to it
  };

  var script = getChunks('src', /js/);
  var style = getChunks('src', /css/);

  // Find compiled images in modules
  // it will be used to map original filename to the compiled one
  // for server side rendering
  var imagesRegex = /\.(jpe?g|png|gif|svg)$/;
  var images = json.modules.filter(function (module) {
    return imagesRegex.test(module.name);
  }).map(function (image) {
    return {
      original: image.name,
      compiled: '' + publicPath + image.assets[0]
    };
  });

  var content = { script: script, style: style, images: images };

  _fs2['default'].writeFileSync(filepath, JSON.stringify(content));
  (0, _debug2['default'])('dev')('`webpack-stats.json` updated');
};

module.exports = exports['default'];

const del = require('del');
const path = require( 'path');
const debug = require( 'debug');

module.exports = function clean() {
  const DIST_PATH = path.resolve(__dirname, '../../dist/*');
  del.sync([DIST_PATH]);
  debug('dev')('cleaned `dist` directory');
};


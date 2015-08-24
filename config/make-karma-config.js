const webpackConfig = require('./webpack.config.js');

module.exports = function(options) {
  var karmaConfig = {
    frameworks: ['mocha', 'chai'],

    browsers: ['PhantomJS'],

    files: [
      // This shim adds .bind to PhantomJS
      './phantomjs-shim.js',
      '../src/**/__tests__/**/*.js',
    ],

    preprocessors: {
      '../src/**/__tests__/**/*.js': ['babel','webpack']
    },

    webpackMiddleware: {
        noInfo: true
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline'
      },
      filename: function(file) {
        return file.originalPath.replace(/\.js$/, '.js');
      },
      sourceFileName: function(file) {
        return file.originalPath;
      }
    },

    reporters: ['mocha'],

    plugins: [
      'karma-webpack',
      'karma-babel-preprocessor',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter'
    ]
  };

  if (options.coverage) {
    // Needs to load first to prevent linting issues
    webpackConfig.module.preLoaders = [{
      test: /\.jsx?$/,
      exclude: /(__tests__|node_modules)/,
      loader: 'isparta-instrumenter-loader',
    }].concat(webpackConfig.module.preLoaders);

    karmaConfig.plugins.push('karma-coverage');

    karmaConfig.coverageReporter = {
      dir: '../coverage',
      reporters: options.coverageReporters || [
        { type: 'text' },
        { type: 'html' },
      ]
    };

    karmaConfig.reporters.push('coverage');
  }

  if (options.notify) {
    karmaConfig.reporters.push('notify');
    karmaConfig.plugins.push('karma-notify-reporter');
  }

  karmaConfig.webpack = webpackConfig;

  return karmaConfig;
};

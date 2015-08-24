const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  var cssLoaders = 'style-loader!css-loader!';
  var sassLoaders = cssLoaders + '!sass-loader?outputStyle=expanded&';

  if (options.production) {
    cssLoaders = ExtractTextPlugin.extract('style-loader', cssLoaders.substr(cssLoaders.indexOf('!')));
    sassLoaders = ExtractTextPlugin.extract('style-loader', sassLoaders.substr(sassLoaders.indexOf('!')));
    require('./utils/clean')();
    var writeStats = require('./utils/webStats');
  }

  var jsLoaders = ['babel-loader','flowcheck'];

  return {
    entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index'
    ],
    debug: !options.production,
    devtool: options.devtool,
    cache:true,
    output: {
      path: options.production ? './dist' : path.join(__dirname,'./build'),
      filename: options.production ? 'app.[hash].js' : 'app.js',
      publicPath: '',
    },
    eslint: {
      configFile: '.eslintrc'
    },
    module: {
      preLoaders: options.lint ? [
        {
          test: /\.js$|.jsx?$/,
          exclude: /node_modules/,
          loaders: ['eslint','jscs']
        }
      ] : [],
      loaders: [
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.js$|.jsx$/,
          exclude: /(node_modules|bower_components)/,
          loaders: options.production ? jsLoaders : ['react-hot-loader'].concat(jsLoaders),
        },
        {
          test: /\.css$/,
          loader: cssLoaders,
        },
        {
        test: /\.scss$/,
        loader: sassLoaders
        },
        {
          test: /\.sass$/,
          loader: sassLoaders,
        },
        {
          test: /\.(jpeg|gif|svg|woff|eot|ttf)$/,
          loader: 'url?limit=1000&name=[sha512:hash:base64:7].[ext]'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        },
      ]
    },
    resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js', '.json', '.jsx','.scss'],
      modulesDirectories: ['bower_components', 'node_modules'],
    },
    plugins: options.production ? [
      // Important to keep React file size down
      new webpack.DefinePlugin({
        "process.env": {
          "BROWSER" : JSON.stringify(true),
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true
      },
      output: {
        comments: false
      }
      }),
      new ExtractTextPlugin("app.[hash].css"),
      new HtmlWebpackPlugin({
        template: './config/tmpl.html'
      }),
      new webpack.ProvidePlugin({ 
        React: "react"
      }),
      function () { this.plugin('done', writeStats); },
      
    ] : []
  };
};


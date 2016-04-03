var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {

	context: path.join(__dirname, '../'),

  debug: true,

  devtool: 'eval-source-map',

  externals: /^[a-z\-0-9]+$/,

  target: 'node',

  entry: [
    'babel-polyfill',
    './src/server.js',
  ],

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  plugins: [
		new webpack.ProvidePlugin({
	    React: 'react'
	  }),
    new webpack.DefinePlugin({
      __CLIENT__: false,
    }),
    new webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false
    }),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],

  resolve: {
	  modulesDirectories: ['./node_modules', './src/components'],
	  extensions: ['', '.js', '.ts', '.tsx', '.less']
	},

  module: {
  	loaders: [{
		  test: /\.js/,
		  loader: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-0',
      exclude: /node_modules/
		}, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path]scope__[name]__[local]!less-loader'),
      exclude: /node_modules/
    }, {
      test: /\.tsx$/,
      loader: 'babel-loader?presets[]=es2015!ts-loader?silent=true',
    }]
  }
};

module.exports = config;

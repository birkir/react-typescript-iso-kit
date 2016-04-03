var path = require('path');
var webpack = require('webpack');
var last = null;
var config = {

	context: path.join(__dirname, '../'),

  debug: true,

  devtool: 'cheap-module-eval-source-map',

  target: 'web',

  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/client.js'
  ],

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'client.js',
    publicPath: '/',
  },

  plugins: [
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.NoErrorsPlugin(),
		new webpack.ProvidePlugin({
	    React: 'react'
	  }),
    new webpack.DefinePlugin({
      __CLIENT__: true,
    })
  ],

  resolve: {
	  modulesDirectories: ['./node_modules', './src/components'],
	  extensions: ['', '.js', '.ts', '.tsx', '.less']
	},

  module: {
  	loaders: [{
		  test: /\.js/,
		  loader: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-0&presets[]=react-hmre',
		  exclude: /node_modules/,
		}, {
      test: /\.less$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]scope__[name]__[local]!less-loader',
      exclude: /node_modules/,
    }, {
      test: /\.tsx?$/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react-hmre!ts-loader?silent=true',
      exclude: /node_modules/,
    }]
  }
};

module.exports = config;

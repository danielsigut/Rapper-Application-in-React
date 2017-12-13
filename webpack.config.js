const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src/js'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  entry: path.join(paths.JS, 'app.jsx'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
      }),
      new ExtractTextPlugin('style.bundle.css'),
      new webpack.optimize.AggressiveMergingPlugin(),
     new webpack.optimize.OccurrenceOrderPlugin(),
     new webpack.optimize.UglifyJsPlugin({
           mangle: true,
         compress: {
           warnings: false, // Suppress uglification warnings
           pure_getters: true,
           unsafe: true,
           unsafe_comps: true,
           screw_ie8: true
         },
         output: {
           comments: false,
         },
         exclude: [/\.min\.js$/gi] // skip pre-minified libs
       }),
       new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]), //https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
  ],

  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules(?!\/webpack-dev-server)/,
      use: [
        'babel-loader',
      ],
    },
  {
  test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        use: 'css-loader',
      }),
    },
    {
    test: /\.(png|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
  ],
},

  resolve: {
  extensions: ['.js', '.jsx'],
  },
};

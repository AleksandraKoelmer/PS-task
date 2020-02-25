const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ['./src/index.js', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
      loader: 'css-loader?importLoaders=1',
      }),
    },
    {
    test: /\.(sass|scss)$/,
    loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }
  ]},
  plugins: [
   new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: './[name].bundle.css',
      allChunks: true,
    })
  ],
  devServer: {
    port: 8080,
    contentBase: './build',
    inline: true //automatyczny update
  }
}
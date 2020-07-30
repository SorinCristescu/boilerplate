/* eslint-disable function-call-argument-newline */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable newline-after-var */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable indent-legacy */
/* eslint-disable quote-props */
/* eslint-disable indent */
/* eslint-disable eol-last */
// eslint-disable-next-line no-undef

const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
module.exports = {
  // eslint-disable-next-line comma-dangle
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[contenthash].js',
    path: path.resolve(__dirname, 'assets', 'scripts'),
    publicPath: 'assets/scripts',
  },
  devtool: 'cheap-source-map',
  //   devServer: {
  //     contentBase: './',
  //   },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};

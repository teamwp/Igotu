const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const entry = ['./client/index.js'];

const output = {
  path: path.resolve(__dirname, 'build'),
  filename: 'build.js'
};

module.exports = {
  entry,
  output,
  // optimization: { minimize: false },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    watchContentBase: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [new htmlWebpackPlugin({ template: './client/index.html' })]
};

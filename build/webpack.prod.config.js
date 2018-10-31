
let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        filename: '[name].[hash].bundle.js'
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 3000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: 2,
              name: 'vendors'
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
})
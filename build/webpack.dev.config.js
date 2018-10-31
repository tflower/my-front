let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
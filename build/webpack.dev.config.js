let path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const webpack = require('webpack');
baseConfig.module.rules.push(
    {
        test: /\.css$/,
        use: ["vue-style-loader",'css-loader']
    }
);
console.log(path.join(__dirname, './dist/static'))
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        publicPath: '/',
        contentBase: path.join(__dirname, '../dist/static')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})


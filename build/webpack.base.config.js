let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,  // (不处理node_modules 和 bower_components下的js文件) 优化处理加快速度
                use: {
                    loader: 'babel-loader'
                }
            },
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },
           {
               test: /\.ts/,
               loader: 'ts-loader'
           }
        ]
    },
    resolve: {
        alias: {
            '@Component': path.resolve(__dirname, '../src/component/'),
            '@Asset': path.resolve(__dirname, '../src/asset/'),
            '@Page': path.resolve(__dirname, '../src/page/'),
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.vue', '.wasm', '.mjs', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist/'),{allowExternal:true}),
        new HtmlWebpackPlugin({template: path.resolve(__dirname, '../index.html')}),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist')
    }
}
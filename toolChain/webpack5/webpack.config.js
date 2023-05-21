const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const UploadSourceMapWebpackPlugin = require('./src/utils/sourceMap.js');

module.exports = {
    entry: {
        index: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    devServer: {
        static: './dist',
        open: true,
        port: 8081,             // 第三部分会使用 portfinder 自动获取可用端口号            
        hot: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpg/i,
                use: {
                    loader: 'file-loader',
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dev',
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new UploadSourceMapWebpackPlugin({
            uploadUrl: 'http://localhost:14030/api/monitor/webpack'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
    },
}
const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    mode: 'development',
    devServer: {
        static: './dist'
    },
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
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dev'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
    },
}
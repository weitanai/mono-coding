const path = require("path");
var HelloPlugin = require("./plugin/index.js");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "dist",
        hot: true,
        port: "8012"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [new HelloPlugin()]
};
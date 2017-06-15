var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var localPort = "3000";
var proxiedServer = "http://localhost:8080";

module.exports = {
    entry: [
        "./src-solution-ultimately-with-async-calls/index"
    ],
    devServer: {
        contentBase: "./build",
        lazy: false,     // always compile immediately to save time
        compress: false, // do not spend time on this
        host: "0.0.0.0", // server is also available externally
        port: localPort,
        hot: true,       // hot module replacement
        historyApiFallback: true,
        proxy: { "/": proxiedServer }
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[hash].bundle.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": {
                IS_IN_WEBPACK: true,
                NODE_ENV: '"development"'
            }
        })
    ],
    module: {
        rules: [
            { test: /\.js$/, use: [{loader: "babel-loader"}], include: path.resolve(__dirname, "src") }
        ]
    }
};

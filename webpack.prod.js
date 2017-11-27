var webpack = require("webpack");
var common = require("./webpack.common");
var merge = require("webpack-merge");
var UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ]
});
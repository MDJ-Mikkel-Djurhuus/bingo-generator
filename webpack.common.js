var path = require("path");
var webpack = require("webpack");
var CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:  "./src/index.js",
    output: {
        filename: "bingo-generator.js",
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: "umd",
        library: "bingo-generator"
    },
    plugins: [
        new CleanWebPackPlugin(["lib"])
    ]
}
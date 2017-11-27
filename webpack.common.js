var path = require("path");
var webpack = require("webpack");
var CleanWebPackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:  "./src/index.js",
    output: {
        filename: "./lib/bingo-generator.js",
        libraryTarget: "umd",
        libraray: "bingo-generator"
    },
    plugins: [
        new CleanWebPackPlugin(["lib"])
    ]
}
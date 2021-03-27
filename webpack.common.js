const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/modules/index.js",
        //You can add here more entrypoints
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: __dirname + "/dist",
    },
    module: {
        rules: [
            {
              test: [/.js$/],
              exclude: /(node_modules)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env"],
                },
              },
            },
        ]    
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.html",
        }),
        new HtmlWebpackPlugin({
          filename: "subpage.html",
          template: "./src/pages/subpage.html",
        }),
        //You can add here more pages
    ],
};
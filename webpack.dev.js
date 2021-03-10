const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
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
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },

          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader"," sass-loader",],
          },
        ],
      },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.html",
        }),
        //You can add here more pages
    ],
    devServer: {
        port: 8080,
        open: true,
    },
};
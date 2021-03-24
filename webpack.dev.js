const { merge } = require('webpack-merge');
const common = require("./webpack.common.js");

module.exports = merge(common, {
    devtool: "source-map",
    mode: "development",

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },

        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
  },
    devServer: {
        port: 8080,
        open: true,
    },
});
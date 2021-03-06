module.exports = {
    mode: "production",
    entry: {
        index: "./src/modules/index.js",
    },
    output: {
        filename: "[name].[contenthash:8].js",
        path: __dirname + "/dist",
    },
};
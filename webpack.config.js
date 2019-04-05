"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(__dirname, "src/index.js")
  ],
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "[name].js",
    publicPath: "/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.json?$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};

const port = 3000;
const path = require("path");
const express = require("express");
const app = express();
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");

// Configuring webpack
const compiler = webpack(config);

// Configuring webpack dev middleware
const webpackMiddleware = middleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: "src",
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(webpackMiddleware);

// Configuring webpack hot reload middleware.
app.use(hotMiddleware(compiler));

app.use(express.static(__dirname + "/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

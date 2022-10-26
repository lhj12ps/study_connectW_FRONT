const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  // Other rules...
  plugins: [
    new NodePolyfillPlugin({
      process: "process/browser",
    }),
  ],
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductListIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "static/index.html"),
    }),
  ],
};

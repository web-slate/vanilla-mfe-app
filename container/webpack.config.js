const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        product: "product@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "static/index.html"),
    }),
  ],
};

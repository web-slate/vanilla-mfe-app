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
        // Key property will be called inside `container` App - import 'keyName/yourFile''
        '@plp': "productList@http://localhost:8081/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "static/index.html"),
    }),
  ],
};

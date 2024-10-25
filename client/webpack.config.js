const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv").config({ path: __dirname + "../.env" });
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".jsx", ".mjs", ".js", ".json"],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    compress: false,
    port: 8000,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
      "process.env.NODE_ENV": JSON.stringify(
        isDevelopment ? "development" : "production"
      ),
    }),
  ],
};

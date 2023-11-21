const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["regenerator-runtime", "./index.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "",
    clean: true,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
         maxChunks: 1
     })
 ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      },
    ],
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },

    port: 8082,
  },
};

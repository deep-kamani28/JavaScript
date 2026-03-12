const path = require("path");
const CleanPlugin=require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        type: "javascript/auto",
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    open: true,
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};

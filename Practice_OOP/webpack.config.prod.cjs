const path = require("path");
const CleanPlugin=require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "[contenthash].js",
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
  devtool: 'cheap-source-map',
  plugins: [
      new CleanPlugin.CleanWebpackPlugin()
    ]
};

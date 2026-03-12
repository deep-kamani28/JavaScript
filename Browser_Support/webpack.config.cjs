const path = require("path");
const CleanPlugin=require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       type: "javascript/auto",
  //     },
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
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

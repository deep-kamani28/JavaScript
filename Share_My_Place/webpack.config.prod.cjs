const path = require("path");
const CleanPlugin=require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    'SharePlace':'./src/SharePlace.js',
    'MyPlace':'./src/MyPlace.js'
  },

  output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist','assets','scripts'),
      publicPath: 'assets/scripts/'
    },

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
              [
                '@babel/preset-env', 
                {useBuiltIns:'usage', corejs:{version:3}}
                
              ]
            ]
          }
        }
      }
    ]
  },

  devtool: 'cheap-source-map',
  
  plugins: [
      new CleanPlugin.CleanWebpackPlugin()
    ]
};
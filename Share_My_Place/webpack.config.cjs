const path = require("path");
const CleanPlugin=require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    'SharePlace':'./src/SharePlace.js',
    'MyPlace':'./src/MyPlace.js'
  },

  output: {
    filename: "assets/scripts/[name].js",
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: 'dist/assets/scripts/'
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

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    static: {
      directory: path.join(__dirname,'dist'),
      serveIndex:false
    },
    open: true,
  },
  
  plugins: [
    new CleanPlugin.CleanWebpackPlugin()
  ]
};

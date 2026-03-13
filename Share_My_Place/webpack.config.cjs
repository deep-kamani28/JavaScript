// const path = require("path");
// const CleanPlugin=require('clean-webpack-plugin');

// module.exports = {
//   mode: "development",
//   entry: {
//     'SharePlace':'./src/SharePlace.js',
//     'MyPlace':'./src/MyPlace.js'
//   },

//   output: {
//     filename: "[name].js",
//     path: path.resolve(__dirname, "dist", "assets", "scripts"),
//     publicPath: "/"
//   },
  
//   module: {
//     rules: [
//       {
//         test: /\.(?:js|mjs|cjs)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             targets: "defaults",
//             presets: [
//               [
//                 '@babel/preset-env', 
//                 {useBuiltIns:'usage', corejs: 3}
                
//               ]
//             ]
//           }
//         }
//       }
//     ]
//   },

//   devtool: 'eval-cheap-module-source-map',

//   devServer: {
//     static: {
//       directory: path.join(__dirname,"dist"),
//       // serveIndex:false
//     },
//     open: true,
//   },
  
//   plugins: [
//     new CleanPlugin.CleanWebpackPlugin()
//   ]
// };

const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    SharePlace: "./src/SharePlace.js",
    MyPlace: "./src/MyPlace.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist", "assets", "scripts"),
    publicPath: "/assets/scripts/"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3
                }
              ]
            ]
          }
        }
      }
    ]
  },

  devtool: "eval-cheap-module-source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    open: true
  },

  plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
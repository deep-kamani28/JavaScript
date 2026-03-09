const path = require("path");

module.exports = {
  mode: "development",
  entry: "./Practice_OOP/src/app.js",
  output: {
    filename: "app.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname,"Practice_OOP", "assets", "scripts"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: "javascript/auto",
      },
    ],
  },
};

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: {index: './src/javascript/index.js'},
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//     plugins: [
//    new HtmlWebpackPlugin({
//       title: 'Output Management',
//     }),
//   ],

// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/javascript/index.js",
    dom_materials: "./src/javascript/dom_materials.js",
    gameboard: "./src/javascript/gameboard.js",
    gamecontroller: "./src/javascript/gamecontroller.js",
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/html/index.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        // options: {
        //   sources: {
        //     list: [
        //       // All default supported tags and attributes
        //       "...",
        //       {
        //         tag: "a",
        //         attribute: "href",
        //         type: "src",
        //       },
        //     ],
        //   },
        // },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

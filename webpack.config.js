const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
      plugins: [
            new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename: "[name].css",
              chunkFilename: "[id].css"
            })
          ],
   mode: 'development',
   entry: './main.js', // entry point
   output: {
         filename: 'index.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
         rules: [
            {
               test: /\.jsx?$/, // search for js files 
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['es2015', 'react'] // use es2015 and react
            }
         },
      //    {
      //       test: /\.scss$/,
      //       use: [
      //           "style-loader", // creates style nodes from JS strings
      //           "css-loader", // translates CSS into CommonJS
      //           "sass-loader" // compiles Sass to CSS
      //       ]
      //   }
            {
                  test: /\.scss$/,
                  use: [
                  "style-loader", // creates style nodes from JS strings
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS
                  ]
            },
            {
                  test: /\.css$/,
                  use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                  ]
                }
      ]
   }
}

module.exports = config;

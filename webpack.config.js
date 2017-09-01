// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = {
//   entry: ["./web/static/css/app.scss", "./web/static/js/app.js"],
//   output: {
//     path: __dirname + "/priv/static",
//     filename: "js/app.js"
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         query: {
//           presets: ["es2015"]
//         }
//       },
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract(["style-loader", "css-loader"])
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract(
//           "style-loader",
//           "css!sass?includePaths[]=" + __dirname + "/node_modules"
//         )
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin("css/app.css")
//   ],
//   resolve: {
//     modules: [
//       "node_modules",
//       __dirname + "/web/static/js"
//     ]
//   }
// }

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const elmSource = __dirname + '/web/elm'

module.exports = {
  // We'll change our entry point to look for an scss file instead
  entry: ["./web/static/css/app.scss", "./web/static/js/app.js"],
  output: {
    path: __dirname + "/priv/static",
    filename: "js/app.js"
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: 'elm-webpack-loader?cwd=' + elmSource
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css")
  ],

  resolve: {
    modules: [
      "node_modules",
      __dirname + "/web/static/js"
    ]
  }
};

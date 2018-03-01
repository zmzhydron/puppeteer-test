var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var pkg = require("./package.json");
let { devServer: { proxySev, host, port } } = pkg;
console.log(proxySev, '`proxySev`');
module.exports = {
  entry: {
    // lol: path.resolve(__dirname, "./client/vue/app.js")
    lol: path.resolve(__dirname, "./client/app.jsx")
  },
  output: {
    path: path.join(__dirname, "/dev"),
    filename: "[name].js",
  },
  // context: path.resolve(__dirname, "./client"),
  devtool: 'eval-source-map',
  externals: {
    'jquery': 'window.jQuery',
    'jquery': 'window.$',
  },
  devServer: {
    // contentBase: path.join(__dirname, "/dev"),
    contentBase: false,
    port: port,
    host: host,
    index: "app.html",
    historyApiFallback: {
      index: "/app.html"
    },
    proxy: {
      "/api": {
        target: proxySev,
        secure: false
      }
    },
    inline: true,
    hot: true,
    stats: {
      colors: true
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "app.html",
      template: "./index.html",
      inject: true,
      // hash: true,
      title: "fucking yeah",
    }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./manifest.json'),
    // }),
    new webpack.HotModuleReplacementPlugin(),
    //拷贝打包目录下的文件、文件夹到指定的输出
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "./node_modules/jquery/dist/jquery.min.js"),
        // to: "./src/js/jq.js",
      }
      // {
      //   from: path.join(__dirname, "./client/dll.js"),
      //   to: "./src/js/dll.js",
      // },
      // {
      //   from: path.join(__dirname, "./node_modules/vue/dist/vue.min.js"),
      //   to: "./src/js/vue.min.js",
      // },
    ]),
    new webpack.ProvidePlugin({
      axios: "axios",
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css?$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss?$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      // {
      //   test: /\.(jpg|png|gif|svg)(\?.*)?$/,
      //   loader: "url-loader",
      //   options: {
      //     limit: 1,
      //     name: "imgs/[name]-[hash:4].[ext]"
      //   }
      // },
      // {
      //   test: /\.(eot|ttf|otf|woff)(\?.*)?$/,
      //   loader: "url-loader",
      //   options: {
      //     limit: 100000,
      //     name: "imgs/[name]-[hash:4].[ext]"
      //   }
      // }
    ]
  },
  resolve: {
    extensions: [".vue", '.js', '.coffee'],
    alias: {
      "vue$": path.join(__dirname, "./node_modules/vue/dist/vue.esm.js"),
      '@mobx': path.resolve(__dirname, "./client/mobx"),
      '@redux': path.resolve(__dirname, "./client/redux"),
      // '@route': path.resolve(__dirname, "./client/js/route"),
      // '@store': path.resolve(__dirname, "./client/js/store"),
    }
  }
}
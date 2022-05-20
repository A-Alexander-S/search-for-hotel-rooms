const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATH = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist')
}

module.exports = {
  entry: {
    app: path.join(PATH.source, 'index.tsx'),
  },
  output: {
    path: PATH.dist,
    filename: 'js/[name].js',
    publicPath: '/',
    // assetModuleFilename: 'assets/[name][ext]'
  },
  devServer: {
    // port: 8080,
    historyApiFallback: {
      index: './index.html'
    },
    // proxy: {
    //   '/app': {
    //     target: 'http://localhost:3000',
    //     // pathRewrite: { '^/api': '' },
    //   }
    // }
    // historyApiFallback: true
  },
  devtool: 'eval-source-map', //'inline-source-map'
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATH.source, 'index.html'),
      filename: path.join('index.html'),
      chunks: ['app']
    }),
    new MiniCssExtractPlugin({
      filename: path.join('.', 'styles', '[name].css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              [
                '@babel/plugin-proposal-class-properties',
                { 'loose': false }
              ]
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        // test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'//path.join(PATH.dist, 'img')
        }
      }
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: ["ts-loader"],
      // },
    ]
  }
}
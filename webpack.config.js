const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH = {
  source: path.join(__dirname, 'client'),
  dist: path.join(__dirname, 'dist')
}

module.exports = {
  entry: {
    index: PATH.source + '/index.tsx',
  },
  output: {
    path: PATH.dist,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATH.source + '/index.html',
      filename: '/index.html',
      // chunks: ['indexx']
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
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'] //, '@babel/preset-typescript'
          }
        }
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: ["ts-loader"],
      // },
    ]
  }
}
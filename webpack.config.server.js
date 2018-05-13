const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: process.ENV === 'production' ? 'production' : 'development',
  target: 'node',
  externals: [ nodeExternals() ],
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  entry: {
    app: './src/server/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        use: [
          'ignore-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'raw-loader'
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
};
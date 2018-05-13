const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = {
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },
  entry: {
    app: './src/client/index.tsx',
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
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    }),
    new webpack.NamedModulesPlugin()
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'public'),
  }
};

const development = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

const production = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['public']),
    new UglifyJSPlugin()
  ]
});

module.exports = process.env.NODE_ENV === 'production' ? production : development;
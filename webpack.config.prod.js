var path = require('path');

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common');
var ngw = require('@ngtools/webpack');



module.exports = webpackMerge(commonConfig, {
  entry: './frontend/app/main.aot.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.ts$/,
        loaders: ['ts-loader'],
        use: [
          {loader: 'awesome-typescript-loader'},
          {loader: 'angular2-template-loader'},
          // {loader: 'angular-router-loader?aot=true'}
        ]
      }
    ]
  },
  plugins: [
    new ngw.AngularCompilerPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: './frontend/app/app.module#AppModule'
    })
  ]
});
/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

module.exports = [

  // 1. Webpack
  "webpack",
  "webpack-merge",
  "webpack-cli",
  "webpack-dev-server",
  // 1.1 loader
  "url-loader",
  "file-loader",
  "json-loader",
  "style-loader",
  "css-loader",
  "postcss-loader",
  "react-hot-loader",
  // 1.2 plugin
  "html-webpack-plugin",
  "compression-webpack-plugin",
  "terser-webpack-plugin",
  "clean-webpack-plugin",
  "mini-css-extract-plugin",
  "optimize-css-assets-webpack-plugin",


  // 2. Babel
  "babel-loader",
  "@babel/core",
  "@babel/preset-env",
  "@babel/preset-react",
  "@babel/plugin-proposal-decorators",
  "@babel/plugin-proposal-async-generator-functions",
  "@babel/polyfill",

  // 3. React
  "react",
  "react-dom",
  "react-router-dom",
  "react-redux",
  "redux-saga",
  "redux-devtools-extension",
  "@loadable/component",

  // 4. postcss
  "autoprefixer",

  "dotenv",
  "mockjs",
  "axios",
]
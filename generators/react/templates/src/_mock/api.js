/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

const Mock = require('mockjs');

const rc = require.context("./", false, /\.js$/);
rc.keys().forEach(function (moduleItem) {
  if ("./api.js" !== moduleItem) {
    rc(moduleItem);
  }
});
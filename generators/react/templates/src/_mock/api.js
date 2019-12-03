/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

const Mock = require('mockjs');

const rc = require.context("./", false, /\.js$/);
rc.keys().forEach(function (moduleItem) {
  if ("./api.js" !== moduleItem) {
    const moduleObj = rc(moduleItem);
    Object.keys(moduleObj).forEach(moduleItemKey => {
      Mock.mock(...moduleObj[moduleItemKey])
    });
  }
});
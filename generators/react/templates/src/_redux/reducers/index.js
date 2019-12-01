/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import { combineReducers } from "redux";

let reducers = {};
const rc = require.context("./", false, /\.js$/);
rc.keys().forEach(function (moduleItem) {
  if ("./index.js" !== moduleItem) {
    reducers = {
        ...reducers,
        ...rc(moduleItem).default,
    }
  }
});

export default combineReducers(reducers);
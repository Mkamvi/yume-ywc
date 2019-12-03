/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

import { all, fork } from 'redux-saga/effects'

let watchers = [];
const rc = require.context("./", false, /\.js$/);
rc.keys().forEach(function (moduleItem) {
  if ("./index.js" !== moduleItem) {
    let _moduleItems = rc(moduleItem);
    Object.keys(_moduleItems).forEach(function (itemKey) {
      watchers.push(_moduleItems[itemKey]);
    });
  }
});

export default function* rootSaga() {
  yield all(watchers.map(moduleItem => fork(moduleItem)));
}
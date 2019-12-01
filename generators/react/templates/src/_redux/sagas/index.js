/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

import { put, takeEvery, all } from 'redux-saga/effects'

import { getHome } from "./home";

export default function* rootSaga() {
  yield all([
    getHome(),
  ]);
}
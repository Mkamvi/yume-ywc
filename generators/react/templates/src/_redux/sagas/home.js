/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

import { call, put } from 'redux-saga/effects'

import { getHome as getHomeAPI } from "../services/home.js";

export function* getHome(action) {
  const res = yield call(getHomeAPI, action.payload);
  yield put({
    type: action.type,
    payload: res.data,
  })
}
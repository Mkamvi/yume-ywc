/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import { HOME_UPDATE_NAME_ACTION } from "../actions/index.js";

const initState = {
  name: "iWuzhi",
};

const reducers = {
  [HOME_UPDATE_NAME_ACTION]: (state = initState, action) => ({
    ...state,
    name: action.name,
  })
}

function homeReducers(state = initState, action) {
  if (!reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
export default {
  home: homeReducers,
}
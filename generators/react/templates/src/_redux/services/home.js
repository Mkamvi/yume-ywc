/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

import request from "../../utils/request.js";

export async function getHome(payload) {
  return request.post("/home", {
    hello: payload
  })
}
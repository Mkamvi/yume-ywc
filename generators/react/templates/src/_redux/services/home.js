/**
 * Author iWuzhi
 * Date 2019/12/1
 **/

const request = require("../../utils/request.js");

export async function getHome(payload) {
  return request.post("/api/home", {
    hello: payload
  })
}
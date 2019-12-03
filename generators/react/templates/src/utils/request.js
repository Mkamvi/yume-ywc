/**
 * Author iWuzhi
 * Date 2019/12/1
 **/


import axios from "axios";

const instance = axios.create({
  baseURL: '/api',
  timeout: 6000,
  headers: {},
  withCredentials: false,
});

instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (response.data.code !== 0) {
    return Promise.reject(response);
  }
  return { response };
}, error => ({ error }));

export default instance;
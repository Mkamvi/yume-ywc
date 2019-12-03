/**
 * Author iWuzhi
 * Date 2019/12/3
 **/

import React from "react";
import loadable from "@loadable/component";

const Loading = <span>Loading...</span>;

const routes = [
  {
    path: "/",
    component: loadable(() => import("./home/index.jsx"), {
      fallback: Loading
    })
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

export default routes;
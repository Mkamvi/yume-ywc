/**
 * Author iWuzhi
 * Date 2019/12/3
 **/

import React from "react";
import loadable from "@loadable/component";
import { Spin } from "antd";

const Loading = <Spin size="large" spinning={true} tip="loading..." style={{ margin: "200px auto", display: "block" }} />;

const routes = [
  {
    path: "/",
    breadcrumbName: 'Home',
    exact: true,
    component: loadable(() => import("./home/index.jsx"), {
      fallback: Loading
    }),
    routes: []
  },
  {
    path: "/css_module",
    breadcrumbName: 'CssModule',
    exact: true,
    component: loadable(() => import("./css_module/index.jsx"), {
      fallback: Loading
    }),
  },
  {
    path: "/postcss",
    breadcrumbName: 'postcss',
    exact: true,
    component: loadable(() => import("./postcss/index.jsx"), {
      fallback: Loading
    }),
  },
  {
    path: "/mock",
    breadcrumbName: 'mock',
    exact: true,
    component: loadable(() => import("./mock/index.jsx"), {
      fallback: Loading
    }),
  },
  {
    path: "/request",
    breadcrumbName: 'request',
    exact: true,
    component: loadable(() => import("./request/index.jsx"), {
      fallback: Loading
    }),
  },
];

export default routes;
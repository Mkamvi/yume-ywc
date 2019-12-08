/**
 * Author iWuzhi
 * Date 2019/12/8
 **/

import React, { Component } from "react";
import { Switch, Route, withRouter, NavLink, BrowserRouter as Router, Redirect } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

import Footer from "./footer/index.jsx";
import Sider from "./sider/index.jsx";
import Header from "./header/index.jsx";
import Content from "./content/index.jsx";
import Breadcrumb from "./breadcrumb/index.jsx";

import routes from "../routes.js";

import styles from "./index.css";


@withRouter
class ILayout extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { location } = this.props;
    const _matchRoutes = matchRoutes(routes, location.pathname);
    const _routes = _matchRoutes.map(item => item.route);
    return (
      <section className={styles.layout}>
        <Sider />
        <section className={styles.main}>
          <Header />
          <Breadcrumb routes={_routes} />
          <Content>
            <div className={styles.router}>
              <Switch>
                { renderRoutes(routes) }
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </section>
      </section>
    )
  }
}
export default ILayout;
/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import styles from "./app.css";

import ErrorBoundary from "./error/index.jsx";
import Footer from "./footer/index.jsx";

import routes from "./routes.js";
import store from "../_redux/store";

function RouteWithSubRoutes(route) {
  return (
      <Route
          path={route.path}
          render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
          )}
      />
  );
}

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>

          <Router>
            <div className={styles.router}>
              <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </div>
            <Footer />
          </Router>
        </Provider>
      </ErrorBoundary>
    )
  }
}
export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
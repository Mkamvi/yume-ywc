/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import ErrorBoundary from "./error/index.jsx";

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
            <Switch>
              {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </Provider>
      </ErrorBoundary>
    )
  }
}
export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
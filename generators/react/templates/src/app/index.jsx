/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Switch, Route, withRouter, NavLink, BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "./error/index.jsx";
import Layout from "./layout/index.jsx";

import store from "../_redux/store";

import "./App.css";

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <Router><Layout /></Router>
        </Provider>
      </ErrorBoundary>
    )
  }
}
export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
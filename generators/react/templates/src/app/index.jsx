/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import Home from "./home/index.jsx";

import store from "../_redux/store.js";

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
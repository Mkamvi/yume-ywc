/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { connect } from "react-redux";

import { HOME_UPDATE_NAME_ACTION } from "../../_redux/actions/index.js";

@connect((state) => ({

}))
export default class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch({
      type: HOME_UPDATE_NAME_ACTION,
      payload: "say hello",
    })
  }

  render() {
    return (
      <div>hello...</div>
    )
  }
}
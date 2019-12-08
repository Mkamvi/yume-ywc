/**
 * Author iWuzhi
 * Date 2019/12/8
 **/

import React, { Component } from "react";
import { connect } from "react-redux";

import { REQUEST_FETCH_DATA_TEST } from "../../_redux/types";

@connect(function (state) {
  return {
    data: state.request.data,
  }
})
export default class IRequest extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch({
      type: REQUEST_FETCH_DATA_TEST,
      payload: {
        sayHi: "Hi",
      }
    })
  }

  render() {
    const { data } = this.props;
    return (
        <section>
          <section>
            <h3>请求示例：</h3>
            <div>
              {
                data.map((item, index) => (
                    <div key={index}>{item.name}</div>
                ))
              }
            </div>
          </section>
          <section>
            <h3>数据流向：</h3>
            <div>
              <div>请求过程：page => saga/watcher => saga/effects => effects/request</div>
              <div>响应过程：effects/request响应 => reducer => connect/HOC => page => rerender</div>
            </div>
          </section>
        </section>
    )
  }
}
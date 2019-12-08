/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { connect } from "react-redux";

import { HOME_UPDATE_NAME_ACTION } from "../../_redux/types/index.js";

import imgModule from "../../assets/images/module.png";

import styles from "./index.css";

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
    const { } = this.props;
    return (
      <section>
        <section>
          <h3>这是什么？</h3>
          <p>这是集成了React + redux + redux-saga + css-module + antd + axios的一个脚手架示例。</p>
        </section>
        <section>
          <h3>为什么？</h3>
          <p>传统的脚手架如react-create-app、dva等都封装了webpack、babel等的配置，不方便扩展(dva可以，但和官网的api还是稍有差别)，还有就是基于模板的脚手架基本项目的依赖配置都是固定的，无法动态获取到最新的类库版本。</p>
        </section>
        <section>
          <h3>结构图</h3>
          <img src={imgModule} alt="结构图" className={styles.img} />
        </section>
      </section>
    )
  }
}
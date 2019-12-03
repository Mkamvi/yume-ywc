/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

import React, { Component } from "react";
import { connect } from "react-redux";

import { HOME_UPDATE_NAME_ACTION } from "../../_redux/actions/index.js";

import styles from "./index.less";

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
      <div className={styles.hello}>
        <h1 className={styles.title}>Hello, I am Yume.</h1>
        <section className={styles.description}>
          <span className={styles.descriptionContent}>这是一个使用
          <a href="https://github.com/iWuzhi/yume-ywc/tree/master/generators/react" target="_blank">
          generator-ywc</a>创建的React项目模板，集成了Webpack、postcss、react-router、redux、redux-saga等功能。</span>
        </section>

        <div className={styles.doc}>
          <h3>启动</h3>
          <code className={styles.code}>yarn start</code>
          <br />
          <h3>构建</h3>
          <code className={styles.code}>yarn build</code>
        </div>
      </div>
    )
  }
}
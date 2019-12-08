/**
 * Author iWuzhi
 * Date 2019/12/8
 **/

import React, { Component } from "react";

import styles from "./index.css";

export default class CssModule extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let t = "<div className={styles.hello}>你好啊</div>";
    return (
        <section className={styles.cssModule}>
          <section>
            <h3>关于CSS Module</h3>
            <p>css-module是一个css模块处理器，主要解决css作用域的问题。</p>
          </section>
          <section>
            <h3>为什么选择css module？</h3>
            <p>相比其他需要命名空间的冗长写法，css module的写法更加简洁，可读性也更高。</p>
          </section>
          <section>
            <h3>如何使用？</h3>
            <p>
              <code className="code">
                // hello.jsx
                <br />
                import styles from "./hello.css";
                <br />
                <br />
                {t}

                <br />
                <br />
                // hello.css
                <br />
                {`
                .hello {
                  color: red;
                }`
                }
              </code>
            </p>
          </section>
          <section>
            <h3>如何加载？</h3>
            <p>详见webpack <a href="https://webpack.js.org/loaders/css-loader/#modules">css-loader</a></p>
          </section>
          <section>
            <h3>语法</h3>
            <p>
              基本和css无差别，详见 <a href="https://github.com/css-modules/css-modules">css-module</a>
            </p>
          </section>
        </section>
    )
  }
}
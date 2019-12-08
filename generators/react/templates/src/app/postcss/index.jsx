/**
 * Author iWuzhi
 * Date 2019/12/8
 **/

import React, { Component } from "react";

export default class Postcss extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <section>
          <h3>什么是PostCSS？</h3>
          <p>一个使用JavaScript转换CSS的工具。</p>
        </section>
        <section>
          <h3>有什么用？</h3>
          <p>借助webpack的loader，可以很方便的对css进行多次加工处理，每一次的处理在postcss中就表现为plugin。</p>
        </section>
        <section>
          <h3>这里用了哪些plugin？</h3>
          <p>
            <ol>
              <li>autoprefixer</li>
            </ol>
          </p>
        </section>
        <section>
          <h3>我该如何扩展（添加插件）？</h3>
          <p>
            详见/config/postcss.config.js
          </p>
        </section>
        <section>
          <h3>资源</h3>
          <p>
            <ol>
              <li><a href="https://postcss.org/">PostCSS官网</a></li>
            </ol>
          </p>
        </section>
      </section>
    )
  }
}
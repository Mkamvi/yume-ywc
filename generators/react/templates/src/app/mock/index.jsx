/**
 * Author iWuzhi
 * Date 2019/12/8
 **/

import React, { Component } from "react";

export default class Mock extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <section>
        <section>
          <h3>背景</h3>
          <p>
            鉴于前端开发和后台是并行开发，前端一般急于后台接口进行实时调试，后台无法及时提供，或对某些业务特定场景下，相同接口会有不同的返回数据，使用真实数据比较麻烦。
          </p>
        </section>
        <section>
          <h3>如何使用？</h3>
          <p>
            使用npm start启动服务后，框架自动会使用mock数据，详见/src/_mock
          </p>
        </section>
        <section>
          <h3>如何模拟接口？</h3>
          <p>
            在_mock目录下创建相应模块的文件，然后写入模拟数据，详见 <a href="http://mockjs.com/">mockjs官网</a>
          </p>
        </section>
        <section>
          <h3>如何调用真实接口？</h3>
          <p>
            使用npm start:api启动服务即可。
          </p>
        </section>
        <section>
          <h3>原理</h3>
          <p>
            mockjs重写了浏览器的XHR对象，所以能够拦截请求。
          </p>
        </section>
      </section>
    )
  }
}
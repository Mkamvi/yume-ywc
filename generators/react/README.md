
# A cli for React yeoman generator

### 这是什么？

这是一个yeoman generator用来生成一个React项目，通过给定的依赖包安装最新的依赖，所有的配置都是暴露在外面的原始配置。

### 为什么？
传统的脚手架如react-create-app、dva等都封装了webpack、babel等的配置，不方便扩展(dva可以，但和官网的api还是稍有差别)，还有就是基于模板的脚手架基本项目的依赖配置都是固定的，无法动态获取到最新的类库版本。

### 安装

```javascript
npm install -g yo
npm install -g generator-ywc

```

### 使用
```javascript
yo ywc:react  //ywc: Yume-web-cli:react
```

### 项目结构

```javascript

- config
- public
- src
  - _mock  // mock数据
  - _reudx  // redux相关
  - app  // APP源码目录
  - components  // 公共组件
  - utils  // 工具类
```

### 启动

```javascript
yarn start
```
/**
 * Author iWuzhi
 * Date 2019/12/5
 **/

const Generator = require("yeoman-generator");
const yosay = require("yosay");

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    // 初始化
  }

  async prompting() {
    this.log(
        yosay(`Welcome to the Yume web cli generator !`)
    );
    // 获取选择
    this.appConfig = await this.prompt([
      {
        type: "list",
        name: "type",
        message: "请选择要构建的项目模板：",
        choices: ["React", "Vue"],
        default: "React",
      },
    ]);
    if (this.appConfig.type === "Vue") {
      return this.log("暂不支持Vue，谢谢。");
    }
    this.composeWith(require.resolve('../react'));
  }

  configuring() {
    // 相关配置
  }

  writing() {

  }

  conflicts() {
    // 解决冲突
  }

  install() {

  }

  end() {
    // say goodbye...
  }

};
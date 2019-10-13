/**
 * Author iWuzhi
 * Date 2019/10/13
 **/
 
const Generator = require("yeoman-generator");

global.__dependencies = {
  dependencies: [],
  devDependencies: [],
};

module.exports = class extends Generator {

  initializing() {
    this.composeWith(require.resolve("../webpack"), {});
  }

  async prompting() {
    await this._inputPackageJSONConfig();
  }

  writing() {
    this._createPackageJSONFile();
  }

  async _inputPackageJSONConfig() {
    this.userProjectConfig = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "请输入您的项目名称：",
        default: this.appname,
      },
      {
        type: "input",
        name: "version",
        message: "请输入项目版本号：",
        default: "1.0.0",
      },
      {
        type: "input",
        name: "author",
        message: "请输入项目作者：",
        default: this.user.git.name(),
      },
    ]);
  }

  _createPackageJSONFile() {
    this.fs.copyTpl(
        this.templatePath("package.json"),
        this.destinationPath('package.json'),
        {
          name: this.userProjectConfig.name,
          version: this.userProjectConfig.version,
          author: this.userProjectConfig.author
        }
    );
  }
}
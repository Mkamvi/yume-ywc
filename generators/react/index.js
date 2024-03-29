/**
 * Author iWuzhi
 * Date 2019/11/30
 **/
 
const Generator = require("yeoman-generator");
const dependencies = require("./dependencies");
const devDependencies = require("./devDependencies");


const tplCopyFiles = [
    "config",
    "public",
    "src",
    "package.json",
];
const tplSpecialCopyFiles = [
    ["_babelrc.js", ".babelrc.js"],
    ["_gitignore", ".gitignore"],
    ["_env", ".env"],
];

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    // 初始化
  }

  async prompting() {
    // 获取选择
    this.appConfig = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "请输入项目名称",
        default: this.appname.split(" ").join("_"), // Default to current folder name
      },
      {
        type: "input",
        name: "version",
        message: "请输入版本号",
        default: "1.0.0",
      },
    ]);
  }

  configuring() {
    // 相关配置
  }

  writing() {
    this._copyTemplates();
    this._writePackageJSON({
      name: this.appConfig.name,
      version: this.appConfig.version,
    });
  }

  conflicts() {
    // 解决冲突
  }

  install() {
    // 依赖安装
    this.npmInstall(dependencies, { "save": true });
    this.npmInstall(devDependencies, { "save-dev": true });
  }

  end() {
    // say goodbye...
  }

  _copyTemplates() {
    tplCopyFiles.concat(tplSpecialCopyFiles).forEach((_file) => {
      let _tPath = "", _dPath = "";
      if (typeof _file === "string") {
        _tPath = this.templatePath(_file);
        _dPath = this.destinationPath(_file);
      } else if(Array.isArray(_file)) {
        _tPath = this.templatePath(_file[0]);
        _dPath = this.destinationPath(_file[1] || _file[0]);
      }
      this.fs.copy(_tPath, _dPath);
    })
  }

  _writePackageJSON(config) {
    this.fs.extendJSON(this.destinationPath('package.json'), config);
  }
};
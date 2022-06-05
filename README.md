# 快速创建新页面

Taro create --name [页面名称] 能够在当前项目的 pages 目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器。

## 使用 HTML 标签 https://taro-docs.jd.com/taro/docs/use-h5/

### 使用方法

1.下载安装插件

```
npm i -D @tarojs/plugin-html
```

2.然后在项目配置中添加使用插件

```
// config/index.js
config = {
// ...
plugins: ['@tarojs/plugin-html']
}
```

## 样式相关问题

### html4

```
// app.js
import '@tarojs/taro/html.css';
```

### html5

```
// app.js
import '@tarojs/taro/html5.css';
```

### 引入 stylelint

1.安装项目依赖

```
npm install -D stylelint stylelint-config-standard stylelint-order stylelint-config-standard
```

2.在项目根目录新建.stylelintrc.js 文件，注入 stylelint 规则

3.vscode 下载扩展插件 stylelint

## 引入 eslint

1.安装项目依赖

```
npm i -D eslint eslint-plugin-vue babel-eslint
```

2.配置.eslintrc.js

```
module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parse: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    ...
  },
}
```

# 备注

Vue 中点击事件使用 @tap

# 快速创建新页面

Taro create --name [页面名称] 能够在当前项目的 pages 目录下快速生成新的页面文件，并填充基础代码，是一个提高开发效率的利器。

# 使用 HTML 标签 https://taro-docs.jd.com/taro/docs/use-h5/

## 使用方法

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

# 样式相关问题

## html4

```
// app.js
import '@tarojs/taro/html.css';
```

```
#html5
// app.js
import '@tarojs/taro/html5.css';
```

# 备注

Vue 中点击事件使用 @tap

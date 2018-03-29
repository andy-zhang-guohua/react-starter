# 2018-03-28
1. 引入 `bootstrap 3`

```
 npm install --save bootstrap@3.3.7
```

2. 引入`react-bootstrap 0.32.1` ， 目前仅支持 bootstrap 3
```
 npm install --save react-bootstrap
```

3. 验证以下 bootstrap功能

    - Alert
    - Badge
    - Button
    - Carousel
    - Grid, Row, Col
    - Jumbotron
    - Label
    - Modal
    - Image
    - Overlays,OverlayTrigger
    - Popover (底层下拉滚动一段距离，Modal 中的 Popover 位置有问题)
    - Tabs,Tab
    - Tooltip (底层下拉滚动一段距离，Modal 中的 Tooltip 位置有问题)

4. 验证以下 react 功能

    - 引入自定义 css 文件
    - 引入bootstrap node 模块的 css 文件
    - 引入自定义组件 HelloWorld,AlertDismissable
    - 事件处理 BootstrapPlaygroundApp.js, AlertDismissable
    - 引入图片 BootstrapPlaygroundApp.js

5. 验证以下 css 功能
    -  [flex](http://www.runoob.com/w3cnote/flex-grammar.html)




# 2018-03-26

1. 重新组织目录结构 :

    1. src 源代码目录 (手工创建)
    2. dist 目标代码目录 (手工创建)
    3. dist/index.html 浏览器端应用入口html文件 (目前手动创建)
    4. dist/[name].bundle.js (npx webpack 自动生成)

2. `html-webpack-plugin`用于自动生成dist/index.html (目前未用)
3. `clean-webpack-plugin`用于重新构建时清空dist目录 (目前未用)
4. `style-loader`,`css-loader`,`csv-loader`,`file-loader`,`xml-loader` 用于加载各种资源文件

# 2018-03-25
1. 基于webpack开发react web应用的基础代码框
 - 主要目的 
    - 练习 react web 开发
    - 练习 webpack 使用
2. 编译 : npx webpack
3. 调试运行 : npm start

参考文档 :

1. https://webpack.js.org/guides/getting-started/#basic-setup
2. https://www.cnblogs.com/zamhown/p/6428050.html

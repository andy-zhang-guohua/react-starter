# 2018-03-28
1. 引入 `bootstrap 3`

```
 npm install --save bootstrap@3.3.7
```

1. 引入`react-bootstrap 0.32.1` ， 目前仅支持 bootstrap 3
```
 npm install --save react-bootstrap
```

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

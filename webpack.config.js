const path = require('path');
const config = {
    entry: './src/main.js',
    // 1. 应用程序执行入口文件路径
    // 2. webpack打包入口文件路径
    output: {// 用于控制webpack如何输出打包结果的配置项
        path: path.resolve(__dirname, 'dist'),
        // 所有输出文件的目标输出目录，必须是绝对路径
        // 这里的例子使用了node的模块path,用来将目标输出目录
        // 设置为当前项目根目录下的子目录dist
        filename: 'bundle.js'
        // 目标js代码文件的文件名模板，注意，是文件名模板，可以使用占位符
        // 例子 :
        // 1. bundle.js, 表示入口源main.js文件打包输出为bundle.js
        // 2. [name].js, 表示入口源main.js文件打包输出为main.js (.js之前的部分复制了源文件的文件名)
    },
    mode: 'development',
    devServer: {
        inline: true,
        port: 4000,
        contentBase: path.join(__dirname, 'dist'),
        // 浏览器应用有关文件根目录,如果不指定,则会默认到当前项目根目录
        compress: true, // 启动gzip压缩
    },
    module: {
        rules: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    },
};

module.exports = config;
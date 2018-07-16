const path = require('path');
const config = {
    //devtool: "source-map", // 调试模式可以使用该模式
    devtool: "none", // 生产环境打包要使用此模式
    entry: ['babel-polyfill', './src/main.js'],
    cache: false,
    // 1. 应用程序执行入口文件路径
    // 2. webpack打包入口文件路径
    output: {// 用于控制webpack如何输出打包结果的配置项
        // 所有输出文件的目标输出目录，必须是绝对路径
        // 这里的例子使用了node的模块path,用来将目标输出目录
        // 设置为当前项目根目录下的子目录dist
        path: path.resolve(__dirname, 'dist'),
        // 目标js代码文件的文件名模板，注意，是文件名模板，可以使用占位符
        // 例子 :
        // 1. bundle.js, 表示入口源main.js文件打包输出为bundle.js
        // 2. [name].js, 表示入口源main.js文件打包输出为main.js (.js之前的部分复制了源文件的文件名)
        filename: '[name].bundle.js',
        //图片等公开资源在URL中的路径
        publicPath: '/dist/'
    },
    // Mode 有两个值：development 或者是 production，默认值是 production;
    // Mode 是为减小生产环境构建体积以及节约开发环境的构建时间提供的一种优化方案。
    // production 有如下好处:
    // Small output size
    // Fast code at runtime
    // Omitting development-only code
    // Not exposing source code or file paths
    // Easy to use output assets
    mode: 'production',
    devServer: {
        inline: true,
        port: 3000,
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
                    presets: ['react', 'es2015'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader"  // translates CSS into CommonJS
                }, {
                    loader: "sass-loader",  // compiles Sass to CSS
                    options: {
                        includePaths: ["src/js", "src/styles"]
                    }
                }]
            }
        ]
    },
    watch: false, // 启用观察
    watchOptions: {
        aggregateTimeout: 1000, // in ms
        // 将多个更改聚合到单个重构建(rebuild)

        poll: 500, // 间隔单位 ms
        // 启用轮询观察模式
        // 必须用在不通知更改的文件系统中
        // 即 nfs shares（译者注：Network FileSystem，最大的功能就是可以透過網路，讓不同的機器、不同的作業系統、可以彼此分享個別的檔案 ( share file )）
    },
    performance: {hints: false}
};

module.exports = config;
const path = require('path');
const config = {
    entry: './src/main.js', // 入口文件路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        inline: true,
        port: 4000
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
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('./path.config')

let base = {
    build: path.sourcePath + 'main.js'
}

module.exports = {
    // 入口文件
    entry: base,
    // 出口文件
    output: {
        path: path.outputPath,
        //导出文件
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            "@": path.sourcePath,
            "styles": "@/styles"
        },
    },
    plugins: [

    ],
    module: {
        // 配置编译打包规则
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: '[name].[ext]?[hash:6]',
                            outputPath: 'images/',
                        }
                    }
                ]

            }
        ]


    }

}
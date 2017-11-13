const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebPackBaseConfig = require('./webpack.base.config')
const path = require('./path.config')

module.exports = merge(WebPackBaseConfig, {
    devtool: 'source-map',
    devServer: {
        contentBase: path.outputPath, //本地服务器所加载的页面所在的目录
        inline: true,//实时刷新
        compress: false,
        hot: true,
        open: true, //启动服务，自动打开浏览器
        port : 8081
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('development')
            }
          }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.sourcePath + '/index.html'
        })
    ]
})
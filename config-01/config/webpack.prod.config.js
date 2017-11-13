const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')
const WebPackBaseConfig = require('./webpack.base.config')
const path = require('./path.config')

module.exports = merge(WebPackBaseConfig, {
  // eval-source-map is faster for development
  output: {
    //导出目录
    publicPath: "/", // server-relative
    hashDigestLength: 6,
    //导出文件
    filename: '[name]_[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new SpritesmithPlugin({
    //   src: {
    //     cwd: path.sourcePath + 'images/ico',
    //     glob: '*.png'
    //   },
    //   target: {
    //     image: path.outputPath + 'images/sprite.png',
    //     css: path.outputPath + 'sprite.css'
    //   },
    //   apiOptions: {
    //     cssImageRef: './images/sprite.png'
    //   },
    //   // retina:'@2x',
    //   spritesmithOptions: {
    //     algorithm: 'top-down'
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: path.sourcePath + '/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      }
    })
  ]
})
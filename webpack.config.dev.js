const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.config')
module.exports = Object.assign({}, config, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'EMUI',
            template: 'index.html'
        })
    ],
})
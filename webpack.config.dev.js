const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.config')
module.exports = Object.assign({}, config, {
    mode: 'development',
    entry: {
        example: './lib/example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'EMUI',
            template: 'example.html'
        })
    ],
})
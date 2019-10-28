const config = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Object.assign( {}, config, {
    mode: 'production',
    entry: {
        example: './lib/example.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'doc'),
        libraryTarget: 'umd',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename: 'example.html'
        })
    ],
});
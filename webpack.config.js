const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// import path from 'path';

module.exports = {
    mode: 'production',
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'EMUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'EMUI',
            template: 'index.html'
        })
    ]
    
}
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
// const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        library: "racingVueApp",
        libraryTarget: "umd",
        filename: "racingVueApp.js",
        auxiliaryComment: "Test Comment",
    },
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)
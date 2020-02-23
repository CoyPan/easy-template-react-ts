/**
 * @file 本地开发的配置
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = {
    mode: 'development',
    entry: [
        hotMiddlewareScript,
        path.resolve(__dirname, '../../src/index.tsx')
    ],
    output: {
        path: path.resolve(__dirname, '../../output'),
        filename: `[name].js`,
        chunkFilename: `[name].js`,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: path.resolve(__dirname, '../../src/template/template.html'),
            inject: true,
            minify: {
                collapseWhitespace: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "#eval-source-map"
};
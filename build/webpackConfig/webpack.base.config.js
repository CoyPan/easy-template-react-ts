const path = require('path');

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            '@lib': path.resolve(__dirname, '../../src/lib')
        }
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.(tsx|ts)?$/,
            loader: 'ts-loader',
            options: {
                // getCustomTransformers: () => ({
                //     before: [tsImportPluginFactory({
                //         libraryName: 'antd-mobile',
                //         libraryDirectory: 'lib',
                //         style: 'css'
                //     })]
                // }),
            }
        },{
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader'
        }, {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader'
        }]
    },
    externals: ['fs']
}
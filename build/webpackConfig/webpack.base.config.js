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
        }, {
            test: /\.(ico|jpg|png|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            use: [{
                loader: 'file-loader?name=hunsha/assests/[name].[hash:8].[ext]'
            }]
        }]
    },
    externals: ['fs']
}
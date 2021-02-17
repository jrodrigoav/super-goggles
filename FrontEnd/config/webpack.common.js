const paths = require('./paths.js')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    // Where webpack looks to start building the bundle
    entry: [paths.src + '/app.jsx'],

    // Where webpack outputs the assets and bundles
    output: {
        path: paths.build,
        filename: 'js/[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".js", ".jsx", ".html"]
    },
    // Customize the webpack build process
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: paths.public,
                to: 'assets'
            }
            ]
        }),
        new HtmlWebpackPlugin({
            template: paths.src + '/index.html',
            output: paths.build,
            filename: 'index.html'
        }),
        new ScriptExtPlugin({
            defaultAttribute: 'defer'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'raw-loader' }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    }
};
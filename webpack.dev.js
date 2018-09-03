const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 3000
    },
    module: {

        rules: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader",
                options: {
                    "useBabel": true,
                    "babelOptions": {
                        "babelrc": false, /* Important line */
                        "presets": [
                            ["@babel/preset-env", {"targets": {"browsers": "last 2 versions, ie 11"}, "modules": false}]
                        ],
                        plugins: ['react-hot-loader/babel'],
                    },
                    "babelCore": "@babel/core", // needed for Babel v7}
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new Dotenv()
    ],
});
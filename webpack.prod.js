const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "awesome-typescript-loader"
            }
        ],
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new Dotenv()
    ],

});
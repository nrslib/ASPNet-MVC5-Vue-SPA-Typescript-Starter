const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const bundleOutputDir = path.join(__dirname, "Content/dist");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
    mode: 'development',
    entry: [
        path.join(__dirname, 'front/index.ts')
    ],
    output: {
        path: bundleOutputDir,
        filename: 'client.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.html', '.vue'],
        alias: {
            'vue$' : 'vue/dist/vue.esm.js'
        },
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    plugins: [new VueLoaderPlugin()]
};
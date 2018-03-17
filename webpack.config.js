const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const webpackConfig = {
    devtool: false,
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    `${path.resolve('.')}/src`,
                ],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]

            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __IS_SERVER__: true,
        }),
        new HtmlWebpackPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins.push(new UglifyJSPlugin());
}

module.exports = webpackConfig;

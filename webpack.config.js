const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'comp-testing/Index.tsx'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    cache: true,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'comp-testing/static/'),
        filename: 'js-bundled/[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                        plugins: [
                            ["babel-plugin-transform-class-properties"]
                        ]
                    }
                }]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            },
        ]
    }
}
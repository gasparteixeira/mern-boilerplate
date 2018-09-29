const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
    entry: "./client/src/index.js",
    output: {
        filename: "js/[name].[hash].js",
        chunkFilename: "js/[id].[hash].js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ico|json)$/,
                use: [{ loader: 'url-loader' }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            automaticNameDelimiter: "-",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'async',
                    name: 'vendor',
                    priority: -10,
                    enforce: true,
                },
                react: {
                    test: /react/,
                    chunks: 'initial',
                    name: 'react',
                    priority: 20,
                    enforce: true,
                }
            }
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./client/public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[id].[hash].css"
        }),
        new CopyWebpackPlugin([
            {
                from: './client/public/favicon.ico',
                to: './favicon.ico'
            },
            {
                from: './client/public/manifest.json',
                to: './manifest.json'
            }
        ]),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: "/public"
        }),
    ]

};
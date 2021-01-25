const dotenv = require('dotenv');
dotenv.config();

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



const isDev = process.env.NODE_ENV === 'development';

const config = {
    mode: isDev ? 'development' : 'production',
    entry: {
        app: path.resolve(__dirname, 'src/main.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? 'bundle.js' : '[hash].[name].bundle.js',
        publicPath: '/',
    },
    devtool: isDev ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json', '.scss'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            scriptLoading: 'defer'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/i,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
                exclude: /node_modules/
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            hidePathInfo: true,
            minSize: 20000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
    },
    devServer: {
        port: process.env.PORT,
        overlay: true,
        hot: true,
        open: true,
        stats: { colors: true },
        historyApiFallback: true
    }
}

module.exports = config;
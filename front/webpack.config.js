const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

const config = {
    mode: isDev ? 'development' : 'production',
    entry: {
        app: path.resolve(__dirname, 'src/main.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? 'bundle.js' : '[hash].[name].bundle.js',
        // publicPath: 
    },
    devtool: isDev ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            scriptLoading: 'defer'
        }),
        new VueLoaderPlugin(),
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
                use: 'vue-loader'
            },
        ]
    },
    devServer: {
        port: process.env.PORT,
        contentBase: './dist',
        overlay: true,
        hot: true,
        open: true,
        stats: { colors: true },
        historyApiFallback: true 
    }
};

module.exports = config;

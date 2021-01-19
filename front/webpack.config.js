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
    devtool: isDev ? 'inline-source-map' : false,
    resolve: {
        extensions: ['.ts', '.vue', '.js', '.json'],
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
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].bundle.js',
        // publicPath: 
    },
    devServer: {
        port: process.env.PORT,
        contentBase: './dist',
        overlay: true,
    }
};

module.exports = config;

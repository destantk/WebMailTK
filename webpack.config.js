const webpack = require('webpack');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

server.use(middlewares);
server.use(router);
server.listen(port);

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js',
        publicPath: '/'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: "file-loader",
                include: /fonts/
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader?name=/img/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new HtmlWebpackPlugin({
            template: 'src/asset/index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            DEVELOPMENT: true
        }),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {from: 'src/asset/img/', to: 'img'}
        ])
    ]
}

module.exports = config;
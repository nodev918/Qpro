const path = require("path")
const HTMLwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000
    },
    plugins: [
        new HTMLwebpackPlugin({
            title: 'Qprooo',
            template: './public/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
        	{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}
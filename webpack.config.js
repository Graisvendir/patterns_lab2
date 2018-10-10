var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        App: './src/react/App.jsx',
        test: './src/test.ts',
        interface: './src/interfaces/interface',
        monster: './src/creatures/monster'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Creatures',
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        })
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: [/\.ts?$/, /\.tsx?$/],
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: [/\.js?$/, /\.jsx?$/],
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'jsx' ]
    },
    devServer: {
        contentBase: path.join(__dirname, './build'),
        port: 9000,
        hot: false,
        open: true,
        inline: false
    }
}
var path = require('path');

module.exports = {
    entry: {
        Main: './src/main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build/js/app')
    },
    devtool: "source-map",
    mode: 'development',
    module: {
        rules: [
            {
                test: [/\.ts?$/, /\.tsx?$/],
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', 'jsx' ]
    }
    // devServer: {
    //     contentBase: path.join(__dirname, './build'),
    //     port: 9000,
    //     hot: false,
    //     open: true,
    //     inline: false
    // }
}
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$|\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css?modules'
            }, {
                test: /\.woff2$/,
                loader: 'url-loader'
            }, {
                test: /\.woff$/,
                loader: 'url-loader'
            }, {
                test: /\.ttf$/,
                loader: 'url-loader'
            }, {
                test: /\.eot$/,
                loader: 'url-loader'
            }, {
                test: /\.svg$/,
                loader: 'url-loader'
            }
        ]
    }
}

module.exports = {
    entry: './wwwScript/index.js',
    output: {
        filename: './wwwRoot/script.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js']
    }
};

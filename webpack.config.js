const path = require('path');

const configTsc = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'app.ts'),
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                },
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
}


module.exports = configTsc;

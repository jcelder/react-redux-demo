const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client', 'src');
const SRC_FILE = 'index.js';
const SRC_PATH = path.resolve(SRC_DIR, SRC_FILE);
const OUT_DIR = path.resolve(__dirname, 'client', 'dist');

module.exports = {
    entry: SRC_PATH,
    output: {
        path: OUT_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
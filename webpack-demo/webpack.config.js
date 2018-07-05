const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?minimize']
            }
        ]
    }
    /*
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`
        })
    ]
    */
}
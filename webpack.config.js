var path = require('path');

module.exports = {
    entry: './source/js/act.js',
    output: {
        path: './action',
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
                include: path.resolve('source/components')
            }
        ]
    },
    resolve: {
        root: [path.resolve('source/components'), path.resolve('source/js')],
        extensions: ['', '.js', '.vue']
    }
}
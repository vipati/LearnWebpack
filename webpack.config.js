const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        'es6-promise.auto': './node_modules/es6-promise/dist/es6-promise.auto.js',
        'es6-promise': './node_modules/es6-promise/dist/es6-promise.js',
    },
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
};
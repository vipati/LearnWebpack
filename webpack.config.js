const path = require('path');

module.exports = {
    entry: './node_modules/es6-promise/dist/es6-promise.auto.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
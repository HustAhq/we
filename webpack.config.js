var webpack = require('webpack');
module.exports = {
    entry : './src/js/index.js',
    output : {
        filename: 'index.js',
        path : __dirname + '/out',
        publicPath : "http://localhost:8080/out"
    }
}
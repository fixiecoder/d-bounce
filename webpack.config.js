const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'd-bounce.js',
    library: 'dBounce',
    libraryTarget: 'umd'
  },
   module: {
     loaders: [{
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader'
     }]
   }
};
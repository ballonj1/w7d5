const path = require('path');
module.exports = {
  context: __dirname,
<<<<<<< HEAD
  entry: './frontend/bench_bnb.jsx',
=======
  entry: './frontend/index.jsx',
>>>>>>> d7241bceb4e48b4c4b9748c045ee02ef31b41468
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
};

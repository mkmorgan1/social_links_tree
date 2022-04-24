const path = require('path');

module.exports = {
  entry:'./src/index.js',
  output: { 
     path: path.resolve(__dirname, 'public'),
     filename: 'bundle.js',
   },
   rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
} 1

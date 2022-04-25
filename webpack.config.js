const path = require('path');

module.exports = {
  entry:'./src/index.js',
  mode: 'development',
  output: {
     path: path.resolve(__dirname, 'public'),
     filename: 'bundle.js',
   },
   module: {
     rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
   }
}

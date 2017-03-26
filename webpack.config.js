// Import Webpack npm module
const webpack = require('webpack')
const path = require('path')

module.exports = {
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    // How to process project files with loaders
    loaders: [
      // Process any .js or .jsx file with Babel
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader']
      }
    ]
  },
  // Which file is the entry point to the application
  entry: [
    './src/index.jsx'
  ],
  // Where to output the final bundled code to
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

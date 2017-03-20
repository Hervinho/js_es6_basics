//This file is needed in order for Webpack to work.
//Create it first before starting to use webpack. (Up to filename: 'bundle.js')
module.exports = {
  entry: ['./app/index.js'], //entry point for the application
  output: { //this will move converted code by webpack in bundle.js file
    path: '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/, //this will get every .js within the project
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 5000,
    contentBase: './build',
    inline: true //will allow live code updates.
  }
}

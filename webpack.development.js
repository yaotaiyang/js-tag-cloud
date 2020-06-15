const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    demo: './examples/demo.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|lib)/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '/'),
    filename: '[name].js',
    library: 'JsTagCloud',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: {},
  devServer: {
    contentBase: path.join(__dirname, 'examples'),
    open: true
    //hot: true
    //compress: true
    //port: 9000
  }
}

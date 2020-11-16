const { join } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    main: [
      join(__dirname, 'prebuild/server.js')
    ]
  },
  output: {
    path: join(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

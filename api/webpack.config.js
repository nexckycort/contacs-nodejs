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
  externals: [nodeExternals()]
}
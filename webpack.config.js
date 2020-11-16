const { join } = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    main: [
      join(__dirname, 'prebuild/app.js')
    ]
  },
  output: {
    path: join(__dirname, 'build'),
    filename: 'app.js'
  },
  target: 'node',
  externals: [nodeExternals()]
}

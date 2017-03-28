var path = require('path')

module.exports = {
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader!ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'build'
  }
}
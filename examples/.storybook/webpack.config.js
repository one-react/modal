const path = require('path')
const fs = require('fs')

const themeFilePath = path.resolve(__dirname, './theme.scss')
const themeStr = fs.readFileSync(themeFilePath, { encoding: 'utf-8' })

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: themeStr
            }
          }
        ],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', '../node_modules']
  },
}

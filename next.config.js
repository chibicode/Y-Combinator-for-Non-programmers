const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const path = require('path')

module.exports = withCSS(
  withTypescript({
    webpack(config, options) {
      // Further custom configuration here
      config.resolve.alias = {
        src: path.resolve(__dirname, 'src')
      }
      return config
    }
  })
)

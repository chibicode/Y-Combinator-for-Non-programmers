const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript({
  webpack(config, options) {
    // Further custom configuration here
    config.resolve.alias = {
      src: path.resolve(__dirname, 'src')
    }
    return config
  }
})

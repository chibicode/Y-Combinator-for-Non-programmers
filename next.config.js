const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript({
  webpack(config, options) {
    // Further custom configuration here
    config.resolve.alias = {
      lib: path.resolve(__dirname, 'src/lib'),
      components: path.resolve(__dirname, 'src/components')
    }
    return config
  }
})

const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const path = require('path')

const config = withCSS(
  withTypescript({
    webpack(config, options) {
      // Further custom configuration here
      config.resolve.alias = {
        src: path.resolve(__dirname, 'src')
      }
      config.module.rules.push({
        test: /\.url.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      })
      return config
    }
  })
)

config.publicRuntimeConfig = {
  locale: process.env.APP_LOCALE
}

module.exports = config

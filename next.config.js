const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const withMdx = require('@zeit/next-mdx')()
const path = require('path')

const config = withMdx(
  withCSS(
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
)

config.publicRuntimeConfig = {
  locale: process.env.APP_LOCALE
}

module.exports = config

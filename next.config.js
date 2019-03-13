const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')
const path = require('path')

const config = withCSS(
  withTypescript({
    webpack(config) {
      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        // Must also change tsconfig.json
        src: path.resolve(__dirname, 'src'),
        test: path.resolve(__dirname, 'test')
      })
      config.module.rules.push({
        test: /\.url.svg$/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      })
      config.module.rules.push({
        test: /\.svgr.svg$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }
      })
      return config
    },
    env: {
      locale: process.env.APP_LOCALE
    }
  })
)

module.exports = config

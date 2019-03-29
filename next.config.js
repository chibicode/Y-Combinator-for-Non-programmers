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
      productionLocale: process.env.PRODUCTION_LOCALE,
      showHiddenCardsOnQuiz: process.env.SHOW_HIDDEN_CARDS_ON_QUIZ
    },
    // For locale, if running 2 servers (JP and EN) locally, if you use build-time config
    // (env instead of publicRuntimeConfig) then the config overlaps in both servers.
    // So must use publicRuntimeConfig instead.
    publicRuntimeConfig: {
      devLocale: process.env.DEV_LOCALE
    }
  })
)

module.exports = config

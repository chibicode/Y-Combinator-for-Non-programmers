const path = require('path')

const config = {
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      // Must also change tsconfig.json
      src: path.resolve(__dirname, 'src'),
      test: path.resolve(__dirname, 'test'),
      scripts: path.resolve(__dirname, 'scripts')
    })

    return config
  },
  env: {
    productionLocale: process.env.PRODUCTION_LOCALE,
    isDevelopment: process.env.IS_DEVELOPMENT
  },
  trailingSlash: true
}

// For locale, if running 2 servers (JP and EN) locally, if you use build-time config
// (env instead of publicRuntimeConfig) then the config overlaps in both servers.
// So must use publicRuntimeConfig instead.
// However publicRuntimeConfig is not available in serverless environment, so
// skip if process.env.PRODUCTION_LOCALE is set.
if (!process.env.PRODUCTION_LOCALE) {
  config.publicRuntimeConfig = {
    devLocale: process.env.DEV_LOCALE
  }
}

module.exports = config

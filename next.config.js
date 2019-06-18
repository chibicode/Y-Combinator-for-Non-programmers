const withTypescript = require('@zeit/next-typescript')
const path = require('path')
const fs = require('fs')

const config = withTypescript({
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      // Must also change tsconfig.json
      src: path.resolve(__dirname, 'src'),
      test: path.resolve(__dirname, 'test')
    })
    return config
  },
  env: {
    productionLocale: process.env.PRODUCTION_LOCALE,
    isDevelopment: process.env.IS_DEVELOPMENT
  },
  // For locale, if running 2 servers (JP and EN) locally, if you use build-time config
  // (env instead of publicRuntimeConfig) then the config overlaps in both servers.
  // So must use publicRuntimeConfig instead.
  publicRuntimeConfig: {
    devLocale: process.env.DEV_LOCALE
  },
  exportPathMap(defaultPathMap, { dev, outDir }) {
    if (!dev) {
      fs.copyFileSync(`./dist/sitemap.xml`, `${outDir}/sitemap.xml`)
    }

    return defaultPathMap
  }
})

module.exports = config

const withTypescript = require('@zeit/next-typescript')
const path = require('path')
const fs = require('fs')

const config = withTypescript({
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      // Must also change tsconfig.json
      src: path.resolve(__dirname, 'src'),
      test: path.resolve(__dirname, 'test'),
      scripts: path.resolve(__dirname, 'scripts')
    })

    // TODO: Remove when https://github.com/webpack/webpack/pull/9349 is
    // added on the webpack version I'm using
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: {
        loader: path.resolve(__dirname, './optimizedJsonLoader.js')
      }
    })

    return config
  },
  env: {
    productionLocale: process.env.PRODUCTION_LOCALE,
    productionContentVersion: process.env.PRODUCTION_CONTENT_VERSION,
    isDevelopment: process.env.IS_DEVELOPMENT
  },
  // For locale, if running 2 servers (JP and EN) locally, if you use build-time config
  // (env instead of publicRuntimeConfig) then the config overlaps in both servers.
  // So must use publicRuntimeConfig instead.
  publicRuntimeConfig: {
    devLocale: process.env.DEV_LOCALE,
    devContentVersion: process.env.DEV_CONTENT_VERSION
  },
  exportPathMap(defaultPathMap, { dev, outDir }) {
    if (!dev) {
      fs.copyFileSync('sitemap.xml', `${outDir}/sitemap.xml`)
    }

    return defaultPathMap
  }
})

module.exports = config

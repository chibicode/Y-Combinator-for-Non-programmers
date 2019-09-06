import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: {} }
export default (publicRuntimeConfig.devContentVersion ||
  process.env.productionContentVersion ||
  // Support for ts-node that doesn't go through next.config.js
  process.env.DEV_CONTENT_VERSION ||
  process.env.PRODUCTION_CONTENT_VERSION ||
  'v2') as ('v1' | 'v2')

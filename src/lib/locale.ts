import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
export default (publicRuntimeConfig.devLocale ||
  process.env.productionLocale) as ('en' | 'jp')

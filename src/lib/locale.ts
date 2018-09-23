import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const locale = publicRuntimeConfig.locale as 'jp' | 'en'

export default locale

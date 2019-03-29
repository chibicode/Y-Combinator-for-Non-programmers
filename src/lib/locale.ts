import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
const locale = (publicRuntimeConfig.devLocale ||
  process.env.productionLocale) as ('en' | 'jp')

export default locale

export const lang = {
  en: 'en',
  jp: 'ja'
}[locale]

export const ogLocale = {
  en: 'en_US',
  jp: 'ja_JP'
}[locale]

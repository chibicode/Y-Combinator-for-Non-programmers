import getConfig from 'next/config'
const locale = (process.env.productionLocale ||
  (getConfig() || { publicRuntimeConfig: {} }).devLocale ||
  // Support for ts-node that doesn't go through next.config.js
  process.env.DEV_LOCALE ||
  process.env.PRODUCTION_LOCALE ||
  'en') as ('en' | 'jp')

export default locale

export const lang = {
  en: 'en',
  jp: 'ja'
}[locale]

export const ogLocale = {
  en: 'en_US',
  jp: 'ja_JP'
}[locale]

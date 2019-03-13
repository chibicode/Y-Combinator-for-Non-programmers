export const isJp = process.env.locale === 'jp'
export const isEn = process.env.locale === 'en'
const locale: 'en' | 'jp' = (process.env.locale as ('en' | 'jp')) || 'en'
export default locale

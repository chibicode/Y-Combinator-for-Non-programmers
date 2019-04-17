import locale from 'src/lib/locale'

export const baseUrl =
  locale === 'en' ? 'https://yc.chibicode.com' : 'https://yc-jp.chibicode.com'

export const episodeUrl = (number: number) => `${baseUrl}/${number}`

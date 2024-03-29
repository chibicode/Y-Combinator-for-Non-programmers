import locale from 'src/lib/locale'

export const jpBaseUrl = 'https://yj.chibicode.com'
export const enBaseUrl = 'https://ycombinator.chibicode.com'
export const baseUrl = locale === 'en' ? enBaseUrl : jpBaseUrl

export const githubRepo =
  'https://github.com/chibicode/Y-Combinator-for-Non-programmers'

export const ogImageUrl =
  locale === 'en'
    ? `${baseUrl}/static/images/og-image-en-v2.png`
    : `${baseUrl}/static/images/og-image-jp-v5.png`

export const ogUrl = (episodeNumber: number) =>
  `${baseUrl}${episodeNumber > 0 ? `/${episodeNumber}` : ''}`

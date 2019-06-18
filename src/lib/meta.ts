import locale from 'src/lib/locale'

export const baseUrl =
  locale === 'en' ? 'https://y.chibicode.com' : 'https://yj.chibicode.com'

export const githubRepo = 'https://github.com/chibicode/yc'

export const ogImageUrl = `${baseUrl}/static/images/og-image-${locale}-v2.png`

export const ogUrl = (episodeNumber: number) =>
  `${baseUrl}${episodeNumber > 0 ? `/${episodeNumber}/` : ''}`

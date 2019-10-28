import locale from 'src/lib/locale'

export const jpBaseUrl = 'https://yj.chibicode.com'
export const enBaseUrl = 'https://ycombinator.chibicode.com'
export const baseUrl = locale === 'en' ? enBaseUrl : jpBaseUrl

export const githubRepo = 'https://github.com/chibicode/yc'

export const ogImageUrl = `${baseUrl}/static/images/og-image-${locale}-v5.png`

export const ogUrl = (episodeNumber: number) =>
  `${baseUrl}${episodeNumber > 0 ? `/${episodeNumber}/` : ''}`

export const demoUrl = `${baseUrl}/demo/`

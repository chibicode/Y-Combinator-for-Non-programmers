import locale from 'src/lib/locale'

const episodeTitlePrefix = (episodeNumber: number) =>
  locale === 'jp' ? `第${episodeNumber}章` : `Episode ${episodeNumber}`

export default episodeTitlePrefix

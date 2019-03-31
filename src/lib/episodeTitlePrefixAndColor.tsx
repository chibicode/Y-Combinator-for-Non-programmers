import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import {
  numBeginnerEpisodes,
  numIntermediateEpisodes
} from 'src/lib/numEpisodes'

export const beginnerColor = colors('green600')
export const intermediateColor = colors('blue600')
export const advancedColor = colors('pink400')

const episodeTitlePrefixAndColor = (
  episodeNumber: number,
  abbreviated: boolean = false
) => {
  if (episodeNumber <= numBeginnerEpisodes) {
    return {
      prefix:
        locale === 'jp'
          ? `初級その${episodeNumber}`
          : `Beginner ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
      color: beginnerColor
    }
  } else if (episodeNumber <= numBeginnerEpisodes + numIntermediateEpisodes) {
    return {
      prefix:
        locale === 'jp'
          ? `中級その${episodeNumber - numBeginnerEpisodes}`
          : `Intermediate ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
      color: intermediateColor
    }
  } else {
    return {
      prefix:
        locale === 'jp'
          ? `上級その${episodeNumber -
              numBeginnerEpisodes -
              numIntermediateEpisodes}`
          : `Advanced ${!abbreviated ? 'Level ' : ''}${episodeNumber -
              numBeginnerEpisodes -
              numIntermediateEpisodes}`,
      color: advancedColor
    }
  }
}

export default episodeTitlePrefixAndColor

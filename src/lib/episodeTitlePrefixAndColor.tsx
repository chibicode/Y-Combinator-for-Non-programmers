import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import { numBeginnerLevels, numIntermediateLevels } from 'src/lib/numEpisodes'

export const beginnerColor = colors('green600')
export const intermediateColor = colors('blue600')
export const advancedColor = colors('pink400')

const episodeTitlePrefixAndColor = (
  episodeNumber: number,
  abbreviated: boolean = false
) => {
  if (episodeNumber <= numBeginnerLevels) {
    return {
      prefix:
        locale === 'jp'
          ? `初級その${episodeNumber}`
          : `Beginner ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
      color: beginnerColor
    }
  } else if (episodeNumber <= numBeginnerLevels + numIntermediateLevels) {
    return {
      prefix:
        locale === 'jp'
          ? `中級その${episodeNumber - numBeginnerLevels}`
          : `Intermediate ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
      color: intermediateColor
    }
  } else {
    return {
      prefix:
        locale === 'jp'
          ? `上級その${episodeNumber -
              numBeginnerLevels -
              numIntermediateLevels}`
          : `Advanced ${!abbreviated ? 'Level ' : ''}${episodeNumber -
              numBeginnerLevels -
              numIntermediateLevels}`,
      color: advancedColor
    }
  }
}

export default episodeTitlePrefixAndColor

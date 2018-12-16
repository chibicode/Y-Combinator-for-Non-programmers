import locale from 'src/lib/locale'
import { colors } from 'src/lib/theme'
import {
  numBeginnerLevels as numYcBeginnerLevels,
  numIntermediateLevels as numYcIntermediateLevels
} from 'src/lib/yc/numEpisodesForEachLevel'

export const beginnerColor = colors('yellow900')
export const intermediateColor = colors('indigo300')
export const advancedColor = colors('pink400')

const episodeTitlePrefixAndColor = (
  episodeNumber: number,
  lessonName: string,
  abbreviated: boolean = false
) => {
  if (lessonName === 'yc') {
    if (episodeNumber <= numYcBeginnerLevels) {
      return {
        prefix:
          locale === 'jp'
            ? `初級その${episodeNumber}`
            : `Beginner ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
        color: beginnerColor
      }
    } else if (episodeNumber <= numYcIntermediateLevels) {
      return {
        prefix:
          locale === 'jp'
            ? `中級その${episodeNumber}`
            : `Intermediate ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
        color: intermediateColor
      }
    } else {
      return {
        prefix:
          locale === 'jp'
            ? `上級その${episodeNumber}`
            : `Advanced ${!abbreviated ? 'Level ' : ''}${episodeNumber}`,
        color: advancedColor
      }
    }
  } else {
    return {
      prefix: '',
      color: ''
    }
  }
}

export default episodeTitlePrefixAndColor

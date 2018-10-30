import locale from 'src/lib/locale'
import { numBeginnerLevels as numYcBeginnerLevels } from 'src/lib/yc/numEpisodesForEachLevel'

const episodeTitlePrefix = (
  episodeNumber: number,
  lessonName: string,
  abbreviated: boolean = false
) => {
  if (lessonName === 'yc') {
    if (locale === 'jp') {
      if (episodeNumber <= numYcBeginnerLevels) {
        return `初級その${episodeNumber}`
      } else {
        return `中級その${episodeNumber - numYcBeginnerLevels}`
      }
    } else {
      if (episodeNumber <= numYcBeginnerLevels) {
        return `Beginner ${!abbreviated ? 'Level ' : ''}${episodeNumber}`
      } else {
        return `Intermediate ${!abbreviated ? 'Level ' : ''}${episodeNumber -
          numYcBeginnerLevels}`
      }
    }
  } else {
    return ''
  }
}

export default episodeTitlePrefix

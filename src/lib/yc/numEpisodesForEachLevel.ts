import locale from 'src/lib/locale'

export const numBeginnerLevels = 6
export const numIntermediateLevels = 6

export const remainingText = (nextEpisode: number) => {
  if (nextEpisode <= numBeginnerLevels) {
    const num = numBeginnerLevels - nextEpisode + 1
    if (locale === 'jp') {
      return `初級は残り${num}ページです！`
    } else {
      return `${num} more Beginner Level${num > 1 ? 's' : ''} left!`
    }
  } else if (nextEpisode === numBeginnerLevels + 1) {
    if (locale === 'jp') {
      return `次は中級です！`
    } else {
      return `Next Up: Intermediate Levels!`
    }
  } else if (nextEpisode <= numBeginnerLevels + numIntermediateLevels) {
    const num = numBeginnerLevels + numIntermediateLevels - nextEpisode + 1
    if (locale === 'jp') {
      return `中級は残り${num}ページです！`
    } else {
      return `${num} more Intermediate Level${num > 1 ? 's' : ''} left!`
    }
  } else if (nextEpisode === numBeginnerLevels + numIntermediateLevels + 1) {
    if (locale === 'jp') {
      return `次は上級です！`
    } else {
      return `Next Up: Advanced Levels!`
    }
  }
  return undefined
}

import locale from 'src/lib/locale'

export const numBeginnerLevels = 7
export const numIntermediateLevels = 7

export const remainingText = (nextEpisode: number) => {
  if (nextEpisode <= numBeginnerLevels) {
    const num = numBeginnerLevels - nextEpisode + 1
    if (locale === 'jp') {
      return `初級は残り${num}ページです！`
    } else {
      return `${num} more beginner level${num > 1 ? 's' : ''} left!`
    }
  } else if (nextEpisode === numBeginnerLevels + 1) {
    return undefined
  }
  return undefined
}

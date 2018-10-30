import locale from 'src/lib/locale'

export const numBeginnerLevels = 7
export const numIntermediateLevels = 7

export const remainingText = (nextEpisode: number) => {
  if (nextEpisode <= numBeginnerLevels) {
    if (locale === 'jp') {
      return `初級は残り${numBeginnerLevels - nextEpisode + 1}ページです！`
    } else {
      return `${numBeginnerLevels - nextEpisode + 1} more beginner levels left!`
    }
  } else if (nextEpisode === numBeginnerLevels + 1) {
    return undefined
  }
  return undefined
}

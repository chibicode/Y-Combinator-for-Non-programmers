import locale from 'src/lib/locale'

export const numBeginnerEpisodes = 5
export const numIntermediateEpisodes = 5
export const numAdvancedEpisodes = 5
export const numEpisodesExceptFirstAndLast =
  numBeginnerEpisodes + numIntermediateEpisodes + numAdvancedEpisodes
export const finalEpisodeNumber = numEpisodesExceptFirstAndLast + 1
export const numTotalPages = finalEpisodeNumber + 1

export const episodeCategory = (episodeNumber: number) => {
  if (episodeNumber === 0) {
    return 'intro'
  } else if (episodeNumber <= numBeginnerEpisodes) {
    return 'beginner'
  } else if (episodeNumber <= numBeginnerEpisodes + numIntermediateEpisodes) {
    return 'intermediate'
  } else if (
    episodeNumber <=
    numBeginnerEpisodes + numIntermediateEpisodes + numAdvancedEpisodes
  ) {
    return 'advanced'
  } else {
    return 'epilogue'
  }
}

export const episodeNumberWithinCategory = (episodeNumber: number) => {
  if (episodeNumber === 0) {
    return undefined
  } else if (episodeNumber <= numBeginnerEpisodes) {
    return episodeNumber
  } else if (episodeNumber <= numBeginnerEpisodes + numIntermediateEpisodes) {
    return episodeNumber - numBeginnerEpisodes
  } else if (
    episodeNumber <=
    numBeginnerEpisodes + numIntermediateEpisodes + numAdvancedEpisodes
  ) {
    return episodeNumber - numBeginnerEpisodes - numIntermediateEpisodes
  } else {
    return undefined
  }
}

export const numRemainingEpisodesWithinCategory = (episodeNumber: number) => {
  if (episodeNumber <= numBeginnerEpisodes) {
    return numBeginnerEpisodes - episodeNumber
  } else if (episodeNumber <= numBeginnerEpisodes + numIntermediateEpisodes) {
    return numBeginnerEpisodes + numIntermediateEpisodes - episodeNumber
  } else {
    return (
      numAdvancedEpisodes +
      numBeginnerEpisodes +
      numIntermediateEpisodes -
      episodeNumber
    )
  }
}

export const remainingText = (nextEpisode: number) => {
  if (nextEpisode <= numBeginnerEpisodes) {
    const num = numBeginnerEpisodes - nextEpisode + 1
    if (locale === 'jp') {
      return `初級は残り${num}ページです！`
    } else {
      return `${num} more beginner level${num > 1 ? 's' : ''} left!`
    }
  } else if (nextEpisode === numBeginnerEpisodes + 1) {
    if (locale === 'jp') {
      return `次は中級です！`
    } else {
      return `Next up: Intermediate levels!`
    }
  } else if (nextEpisode <= numBeginnerEpisodes + numIntermediateEpisodes) {
    const num = numBeginnerEpisodes + numIntermediateEpisodes - nextEpisode + 1
    if (locale === 'jp') {
      return `中級は残り${num}ページです！`
    } else {
      return `${num} more intermediate level${num > 1 ? 's' : ''} left!`
    }
  } else if (
    nextEpisode ===
    numBeginnerEpisodes + numIntermediateEpisodes + 1
  ) {
    if (locale === 'jp') {
      return `次は上級です！`
    } else {
      return `Next up: Advanced levels!`
    }
  } else if (
    nextEpisode <=
    numBeginnerEpisodes + numIntermediateEpisodes + numAdvancedEpisodes
  ) {
    const num =
      numBeginnerEpisodes +
      numIntermediateEpisodes +
      numAdvancedEpisodes -
      nextEpisode +
      1
    if (locale === 'jp') {
      return `上級は残り${num}ページです！`
    } else {
      return `${num} more advanced level${num > 1 ? 's' : ''} left!`
    }
  }
  return undefined
}

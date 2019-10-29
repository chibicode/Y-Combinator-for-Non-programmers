import { useState, useContext } from 'react'
import GlobalContext from 'src/components/GlobalContext'
import EpisodeContext from 'src/components/EpisodeContext'
import { EpisodeCardListType } from 'src/components/EpisodeCardList'
import locale from 'src/lib/locale'

const getNextYesNoQuizIndex = (cards: EpisodeCardListType, fromIndex = 0) => {
  for (let i = fromIndex; i < cards.length; i++) {
    if (cards[i].type === 'yesNoQuiz') {
      return i
    }
  }
  return cards.length - 1
}

const useConditionalCards = (cards: EpisodeCardListType) => {
  const { furthestEpisode } = useContext(GlobalContext)
  const { episodeNumber } = useContext(EpisodeContext)
  const [nextYesNoQuizIndex, setNextYesNoQuizIndex] = useState(
    furthestEpisode && episodeNumber < furthestEpisode
      ? cards.length - 1
      : getNextYesNoQuizIndex(cards)
  )
  const setLastVisibleCardIndex = () => {
    if (nextYesNoQuizIndex + 1 < cards.length) {
      setNextYesNoQuizIndex(
        getNextYesNoQuizIndex(cards, nextYesNoQuizIndex + 1)
      )
    }
  }

  if (process.env.isDevelopment) {
    return {
      lastVisibleCardIndex: cards.length - 1,
      setLastVisibleCardIndex: () => {}
    }
  } else {
    return {
      lastVisibleCardIndex: nextYesNoQuizIndex,
      setLastVisibleCardIndex
    }
  }
}

export default useConditionalCards

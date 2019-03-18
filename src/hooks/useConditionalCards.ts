import { useState, useContext } from 'react'
import GlobalContext from 'src/components/GlobalContext'
import EpisodeHeroContext from 'src/components/EpisodeHeroContext'
import { EpisodeCardListType } from 'src/components/EpisodeCardList'

const getNextYesNoQuizIndex = (
  cards: EpisodeCardListType,
  fromIndex: number = 0
) => {
  for (let i = fromIndex; i < cards.length; i++) {
    if (cards[i].type === 'yesNoQuiz') {
      return i
    }
  }
  return cards.length - 1
}

const useConditionalCards = (cards: EpisodeCardListType) => {
  const { furthestEpisodes } = useContext(GlobalContext)
  const { lessonName, episodeNumber } = useContext(EpisodeHeroContext)
  const furthestEpisodeForThisLesson = furthestEpisodes[lessonName]
  const [nextYesNoQuizIndex, setNextYesNoQuizIndex] = useState(
    furthestEpisodeForThisLesson && episodeNumber < furthestEpisodeForThisLesson
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

  if (process.env.showHiddenCardsOnQuiz) {
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

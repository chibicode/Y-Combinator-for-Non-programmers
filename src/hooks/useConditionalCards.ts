import { useState } from 'react'
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
  const [nextYesNoQuizIndex, setNextYesNoQuizIndex] = useState(
    getNextYesNoQuizIndex(cards)
  )
  const setLastVisibleCardIndex = () => {
    setNextYesNoQuizIndex(getNextYesNoQuizIndex(cards, nextYesNoQuizIndex + 1))
  }

  return {
    lastVisibleCardIndex: nextYesNoQuizIndex,
    setLastVisibleCardIndex
  }
}

export default useConditionalCards

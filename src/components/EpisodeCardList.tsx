import React from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import useConditionalCards from 'src/hooks/useConditionalCards'

export interface EpisodeCardType {
  type?: 'yesNoQuiz'
  content: React.ReactNode
}

export type EpisodeCardListType = ReadonlyArray<EpisodeCardType>

const EpisodeCardList = ({ cards }: { cards: EpisodeCardListType }) => {
  const { lastVisibleCardIndex, setLastVisibleCardIndex } = useConditionalCards(
    cards
  )
  return (
    <>
      <EpisodePageInitialRenderWarning />
      {cards.map(({ type, content }, index) =>
        index <= lastVisibleCardIndex ? (
          <CardWrapper
            slideNumber={index + 1}
            slideCount={cards.length}
            key={`card${index}`}
            type={type}
            isLast={index < lastVisibleCardIndex}
            setLastVisibleCardIndex={setLastVisibleCardIndex}
          >
            {content}
          </CardWrapper>
        ) : null
      )}
    </>
  )
}

export default EpisodeCardList

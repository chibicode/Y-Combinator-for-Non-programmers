import React from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import useConditionalCards from 'src/hooks/useConditionalCards'

export interface EpisodeCardType {
  type?: 'yesNoQuiz'
  title?: React.ReactNode
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
      {cards.map(({ title, type, content }, index) =>
        index <= lastVisibleCardIndex ? (
          <CardWrapper
            slideNumber={index + 1}
            slideCount={cards.length}
            key={`card${index}`}
            type={type}
            isLast={index < lastVisibleCardIndex}
            title={title}
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

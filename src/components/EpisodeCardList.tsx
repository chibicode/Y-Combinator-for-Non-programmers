import React from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import EpisodeHero from 'src/components/EpisodeHero'
import useConditionalCards from 'src/hooks/useConditionalCards'
import h from 'src/lib/h'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'warning' | 'meta'
  title?: React.ReactNode
  preview?: React.ReactNode
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
      <EpisodeHero />
      {cards.map(({ title, type, content, preview }, index) =>
        index <= lastVisibleCardIndex ? (
          <CardWrapper
            slideNumber={index + 1}
            slideCount={cards.length}
            key={`card${index}`}
            type={type}
            isLast={index === lastVisibleCardIndex}
            title={
              type === 'sideNote' ? (
                <>
                  {h('sideNotePrefix')}: {title}
                </>
              ) : (
                title
              )
            }
            setLastVisibleCardIndex={setLastVisibleCardIndex}
            preview={preview}
          >
            {content}
          </CardWrapper>
        ) : null
      )}
    </>
  )
}

export default EpisodeCardList

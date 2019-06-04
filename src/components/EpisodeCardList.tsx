import React from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import EpisodeHero from 'src/components/EpisodeHero'
import { CardProps } from 'src/components/Card'
import useConditionalCards from 'src/hooks/useConditionalCards'
import H from 'src/components/H'
import { P, Hr } from 'src/components/ContentTags'
import { shareVisible } from 'src/lib/twitter'
import NextLessonButton from 'src/components/NextLessonButton'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'meta' | 'summary'
  title?: React.ReactNode
  preview?: CardProps['preview']
  content: React.ReactNode
  footer?: CardProps['footer']
}

export type EpisodeCardListType = readonly EpisodeCardType[]

const EpisodeCardList = ({ cards }: { cards: EpisodeCardListType }) => {
  const { lastVisibleCardIndex, setLastVisibleCardIndex } = useConditionalCards(
    cards
  )
  return (
    <>
      <EpisodePageInitialRenderWarning />
      <EpisodeHero />
      {cards.length > 0 ? (
        <>
          {cards.map(({ title, type, content, preview, footer }, index) =>
            index <= lastVisibleCardIndex ? (
              <CardWrapper
                slideNumber={index + 1}
                slideCount={shareVisible ? cards.length + 1 : cards.length}
                key={`card${index}`}
                type={type}
                title={title}
                setLastVisibleCardIndex={setLastVisibleCardIndex}
                preview={preview}
                isLast={index === lastVisibleCardIndex && !shareVisible}
                footer={footer}
              >
                {content}
              </CardWrapper>
            ) : null
          )}
          {shareVisible && cards.length - 1 === lastVisibleCardIndex && (
            <CardWrapper
              slideNumber={cards.length + 1}
              slideCount={cards.length + 1}
              type="meta"
              isLast
              setLastVisibleCardIndex={setLastVisibleCardIndex}
              title={<H args={{ name: 'shareTitle' }} />}
            >
              <H args={{ name: 'shareContent' }} />
              <Hr />
              <NextLessonButton />
            </CardWrapper>
          )}
        </>
      ) : (
        <CardWrapper setLastVisibleCardIndex={setLastVisibleCardIndex}>
          <P>
            <H args={{ name: 'pageUnderConstruction' }} />
          </P>
        </CardWrapper>
      )}
    </>
  )
}

export default EpisodeCardList

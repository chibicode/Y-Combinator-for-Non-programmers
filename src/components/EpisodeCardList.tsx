/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import EpisodeHero from 'src/components/EpisodeHero'
import { CardProps } from 'src/components/Card'
import useConditionalCards from 'src/hooks/useConditionalCards'
import H from 'src/components/H'
import { P } from 'src/components/ContentTags'
import { shareVisible } from 'src/lib/twitter'
import NextLessonButton from 'src/components/NextLessonButton'
import { spaces } from 'src/lib/theme'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'meta' | 'summary' | 'share'
  title?: React.ReactNode
  preview?: CardProps['preview']
  content: React.ReactNode
  footer?: CardProps['footer']
}

export type EpisodeCardListType = readonly EpisodeCardType[]

const EpisodeCardList = ({
  cards,
  notFound
}: {
  cards: EpisodeCardListType
  notFound: boolean
}) => {
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
                slideCount={cards.length}
                key={`card${index}`}
                type={type}
                title={title}
                setLastVisibleCardIndex={setLastVisibleCardIndex}
                preview={preview}
                isLast={index === lastVisibleCardIndex}
                footer={footer}
              >
                {content}
              </CardWrapper>
            ) : null
          )}
          {shareVisible &&
            !notFound &&
            cards.length - 1 === lastVisibleCardIndex && (
              <div
                css={css`
                  padding: ${spaces(8)} 0 ${spaces(1)};
                `}
              >
                <CardWrapper
                  type="share"
                  isLast
                  title={<H args={{ name: 'shareTitle' }} />}
                  setLastVisibleCardIndex={setLastVisibleCardIndex}
                >
                  <H args={{ name: 'shareContent' }} />
                  <NextLessonButton halfMargin />
                </CardWrapper>
              </div>
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

EpisodeCardList.defaultProps = {
  notFound: false
}

export default EpisodeCardList

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import { InlineHeader } from 'src/components/ContentTags'
import EpisodeHero from 'src/components/EpisodeHero'
import { CardProps } from 'src/components/Card'
import useConditionalCards from 'src/hooks/useConditionalCards'
import H from 'src/components/H'
import { P } from 'src/components/ContentTags'
import { shareVisible } from 'src/lib/twitter'
import NextLessonButton from 'src/components/NextLessonButton'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { spaces, fontSizes } from 'src/lib/theme'
import EpisodeContext from 'src/components/EpisodeContext'
import PrevNextLinks from 'src/components/PrevNextLinks'
import Emoji from 'src/components/Emoji'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'meta' | 'summary'
  title?: React.ReactNode
  preview?: CardProps['preview']
  content?: React.ReactNode
  footer?: CardProps['footer']
  t8d?: boolean
}

export type EpisodeCardListType = readonly EpisodeCardType[]

const EpisodeCardList = ({
  cards,
  notFound,
  underConstruction
}: {
  cards: EpisodeCardListType
  notFound: boolean
  underConstruction?: boolean
}) => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { lastVisibleCardIndex, setLastVisibleCardIndex } = useConditionalCards(
    cards
  )
  return (
    <>
      <EpisodePageInitialRenderWarning />
      <EpisodeHero />
      <>
        {underConstruction && (
          <CardWrapper
            type="summary"
            t8d
            title={
              <>
                <H args={{ name: 'pageUnderConstructionTitle' }} />
              </>
            }
          >
            <P t8d>
              <H args={{ name: 'pageUnderConstruction' }} />
            </P>
            <EmojiSeparator emojis={['⚠️', '⚠️', '⚠️']} />
          </CardWrapper>
        )}
        {cards.map(({ title, type, content, preview, footer, t8d }, index) =>
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
              footer={
                episodeNumber > 0 && index === 0
                  ? {
                      content: (
                        <>
                          <P
                            t8d
                            css={css`
                              text-align: center;
                            `}
                          >
                            <InlineHeader>
                              <Emoji>🌲</Emoji>{' '}
                              <H args={{ name: 'goToOtherPage' }} />{' '}
                              <Emoji>🌲</Emoji>
                            </InlineHeader>
                          </P>
                          <div
                            css={css`
                              margin-bottom: ${spaces(1)};
                              font-size: ${fontSizes(0.8)};
                              margin-left: ${spaces('-0.75')};
                              margin-right: ${spaces('-0.75')};
                            `}
                          >
                            <PrevNextLinks />
                          </div>
                        </>
                      )
                    }
                  : footer
              }
              t8d={t8d}
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
                padding: ${spaces(
                    episodeNumber <= numEpisodesExceptFirstAndLast ? 8 : 2
                  )}
                  0 ${spaces(1)};
              `}
            >
              <CardWrapper
                type="meta"
                isLast={
                  episodeNumber > 0 &&
                  episodeNumber <= numEpisodesExceptFirstAndLast
                }
                title={<H args={{ name: 'shareTitle' }} />}
                footer={{
                  color: 'indigo',
                  content: (
                    <>
                      <H
                        args={{
                          name: 'dateAndSource',
                          includeAboutMe: true
                        }}
                      />
                    </>
                  )
                }}
              >
                <H args={{ name: 'shareContent' }} />
                {episodeNumber <= numEpisodesExceptFirstAndLast && (
                  <NextLessonButton halfMargin />
                )}
              </CardWrapper>
              {(episodeNumber === 0 ||
                episodeNumber > numEpisodesExceptFirstAndLast) && (
                <CardWrapper
                  type="meta"
                  isLast
                  title={<H args={{ name: 'testimonialsTitle' }} />}
                >
                  <H args={{ name: 'testimonialsContent' }} />
                  {episodeNumber === 0 && <NextLessonButton halfMargin />}
                </CardWrapper>
              )}
            </div>
          )}
      </>
    </>
  )
}

EpisodeCardList.defaultProps = {
  notFound: false
}

export default EpisodeCardList

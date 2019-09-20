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
import locale from 'src/lib/locale'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'meta' | 'summary'
  title?: React.ReactNode
  preview?: CardProps['preview']
  content?: React.ReactNode
  footer?: CardProps['footer']
}

export type EpisodeCardListType = readonly EpisodeCardType[]

const EpisodeCardList = ({
  cards,
  notFound,
  demo,
  underConstruction
}: {
  cards: EpisodeCardListType
  notFound: boolean
  demo: boolean
  underConstruction?: boolean
}) => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { lastVisibleCardIndex, setLastVisibleCardIndex } = useConditionalCards(
    cards
  )
  return (
    <>
      <EpisodePageInitialRenderWarning />
      <EpisodeHero demo={demo} notFound={notFound} />
      <>
        {underConstruction && (
          <CardWrapper
            type="summary"
            isLast={cards.length === 0}
            title={
              <>
                <H args={{ name: 'pageUnderConstructionTitle' }} />
              </>
            }
          >
            <P>
              <H args={{ name: 'pageUnderConstruction' }} />
            </P>
            <EmojiSeparator emojis={['⚠️', '⚠️', '⚠️']} />
          </CardWrapper>
        )}
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
              footer={
                episodeNumber > 0 && index === 0
                  ? {
                      content: (
                        <>
                          <P
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
                              font-size: ${fontSizes(
                                locale === 'jp' ? 0.85 : 0.8
                              )};
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
            >
              {content}
            </CardWrapper>
          ) : null
        )}
        {shareVisible &&
          !notFound &&
          !demo &&
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
  notFound: false,
  demo: false
}

export default EpisodeCardList

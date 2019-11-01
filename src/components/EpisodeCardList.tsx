/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import CardWrapper from 'src/components/CardWrapper'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import { Bold } from 'src/components/ContentTags'
import EpisodeHero from 'src/components/EpisodeHero'
import { CardProps } from 'src/components/Card'
import useConditionalCards from 'src/hooks/useConditionalCards'
import H from 'src/components/H'
import { P } from 'src/components/ContentTags'
import { shareVisible } from 'src/lib/twitter'
import NextLessonButton from 'src/components/NextLessonButton'
import { spaces, fontSizes } from 'src/lib/theme'
import EpisodeContext from 'src/components/EpisodeContext'
import PrevNextLinks from 'src/components/PrevNextLinks'
import Emoji from 'src/components/Emoji'
import locale from 'src/lib/locale'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'

export interface EpisodeCardType {
  type?: 'yesNoQuiz' | 'sideNote' | 'meta' | 'summary' | 'challengeProblem'
  title?: React.ReactNode
  preview?: CardProps['preview']
  content?: React.ReactNode
  footer?: CardProps['footer']
}

export type EpisodeCardListType = readonly EpisodeCardType[]

const EpisodeCardList = ({
  cards,
  notFound,
  demo
}: {
  cards: EpisodeCardListType
  notFound: boolean
  demo: boolean
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
                            <Bold>
                              <Emoji>🌲</Emoji>{' '}
                              <H args={{ name: 'goToOtherPage' }} />{' '}
                              <Emoji>🌲</Emoji>
                            </Bold>
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
                  locale === 'en'
                    ? true
                    : episodeNumber > 0 &&
                      episodeNumber <= numEpisodesExceptFirstAndLast
                }
                title={<H args={{ name: 'shareTitle' }} />}
                footer={
                  locale === 'jp'
                    ? {
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
                      }
                    : episodeNumber > 0
                    ? {
                        content: (
                          <>
                            <H
                              args={{
                                name: 'aboutMe',
                                hideNextPageButton:
                                  episodeNumber > numEpisodesExceptFirstAndLast
                              }}
                            />
                          </>
                        )
                      }
                    : undefined
                }
              >
                <H args={{ name: 'shareContent' }} />
                {episodeNumber <= numEpisodesExceptFirstAndLast && (
                  <NextLessonButton halfMargin={locale === 'jp'} />
                )}
              </CardWrapper>
              {(episodeNumber === 0 ||
                episodeNumber > numEpisodesExceptFirstAndLast) &&
                locale === 'jp' && (
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

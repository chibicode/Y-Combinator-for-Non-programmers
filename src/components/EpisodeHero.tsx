/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import { InternalLink } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeContext from 'src/components/EpisodeContext'
import episodeEmojis from 'src/lib/episodeEmojis'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  spaces,
  ns
} from 'src/lib/theme'
import H from 'src/components/H'

const commonTitleClasses = css`
  line-height: ${lineHeights(1.1)};
  letter-spacing: ${letterSpacings('title')};
  text-align: center;
`

const EpisodeHero = ({
  demo,
  notFound
}: {
  demo: boolean
  notFound: boolean
}) => {
  const { episodeTitle, episodeNumber } = useContext(EpisodeContext)
  return (
    <header
      css={css`
        padding: ${spaces(0.5)} 0;
      `}
    >
      <>
        {episodeTitle || demo || notFound ? (
          <>
            <h3
              css={[
                commonTitleClasses,
                css`
                  color: ${colors('grey700')};
                  padding: ${spaces(1)} 0 ${spaces(1)};
                  font-size: ${fontSizes(1.2)};
                  ${ns} {
                    font-size: ${fontSizes(1.4)};
                  }
                  margin: 0 auto;
                `
              ]}
            >
              <InternalLink
                href={'/'}
                css={css`
                  text-decoration: none;
                `}
              >
                <H args={{ name: 'titleSplit' }} />
              </InternalLink>
            </h3>
            <h1
              css={[
                commonTitleClasses,
                css`
                  color: ${colors('grey900')};
                  font-size: ${fontSizes(1.6)};
                  ${ns} {
                    font-size: ${fontSizes(2)};
                  }
                  font-weight: ${fontWeights(800)};
                  margin: 0 auto ${spaces(0.5)};
                `
              ]}
            >
              {notFound ? (
                <H args={{ name: 'pageNotFound' }} />
              ) : demo ? (
                <H args={{ name: 'demoTitle' }} />
              ) : (
                episodeTitle
              )}
            </h1>
          </>
        ) : (
          <h1
            css={[
              commonTitleClasses,
              css`
                color: ${colors('grey900')};
                padding-top: ${spaces(0.5)};
                font-size: ${fontSizes(1.6)};
                margin: 0 auto ${spaces(0.5)};
                font-weight: ${fontWeights(800)};

                ${ns} {
                  font-size: ${fontSizes(2.5)};
                  font-weight: ${fontWeights(900)};
                }
              `
            ]}
          >
            <H args={{ name: 'titleSplit' }} />
          </h1>
        )}
      </>
      <EmojiSeparator
        size="lg"
        nodes={(demo
          ? ['🍱', '▶️', '🔲']
          : notFound
          ? ['❓', '😭', '❓']
          : episodeEmojis[episodeNumber as keyof typeof episodeEmojis]
        ).map(emoji =>
          emoji === '🔲' ? (
            <CustomEmoji type="mathBox" />
          ) : (
            <Emoji>{emoji}</Emoji>
          )
        )}
      />
    </header>
  )
}

EpisodeHero.defaultProps = {
  demo: false,
  notFound: false
}

export default EpisodeHero

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { InternalLink } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import { description } from 'src/lib/titles'
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

const commonTitleClasses = css`
  line-height: ${lineHeights(1.1)};
  letter-spacing: ${letterSpacings('title')};
  text-align: center;
`

const EpisodeHero = ({
  mainTitle,
  episodeTitle,
  showDescription,
  emojis
}: {
  mainTitle: React.ReactNode
  episodeTitle?: React.ReactNode
  showDescription?: boolean
  emojis?: string[]
}) => {
  return (
    <header
      css={css`
        padding: ${spaces(0.5)} 0;
      `}
    >
      <>
        {episodeTitle ? (
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
                {mainTitle}
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
              {episodeTitle}
            </h1>
          </>
        ) : (
          <>
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
              {mainTitle}
            </h1>
            {showDescription && (
              <h3
                css={[
                  commonTitleClasses,
                  css`
                    color: ${colors('grey700')};
                    padding-top: ${spaces(0.5)};
                    font-size: ${fontSizes(1)};
                    margin: 0 auto ${spaces(0.5)};
                    font-weight: ${fontWeights(700)};

                    ${ns} {
                      font-size: ${fontSizes(1.6)};
                    }
                  `
                ]}
              >
                {description}
              </h3>
            )}
          </>
        )}
      </>
      {emojis && (
        <EmojiSeparator
          size="lg"
          nodes={emojis.map(emoji =>
            emoji === '🔲' ? (
              <CustomEmoji type="mathBox" />
            ) : (
              <Emoji>{emoji}</Emoji>
            )
          )}
        />
      )}
    </header>
  )
}

export default EpisodeHero

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Link from 'next/link'
import { InternalLink } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeContext from 'src/components/EpisodeContext'
import episodeEmojis from 'src/lib/episodeEmojis'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  spaces
} from 'src/lib/theme'
export const jsxBabelFix = jsx

const commonTitleClasses = css`
  line-height: ${lineHeights(1.1)};
  letter-spacing: ${letterSpacings('title')};
  text-align: center;
`

const EpisodeHero = () => {
  const { lessonTitle, episodeTitle, episodeNumber } = useContext(
    EpisodeContext
  )
  return (
    <>
      <>
        {episodeTitle ? (
          <>
            <h3
              css={[
                commonTitleClasses,
                css`
                  color: ${colors('grey500')};
                  padding-top: ${spaces(1.5)};
                  font-size: ${fontSizes(1.25)};
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
                {lessonTitle}
              </InternalLink>
            </h3>
            <h1
              css={[
                commonTitleClasses,
                css`
                  color: ${colors('grey900')};
                  font-size: ${fontSizes(2)};
                  font-weight: ${fontWeights(800)};
                  margin: 0 auto ${spaces(0.5)};
                `
              ]}
            >
              {episodeTitle}
            </h1>
          </>
        ) : (
          <h1
            css={[
              commonTitleClasses,
              css`
                color: ${colors('grey900')};
                padding-top: ${spaces(2)};
                font-size: ${fontSizes(2)};
                margin: 0 auto ${spaces(0.5)};
                font-weight: ${fontWeights(800)};
              `
            ]}
          >
            {lessonTitle}
          </h1>
        )}
      </>
      <EmojiSeparator size="lg" emojis={episodeEmojis[episodeNumber]} />
    </>
  )
}

export default EpisodeHero

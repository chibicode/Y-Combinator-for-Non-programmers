/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import Link from 'next/link'
import { InternalLink } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodeContext from 'src/components/EpisodeContext'
import episodeEmojis from 'src/lib/episodeEmojis'
import pathHelpers from 'src/lib/pathHelpers'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  spaces
} from 'src/lib/theme'
import Logo from 'src/images/CSmoji-Logo.svgr.svg'
export const jsxBabelFix = jsx

const commonTitleClasses = css`
  line-height: ${lineHeights(1.3)};
  letter-spacing: ${letterSpacings('title')};
  text-align: center;
`

const EpisodeHero = () => {
  const { lessonName, lessonTitle, episodeTitle, episodeNumber } = useContext(
    EpisodeContext
  )
  return (
    <>
      <>
        <div
          css={css`
            text-align: center;
          `}
        >
          <Link href="/" passHref>
            <a
              css={css`
                display: inline-block;
                height: ${fontSizes(2.5)};
              `}
            >
              <Logo />
            </a>
          </Link>
        </div>
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
                href={pathHelpers[lessonName]()}
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
                  line-height: ${lineHeights(1.3)};
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
      <EmojiSeparator
        size="lg"
        emojis={episodeEmojis[lessonName][episodeNumber]}
      />
    </>
  )
}

export default EpisodeHero

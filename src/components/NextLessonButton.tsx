/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Link from 'next/link'
import { useContext } from 'react'
import H from 'src/components/H'
import { remainingText } from 'src/lib/episodeCategories'
import locale from 'src/lib/locale'
import { colors, fontSizes, lineHeights, radii, spaces } from 'src/lib/theme'
import { HighlightBold } from 'src/components/ContentTags'
import EpisodeContext from 'src/components/EpisodeContext'
import GlobalContext from 'src/components/GlobalContext'
import Emoji from 'src/components/Emoji'

const NextLessonButton = ({ halfMargin }: { halfMargin?: boolean }) => {
  const { episodeNumber } = useContext(EpisodeContext)
  const { setEpisodeAsFurthest } = useContext(GlobalContext)
  const nextEpisodeNumber = episodeNumber + 1

  return (
    <div
      css={css`
        text-align: center;
        margin: ${halfMargin ? spaces(1) : spaces(2)} 0
          ${halfMargin ? spaces(1) : spaces(2)};
      `}
    >
      <Link href={`/${nextEpisodeNumber}`} passHref>
        <a
          onClick={() => {
            setEpisodeAsFurthest(nextEpisodeNumber)
          }}
          css={css`
            display: inline-block;
            padding: ${locale === 'jp' ? spaces(0.25) : spaces(0.5)}
              ${spaces(1.5)} ${locale === 'jp' ? spaces(0.5) : spaces(0.75)};
            border-radius: ${radii(0.5)};
            border: 2px solid ${colors('pink600')};
            background: ${colors('pink400')};
            color: #fff;
            text-decoration: none;
            line-height: ${lineHeights(1.3)};
            -webkit-user-select: none;

            &:focus {
              box-shadow: inset 0 0 0 1px ${colors('pink600')};
              outline: none;
            }

            &:hover {
              background: ${colors('pink500')};
            }

            &:active {
              background: ${colors('pink500')};
            }
          `}
        >
          <span
            css={css`
              font-size: ${fontSizes(1.2)};
              font-weight: bold;
              display: block;
            `}
          >
            <H args={{ name: 'nextButtonNextPagePrimaryText' }} />
          </span>
          <span
            css={css`
              font-size: ${fontSizes(0.85)};
              display: block;
            `}
          >
            <H args={{ name: 'nextButtonSecondaryText', nextEpisodeNumber }} />{' '}
            <Emoji>🙂</Emoji>
          </span>
        </a>
      </Link>
      {nextEpisodeNumber > 1 && (
        <div
          css={css`
            font-size: ${fontSizes(0.85)};
            margin-top: ${spaces(0.75)};
            color: ${colors('grey700')};
          `}
        >
          <HighlightBold>{remainingText(nextEpisodeNumber)}</HighlightBold>
        </div>
      )}
    </div>
  )
}

export default NextLessonButton

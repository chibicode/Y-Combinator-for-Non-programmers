/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { numEpisodes } from 'src/lib/episodeCategories'
import { lessonTitle } from 'src/lib/titles'
import { colors, spaces } from 'src/lib/theme'
import { InternalLink } from 'src/components/ContentTags/Links'
import H from 'src/components/H'

const Toc = () => (
  <ul
    css={css`
      margin-bottom: ${spaces(1)};
      list-style-type: none;
      padding: 0;
    `}
  >
    <li
      css={css`
        font-weight: bold;
        margin-bottom: ${spaces(0.25)};
      `}
    >
      <InternalLink
        href="/"
        css={css`
          text-decoration: none;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        <span
          css={css`
            color: ${colors('grey600')};
          `}
        >
          <H args={{ name: 'introductionPrefix' }} />:
        </span>{' '}
        {lessonTitle}
      </InternalLink>
    </li>
    {[...Array(numEpisodes).keys()].map(i => {
      const episodeNumber = i + 1
      return (
        <li
          key={i}
          css={css`
            font-weight: bold;
            margin-bottom: ${spaces(0.25)};
          `}
        >
          <InternalLink
            href={`/${episodeNumber}`}
            css={css`
              text-decoration: none;
              &:hover {
                text-decoration: none;
              }
            `}
          >
            <H
              args={{ name: 'titleWithPrefixColored' }}
              episodeNumberOverrides={episodeNumber}
            />
          </InternalLink>
        </li>
      )
    })}
  </ul>
)

export default Toc

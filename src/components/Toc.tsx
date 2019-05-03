/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { numEpisodes } from 'src/lib/episodeCategories'
import { lessonTitle } from 'src/lib/titles'
import { colors, spaces } from 'src/lib/theme'
import { InternalLink } from 'src/components/ContentTags/Links'
import H from 'src/components/H'
import { episodeTitles, episodePrefixes } from 'src/lib/titles'

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
          {episodePrefixes.intro}
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
    <li
      css={css`
        font-weight: bold;
        margin-bottom: ${spaces(0.25)};
      `}
    >
      <InternalLink
        href={`/${numEpisodes + 1}`}
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
          {episodePrefixes.epilogue}
        </span>{' '}
        {episodeTitles[numEpisodes as keyof typeof episodeTitles]}
      </InternalLink>
    </li>
  </ul>
)

export default Toc

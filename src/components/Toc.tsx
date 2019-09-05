/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'
import { lessonTitle } from 'src/lib/titles'
import { spaces, colors } from 'src/lib/theme'
import { InternalLink } from 'src/components/ContentTags/Links'
import H from 'src/components/H'
import { episodeTitles } from 'src/lib/titles'

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
            background: ${colors('white')};
          }
        `}
      >
        <H
          args={{ name: 'titlePrefixColored', addColon: true }}
          episodeNumberOverrides={0}
        />{' '}
        {lessonTitle}
      </InternalLink>
    </li>
    {[...Array(numEpisodesExceptFirstAndLast).keys()].map(i => {
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
                background: ${colors('white')};
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
        href={`/${numEpisodesExceptFirstAndLast + 1}`}
        css={css`
          text-decoration: none;
          &:hover {
            text-decoration: none;
            background: ${colors('white')};
          }
        `}
      >
        <H
          args={{ name: 'titlePrefixColored', addColon: true }}
          episodeNumberOverrides={numEpisodesExceptFirstAndLast + 1}
        />{' '}
        {
          episodeTitles[
            (numEpisodesExceptFirstAndLast + 1) as keyof typeof episodeTitles
          ]
        }
      </InternalLink>
    </li>
  </ul>
)

export default Toc

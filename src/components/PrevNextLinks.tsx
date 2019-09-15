/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useContext } from 'react'
import { InternalLink, InlineHeader } from 'src/components/ContentTags'
import EpisodeContext from 'src/components/EpisodeContext'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'
import { colors } from 'src/lib/theme'
import H from 'src/components/H'

const PrevNextLinks = () => {
  const episodeContext = useContext(EpisodeContext)
  const episodeNumber = episodeContext.episodeNumber
  return (
    <>
      <H args={{ name: 'prevNextLinkPrevious' }} />:{' '}
      <InternalLink
        href={`/${episodeNumber - 1}`}
        css={css`
          background: ${colors('yellow100')};
          display: inline-block;
          text-decoration: none;
          &:hover {
            text-decoration: none;
          }
        `}
      >
        <InlineHeader>
          <H
            args={{ name: 'titlePrefixColored' }}
            episodeNumberOverrides={episodeNumber - 1}
          />
        </InlineHeader>
      </InternalLink>
      {episodeNumber <= numEpisodesExceptFirstAndLast && (
        <>
          {' '}
          / <H args={{ name: 'prevNextLinkNext' }} />:{' '}
          <InternalLink
            href={`/${episodeNumber + 1}`}
            css={css`
              text-decoration: none;
              display: inline-block;
              background: ${colors('yellow100')};
              &:hover {
                text-decoration: none;
              }
            `}
          >
            <InlineHeader>
              <H
                args={{ name: 'titlePrefixColored' }}
                episodeNumberOverrides={episodeNumber + 1}
              />
            </InlineHeader>
          </InternalLink>
        </>
      )}
    </>
  )
}

export default PrevNextLinks

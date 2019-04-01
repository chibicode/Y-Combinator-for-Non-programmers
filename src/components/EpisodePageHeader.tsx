/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { InternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import { numEpisodes } from 'src/lib/episodeCategories'
import { colors, fontSizes, spaces, radii } from 'src/lib/theme'
import { commonLinkClass } from 'src/components/ContentTags/Links'

export interface EpisodePageProps {
  episodeNumber: number
  showModal: () => void
}

const navigationLinkClasses = css`
  text-decoration: none;
  color: ${colors('grey600')};
  font-weight: bold;
  font-size: ${fontSizes(0.75)};
  background: none;
  border: none;
  border-radius: ${radii(0.5)};
  padding: ${spaces(0.25)} ${spaces(0.5)};
  margin: ${spaces('-0.5')};
  cursor: pointer;
  display: inline-block;
`

const EpisodePageHeader = ({ episodeNumber, showModal }: EpisodePageProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${spaces(0.5)} 0;
        margin: 0 0 ${spaces(0.5)};
      `}
    >
      <div
        css={css`
          width: 35%;
          text-align: left;
        `}
      >
        {episodeNumber >= 1 && (
          <InternalLink
            href={`/${episodeNumber === 1 ? '' : episodeNumber - 1}`}
            css={[navigationLinkClasses]}
          >
            «{' '}
            <H
              args={{ name: 'titlePrefixColored' }}
              episodeNumberOverrides={episodeNumber - 1}
            />
          </InternalLink>
        )}
      </div>
      <div
        css={css`
          width: 27%;
          text-align: center;
        `}
      >
        <button
          type="button"
          onClick={showModal}
          css={[
            navigationLinkClasses,
            commonLinkClass,
            css`
              &:focus {
                outline: none;
              }
            `
          ]}
        >
          <H args={{ name: 'indexPageLink' }} />
        </button>
      </div>
      <div
        css={css`
          width: 35%;
          text-align: right;
        `}
      >
        {episodeNumber < numEpisodes && (
          <InternalLink
            href={`/${episodeNumber + 1}`}
            css={navigationLinkClasses}
          >
            <H
              args={{ name: 'titlePrefixColored' }}
              episodeNumberOverrides={episodeNumber + 1}
            />{' '}
            »
          </InternalLink>
        )}
      </div>
    </div>
  )
}

export default EpisodePageHeader

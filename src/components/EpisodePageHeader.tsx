/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { InternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import { numEpisodes } from 'src/lib/episodeCategories'
import { spaces } from 'src/lib/theme'
import { commonLinkClass } from 'src/components/ContentTags/Links'
import EpisodePageNavbar, {
  navigationLinkClasses
} from 'src/components/EpisodePageNavbar'

export interface EpisodePageHeaderProps {
  episodeNumber: number
  showModal: () => void
}

const EpisodePageHeader = ({
  episodeNumber,
  showModal
}: EpisodePageHeaderProps) => {
  return (
    <EpisodePageNavbar
      css={css`
        margin: 0 0 ${spaces(0.5)};
      `}
      leftContent={
        episodeNumber >= 1 && (
          <InternalLink
            href={`/${episodeNumber === 1 ? '' : episodeNumber - 1}`}
            css={navigationLinkClasses}
          >
            «{' '}
            <H
              args={{ name: 'titlePrefixColored' }}
              episodeNumberOverrides={episodeNumber - 1}
            />
          </InternalLink>
        )
      }
      centerContent={
        <button
          type="button"
          onClick={showModal}
          css={[
            commonLinkClass,
            navigationLinkClasses,
            css`
              &:focus {
                outline: none;
              }
            `
          ]}
        >
          <H args={{ name: 'indexPageLink' }} />
        </button>
      }
      rightContent={
        episodeNumber < numEpisodes && (
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
        )
      }
    />
  )
}

export default EpisodePageHeader

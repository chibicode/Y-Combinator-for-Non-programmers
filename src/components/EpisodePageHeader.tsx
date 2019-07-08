/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { InternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import { numEpisodesExceptFirstAndLast } from 'src/lib/episodeCategories'
import { colors, spaces } from 'src/lib/theme'
import Container from 'src/components/Container'
import { commonLinkClass } from 'src/components/ContentTags/Links'
import EpisodePageNavbar, {
  navigationLinkClasses
} from 'src/components/EpisodePageNavbar'

export interface EpisodePageHeaderProps {
  episodeNumber: number
  showModal: () => void
  isBottom?: boolean
}

const EpisodePageHeader = ({
  episodeNumber,
  showModal,
  isBottom
}: EpisodePageHeaderProps) => {
  return (
    <div
      css={
        isBottom
          ? css`
              margin: ${spaces(4)} 0 ${spaces(2)};
            `
          : css`
              margin: 0 0 ${spaces(2)};
              background: ${colors('grey100')};
            `
      }
    >
      <Container size="sm">
        <EpisodePageNavbar
          leftContent={
            episodeNumber >= 1 && (
              <InternalLink
                href={`/${episodeNumber === 1 ? '' : episodeNumber - 1}`}
                css={navigationLinkClasses(isBottom)}
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
                navigationLinkClasses(isBottom),
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
            episodeNumber < numEpisodesExceptFirstAndLast + 1 && (
              <InternalLink
                href={`/${episodeNumber + 1}`}
                css={navigationLinkClasses(isBottom)}
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
      </Container>
    </div>
  )
}

export default EpisodePageHeader

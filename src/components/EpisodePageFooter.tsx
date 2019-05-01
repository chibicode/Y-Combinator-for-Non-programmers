/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ExternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import { spaces, colors } from 'src/lib/theme'
import EpisodePageNavbar, {
  navigationLinkClasses
} from 'src/components/EpisodePageNavbar'
import locale from 'src/lib/locale'
import { githubRepo } from 'src/lib/meta'

const linkClasses = [
  navigationLinkClasses,
  css`
    font-weight: normal;
    color: ${colors('grey400')};

    &:hover,
    &:active {
      color: ${colors('grey600')};
    }
  `
]

const EpisodePageFooter = () => {
  return (
    <EpisodePageNavbar
      cssOverrides={css`
        margin: ${spaces(4)} 0 ${spaces(1)};
      `}
      leftContent={
        <ExternalLink
          href={`${githubRepo}/tree/master/docs/privacy-policy${
            locale === 'jp' ? '-jp' : ''
          }.md`}
          css={linkClasses}
        >
          <H args={{ name: 'privacyPolicy' }} />
        </ExternalLink>
      }
      rightContent={
        <ExternalLink
          href={`${githubRepo}/tree/master/README${
            locale === 'jp' ? '-jp' : ''
          }.md`}
          css={linkClasses}
        >
          <H args={{ name: 'aboutThisSite' }} />
        </ExternalLink>
      }
    />
  )
}

export default EpisodePageFooter

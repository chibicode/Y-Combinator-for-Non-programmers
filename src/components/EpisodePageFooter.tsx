/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ExternalLink } from 'src/components/ContentTags'
import H from 'src/components/H'
import Emoji from 'src/components/Emoji'
import { spaces, colors, fontSizes } from 'src/lib/theme'
import locale from 'src/lib/locale'
import { githubRepo } from 'src/lib/meta'

const linkClasses = css`
  text-decoration: none;
  color: ${colors('grey600')};

  &:hover,
  &:active {
    background: none;
    color: ${colors('grey700')};
  }
`

const EpisodePageFooter = () => {
  return (
    <div
      css={css`
        margin: ${spaces(2)} 0 0;
        background: ${colors('grey100')};
        text-align: center;
        padding: ${spaces(1)} 0;
        color: ${colors('grey600')};
        font-size: ${fontSizes(0.7)};
      `}
    >
      {locale === 'jp' && (
        <>
          <ExternalLink
            href={`${githubRepo}/tree/master/docs/privacy-policy-jp.md`}
            css={linkClasses}
          >
            <H args={{ name: 'privacyPolicy' }} />
          </ExternalLink>{' '}
          &middot;{' '}
        </>
      )}
      <ExternalLink
        href={`${githubRepo}/tree/master/README${
          locale === 'jp' ? '-jp' : ''
        }.md`}
        css={linkClasses}
      >
        <H args={{ name: 'aboutThisSite' }} />
      </ExternalLink>
      &middot;{' '}
      <ExternalLink href="https://github.com/twitter/twemoji" css={linkClasses}>
        Twemoji
      </ExternalLink>{' '}
      <Emoji>🧙‍♀️</Emoji>
    </div>
  )
}

export default EpisodePageFooter

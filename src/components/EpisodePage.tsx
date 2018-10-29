import { css, cx } from 'emotion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import { InternalLink } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import Page from 'src/components/Page'
import episodeEmojis from 'src/lib/episodeEmojis'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefix'
import h from 'src/lib/h'
import numEpisodes from 'src/lib/numEpisodes'
import pathHelpers from 'src/lib/pathHelpers'
import {
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  ns,
  spaces
} from 'src/lib/theme'
// https://github.com/airbnb/babel-plugin-inline-react-svg/pull/17
import Logo from '../images/Hoshiai-Logo.svg'

export interface EpisodePageProps {
  lessonName: keyof typeof pathHelpers
  lessonTitle: string
  episodeTitle?: string
  episodeNumber?: number
  contentName: ContentProps['name']
}

const commonTitleClasses = css`
  line-height: ${lineHeights(1.3)};
  letter-spacing: ${letterSpacings('title')};
  text-align: center;
`

const navigationLinkClasses = css`
  text-decoration: none;
  color: ${colors('indigo200')};
  font-size: ${fontSizes(0.7)};
`

const EpisodePage: React.SFC<EpisodePageProps> = ({
  lessonTitle,
  lessonName,
  episodeTitle,
  episodeNumber,
  contentName
}) => (
  <Page>
    <Head>
      <title key="title">
        {lessonTitle}
        {episodeTitle && `- ${episodeTitle}`} | Hoshiai
      </title>
    </Head>
    <Container size="sm">
      <div
        className={css`
          display: flex;
          align-items: center;
          padding: ${spaces(0.5)} ${spaces(0.5)} ${spaces(0.5)};
          border-bottom: 1px solid ${colors('indigo50')};
          margin: 0 ${spaces('-1.25')} ${spaces(0.5)} ${spaces('-1.25')};
        `}
      >
        <div
          className={css`
            width: 30%;
            text-align: left;
          `}
        >
          {episodeNumber &&
            episodeNumber >= 1 && (
              <InternalLink
                href={pathHelpers[lessonName](
                  episodeNumber === 1 ? undefined : episodeNumber - 1
                )}
                className={cx(navigationLinkClasses)}
              >
                ←{' '}
                {episodeNumber === 1
                  ? h('introductionPageLink')
                  : episodeTitlePrefix(episodeNumber - 1)}
              </InternalLink>
            )}
        </div>
        <div
          className={css`
            width: 40%;
            text-align: center;
          `}
        >
          <InternalLink
            href={pathHelpers[lessonName]('toc')}
            className={navigationLinkClasses}
          >
            {h('indexPageLink')}
          </InternalLink>{' '}
        </div>
        <div
          className={css`
            width: 30%;
            text-align: right;
          `}
        >
          {(episodeNumber || 0) < numEpisodes(lessonName) && (
            <InternalLink
              href={pathHelpers[lessonName]((episodeNumber || 0) + 1)}
              className={navigationLinkClasses}
            >
              {episodeTitlePrefix((episodeNumber || 0) + 1)} →
            </InternalLink>
          )}
        </div>
      </div>
    </Container>
    <Container size={episodeNumber ? 'sm' : 'lg'}>
      <div
        className={css`
          padding-top: ${spaces(1.5)};
        `}
      >
        <div
          className={css`
            text-align: center;
          `}
        >
          <Link href="/">
            <a
              className={css`
                display: inline-block;
                height: ${fontSizes(1.75)};
              `}
            >
              <Logo />
            </a>
          </Link>
        </div>

        {episodeTitle ? (
          <>
            <h3
              className={cx(
                commonTitleClasses,
                css`
                  color: ${colors('grey500')};
                  padding-top: ${spaces(1.5)};
                  font-size: ${fontSizes(1.25)};
                  margin: 0 auto;
                `
              )}
            >
              <InternalLink
                href={pathHelpers[lessonName]()}
                className={css`
                  text-decoration: none;
                `}
              >
                {lessonTitle}
              </InternalLink>
            </h3>
            <h1
              className={cx(
                commonTitleClasses,
                css`
                  color: ${colors('grey900')};
                  line-height: ${lineHeights(1.3)};
                  font-size: ${fontSizes(2)};
                  font-weight: ${fontWeights(800)};
                  margin: 0 auto ${spaces(0.5)};
                `
              )}
            >
              {episodeTitle}
            </h1>
          </>
        ) : (
          <h1
            className={cx(
              commonTitleClasses,
              css`
                color: ${colors('grey900')};
                padding-top: ${spaces(2)};
                font-size: ${fontSizes(2)};
                margin: 0 auto ${spaces(0.5)};
                font-weight: ${fontWeights(800)};
                ${ns(css`
                  font-size: ${fontSizes(2.5)};
                `)};
              `
            )}
          >
            {lessonTitle}
          </h1>
        )}
      </div>
    </Container>
    <Container size="sm">
      {episodeNumber ? (
        <EmojiSeparator
          size="lg"
          emojis={episodeEmojis[lessonName][episodeNumber]}
        />
      ) : (
        <EmojiSeparator size="lg" emojis={episodeEmojis[lessonName].index} />
      )}
      {episodeNumber && (
        <EpisodePageInitialRenderWarning lessonName={lessonName} />
      )}
      <Content name={contentName} />
    </Container>
  </Page>
)

export default EpisodePage

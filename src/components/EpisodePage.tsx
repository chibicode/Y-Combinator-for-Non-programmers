import { css, cx } from 'emotion'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EpisodePageInitialRenderWarning from 'src/components/EpisodePageInitialRenderWarning'
import Page from 'src/components/Page'
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

export interface EpisodePageProps {
  lessonName: keyof typeof pathHelpers
  lessonTitle: string
  episodeTitle?: string
  episodeNumber?: number
  emojis: string[]
  contentName: ContentProps['name']
}

const commonTitleClasses = css`
  line-height: ${lineHeights(1.3)};
  font-weight: ${fontWeights(800)};
  letter-spacing: ${letterSpacings('title')};
  text-align: center;
`

const EpisodePage: React.SFC<EpisodePageProps> = ({
  lessonTitle,
  lessonName,
  episodeTitle,
  episodeNumber,
  emojis,
  contentName
}) => (
  <Page>
    <Head>
      <title key="title">
        {lessonTitle}
        {episodeTitle && `: ${episodeTitle}`} | Hoshiai
      </title>
    </Head>
    <Container size="lg">
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
            <a>
              <img
                src="/static/images/logo-svg-text-indigo.svg"
                alt="Hoshiai"
                className={css`
                  height: 2em;
                `}
              />
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
                  padding-top: ${spaces(2)};
                  font-size: ${fontSizes(1.25)};
                  margin: 0 auto;
                `
              )}
            >
              {lessonTitle}
            </h3>
            <h1
              className={cx(
                commonTitleClasses,
                css`
                  color: ${colors('grey900')};
                  line-height: ${lineHeights(1.3)};
                  font-size: ${fontSizes(2)};
                  margin: 0 auto ${spaces(1.25)};
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
                margin: 0 auto ${spaces(1.25)};
                ${ns(css`
                  font-size: ${fontSizes(2.5)};
                `)};
              `
            )}
          >
            {lessonTitle}
          </h1>
        )}

        <EmojiSeparator size="lg" emojis={emojis} />
      </div>
    </Container>
    <Container size="sm">
      {episodeNumber && (
        <EpisodePageInitialRenderWarning lessonName={lessonName} />
      )}
      <Content name={contentName} />
    </Container>
  </Page>
)

export default EpisodePage

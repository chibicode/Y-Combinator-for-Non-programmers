/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import Head from 'next/head'
import React from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import { InternalLink } from 'src/components/ContentTags'
import EpisodeContext from 'src/components/EpisodeContext'
import Page from 'src/components/Page'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import h from 'src/lib/h'
import numEpisodes from 'src/lib/numEpisodes'
import { colors, fontSizes, spaces } from 'src/lib/theme'
export const jsxBabelFix = jsx

export interface EpisodePageProps {
  lessonTitle: string
  episodeTitle?: React.ReactNode
  episodeTitleString?: React.ReactNode
  episodeNumber: number
  contentName: ContentProps['name']
}

const navigationLinkClasses = css`
  text-decoration: none;
  color: ${colors('indigo500')};
  font-weight: bold;
  font-size: ${fontSizes(0.85)};
`

const EpisodePage = ({
  lessonTitle,
  episodeTitle,
  episodeTitleString,
  episodeNumber,
  contentName
}: EpisodePageProps) => (
  <Page>
    <Head>
      <title key="title">
        {lessonTitle}
        {episodeTitleString && ` | ${episodeTitleString}`}
      </title>
    </Head>
    <Global
      styles={css`
        html,
        body {
          background-color: ${colors('indigo100')};
        }
      `}
    />
    <Container size="sm">
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: ${spaces(0.5)} ${spaces(0.5)} ${spaces(0.5)};
          margin: 0 ${spaces('-0.5')} ${spaces(0.5)} ${spaces('-0.5')};
        `}
      >
        <div
          css={css`
            width: 32%;
            text-align: left;
          `}
        >
          {episodeNumber >= 1 && (
            <InternalLink
              href={`/${episodeNumber === 1 ? '' : episodeNumber - 1}`}
              css={navigationLinkClasses}
            >
              ←{' '}
              {episodeNumber === 1
                ? h('introductionPageLink')
                : episodeTitlePrefix(episodeNumber - 1, true).prefix}
            </InternalLink>
          )}
        </div>
        <div
          css={css`
            width: 36%;
            text-align: center;
          `}
        >
          {/* <InternalLink
            href={'/toc'}
            css={navigationLinkClasses}
          >
            {h('indexPageLink')}
          </InternalLink> */}
        </div>
        <div
          css={css`
            width: 32%;
            text-align: right;
          `}
        >
          {(episodeNumber || 0) < numEpisodes && (
            <InternalLink
              href={`/${(episodeNumber || 0) + 1}`}
              css={navigationLinkClasses}
            >
              {episodeTitlePrefix((episodeNumber || 0) + 1, true).prefix} →
            </InternalLink>
          )}
        </div>
      </div>
      <EpisodeContext.Provider
        value={{
          lessonTitle,
          episodeTitle,
          episodeNumber
        }}
      >
        <Content name={contentName} />
      </EpisodeContext.Provider>
    </Container>
  </Page>
)

export default EpisodePage

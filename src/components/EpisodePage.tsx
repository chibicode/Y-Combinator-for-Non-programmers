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
import pathHelpers from 'src/lib/pathHelpers'
import { colors, fontSizes, spaces } from 'src/lib/theme'
export const jsxBabelFix = jsx

export interface EpisodePageProps {
  lessonName: keyof typeof pathHelpers
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
  lessonName,
  episodeTitle,
  episodeTitleString,
  episodeNumber,
  contentName
}: EpisodePageProps) => (
  <Page>
    <Head>
      <title key="title">
        {lessonTitle}
        {episodeTitleString && ` | ${episodeTitleString}`} | CSmoji
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
              href={pathHelpers[lessonName](
                episodeNumber === 1 ? undefined : episodeNumber - 1
              )}
              css={navigationLinkClasses}
            >
              ←{' '}
              {episodeNumber === 1
                ? h('introductionPageLink')
                : episodeTitlePrefix(episodeNumber - 1, lessonName, true)
                    .prefix}
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
            href={pathHelpers[lessonName]('toc')}
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
          {(episodeNumber || 0) < numEpisodes(lessonName) && (
            <InternalLink
              href={pathHelpers[lessonName]((episodeNumber || 0) + 1)}
              css={navigationLinkClasses}
            >
              {
                episodeTitlePrefix((episodeNumber || 0) + 1, lessonName, true)
                  .prefix
              }{' '}
              →
            </InternalLink>
          )}
        </div>
      </div>
      <EpisodeContext.Provider
        value={{
          lessonName,
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

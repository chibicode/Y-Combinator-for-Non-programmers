/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Head from 'next/head'
import React, { useState } from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import { InternalLink } from 'src/components/ContentTags'
import EpisodeContext from 'src/components/EpisodeContext'
import Page from 'src/components/Page'
import episodeTitlePrefixAndColor from 'src/lib/episodeTitlePrefixAndColor'
import H from 'src/components/H'
import { numEpisodes } from 'src/lib/numEpisodes'
import { colors, fontSizes, spaces } from 'src/lib/theme'
import TocModal from 'src/components/TocModal'
import { commonLinkClass } from 'src/components/ContentTags/Links'

export interface EpisodePageProps {
  lessonTitle: string
  episodeTitle?: React.ReactNode
  episodeTitleString?: React.ReactNode
  episodeNumber: number
  contentName: ContentProps['name']
}

const navigationLinkClasses = css`
  text-decoration: none;
  color: ${colors('grey600')};
  font-weight: bold;
  font-size: ${fontSizes(0.75)};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`

const EpisodePage = ({
  lessonTitle,
  episodeTitle,
  episodeTitleString,
  episodeNumber,
  contentName
}: EpisodePageProps) => {
  const title = `${lessonTitle}${
    episodeTitleString ? ` | ${episodeTitleString}` : ''
  }`
  const [modalVisible, setModalVisible] = useState(false)
  const hideModal = () => setModalVisible(false)
  const showModal = () => setModalVisible(true)
  return (
    <Page>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      {modalVisible && <TocModal hideModal={hideModal} />}
      <Container size="sm">
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
                css={[
                  navigationLinkClasses,
                  css`
                    color: ${episodeTitlePrefixAndColor(episodeNumber - 1, true)
                      .color};
                  `
                ]}
              >
                «{' '}
                {episodeNumber === 1 ? (
                  <H args={{ name: 'introductionPrefix' }} />
                ) : (
                  episodeTitlePrefixAndColor(episodeNumber - 1, true).prefix
                )}
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
            {(episodeNumber || 0) < numEpisodes && (
              <InternalLink
                href={`/${(episodeNumber || 0) + 1}`}
                css={navigationLinkClasses}
              >
                {
                  episodeTitlePrefixAndColor((episodeNumber || 0) + 1, true)
                    .prefix
                }{' '}
                »
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
}

export default EpisodePage

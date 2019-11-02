import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import EpisodePageHeader from 'src/components/EpisodePageHeader'
import EpisodePageFooter from 'src/components/EpisodePageFooter'
import EpisodeContext from 'src/components/EpisodeContext'
import Page from 'src/components/Page'
import TocModal from 'src/components/TocModal'
import episodeEmojis from 'src/lib/episodeEmojis'
import { ogUrl } from 'src/lib/meta'
import locale from 'src/lib/locale'
import { description } from 'src/lib/titles'
import { dateSchemaString } from 'src/lib/date'
import { ogImageUrl } from 'src/lib/meta'

export interface EpisodePageProps {
  lessonTitle: string
  episodeTitle?: React.ReactNode
  episodeTitleString?: React.ReactNode
  episodeNumber: number
  contentName: ContentProps['name']
}

const EpisodePage = ({
  lessonTitle,
  episodeTitle,
  episodeTitleString,
  episodeNumber,
  contentName
}: EpisodePageProps) => {
  const title = `${
    episodeEmojis[episodeNumber as keyof typeof episodeEmojis][1]
  }${locale === 'jp' ? '' : ' '}${lessonTitle}${
    episodeTitleString
      ? ` ${episodeEmojis[episodeNumber as keyof typeof episodeEmojis][0]} ${episodeTitleString} ${episodeEmojis[episodeNumber as keyof typeof episodeEmojis][2]}`
      : ''
  }`
  const [modalVisible, setModalVisible] = useState(false)
  const hideModal = () => setModalVisible(false)
  const showModal = () => setModalVisible(true)
  const url = ogUrl(episodeNumber)
  return (
    <Page>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={lessonTitle} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="article:published_time" content={dateSchemaString} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>
      {modalVisible && <TocModal hideModal={hideModal} />}
      <EpisodePageHeader showModal={showModal} episodeNumber={episodeNumber} />
      <Container size="sm">
        <EpisodeContext.Provider
          value={{
            lessonTitle,
            episodeTitle,
            episodeNumber,
            showModal
          }}
        >
          <Content name={contentName} />
        </EpisodeContext.Provider>
      </Container>
      <EpisodePageHeader
        showModal={showModal}
        episodeNumber={episodeNumber}
        isBottom
      />
      <EpisodePageFooter />
    </Page>
  )
}

export default EpisodePage

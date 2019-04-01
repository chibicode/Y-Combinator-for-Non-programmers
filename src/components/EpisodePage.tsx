import Head from 'next/head'
import React, { useState } from 'react'
import Container from 'src/components/Container'
import Content, { ContentProps } from 'src/components/Content'
import EpisodePageHeader from 'src/components/EpisodePageHeader'
import EpisodeContext from 'src/components/EpisodeContext'
import Page from 'src/components/Page'
import TocModal from 'src/components/TocModal'

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
        <EpisodePageHeader
          showModal={showModal}
          episodeNumber={episodeNumber}
        />
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

import React from 'react'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import { lessonTitle, episodeTitleWithPrefix } from 'src/lib/titles'
import GlobalContextSetter from 'src/components/GlobalContextSetter'
import H from 'src/components/H'

interface EpisodePageWrapperProps {
  episodeNumber: number
  notFound: boolean
  demo: boolean
}

const EpisodePageWrapper = ({
  episodeNumber,
  notFound,
  demo
}: EpisodePageWrapperProps) => (
  <GlobalContextSetter episodeNumber={episodeNumber}>
    <EpisodePage
      lessonTitle={lessonTitle}
      notFound={notFound}
      episodeTitleString={
        episodeNumber > 0 ? episodeTitleWithPrefix(episodeNumber) : undefined
      }
      episodeTitle={
        episodeNumber > 0 ? (
          <H args={{ name: 'titleWithPrefixColored' }} />
        ) : (
          undefined
        )
      }
      episodeNumber={episodeNumber}
      contentName={`${episodeNumber}` as EpisodePageProps['contentName']}
      demo={demo}
    />
  </GlobalContextSetter>
)

EpisodePageWrapper.defaultProps = {
  notFound: false,
  demo: false
}

export default EpisodePageWrapper

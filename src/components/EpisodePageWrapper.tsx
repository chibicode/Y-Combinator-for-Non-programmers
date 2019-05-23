import React from 'react'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import { lessonTitle, episodeTitleWithPrefix } from 'src/lib/titles'
import GlobalContextSetter from 'src/components/GlobalContextSetter'
import H from 'src/components/H'

interface EpisodePageWrapperProps {
  episodeNumber: number
  notFound: boolean
}

const EpisodePageWrapper = ({
  episodeNumber,
  notFound
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
    />
  </GlobalContextSetter>
)

EpisodePageWrapper.defaultProps = {
  notFound: false
}

export default EpisodePageWrapper

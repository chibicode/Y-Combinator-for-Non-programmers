/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import {
  lessonTitle,
  episodeTitles,
  episodeTitleWithPrefix
} from 'src/lib/titles'
import GlobalContextSetter from 'src/components/GlobalContextSetter'

interface EpisodePageWrapperProps {
  episodeNumber: number
}

const EpisodePageWrapper = ({ episodeNumber }: EpisodePageWrapperProps) => (
  <GlobalContextSetter episodeNumber={episodeNumber}>
    <EpisodePage
      lessonTitle={lessonTitle}
      episodeTitleString={
        episodeNumber > 0 ? episodeTitleWithPrefix(episodeNumber) : undefined
      }
      episodeTitle={
        episodeNumber > 0 ? (
          <>
            <span
              css={css`
                color: ${episodeTitlePrefix(episodeNumber).color};
              `}
            >
              {episodeTitlePrefix(episodeNumber).prefix}:{' '}
            </span>
            {episodeTitles[episodeNumber as keyof typeof episodeTitles]}
          </>
        ) : (
          undefined
        )
      }
      episodeNumber={episodeNumber}
      contentName={`${episodeNumber}` as EpisodePageProps['contentName']}
    />
  </GlobalContextSetter>
)

export default EpisodePageWrapper

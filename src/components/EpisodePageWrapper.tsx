/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import t, { allTitles } from 'src/lib/titles'
import GlobalContextSetter from 'src/components/GlobalContextSetter'
export const jsxBabelFix = jsx

interface EpisodePageWrapperProps {
  episodeNumber: number
}

const EpisodePageWrapper = ({ episodeNumber }: EpisodePageWrapperProps) => (
  <GlobalContextSetter episodeNumber={episodeNumber}>
    <EpisodePage
      lessonTitle={t('title')}
      episodeTitleString={
        episodeNumber > 0
          ? `${episodeTitlePrefix(episodeNumber).prefix}: ${t(
              `episode${episodeNumber}` as keyof typeof allTitles
            )}`
          : undefined
      }
      episodeTitle={
        episodeNumber > 0 ? (
          <>
            {episodeTitlePrefix(episodeNumber).prefix}:{' '}
            <span
              css={css`
                color: ${episodeTitlePrefix(episodeNumber).color};
              `}
            >
              {t(`episode${episodeNumber}` as keyof typeof allTitles)}
            </span>
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

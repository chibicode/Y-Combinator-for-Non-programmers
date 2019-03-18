/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTitles } from 'src/lib/titles'
import GlobalContextSetter from 'src/components/GlobalContextSetter'
export const jsxBabelFix = jsx

interface EpisodePageWrapperProps {
  episodeNumber: number
  lessonName: keyof typeof pathHelpers
}

const EpisodePageWrapper = ({
  lessonName,
  episodeNumber
}: EpisodePageWrapperProps) => (
  <GlobalContextSetter {...{ lessonName, episodeNumber }}>
    <EpisodePage
      lessonName={lessonName}
      lessonTitle={t(`${lessonName}Title` as keyof typeof allTitles)}
      episodeTitleString={
        episodeNumber > 0
          ? `${episodeTitlePrefix(episodeNumber, lessonName).prefix}: ${t(
              `${lessonName}Episode${episodeNumber}` as keyof typeof allTitles
            )}`
          : undefined
      }
      episodeTitle={
        episodeNumber > 0 ? (
          <>
            {episodeTitlePrefix(episodeNumber, lessonName).prefix}:{' '}
            <span
              css={css`
                color: ${episodeTitlePrefix(episodeNumber, lessonName).color};
              `}
            >
              {t(
                `${lessonName}Episode${episodeNumber}` as keyof typeof allTitles
              )}
            </span>
          </>
        ) : (
          undefined
        )
      }
      episodeNumber={episodeNumber}
      contentName={
        `${lessonName}/${episodeNumber}` as EpisodePageProps['contentName']
      }
    />
  </GlobalContextSetter>
)

export default EpisodePageWrapper

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefixAndColor'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTitles } from 'src/lib/titles'
export const jsxBabelFix = jsx

interface EpisodePageWrapperProps {
  episodeNumber?: number
  episodeName?: string
  lessonName: keyof typeof pathHelpers
}

const EpisodePageWrapper = ({
  lessonName,
  episodeNumber
}: EpisodePageWrapperProps) => (
  <EpisodePage
    lessonName={lessonName}
    lessonTitle={t(`${lessonName}Title` as keyof typeof allTitles)}
    episodeTitleString={
      episodeNumber
        ? `${episodeTitlePrefix(episodeNumber, lessonName).prefix}: ${t(
            `${lessonName}Episode${episodeNumber}` as keyof typeof allTitles
          )}`
        : undefined
    }
    episodeTitle={
      episodeNumber ? (
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
      (episodeNumber
        ? `${lessonName}/${episodeNumber}`
        : `${lessonName}/Intro`) as EpisodePageProps['contentName']
    }
  />
)

export default EpisodePageWrapper

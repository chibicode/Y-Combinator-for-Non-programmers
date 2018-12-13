/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import React from 'react'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import episodeTitlePrefix from 'src/lib/episodeTitlePrefix'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTranslations } from 'src/lib/t'
import { colors } from 'src/lib/theme'

interface EpisodePageWrapperProps {
  episodeNumber?: number
  lessonName: keyof typeof pathHelpers
}

const EpisodePageWrapper: React.FunctionComponent<EpisodePageWrapperProps> = ({
  lessonName,
  episodeNumber
}) => (
  <EpisodePage
    lessonName={lessonName}
    lessonTitle={t(`${lessonName}Title` as keyof typeof allTranslations)}
    episodeTitleString={
      episodeNumber
        ? `${episodeTitlePrefix(episodeNumber, lessonName)}: ${t(
            `${lessonName}Episode${episodeNumber}` as keyof typeof allTranslations
          )}`
        : undefined
    }
    episodeTitle={
      episodeNumber ? (
        <>
          {episodeTitlePrefix(episodeNumber, lessonName)}:{' '}
          <span
            css={css`
              color: ${colors('pink400')};
            `}
          >
            {t(
              `${lessonName}Episode${episodeNumber}` as keyof typeof allTranslations
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

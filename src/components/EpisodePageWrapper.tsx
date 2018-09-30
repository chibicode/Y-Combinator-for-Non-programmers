import React from 'react'
import EpisodePage, { EpisodePageProps } from 'src/components/EpisodePage'
import pathHelpers from 'src/lib/pathHelpers'
import t, { allTranslations } from 'src/lib/t'

interface EpisodePageWrapperProps {
  episodeNumber?: number
  lessonName: keyof typeof pathHelpers
  emojis: EpisodePageProps['emojis']
}

const EpisodePageWrapper: React.SFC<EpisodePageWrapperProps> = ({
  lessonName,
  episodeNumber,
  emojis
}) => (
  <EpisodePage
    lessonName={lessonName}
    lessonTitle={t(`${lessonName}Title` as keyof typeof allTranslations)}
    episodeTitle={
      episodeNumber
        ? t(
            `${lessonName}Episode${episodeNumber}` as keyof typeof allTranslations
          )
        : undefined
    }
    episodeNumber={episodeNumber}
    emojis={emojis}
    contentName={
      (episodeNumber
        ? `${lessonName}/${episodeNumber}`
        : `${lessonName}/Intro`) as EpisodePageProps['contentName']
    }
  />
)

export default EpisodePageWrapper

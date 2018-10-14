import React from 'react'
import Emoji from 'src/components/Emoji'
import NextLessonButton from 'src/components/NextLessonButton'
import h, { allTranslations } from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

type PrimaryTextType = 'quiz' | 'start'

const primaryTextTypeToTranslationKey = (
  primaryTextType: PrimaryTextType
): keyof typeof allTranslations =>
  ({
    quiz: 'ycNextButtonCheckAnswerPrimaryText' as 'ycNextButtonCheckAnswerPrimaryText',
    start: 'ycNextButtonStartPrimaryText' as 'ycNextButtonStartPrimaryText'
  }[primaryTextType])

const YcNextLessonButton: React.SFC<{
  nextEpisodeNumber: number
  primaryTextType?: 'quiz' | 'start'
}> = ({ nextEpisodeNumber, primaryTextType = 'quiz' }) => (
  <NextLessonButton
    href={yc(nextEpisodeNumber)}
    primaryText={<>{h(primaryTextTypeToTranslationKey(primaryTextType))}</>}
    secondaryText={
      <>
        {h('ycNextButtonSecondaryText', nextEpisodeNumber)} <Emoji>🙂</Emoji>
      </>
    }
  />
)

export default YcNextLessonButton

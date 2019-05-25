import React, { useContext } from 'react'
import Emoji from 'src/components/Emoji'
import NextLessonButton from 'src/components/NextLessonButton'
import H from 'src/components/H'
import { remainingText } from 'src/lib/episodeCategories'
import EpisodeContext from 'src/components/EpisodeContext'

const YcNextLessonButton = () => {
  const { episodeNumber } = useContext(EpisodeContext)
  const nextEpisodeNumber = episodeNumber + 1
  return (
    <NextLessonButton
      href={`/${nextEpisodeNumber}`}
      primaryText={<H args={{ name: 'nextButtonNextPagePrimaryText' }} />}
      secondaryText={
        <>
          <H args={{ name: 'nextButtonSecondaryText', nextEpisodeNumber }} />{' '}
          <Emoji>🙂</Emoji>
        </>
      }
      tertiaryText={nextEpisodeNumber > 1 && remainingText(nextEpisodeNumber)}
    />
  )
}

YcNextLessonButton.defaultProps = {
  primaryTextType: 'quiz'
}

export default YcNextLessonButton

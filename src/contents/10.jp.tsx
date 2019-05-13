import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
// import { P, Strong, Ul, UlLi, Em } from 'src/components/ContentTags'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
// import AER from 'src/components/Yc/AER'
// import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import H from 'src/components/H'
// import YesNoButtons from 'src/components/YesNoButtons'
// import Emoji from 'src/components/Emoji'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
// import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'sideNote',
        title: <>ちょっと休憩？</>,
        content: (
          <>
            <H args={{ name: 'takeABreak' }} />
          </>
        )
      },
      {
        title: <>それでは上級に進みましょう！</>,
        content: (
          <>
            <YcNextLessonButton nextEpisodeNumber={10} />
          </>
        )
      }
    ]}
  />
)

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
// import AER from 'src/components/Yc/AER'
// import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import H from 'src/components/H'
// import YesNoButtons from 'src/components/YesNoButtons'
// import Emoji from 'src/components/Emoji'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import { InlineEmojiBoxesForQuestion } from 'src/components/Yc/InlineEmojiBoxes'
import EmojiSeparator from 'src/components/EmojiSeparator'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>中級の最後です！</>,
        content: (
          <>
            <P>
              <H args={{ name: 'episodeWelcomeText' }} />
              <Strong>今回が中級の最後です。</Strong>
            </P>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
          </>
        )
      },
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

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong } from 'src/components/ContentTags'
// import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
// import EmojiNumber from 'src/components/EmojiNumber'
// import EmojiSeparator from 'src/components/EmojiSeparator'
// import CustomEmoji from 'src/components/CustomEmoji'
// import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
// import TwoColGrid from 'src/components/TwoColGrid'
// import Emoji from 'src/components/Emoji'
// import InlineBorder from 'src/components/InlineBorder'
// import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>とても複雑な弁当箱</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、これから「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>
                        」を弁当箱で再現するのに役立つヒントを出していきますね。
                      </P>
                      <P>まずは、こちらの弁当箱をご覧ください。</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)

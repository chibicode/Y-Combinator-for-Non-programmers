import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  // Em,
  Strong
  // Ul,
  // UlLi,
  // InlineHeader
} from 'src/components/ContentTags'
// import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
// import EmojiNumber from 'src/components/EmojiNumber'
// import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
// import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
// import BottomRightBadge from 'src/components/BottomRightBadge'
// import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>返してもらった計算箱は…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>では、計算箱を返してやろう！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>返してもらった計算箱</R.Rviy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>あれ…これだけか？</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これは「<Strong>1を足す機能</Strong>{' '}
                        <CustomEmoji type="plusOne" />
                        」がある計算箱だけど…
                      </P>
                      <P>
                        「<Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」がある計算箱や、「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>」がある計算箱どこにいったんだ？
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>中級はここまで！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

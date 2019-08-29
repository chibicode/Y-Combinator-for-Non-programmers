import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong
  // Hr,
  // InlineHeader
} from 'src/components/ContentTags'
// import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
// import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
// import TwoColGrid from 'src/components/TwoColGrid'
// import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'
// import YesNoButtons from 'src/components/YesNoButtons'
// import { TwoPlusFour, Conclusion } from 'src/contents/2.v2.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>条件分岐の再現</>,
        content: (
          <>
            <P>
              村人たちは与えられたヒントをもとに、「
              <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
              」を弁当箱で再現しようとしていました。
            </P>
            <R.Rhoa>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>」を…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <Strong>弁当箱で再現できる？</Strong>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、どうすればいいんだろう…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>サヤもちょっと考えてみた！これを見てくれる？</P>
                    </>
                  )
                }
              ]}
            />
            <R.Sdta>
              <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱
            </R.Sdta>
          </>
        )
      }
      // TODO: Only change the bottom one
    ]}
  />
)

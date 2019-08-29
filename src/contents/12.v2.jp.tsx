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
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import Emoji from 'src/components/Emoji'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'
// import YesNoButtons from 'src/components/YesNoButtons'

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
                      <P>
                        復習すると、上の計算箱は、
                        <Strong>
                          もし <CustomEmoji type="blankNumberGrey" /> に{' '}
                          <EmojiNumber number={0} /> を入れたら下の{' '}
                          <CustomEmoji type="blankNumber" /> が残り…
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dqwh>
              <InlineBorder type="condition" /> に <EmojiNumber number={0} />{' '}
              を入れた場合…
            </R.Dqwh>
            <ExpressionRunnerSeparator />
            <R.Vwvb>
              <InlineBorder type="trueCase" /> に入っている{' '}
              <CustomEmoji type="blankNumber" /> が残る
            </R.Vwvb>
          </>
        )
      },
      {
        title: <>サヤちゃんの案</>,
        content: (
          <>
            <P>するといつものように、サヤちゃんが何かひらめいたようです。</P>
            <BubbleQuotes
              quotes={[
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんと！もうひらめいたの？ </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P></P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
      // TODO: Only change the bottom one
    ]}
  />
)

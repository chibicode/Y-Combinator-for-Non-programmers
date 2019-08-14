import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, InlineHeader } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
// import YesNoButtons from 'src/components/YesNoButtons'
// import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>プラスの芸</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                      <P>ベンケイ、問題を説明するんだ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。まず、ぼくは前回紹介した芸に加え、「
                        <Strong>プラスの芸</Strong>
                        」という芸を持っています。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <Emoji>🐶</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  ベンケイの「<Strong>プラスの芸</Strong>」
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この「<InlineHeader>プラスの芸</InlineHeader>
                        」を使うと、
                        <Strong>
                          とある法則と一致する弁当箱を{' '}
                          <CustomEmoji type="plusOne" />{' '}
                          の計算箱に変えることができる
                        </Strong>
                        んです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>とある法則だって？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                      <P>
                        <Em>
                          それぞれの <CustomEmoji type="questionFood" />{' '}
                          には、何らかの料理が入ります。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <CustomEmoji type="questionFood" /> には何らかの料理が入ります
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>何だか複雑な弁当箱だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。そして、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFood" />{' '}
                          に、ある法則に基づいて料理を当てはめる
                        </Strong>
                        と…
                      </P>
                      <P>
                        ぼくはこの弁当箱を{' '}
                        <Em>
                          <CustomEmoji type="plusOne" />{' '}
                          の計算箱に変換することができる
                        </Em>
                        んです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <Strong>
                それぞれの <CustomEmoji type="questionFood" /> に、ある法則に
                <br />
                基づいて料理を当てはめて…
              </Strong>
            </R.Envj>
            <ExpressionRunnerSeparator />
            <R.Biit>
              <H args={{ name: 'convert', type: 'toMathBox' }} /> すると、
              <CustomEmoji type="plusOne" /> になる
            </R.Biit>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど。
                        <Em>
                          その「ある法則」とは、いったいどういう法則なんだろう？
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>それは秘密です。</Strong>
                        でも、とりあえず読み進めてみてください！
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
        title: <>マイナスの芸</>,
        content: <></>
      }
      // Talk about minus next
      // Then ask the question - what is the pattern for each?
      // Say: I have no clue. Do you have any hint?
      // Sure - if you use the pattern for +1 along with 1, then if you run it, you get 2
      // Same for minus.
      // Try it out by filling with random food items for +1, and fail
    ]}
  />
)

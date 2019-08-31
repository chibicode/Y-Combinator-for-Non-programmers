import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
// import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
// import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
// import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
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
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Bwnp>
                    <CustomEmoji type="plusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Bwnp>
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>まずは、こちらの弁当箱をご覧ください。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              するとどうなる？
            </R.Bnyo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>めちゃくちゃ複雑な弁当箱だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ここで質問です。
                        <Strong>
                          上の弁当箱を、
                          <H args={{ name: 'runAndConertToMathbox' }} />{' '}
                          すると、どんな結果になるでしょう？
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        <Em>そんなの、すぐ答えられるわけないだろう！</Em>
                        こんな複雑な弁当箱、
                        <H args={{ name: 'play' }} /> するのもひと苦労だよ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        サヤはすぐ分かったよ！
                        <H args={{ name: 'runAndConertToMathbox' }} /> すると、
                        <Strong>
                          結果は <EmojiNumber number={2} /> になる
                        </Strong>
                        んじゃない？
                      </P>
                      <R.Pmdm>
                        <Emoji>👧🏻</Emoji> 結果は <EmojiNumber number={2} />{' '}
                        になると思う！
                      </R.Pmdm>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>
                          まさにその通り！サヤちゃん、正解です！
                          <Emoji>🎉</Emoji>
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>へ？なんでそんな早く正解が分かるの…？</P>
                      <P>
                        <Em>
                          サヤちゃん、まさか一瞬で頭の中で
                          <H args={{ name: 'play' }} /> したのかい？
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ううん、そんなことはしてないよ。じゃあ、どうやって解いたかを教えてあげるね！
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
        title: <>計算箱にすると…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        まず、<Em>一番上の部分に注目してみて！</Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dpaw>一番上の部分に注目</R.Dpaw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        あ、一番上の部分をよく見ると、
                        <EmojiNumber number={1} /> に変換できる弁当箱だ！
                      </P>
                      <R.Ayrl>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'l',
                            number: 1
                          }}
                        />
                      </R.Ayrl>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう！だから、とりあえず一番上の部分をいったん{' '}
                        <EmojiNumber number={1} /> にしてみるね。
                      </P>
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

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
// import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import InlineBorder from 'src/components/InlineBorder'
import CustomEmoji from 'src/components/CustomEmoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>勝利！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では約束通り、「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>」を返してやろう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🔁', '😈', '🔁']}
              description={<>繰り返しの機能を返してもらった！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やった！これで、
                        <Em>計算箱のすべての機能を返してもらった</Em>
                        ぞ！悪魔に勝った！
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>🔁</Emoji>
              ]}
              description={<>計算箱のすべての機能を返してもらった！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        これで、以前と同じように、計算箱を使って日々の計算を行うことができる！
                      </P>
                      <P>
                        難しい足し算や引き算でも、計算箱があればへっちゃらだ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Nmbt>
                    <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji> を計算
                  </R.Nmbt>
                </>
              }
              right={
                <>
                  <R.Jaqs>
                    <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji> を計算
                  </R.Jaqs>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        それについてなんだが…
                        <Strong>
                          ちょっと伝えたいことがあるんだが、聞いてもらえるか？
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>ん…なんだ？まだ何か言いたいことがあるのか？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>この弁当箱は…？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>まず、こちらの弁当箱を見てみな。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Hvfb />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なんだ、この弁当箱は？</P>
                      <P>
                        <Em>
                          上のほうに、
                          <CustomEmoji type="blankNumberGreen" /> と{' '}
                          <CustomEmoji type="blankNumberBrown" />{' '}
                          を入れる部分があるけれど…
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        とりあえず、
                        <CustomEmoji type="blankNumberGreen" /> と{' '}
                        <CustomEmoji type="blankNumberBrown" />{' '}
                        に適当な数字を当てはめてみな！
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        分かった。じゃあ、こちらの{' '}
                        <Strong>
                          <EmojiNumber number={2} /> に変換できる弁当箱
                        </Strong>
                        と…
                      </P>
                      <R.Wopl>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'e',
                            number: 2
                          }}
                        />
                      </R.Wopl>
                      <P>
                        こちらの{' '}
                        <Strong>
                          <EmojiNumber number={3} /> に変換できる弁当箱
                        </Strong>
                        を…
                      </P>
                      <R.Dmrz>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 3
                          }}
                        />
                      </R.Dmrz>
                      <P>それぞれの部分に入れてみよう。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Tpyg>
              <EmojiNumber number={2} /> と <EmojiNumber number={3} />{' '}
              に変換できる
              <br />
              弁当箱を入れてみた
            </R.Tpyg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、これを
                        <H args={{ name: 'play' }} />{' '}
                        するとどうなるか確かめてみな！
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
        title: <>実行してみると…</>,
        content: <></>
      }
    ]}
  />
)

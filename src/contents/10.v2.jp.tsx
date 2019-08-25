import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Em,
  Strong
  // Ul,
  // UlLi,
  // InlineHeader
} from 'src/components/ContentTags'
// import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
// import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
// import BottomRightBadge from 'src/components/BottomRightBadge'
import TwoColGrid from 'src/components/TwoColGrid'
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
                        <Emoji>🔁</Emoji>」がある計算箱はどこにいったんだ？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Ditw>
                    <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
                  </R.Ditw>
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
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
                        <Strong>それらは、まだ返すわけにはいかないな。</Strong>
                      </P>
                      <P>
                        <Em>
                          いまお前たちに返せるのは、「
                          <Strong>1を足す機能</Strong>{' '}
                          <CustomEmoji type="plusOne" />
                          」がある計算箱だけだ。
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>な、なんだってー！</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        話が違うじゃないか！さっきの問題を解いたら、計算箱を返してくれると言っただろう？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        計算箱を返すとは言ったが…
                        <Strong>
                          計算箱のすべての機能を返すとは言っていないからな！
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>そ、そんなー！嘘つきじゃないか！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>まあ、わたしは悪魔だからな。</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>どうすればいい？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        じゃあ、どうしたらすべての機能を返してもらえるんだ？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだな…先ほどの問題ではお前たちに、
                        <Em>
                          計算箱の「
                          <Strong>1を足す機能</Strong>{' '}
                          <CustomEmoji type="plusOne" />
                          」を弁当箱で再現してもらった
                        </Em>
                        よな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lizi></R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Plde>
              <EmojiNumber number={1} /> <CustomEmoji type="plusOne" />{' '}
              の計算箱を、弁当箱で再現
            </R.Plde>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        だから、
                        <Em>
                          「<Strong>1を引く機能</Strong>{' '}
                          <CustomEmoji type="minusOne" />
                          」や「
                          <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」を返してほしかったら、
                          <Strong>
                            それらを同じように弁当箱で再現してみることだな！
                          </Strong>
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Ditw>
                    <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
                  </R.Ditw>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>えー！</P>
                      <P>
                        「<Strong>1を足す機能</Strong>{' '}
                        <CustomEmoji type="plusOne" />
                        」を再現するのにも苦戦したのに、「
                        <Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」や「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を再現するなんて、できっこないよ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        だったら、「
                        <Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」や「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」は諦めることだな。
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        で、でも…
                        <Em>
                          それじゃ
                          <Strong>引き算や、大きな数の足し算・引き算</Strong>
                          ができないよ！
                        </Em>
                        俺らは計算箱がないと何もできないんだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>頑張って弁当箱で再現するしかないのか…</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <></>,
        content: <></>
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

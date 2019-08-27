import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Hr, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
// import BottomRightBadge from 'src/components/BottomRightBadge'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
// import NextLessonButton from 'src/components/NextLessonButton'
import { TwoPlusFour, Conclusion } from 'src/contents/2.v2.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>上級編へようこそ！</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤗</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
            />
            <P>
              中級編では、ラムダ村の村人たちは計算箱の「
              <Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />
              」と「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
              」を <Emoji>😈</Emoji>{' '}
              悪魔から返してもらいました。どちらも、弁当箱で再現することができたのです。
            </P>
            <R.Rviy>
              「<Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />」
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>弁当箱で再現</R.Eweo>
            <Hr />
            <R.Ditw>
              <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>弁当箱で再現</R.Bgko>
          </>
        )
      },
      {
        title: (
          <>
            「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
            」の復習
          </>
        ),
        content: (
          <>
            <P>
              一方、「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」は、まだ返してもらっていません。これを弁当箱で再現できないと返してもらえないのです。
            </P>
            <TwoColGrid
              noMargin
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
            <P>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」について忘れてしまった方も多いと思うので、ここで復習をしましょう。
            </P>
            <P>
              まず、こちらの計算箱をご覧になり、
              <H args={{ name: 'pressPlay' }} />
            </P>
            <TwoPlusFour />
          </>
        )
      },
      {
        title: <>大きな数の足し算や引き算に役立つ</>,
        content: (
          <>
            <P>
              こちらも復習になりますが、ラムダ村の村人たちにとって、計算箱の「
              <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」は、
              <Strong>
                大きな数の足し算や引き算をするときに欠かせない機能
              </Strong>
              でした。
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={<>大きな数の足し算・引き算に役立つ</>}
            />
            <P>
              たとえば、
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />{' '}
              を計算したい場合、繰り返しの機能を使わないと、
              <CustomEmoji type="plusOne" /> を10回配置する必要があります。
            </P>
            <R.Amoq>
              <CustomEmoji type="plusOne" /> を10回配置
            </R.Amoq>
            <P>
              <Strong>
                しかし、
                <CustomEmoji type="plusOne" /> の数が大きくなると、
                <CustomEmoji type="plusOne" />{' '}
                の数を間違えてしまう可能性があります。
              </Strong>
              そうすると、正しい計算ができません。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <CustomEmoji type="plusOne" /> の数を間違えやすい
                </>
              }
            />
            <P>
              一方、繰り返しの機能を使えば、
              <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} />{' '}
              といった計算も、以下のようにシンプルになります。
              <CustomEmoji type="plusOne" /> の数を間違えることもありません。
            </P>
            <R.Jehv>
              <CustomEmoji type="plusOne" /> を <EmojiNumber number={10} />{' '}
              回繰り返す
            </R.Jehv>
            <Conclusion />
          </>
        )
      },
      {
        title: <>どうやって再現する？</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🎁</Emoji>,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  計算箱の「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」を、
                  <br />
                  弁当箱でどう「<Strong>再現</Strong>」する？
                </>
              }
            />
            <P>
              ラムダ村の村人たちは、計算箱の「<Strong>繰り返しの機能</Strong>{' '}
              <Emoji>🔁</Emoji>」を <Emoji>😈</Emoji>{' '}
              悪魔から返してもらうべく、弁当箱で繰り返しの機能を再現しようと頑張っていました。しかし…
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        うーん、
                        <Em>
                          どんなに考えても、計算箱の「
                          <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」を弁当箱で再現することができない…
                        </Em>
                      </P>
                      <P>サヤちゃん、何か思いついた？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>サヤも、サッパリ分からないなあ…</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>サヤちゃんでも分からないなんて…もうお手上げだ！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              すると、悩んでいるラムダ村の村人たちのもとに、悪魔の助手の{' '}
              <Emoji>🐶</Emoji> ベンケイがやってきました。
            </P>
          </>
        )
      }
    ]}
  />
)

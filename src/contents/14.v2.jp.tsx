import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import CustomEmoji from 'src/components/CustomEmoji'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import EmojiSeparator from 'src/components/EmojiSeparator'
// import TwoColGrid from 'src/components/TwoColGrid'
// import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <P>前回では…</P>
          </>
        ),
        content: (
          <>
            <P>
              前回は、
              <Em>
                計算箱の「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                」を、<Emoji>👧🏻</Emoji>{' '}
                サヤちゃんが考えた以下の弁当箱を使えば再現できるかも？
              </Em>
              というところで終わりました。
            </P>
            <R.Nmbt>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を使った計算箱は…
            </R.Nmbt>
            <ExpressionRunnerSeparator />
            <R.Svig>
              以下の弁当箱で「<Strong>再現</Strong>」できている？
              <Emoji>🤔</Emoji>
            </R.Svig>
            <P>今回は、これを実際に検証していきましょう！</P>
          </>
        )
      },
      {
        title: <>早送りしてみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、前回同様
                        <Em>
                          {' '}
                          <Emoji>🅰️</Emoji> に <EmojiNumber number={3} />、
                          <Emoji>🅱️</Emoji> に <EmojiNumber number={2} />{' '}
                        </Em>
                        を入れてみるね。
                      </P>
                      <P>
                        前回話した通り、
                        <Em>
                          <H args={{ name: 'play' }} /> すると{' '}
                          <EmojiNumber number={5} /> になる
                        </Em>
                        よ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Osxt>
              <EmojiNumber number={3} /> と <EmojiNumber number={2} /> に
            </R.Osxt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          これを今回は
                          <H args={{ name: 'fastForward' }} /> してみるね！
                        </Em>
                      </P>
                      <P>
                        時間がかかるので、何度も止めながらやっていくよ。というわけで、
                        <H args={{ name: 'pressFastForward', girl: true }} />
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

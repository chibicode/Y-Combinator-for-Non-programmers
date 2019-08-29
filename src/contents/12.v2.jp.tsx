import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  // Hr,
  Em,
  Ul,
  UlLi
  // InlineHeader
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
// import TwoColGrid from 'src/components/TwoColGrid'
import InlineBorder from 'src/components/InlineBorder'
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
                      <P>
                        とりあえず、
                        <InlineBorder type="falseCase" /> と{' '}
                        <InlineBorder type="trueCase" />{' '}
                        に適当な数字を入れてみよう。
                      </P>
                      <P>
                        <InlineBorder type="falseCase" /> には{' '}
                        <EmojiNumber number={0} /> を、{' '}
                        <InlineBorder type="trueCase" /> には{' '}
                        <EmojiNumber number={1} /> を入れてみるか。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zypm>
              <EmojiNumber number={0} /> と <EmojiNumber number={1} />{' '}
              を入れてみる
            </R.Zypm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまり、
                        <InlineBorder type="condition" /> の中身が…
                      </P>
                      <Ul>
                        <UlLi>
                          <Em>
                            <EmojiNumber number={0} /> だったら結果は{' '}
                            <EmojiNumber number={1} /> に、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            それ以外だったら結果は <EmojiNumber number={0} />{' '}
                            になる。
                          </Em>
                        </UlLi>
                      </Ul>
                      <P>これをどうやって弁当箱で再現すればいいのか…</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>サヤちゃんの案</>,
        content: (
          <>
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
            <R.Fglm>
              <Emoji>👧🏻</Emoji> サヤちゃんの案
            </R.Fglm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>へえ、面白そうだけど、これはどうやって使うんだい？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>では、先ほどの計算箱を再現してみるね。</P>
                      <R.Wrbb>これを再現してみます</R.Wrbb>
                      <P>
                        まず、
                        <InlineBorder type="falseCase" /> には{' '}
                        <EmojiNumber number={0} /> が入ってるよね。
                        <Strong>
                          だから、
                          <EmojiNumber number={0} />{' '}
                          に変換できる弁当箱を用意するんだ。
                        </Strong>
                      </P>
                      <R.Dzfv>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 0
                          }}
                        />
                      </R.Dzfv>
                      <P>
                        続いて、
                        <InlineBorder type="trueCase" /> には{' '}
                        <EmojiNumber number={1} /> が入っているから、
                        <Strong>
                          だから、
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱を用意する。
                        </Strong>
                      </P>
                      <R.Mqck>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'h',
                            number: 1
                          }}
                        />
                      </R.Mqck>
                      <P>
                        そして、これらを先ほどの弁当箱の上に合体させるんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pgjy></R.Pgjy>
          </>
        )
      }
    ]}
  />
)

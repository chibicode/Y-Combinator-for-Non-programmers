import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Hr } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiWithText from 'src/components/EmojiWithText'
import * as R from 'src/components/Runners'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>法則が分かった！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '😁', '🍱']} />
            <P>
              どうやら、村人たちは
              <H args={{ name: 'bentoBoxPuzzle' }} />
              の法則を見抜いたようです！
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        <Strong>やった、法則が分かったぞ！</Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        なんと…本当に分かったというなら、説明してみることだな！
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
        title: <>下のふたつの料理が同じの場合</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        じゃあ説明しよう。まず、
                        <Strong>下のふたつの料理を比べてみる</Strong>。
                      </P>
                      <P>
                        <Em>
                          もしふたつの料理が<Strong>同じ</Strong>なら、
                          <H args={{ name: 'play' }} />
                          したときに<Strong>上にある</Strong>料理が残る
                        </Em>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vmkg>
              下の料理が同じ (両方とも <EmojiWithText letter="a" />)
            </R.Vmkg>
            <ExpressionRunnerSeparator />
            <R.Osqo>
              上にあった <EmojiWithText letter="b" /> が残る
            </R.Osqo>
            <Hr />
            <R.Wtup>
              下の料理が同じ (両方とも <EmojiWithText letter="f" />)
            </R.Wtup>
            <ExpressionRunnerSeparator />
            <R.Tuqr>
              上にあった <EmojiWithText letter="g" /> が残る
            </R.Tuqr>
            <Hr />
            <R.Dogu>
              下の料理が同じ (両方とも <EmojiWithText letter="k" />)
            </R.Dogu>
            <ExpressionRunnerSeparator />
            <R.Vvjn>
              上にあった <EmojiWithText letter="l" /> が残る
            </R.Vvjn>
          </>
        )
      },
      {
        title: <>下のふたつの料理が違う場合</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        次に、
                        <Strong>下のふたつの料理が違う場合</Strong>。
                      </P>
                      <P>
                        <Em>
                          この場合は、
                          <H args={{ name: 'play' }} />
                          したときに<Strong>右下にある</Strong>料理が残る
                        </Em>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nplf>下の料理が違う</R.Nplf>
            <ExpressionRunnerSeparator />
            <R.Bgfl>
              右下にあった <EmojiWithText letter="d" /> が残る
            </R.Bgfl>
            <Hr />
            <R.Immq>下の料理が違う</R.Immq>
            <ExpressionRunnerSeparator />
            <R.Cpkp>
              右下にあった <EmojiWithText letter="i" /> が残る
            </R.Cpkp>
            <Hr />
            <R.Cowm>下の料理が違う</R.Cowm>
            <ExpressionRunnerSeparator />
            <R.Ozxi>
              右下にあった <EmojiWithText letter="m" /> が残る
            </R.Ozxi>
          </>
        )
      }
      // This is not everything
    ]}
  />
)

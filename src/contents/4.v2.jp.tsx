import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Hr } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
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
            <R.Weoz>
              上にあった <EmojiWithText letter="g" /> と{' '}
              <EmojiWithText letter="o" /> が残る
            </R.Weoz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        そして、以下が
                        <H args={{ name: 'yesNoQuiz' }} />
                        の1問目の答えだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
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
        title: <>下のふたつの料理が異なる場合</>,
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
                        <Strong>下のふたつの料理が異なる場合</Strong>。
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
            <R.Nplf>
              下の料理が異なる (<EmojiForLetter letter="c" /> と{' '}
              <EmojiForLetter letter="d" />)
            </R.Nplf>
            <ExpressionRunnerSeparator />
            <R.Bgfl>
              右下にあった <EmojiWithText letter="d" /> が残る
            </R.Bgfl>
            <Hr />
            <R.Immq>
              下の料理が異なる (<EmojiForLetter letter="h" /> と{' '}
              <EmojiForLetter letter="i" />)
            </R.Immq>
            <ExpressionRunnerSeparator />
            <R.Cpkp>
              右下にあった <EmojiWithText letter="i" /> が残る
            </R.Cpkp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        そして、以下が
                        <H args={{ name: 'yesNoQuiz' }} />
                        の2問目の答えだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cowm>
              下の料理が異なる (<EmojiForLetter letter="k" /> と{' '}
              <EmojiForLetter letter="m" />)
            </R.Cowm>
            <ExpressionRunnerSeparator />
            <R.Ozxi>
              右下にあった <EmojiWithText letter="m" /> が残る
            </R.Ozxi>
          </>
        )
      },
      {
        title: <>正解！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '😈', '🎉']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Strong>正解、まさにその通りだ！</Strong>{' '}
                        <Emoji>🎉</Emoji> <Emoji>🎉</Emoji> <Emoji>🎉</Emoji>
                      </P>
                      <P>
                        今まで勉強を怠けてきたわりには、なかなかやるじゃないか。
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>やった！やった！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Em>だが、喜ぶのはまだ早い。</Em>
                        これはまだ序の口だからだ。
                      </P>
                      <P>
                        これから、さらに難しい
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        を解いてもらう。そのためには、
                        <Em>
                          <H args={{ name: 'bentoBoxPuzzle' }} />
                          の法則を明確にする必要がある。
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>どういうこと？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        先ほどお前が言った、
                        <Em>
                          「下のふたつの料理を比べて、同じなら上が残る。違うなら右下が残る」という法則は、
                          <Strong>明確さがまだ足りない</Strong>
                        </Em>
                        ということだ。
                      </P>
                      <P>
                        <Em>
                          これから、
                          <H args={{ name: 'bentoBoxPuzzle' }} />の
                          <Strong>明確な法則</Strong>を紹介する。
                        </Em>
                        それを理解した上で、さらに難しいパズルを解いてもらおう。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        うーん、よくわからないけど、とりあえずその明確な法則とやらを聞いてみよう。
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

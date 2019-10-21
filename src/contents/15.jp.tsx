import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import MultiplyIcon from 'src/components/MultiplyIcon'

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
                        では約束通り、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を返してやろう！
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
                        <Highlight>
                          計算箱のすべての機能を返してもらった
                        </Highlight>
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
                        <HighlightBold>
                          ちょっと伝えたいことがある。聞いてもらえるか？
                        </HighlightBold>
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
                        <Highlight>
                          上のほうに、
                          <CustomEmoji type="blankNumberPurple" /> と{' '}
                          <CustomEmoji type="blankNumberPink" />{' '}
                          を入れる部分があるけれど…
                        </Highlight>
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
                        <CustomEmoji type="blankNumberPurple" /> と{' '}
                        <CustomEmoji type="blankNumberPink" />{' '}
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
                        <HighlightBold>
                          <EmojiNumber number={2} /> に変換できる弁当箱
                        </HighlightBold>
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
                        <HighlightBold>
                          <EmojiNumber number={3} /> に変換できる弁当箱
                        </HighlightBold>
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
                      <P>
                        <CustomEmoji type="blankNumberPurple" /> と{' '}
                        <CustomEmoji type="blankNumberPink" />{' '}
                        の部分に入れてみよう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hvfb>
              <CustomEmoji type="blankNumberPurple" /> と{' '}
              <CustomEmoji type="blankNumberPink" /> の部分に…
            </R.Hvfb>
            <ExpressionRunnerSeparator />
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
                        <H args={{ name: 'run' }} />{' '}
                        するとどうなるか確かめてみよう！
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
        title: <>早送りしてみると…</>,
        content: (
          <>
            <P>
              では、
              <H args={{ name: 'pressRun', skipColon: true }} />。
            </P>
            <Ul>
              <UlLi>
                複雑なので、<Highlight>目で追わなくても大丈夫です！</Highlight>
              </UlLi>
              <UlLi>
                ちょっと時間がかかるので、待てない方は下の「
                <HighlightBold>
                  <H args={{ name: 'skipToTheEnd' }} /> →
                </HighlightBold>
                」を押してください！
              </UlLi>
            </Ul>
            <R.Ugvz></R.Ugvz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        結果は…
                        <Highlight>
                          <EmojiNumber number={5} />{' '}
                          に変換できる弁当箱になった！
                        </Highlight>
                      </P>
                      <R.Xkcm>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'c',
                            number: 5
                          }}
                        />
                      </R.Xkcm>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>足し算ができる</>,
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
                        <HighlightBold>
                          もともと <CustomEmoji type="blankNumberPurple" /> と{' '}
                          <CustomEmoji type="blankNumberPink" />{' '}
                          に入れた数字は何だった
                        </HighlightBold>
                        かな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          もともと入れたのは <EmojiNumber number={2} /> と{' '}
                          <EmojiNumber number={3} /> だった。そして、結果は{' '}
                          <EmojiNumber number={5} /> になった…
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mlnt>
              <EmojiNumber number={2} /> と <EmojiNumber number={3} />{' '}
              を入れると…
            </R.Mlnt>
            <ExpressionRunnerSeparator />
            <R.Ryqp>
              <EmojiNumber number={5} /> に変換できる弁当箱に
            </R.Ryqp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        ということはもしかして…
                        <HighlightBold>足し算を計算した</HighlightBold>
                        のか？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>その通りだ！先ほどの弁当箱は、</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <CustomEmoji type="blankNumberPurple" /> と{' '}
                            <CustomEmoji type="blankNumberPink" />{' '}
                            に数字を入れて実行すると…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            <CustomEmoji type="blankNumberPurple" />{' '}
                            <Emoji>➕</Emoji>{' '}
                            <CustomEmoji type="blankNumberPink" />{' '}
                            に変換できる弁当箱になるんだ。
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Hvfb>
              <CustomEmoji type="blankNumberPurple" /> と{' '}
              <CustomEmoji type="blankNumberPink" /> に数字を入れて
              <br />
              実行すると…
            </R.Hvfb>
            <ExpressionRunnerSeparator />
            <R.Nxjv>
              <CustomEmoji type="blankNumberPurple" /> <Emoji>➕</Emoji>{' '}
              <CustomEmoji type="blankNumberPink" /> に<br />
              変換できる弁当箱になる
            </R.Nxjv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>足し算ができる弁当箱</HighlightBold>
                        というわけだな。
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんてこった…</P>
                      <P>
                        前回、俺らは <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
                        <Emoji>🅱️</Emoji> を計算するのに、以下のように「
                        <H args={{ name: 'repeatFeature' }} />
                        」を再現できる弁当箱を使っていたが…
                      </P>
                      <R.Bxuv>
                        <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
                        を計算
                      </R.Bxuv>
                      <P>
                        こんな複雑なことをしなくても、弁当箱で足し算をすることができるというわけか。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>まさに、その通りだ！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>もうひとつの弁当箱</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、こちらの弁当箱は何ができる弁当箱か分かるかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl></R.Vqyl>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>先ほどの弁当箱と似ているけど、微妙に違うなあ…</P>
                      <P>
                        前回同様、
                        <HighlightBold>
                          <EmojiNumber number={2} /> と{' '}
                          <EmojiNumber number={3} /> に変換できる弁当箱を{' '}
                          <CustomEmoji type="blankNumberPurple" /> と{' '}
                          <CustomEmoji type="blankNumberPink" /> に入れて、
                          <H args={{ name: 'run' }} /> してみよう。
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ちなみに、今回はかなり時間がかかるので、待てない場合は「
                        <HighlightBold>
                          <H args={{ name: 'skipToTheEnd' }} /> →
                        </HighlightBold>
                        」を押してもいいぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wzqv>
              <EmojiNumber number={2} /> と <EmojiNumber number={3} />{' '}
              に変換できる
              <br />
              弁当箱を入れてみた
            </R.Wzqv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        結果は…
                        <Highlight>
                          <EmojiNumber number={6} />{' '}
                          に変換できる弁当箱になった！
                        </Highlight>
                      </P>
                      <R.Edzu>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'c',
                            number: 6
                          }}
                        />
                      </R.Edzu>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>掛け算ができる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        今回は、もともと{' '}
                        <CustomEmoji type="blankNumberPurple" /> と{' '}
                        <CustomEmoji type="blankNumberPink" /> に入れたのは{' '}
                        <EmojiNumber number={2} /> と <EmojiNumber number={3} />{' '}
                        だった。そして、結果は <EmojiNumber number={6} />{' '}
                        になった…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nvdn>
              <EmojiNumber number={2} /> と <EmojiNumber number={3} />{' '}
              を入れると…
            </R.Nvdn>
            <ExpressionRunnerSeparator />
            <R.Uhqo>
              <EmojiNumber number={6} /> に変換できる弁当箱に
            </R.Uhqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        これはもしかして…
                        <HighlightBold>掛け算を計算できる</HighlightBold>
                        のか？
                      </P>
                      <EmojiSeparator
                        emojis={['✨', '✖️', '✨']}
                        description={<>掛け算ができる？</>}
                      />
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>その通りだ！先ほどの弁当箱は、</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <CustomEmoji type="blankNumberPurple" /> と{' '}
                            <CustomEmoji type="blankNumberPink" />{' '}
                            に数字を入れて実行すると…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            <CustomEmoji type="blankNumberPurple" />{' '}
                            <Emoji>✖️</Emoji>{' '}
                            <CustomEmoji type="blankNumberPink" />{' '}
                            に変換できる弁当箱になるんだ。
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl>
              <CustomEmoji type="blankNumberPurple" /> と{' '}
              <CustomEmoji type="blankNumberPink" /> に数字を入れて
              <br />
              実行すると…
            </R.Vqyl>
            <ExpressionRunnerSeparator />
            <R.Aflw>
              <CustomEmoji type="blankNumberPurple" /> <Emoji>✖️</Emoji>{' '}
              <CustomEmoji type="blankNumberPink" /> に<br />
              変換できる弁当箱になる
            </R.Aflw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>掛け算ができる弁当箱</HighlightBold>
                        というわけだな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🍱', '✖️', '🍱']}
              description={<>掛け算ができる弁当箱が存在した！</>}
            />
          </>
        )
      },
      {
        title: <>四則演算ができる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        すごい…！
                        <HighlightBold>
                          計算箱では掛け算ができなかったけど、弁当箱を使えば掛け算ができるのか！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだ。ちなみに今回は紹介する時間がないが、
                        <HighlightBold>
                          ふたつの数字の引き算や割り算
                        </HighlightBold>
                        も弁当箱で行うことができるぞ。
                      </P>
                      <P>
                        つまり、
                        <Highlight>
                          弁当箱は四則演算の全てを行うことができる
                        </Highlight>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['➕', '✖️', '🍱', '➖', '➗']}
              description={<>弁当箱は四則演算の全てができる</>}
            />
          </>
        )
      },
      {
        type: 'summary',
        title: <>次が最後の題材です！</>,
        content: (
          <>
            <P>次が最後の題材です！あと少しだけお付き合いください！</P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>もうすぐ終わります！</>}
            />
          </>
        )
      },
      {
        title: <>階乗</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ちなみに弁当箱は四則演算だけじゃなく、さらに複雑な計算をすることもできるぞ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>へえ、たとえば何ができるの？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        たとえば、「<HighlightBold>階乗</HighlightBold>
                        」という計算がある。これは「
                        <HighlightBold>
                          ある数からはじめて、1を引いていき、
                          <EmojiNumber number={1} />{' '}
                          になるまで繰り返し掛け算をする
                        </HighlightBold>
                        」という計算だ。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <CustomEmoji type="blankNumber" />,
                          <Emoji>✖️</Emoji>,
                          <CustomEmoji type="questionMinusOne" />,
                          <Emoji>✖️</Emoji>,
                          <CustomEmoji type="horizontalDotDotDot" />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <HighlightBold>階乗</HighlightBold>:<br />
                            ある数からはじめて、1を引いていき、
                            <br />
                            <EmojiNumber number={1} />{' '}
                            になるまで繰り返し掛け算をする
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、具体的に説明してくれる？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        たとえば、「
                        <Highlight>
                          <EmojiNumber number={3} /> の階乗
                        </Highlight>
                        」は、以下のようになる。実際に計算すると{' '}
                        <EmojiNumber number={6} /> になるぞ。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={3} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={6} /> になる
                          </>
                        }
                      />
                      <P>
                        同じように、「
                        <Highlight>
                          <EmojiNumber number={4} /> の階乗
                        </Highlight>
                        」は、以下のようになる。実際に計算すると{' '}
                        <EmojiNumber number={24} /> になるぞ。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={4} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={4} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={24} /> になる
                          </>
                        }
                      />
                      <P>
                        <HighlightBold>階段</HighlightBold>
                        みたいに1ずつ数字が減っていくから「階」乗、と覚えておけばいい。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ふむふむ…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>こういった計算も、弁当箱で行うことができるんだ。</P>
                      <P>どういうことか説明しよう！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>掛け算の省略表記</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        階乗を計算するためには、先ほど紹介した
                        <Highlight>掛け算を計算できる弁当箱</Highlight>
                        を使う必要があるわけだが…
                      </P>
                      <P>
                        まず、
                        <HighlightBold>
                          掛け算を計算できる弁当箱を、以下のように省略表記してみる。
                        </HighlightBold>
                        こうしたほうがひと目で見て分かりやすいからな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl>掛け算を計算できる弁当箱を…</R.Vqyl>
            <ExpressionRunnerSeparator />
            <R.Trwj>以下のように省略表記してみる</R.Trwj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          真ん中にある <MultiplyIcon />{' '}
                          のアイコンが、掛け算を示す
                        </HighlightBold>
                        ということか。
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <CustomEmoji type="blankNumberPurple" />,
                          <MultiplyIcon />,
                          <CustomEmoji type="blankNumberPink" />
                        ]}
                        description={
                          <>
                            <MultiplyIcon /> のアイコンが掛け算を示す
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだ。
                        <Highlight>
                          次に紹介する、階乗を計算できる弁当箱は複雑なので、こういった省略表記を使わないとスペースが足りなくなる。
                        </Highlight>
                      </P>
                      <P>
                        だから、 掛け算を <MultiplyIcon />{' '}
                        のアイコンで省略表記することにしたというわけだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>そうか、了解！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ここで具体例を見てみよう。</P>
                      <P>
                        たとえば、こちらの <EmojiNumber number={2} />{' '}
                        <Emoji>✖️</Emoji> <EmojiNumber number={3} />{' '}
                        を計算できる弁当箱は…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ochk>
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} /> を計算できる弁当箱
            </R.Ochk>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        以下のように <MultiplyIcon /> を使って省略表記できる。
                      </P>
                      <P>
                        <H args={{ name: 'run' }} /> を押してみると、ちゃんと{' '}
                        <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                        <EmojiNumber number={3} /> が計算できるぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Potg>
              上の弁当箱を <MultiplyIcon /> で省略表記してみた
            </R.Potg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど。で、この省略表記をどう使って階乗を計算するんだい？
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
        title: <>階乗の計算</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>それでは、階乗を計算する方法をお見せしよう。</P>
                      <P>
                        まず、こちらの弁当箱を見てみよう。
                        <Highlight>
                          上の <EmojiForLetter letter="a" /> と{' '}
                          <EmojiForLetter letter="f" /> の間に掛け算のアイコン{' '}
                          <MultiplyIcon /> が使われている
                        </Highlight>
                        のに注目だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zick>
              <EmojiForLetter letter="a" /> と <EmojiForLetter letter="f" />{' '}
              の間に
              <br />
              掛け算のアイコン <MultiplyIcon /> が使われている
            </R.Zick>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        次に、上の弁当箱に、下の黄色の部分を追加してみよう。
                      </P>
                      <P>
                        ちなみに下半分は、前回も紹介した、 「
                        <H args={{ name: 'repeatFeature' }} />」 を再現できる
                        <HighlightBold>Yコンビネータの弁当箱</HighlightBold>だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olqy>
              黄色の部分を追加。
              <br />
              下半分は<HighlightBold>Yコンビネータの弁当箱</HighlightBold>
            </R.Olqy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        この弁当箱を使うと、どんな数字の階乗も計算できるんだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>えー、本当かなあ？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={3} /> の階乗
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、先ほどの弁当箱を使って <EmojiNumber number={3} />{' '}
                        の階乗を計算してみよう。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={3} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={6} /> になる
                          </>
                        }
                      />
                      <P>
                        先ほどの弁当箱の上の部分に <EmojiNumber number={3} />{' '}
                        を追加してみたぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zlfx>
              上の部分に <EmojiNumber number={3} /> を追加
            </R.Zlfx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        これを
                        <H args={{ name: 'run' }} /> してみよう！
                      </P>
                      {/* TODO: NOTE - we skip a lot of steps */}
                      <Ul>
                        <UlLi>
                          ステップ数が非常に多いので、途中のいくつかのステップを省略した上で、
                          <Highlight>3倍速で早送りするぞ。</Highlight>{' '}
                          <Emoji>⏩</Emoji> <Emoji>⏩</Emoji> <Emoji>⏩</Emoji>
                        </UlLi>
                        <UlLi>
                          早送り中は、目に優しくなるように弁当箱を半透明にしている。
                        </UlLi>
                        <UlLi>
                          待てない場合は、「
                          <H args={{ name: 'skipToTheStoppingPoint' }} /> →
                          」を押してもいいぞ。
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rrmc></R.Rrmc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>まだ最後まで終わっていないが…気づいたかな？</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
                        <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                        <EmojiNumber number={1} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そう。こうやって <EmojiNumber number={3} />{' '}
                        の階乗を自動で計算してくれるんだ。
                      </P>
                      <P>
                        というわけで、
                        <H args={{ name: 'run' }} /> して最後まで見てみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ancc></R.Ancc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        というわけで、先ほどの弁当箱は
                        <H args={{ name: 'run' }} />{' '}
                        すると、以下のように変化することで、
                        <EmojiNumber number={3} />{' '}
                        の階乗を自動で計算してくれるんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zlfx>
              上の部分に <EmojiNumber number={3} /> を追加
              <br />
              して
              <H args={{ name: 'run' }} /> すると…
            </R.Zlfx>
            <ExpressionRunnerSeparator />
            <R.Qurt>
              以下のように変化することで、
              <br />
              <EmojiNumber number={3} /> の階乗を計算してくれる
            </R.Qurt>
            <ExpressionRunnerSeparator />
            <R.Gzuj></R.Gzuj>
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={4} /> の階乗
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では最後に、先ほどの弁当箱を使って{' '}
                        <EmojiNumber number={4} /> の階乗を計算してみよう。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={4} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={4} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={24} /> になる
                          </>
                        }
                      />
                      <P>
                        先ほどの弁当箱の上の部分に <EmojiNumber number={4} />{' '}
                        を追加してみたぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Txxw>
              上の部分に <EmojiNumber number={4} /> を追加
            </R.Txxw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        これも
                        <H args={{ name: 'run' }} /> してみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xbki></R.Xbki>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={24} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        どうだ、
                        <EmojiNumber number={4} /> の階乗を計算できただろう？
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={4} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={4} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={24} /> になる
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>確かに…！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Yコンビネータのおかげ</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        このように、先ほどの弁当箱は一番上の部分に入れた数字の階乗を計算できるんだ。
                      </P>
                      <P>
                        たとえば <EmojiNumber number={5} /> を入れると、
                        <EmojiNumber number={5} />{' '}
                        の階乗を計算してくれるというわけだ。
                      </P>
                    </>
                  )
                }
              ]}
            />

            <R.Eijx>
              一番上に <EmojiNumber number={5} /> を入れて
              <br />
              <H args={{ name: 'run' }} /> すると…
            </R.Eijx>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="xs"
              nodes={[
                <EmojiNumber number={5} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={4} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={3} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={2} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <EmojiNumber number={5} /> の階乗を計算してくれる
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
                        つまり、先ほどの弁当箱を使うことで、
                        <HighlightBold>
                          どんな大きな数字の階乗でも計算することができる
                        </HighlightBold>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kmgw>
              どんな大きな数字の階乗でも
              <br />
              計算することができる！
            </R.Kmgw>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="questionMinusOne" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="horizontalDotDotDot" />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <CustomEmoji type="blankNumber" /> の階乗を計算してくれる
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど、すごいなあ…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        もちろん、こういった複雑な計算ができるのも、
                        <HighlightBold>Yコンビネータ</HighlightBold>
                        の弁当箱のおかげだ。
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <HighlightBold>Yコンビネータ</HighlightBold>
                            の弁当箱は、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            掛け算を計算できる弁当箱と組み合わせることによって、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            階乗のように複雑な計算を行うこともできる
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>ということだ。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              <HighlightBold>Yコンビネータ</HighlightBold>の弁当箱は…
            </R.Xjzx>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['🍱', '✖️', '🍱']}
              description={
                <>
                  掛け算を計算できる弁当箱と
                  <br />
                  組み合わせることによって…
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="questionMinusOne" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="horizontalDotDotDot" />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <HighlightBold>階乗</HighlightBold>
                  のような複雑な計算もできる！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        まさに、「
                        <HighlightBold>魔法のYコンビネータ</HighlightBold>
                        」だな！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🧙‍♀️', '✨']}
              description={
                <>
                  <HighlightBold>魔法のYコンビネータ</HighlightBold>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>弁当箱にできない計算はあるの？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        以上をまとめると…
                        <HighlightBold>
                          弁当箱は、計算箱よりもっと複雑な計算ができるということだ
                        </HighlightBold>
                        。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" size="sm" />,
                <Emoji size="semilg">🍱</Emoji>,
                <CustomEmoji type="mathBox" size="sm" />
              ]}
              description={<>弁当箱は、計算箱以上にパワフル！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        じゃあ逆に質問するけど…
                        <HighlightBold>
                          弁当箱にできない計算はあるのかい？
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>いい質問だな。それは、次のページで説明しよう！</P>
                      <P>
                        <HighlightBold>
                          次が最後のページ、エピローグだ！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>長かった…やっと終わるのか！じゃあ、先に進もう！</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

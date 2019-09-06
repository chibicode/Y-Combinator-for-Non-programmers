import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'

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
        title: <>早送りしてみると…</>,
        content: (
          <>
            <P>
              では、
              <H args={{ name: 'pressFastForward', skipColon: true }} />。
            </P>
            <Ul>
              <UlLi>
                複雑なので、<Em>目で追わなくても大丈夫です！</Em>
              </UlLi>
              <UlLi>
                ちょっと時間がかかるので、待てない方は下の「
                <Strong>
                  <H args={{ name: 'skipToTheEnd' }} /> →
                </Strong>
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
                        <Em>
                          <EmojiNumber number={5} />{' '}
                          に変換できる弁当箱になった！
                        </Em>
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
                        <Strong>
                          もともと <CustomEmoji type="blankNumberGreen" /> と{' '}
                          <CustomEmoji type="blankNumberBrown" />{' '}
                          に入れた数字は何だった
                        </Strong>
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
                        <Em>
                          もともと入れたのは <EmojiNumber number={2} /> と{' '}
                          <EmojiNumber number={3} /> だった。そして、結果は{' '}
                          <EmojiNumber number={5} /> になった…
                        </Em>
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
                        ということはもしかして…<Strong>足し算を計算した</Strong>
                        のか？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        その通りだ！先ほどの弁当箱は、
                        <Em>
                          <CustomEmoji type="blankNumberGreen" /> と{' '}
                          <CustomEmoji type="blankNumberBrown" /> に数字を入れ、
                          <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                          すると…
                        </Em>
                      </P>
                      <P>
                        <Strong>
                          結果は <CustomEmoji type="blankNumberGreen" />{' '}
                          <Emoji>➕</Emoji>{' '}
                          <CustomEmoji type="blankNumberBrown" /> になるんだ。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hvfb>
              <CustomEmoji type="blankNumberGreen" /> と{' '}
              <CustomEmoji type="blankNumberBrown" /> に数字を入れ、
              <br />
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると…
            </R.Hvfb>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumberGreen" />,
                <Emoji>➕</Emoji>,
                <CustomEmoji type="blankNumberBrown" />
              ]}
              description={
                <>
                  結果は <CustomEmoji type="blankNumberGreen" />{' '}
                  <Emoji>➕</Emoji> <CustomEmoji type="blankNumberBrown" />{' '}
                  になる
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
                        つまり、<Strong>足し算ができる弁当箱</Strong>
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
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        <Strong>
                          <EmojiNumber number={2} /> と{' '}
                          <EmojiNumber number={3} /> に変換できる弁当箱を{' '}
                          <CustomEmoji type="blankNumberGreen" /> と{' '}
                          <CustomEmoji type="blankNumberBrown" /> に入れて、
                          <H args={{ name: 'fastForward' }} /> してみよう。
                        </Strong>
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
                        <Strong>
                          <H args={{ name: 'skipToTheEnd' }} /> →
                        </Strong>
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
                        <Em>
                          <EmojiNumber number={6} />{' '}
                          に変換できる弁当箱になった！
                        </Em>
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
                        今回は、もともと <CustomEmoji type="blankNumberGreen" />{' '}
                        と <CustomEmoji type="blankNumberBrown" /> に入れたのは{' '}
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
                      <P>これはもしかして…掛け算を計算できるのか？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        その通りだ！先ほどの弁当箱は、
                        <Em>
                          <CustomEmoji type="blankNumberGreen" /> と{' '}
                          <CustomEmoji type="blankNumberBrown" /> に数字を入れ、
                          <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                          すると…
                        </Em>
                      </P>
                      <P>
                        <Strong>
                          結果は <CustomEmoji type="blankNumberGreen" />{' '}
                          <Emoji>✖️</Emoji>{' '}
                          <CustomEmoji type="blankNumberBrown" /> になるんだ。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl>
              <CustomEmoji type="blankNumberGreen" /> と{' '}
              <CustomEmoji type="blankNumberBrown" /> に数字を入れ、
              <br />
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると…
            </R.Vqyl>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumberGreen" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="blankNumberBrown" />
              ]}
              description={
                <>
                  結果は <CustomEmoji type="blankNumberGreen" />{' '}
                  <Emoji>✖️</Emoji> <CustomEmoji type="blankNumberBrown" />{' '}
                  になる
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
                        つまり、<Strong>掛け算ができる弁当箱</Strong>
                        というわけだな。
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
                        <Strong>
                          計算箱では掛け算ができなかったけど、弁当箱を使えば掛け算ができるのか！
                        </Strong>
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
                        <Strong>引き算や割り算</Strong>
                        も弁当箱で行うことができるぞ。
                      </P>
                      <P>
                        つまり、
                        <Em>弁当箱は四則演算の全てを行うことができる</Em>
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
        title: <>Yコンビネータと組み合わせると</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        また、前回「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>」を再現するのに使った「
                        <Strong>Yコンビネータ</Strong>
                        」の弁当箱と組み合わせることで、さらに複雑な計算をすることもできる。
                      </P>
                      <R.Xjzx>
                        前回「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を
                        <br />
                        再現するのに使った「<Strong>Yコンビネータ</Strong>」
                      </R.Xjzx>
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
                        たとえば、「<Strong>階乗</Strong>
                        」という計算がある。これは「
                        <Strong>
                          ある数からはじめて、1になるまで繰り返し掛け算をする
                        </Strong>
                        」という計算だ。
                      </P>
                      <P>
                        たとえば、「
                        <EmojiNumber number={3} />{' '}
                        の階乗」は、以下のようになる。
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
                            <EmojiNumber number={3} /> の階乗
                          </>
                        }
                      />
                      <P>
                        同じように、「
                        <EmojiNumber number={4} />{' '}
                        の階乗」は、以下のようになる。
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
                            <EmojiNumber number={4} /> の階乗
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
                      <P>ふむふむ…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        この「<Strong>階乗</Strong>」は、
                        <Strong>Yコンビネータ</Strong>
                        を使った弁当箱で計算することができるんだ。
                      </P>
                      <P>
                        たとえば以下の弁当箱は、
                        <Strong>
                          <EmojiNumber number={4} /> の階乗、すなわち{' '}
                          <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
                          <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
                          <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算してくれる。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rwuw>
              この、下半分が「Yコンビネータ」の
              <br />
              弁当箱を使えば…
            </R.Rwuw>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <EmojiNumber number={4} /> の階乗、すなわち
              <br />
              <EmojiNumber number={4} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できる！
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そして、
                        <Strong>
                          一番上の <EmojiNumber number={4} />{' '}
                          を他の数字に変えれば、その数字の階乗を計算できるというわけだ。
                        </Strong>
                      </P>
                      <P>
                        (
                        <Em>
                          ちなみに、右の方に <Emoji>✖️</Emoji>{' '}
                          の印がある。これは先ほど紹介した、掛け算ができる弁当箱をスペースの都合で省略しただけだ。
                        </Em>
                        )
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>上の弁当箱は複雑すぎてよく分からないけど…</P>
                      <Ul>
                        <UlLi>
                          「<Strong>階乗</Strong>」は、「
                          <Em>1になるまで掛け算を繰り返す</Em>
                          」ということだから、
                        </UlLi>
                        <UlLi>
                          <Em>
                            「繰り返す」のを可能にする「
                            <Strong>Yコンビネータ</Strong>
                            」の弁当箱が必要
                          </Em>
                          というわけかな…？
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>その通りだ！上の弁当箱を理解する必要はないが…</P>
                      <P>
                        <Em>
                          「<Strong>Yコンビネータ</Strong>
                          」の弁当箱は、掛け算を計算できる弁当箱と組み合わせることによって、階乗のように複雑な計算を行うこともできる
                        </Em>
                        、ということさえ分かれば十分だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              「<Strong>Yコンビネータ</Strong>」の弁当箱は、
              <br />
              掛け算を計算できる弁当箱と
              <br />
              組み合わせることによって、
              <br />
              <Strong>階乗</Strong>のような複雑な計算もできる
            </R.Xjzx>
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
                        <Strong>
                          弁当箱は、計算箱よりもっと複雑な計算ができるということだ
                        </Strong>
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
                        <Strong>弁当箱にできない計算はあるのかい？</Strong>
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
                        <Strong>次が最後のページ、エピローグだ！</Strong>
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

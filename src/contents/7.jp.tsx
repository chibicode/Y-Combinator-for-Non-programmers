import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, Ul, UlLi } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>問題の説明</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では約束通り、
                        <Em>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              noBottomMargin
              description={
                <>
                  これから出す難しい問題に
                  <br />
                  答えられたら計算箱を返してやろう！
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
                        <Strong>この問題は非常に難しい</Strong>
                        から覚悟するんだな。ミニオン、問題を説明するんだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。まず、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                      <P>
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        がたくさんありますが、それぞれの{' '}
                        <Strong>
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          には何らかの料理が入ります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> には
              <br />
              何らかの料理が入る
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>何だか複雑そうな弁当箱だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そして、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れると、
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              <Strong>ある法則に基づいて</Strong>料理を入れると、
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱になる
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        背景に <CustomEmoji type="plusOneOrange" size="mdlg" />{' '}
                        の模様がついた！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。背景にある{' '}
                        <CustomEmoji type="plusOneOrange" size="mdlg" />{' '}
                        の模様は単に、
                        <H args={{ name: 'plusOneEffect' }} />
                        があるということを表しているだけです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        その
                        <H args={{ name: 'plusOneEffect' }} />
                        ってどういう効果なの？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>これから説明しますね！</P>
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
            <EmojiNumber number={1} /> が <EmojiNumber number={2} /> になる
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'lookAtThisBentoBox' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fxde />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        前回の復習ですが、この弁当箱は、ぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={1} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rbup>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 1 }}
              />
            </R.Rbup>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では上の弁当箱を、先ほどの
                        <H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱と<Strong>合体させてみます</Strong>。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fljg>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱と合体
            </R.Fljg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、この弁当箱を「
                        <Strong>
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                        </Strong>
                        」するとどうなるか見てみましょう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ezmz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={2} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうなんです！つまり、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            <EmojiNumber number={1} /> に変換できる弁当箱と、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            先ほどの
                            <H args={{ name: 'plusOneEffect' }} />
                            がある弁当箱を合体させて、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            「<H args={{ name: 'runAndConvertToMathbox' }} />
                            」すると、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            結果は <EmojiNumber number={2} /> になる
                          </Em>
                        </UlLi>
                      </Ul>
                      <P>ということです。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Jiua>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を合体させ…
            </R.Jiua>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果は <EmojiNumber number={2} /> になる
            </R.Pmdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまりざっくり言うと、
                        <Strong>
                          <EmojiNumber number={1} /> が{' '}
                          <EmojiNumber number={2} /> になった
                        </Strong>
                        というわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />
              ]}
              description={
                <>
                  ざっくり言うと、
                  <EmojiNumber number={1} /> が <EmojiNumber number={2} />{' '}
                  になった
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2} /> が <EmojiNumber number={3} /> になる
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        続いて、
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilvq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱は、ぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={2} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Spga>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'f', number: 2 }}
              />
            </R.Spga>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱も、
                        <Em>
                          先ほどの
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱と合体させてみました。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Akug>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱と合体
            </R.Akug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        こちらを「
                        <Strong>
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                        </Strong>
                        」するとどうなるか確かめてみてください！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vfdw />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={3} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうなんです！まとめると、以下のようになります。</P>
                    </>
                  )
                }
              ]}
            />

            <R.Aone>
              <EmojiNumber number={2} /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を合体させ…
            </R.Aone>
            <ExpressionRunnerSeparator />
            <R.Qsoa>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果は <EmojiNumber number={3} /> になる
            </R.Qsoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ざっくり言うと、今度は{' '}
                        <Strong>
                          <EmojiNumber number={2} /> が{' '}
                          <EmojiNumber number={3} /> になった
                        </Strong>
                        のです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={3} />
              ]}
              description={
                <>
                  ざっくり言うと、
                  <EmojiNumber number={2} /> が <EmojiNumber number={3} />{' '}
                  になった
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: <>まとめ</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>まとめると、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            ある数字 <CustomEmoji type="blankNumber" />{' '}
                            に変換できる弁当箱と、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            <H args={{ name: 'plusOneEffect' }} />
                            がある弁当箱を合体させ、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            <H args={{ name: 'runAndConvertToMathbox' }} />
                            すると、
                          </Em>
                        </UlLi>
                      </Ul>
                      <P>
                        <Em>
                          結果は <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
                        </Em>
                        のです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              <CustomEmoji type="blankNumber" /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を合体させ…
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果は <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
            </R.Jxvy>
          </>
        )
      },
      {
        title: (
          <>
            計算箱の <CustomEmoji type="plusOne" /> と同じようなもの
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ここで思い出してほしいのですが、
                        <Strong>
                          計算箱では、
                          <CustomEmoji type="plusOne" />{' '}
                          を使えば、「1を足す」計算を行うことができましたよね
                        </Strong>
                        。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              <CustomEmoji type="mathBox" /> 計算箱の場合、
              <CustomEmoji type="plusOne" /> を使えば
              <br />
              「1を足す」計算ができる
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        すなわち、この <H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱は…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              この <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱は…
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>
                          計算箱における <CustomEmoji type="plusOne" />{' '}
                          と同じようなもの
                        </Strong>
                        、と言えるでしょう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Biit>
              <Strong>
                <CustomEmoji type="mathBox" /> 計算箱における、
                <CustomEmoji type="plusOne" /> と同じようなもの
              </Strong>
            </R.Biit>
          </>
        )
      },
      {
        title: <>計算箱を賭けた問題</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、ここで問題です。
                        <Strong>
                          この弁当箱に、どのような法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れると…
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <Strong>
                どのような法則に基づいて
                <br />
                <CustomEmoji type="questionFoodGrey" /> に料理を入れると…
              </Strong>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほどのような、
                        <Strong>
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になるでしょう？
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <Strong>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </Strong>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまり、
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に何を入れたら、
                          <H args={{ name: 'plusOneEffect' }} />
                          があるか当てろってこと？
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>はい、その通りです！</Strong>
                        <Em>
                          ある法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れた時に限り
                        </Em>
                        、<H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱になります。
                      </P>
                      <P>
                        <Em>それがどんな法則が、当ててみよう！</Em>
                        という問題です。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="questionFoodGrey" />,
                <Emoji>🐶</Emoji>,
                <CustomEmoji type="plusOneOrange" />
              ]}
              description={
                <>
                  それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                  に何を入れたら
                  <br />
                  <H args={{ name: 'plusOneEffect' }} />
                  がある弁当箱になる？
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
                        この問題こそが、以前から話していた「難しい問題」だ。
                        <Em>これを解けたら、約束通り計算箱を返してやろう！</Em>
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
        title: (
          <>
            試しに<Strong>適当な料理</Strong>を入れてみる
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん…
                        <Em>
                          問題を完全に理解できた自信がないし、どうやって解けばいいかさっぱり分からない！
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>大丈夫、安心してください！</P>
                      <P>
                        <Strong>
                          試しに、
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に適当な料理を入れてみると、問題を理解できると思います。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <CustomEmoji type="questionFoodGrey" />{' '}
              に適当な料理を入れてみて下さい！<Emoji>🐶</Emoji>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        わかった。じゃあとりあえず、
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        に適当な料理を入れてみよう。
                      </P>
                      <P>
                        <Em>
                          <EmojiWithText letter="a" />、
                          <EmojiWithText letter="b" />、
                          <EmojiWithText letter="c" />
                          を適当な組み合わせで{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に入れてみたよ。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lwoq>
              <EmojiForLetter letter="a" /> <EmojiForLetter letter="b" />{' '}
              <EmojiForLetter letter="c" /> を適当に{' '}
              <CustomEmoji type="questionFoodGrey" /> に入れてみた
            </R.Lwoq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        この弁当箱に、
                        <H args={{ name: 'plusOneEffect' }} />
                        があれば
                        <Strong>成功</Strong> <Emoji>🎉</Emoji>
                        、なければ<Strong>失敗</Strong> <Emoji>😭</Emoji>{' '}
                        ということかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。そして、
                        <H args={{ name: 'plusOneEffect' }} />
                        があるかどうかを確かめるには、以下のようにします。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Tjaf>
              <CustomEmoji type="blankNumber" /> に変換できる弁当箱と、
              <br />
              先ほどの弁当箱を合体させ…
            </R.Tjaf>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              <Emoji size="mdlg">➕</Emoji>{' '}
              <EmojiNumber number={1} size="mdlg" /> になれば
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              があるので
              <Strong>成功</Strong> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<Strong>失敗</Strong> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'plusOneEffect' }} />
            があるかチェック
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        それでは冒頭でも紹介した、 <EmojiNumber number={1} />{' '}
                        に変換できる弁当箱を使って試してみましょう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fxde>
              <EmojiNumber number={1} size="mdlg" /> に変換できる弁当箱
            </R.Fxde>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これを先ほどの弁当箱と組み合わせて、
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        し、
                        <Em>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できればいい
                        </Em>
                        んだな。
                      </P>
                      <P>
                        すなわち、
                        <Em>
                          結果が <EmojiNumber number={2} /> になれば
                          <Strong>成功</Strong> <Emoji>🎉</Emoji>、それ以外なら
                          <Strong>失敗</Strong> <Emoji>😭</Emoji>{' '}
                        </Em>
                        というわけか。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              先ほどの弁当箱を合体させ…
            </R.Nuco>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={2} size="mdlg" /> になれば
              <Strong>成功</Strong> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<Strong>失敗</Strong> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>では、上の弁当箱を実行したらどうなるか見ていこう！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        それでは、
                        <H
                          args={{
                            name: 'pressFastForward',
                            mentionRightArrow: true
                          }}
                        />
                      </P>
                      <P>
                        初級その5で説明した通り、
                        <Strong>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアがふたつ以上ある場合は、一番左の{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアからはじめます。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dhiu>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Dhiu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        続いて、また{' '}
                        <Em>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアからはじめたいのですが、
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアの一番下の段にひとつの料理(
                          <EmojiWithText letter="b" />
                          )しかないので不可能です。
                        </Em>
                      </P>
                      <P>
                        というわけで、初級その5で説明した通り、
                        <Strong>
                          次は <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          のペアから
                        </Strong>
                        はじめます。
                        <H
                          args={{
                            name: 'pressFastForward'
                          }}
                        />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Akjy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Akjy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次も前回と同じく、
                        <Strong>
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          のペアからはじめます。
                        </Strong>
                        <H
                          args={{
                            name: 'pressFastForward'
                          }}
                        />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hnyn>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hnyn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>つまり、最終的に以下のようになりました！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bwff>実行結果</R.Bwff>
          </>
        )
      },
      {
        title: <>計算箱に変換できない</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実行を終えたので、
                        <H args={{ name: 'convertToMathbox' }} />{' '}
                        したいところですが…
                      </P>
                      <P>
                        残念ながら、
                        <Strong>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xwzc>
              <Emoji>❌</Emoji> 計算箱に変換できない <Emoji>❌</Emoji>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        理由は、
                        <Em>以下の法則に沿っていないからです。</Em>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Em>
                          右上には <Emoji>🅱️</Emoji>{' '}
                          の料理がひとつないといけませんが、ここでは{' '}
                          <Emoji>🅰️</Emoji> になっている
                        </Em>
                        ので、計算箱に変換できないのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fhrd>
              右上が <Emoji>🅱️</Emoji> の<EmojiWithText letter="c" /> ではなく、
              <br />
              <Emoji>🅰️</Emoji> の<EmojiWithText letter="b" /> なので
              <br />
              計算箱に変換できない
            </R.Fhrd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        ダメか…
                        <Em>
                          もし仮に右上が
                          <EmojiWithText letter="b" />
                          ではなくて
                          <EmojiWithText letter="c" />
                          だったら、
                          <EmojiNumber number={2} /> に変換できていたのになあ。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bgxi>
              も仮にし右上が
              <EmojiWithText letter="c" />
              <br />
              だったら、
              <EmojiNumber number={2} /> に変換できていた
            </R.Bgxi>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'plusOneEffect' }} />
            は無い
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、実行しても{' '}
                        <EmojiNumber number={2} size="mdlg" />{' '}
                        に変換できる弁当箱になりませんでした。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>
              <EmojiNumber number={1} /> に変換できる弁当箱と合体させ…
            </R.Nuco>
            <ExpressionRunnerSeparator />
            <R.Xwzc>
              実行したところ、
              <br />
              <Strong>
                <EmojiNumber number={2} size="mdlg" />{' '}
                に変換できる弁当箱にならなかった
              </Strong>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だから、
                        <Em>
                          先ほどの弁当箱に、
                          <H args={{ name: 'plusOneEffect' }} />
                          は無い
                        </Em>
                        のです。つまり、<Strong>不正解でした！</Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olyw>
              <H args={{ name: 'plusOneEffect' }} />
              は無い
            </R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        残念…やっぱり、適当に{' '}
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        に料理を埋めても正解にはならないかあ…
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
        title: <>問題をもう一度</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        問題の意味が分かったでしょうか？では、もう一度聞きますね。
                      </P>
                      <P>
                        <Strong>
                          この弁当箱に、どのような法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れると…
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <Strong>
                どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
                に料理を入れると…
              </Strong>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になるでしょう？
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <Strong>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </Strong>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        繰り返しますが、先ほど適当に料理を入れた以下の弁当箱は、不正解でした！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olyw>こちらは不正解だった</R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん…問題の意味は分かったけど、答え方が分からない！
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
        title: <>答えは次のページに</>,
        content: (
          <>
            <P>
              せっかく計算箱を返してもらえるチャンスなのに、問題が難しくて村人は苦戦しているようですね。
            </P>
            <EmojiSeparator
              emojis={['❓', '😭', '❓']}
              description={<>難しすぎて見当もつかない！</>}
            />
            <P>
              しかし、<Strong>次のページで答えが判明します。</Strong>
              ぜひ先に進んでみてください！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

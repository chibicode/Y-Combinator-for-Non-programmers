import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, Ul, UlLi, Hr } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiSeparator from 'src/components/EmojiSeparator'
// import YesNoButtons from 'src/components/YesNoButtons'
// import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
// import EmojiWithText from 'src/components/EmojiWithText'
// import EmojiForLetter from 'src/components/EmojiForLetter'
// import NextLessonButton from 'src/components/NextLessonButton'

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
                      <P>
                        <Strong>この問題は非常に難しい</Strong>
                        から覚悟するんだな。ベンケイ、問題を説明するんだ！
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
                          に、ある法則に基づいて料理を入れると、特殊な効果がある弁当箱になります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              ある法則に基づいて料理を入れると、
              <br />
              特殊な効果を生む弁当箱になる
            </R.Envj>
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
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="d" />
              が「<Strong>1個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={1} />
              になる
            </R.Rbup>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、ここで問題です！</P>
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
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                        <Em>
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          の印がたくさんありますが、
                          <Strong>それぞれ何らかの料理が入ります</Strong>。
                        </Em>
                      </P>
                      <P>
                        <Em>
                          どの料理がそれぞれの{' '}
                          <CustomEmoji type="questionFoodGrey" /> に入るかは秘密
                        </Em>
                        です。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <CustomEmoji type="questionFoodGrey" />{' '}
              には何らかの料理が入ります。
              <br />
              どの料理がそれぞれに入るかは秘密！
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱を、
                        <Strong>
                          先ほどの <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させてみる
                        </Strong>
                        と、次のようになります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fljg>
              <EmojiNumber number={1} /> に変換できる弁当箱と合体
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
                          <H args={{ name: 'runAndConertToMathbox' }} />
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
                            先ほどの <CustomEmoji type="questionFoodGrey" />{' '}
                            がたくさんある弁当箱を合体させて、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Em>
                            「<H args={{ name: 'runAndConertToMathbox' }} />
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
              <CustomEmoji type="questionFoodGrey" />{' '}
              がたくさんある弁当箱を合体させ…
            </R.Jiua>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              <H args={{ name: 'runAndConertToMathbox' }} />
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
                        つまり大雑把に言えば、
                        <Strong>
                          <EmojiNumber number={1} /> が{' '}
                          <EmojiNumber number={2} /> になった
                        </Strong>
                        というわけです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど。</P>
                      <P>
                        それで、
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        にはそれぞれ何が入るか、そろそろ教えてくれる？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Em>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に何が入るかはまだ秘密
                        </Em>
                        です。とりあえず読み進めてください！
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
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="f" />
              が「<Strong>2個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={2} />
              になる
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
                          先ほどの <CustomEmoji type="questionFoodGrey" />{' '}
                          がたくさんある弁当箱と合体させてみました。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Akug>
              <CustomEmoji type="questionFoodGrey" /> がたくさんある弁当箱と合体
            </R.Akug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        繰り返しますが、
                        <Em>
                          それぞれの
                          <CustomEmoji type="questionFoodGrey" /> に何が入るかは
                          <Strong>まだ秘密</Strong>です。
                        </Em>
                      </P>
                      <P>
                        こちらを「
                        <Strong>
                          <H args={{ name: 'runAndConertToMathbox' }} />
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
              <CustomEmoji type="questionFoodGrey" />{' '}
              がたくさんある弁当箱を合体させ…
            </R.Aone>
            <ExpressionRunnerSeparator />
            <R.Qsoa>
              <H args={{ name: 'runAndConertToMathbox' }} />
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
          </>
        )
      },
      {
        title: (
          <>
            「1を足す機能 <CustomEmoji type="plusOne" />
            」と同じ効果
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Em>
                          <EmojiNumber number={1} /> が{' '}
                          <EmojiNumber number={2} /> になり、
                          <EmojiNumber number={2} /> が{' '}
                          <EmojiNumber number={3} /> になる
                        </Em>
                        ということは…
                      </P>
                      <P>
                        <Strong>実質、「1を足す」ことが行われている</Strong>
                        のかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        その通りです。復習になりますが、本稿のはじめに説明した通り、計算箱には
                        「<Strong>1を足す機能</Strong>{' '}
                        <CustomEmoji type="plusOne" />
                        」がありますよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lizi>
              計算箱には「<Strong>1を足す機能</Strong>{' '}
              <CustomEmoji type="plusOne" />
              」がある。
              <br />
              たとえばこちらを実行すると…
            </R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> を計算してくれる。
            </R.Pmdm>
            <Hr />
            <R.Raqo>一方、こちらを実行すると…</R.Raqo>
            <ExpressionRunnerSeparator />
            <R.Qsoa>
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> を計算してくれる。
            </R.Qsoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほど行ったのは、この「<Strong>1を足す機能</Strong>{' '}
                        <CustomEmoji type="plusOne" />
                        」と非常に似ていますよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jiua>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <CustomEmoji type="questionFoodGrey" />{' '}
              がたくさんある弁当箱を合体させ…
            </R.Jiua>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              すると、結果は <EmojiNumber number={2} /> になる
            </R.Pmdm>
            <Hr />
            <R.Aone>
              <EmojiNumber number={2} /> に変換できる弁当箱と、
              <br />
              <CustomEmoji type="questionFoodGrey" />{' '}
              がたくさんある弁当箱を合体させ…
            </R.Aone>
            <ExpressionRunnerSeparator />
            <R.Qsoa>
              <H args={{ name: 'runAndConertToMathbox' }} />
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
                        つまり、
                        <Strong>
                          この <CustomEmoji type="questionFoodGrey" />{' '}
                          がたくさんある弁当箱は、 計算箱における{' '}
                          <CustomEmoji type="plusOne" />{' '}
                          と同じく「1を足す」効果がある
                        </Strong>
                        のです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Biit>
              <Strong>計算箱</Strong>において「1を足す」効果がある
            </R.Biit>
            <ExpressionRunnerSeparator doubleArrow />
            <R.Envj>
              <Strong>弁当箱</Strong>において「1を足す」効果がある
            </R.Envj>
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
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          には、どういう法則で料理が入るでしょう？
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Elcl>
              <Strong>
                <CustomEmoji type="questionFoodGrey" />{' '}
                には、どういう法則で料理が入る？
              </Strong>
            </R.Elcl>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>な、なんだと…？それが問題なのか？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。
                        <Em>
                          だから先ほど、「{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に何が入るかは秘密」と言っていたのです。
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に何が入るかを当ててもらうのが問題
                        </Em>
                        ですから。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Strong>
                          この問題こそが、以前から話していた「難しい問題」だ。これを解けたら、約束通り計算箱を返してやろう！
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>😈</Emoji>,
                <CustomEmoji type="questionFoodGrey" />,
                <Emoji>🎁</Emoji>
              ]}
              description={
                <>
                  <CustomEmoji type="questionFoodGrey" /> にそれぞれ何が入るかを
                  <br />
                  当てられたら、計算箱を返してやろう！
                </>
              }
            />
          </>
        )
      },
      {
        title: <>試しに適当な料理を入れてみる</>,
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
                          問題も完全に理解できた自信がないし、理解できたとしてもどうやって解けばいいかサッパリ分からない！
                        </Em>
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

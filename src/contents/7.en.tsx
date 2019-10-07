import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
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
import { Beginner5Rules } from 'src/contents/5.jp'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        type: 'summary',
        title: <>Things will get harder</>,
        content: (
          <>
            <P>
              <Bold>Warning:</Bold> From this page, things will get much harder.
              The lunchboxes will become more complicated.
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>Things will get harder!</>}
            />
            <P>
              <Bold>But:</Bold>{' '}
              <Highlight>
                You don’t need to understand everything immediately. Even if you
                don’t completely get it, please keep reading!
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={
                <>
                  You don’t need to
                  <br />
                  understand everything immediately!
                </>
              }
            />
            <P>
              <Bold>
                There’s a lot of overlapping materials for the next few pages.
              </Bold>{' '}
              So even if you have no idea what’s going on, after reading a few
              more pages, you might understand it. <Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: <>The problem</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>As promised:</Bold> If you can solve this problem,
                        I’ll give you the mathboxes back!
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
              description={
                <>
                  If you can solve this problem,
                  <br />
                  I’ll give you the mathboxes back!
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
                        This problem is <Italic>very difficult</Italic>, so you
                        better think hard!
                      </P>
                      <P>Minion, explain the problem!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Sure. First,{' '}
                        <H
                          args={{ name: 'lookAtThisBentoBox', lowerCase: true }}
                        />
                        .
                      </P>
                      <P>
                        <Bold>Important:</Bold>{' '}
                        <Italic>
                          Each <CustomEmoji type="questionFoodGrey" /> icon
                          represents some food item.
                        </Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents some
              food item
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>It looks pretty complicated…</P>
                      <P>
                        <Bold>So:</Bold> Which food item goes into each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>That’s what you’ll need to figure out!</Bold>
                      </P>
                      <P>
                        <Highlight>
                          This question is about figuring out which food item
                          goes into each <CustomEmoji type="questionFoodGrey" />{' '}
                          icon.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              You need to figure out which food item
              <br />
              goes into each <CustomEmoji type="questionFoodGrey" /> icon!{' '}
              <Emoji>🐶</Emoji>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… ok, but how can we figure that out?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>I’m not done explaining yet!</Bold>
                      </P>
                      <P>
                        <Highlight>
                          I’ll give you more information now, and your goal is
                          to find out what goes into each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon based on
                          that information.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Okay, keep explaining then!</P>
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
            <H args={{ name: 'plusOneEffect' }} />
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
                        先ほどの弁当箱は、
                        <HighlightBold>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れると…
                        </HighlightBold>
                      </P>
                      <P>
                        <HighlightBold>
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になります。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              <HighlightBold>ある法則に基づいて</HighlightBold>料理を入れると、
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
                        がある弁当箱と
                        <HighlightBold>合体させてみます</HighlightBold>。
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
                        <HighlightBold>
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                        </HighlightBold>
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
                          <Highlight>
                            <EmojiNumber number={1} /> に変換できる弁当箱と、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            先ほどの
                            <H args={{ name: 'plusOneEffect' }} />
                            がある弁当箱を合体させて、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            「<H args={{ name: 'runAndConvertToMathbox' }} />
                            」すると、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            結果は <EmojiNumber number={2} /> になる
                          </Highlight>
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
                        <HighlightBold>
                          <EmojiNumber number={1} /> が{' '}
                          <EmojiNumber number={2} /> になった
                        </HighlightBold>
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
                        <Highlight>
                          先ほどの
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱と合体させてみました。
                        </Highlight>
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
                        <HighlightBold>
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                        </HighlightBold>
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
                        <HighlightBold>
                          <EmojiNumber number={2} /> が{' '}
                          <EmojiNumber number={3} /> になった
                        </HighlightBold>
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
                          <Highlight>
                            ある数字 <CustomEmoji type="blankNumber" />{' '}
                            に変換できる弁当箱と、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <H args={{ name: 'plusOneEffect' }} />
                            がある弁当箱を合体させ、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <H args={{ name: 'runAndConvertToMathbox' }} />
                            すると、
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>
                        <Highlight>
                          結果は <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
                        </Highlight>
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
                        <HighlightBold>
                          計算箱では、
                          <CustomEmoji type="plusOne" />{' '}
                          を使えば、「1を足す」計算を行うことができましたよね
                        </HighlightBold>
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
                        <HighlightBold>
                          計算箱における <CustomEmoji type="plusOne" />{' '}
                          と同じようなもの
                        </HighlightBold>
                        、と言えるでしょう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Biit>
              <HighlightBold>
                <CustomEmoji type="mathBox" /> 計算箱における、
                <CustomEmoji type="plusOne" /> と同じようなもの
              </HighlightBold>
            </R.Biit>
          </>
        )
      },
      {
        type: 'summary',
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
                        <HighlightBold>
                          この弁当箱に、どのような法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れると…
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <HighlightBold>
                どのような法則に基づいて
                <br />
                <CustomEmoji type="questionFoodGrey" /> に料理を入れると…
              </HighlightBold>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほどのような、
                        <HighlightBold>
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <HighlightBold>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </HighlightBold>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に何を入れたら、
                          <H args={{ name: 'plusOneEffect' }} />
                          があるか当てろってこと？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に何を入れたら
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱になる？
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>はい、その通りです！</HighlightBold>
                        <Highlight>
                          ある法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れた時に限り
                        </Highlight>
                        、<H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱になります。
                      </P>
                      <P>
                        <Highlight>
                          それがどんな法則が、当ててみよう！
                        </Highlight>
                        という問題です。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        この問題こそが、以前から話していた「難しい問題」だ。
                        <Highlight>
                          これを解けたら、約束通り計算箱を返してやろう！
                        </Highlight>
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
              description={<>この問題が解けたら、計算箱を返してやろう！</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            試しに<HighlightBold>適当な料理</HighlightBold>を入れてみる
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
                        <Highlight>
                          問題を完全に理解できた自信がないし、どうやって解けばいいかさっぱり分からない！
                        </Highlight>
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
                        <HighlightBold>
                          試しに、
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に適当な料理を入れてみると、問題を理解できると思います。
                        </HighlightBold>
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
                        <Highlight>
                          <EmojiWithText letter="a" />、
                          <EmojiWithText letter="b" />、
                          <EmojiWithText letter="c" />
                          を適当な組み合わせで{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に入れてみたよ。
                        </Highlight>
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
                        <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
                        、なければ<HighlightBold>失敗</HighlightBold>{' '}
                        <Emoji>😭</Emoji> ということかな？
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
                        があるかどうかを確かめるには、まず{' '}
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />{' '}
                        が計算できるかを確かめてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} /> が計算できるか確かめる
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、以下のように <EmojiNumber number={1} />{' '}
                        に変換できる弁当箱と合体させたときに…
                      </P>
                      <P>
                        結果が <EmojiNumber number={2} /> になれば
                        <H args={{ name: 'plusOneEffect' }} />
                        があるので
                        <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>、
                        それ以外なら
                        <HighlightBold>
                          失敗
                        </HighlightBold> <Emoji>😭</Emoji> というわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xxan>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              先ほどの弁当箱を合体させ…
            </R.Xxan>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={2} size="mdlg" /> になれば
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              があるので
              <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
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
                        では、
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />{' '}
                        が計算できるか確かめるために、冒頭にも登場した、
                        <EmojiNumber number={1} />{' '}
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
                        <Highlight>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できればいい
                        </Highlight>
                        んだな。
                      </P>
                      <P>
                        すなわち、
                        <Highlight>
                          結果が <EmojiNumber number={2} /> になれば
                          <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
                          、それ以外なら
                          <HighlightBold>
                            失敗
                          </HighlightBold> <Emoji>😭</Emoji>{' '}
                        </Highlight>
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
              <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
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
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>初級編の復習</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        今回の弁当箱では、
                        <Highlight>初級その5で学んだ法則が登場</Highlight>
                        します。
                      </P>
                      <P>
                        覚えていなくても、早送りで勝手に進んでくれるので大丈夫ですが、いちおう復習をしておきましょう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Beginner5Rules />
          </>
        )
      },
      {
        title: <>早送りしてみよう</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        初級編の復習もしたことだし、先ほど考えた弁当箱に、
                        <H args={{ name: 'plusOneEffect' }} />
                        があるかどうか見ていこう！
                      </P>
                      <P>
                        以下のように、
                        <HighlightBold>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> が計算できれば
                          <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
                        </HighlightBold>{' '}
                        なんだよな。
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
              <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        それでは、
                        <H args={{ name: 'fastForward' }} /> していきましょう！
                      </P>
                      <P>
                        まず初級編で説明した通り、
                        <HighlightBold>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアが左右ふたつ以上ある場合は、一番左の{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアからはじめます。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H
                args={{
                  name: 'pressFastForward'
                }}
              />
            </P>
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
                        <Highlight>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアからはじめたいのですが、
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          のペアの一番下の段にひとつの料理(
                          <EmojiWithText letter="b" />
                          )しかないので不可能です。
                        </Highlight>
                      </P>
                      <P>
                        というわけで、初級編で説明した通り、
                        <HighlightBold>
                          次は <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          のペアから
                        </HighlightBold>
                        はじめます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H
                args={{
                  name: 'pressFastForward'
                }}
              />
            </P>
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
                        <HighlightBold>
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          のペアからはじめます。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H
                args={{
                  name: 'pressFastForward'
                }}
              />
            </P>
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
                        <HighlightBold>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </HighlightBold>
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
                        <Highlight>
                          以下の法則に沿っていないからです。
                        </Highlight>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Highlight>
                          右上には <Emoji>🅱️</Emoji>{' '}
                          の料理がひとつないといけませんが、ここでは{' '}
                          <Emoji>🅰️</Emoji> になっている
                        </Highlight>
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
                        <Highlight>
                          もし仮に右上が
                          <EmojiWithText letter="b" />
                          ではなくて
                          <EmojiWithText letter="c" />
                          だったら、
                          <EmojiNumber number={2} /> に変換できていたのになあ。
                        </Highlight>
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
              <HighlightBold>
                <EmojiNumber number={2} size="mdlg" />{' '}
                に変換できる弁当箱にならなかった
              </HighlightBold>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だから、
                        <Highlight>
                          先ほどの弁当箱に、
                          <H args={{ name: 'plusOneEffect' }} />
                          は無い
                        </Highlight>
                        のです。つまり、
                        <HighlightBold>不正解でした！</HighlightBold>
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
                        <HighlightBold>
                          この弁当箱に、どのような法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れると…
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <HighlightBold>
                どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
                に料理を入れると…
              </HighlightBold>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <HighlightBold>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </HighlightBold>
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
              しかし、
              <HighlightBold>次のページで答えが判明します。</HighlightBold>
              ぜひ先に進んでみてください！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

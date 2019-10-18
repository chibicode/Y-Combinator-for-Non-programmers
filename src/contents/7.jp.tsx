import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Bold,
  Hr
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import InlineRunAndConvertToMathboxButton from 'src/components/InlineRunAndConvertToMathboxButton'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'
import { Beginner5Rules } from 'src/contents/5.jp'
import CardContent from 'src/components/CardContent'

export const StepOne = () => (
  <>
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
                まず、
                <HighlightBold>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアが左右ふたつ以上あるので、一番左の{' '}
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
          name: 'pressFastForward',
          mentionRightArrow: true
        }}
      />
    </P>
  </>
)

export const StepTwo = () => (
  <>
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
                というわけで、
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
  </>
)

export const StepThree = () => (
  <>
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
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>難易度が急激に上がります</>,
        content: (
          <>
            <P>
              <HighlightBold>
                このページから難易度が急激に上がります。
              </HighlightBold>
              弁当箱も、以前に比べて複雑になります。
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>難易度が上がり、弁当箱も複雑に</>}
            />
            <P>
              ただ、
              <Highlight>
                内容を完全に理解する必要はありません。少しくらい分からなくても、雰囲気で読み進めていただいて大丈夫です。
              </Highlight>
              また、先に進んでから読み返すことで理解できる場合もあるので、分からなくてもとりあえず先に進んでみてください。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>完全に理解する必要はありません！</>}
            />
          </>
        )
      },
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
                        <Highlight>
                          これから出す問題に答えることができたら、計算箱を返してやろう！
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
                        <HighlightBold>この問題は非常に難しい</HighlightBold>
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
                    </>
                  )
                }
              ]}
            />
            <R.Dvfg></R.Dvfg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        前回の復習ですが、この弁当箱は、ぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={0} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hkbs>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 0 }}
              />
            </R.Hkbs>
            <ExpressionRunnerSeparator />
            <R.Jwah />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <HighlightBold>
                          上の弁当箱と、こちらの弁当箱を合体させます。
                        </HighlightBold>
                      </P>
                      <P>
                        それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                        には何らかの料理が入るのですが、それについてはこれから説明します。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              こちらの弁当箱と合体させる。
              <br />
              それぞれの <CustomEmoji type="questionFoodGrey" /> には
              <br />
              何らかの料理が入る
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>合体させると、次のようになります。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>合体させるとこうなる</R.Stda>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、ここで質問です！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'challengeProblem',
        title: (
          <>
            <EmojiNumber number={0} /> を <EmojiNumber number={1} /> に
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
                          に、ある法則に基づいて料理を入れ、
                        </HighlightBold>
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        …を行うと、
                        <HighlightBold>
                          結果が <EmojiNumber number={1} /> になります。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              ある法則に基づいて料理を入れ、
            </R.Stda>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果は <EmojiNumber number={1} /> になる
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        もともとの弁当箱が <EmojiNumber number={0} />{' '}
                        に変換できる弁当箱だったので、
                      </P>
                      <R.Hkbs>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'd',
                            number: 0
                          }}
                        />
                      </R.Hkbs>
                      <P>
                        先ほどの <CustomEmoji type="questionFoodGrey" />{' '}
                        がたくさんある弁当箱と合体させると、
                        <HighlightBold>
                          <EmojiNumber number={0} /> が{' '}
                          <EmojiNumber number={1} /> になる
                        </HighlightBold>
                        というわけですね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={0} />,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="questionFoodGrey" />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  先ほどの <CustomEmoji type="questionFoodGrey" />{' '}
                  がたくさんある弁当箱と
                  <br />
                  合体させると、
                  <EmojiNumber number={0} /> が <EmojiNumber number={1} />{' '}
                  になる
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、ここで問題です！</P>
                      <P>
                        <HighlightBold>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          にどんな料理を入れると、結果が{' '}
                          <EmojiNumber number={1} /> になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>
              <HighlightBold>
                問題: それぞれの <CustomEmoji type="questionFoodGrey" /> に、
                <br />
                どんな料理を入れると、
              </HighlightBold>
            </R.Stda>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              <HighlightBold>
                <H args={{ name: 'runAndConvertToMathbox' }} />
                <br />
                したとき、結果が <EmojiNumber number={1} /> になる？
              </HighlightBold>
            </R.Rnug>
            <BubbleQuotes
              quotes={[
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
                      <P>では、説明しますね！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'plusOneEffect' }} />
            の説明
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
                        <H args={{ name: 'plusOneEffect' }} />
                        とはどういう効果を説明しますね。
                      </P>
                      <P>
                        まず、
                        <Highlight>
                          ある数字 <CustomEmoji type="blankNumber" />{' '}
                          に変換できる弁当箱と合体させてみます。
                        </Highlight>
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
              がある弁当箱を合体
            </R.Qrgc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>この合体した弁当箱を、</P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        すると、
                        <HighlightBold>
                          結果は <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
                        </HighlightBold>
                        になるのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jxvy>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果は <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
            </R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        これが
                        <H args={{ name: 'plusOneEffect' }} />
                        です。
                      </P>
                      <P>
                        一言で言うと、
                        <CustomEmoji type="blankNumber" /> に変換できる弁当箱を{' '}
                        <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> にできるんです！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <CustomEmoji type="blankNumber" /> に変換できる弁当箱を
                  <br />
                  <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} /> にできる
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、具体例で説明してくれる？</P>
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
                        では、具体例で説明しましょう！
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
                      </Ul>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        を押すと、
                        <Highlight>
                          結果は <EmojiNumber number={2} /> になる
                        </Highlight>
                        ということです。
                      </P>
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
                      </Ul>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        を押すと、
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
        type: 'challengeProblem',
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
                        結果が <EmojiNumber number={2} />{' '}
                        にならないといけないのです。
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
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} /> して…
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              結果が <EmojiNumber number={2} size="mdlg" /> になれば
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
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 1 }}
              />
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
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} /> して…
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              結果が <EmojiNumber number={2} size="mdlg" /> になれば
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
        ),
        footer: {
          content: (
            <>
              <CardContent
                children={
                  <>
                    <Hr />
                    <Beginner5Rules />
                  </>
                }
                preview={{
                  text: <>初級編の内容を復習する</>,
                  content: (
                    <>
                      <P>
                        <Bold>復習が必要ですか？:</Bold> 今回の弁当箱では、
                        <Highlight>初級その5で学んだ法則が登場</Highlight>
                        します。
                      </P>
                      <P>
                        復習したい場合は、↓の「初級編の内容を復習する」を押してください。
                      </P>
                    </>
                  )
                }}
              />
            </>
          )
        }
      },
      {
        title: <>早送りしてみよう</>,
        content: (
          <>
            <StepOne />
            <R.Dhiu>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Dhiu>
            <StepTwo />
            <R.Akjy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Akjy>
            <StepThree />
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
                        あとちょっとだったのに！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bgxi>
              もし仮に右上が
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
        type: 'challengeProblem',
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

// export default () => (
//   <EpisodeCardList
//     cards={[
//       {
//         type: 'summary',
//         title: <>難易度が急激に上がります</>,
//         content: (
//           <>
//             <P>
//               <HighlightBold>
//                 このページから難易度が急激に上がります。
//               </HighlightBold>
//               弁当箱も、以前に比べて複雑になります。
//             </P>
//             <EmojiSeparator
//               emojis={['⚠️', '🍱', '⚠️']}
//               description={<>難易度が上がり、弁当箱も複雑に</>}
//             />
//             <P>
//               ただ、
//               <Highlight>
//                 内容を完全に理解する必要はありません。少しくらい分からなくても、雰囲気で読み進めていただいて大丈夫です。
//               </Highlight>
//               また、先に進んでから読み返すことで理解できる場合もあるので、分からなくてもとりあえず先に進んでみてください。
//             </P>
//             <EmojiSeparator
//               emojis={['✨', '🤗', '✨']}
//               description={<>完全に理解する必要はありません！</>}
//             />
//           </>
//         )
//       },
//       {
//         title: <>問題の説明</>,
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'devil',
//                   children: (
//                     <>
//                       <P>
//                         では約束通り、
//                         <Highlight>
//                           これから出す問題に答えることができたら、計算箱を返してやろう！
//                         </Highlight>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <EmojiSeparator
//               nodes={[
//                 <CustomEmoji type="mathBox" />,
//                 <Emoji>😈</Emoji>,
//                 <CustomEmoji type="mathBox" />
//               ]}
//               description={
//                 <>
//                   これから出す難しい問題に
//                   <br />
//                   答えられたら計算箱を返してやろう！
//                 </>
//               }
//             />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'devil',
//                   children: (
//                     <>
//                       <P>
//                         <HighlightBold>この問題は非常に難しい</HighlightBold>
//                         から覚悟するんだな。ミニオン、問題を説明するんだ！
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         わかりました。まず、
//                         <H args={{ name: 'lookAtThisBentoBox' }} />。
//                       </P>
//                       <P>
//                         <CustomEmoji type="questionFoodGrey" />{' '}
//                         がたくさんありますが、それぞれの{' '}
//                         <HighlightBold>
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           には何らかの料理が入ります。
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Envj>
//               それぞれの <CustomEmoji type="questionFoodGrey" /> には
//               <br />
//               何らかの料理が入る
//             </R.Envj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>何だか複雑そうな弁当箱だなあ…</P>
//                       <P>
//                         <HighlightBold>
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           にはそれぞれ何の料理が入るの？
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         それが今回の問題です！
//                         <HighlightBold>
//                           村人のみなさんには、
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           には何の料理が入るかを当ててもらいます。
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Envj>
//               <HighlightBold>
//                 <CustomEmoji type="questionFoodGrey" /> に何が入るかを
//                 <br />
//                 当ててもらいます！<Emoji>🐶</Emoji>
//               </HighlightBold>
//             </R.Envj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>
//                         でも、まだ何の情報もないから…
//                         <CustomEmoji type="questionFoodGrey" />{' '}
//                         に何が入るかなんて分かんないよ。
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         その通りです。まだ説明することがありますから。では、続けますね！
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </>
//         )
//       },
//       {
//         title: (
//           <>
//             <H args={{ name: 'plusOneEffect' }} />
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         先ほどの弁当箱は、
//                         <HighlightBold>
//                           それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
//                           に、ある法則に基づいて料理を入れると…
//                         </HighlightBold>
//                       </P>
//                       <P>
//                         <HighlightBold>
//                           <H args={{ name: 'plusOneEffect' }} />
//                           がある弁当箱になります。
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Jguj>
//               それぞれの <CustomEmoji type="questionFoodGrey" /> に、
//               <br />
//               <HighlightBold>ある法則に基づいて</HighlightBold>料理を入れると、
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱になる
//             </R.Jguj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'surprised',
//                   children: (
//                     <>
//                       <P>
//                         背景に <CustomEmoji type="plusOneOrange" size="mdlg" />{' '}
//                         の模様がついた！
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         そうですね。背景にある{' '}
//                         <CustomEmoji type="plusOneOrange" size="mdlg" />{' '}
//                         の模様は単に、
//                         <H args={{ name: 'plusOneEffect' }} />
//                         があるということを表しているだけです。
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>
//                         その
//                         <H args={{ name: 'plusOneEffect' }} />
//                         ってどういう効果なの？
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>では、説明しますね！</P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </>
//         )
//       },
//       {
//         type: 'summary',
//         title: (
//           <>
//             <H args={{ name: 'plusOneEffect' }} />
//             の説明
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         <H args={{ name: 'plusOneEffect' }} />
//                         とはどういう効果を説明しますね。
//                       </P>
//                       <P>
//                         まず、
//                         <Highlight>
//                           ある数字 <CustomEmoji type="blankNumber" />{' '}
//                           に変換できる弁当箱と合体させてみます。
//                         </Highlight>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />

//             <R.Qrgc>
//               <CustomEmoji type="blankNumber" /> に変換できる弁当箱と、
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱を合体
//             </R.Qrgc>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>この合体した弁当箱を、</P>
//                       <InlineRunAndConvertToMathboxButton />
//                       <P>
//                         すると、
//                         <HighlightBold>
//                           結果は <CustomEmoji type="blankNumber" />{' '}
//                           <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
//                         </HighlightBold>
//                         になるのです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Jxvy>
//               <H args={{ name: 'runAndConvertToMathbox' }} />
//               <br />
//               すると、結果は <CustomEmoji type="blankNumber" />{' '}
//               <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
//             </R.Jxvy>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         これが
//                         <H args={{ name: 'plusOneEffect' }} />
//                         です。
//                       </P>
//                       <P>
//                         一言で言うと、
//                         <CustomEmoji type="blankNumber" /> に変換できる弁当箱を{' '}
//                         <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
//                         <EmojiNumber number={1} /> にできるんです！
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <EmojiSeparator
//               nodes={[
//                 <CustomEmoji type="blankNumber" />,
//                 <CustomEmoji type="singleArrow" />,
//                 <CustomEmoji type="blankNumber" />,
//                 <Emoji>➕</Emoji>,
//                 <EmojiNumber number={1} />
//               ]}
//               description={
//                 <>
//                   <CustomEmoji type="blankNumber" /> に変換できる弁当箱を
//                   <br />
//                   <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
//                   <EmojiNumber number={1} /> にできる
//                 </>
//               }
//             />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>うーん、具体例で説明してくれる？</P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </>
//         )
//       },
//       {
//         title: (
//           <>
//             <EmojiNumber number={1} /> が <EmojiNumber number={2} /> になる
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         では、具体例で説明しましょう！
//                         <H args={{ name: 'lookAtThisBentoBox' }} />:
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Fxde />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         前回の復習ですが、この弁当箱は、ぼくが計算箱に変換すると{' '}
//                         <EmojiNumber number={1} /> になります。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Rbup>
//               <H
//                 args={{ name: 'canBeConvertedCaption', letter: 'd', number: 1 }}
//               />
//             </R.Rbup>
//             <ExpressionRunnerSeparator />
//             <R.Rnug />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         では上の弁当箱を、先ほどの
//                         <H args={{ name: 'plusOneEffect' }} />
//                         がある弁当箱と
//                         <HighlightBold>合体させてみます</HighlightBold>。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Fljg>
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱と合体
//             </R.Fljg>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         では、この弁当箱を「
//                         <HighlightBold>
//                           <H args={{ name: 'runAndConvertToMathbox' }} />
//                         </HighlightBold>
//                         」するとどうなるか見てみましょう。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Ezmz />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'surprised',
//                   children: (
//                     <>
//                       <P>
//                         <EmojiNumber number={2} /> になった！
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>そうなんです！つまり、</P>
//                       <Ul>
//                         <UlLi>
//                           <Highlight>
//                             <EmojiNumber number={1} /> に変換できる弁当箱と、
//                           </Highlight>
//                         </UlLi>
//                         <UlLi>
//                           <Highlight>
//                             先ほどの
//                             <H args={{ name: 'plusOneEffect' }} />
//                             がある弁当箱を合体させて、
//                           </Highlight>
//                         </UlLi>
//                       </Ul>
//                       <InlineRunAndConvertToMathboxButton />
//                       <P>
//                         を押すと、
//                         <Highlight>
//                           結果は <EmojiNumber number={2} /> になる
//                         </Highlight>
//                         ということです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Jiua>
//               <EmojiNumber number={1} /> に変換できる弁当箱と、
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱を合体させ…
//             </R.Jiua>
//             <ExpressionRunnerSeparator />
//             <R.Pmdm>
//               <H args={{ name: 'runAndConvertToMathbox' }} />
//               <br />
//               すると、結果は <EmojiNumber number={2} /> になる
//             </R.Pmdm>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         つまりざっくり言うと、
//                         <HighlightBold>
//                           <EmojiNumber number={1} /> が{' '}
//                           <EmojiNumber number={2} /> になった
//                         </HighlightBold>
//                         というわけです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <EmojiSeparator
//               nodes={[
//                 <EmojiNumber number={1} />,
//                 <CustomEmoji type="singleArrow" />,
//                 <EmojiNumber number={2} />
//               ]}
//               description={
//                 <>
//                   ざっくり言うと、
//                   <EmojiNumber number={1} /> が <EmojiNumber number={2} />{' '}
//                   になった
//                 </>
//               }
//             />
//           </>
//         )
//       },
//       {
//         title: (
//           <>
//             <EmojiNumber number={2} /> が <EmojiNumber number={3} /> になる
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         続いて、
//                         <H args={{ name: 'lookAtThisBentoBox' }} />。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Ilvq />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         この弁当箱は、ぼくが計算箱に変換すると{' '}
//                         <EmojiNumber number={2} /> になります。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Spga>
//               <H
//                 args={{ name: 'canBeConvertedCaption', letter: 'f', number: 2 }}
//               />
//             </R.Spga>
//             <ExpressionRunnerSeparator />
//             <R.Pmdm />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         この弁当箱も、
//                         <Highlight>
//                           先ほどの
//                           <H args={{ name: 'plusOneEffect' }} />
//                           がある弁当箱と合体させてみました。
//                         </Highlight>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Akug>
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱と合体
//             </R.Akug>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         こちらを「
//                         <HighlightBold>
//                           <H args={{ name: 'runAndConvertToMathbox' }} />
//                         </HighlightBold>
//                         」するとどうなるか確かめてみてください！
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Vfdw />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'surprised',
//                   children: (
//                     <>
//                       <P>
//                         <EmojiNumber number={3} /> になった！
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>そうなんです！まとめると、以下のようになります。</P>
//                     </>
//                   )
//                 }
//               ]}
//             />

//             <R.Aone>
//               <EmojiNumber number={2} /> に変換できる弁当箱と、
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱を合体させ…
//             </R.Aone>
//             <ExpressionRunnerSeparator />
//             <R.Qsoa>
//               <H args={{ name: 'runAndConvertToMathbox' }} />
//               <br />
//               すると、結果は <EmojiNumber number={3} /> になる
//             </R.Qsoa>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         ざっくり言うと、今度は{' '}
//                         <HighlightBold>
//                           <EmojiNumber number={2} /> が{' '}
//                           <EmojiNumber number={3} /> になった
//                         </HighlightBold>
//                         のです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <EmojiSeparator
//               nodes={[
//                 <EmojiNumber number={2} />,
//                 <CustomEmoji type="singleArrow" />,
//                 <EmojiNumber number={3} />
//               ]}
//               description={
//                 <>
//                   ざっくり言うと、
//                   <EmojiNumber number={2} /> が <EmojiNumber number={3} />{' '}
//                   になった
//                 </>
//               }
//             />
//           </>
//         )
//       },
//       {
//         type: 'summary',
//         title: <>まとめ</>,
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>まとめると、</P>
//                       <Ul>
//                         <UlLi>
//                           <Highlight>
//                             ある数字 <CustomEmoji type="blankNumber" />{' '}
//                             に変換できる弁当箱と、
//                           </Highlight>
//                         </UlLi>
//                         <UlLi>
//                           <Highlight>
//                             <H args={{ name: 'plusOneEffect' }} />
//                             がある弁当箱を合体させ、
//                           </Highlight>
//                         </UlLi>
//                       </Ul>
//                       <InlineRunAndConvertToMathboxButton />
//                       <P>
//                         を押すと、
//                         <Highlight>
//                           結果は <CustomEmoji type="blankNumber" />{' '}
//                           <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
//                         </Highlight>
//                         のです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Qrgc>
//               <CustomEmoji type="blankNumber" /> に変換できる弁当箱と、
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱を合体させ…
//             </R.Qrgc>
//             <ExpressionRunnerSeparator />
//             <R.Jxvy>
//               <H args={{ name: 'runAndConvertToMathbox' }} />
//               <br />
//               すると、結果は <CustomEmoji type="blankNumber" />{' '}
//               <Emoji>➕</Emoji> <EmojiNumber number={1} /> になる
//             </R.Jxvy>
//           </>
//         )
//       },
//       {
//         type: 'challengeProblem',
//         title: <>計算箱を賭けた問題</>,
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         では、ここで問題です。
//                         <HighlightBold>
//                           この弁当箱に、どのような法則に基づいて{' '}
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           に料理を入れると…
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Envj>
//               <HighlightBold>
//                 どのような法則に基づいて
//                 <br />
//                 <CustomEmoji type="questionFoodGrey" /> に料理を入れると…
//               </HighlightBold>
//             </R.Envj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         先ほどのような、
//                         <HighlightBold>
//                           <H args={{ name: 'plusOneEffect' }} />
//                           がある弁当箱になるでしょう？
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Jguj>
//               <HighlightBold>
//                 <H args={{ name: 'plusOneEffect' }} />
//                 がある弁当箱になる？
//               </HighlightBold>
//             </R.Jguj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>
//                         つまり、
//                         <HighlightBold>
//                           それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
//                           に何を入れたら、
//                           <H args={{ name: 'plusOneEffect' }} />
//                           があるか当てろってこと？
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Qrgc>
//               それぞれの <CustomEmoji type="questionFoodGrey" /> に何を入れたら
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               がある弁当箱になる？
//             </R.Qrgc>
//             <ExpressionRunnerSeparator />
//             <R.Jxvy></R.Jxvy>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         <HighlightBold>はい、その通りです！</HighlightBold>
//                         <Highlight>
//                           ある法則に基づいて{' '}
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           に料理を入れた時に限り
//                         </Highlight>
//                         、<H args={{ name: 'plusOneEffect' }} />
//                         がある弁当箱になります。
//                       </P>
//                       <P>
//                         <Highlight>
//                           それがどんな法則が、当ててみよう！
//                         </Highlight>
//                         という問題です。
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'devil',
//                   children: (
//                     <>
//                       <P>
//                         この問題こそが、以前から話していた「難しい問題」だ。
//                         <Highlight>
//                           これを解けたら、約束通り計算箱を返してやろう！
//                         </Highlight>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <EmojiSeparator
//               nodes={[
//                 <CustomEmoji type="mathBox" />,
//                 <Emoji>😈</Emoji>,
//                 <CustomEmoji type="mathBox" />
//               ]}
//               description={<>この問題が解けたら、計算箱を返してやろう！</>}
//             />
//           </>
//         )
//       },
//       {
//         title: (
//           <>
//             試しに<HighlightBold>適当な料理</HighlightBold>を入れてみる
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'crying',
//                   children: (
//                     <>
//                       <P>
//                         うーん…
//                         <Highlight>
//                           問題を完全に理解できた自信がないし、どうやって解けばいいかさっぱり分からない！
//                         </Highlight>
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>大丈夫、安心してください！</P>
//                       <P>
//                         <HighlightBold>
//                           試しに、
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           に適当な料理を入れてみると、問題を理解できると思います。
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Envj>
//               <CustomEmoji type="questionFoodGrey" />{' '}
//               に適当な料理を入れてみて下さい！<Emoji>🐶</Emoji>
//             </R.Envj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'sad',
//                   children: (
//                     <>
//                       <P>
//                         わかった。じゃあとりあえず、
//                         <CustomEmoji type="questionFoodGrey" />{' '}
//                         に適当な料理を入れてみよう。
//                       </P>
//                       <P>
//                         <Highlight>
//                           <EmojiWithText letter="a" />、
//                           <EmojiWithText letter="b" />、
//                           <EmojiWithText letter="c" />
//                           を適当な組み合わせで{' '}
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           に入れてみたよ。
//                         </Highlight>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Lwoq>
//               <EmojiForLetter letter="a" /> <EmojiForLetter letter="b" />{' '}
//               <EmojiForLetter letter="c" /> を適当に{' '}
//               <CustomEmoji type="questionFoodGrey" /> に入れてみた
//             </R.Lwoq>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>
//                         この弁当箱に、
//                         <H args={{ name: 'plusOneEffect' }} />
//                         があれば
//                         <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
//                         、なければ<HighlightBold>失敗</HighlightBold>{' '}
//                         <Emoji>😭</Emoji> ということかな？
//                       </P>
//                     </>
//                   )
//                 },
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         そうですね。そして、
//                         <H args={{ name: 'plusOneEffect' }} />
//                         があるかどうかを確かめるには、まず{' '}
//                         <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
//                         <EmojiNumber number={1} />{' '}
//                         が計算できるかを確かめてみます。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <EmojiSeparator
//               nodes={[
//                 <EmojiNumber number={1} />,
//                 <Emoji>➕</Emoji>,
//                 <EmojiNumber number={1} />
//               ]}
//               description={
//                 <>
//                   <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
//                   <EmojiNumber number={1} /> が計算できるか確かめる
//                 </>
//               }
//             />
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         つまり、以下のように <EmojiNumber number={1} />{' '}
//                         に変換できる弁当箱と合体させたときに…
//                       </P>
//                       <P>
//                         結果が <EmojiNumber number={2} />{' '}
//                         にならないといけないのです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Xxan>
//               <EmojiNumber number={1} /> に変換できる弁当箱と、
//               <br />
//               先ほどの弁当箱を合体させ…
//             </R.Xxan>
//             <ExpressionRunnerSeparator />
//             <ExpressionRunnerCaptionOnly>
//               <Highlight>
//                 <H args={{ name: 'runAndConvertToMathbox' }} /> して…
//               </Highlight>
//             </ExpressionRunnerCaptionOnly>
//             <ExpressionRunnerSeparator />
//             <ExpressionRunnerCaptionOnly>
//               結果が <EmojiNumber number={2} size="mdlg" /> になれば
//               <br />
//               <H args={{ name: 'plusOneEffect' }} />
//               があるので
//               <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
//               <br />
//               それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
//             </ExpressionRunnerCaptionOnly>
//           </>
//         )
//       },
//       {
//         title: (
//           <>
//             <H args={{ name: 'plusOneEffect' }} />
//             があるかチェック
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         では、
//                         <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
//                         <EmojiNumber number={1} />{' '}
//                         が計算できるか確かめるために、冒頭にも登場した、
//                         <EmojiNumber number={1} />{' '}
//                         に変換できる弁当箱を使って試してみましょう。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Fxde>
//               <H
//                 args={{ name: 'canBeConvertedCaption', letter: 'd', number: 1 }}
//               />
//             </R.Fxde>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'thinking',
//                   children: (
//                     <>
//                       <P>
//                         これを先ほどの弁当箱と組み合わせて、
//                         <H args={{ name: 'runAndConvertToMathbox' }} />
//                         し、
//                         <Highlight>
//                           <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
//                           <EmojiNumber number={1} /> を計算できればいい
//                         </Highlight>
//                         んだな。
//                       </P>
//                       <P>
//                         すなわち、
//                         <Highlight>
//                           結果が <EmojiNumber number={2} /> になれば
//                           <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
//                           、それ以外なら
//                           <HighlightBold>
//                             失敗
//                           </HighlightBold> <Emoji>😭</Emoji>{' '}
//                         </Highlight>
//                         というわけか。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Nuco>
//               <EmojiNumber number={1} /> に変換できる弁当箱と、
//               <br />
//               先ほどの弁当箱を合体させ…
//             </R.Nuco>
//             <ExpressionRunnerSeparator />
//             <ExpressionRunnerCaptionOnly>
//               <Highlight>
//                 <H args={{ name: 'runAndConvertToMathbox' }} /> して…
//               </Highlight>
//             </ExpressionRunnerCaptionOnly>
//             <ExpressionRunnerSeparator />
//             <ExpressionRunnerCaptionOnly>
//               結果が <EmojiNumber number={2} size="mdlg" /> になれば
//               <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
//               <br />
//               それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
//             </ExpressionRunnerCaptionOnly>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'brave',
//                   children: (
//                     <>
//                       <P>では、上の弁当箱を実行したらどうなるか見ていこう！</P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </>
//         ),
//         footer: {
//           content: (
//             <>
//               <CardContent
//                 children={
//                   <>
//                     <Hr />
//                     <Beginner5Rules />
//                   </>
//                 }
//                 preview={{
//                   text: <>初級編の内容を復習する</>,
//                   content: (
//                     <>
//                       <P>
//                         <Bold>復習が必要ですか？:</Bold> 今回の弁当箱では、
//                         <Highlight>初級その5で学んだ法則が登場</Highlight>
//                         します。
//                       </P>
//                       <P>
//                         復習したい場合は、↓の「初級編の内容を復習する」を押してください。
//                       </P>
//                     </>
//                   )
//                 }}
//               />
//             </>
//           )
//         }
//       },
//       {
//         title: <>早送りしてみよう</>,
//         content: (
//           <>
//             <StepOne />
//             <R.Dhiu>
//               <H args={{ name: 'startWithLeftMostOneCaption' }} />
//             </R.Dhiu>
//             <StepTwo />
//             <R.Akjy>
//               <H args={{ name: 'startWithTwoCaption' }} />
//             </R.Akjy>
//             <StepThree />
//             <R.Hnyn>
//               <H args={{ name: 'startWithTwoCaption' }} />
//             </R.Hnyn>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>つまり、最終的に以下のようになりました！</P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Bwff>実行結果</R.Bwff>
//           </>
//         )
//       },
//       {
//         title: <>計算箱に変換できない</>,
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         実行を終えたので、
//                         <H args={{ name: 'convertToMathbox' }} />{' '}
//                         したいところですが…
//                       </P>
//                       <P>
//                         残念ながら、
//                         <HighlightBold>
//                           この弁当箱はぼくが計算箱に変換することができません。
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Xwzc>
//               <Emoji>❌</Emoji> 計算箱に変換できない <Emoji>❌</Emoji>
//             </R.Xwzc>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         理由は、
//                         <Highlight>
//                           以下の法則に沿っていないからです。
//                         </Highlight>
//                       </P>
//                       <R.Eozk>
//                         <H args={{ name: 'convertiblePatternCaption' }} />
//                       </R.Eozk>
//                       <P>
//                         <Highlight>
//                           右上には <Emoji>🅱️</Emoji>{' '}
//                           の料理がひとつないといけませんが、ここでは{' '}
//                           <Emoji>🅰️</Emoji> になっている
//                         </Highlight>
//                         ので、計算箱に変換できないのです。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Fhrd>
//               右上が <Emoji>🅱️</Emoji> の<EmojiWithText letter="c" /> ではなく、
//               <br />
//               <Emoji>🅰️</Emoji> の<EmojiWithText letter="b" /> なので
//               <br />
//               計算箱に変換できない
//             </R.Fhrd>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'sad',
//                   children: (
//                     <>
//                       <P>
//                         ダメか…
//                         <Highlight>
//                           もし仮に右上が
//                           <EmojiWithText letter="b" />
//                           ではなくて
//                           <EmojiWithText letter="c" />
//                           だったら、
//                           <EmojiNumber number={2} /> に変換できていたのになあ。
//                         </Highlight>
//                         あとちょっとだったのに！
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Bgxi>
//               もし仮に右上が
//               <EmojiWithText letter="c" />
//               <br />
//               だったら、
//               <EmojiNumber number={2} /> に変換できていた
//             </R.Bgxi>
//             <ExpressionRunnerSeparator />
//             <R.Pmdm />
//           </>
//         )
//       },
//       {
//         title: (
//           <>
//             <H args={{ name: 'plusOneEffect' }} />
//             は無い
//           </>
//         ),
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         つまり、実行しても{' '}
//                         <EmojiNumber number={2} size="mdlg" />{' '}
//                         に変換できる弁当箱になりませんでした。
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Nuco>
//               <EmojiNumber number={1} /> に変換できる弁当箱と合体させ…
//             </R.Nuco>
//             <ExpressionRunnerSeparator />
//             <R.Xwzc>
//               実行したところ、
//               <br />
//               <HighlightBold>
//                 <EmojiNumber number={2} size="mdlg" />{' '}
//                 に変換できる弁当箱にならなかった
//               </HighlightBold>
//             </R.Xwzc>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         だから、
//                         <Highlight>
//                           先ほどの弁当箱に、
//                           <H args={{ name: 'plusOneEffect' }} />
//                           は無い
//                         </Highlight>
//                         のです。つまり、
//                         <HighlightBold>不正解でした！</HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Olyw>
//               <H args={{ name: 'plusOneEffect' }} />
//               は無い
//             </R.Olyw>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'crying',
//                   children: (
//                     <>
//                       <P>
//                         残念…やっぱり、適当に{' '}
//                         <CustomEmoji type="questionFoodGrey" />{' '}
//                         に料理を埋めても正解にはならないかあ…
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </>
//         )
//       },
//       {
//         type: 'challengeProblem',
//         title: <>問題をもう一度</>,
//         content: (
//           <>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         問題の意味が分かったでしょうか？では、もう一度聞きますね。
//                       </P>
//                       <P>
//                         <HighlightBold>
//                           この弁当箱に、どのような法則に基づいて{' '}
//                           <CustomEmoji type="questionFoodGrey" />{' '}
//                           に料理を入れると…
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Envj>
//               <HighlightBold>
//                 どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
//                 に料理を入れると…
//               </HighlightBold>
//             </R.Envj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         <HighlightBold>
//                           <H args={{ name: 'plusOneEffect' }} />
//                           がある弁当箱になるでしょう？
//                         </HighlightBold>
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Jguj>
//               <HighlightBold>
//                 <H args={{ name: 'plusOneEffect' }} />
//                 がある弁当箱になる？
//               </HighlightBold>
//             </R.Jguj>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'dog',
//                   children: (
//                     <>
//                       <P>
//                         繰り返しますが、先ほど適当に料理を入れた以下の弁当箱は、不正解でした！
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//             <R.Olyw>こちらは不正解だった</R.Olyw>
//             <BubbleQuotes
//               quotes={[
//                 {
//                   type: 'crying',
//                   children: (
//                     <>
//                       <P>
//                         うーん…問題の意味は分かったけど、答え方が分からない！
//                       </P>
//                     </>
//                   )
//                 }
//               ]}
//             />
//           </>
//         )
//       },
//       {
//         title: <>答えは次のページに</>,
//         content: (
//           <>
//             <P>
//               せっかく計算箱を返してもらえるチャンスなのに、問題が難しくて村人は苦戦しているようですね。
//             </P>
//             <EmojiSeparator
//               emojis={['❓', '😭', '❓']}
//               description={<>難しすぎて見当もつかない！</>}
//             />
//             <P>
//               しかし、
//               <HighlightBold>次のページで答えが判明します。</HighlightBold>
//               ぜひ先に進んでみてください！
//             </P>
//             <NextLessonButton />
//           </>
//         )
//       }
//     ]}
//   />
// )

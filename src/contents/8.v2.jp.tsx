import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em } from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import EmojiWithText from 'src/components/EmojiWithText'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>サヤちゃん現る</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>😭</Emoji>,
                <CustomEmoji type="plusOneOrange" />,
                <Emoji>😭</Emoji>
              ]}
            />
            <P>ラムダ村の村人たちは、前回の問題に四苦八苦していました。</P>
            <R.Envj>
              <Strong>
                どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
                に料理を入れると…
              </Strong>
            </R.Envj>
            <R.Jguj>
              <Strong>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </Strong>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>だめだ…全然分からない！</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        これを解かないと計算箱を返してもらえないのに…どうしよう…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              その時です。ラムダ村に暮らす少女の<Strong>サヤちゃん</Strong>{' '}
              <Emoji size="mdlg">👧🏻</Emoji>{' '}
              が、問題に苦戦している村人たちに話しかけてきました。
            </P>
            <EmojiSeparator
              emojis={['✨', '👧🏻', '✨']}
              description={
                <>
                  ラムダ村に暮らす少女の<Strong>サヤちゃん</Strong>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>ねえねえ、みんな何してるの？</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>おお、サヤちゃんか。</P>
                      <P>
                        にっくき悪魔 <Emoji>😈</Emoji>{' '}
                        に計算箱を奪われてしまったんだ。奴が出題した問題を解かないと計算箱を返してもらえないんだけど、俺らには難しくて解けないんだよ。
                      </P>
                      <P>その問題は以下の通りさ。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              どのような法則に基づいて
              <br />
              <CustomEmoji size="mdlg" type="questionFoodGrey" />{' '}
              に料理を入れると…
            </R.Envj>
            <R.Omwd>
              <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              に変換できる弁当箱と合体させて
              <br />
              <H args={{ name: 'runAndConertToMathbox' }} />
              すると、
              <br />
              結果が <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              <Emoji size="mdlg">➕</Emoji>{' '}
              <EmojiNumber number={1} size="mdlg" /> になる？
            </R.Omwd>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>ふーん、じゃあサヤも解くのを手伝うよ！</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        手伝ってくれるのはありがたいけど、この問題はママゴトじゃないんだよ。俺らがどれだけ頑張っても分からなかったんだ。
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
        title: <>サヤちゃんの弁当箱</>,
        content: (
          <>
            <P>
              サヤちゃんは少し考えた後、
              <CustomEmoji type="questionFoodGrey" /> に料理を入れてみました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>
                        ねえねえ、サヤも <CustomEmoji type="questionFoodGrey" />{' '}
                        に料理を入れてみたんだけど、見てくれる？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrfw>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱
            </R.Qrfw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        ふむふむ…どうせ上手くいかないと思うけど、試してみるか。
                      </P>
                      <P>
                        前回もやったように、
                        <Em>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させて、
                        </Em>
                      </P>
                      <R.Fxde>
                        <EmojiNumber number={1} size="mdlg" />{' '}
                        に変換できる弁当箱
                      </R.Fxde>
                      <P>
                        <Em>
                          結果が <EmojiNumber number={2} /> になれば
                          <Strong>成功</Strong> <Emoji>🎉</Emoji>、 それ以外なら
                          <Strong>失敗</Strong> <Emoji>😭</Emoji>{' '}
                        </Em>
                        だよ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plde>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Plde>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={2} size="mdlg" /> になれば
              <Strong>成功</Strong> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<Strong>失敗</Strong> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <H args={{ name: 'play' }} />
                        してみよう！
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
            <H args={{ name: 'play' }} /> してみると…
          </>
        ),
        content: (
          <>
            <P>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を実行してみましょう。
              <H
                args={{
                  name: 'pressFastForward',
                  mentionRightArrow: true
                }}
              />
            </P>
            <P>
              まず、
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアがふたつ以上あるので、一番左の
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアからはじめます。
              </Em>
            </P>
            <R.Jsvg>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Jsvg>
            <P>
              続いて、また
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアからはじめたいのですが、
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                のペアの一番下の段にひとつの料理(
                <EmojiWithText letter="b" />
                )しかないので不可能です。
              </Em>
            </P>
            <P>
              というわけで、
              <Strong>
                次は
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアからはじめます。
              </Strong>
            </P>
            <R.Uexo>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Uexo>
            <P>
              次も前回と同じく、
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアからはじめたいのですが、
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              のペアの一番下の段にひとつの料理(
              <EmojiWithText letter="b" />
              )しかないので不可能です。
            </P>
            <P>
              というわけで、再度
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
                のペアからはじめます。
              </Strong>
            </P>
            <R.Hdhy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hdhy>
            <P>つまり、最終的に以下のようになりました！</P>
            <R.Rhcv />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>こ、これはもしや…？</P>
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
            <EmojiNumber number={2} /> に変換できる
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
                        この弁当箱は、ぼくが <EmojiNumber number={2} />{' '}
                        に変換できます！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rico>
              <H
                args={{ name: 'canBeConvertedCaption', number: 2, letter: 'b' }}
              />
            </R.Rico>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>ということは、サヤちゃんの弁当箱は…</P>
                      <P>
                        <Em>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させ、
                          <H args={{ name: 'runAndConertToMathbox' }} />
                          すると、結果が <EmojiNumber number={2} /> になる
                        </Em>
                        ということですね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plde>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Plde>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              すると、結果が <EmojiNumber number={2} /> になる
            </R.Pmdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> が計算できたので、
                        <Strong>成功です！</Strong> <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>やったー！</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        そんなバカな…！俺らがどれだけ頭をひねっても分からなかったのに、サヤちゃんにいとも簡単に解かれるなんて！
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

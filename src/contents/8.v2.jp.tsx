import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
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
                      <R.Rbup>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'd',
                            number: 1
                          }}
                        />
                      </R.Rbup>
                      <P>
                        <H args={{ name: 'runAndConertToMathbox' }} />
                        して、
                        <Em>
                          結果が <EmojiNumber number={2} /> になるか
                        </Em>
                        確かめてみよう。
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
                        この弁当箱は、
                        <EmojiNumber number={2} /> に変換できます！
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
      },
      {
        title: (
          <>
            <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
            <EmojiNumber number={1} /> はできる？
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        いや、まだ分からんぞ。
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> ができるからといって、
                        <Strong>
                          他の数字に対しても
                          <H args={{ name: 'plusOneEffect' }} />
                          があるとは限らない。
                        </Strong>
                      </P>
                      <P>
                        たとえば、
                        <Strong>
                          <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> はできるのかどうか、
                        </Strong>
                        確かめてみないと。
                      </P>
                    </>
                  )
                },
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <Em>
                          <EmojiNumber number={2} />
                          に変換できる弁当箱と合体させてみる
                        </Em>
                        ね！
                      </P>
                      <R.Spga>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 2
                          }}
                        />
                      </R.Spga>
                      <P>
                        <H args={{ name: 'runAndConertToMathbox' }} />
                        して、
                        <Em>
                          結果が <EmojiNumber number={3} /> になればいい
                        </Em>
                        んだよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Awwn>
              <EmojiNumber number={2} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Awwn>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={3} size="mdlg" /> になれば
              <Strong>成功</Strong> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<Strong>失敗</Strong> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>
                        まずは実行してみるね。
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <P>今回は、最後まで止まらずに早送りします！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Nlbn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>結果はこうなったよ！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Zsxo />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱は、
                        <EmojiNumber number={3} /> に変換できます！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nngz>
              <H
                args={{ name: 'canBeConvertedCaption', number: 3, letter: 'b' }}
              />
            </R.Nngz>
            <ExpressionRunnerSeparator />
            <R.Qsoa />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> が計算できたので、
                        <Strong>またしても成功です！</Strong> <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>わーい、わーい！</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>す、すごい…！</P>
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
            がある法則
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
                        ではここで正解を言いましょう。
                        <Strong>
                          サヤちゃんが考えた弁当箱は、
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱です。
                        </Strong>
                      </P>
                      <P>
                        だから、<Em>サヤちゃんの答えが正解です！</Em>
                        おめでとうございます！<Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nvqu>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱
            </R.Nvqu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>わーい、ベンケイさんありがとう！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        さらに言うと、サヤちゃんが考えた弁当箱以外にも、
                        <Strong>
                          以下の法則に当てはまる弁当箱であれば、 どれでも
                          <H args={{ name: 'plusOneEffect' }} />
                          があります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Blvt>
              この法則に当てはまる弁当箱であれば、
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある
            </R.Blvt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'girl',
                  children: (
                    <>
                      <P>サヤが考えた弁当箱の場合、</P>
                      <Ul>
                        <UlLi>
                          <Emoji>🅰️</Emoji> は <EmojiWithText letter="a" />
                        </UlLi>
                        <UlLi>
                          <Emoji>🅱️</Emoji> は <EmojiWithText letter="b" />
                        </UlLi>
                        <UlLi>
                          <CustomEmoji type="C" /> は{' '}
                          <EmojiWithText letter="c" />
                        </UlLi>
                      </Ul>
                      <P>ということかな？</P>
                    </>
                  )
                }
              ]}
            />
            <R.Oykb>
              <Emoji>🅰️</Emoji> は <EmojiWithText letter="a" />、<br />
              <Emoji>🅱️</Emoji> は <EmojiWithText letter="b" />、<br />
              <CustomEmoji type="C" /> は <EmojiWithText letter="c" />
            </R.Oykb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        その通りです。サヤちゃんが考えた弁当箱は、ちゃんとこの法則に当てはまっているのです。
                      </P>
                      <R.Blvt>
                        この法則に当てはまる弁当箱であれば、
                        <br />
                        <H args={{ name: 'plusOneEffect' }} />
                        がある
                      </R.Blvt>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>同じ法則の、他の弁当箱も試してみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        じゃあ、たとえばこの弁当箱でも、同じ法則に沿っているから、
                        <H args={{ name: 'plusOneEffect' }} />
                        があるってこと？
                      </P>
                      <R.Dvpl>
                        同じ法則で料理を入れてみた。
                        <br />
                        <H args={{ name: 'plusOneEffect' }} />
                        はあるか？
                      </R.Dvpl>
                      <P>
                        <Emoji>🅰️</Emoji> には <EmojiWithText letter="h" />、
                        <Emoji>🅱️</Emoji> には <EmojiWithText letter="i" />、
                        <CustomEmoji type="C" /> には{' '}
                        <EmojiWithText letter="j" />
                        を当てはめてみたよ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい、
                        <H args={{ name: 'plusOneEffect' }} />
                        はありますよ。
                      </P>
                      <P>
                        <Strong>
                          試しに、
                          <EmojiNumber number={3} />
                          に変換できるこちらの弁当箱と合体させて
                          <H args={{ name: 'play' }} />
                          してみましょう。
                        </Strong>
                      </P>
                      <R.Cjxe>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'k',
                            number: 3
                          }}
                        />
                      </R.Cjxe>
                      <P>
                        すなわち、
                        <Strong>
                          結果が <EmojiNumber number={4} />{' '}
                          に変換できる弁当箱になれば、
                          <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できたので成功
                        </Strong>
                        になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', skipColon: true }} />
              。(先ほどと挙動が似ているので、時間節約のために
              <Em>やや早めの速度で早送りします。</Em>)
            </P>
            <R.Oqpi />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        結果、
                        <EmojiNumber number={4} />{' '}
                        に変換できる弁当箱が残りました！
                      </P>
                      <R.Zxkq>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'i',
                            number: 4
                          }}
                        />
                      </R.Zxkq>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、
                        <EmojiNumber number={3} /> が <EmojiNumber number={4} />{' '}
                        になったので、やっぱりこちらの弁当箱にも
                        <H args={{ name: 'plusOneEffect' }} />
                        があるということか。
                      </P>
                      <R.Udxn>
                        サヤちゃんの弁当箱と同じく、
                        <br />
                        こちらの弁当箱にも
                        <H args={{ name: 'plusOneEffect' }} />
                        がある
                      </R.Udxn>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>立ち止まって振り返ろう</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>
                        俺らふだん頭を使っていないから、情報量が多すぎて疲れてしまった…
                      </P>
                      <P>ちょっとひと休みしてもらえないか？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>いいですよ！</P>
                      <P>
                        ちなみに現時点で、<Em>中級編も半分を終えました</Em>
                        。つまり、本稿の折り返し地点を越えたということです。
                        <Em>残るは中級編の残り半分と、上級編のみです。</Em>
                      </P>
                      <P>
                        いい機会なので、少し立ち止まって振り返ってみましょう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              まずこちらをご覧ください。これは、
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できる計算箱ですね。
            </P>
            <R.Mcug>
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できる計算箱。
              <br />
              実行すると
              <EmojiNumber number={2} /> になる
            </R.Mcug>
            <P>
              中級編でこれまで学んだことを一言でまとめると、
              <Strong>上の計算箱の機能は、弁当箱で再現できる</Strong>
              、ということになります。
            </P>
            <EmojiSeparator
              emojis={['🎁', '↔️', '🍱']}
              description={
                <>
                  計算箱の機能は、
                  <br />
                  弁当箱で再現することができる
                </>
              }
            />
            <P>
              まず、計算箱の <EmojiNumber number={1} /> の代わりに、
              <EmojiNumber number={1} /> に変換できる弁当箱を用意します。
            </P>
          </>
        )
      }
      // 弁当箱を使って計算箱の機能を再現できる
      // Question on top, ABC on bottom, no matter how big Question is, it will work
      // At the end: Saya has a question for benkei (but don't ask the question yet)
    ]}
  />
)

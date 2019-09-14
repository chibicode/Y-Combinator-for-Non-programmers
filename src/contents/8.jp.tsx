import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em,
  Ul,
  UlLi,
  InlineHeader,
  Hr
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import EmojiWithText from 'src/components/EmojiWithText'
import NextLessonButton from 'src/components/NextLessonButton'

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
                  type: 'saya',
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
                      <P>
                        おお、サヤちゃんか。実は、にっくき悪魔 <Emoji>😈</Emoji>{' '}
                        に計算箱を奪われてしまったんだ。
                      </P>
                      <P>
                        奴が出題した問題を解かないと計算箱を返してもらえないんだけど、俺らには難しくて解けないんだよ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>ふーん、どんな問題なの？</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>じゃあ、手短に説明するね。</P>
                      <P>
                        <Em>
                          以下の弁当箱の{' '}
                          <CustomEmoji size="mdlg" type="questionFoodGrey" />{' '}
                          に、どのような法則に基づいて料理を入れると…
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              以下の弁当箱の <CustomEmoji size="mdlg" type="questionFoodGrey" />{' '}
              に、
              <br />
              どのような法則に基づいて料理を入れると…
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        「<Strong>1を足す効果</Strong>{' '}
                        <CustomEmoji type="plusOneOrange" />
                        」がある弁当箱になるか、という問題なんだ。
                      </P>
                      <P>
                        すなわち、
                        <Em>
                          <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} />{' '}
                          を計算できるようにしないといけない
                        </Em>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Omwd>
              <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              に変換できる弁当箱と合体させて
              <br />
              <H args={{ name: 'runAndConvertToMathbox' }} />
              した時、
            </R.Omwd>
            <ExpressionRunnerSeparator />
            <R.Jxvy>
              結果が <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              <Emoji size="mdlg">➕</Emoji>{' '}
              <EmojiNumber number={1} size="mdlg" /> になる？
              <br />
              (すなわち「<Strong>1を足す効果</Strong>{' '}
              <CustomEmoji type="plusOneOrange" />
              」がある？)
            </R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
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
                  type: 'saya',
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
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        して、
                        <Em>
                          結果が <EmojiNumber number={2} /> になるか
                        </Em>
                        確かめてみよう。どうせムリだろうけど！
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
              それでは、<Emoji>👧🏻</Emoji>{' '}
              サヤちゃんの弁当箱を実行してみましょう！
            </P>
            <P>
              まず、
              <Em>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが左右ふたつ以上あるので、一番左の{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </Em>
              <H
                args={{
                  name: 'pressFastForward',
                  mentionRightArrow: true
                }}
              />
            </P>
            <R.Jsvg>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Jsvg>
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
              というわけで、
              <Strong>
                次は <InlinePrioritiesLabel>2</InlinePrioritiesLabel> のペアから
              </Strong>
              はじめます。
            </P>
            <R.Uexo>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Uexo>
            <P>
              次も前回と同じく、
              <Strong>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </Strong>
            </P>
            <R.Hdhy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hdhy>
            <P>つまり、最終的に以下のようになりました！</P>
            <R.Rhcv>
              <H args={{ name: 'play' }} /> した結果
            </R.Rhcv>
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
                          <H args={{ name: 'runAndConvertToMathbox' }} />
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
              <H args={{ name: 'runAndConvertToMathbox' }} />
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
                  type: 'saya',
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
                          <EmojiNumber number={1} /> も計算できるのかどうか
                        </Strong>
                        確かめてみないと。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={<>これも計算できる？</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <Em>
                          <EmojiNumber number={2} /> に変換できる弁当箱と、
                        </Em>
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
                      <P>サヤが考えた弁当箱を合体させてみるね！</P>
                      <R.Qrfw>
                        <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱
                      </R.Qrfw>
                      <P>
                        合体したものを
                        <H args={{ name: 'runAndConvertToMathbox' }} />
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
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={3} size="mdlg" /> になれば
              <Strong>成功</Strong> <Emoji>🎉</Emoji>
              <br />
              それ以外なら<Strong>失敗</Strong> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
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
                  type: 'saya',
                  children: (
                    <>
                      <P>結果はこうなったよ！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Zsxo>
              <H args={{ name: 'play' }} /> した結果
            </R.Zsxo>
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
                  type: 'saya',
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
              <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱には
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある
            </R.Nvqu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>わーい、ミニオンさんありがとう！</P>
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
                  type: 'saya',
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
                        <Em>
                          試しに、
                          <EmojiNumber number={3} />{' '}
                          に変換できるこちらの弁当箱と合体させて
                          <H args={{ name: 'play' }} /> してみましょう。
                        </Em>
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
                        実行したとき、
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
              <H args={{ name: 'pressFastForward', skippable: true }} />
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
                      <P>
                        つまり、
                        <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> を計算できたというわけです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、やっぱりこちらの弁当箱にも
                        <H args={{ name: 'plusOneEffect' }} />
                        があるということか。
                      </P>
                      <R.Udxn>
                        サヤちゃんの弁当箱と同じく、こちらの
                        <br />
                        弁当箱にも
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
        type: 'summary',
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
              実行すると <EmojiNumber number={2} /> になる
            </R.Mcug>
            <P>
              これまで学んだことを一言でまとめると、上の計算箱にあるような「
              <Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />
              」は、
              <Strong>弁当箱で「再現」できる</Strong>
              、ということです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOneOrange" />
              ]}
              description={
                <>
                  計算箱の「<Strong>1を足す機能</Strong>{' '}
                  <CustomEmoji type="plusOne" />
                  」は、
                  <br />
                  弁当箱で「<Strong>再現</Strong>」することができる
                </>
              }
            />
            <P>
              「<Strong>再現</Strong>
              」できる、とはどういうことでしょうか？先ほどの計算箱の例で説明しますね。
            </P>
            <R.Lizi>これを弁当箱で再現します</R.Lizi>
            <P>
              <InlineHeader>ステップ1:</InlineHeader> まず、
              <Em>
                計算箱の <EmojiNumber number={1} /> の代わりに、
                <Strong>
                  <EmojiNumber number={1} /> に変換できる
                </Strong>
                弁当箱
              </Em>
              を用意します。
            </P>
            <R.Rnug>これの代わりに…</R.Rnug>
            <ExpressionRunnerSeparator />
            <R.Rbup>
              <EmojiNumber number={1} /> に変換できる弁当箱を用意
            </R.Rbup>
            <P>
              <InlineHeader>ステップ2:</InlineHeader> 次に、
              <Em>
                計算箱の <CustomEmoji type="plusOne" /> の代わりに、
                <H args={{ name: 'plusOneEffect' }} />
              </Em>
              がある弁当箱を用意します。
            </P>
            <R.Bhpw>これの代わりに…</R.Bhpw>
            <ExpressionRunnerSeparator />
            <R.Qrfw>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を用意
              <br />(<Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱です)
            </R.Qrfw>
            <P>
              <InlineHeader>ステップ3:</InlineHeader>{' '}
              このふたつを合体させた弁当箱は、先ほども説明した通り、
              <Em>
                <H args={{ name: 'runAndConvertToMathbox' }} /> すると{' '}
                <EmojiNumber number={2} /> になります
              </Em>
              ね。
            </P>
            <R.Dyoq>
              <EmojiNumber number={1} /> に変換できる弁当箱と
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を合体
            </R.Dyoq>
            <P>
              つまり、先ほど登場した <EmojiNumber number={1} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
              を計算できる計算箱は、
            </P>
            <R.Lizi></R.Lizi>
            <P>
              <Strong>こちらの弁当箱で「再現」できる</Strong>ということです。
            </P>
            <R.Plde>
              <EmojiNumber number={1} /> <CustomEmoji type="plusOne" />{' '}
              の計算箱を、弁当箱で再現
            </R.Plde>
            <P>
              これが、「<Em>計算箱を弁当箱で再現する</Em>
              」ということなんですね。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>もっと複雑な計算箱も再現できる</>,
        content: (
          <>
            <P>もちろん、もっと複雑な計算箱も弁当箱で再現できます。</P>
            <P>
              たとえば、初級その1に登場したこちらの計算箱をご覧ください。
              <H args={{ name: 'play' }} /> すると、結果は{' '}
              <EmojiNumber number={4} /> になります。
            </P>
            <R.Jiqb />
            <P>
              これを弁当箱で再現するには、
              <Em>
                <EmojiNumber number={2} /> に変換できる弁当箱と、
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱を「<Strong>2個</Strong>」合体させればいい
              </Em>
              のです。
            </P>
            <R.Xhdq>
              <EmojiNumber number={2} /> に変換できる弁当箱と
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を「<Strong>2個</Strong>」<br />
              合体すれば、
              <EmojiNumber number={2} /> <CustomEmoji type="plusOne" />{' '}
              <CustomEmoji type="plusOne" /> の計算箱を再現できる
            </R.Xhdq>
            <P>
              上の弁当箱は実行に時間がかかるので、ここでは早送りはしませんが、
              <Em>
                <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                ボタンを押すと、答えが <EmojiNumber number={4} />{' '}
                になるのを確認できます。
              </Em>
            </P>
            <Hr />
            <P>
              まとめると、
              <Em>
                計算箱の「<Strong>1を足す機能</Strong>{' '}
                <CustomEmoji type="plusOne" />
                」は、弁当箱で再現することができる
              </Em>
              のです。このポイントさえ覚えていただければ、細かいことは分からなくても大丈夫です！
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOneOrange" />
              ]}
              description={
                <>
                  計算箱の「<Strong>1を足す機能</Strong>{' '}
                  <CustomEmoji type="plusOne" />
                  」は、
                  <br />
                  弁当箱で「<Strong>再現</Strong>」することができる
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: <>他の機能も再現できる？</>,
        content: (
          <>
            <P>
              ここで疑問なのですが、初級で説明した通り、計算箱には「
              <Strong>1を足す機能</Strong> <CustomEmoji type="plusOne" />
              」以外にも、「<Strong>1を引く機能</Strong>{' '}
              <CustomEmoji type="minusOne" />
              」や、「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」がありましたよね。
            </P>
            <R.Xmqp>
              「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
              」の例
            </R.Xmqp>
            <R.Ednv>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」の例
              <br />
              (<CustomEmoji type="plusOne" /> を <EmojiNumber number={4} />{' '}
              回繰り返す)
            </R.Ednv>
            <P>
              <Em>
                これらの機能も、弁当箱で再現することができるのでしょうか？
              </Em>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="minusOne" />,
                <Emoji>🍱</Emoji>,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
                  」や
                  <br />「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」も、
                  <br />
                  弁当箱で「再現」できる？
                </>
              }
            />
            <P>
              <Em>この疑問については、後に答えが明らかになります。</Em>
              楽しみにしていてください。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>考えつかなくても大丈夫！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>ミニオン、ひとつ愚痴を聞いてもらえるかい？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>はい、どうしました？</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        さっきの問題、難しすぎやしないかい？普通は、サヤちゃんみたいに答えをとっさに思いつかないよ！
                      </P>
                      <P>
                        <Em>
                          こういうのがパッと思いつけないと、コンピュータサイエンスを学ぶ資格はないのかな？
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrfw>
              さっきの答えの弁当箱。普通はこんなの、
              <br />
              とっさに思いつかないよ！<Emoji>😢</Emoji>
            </R.Qrfw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>いえ、そんなことは全くありませんよ。</Strong>
                        むしろ、こういう答えを思いつけるのはひと握りの天才だけです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>え、そうなの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>はい。先ほどの問題は超難問でしたから。</P>
                      <P>
                        <Strong>
                          答えを思いつけなくても、答えを見て、「なるほど、そういうことだったのか」と理解できれば、コンピュータサイエンスを学ぶ素養は十分すぎるほどあります。
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>そっか…気が楽になったよ。ありがとう！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>いえいえ。それでは、そろそろ話を戻しましょう！</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🐶', '🙂', '😈', '👧🏻']}
              description={<>話を戻しましょう！</>}
            />
          </>
        )
      },
      {
        title: <>話を戻すと…</>,
        content: (
          <>
            <P>
              悪魔による難しい問題に見事答えられたことで、村人たちは大喜びでした。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やった！サヤちゃんのおかげで問題に答えられたぞ！これで計算箱を返してもらえる！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>しかし、当のサヤちゃんには何か腑に落ちない点があるようです。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ミニオンさん、
                        <Em>おかしなことに気づいちゃったんだけど…</Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>はい、「おかしなこと」とは何ですか？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              サヤちゃんが気づいた、「<Strong>おかしなこと</Strong>
              」とは何なのでしょうか？次のページで説明していきます！
            </P>
            <EmojiSeparator emojis={['❓', '👧🏻', '❓']} />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

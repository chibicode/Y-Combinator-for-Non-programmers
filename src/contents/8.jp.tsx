import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Hr
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import CardContent from 'src/components/CardContent'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import { Problem, StepOne, StepTwo, StepThree } from 'src/contents/7.jp'
import NextLessonButton from 'src/components/NextLessonButton'

export const BlankNumberPlusOne = () => (
  <>
    <R.Eweo>
      <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱と、
      <br />
      <CustomEmoji type="blankNumber" /> に変換できる弁当箱を
      <br />
      合体させて実行すると、
    </R.Eweo>
    <ExpressionRunnerSeparator />
    <R.Jxvy>
      <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
      <EmojiNumber number={1} /> に<br />
      変換できる弁当箱になる
    </R.Jxvy>
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>どうしよう？</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[<Emoji>😭</Emoji>, <Emoji>❓</Emoji>, <Emoji>😭</Emoji>]}
            />
            <P>ラムダ村の村人たちは、前回の問題に四苦八苦していました。</P>
            <Problem />
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
          </>
        )
      },
      {
        title: <>サヤちゃん現る</>,
        content: (
          <>
            <P>
              その時です。ラムダ村に暮らす少女の
              <HighlightBold>サヤちゃん</HighlightBold>{' '}
              <Emoji size="mdlg">👧🏻</Emoji>{' '}
              が、問題に苦戦している村人たちに話しかけてきました。
            </P>
            <EmojiSeparator
              emojis={['✨', '👧🏻', '✨']}
              description={
                <>
                  ラムダ村に暮らす少女の
                  <HighlightBold>サヤちゃん</HighlightBold>
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
                      <P>
                        ふーん、
                        <HighlightBold>
                          じゃあサヤも解くのを手伝うよ！
                        </HighlightBold>
                      </P>
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
            <R.Stda>
              <Emoji>👧🏻</Emoji> それぞれの{' '}
              <CustomEmoji type="questionFoodGrey" /> に…
            </R.Stda>
            <ExpressionRunnerSeparator />
            <R.Cpim>
              <Emoji>👧🏻</Emoji> 次のように料理を入れてみた！
            </R.Cpim>
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
                        これを
                        <H args={{ name: 'run' }} /> して、
                        <EmojiNumber number={1} />{' '}
                        に変換できる弁当箱になればいいんだよな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plde>こちらの弁当箱を実行して…</R.Plde>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <EmojiNumber number={1} size="mdlg" /> に変換できる
              <br />
              弁当箱になれば <HighlightBold>成功</HighlightBold>{' '}
              <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <H args={{ name: 'run' }} />
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
            <H args={{ name: 'run' }} /> してみると…
          </>
        ),
        content: (
          <>
            <StepOne />
            <R.Jsvg>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Jsvg>
            <StepTwo />
            <R.Uexo>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Uexo>
            <StepThree />
            <R.Hdhy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hdhy>
            <P>つまり、最終的に以下のようになりました！</P>
            <R.Rhcv>
              <H args={{ name: 'run' }} /> した結果
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
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この弁当箱は、
                        <EmojiNumber number={1} /> に変換できます！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Joaq>
              <H
                args={{ name: 'canBeConvertedCaption', number: 1, letter: 'b' }}
              />
            </R.Joaq>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、<HighlightBold>成功です！</HighlightBold>{' '}
                        <Emoji>🎉</Emoji>
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
        title: <>少し掘り下げてみよう</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>とにかく、これで計算箱を返してもらえるぞ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。しかしその前に、
                        <Highlight>
                          ひとつだけ掘り下げたいことがあります
                        </Highlight>
                        。少しの間、辛抱してお聞きください！
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>掘り下げたいことだって？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。まず、ここまでをまとめると、下のように{' '}
                        <Highlight>
                          <EmojiNumber number={0} /> に変換できる弁当箱は、
                        </Highlight>
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
                        <Highlight>
                          <Emoji>👧🏻</Emoji>{' '}
                          サヤちゃんの弁当箱を使って実行すると、
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱になります。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cpim>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を使って実行すると…
            </R.Cpim>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              <EmojiNumber number={1} /> に変換できる弁当箱になる
            </R.Jzwg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、<Emoji>👧🏻</Emoji>{' '}
                        サヤちゃんの弁当箱を使うことで、
                      </P>
                      <Ul>
                        <UlLi>
                          <HighlightBold>
                            <EmojiNumber number={0} /> に変換できる弁当箱が、
                          </HighlightBold>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            <EmojiNumber number={1} /> に変換できる弁当箱になる
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                      <P>というわけですね。</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={0} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <EmojiNumber number={0} /> に変換できる弁当箱が、
                  <br />
                  <EmojiNumber number={1} /> に変換できる弁当箱になる
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={1} /> や <EmojiNumber number={2} />{' '}
            と組み合わせた場合は？
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
                      <P>では、ここで疑問なのですが… </P>
                      <P>
                        <Highlight>
                          <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を、
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と組み合わせて
                          <H args={{ name: 'run' }} />{' '}
                          すると、結果はどうなるでしょう？
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rqer>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を組み合わせて…
            </R.Rqer>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'run' }} /> するとどうなる？
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、分からないなあ…</P>
                      <P>
                        先ほどは、
                        <EmojiNumber number={0} /> が <EmojiNumber number={1} />{' '}
                        になったけど、
                        <Highlight>
                          <EmojiNumber number={1} /> はどうなるだろう？
                        </Highlight>
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
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  先ほどは、
                  <EmojiNumber number={0} /> が <EmojiNumber number={1} />{' '}
                  になったけど…
                </>
              }
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  <EmojiNumber number={1} /> は何になる？
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>では、試してみましょう！</P>
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
            <EmojiNumber number={1} /> は何になる？
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
                        今回は、こちらの <EmojiNumber number={1} />{' '}
                        に変換できる弁当箱を使ってみます！
                      </P>
                      <R.Ooya>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 1
                          }}
                        />
                      </R.Ooya>
                      <P>
                        これを <Emoji>👧🏻</Emoji>{' '}
                        サヤちゃんの弁当箱と合体させてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Awwn>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱と合体
            </R.Awwn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <H args={{ name: 'run' }} />{' '}
                        してみましょう！今回は、途中で止まりません。
                        <H args={{ name: 'runSkippableToTheEnd' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nlbn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        最後に残ったこちらの弁当箱は、
                        <EmojiNumber number={2} /> に変換できる弁当箱です！
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>ということは…</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={1} /> に変換できる弁当箱が、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={2} />{' '}
                            に変換できる弁当箱になったのか？
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rqer>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を組み合わせて…
            </R.Rqer>
            <ExpressionRunnerSeparator />
            <R.Cawl>
              <H args={{ name: 'run' }} /> すると、
              <br />
              <EmojiNumber number={2} /> に変換できる弁当箱になる
            </R.Cawl>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、<Emoji>👧🏻</Emoji>{' '}
                        サヤちゃんの弁当箱を使うことで、
                        <EmojiNumber number={1} /> が <EmojiNumber number={2} />{' '}
                        になった、というわけですね。
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
                  <EmojiNumber number={1} /> が <EmojiNumber number={2} />{' '}
                  になった
                </>
              }
            />
          </>
        )
      },
      {
        title: <>1を足すことができる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、<Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を使うと、
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={0} /> が{' '}
                            <EmojiNumber number={1} /> になり、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={1} /> が{' '}
                            <EmojiNumber number={2} /> になります。
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={0} />,
                          <CustomEmoji type="singleArrow" />,
                          <EmojiNumber number={1} />
                        ]}
                        noBottomMargin
                      />
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={1} />,
                          <CustomEmoji type="singleArrow" />,
                          <EmojiNumber number={2} />
                        ]}
                        noTopMargin
                        description={
                          <>
                            <EmojiNumber number={0} /> が{' '}
                            <EmojiNumber number={1} /> に、
                            <EmojiNumber number={1} /> が{' '}
                            <EmojiNumber number={2} /> に
                          </>
                        }
                      />
                      <P>つまり、どういうことか分かりますか？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        もしかして…
                        <HighlightBold>
                          <EmojiNumber number={1} /> を足すことができるのかな？
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>サヤちゃん、その通りです！</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>え、どういうこと？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <Highlight>
                          仮に <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱と{' '}
                          <CustomEmoji type="blankNumber" />{' '}
                          に変換できる弁当箱を合体させて実行すると、
                        </Highlight>
                      </P>
                      <P>
                        <HighlightBold>
                          結果は <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱になる
                        </HighlightBold>
                        、というわけです！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <BlankNumberPlusOne />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <CustomEmoji type="blankNumber" /> が{' '}
                        <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> になるから、「
                        <HighlightBold>1を足すことができる</HighlightBold>
                        」というわけですね。
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
                  <CustomEmoji type="blankNumber" /> が{' '}
                  <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} /> になる
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            計算箱の <CustomEmoji type="plusOne" /> と同じことができる
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
                        ここで思い出してほしいのですが…計算箱にも「
                        <H args={{ name: 'plusOneFeature' }} />
                        」がありますよね。
                      </P>
                      <P>
                        計算箱ではこれを使うことで、何らかの数字に1を足すことができます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              計算箱は、「
              <H args={{ name: 'plusOneFeature' }} />
              」を使うことで…
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Ymtp>何らかの数字に1を足すことができる</R.Ymtp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        今回学んだのは、
                        <HighlightBold>
                          「1を足す」という計算は、弁当箱でも行うことができる
                        </HighlightBold>
                        、ということです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  「1を足す」という計算は、
                  <br />
                  弁当箱でも行うことができる
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
                        弁当箱を使う場合は、
                        <Highlight>
                          <CustomEmoji type="plusOne" /> の代わりに{' '}
                          <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を使う
                        </Highlight>
                        ことで、1を足す計算を行うことができます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <BlankNumberPlusOne />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <Highlight>
                          計算箱の「
                          <H args={{ name: 'plusOneFeature' }} />
                          」は、弁当箱を使って「<Bold>再現</Bold>」できる
                        </Highlight>
                        ということなんです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'plusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
          </>
        )
      },
      {
        title: <>もっと複雑な計算箱も再現できる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        もちろん、もっと複雑な計算箱も弁当箱で再現できます。
                      </P>
                      <P>
                        たとえば、初級その1に登場したこちらの計算箱をご覧ください。
                        <H args={{ name: 'run' }} /> すると、結果は{' '}
                        <EmojiNumber number={4} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jiqb />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        これを弁当箱で「<HighlightBold>再現</HighlightBold>
                        」するには、どうすればいいか分かりますか？
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        分かった！まず、
                        <EmojiNumber number={2} /> に変換できる弁当箱を用意して…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ehsw>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'f',
                  number: 2
                }}
              />
            </R.Ehsw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そして、先ほどの <Emoji>👧🏻</Emoji> サヤの弁当箱と「
                        <HighlightBold>2回</HighlightBold>
                        」組み合わせればいいんじゃないかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Caem>
              <EmojiNumber number={2} /> に変換できる弁当箱を、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱と
              <br />「<HighlightBold>2回</HighlightBold>
              」組み合わせることで、
              <br />
              <EmojiNumber number={2} /> <CustomEmoji type="plusOne" />{' '}
              <CustomEmoji type="plusOne" /> を再現する
            </R.Caem>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        正解です！では、
                        <H args={{ name: 'run' }} /> を押してみてください。
                      </P>
                      <P>
                        (
                        <Highlight>
                          今回は時間省略のため、途中のステップを見せるのは省略します！
                        </Highlight>
                        )
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Byaf></R.Byaf>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        最後に残ったこちらの弁当箱は、
                        <EmojiNumber number={4} /> に変換できる弁当箱です！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ifqp>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'b',
                  number: 4
                }}
              />
            </R.Ifqp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、先ほどの計算箱を「再現」できた、というわけですね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Tcyv>こちらの計算箱は…</R.Tcyv>
            <ExpressionRunnerSeparator />
            <R.Kizi></R.Kizi>
            <Hr />
            <R.Oifs>こちらの弁当箱で「再現」できる！</R.Oifs>
            <ExpressionRunnerSeparator />
            <R.Ldcq></R.Ldcq>
            <Hr />
            <P>
              まとめると、
              <Highlight>
                計算箱の「
                <H args={{ name: 'plusOneFeature' }} />
                」は、弁当箱で再現することができる
              </Highlight>
              のです。このポイントさえ覚えていただければ、細かいことは分からなくても大丈夫です！
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'plusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
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
                    <P>
                      <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱以外にも、
                      <HighlightBold>
                        以下の法則に当てはまる弁当箱であれば、どれでも 「
                        <H args={{ name: 'plusOneFeature' }} />
                        」を再現できます。
                      </HighlightBold>
                    </P>
                    <R.Blvt>
                      この法則に当てはまる弁当箱であれば、
                      <br />
                      「<H args={{ name: 'plusOneFeature' }} />
                      」を再現できる
                    </R.Blvt>
                    <P>
                      <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱の場合、
                    </P>
                    <Ul>
                      <UlLi>
                        <Emoji>🅰️</Emoji> は <EmojiWithText letter="a" />
                      </UlLi>
                      <UlLi>
                        <Emoji>🅱️</Emoji> は <EmojiWithText letter="b" />
                      </UlLi>
                      <UlLi>
                        <CustomEmoji type="C" /> は <EmojiWithText letter="c" />
                      </UlLi>
                    </Ul>
                    <P>でした。</P>
                    <R.Oykb>
                      <Emoji>🅰️</Emoji> は <EmojiForLetter letter="a" />、
                      <Emoji>🅱️</Emoji> は <EmojiForLetter letter="b" />、
                      <CustomEmoji type="C" /> は <EmojiForLetter letter="c" />
                    </R.Oykb>
                    <P>他にも、例えば</P>
                    <Ul>
                      <UlLi>
                        <Emoji>🅰️</Emoji> は <EmojiWithText letter="h" />
                      </UlLi>
                      <UlLi>
                        <Emoji>🅱️</Emoji> は <EmojiWithText letter="i" />
                      </UlLi>
                      <UlLi>
                        <CustomEmoji type="C" /> は <EmojiWithText letter="j" />
                      </UlLi>
                    </Ul>
                    <P>
                      にしても、「
                      <H args={{ name: 'plusOneFeature' }} />
                      」を再現することができます。
                    </P>
                    <R.Dvpl>
                      <Emoji>🅰️</Emoji> は <EmojiForLetter letter="h" />、
                      <Emoji>🅱️</Emoji> は <EmojiForLetter letter="i" />、
                      <CustomEmoji type="C" /> は <EmojiForLetter letter="j" />
                      。<br />
                      これも「
                      <H args={{ name: 'plusOneFeature' }} />
                      」を
                      <br />
                      再現できる！
                    </R.Dvpl>
                    <P>
                      つまり、「
                      <H args={{ name: 'plusOneFeature' }} />
                      」を再現できる弁当箱は、<Emoji>👧🏻</Emoji>{' '}
                      サヤちゃんが考えた弁当箱以外にもたくさんあるということですね！
                    </P>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>ちなみに:</Bold> 「
                        <H args={{ name: 'plusOneFeature' }} />
                        」を再現できる弁当箱は、
                        <HighlightBold>
                          <Emoji>👧🏻</Emoji>{' '}
                          サヤちゃんが考えた弁当箱以外にもあります。
                        </HighlightBold>
                        つまり、正解は他にもあるのです。
                      </P>
                      <P>
                        気になる方は、↓の「続きを読む」を押してみてください。
                        (読まなくても先に進めます！)
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
        type: 'challengeProblem',
        title: <>他の機能も再現できる？</>,
        content: (
          <>
            <P>
              ここで疑問なのですが、初級で説明した通り、計算箱には「
              <H args={{ name: 'plusOneFeature' }} />
              」以外にも、「
              <H args={{ name: 'minusOneFeature' }} />
              」や、「
              <H args={{ name: 'repeatFeature' }} />
              」がありましたよね。
            </P>
            <R.Xmqp>
              「<H args={{ name: 'minusOneFeature' }} />
              」の例
            </R.Xmqp>
            <R.Ednv>
              「<H args={{ name: 'repeatFeature' }} />
              」の例
              <br />
              (<CustomEmoji type="plusOne" /> を <EmojiNumber number={4} />{' '}
              回繰り返す)
            </R.Ednv>
            <P>
              <Highlight>
                これらの機能も、弁当箱で再現することができるのでしょうか？
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="minusOne" />,
                <Emoji>🍱</Emoji>,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'minusOneFeature' }} />
                  」や
                  <br />「<H args={{ name: 'repeatFeature' }} />
                  」も、
                  <br />
                  弁当箱で「再現」できる？
                </>
              }
            />
            <P>
              <Highlight>
                この疑問については、後に答えが明らかになります。
              </Highlight>
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
                        <Highlight>
                          こういうのがパッと思いつけないと、コンピュータサイエンスを学ぶ資格はないのかな？
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vcqp>
              さっきの答えの弁当箱。普通はこんなの、
              <br />
              とっさに思いつかないよ！<Emoji>😢</Emoji>
            </R.Vcqp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          いえ、そんなことは全くありませんよ。
                        </HighlightBold>
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
                        <HighlightBold>
                          答えを思いつけなくても、答えを見て、「なるほど、そういうことだったのか」と理解できれば、コンピュータサイエンスを学ぶ素養は十分すぎるほどあります。
                        </HighlightBold>
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
                        <Highlight>
                          おかしなことに気づいちゃったんだけど…
                        </Highlight>
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
              サヤちゃんが気づいた、「
              <HighlightBold>おかしなこと</HighlightBold>
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

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Hr,
  Bold
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import BottomRightBadge from 'src/components/BottomRightBadge'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiWithText from 'src/components/EmojiWithText'
import CardContent from 'src/components/CardContent'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { WhatIsComputer } from 'src/contents/16.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>返してもらった計算箱は…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>では、計算箱を返してやろう！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>返してもらった計算箱</R.Rviy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>あれ…これだけか？</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これは「
                        <H args={{ name: 'plusOneFeature' }} />
                        」がある計算箱だけど…
                      </P>
                      <P>
                        「<H args={{ name: 'minusOneFeature' }} />
                        」がある計算箱や、「
                        <H args={{ name: 'repeatFeature' }} />
                        」がある計算箱はどこにいったんだ？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Ditw>
                    <H args={{ name: 'minusOneFeature' }} />
                  </R.Ditw>
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <H args={{ name: 'repeatFeature' }} />
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
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
                        <HighlightBold>
                          それらは、まだ返すわけにはいかないな。
                        </HighlightBold>
                      </P>
                      <P>
                        <Highlight>
                          いまお前たちに返せるのは、「
                          <H args={{ name: 'plusOneFeature' }} />
                          」がある計算箱だけだ。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>な、なんだってー！</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        話が違うじゃないか！さっきの問題を解いたら、計算箱を返してくれると言っただろう？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        計算箱を返すとは言ったが…
                        <HighlightBold>
                          計算箱のすべての機能を返すとは言っていないからな！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>そ、そんなー！嘘つきじゃないか！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>まあ、わたしは悪魔だからな。</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>どうすればいい？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        じゃあ、どうしたらすべての機能を返してもらえるんだ？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そうだな…先ほどの問題ではお前たちに、
                        <Highlight>
                          計算箱の「
                          <H args={{ name: 'plusOneFeature' }} />
                          」を弁当箱で再現してもらった
                        </Highlight>
                        よな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              計算箱の「
              <H args={{ name: 'plusOneFeature' }} />
              」を…
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>弁当箱で再現した</R.Eweo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        だから、
                        <Highlight>
                          「<H args={{ name: 'minusOneFeature' }} />
                          」や「
                          <H args={{ name: 'repeatFeature' }} />
                          」を返してほしかったら、
                          <HighlightBold>
                            それらを同じように弁当箱で再現してみることだな！
                          </HighlightBold>
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Ditw>
                    <H args={{ name: 'minusOneFeature' }} />
                  </R.Ditw>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <H args={{ name: 'repeatFeature' }} />
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>えー！</P>
                      <P>
                        「<H args={{ name: 'plusOneFeature' }} />
                        」を再現するのにも苦戦したのに、「
                        <H args={{ name: 'minusOneFeature' }} />
                        」や「
                        <H args={{ name: 'repeatFeature' }} />
                        」を再現するなんて、できっこないよ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>だったら諦めることだな。</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        で、でも…「
                        <H args={{ name: 'minusOneFeature' }} />
                        」や「
                        <H args={{ name: 'repeatFeature' }} />
                        」がないと、
                        <Highlight>
                          <HighlightBold>
                            引き算や、大きな数の足し算・引き算
                          </HighlightBold>
                          ができないよ！
                        </Highlight>
                      </P>
                      <P>俺らは計算箱がないと何もできないんだ！</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>頑張って弁当箱で再現するしかないのか…</P>
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
            「<H args={{ name: 'minusOneFeature' }} />」 を再現するヒント
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
                        もちろん、ヒント無しでやれとは言わん。前回同様、ヒントを出してやろうじゃないか。
                      </P>
                      <P>ミニオン、ヒントを説明したまえ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        わかりました。では、
                        <Highlight>
                          「
                          <H args={{ name: 'minusOneFeature' }} />」
                          を弁当箱で再現するヒント
                        </Highlight>
                        を教えましょう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              「<H args={{ name: 'minusOneFeature' }} />
              」を
              <br />
              どうやって再現する？
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Jfgb></R.Jfgb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        「
                        <H args={{ name: 'minusOneFeature' }} />
                        」を弁当箱で再現するには、
                        <Highlight>
                          以下の弁当箱にある{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れる
                        </Highlight>
                        必要があります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              ある法則に基づいて料理を入れると、
              <br />
              「
              <H args={{ name: 'minusOneFeature' }} />
              」を
              <br />
              再現することができる
            </R.Pbop>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なんか、めちゃくちゃ複雑な弁当箱だな…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        複雑ですが、正しく{' '}
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        に料理を当てはめることができれば、以下のように1を引く計算を行うことができます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xqjd>
              <CustomEmoji type="blankNumber" /> に変換できる弁当箱と
              <br />
              合体させ…
            </R.Xqjd>
            <ExpressionRunnerSeparator />
            <R.Gvxz>
              <H args={{ name: 'run' }} /> すると、
              <br />
              <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} /> に変換できる弁当箱になる
            </R.Gvxz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <Highlight>
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          にそれぞれ何が入るか考えてみてください！
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん、こんな複雑な弁当箱の{' '}
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        を正しい法則で埋めるなんて…何日かかってもできなさそうだ！
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
        title: <>サヤちゃんが考えた弁当箱</>,
        content: (
          <>
            <P>
              村人たちが困っていると、またサヤちゃんが何かひらめいたようです。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>ねえねえ、サヤも試しにやってみたんだけど…</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>え…サヤちゃん、まさか答えが分かったというのかい？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>とりあえずこれを見てみて！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              <Emoji>👧🏻</Emoji> それぞれの{' '}
              <CustomEmoji type="questionFoodGrey" /> に…
            </R.Pbop>
            <ExpressionRunnerSeparator />
            <R.Cldb>
              <Emoji>👧🏻</Emoji> 次のように料理を入れてみた！
            </R.Cldb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        ふむふむ…まさか今回も一発で正解なんてことはありえないと思うけど、とりあえず試してみるか。
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        まず、
                        <Highlight>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させてみよう！
                        </Highlight>
                      </P>
                      <P>
                        それで、
                        <HighlightBold>
                          結果が <EmojiNumber number={0} /> になれば
                        </HighlightBold>
                        、
                        <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} />{' '}
                        を計算できるということだよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hiag>
              <EmojiNumber number={1} /> に変換できる弁当箱と
              <br />
              合体させて…
            </R.Hiag>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              実行したときに、
              <EmojiNumber number={0} size="mdlg" /> に変換できる
              <br />
              弁当箱になれば、
              <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />を<br />
              計算できるので<HighlightBold>成功</HighlightBold>{' '}
              <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、こちらの{' '}
                        <Highlight>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させて、
                          <H args={{ name: 'run' }} /> してみよう！
                        </Highlight>
                      </P>
                      <R.Dqdv>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 1
                          }}
                        />
                      </R.Dqdv>
                      <P>合体させるとこうなるよ！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Sldg>
              <EmojiNumber number={1} /> に変換できる弁当箱と合体
            </R.Sldg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        よし、
                        <H args={{ name: 'run' }} /> してみよう！
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
            <P>
              それでは、
              <H
                args={{
                  name: 'pressRun',
                  skippableToTheStoppingPoint: true
                }}
              />
            </P>
            <R.Zwut></R.Zwut>
            <BubbleQuotes
              quotes={[
                {
                  type: 'relieved',
                  children: (
                    <>
                      <P>複雑すぎて、目で追うのがしんどい…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          すべてを目で追う必要はないですよ！
                        </Highlight>
                        なんとなく、「へー、こんなふうに進んでいくんだ」と思っていただければ大丈夫です。
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        それより見てみて！
                        <HighlightBold>
                          途中で{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          が同じ <EmojiWithText letter="f" /> になったよ！
                        </HighlightBold>
                      </P>
                      <P>
                        前回と同じように
                        <Highlight>
                          特別ルールで、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          が別の料理に変わる
                        </Highlight>
                        んだよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              特別ルールを実行するには、
              <Highlight>
                <H args={{ name: 'next' }} /> を押してみてください！
              </Highlight>
            </P>
            <R.Xusi></R.Xusi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね！結果が狂わないように、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        の <EmojiWithText letter="f" /> を{' '}
                        <EmojiWithText letter="a" /> に変えました。
                      </P>
                      <P>
                        では、
                        <H args={{ name: 'run' }} />{' '}
                        して最後まで見てみましょう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lipt />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        最終的に残った以下の弁当箱は、
                        <EmojiNumber number={0} /> に変換できる弁当箱です！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zzhq>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'b',
                  number: 0
                }}
              />
            </R.Zzhq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>ということは、サヤちゃんの弁当箱は…</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={1} />{' '}
                            に変換できる弁当箱と合体させて実行すると、{' '}
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={0} /> に変換できる弁当箱になる
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>ということですね。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Hiag>
              <EmojiNumber number={1} /> に変換できる弁当箱と
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Hiag>
            <ExpressionRunnerSeparator />
            <R.Nbck>
              実行すると、
              <br />
              <EmojiNumber number={0} /> に変換できる弁当箱になる
            </R.Nbck>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} /> が計算できたので、
                        <HighlightBold>成功です！</HighlightBold>{' '}
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
            <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
            <EmojiNumber number={1} /> はできる？
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
                        ぐぬぬ…しかし、
                        <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} /> が計算できたからといって、
                        <Highlight>
                          「<H args={{ name: 'minusOneFeature' }} />
                          」を再現できたとはまだ言い切れない
                        </Highlight>
                        ぞ。
                      </P>
                      <P>
                        たとえば、
                        <HighlightBold>
                          <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
                          <EmojiNumber number={1} /> は計算できるのかな？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gqct>
              <EmojiNumber number={2} /> に変換できる弁当箱と
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Gqct>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              実行したときに、
              <EmojiNumber number={1} size="mdlg" /> に変換できる
              <br />
              弁当箱になれば<HighlightBold>成功</HighlightBold>{' '}
              <Emoji>🎉</Emoji>
              <br />
              それ以外なら<HighlightBold>失敗</HighlightBold> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        じゃあ、
                        <Highlight>
                          <EmojiNumber number={2} />{' '}
                          に変換できる弁当箱と合体させてみる
                        </Highlight>
                        ね！
                      </P>
                      <R.Mzys>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 2
                          }}
                        />
                      </R.Mzys>
                      <P>合体させるとこうなるよ！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Dtle>
              <EmojiNumber number={2} /> に変換できる弁当箱と合体
            </R.Dtle>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>では、実行してみよう！</P>
                      <Ul>
                        <UlLi>
                          今回は、
                          <Highlight>最後まで止まらずに実行するね！</Highlight>
                        </UlLi>
                        <UlLi>
                          複雑なので、
                          <Highlight>目で追わなくても大丈夫だよ！</Highlight>
                        </UlLi>
                        <UlLi>
                          ちょっと時間がかかるので、待てない方は下の「
                          <HighlightBold>
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </HighlightBold>
                          」を押してね！
                        </UlLi>
                      </Ul>
                      <P>
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ifiq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        最終的に残った以下の弁当箱は、
                        <EmojiNumber number={1} /> に変換できる弁当箱です！
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>ということは、サヤちゃんの弁当箱は…</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={2} />{' '}
                            に変換できる弁当箱と合体させて実行すると、{' '}
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={1} /> に変換できる弁当箱になる
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>ということですね。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Gqct>
              <EmojiNumber number={2} /> に変換できる弁当箱と
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Gqct>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              実行すると、
              <br />
              <EmojiNumber number={1} /> に変換できる弁当箱になる
            </R.Jzwg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} /> が計算できたので、
                        <HighlightBold>またしても成功です！</HighlightBold>{' '}
                        <Emoji>🎉</Emoji>
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
                  type: 'devil',
                  children: (
                    <>
                      <P>ぐぬぬ…</P>
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
            「<H args={{ name: 'minusOneFeature' }} />
            」を再現できた！
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
                      <P>まさか、こうも簡単に正解されるとは思わなかったが…</P>
                      <P>
                        <HighlightBold>
                          サヤちゃんが考えた弁当箱は、 「
                          <H args={{ name: 'minusOneFeature' }} />」
                          を再現できる弁当箱だ！
                        </HighlightBold>{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              「<H args={{ name: 'minusOneFeature' }} />」 は…
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>
              <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱で、
              <br />
              再現できる！
            </R.Bgko>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>やった！ということは、正解だね！</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        よくこんなの分かったなあ。サヤちゃんは天才なのかもしれない！
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そんなことないよ！でも、これで「
                        <H args={{ name: 'minusOneFeature' }} />
                        」を再現できたね！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'minusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
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
                        ちなみに、今回の「
                        <H args={{ name: 'minusOneFeature' }} />
                        」を再現する問題も、超難問です。だから、サヤちゃんのように答えを思いつけなくても大丈夫です。
                      </P>
                      <P>
                        前回話した通り、
                        <Highlight>
                          答えを思いつけなくても、答えを見て、「なるほど、そういうことだったのか」と理解できれば、コンピュータサイエンスを学ぶ素養は十分すぎるほどあります。
                        </Highlight>
                      </P>
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
                    <P>
                      <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱以外にも、
                      <HighlightBold>
                        以下の法則に当てはまる弁当箱であれば、どれでも 「
                        <H args={{ name: 'minusOneFeature' }} />
                        」を再現できます。
                      </HighlightBold>
                    </P>
                    <R.Cbmn>
                      この法則に当てはまる弁当箱であれば、
                      <br />
                      「<H args={{ name: 'minusOneFeature' }} />
                      」を再現できる
                    </R.Cbmn>
                    <P>
                      たとえば、以下のような弁当箱でも、「
                      <H args={{ name: 'minusOneFeature' }} />
                      」を再現することができます。
                    </P>
                    <R.Onyr>
                      これも「
                      <H args={{ name: 'minusOneFeature' }} />
                      」を再現できる
                    </R.Onyr>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>ちなみに:</Bold> 「
                        <H args={{ name: 'minusOneFeature' }} />
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
        title: <>中級はここまで！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        どうだ、「
                        <H args={{ name: 'minusOneFeature' }} />
                        」も、弁当箱で再現したぞ！(やったのは俺らじゃなくて{' '}
                        <Emoji>👧🏻</Emoji> サヤちゃんだけど…)
                      </P>
                      <P>
                        約束通り、「
                        <H args={{ name: 'minusOneFeature' }} />
                        」がある計算箱も返してもらう！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ぐぬぬ…では、返してやろう！</P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やったー！<Emoji>🎉</Emoji> <Emoji>🎉</Emoji>{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              「<H args={{ name: 'minusOneFeature' }} />
              」も返してもらった！
            </R.Ditw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        しかし、
                        <Highlight>
                          「<H args={{ name: 'repeatFeature' }} />
                          」がある計算箱は、まだ返すわけにはいかないな。
                        </Highlight>
                      </P>
                      <P>
                        返してほしかったら、これらも弁当箱で再現してみるんだな！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Bwnp>
                    <CustomEmoji type="plusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Bwnp>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        難しそう…しかし、こっちには <Emoji>👧🏻</Emoji>{' '}
                        サヤちゃんがいる！彼女ならなんとかしてくれるはずだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>ちなみに、中級編はここまでだ。</Highlight>
                        決着は、次からはじまる上級編でつけよう！
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、望むところだ！上級編へ進もう！</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      },
      {
        type: 'sideNote',
        title: (
          <>
            余談: Yコンビネータや、コンピュータサイエンスと何の繋がりがあるの？
          </>
        ),
        preview: {
          afterText: (
            <>
              <P>
                「上級編が終わるまで説明はいいや」という方は、こちらのボタンから先に進んでください！
              </P>
              <NextLessonButton />
            </>
          ),
          content: (
            <>
              <P>
                ここまで読んで、「パズルは何となく分かるけど、
                <Highlight>
                  これってYコンビネータや、コンピュータサイエンスと何の繋がりがあるの？
                </Highlight>
                」と思われた方も多いかもしれません。
              </P>
              <EmojiSeparator
                emojis={['💻', '🤔', '💻']}
                description={
                  <>
                    Yコンビネータやコンピュータサイエンスと
                    <br />
                    何の繋がりがあるの？
                  </>
                }
              />
              <P>
                まず、Yコンビネータについては、次からはじまる上級編で解説します。少しネタバレになりますが、
                <Highlight>
                  Yコンビネータは「
                  <Bold>とある特殊な弁当箱</Bold>
                  」のことを指します。
                </Highlight>
                それがどういう意味かは、上級編のお楽しみです！
              </P>
              <EmojiSeparator
                emojis={['❓', '🍱', '❓']}
                description={
                  <>
                    Yコンビネータは、
                    <br />「<Bold>とある特殊な弁当箱</Bold>
                    」のことを指す
                  </>
                }
              />
              <P>
                次に、コンピュータサイエンスとの繋がりは、
                <Highlight>
                  上級編をすべて終えたあとに詳しく説明します
                </Highlight>
                が、「<HighlightBold>いま気になる！</HighlightBold>
                」という方は、↓の「コンピュータサイエンスとの繋がりについて読む」を押してください。
              </P>
            </>
          ),
          text: <>コンピュータサイエンスとの繋がりについて読む</>
        },
        content: (
          <>
            <Hr />
            <WhatIsComputer />
            <Hr />
            <P>
              では、ここで <CustomEmoji type="mathBox" /> 計算箱や{' '}
              <Emoji>🍱</Emoji> 弁当箱の話に戻りましょう。
            </P>
            <P>
              <Bold>
                <CustomEmoji type="mathBox" />{' '}
                計算箱も計算機(コンピュータ)である:
              </Bold>{' '}
              今まで見てきた
              <Highlight>
                計算箱も、簡単な計算ができますから、いちおう「計算機
                (コンピュータ)」ではあるのです
              </Highlight>
              。足し算と引き算だけしかできませんが…
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>➕</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>➖</Emoji>
              ]}
              description={
                <>
                  <CustomEmoji type="mathBox" /> 計算箱も計算機(コンピュータ)
                </>
              }
            />
            <P>
              <Bold>
                <Emoji>🍱</Emoji> 弁当箱も計算機(コンピュータ)かもしれない:
              </Bold>{' '}
              では、弁当箱はどうでしょう？ここまで見てきたところ、弁当箱は工夫することで、「1を足す」ことと「1を引く」ことができます。ということは、
              <Highlight>弁当箱も「計算機(コンピュータ)」</Highlight>
              なのかもしれません。
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <Emoji>🍱</Emoji> 弁当箱も
                  <br />
                  計算機(コンピュータ)かもしれない
                </>
              }
            />
            <P>
              ここで重要なポイントなのですが、
              <Highlight>
                実はこの弁当箱、今から80年以上も前に、
                <Bold>とある研究の研究対象になっていた</Bold>のです。
              </Highlight>
              それは計算機にまつわる研究で、後のコンピュータサイエンスの発展に大きな影響を与えました。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🍱', '👨🏻‍🦳']}
              description={
                <>
                  弁当箱は、今から80年以上も前に
                  <br />
                  計算機にまつわる研究の研究対象になっていた
                </>
              }
            />
            <P>
              <Bold>
                これ以上のことは、上級編をすべて終えたときにお伝えします。
              </Bold>
              とりあえず今のところは、
            </P>
            <Ul>
              <UlLi>
                <Highlight>「コンピュータ＝計算機」であり、</Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  弁当箱は昔、計算機にまつわる研究の対象となっていて、
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  その研究が、後のコンピュータサイエンスの発展に大きな影響を与えた
                </Highlight>
              </UlLi>
            </Ul>
            <P>
              ということだけ頭に入れておいてください！<Emoji>😉</Emoji>{' '}
              では、先に進みましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

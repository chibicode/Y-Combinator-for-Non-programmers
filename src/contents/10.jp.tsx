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
                        わかりました。では、「
                        <H args={{ name: 'minusOneFeature' }} />」
                        を再現するヒントを教えましょう！
                      </P>
                    </>
                  )
                }
                //   <P>
                //   前回と同じく、
                //   <Highlight>
                //     それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                //     には何らかの料理が入ります。
                //   </Highlight>
                // </P>
              ]}
            />
            <R.Pbop>
              それぞれの <CustomEmoji type="questionFoodGrey" /> には
              <br />
              何らかの料理が入る
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
                        そして、
                        <HighlightBold>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れると、
                          <H args={{ name: 'minusOneEffect' }} />
                          がある弁当箱になります。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Skoo>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              <HighlightBold>ある法則に基づいて</HighlightBold>料理を入れると、
              <br />
              <H args={{ name: 'minusOneEffect' }} />
              がある弁当箱になる
            </R.Skoo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なに、
                        <H args={{ name: 'minusOneEffect' }} />
                        だって？
                      </P>
                      <P>
                        前回の
                        <H args={{ name: 'plusOneEffect' }} />
                        の真逆なのかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>その通りです。</P>
                      <Ul>
                        <UlLi>
                          上の
                          <H args={{ name: 'minusOneEffect' }} />
                          がある弁当箱を、
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            ある数字 <CustomEmoji type="blankNumber" />{' '}
                            に変換できる弁当箱と合体させて実行すると、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <CustomEmoji type="blankNumber" /> <Emoji>➖</Emoji>{' '}
                            <EmojiNumber number={1} /> に変換できる弁当箱になる
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Xqjd>
              <CustomEmoji type="blankNumber" /> に変換できる弁当箱と、
              <br />
              <H args={{ name: 'minusOneEffect' }} />
              がある弁当箱を合体させ…
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
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまりこれを使えば、計算箱の「
                        <H args={{ name: 'minusOneFeature' }} />
                        」を再現できるというわけだな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              計算箱の「
              <H args={{ name: 'minusOneFeature' }} />
              」は…
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Xqjd>
              <H args={{ name: 'minusOneEffect' }} />
              がある弁当箱を
              <br />
              使えば、再現できる
            </R.Xqjd>
          </>
        )
      },
      {
        title: <>サヤちゃんが考えた弁当箱</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        しかし…こんな複雑な弁当箱の{' '}
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        を正しい法則で埋めるなんて…何日かかってもできなさそうだ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              それぞれの <CustomEmoji type="questionFoodGrey" /> には
              <br />
              何らかの料理が入る
            </R.Pbop>
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
            <R.Cldb>
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱
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
                      <P>
                        前回もやったように、
                        <Highlight>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させてみよう。
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
                      <P>
                        今回は
                        <H args={{ name: 'minusOneEffect' }} />
                        があるかどうかを確かめたいわけだから、
                        <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} /> が計算できないといけない。
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={1} />,
                          <Emoji>➖</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                      />
                      <P>
                        つまり、実行した時に、
                        <Highlight>
                          結果が{' '}
                          <Bold>
                            <EmojiNumber number={0} /> に変換できる弁当箱
                          </Bold>
                          になれば成功というわけだ。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ylav>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Ylav>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              実行したときに、
              <EmojiNumber number={0} size="mdlg" /> に変換できる
              <br />
              弁当箱になれば<HighlightBold>成功</HighlightBold>{' '}
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
            <P>
              それでは、上記の弁当箱を実行してみましょう！途中まで進めてみますね。
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
            <R.Ylav>
              <EmojiNumber number={1} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Ylav>
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
                          その弁当箱に
                          <H args={{ name: 'minusOneEffect' }} />
                          があるとはまだ言い切れない
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
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➖</Emoji>,
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
                      <P>
                        合体したものを実行して、
                        <Highlight>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱になればいい
                        </Highlight>
                        んだよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zwvj>
              <EmojiNumber number={2} /> に変換できる弁当箱と、
              <br />
              <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱を合体させ…
            </R.Zwvj>
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
                      <P>まずは実行してみるね。</P>
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
        title: (
          <>
            <H args={{ name: 'minusOneEffect' }} />
            がある法則
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
                          サヤちゃんが考えた弁当箱は、
                          <H args={{ name: 'minusOneEffect' }} />
                          がある弁当箱だ！
                        </HighlightBold>{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rdae>
              <Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱には
              <br />
              <H args={{ name: 'minusOneEffect' }} />
              がある
            </R.Rdae>
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
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ちなみに、サヤちゃんが考えた弁当箱以外にも、
                        <HighlightBold>
                          以下の法則に当てはまる弁当箱であれば、 どれでも
                          <H args={{ name: 'minusOneEffect' }} />
                          があるぞ。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cbmn>
              この法則に当てはまる弁当箱であれば、
              <br />
              <H args={{ name: 'minusOneEffect' }} />
              がある
            </R.Cbmn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかにサヤちゃんの弁当箱は、上の法則に当てはまっている…
                      </P>
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
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            「<H args={{ name: 'minusOneFeature' }} />
            」も再現できた！
          </>
        ),
        content: (
          <>
            <P>
              今回学んだことを一言でまとめると、
              <HighlightBold>
                計算箱の「
                <H args={{ name: 'minusOneFeature' }} />
                」も、弁当箱で「再現」できる
              </HighlightBold>
              、ということです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOnePink" />
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
            <P>
              たとえば、以下のような <EmojiNumber number={3} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={1} />{' '}
              を計算する計算箱をご覧ください。
            </P>
            <R.Xmqp>
              <EmojiNumber number={3} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できる
            </R.Xmqp>
            <P>
              これを弁当箱で再現するには、
              <Highlight>
                <EmojiNumber number={3} /> に変換できる弁当箱と、
                <H args={{ name: 'minusOneEffect' }} />
                がある弁当箱を合体すればいい
              </Highlight>
              のです。
            </P>
            <R.Fhkl>
              <EmojiNumber number={3} /> に変換できる弁当箱と
              <br />
              <H args={{ name: 'minusOneEffect' }} />
              がある弁当箱を
              <br />
              合体すれば、
              <EmojiNumber number={3} /> <CustomEmoji type="minusOne" />{' '}
              の計算箱を再現できる
            </R.Fhkl>
            <ExpressionRunnerSeparator />
            <R.Cawl></R.Cawl>
            <Hr />
            <P>
              まとめると、
              <Highlight>
                計算箱の「
                <H args={{ name: 'minusOneFeature' }} />
                」も、弁当箱で再現することができる
              </Highlight>
              のです。このポイントさえ覚えていただければ、細かいことは分からなくても大丈夫です！
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOnePink" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'minusOneFeature' }} />
                  」も、
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
                        今回の「
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
                」という方は、↓の「コンピュータサイエンスとの繋がりについて読む」を押してください。「上級編が終わるまで待ちたい」という方は、読み飛ばしても大丈夫です。
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
              ということだけ頭に入れておいてください！<Emoji>😉</Emoji>
            </P>
          </>
        )
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
      }
    ]}
  />
)

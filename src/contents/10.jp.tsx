import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, Ul, UlLi, Hr } from 'src/components/ContentTags'
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
                        これは「<Strong>1を足す機能</Strong>{' '}
                        <CustomEmoji type="plusOne" />
                        」がある計算箱だけど…
                      </P>
                      <P>
                        「<Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」がある計算箱や、「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>」がある計算箱はどこにいったんだ？
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
                    <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
                  </R.Ditw>
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        <Strong>それらは、まだ返すわけにはいかないな。</Strong>
                      </P>
                      <P>
                        <Em>
                          いまお前たちに返せるのは、「
                          <Strong>1を足す機能</Strong>{' '}
                          <CustomEmoji type="plusOne" />
                          」がある計算箱だけだ。
                        </Em>
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
                        <Strong>
                          計算箱のすべての機能を返すとは言っていないからな！
                        </Strong>
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
                        <Em>
                          計算箱の「
                          <Strong>1を足す機能</Strong>{' '}
                          <CustomEmoji type="plusOne" />
                          」を弁当箱で再現してもらった
                        </Em>
                        よな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lizi></R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Plde>
              <EmojiNumber number={1} /> <CustomEmoji type="plusOne" />{' '}
              の計算箱を、弁当箱で再現
            </R.Plde>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        だから、
                        <Em>
                          「<Strong>1を引く機能</Strong>{' '}
                          <CustomEmoji type="minusOne" />
                          」や「
                          <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」を返してほしかったら、
                          <Strong>
                            それらを同じように弁当箱で再現してみることだな！
                          </Strong>
                        </Em>
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
                    <Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
                  </R.Ditw>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={<>弁当箱で再現</>}
                  />
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
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
                        「<Strong>1を足す機能</Strong>{' '}
                        <CustomEmoji type="plusOne" />
                        」を再現するのにも苦戦したのに、「
                        <Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」や「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        <Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」や「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」がないと、
                        <Em>
                          <Strong>引き算や、大きな数の足し算・引き算</Strong>
                          ができないよ！
                        </Em>
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
            <H args={{ name: 'minusOneEffect' }} />
            がある弁当箱のヒント
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
                      <P>わかりました。こちらの弁当箱をご覧ください。</P>
                      <P>
                        前回と同じく、
                        <Em>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          には何らかの料理が入ります。
                        </Em>
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
                        <Strong>
                          それぞれの <CustomEmoji type="questionFoodGrey" />{' '}
                          に、ある法則に基づいて料理を入れると、
                          <H args={{ name: 'minusOneEffect' }} />
                          がある弁当箱になります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Skoo>
              それぞれの <CustomEmoji type="questionFoodGrey" /> に、
              <br />
              <Strong>ある法則に基づいて</Strong>料理を入れると、
              <br />
              <H args={{ name: 'minusOneEffect' }} />
              がある弁当箱になる
            </R.Skoo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        上の
                        <H args={{ name: 'minusOneEffect' }} />
                        がある弁当箱を、
                      </P>
                      <Ul>
                        <UlLi>
                          <Em>
                            ある数字 <CustomEmoji type="blankNumber" />{' '}
                            に変換できる弁当箱と合体させ、
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
                          <Emoji>➖</Emoji> <EmojiNumber number={1} /> になる
                        </Em>
                        のです。
                      </P>
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
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果は <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={1} /> になる
            </R.Gvxz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまり、計算箱の「<Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」を再現できるというわけだな。
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
                        <Em>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させてみよう。
                        </Em>
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
                        つまり、
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        した時に、
                        <Em>
                          結果が <EmojiNumber number={0} />{' '}
                          になれば成功というわけだ。
                        </Em>
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <Emoji>🍱</Emoji>,
                          <Emoji>▶️</Emoji>,
                          <CustomEmoji type="singleArrow" />,
                          <EmojiNumber number={0} />
                        ]}
                        description={
                          <>
                            結果が <EmojiNumber number={0} /> になればOK
                          </>
                        }
                      />
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
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={0} size="mdlg" /> になれば
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
              途中まで早送りしてみますね。
              <H
                args={{
                  name: 'pressFastForward'
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
                        <Em>すべてを目で追う必要はないですよ！</Em>
                        なんとなく、「へー、こんなふうに進んでいくんだ」と思っていただければ大丈夫です。
                      </P>
                      <P>
                        また、「
                        <Strong>
                          <H args={{ name: 'skipToTheStoppingPoint' }} /> →
                        </Strong>
                        」を押して、飛ばしていただいても結構です。
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
                        <Strong>
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
                        </Strong>
                      </P>
                      <P>
                        前回と同じように
                        <Em>
                          特別ルールで、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          が別の料理に変わる
                        </Em>
                        んだよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              特別ルールを実行するには、
              <Em>
                <H args={{ name: 'next' }} /> を押してみてください！
              </Em>
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
                        では、最後まで
                        <H args={{ name: 'fastForward' }} />
                        してみてください！
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
                      <P>
                        <Em>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させ、
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                          すると、結果が <EmojiNumber number={0} /> になる
                        </Em>
                        ということですね。
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
            <R.Jwah>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              すると、結果が <EmojiNumber number={0} /> になる
            </R.Jwah>
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
                        <Em>
                          その弁当箱に
                          <H args={{ name: 'minusOneEffect' }} />
                          があるとはまだ言い切れない
                        </Em>
                        ぞ。
                      </P>
                      <P>
                        たとえば、
                        <Strong>
                          <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
                          <EmojiNumber number={1} /> は計算できるのかな？
                        </Strong>
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
                        <Em>
                          <EmojiNumber number={2} />{' '}
                          に変換できる弁当箱と合体させてみる
                        </Em>
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
                        合体したものを
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        して、
                        <Em>
                          結果が <EmojiNumber number={1} /> になればいい
                        </Em>
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
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={1} size="mdlg" /> になれば
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
                      <Ul>
                        <UlLi>
                          今回は、<Em>最後まで止まらずに早送りするね！</Em>
                        </UlLi>
                        <UlLi>
                          複雑なので、<Em>目で追わなくても大丈夫だよ！</Em>
                        </UlLi>
                        <UlLi>
                          ちょっと時間がかかるので、待てない方は下の「
                          <Strong>
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </Strong>
                          」を押してね！
                        </UlLi>
                      </Ul>
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
                      <P>
                        まさか、こうも簡単に正解されるとは思わなかったが…
                        <Strong>
                          サヤちゃんが考えた弁当箱は、
                          <H args={{ name: 'minusOneEffect' }} />
                          がある弁当箱だ！
                        </Strong>{' '}
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
                        <Strong>
                          以下の法則に当てはまる弁当箱であれば、 どれでも
                          <H args={{ name: 'minusOneEffect' }} />
                          があるぞ。
                        </Strong>
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
                        <Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
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
            「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
            」も再現できた！
          </>
        ),
        content: (
          <>
            <P>
              今回学んだことを一言でまとめると、
              <Strong>
                計算箱の「1を引く機能 <CustomEmoji type="minusOne" />
                」も、弁当箱で「再現」できる
              </Strong>
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
                  計算箱の「<Strong>1を引く機能</Strong>{' '}
                  <CustomEmoji type="minusOne" />
                  」は、
                  <br />
                  弁当箱で「<Strong>再現</Strong>」することができる
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
              <Em>
                <EmojiNumber number={3} /> に変換できる弁当箱と、
                <H args={{ name: 'minusOneEffect' }} />
                がある弁当箱を合体すればいい
              </Em>
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
            <P>
              上の
              <H args={{ name: 'runAndConvertToMathbox' }} />
              ボタンを押すと、答えが <EmojiNumber number={2} />{' '}
              になるのを確認できます。
            </P>
            <Hr />
            <P>
              まとめると、
              <Em>
                計算箱の「<Strong>1を引く機能</Strong>{' '}
                <CustomEmoji type="minusOne" />
                」も、弁当箱で再現することができる
              </Em>
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
                  計算箱の「<Strong>1を引く機能</Strong>{' '}
                  <CustomEmoji type="minusOne" />
                  」も、
                  <br />
                  弁当箱で「<Strong>再現</Strong>」することができる
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
                        今回の「<Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」を再現する問題も、超難問です。だから、サヤちゃんのように答えを思いつけなくても大丈夫です。
                      </P>
                      <P>
                        前回話した通り、
                        <Em>
                          答えを思いつけなくても、答えを見て、「なるほど、そういうことだったのか」と理解できれば、コンピュータサイエンスを学ぶ素養は十分すぎるほどあります。
                        </Em>
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
                        どうだ、「<Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
                        」も、弁当箱で再現したぞ！(やったのは俺らじゃなくて{' '}
                        <Emoji>👧🏻</Emoji> サヤちゃんだけど…)
                      </P>
                      <P>
                        約束通り、「<Strong>1を引く機能</Strong>{' '}
                        <CustomEmoji type="minusOne" />
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
              「<Strong>1を引く機能</Strong> <CustomEmoji type="minusOne" />
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
                        <Em>
                          「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」がある計算箱は、まだ返すわけにはいかないな。返してほしかったら、これらも弁当箱で再現してみるんだな！
                        </Em>
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
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
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
                        <Em>ちなみに、中級編はここまでだ。</Em>
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

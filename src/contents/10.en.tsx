import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Hr,
  Bold,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import BottomRightBadge from 'src/components/BottomRightBadge'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import InlineRunAndConvertToMathboxButton from 'src/components/InlineRunAndConvertToMathboxButton'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { WhatIsComputer } from 'src/contents/16.jp'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>What we got back is…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Fine! Since you got the question right, I’ll return your
                        mathboxes!
                      </P>
                      <P>Here it is!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              <Emoji>😈</Emoji> I’ll return this!
            </R.Rviy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>Wait… that’s it?</P>
                      <P>
                        This is a mathbox with{' '}
                        <H args={{ name: 'plusOneFeature' }} />, but…
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        What about the ones with{' '}
                        <H args={{ name: 'minusOneFeature' }} /> or{' '}
                        <H args={{ name: 'repeatFeature' }} />?
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
                    <H
                      args={{
                        name: 'minusOneFeature',
                        addNewline: true,
                        capitalize: true
                      }}
                    />
                  </R.Ditw>
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <H
                      args={{
                        name: 'repeatFeature',
                        addNewline: true,
                        capitalize: true
                      }}
                    />
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
                      <P>I can’t return those yet.</P>
                      <P>
                        <Highlight>
                          The only one I’m returning you now is mathboxes with{' '}
                          <H args={{ name: 'plusOneFeature' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>Wait, what? No way!</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        But… you said, you’ll return our mathboxes if we solve
                        that difficult problem!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I said I’ll return the mathboxes…</P>
                      <P>
                        <Highlight>
                          But I never promised to return <Italic>all</Italic> of
                          the features!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>Nooo! You’re a liar!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Well, I’m a devil after all.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>What do we need to do?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        So… what do we need to do to get{' '}
                        <Italic>all of the features</Italic>
                        back?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Well… on the previous pages, I asked you to{' '}
                        <HighlightBold>reproduce</HighlightBold>{' '}
                        <H args={{ name: 'plusOneFeature' }} /> using a
                        lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lizi>
              Reproduce <EmojiNumber number={1} />{' '}
              <CustomEmoji type="plusOne" /> …
            </R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Plde>Using a lunchbox</R.Plde>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          So, if want <H args={{ name: 'minusOneFeature' }} />{' '}
                          or <H args={{ name: 'repeatFeature' }} /> back…
                        </Highlight>
                      </P>
                      <P>
                        <HighlightBold>
                          You must reproduce them using lunchboxes!
                        </HighlightBold>
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
                    <H
                      args={{
                        name: 'minusOneFeature',
                        capitalize: true,
                        addNewline: true
                      }}
                    />
                  </R.Ditw>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={
                      <>
                        Reproduce with
                        <br />a lunchbox
                      </>
                    }
                  />
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <H
                      args={{
                        name: 'repeatFeature',
                        capitalize: true,
                        addNewline: true
                      }}
                    />
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    description={
                      <>
                        Reproduce with
                        <br />a lunchbox
                      </>
                    }
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
                      <P>What!</P>
                      <P>
                        We struggled to reproduce <CustomEmoji type="plusOne" />{' '}
                        using a lunchbox. I don’t know if we can reproduce{' '}
                        <CustomEmoji type="minusOne" /> or <Emoji>🔁</Emoji>…
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>If you can’t do it, you won’t get them back.</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        But… we need <H args={{ name: 'minusOneFeature' }} />{' '}
                        and <H args={{ name: 'repeatFeature' }} />!
                      </P>
                      <P>
                        Without these features, we won’t be able to calculate
                        subtractions or add/subtract large numbers.
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        We’re so bad at math, so we really need those features
                        back.
                      </P>
                      <P>I guess we have to try!</P>
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
            <H args={{ name: 'minusOneEffect', capitalize: true }} />
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
                        <Bold>Don’t worry:</Bold> Minion will give you a hint on
                        how to reproduce those features using lunchboxes.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes! <H args={{ name: 'lookAtThisBentoBox' }} />.
                      </P>
                      <P>
                        Just like the last time, each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon represents
                        some food item.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents some
              food item
            </R.Pbop>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… it looks really complicated!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This time,{' '}
                        <Highlight>
                          you must fill each{' '}
                          <CustomEmoji type="questionFoodGrey" /> in a way such
                          that, the resulting lunchbox has{' '}
                          <Bold>
                            <H args={{ name: 'minusOneEffect' }} />
                          </Bold>
                          .
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Skoo>
              You must fill each <CustomEmoji type="questionFoodGrey" /> in a
              way
              <br />
              such that, the resulting lunchbox has
              <br />
              <H args={{ name: 'minusOneEffect' }} />.
            </R.Skoo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{ name: 'minusOneEffect', capitalize: true }}
                        />
                        ?
                      </P>
                      <P>
                        Is that the oppposite of{' '}
                        <H args={{ name: 'plusOneEffect' }} /> we talked about
                        earlier?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes!{' '}
                        <Highlight>
                          If you combine the above lunchbox with a lunchbox that
                          can be converted to <CustomEmoji type="blankNumber" />
                          , and do:
                        </Highlight>
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        <Highlight>
                          The result will be <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➖</Emoji> <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xqjd>
              Combine a lunchbox that can be converted to{' '}
              <CustomEmoji type="blankNumber" />
              <br />
              with a lunchbox with <H args={{ name: 'minusOneEffect' }} />
            </R.Xqjd>
            <ExpressionRunnerSeparator />
            <R.Gvxz>
              If you{' '}
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />
              </Highlight>
              <br />
              it will become <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={1} />
            </R.Gvxz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see. So this is how you can reproduce{' '}
                        <H args={{ name: 'minusOneFeature' }} /> using a
                        lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              <CustomEmoji type="mathBox" /> A <Bold>mathbox</Bold> that uses{' '}
              <CustomEmoji type="minusOne" /> can be <Bold>reproduced</Bold> by…
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Xqjd>
              <Emoji>🍱</Emoji> A <Bold>lunchbox</Bold> that has{' '}
              <H args={{ name: 'minusOneEffect' }} />.
            </R.Xqjd>
          </>
        )
      },
      {
        title: <>Saya’s lunchbox, again</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>But… this lunchbox looks so complicated!</P>
                      <P>
                        I don’t think we can figure out how to fill each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents some
              food item
            </R.Pbop>
            <P>
              The villagers were struggling, but looks like Saya’s got an idea:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey guys, I think I have an idea.</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>What…? Saya, did you figure it out?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I don’t know if this is correct, but come take a look!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cldb>
              <Emoji>👧🏻</Emoji> Saya’s lunchbox
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
                        つまり、
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        した時に、
                        <Highlight>
                          結果が <EmojiNumber number={0} />{' '}
                          になれば成功というわけだ。
                        </Highlight>
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
              <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
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
                        <Highlight>
                          すべてを目で追う必要はないですよ！
                        </Highlight>
                        なんとなく、「へー、こんなふうに進んでいくんだ」と思っていただければ大丈夫です。
                      </P>
                      <P>
                        また、「
                        <HighlightBold>
                          <H args={{ name: 'skipToTheStoppingPoint' }} /> →
                        </HighlightBold>
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
                        <Highlight>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させ、
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                          すると、結果が <EmojiNumber number={0} /> になる
                        </Highlight>
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
                        合体したものを
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        して、
                        <Highlight>
                          結果が <EmojiNumber number={1} /> になればいい
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
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              して、結果が <EmojiNumber number={1} size="mdlg" /> になれば
              <HighlightBold>成功</HighlightBold> <Emoji>🎉</Emoji>
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
                        まずは実行してみるね。
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <Ul>
                        <UlLi>
                          今回は、
                          <Highlight>
                            最後まで止まらずに早送りするね！
                          </Highlight>
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
            <P>
              上の
              <H args={{ name: 'runAndConvertToMathbox' }} />
              ボタンを押すと、答えが <EmojiNumber number={2} />{' '}
              になるのを確認できます。
            </P>
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
        title: <>余談: コンピュータサイエンスと何の繋がりがあるの？</>,
        preview: {
          content: (
            <>
              <P>
                ここまで読んで、「パズルは何となく分かるけど、
                <Highlight>
                  これってコンピュータサイエンスと何の繋がりがあるの？
                </Highlight>
                」と思われた方も多いかもしれません。
              </P>
              <EmojiSeparator
                emojis={['💻', '🤔', '💻']}
                description={
                  <>
                    コンピュータサイエンスと
                    <br />
                    何の繋がりがあるの？
                  </>
                }
              />
              <P>
                コンピュータサイエンスとの繋がりは、
                <Highlight>
                  次からはじまる上級編をすべて終えたあとに詳しく説明します
                </Highlight>
                が、「<HighlightBold>いま気になる！</HighlightBold>
                」という方は、↓の「続きを読む」を押してください。「上級編が終わるまで待ちたい」という方は、読み飛ばしても大丈夫です。
              </P>
            </>
          ),
          text: <>続きを読む</>
        },
        content: (
          <>
            <Hr />
            <WhatIsComputer />
            <Hr />
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
                          」がある計算箱は、まだ返すわけにはいかないな。返してほしかったら、これらも弁当箱で再現してみるんだな！
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

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import InlineBorder from 'src/components/InlineBorder'
import InlineRunAndConvertToMathboxButton from 'src/components/InlineRunAndConvertToMathboxButton'
import * as R from 'src/components/Runners'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import NextLessonButton from 'src/components/NextLessonButton'

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
          </>
        )
      },
      {
        title: <>A very complicated lunchbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let me give you a hint to reproduce{' '}
                        <H args={{ name: 'repeatFeature' }} /> using a lunchbox!
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
                    Repeat <CustomEmoji type="plusOne" />
                    <br />
                    <CustomEmoji type="blankNumber" /> times
                  </R.Bwnp>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
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
                  <R.Ewfr>
                    Repeat <CustomEmoji type="minusOne" />
                    <br />
                    <CustomEmoji type="blankNumber" /> times
                  </R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    emojis={['❓', '🍱', '❓']}
                    size="mdsm"
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
                  type: 'dog',
                  children: (
                    <>
                      <P>Let’s take a look at this lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>A complicated lunchbox</R.Bnyo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>This looks really complicated…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Now, here’s a question:</Bold> What happens when
                        you do this:
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>…on the above lunchbox?</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Well… there’s no way I can figure it out in my head.
                        It’s too complicated!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>I figured it out!</Bold> I think the result will
                        be <EmojiNumber number={4} />.
                      </P>
                      <R.Kizi>
                        <Emoji>👧🏻</Emoji> I think the result will be{' '}
                        <EmojiNumber number={4} />
                      </R.Kizi>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes! Correct!</Bold> Saya, You’re exactly right!{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        What? How is it possible that you figured it out so
                        quickly?
                      </P>
                      <P>Saya, did you solve it all in your head?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Not really. Actually, <Italic>I used a trick.</Italic>{' '}
                        Let me explain!
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
        title: <>Replace each section: Phase 1</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          Take a look at the <Bold>top section</Bold>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ywpq>
              Take a look at the <Bold>top section</Bold>
            </R.Ywpq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Oh! The top section is actually a lunchbox that can be
                        converted to <EmojiNumber number={3} />!
                      </P>
                      <R.Ayrl>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'l',
                            number: 3
                          }}
                        />
                      </R.Ayrl>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Yes! So we’ll{' '}
                        <Highlight>
                          replace this section with <EmojiNumber number={3} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Uwgj>
              Replace the top section with <EmojiNumber number={3} />
            </R.Uwgj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Second:</Bold>{' '}
                        <Highlight>
                          Take a look at the <Bold>middle-right section</Bold>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Itis>Take a look at the middle-right section</R.Itis>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        The middle-right section is actually a lunchbox that can
                        be converted to <EmojiNumber number={2} />!
                      </P>
                      <R.Vhte>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 2
                          }}
                        />
                      </R.Vhte>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Yes! So we’ll{' '}
                        <Highlight>
                          replace this section with <EmojiNumber number={2} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wgby>
              Replace the middle-right section with <EmojiNumber number={2} />
            </R.Wgby>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>I see…!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Replace each section: Phase 2</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Now, <Highlight>take a look at this section.</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Poha>Take a look at this section</R.Poha>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        This looks like a lunchbox that has{' '}
                        <H args={{ name: 'plusOneEffect' }} />!
                      </P>
                      <R.Vcqp>
                        A lunchbox with
                        <br />
                        <H args={{ name: 'plusOneEffect' }} />
                      </R.Vcqp>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Exactly! So we’ll{' '}
                        <Highlight>
                          replace this with <CustomEmoji type="plusOne" />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cpdy>
              Replace with <CustomEmoji type="plusOne" />
            </R.Cpdy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… it’s getting much simpler!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Replace each section: Phase 3</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Finally,{' '}
                        <Highlight>
                          take a look at the <Bold>bottom-right</Bold> section!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lxgj>Take a look at the bottom-right section</R.Lxgj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Oh! This looks exactly like the one we saw on the last
                        page: a lunchbox that reproduces{' '}
                        <H args={{ name: 'conditionFeature' }} />.
                      </P>
                      <R.Vlhb>
                        A lunchbox that reproduces
                        <br />
                        <H args={{ name: 'conditionFeature' }} />
                      </R.Vlhb>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Exactly! So{' '}
                        <Highlight>
                          we’ll replace it with{' '}
                          <H args={{ name: 'conditionFeature' }} />.
                        </Highlight>
                      </P>
                      <R.Ruou>
                        Replace with <H args={{ name: 'conditionFeature' }} />
                      </R.Ruou>
                      <P>Here’s how we’re going to replace it:</P>
                      <R.Wenx>Before (the bottom right section)</R.Wenx>
                      <ExpressionRunnerSeparator />
                      <R.Crvj>After (the bottom right section)</R.Crvj>
                      <P>After the replacement, it’ll look like this:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Awbq>
              After replacing with
              <br />
              <H args={{ name: 'conditionFeature' }} />
            </R.Awbq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wow, it’s much simpler now!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Let’s run it</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s run it!{' '}
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gmzn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>From here, it’s simple.</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            Because <InlineBorder type="condition" /> is{' '}
                            <EmojiNumber number={3} />, which is not zero…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          The result will be what’s in{' '}
                          <InlineBorder type="falseCase" />, which is{' '}
                          <EmojiNumber number={3} />{' '}
                          <CustomEmoji type="plusOne" />.
                        </UlLi>
                      </Ul>
                      <P>
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Uiwl />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        See, the final result is <EmojiNumber number={4} />!
                      </P>
                      <R.Kizi>
                        <Emoji>👧🏻</Emoji> The final result is{' '}
                        <EmojiNumber number={4} />
                      </R.Kizi>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I see!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>そのまま実行していたら？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        しかし…
                        <Highlight>
                          サヤちゃんがとった手法はズルなんじゃないか？
                        </Highlight>
                      </P>
                      <P>
                        サヤちゃんは、もともとの弁当箱を、それぞれの要素に対応する計算箱に置き換えてから実行したけど…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>サヤちゃんは、もともとの弁当箱を…</R.Bnyo>
            <ExpressionRunnerSeparator />
            <R.Ghwe>
              それぞれの要素に対応する計算箱に
              <br />
              置き換えてから実行していた
            </R.Ghwe>
            <ExpressionRunnerSeparator />
            <R.Kizi></R.Kizi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          もともとの弁当箱を、そのまま
                          <H
                            args={{ name: 'play' }}
                          /> しても、結果は同じく <EmojiNumber number={4} />{' '}
                          になっていたのかな？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>
              <Emoji>🍱</Emoji> もともとの弁当箱を、
              <br />
              そのまま
              <H args={{ name: 'play' }} /> しても…
            </R.Bnyo>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              結果は同じく
              <br />
              <EmojiNumber size="semilg" number={4} /> になっていた？
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>では、確かめてみましょう！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>そのまま実行してみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、もともとの弁当箱を
                        <H args={{ name: 'fastForward' }} />
                        してみましょう！
                      </P>
                      <Ul>
                        <UlLi>
                          ステップ数が非常に多いので、
                          <HighlightBold>
                            3倍速で早送りします！
                          </HighlightBold>{' '}
                          <Emoji>⏩</Emoji> <Emoji>⏩</Emoji> <Emoji>⏩</Emoji>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            早送り中は、目に優しくなるように弁当箱を半透明にしています。
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          待てない方は、「
                          <HighlightBold>
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </HighlightBold>
                          」を押して下さい！
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Ynoy></R.Ynoy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        最後に残った以下の弁当箱は、
                        <HighlightBold>
                          <EmojiNumber number={4} /> に変換できる弁当箱
                        </HighlightBold>
                        ですね。
                      </P>
                      <R.Gmgs>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'j',
                            number: 4
                          }}
                        />
                      </R.Gmgs>
                      <P>
                        つまり、
                        <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                        すると、結果は <EmojiNumber number={4} /> になるのです。
                      </P>
                      <R.Kizi></R.Kizi>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          サヤちゃんのやり方でやったときと、結果が同じになった！
                        </HighlightBold>
                      </P>
                      <P>
                        ということは、サヤちゃんのやり方は間違ってなかったのか…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そういうことですね！</P>
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
        title: <>ここまでの振り返り</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>ここで一旦立ち止まって振り返ってみましょう。</P>
                      <P>
                        さきほどサヤちゃんがやったのは、「
                        <HighlightBold>
                          弁当箱の一部分を、同じ効果がある計算箱と置き換える
                        </HighlightBold>
                        」という手法でした。図で説明すると、以下のような感じですね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ykqf>
              <Emoji>🍱</Emoji> 弁当箱の一部分を…
            </R.Ykqf>
            <ExpressionRunnerSeparator />
            <R.Ifpo>
              同じ効果がある <CustomEmoji type="mathBox" /> 計算箱と置き換える
            </R.Ifpo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        重要なのは、
                        <Highlight>
                          このように弁当箱の一部分を計算箱と置き換えても、
                          <HighlightBold>
                            実行したら結果は同じになる
                          </HighlightBold>
                        </Highlight>
                        ということです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>弁当箱の一部分を計算箱と置き換えても…</>}
            />
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <HighlightBold>
                実行したら
                <br />
                結果は同じになる！
              </HighlightBold>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに先ほどの場合は、
                        <Highlight>
                          サヤちゃんの手法を使っても、そのまま実行しても、どちらも結果は{' '}
                          <EmojiNumber number={4} /> になった
                        </Highlight>
                        な。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。
                        <Highlight>
                          複雑な弁当箱は、それぞれの部分をシンプルな計算箱に置き換えると分かりやすくなります。
                        </Highlight>
                      </P>
                      <P>
                        <HighlightBold>
                          結果は変わらないのだから、積極的に置き換えていくべき
                        </HighlightBold>
                        ということですね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>
              <Emoji>🍱</Emoji> 複雑な弁当箱は…
            </R.Bnyo>
            <ExpressionRunnerSeparator />
            <R.Ghwe>
              それぞれの部分を
              <br />
              シンプルな計算箱 <CustomEmoji type="mathBox" /> に置き換えると
              <br />
              分かりやすくなる
            </R.Ghwe>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <HighlightBold>
                ちなみに、どちらの場合も
                <br />
                実行結果は <EmojiNumber size="semilg" number={4} /> になる
              </HighlightBold>
            </ExpressionRunnerCaptionOnly>
          </>
        )
      },
      {
        title: <>繰り返しの機能との関係</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        でもさあ…質問なんだけど、
                        <Highlight>
                          この話って、「
                          <H args={{ name: 'repeatFeature' }} />
                          」と何の関係があるの？
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              noBottomNegativeMargin
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
            <P>すると、サヤちゃんが何かに気づいたようです。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          ねえねえ、もしかしたらサヤ、「
                          <H args={{ name: 'repeatFeature' }} />
                          」を弁当箱で再現できたかもしれない！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🔁', '👧🏻', '🔁']}
              description={<>繰り返しの機能を再現できたかも！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>え！サヤちゃん、本当かい？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>うん、それでは説明するね！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>先ほどの弁当箱にいろいろ追加してみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>こちらが、先ほどの弁当箱だけど…</P>
                    </>
                  )
                }
              ]}
            />
            <R.Ghwe>先ほどの弁当箱</R.Ghwe>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        この弁当箱に、以下のように
                        <HighlightBold>いろいろ追加してみた</HighlightBold>の。
                        <Highlight>黄色の部分が追加した部分</Highlight>だよ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cefx>
              <HighlightBold>黄色が追加した部分</HighlightBold>
            </R.Cefx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ふむふむ…何やら複雑になったなあ。</P>
                      <P>で、これがどうしたっていうの？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>実行してみると</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、この弁当箱を
                        <H args={{ name: 'play' }} /> してみて！
                      </P>
                      <P>
                        (
                        <Highlight>
                          次のページで早送りして詳細に解説するけど、今回は早送りは省略します！
                        </Highlight>
                        )
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Htir></R.Htir>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        結果は <EmojiNumber number={5} /> になったよ。
                      </P>
                      <P>
                        早送りしてないから、なぜ <EmojiNumber number={5} />{' '}
                        になったかは分からないけど…
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        うん、早送りは次のページでやるから、今はとりあえず「
                        <Highlight>
                          なるほど、結果は <EmojiNumber number={5} /> になるんだ
                        </Highlight>
                        」と受け入れてほしい！
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        そうか、次のページでまた詳しく説明してくれるんだね。了解だよ。
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
        title: <>足し算ができる？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        それよりも重要なのは、
                        <Highlight>
                          この <EmojiNumber number={5} /> って、
                          <HighlightBold>
                            実行前の弁当箱に入っていた、
                            <EmojiNumber number={2} /> と{' '}
                            <EmojiNumber number={3} /> を足した数
                          </HighlightBold>
                          だよね？
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Peiy>
              実行前の弁当箱に入っていた、
              <br />
              <EmojiNumber number={2} /> と <EmojiNumber number={3} /> を足すと{' '}
              <EmojiNumber number={5} /> になる
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>確かにそうだな…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ということは、この弁当箱は <EmojiNumber number={2} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={3} />{' '}
                        を計算しているんじゃないかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Peiy>
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算している？
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまり…<HighlightBold>足し算ができる</HighlightBold>
                        ってこと？
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
              <P>
                <Bold>補足:</Bold> 「
                <Highlight>
                  この弁当箱、本当に実行すると <EmojiNumber number={5} />{' '}
                  になるの？
                </Highlight>
                」と疑われているかもしれませんが、ご安心ください！
                <Highlight>
                  次のページでなぜ実行すると <EmojiNumber number={5} />{' '}
                  になるのかを詳細に説明します
                </Highlight>
                ので、とりあえず読み進めてみてください！
              </P>
            </>
          )
        }
      },
      {
        title: <>繰り返しを再現できた？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>待てよ、そういえば…</P>
                      <P>
                        以下のように計算箱の「
                        <H args={{ name: 'repeatFeature' }} />
                        」を使っても、
                        <Highlight>
                          <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={3} /> を計算できる
                        </Highlight>
                        よね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              計算箱の「
              <H args={{ name: 'repeatFeature' }} />
              」を使うと
              <br />
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算できる
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Jwce></R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        ということは…サヤちゃんの弁当箱は、上の「
                        <H args={{ name: 'repeatFeature' }} />
                        」を再現できているのか…？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              この「
              <H args={{ name: 'repeatFeature' }} />
              」を使った計算箱は…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Peiy>
              以下の弁当箱で再現できている？<Emoji>🤔</Emoji>
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        もしそうなら…「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現できた、ということになるぞ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'repeatFeature' }} />
                  」を
                  <br />
                  弁当箱で再現できたかも？
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、本当に再現できたのかどうか、次のページで確かめてみるね！先に進むよ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>補足:</Bold>{' '}
                <Highlight>
                  もし上に書いてあることが腑に落ちなくてもご心配なく！
                </Highlight>
                次のページで詳細に解説します。
              </P>
            </>
          )
        }
      }
    ]}
  />
)

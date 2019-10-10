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
        title: <>We’re doomed!</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>😭</Emoji>,
                <CustomEmoji type="plusOneOrange" />,
                <Emoji>😭</Emoji>
              ]}
            />
            <P>
              The villagers in Lambda Village were struggling with this
              difficult problem:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          You must fill each{' '}
                          <CustomEmoji type="questionFoodGrey" /> in a way such
                          that, the resulting lunchbox has{' '}
                          <Bold>
                            <H args={{ name: 'plusOneEffect' }} />
                          </Bold>
                          .
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              Fill each <CustomEmoji type="questionFoodGrey" /> icon in a way
              such that,
              <br />
              The resulting lunchbox has
              <br />
              <H args={{ name: 'plusOneEffect' }} />.
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Hmm… I have no clue!</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        But we need to solve this to get our mathboxes{' '}
                        <CustomEmoji type="mathBox" /> back! We’re doomed!
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
        title: <>Saya to the rescue</>,
        content: (
          <>
            <P>
              That’s when <Bold>Saya</Bold> <Emoji size="mdlg">👧🏻</Emoji>, a
              little girl who lives in Lambda Village, appeared.
            </P>
            <EmojiSeparator
              emojis={['✨', '👧🏻', '✨']}
              description={
                <>
                  <Bold>Saya</Bold>,<br />a little girl who lives in Lambda
                  Village
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey guys! What are you doing there?</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Oh, hey Saya. Well, we have some bad news. The devil{' '}
                        <Emoji>😈</Emoji> has stolen our mathboxes{' '}
                        <CustomEmoji type="mathBox" />.
                      </P>
                      <P>
                        To get them back, we need to solve this difficult
                        question. But it’s too hard for us!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>I see. Can you tell me what the question is?</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Sure.{' '}
                        <Highlight>
                          We must fill each{' '}
                          <CustomEmoji type="questionFoodGrey" /> in a way such
                          that, the resulting lunchbox has{' '}
                          <Bold>
                            <H args={{ name: 'plusOneEffect' }} />
                          </Bold>
                          .
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              Fill each <CustomEmoji type="questionFoodGrey" /> icon in a way
              such that,
              <br />
              The resulting lunchbox has
              <br />
              <H args={{ name: 'plusOneEffect' }} />.
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Which means, it needs to be able to calculate{' '}
                        <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              If you combine it with{' '}
              <CustomEmoji type="blankNumber" size="mdlg" /> and
              <br />
              <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />…
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy>
              The result must be <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              <Emoji size="mdlg">➕</Emoji>{' '}
              <EmojiNumber number={1} size="mdlg" />
            </R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>I see. I’ll help you then!</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>We appreciate it, but this isn’t for kids.</P>
                      <P>
                        We adults tried hard but couldn’t solve it. So I doubt
                        you can.
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
        title: <>Saya’s Lunchbox</>,
        content: (
          <>
            <P>
              Saya spent some time thinking, and came up with the following
              lunchbox:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Hey, I filled each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon as follows.
                        Can you take a look?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrfw>
              <Emoji>👧🏻</Emoji> Saya’s Lunchbox
            </R.Qrfw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        Hmm… I don’t think it’s going to work, but we’ll try
                        anyway.
                      </P>
                      <P>
                        We’ll combine it with a lunchbox that can be converted
                        to <EmojiNumber number={1} />…
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
                        Then{' '}
                        <H
                          args={{
                            name: 'runAndConvertToMathbox',
                            lowerCase: true
                          }}
                        />
                        , and see if it will become <EmojiNumber number={2} />.
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
              まず、
              <Highlight>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが左右ふたつ以上あるので、一番左の{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </Highlight>
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
                次は <InlinePrioritiesLabel>2</InlinePrioritiesLabel> のペアから
              </HighlightBold>
              はじめます。
            </P>
            <R.Uexo>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Uexo>
            <P>
              次も前回と同じく、
              <HighlightBold>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </HighlightBold>
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
                        <Highlight>
                          <EmojiNumber number={1} />{' '}
                          に変換できる弁当箱と合体させ、
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                          すると、結果が <EmojiNumber number={2} /> になる
                        </Highlight>
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
                        <HighlightBold>
                          他の数字に対しても
                          <H args={{ name: 'plusOneEffect' }} />
                          があるとは限らない。
                        </HighlightBold>
                      </P>
                      <P>
                        たとえば、
                        <HighlightBold>
                          <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> も計算できるのかどうか
                        </HighlightBold>
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
                        <Highlight>
                          <EmojiNumber number={2} /> に変換できる弁当箱と、
                        </Highlight>
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
                        <Highlight>
                          結果が <EmojiNumber number={3} /> になればいい
                        </Highlight>
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
                        <HighlightBold>
                          サヤちゃんが考えた弁当箱は、
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱です。
                        </HighlightBold>
                      </P>
                      <P>
                        だから、
                        <Highlight>サヤちゃんの答えが正解です！</Highlight>
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
                        <HighlightBold>
                          以下の法則に当てはまる弁当箱であれば、 どれでも
                          <H args={{ name: 'plusOneEffect' }} />
                          があります。
                        </HighlightBold>
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
                        <Highlight>
                          試しに、
                          <EmojiNumber number={3} />{' '}
                          に変換できるこちらの弁当箱と合体させて
                          <H args={{ name: 'play' }} /> してみましょう。
                        </Highlight>
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
                        <HighlightBold>
                          結果が <EmojiNumber number={4} />{' '}
                          に変換できる弁当箱になれば、
                          <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できたので成功
                        </HighlightBold>
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
                        ちなみに現時点で、
                        <Highlight>中級編も半分を終えました</Highlight>
                        。つまり、本稿の折り返し地点を越えたということです。
                        <Highlight>
                          残るは中級編の残り半分と、上級編のみです。
                        </Highlight>
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
              <H args={{ name: 'plusOneFeature' }} />
              」は、
              <HighlightBold>弁当箱で「再現」できる</HighlightBold>
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
                  計算箱の「
                  <H args={{ name: 'plusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
            <P>
              「<HighlightBold>再現</HighlightBold>
              」できる、とはどういうことでしょうか？先ほどの計算箱の例で説明しますね。
            </P>
            <R.Lizi>これを弁当箱で再現します</R.Lizi>
            <P>
              <Bold>ステップ1:</Bold> まず、
              <Highlight>
                計算箱の <EmojiNumber number={1} /> の代わりに、
                <HighlightBold>
                  <EmojiNumber number={1} /> に変換できる
                </HighlightBold>
                弁当箱
              </Highlight>
              を用意します。
            </P>
            <R.Rnug>これの代わりに…</R.Rnug>
            <ExpressionRunnerSeparator />
            <R.Rbup>
              <EmojiNumber number={1} /> に変換できる弁当箱を用意
            </R.Rbup>
            <P>
              <Bold>ステップ2:</Bold> 次に、
              <Highlight>
                計算箱の <CustomEmoji type="plusOne" /> の代わりに、
                <H args={{ name: 'plusOneEffect' }} />
              </Highlight>
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
              <Bold>ステップ3:</Bold>{' '}
              このふたつを合体させた弁当箱は、先ほども説明した通り、
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} /> すると{' '}
                <EmojiNumber number={2} /> になります
              </Highlight>
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
              <HighlightBold>こちらの弁当箱で「再現」できる</HighlightBold>
              ということです。
            </P>
            <R.Plde>
              <EmojiNumber number={1} /> <CustomEmoji type="plusOne" />{' '}
              の計算箱を、弁当箱で再現
            </R.Plde>
            <P>
              これが、「<Highlight>計算箱を弁当箱で再現する</Highlight>
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
              <Highlight>
                <EmojiNumber number={2} /> に変換できる弁当箱と、
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱を「<HighlightBold>2個</HighlightBold>
                」合体させればいい
              </Highlight>
              のです。
            </P>
            <R.Xhdq>
              <EmojiNumber number={2} /> に変換できる弁当箱と
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を「<HighlightBold>2個</HighlightBold>」<br />
              合体すれば、
              <EmojiNumber number={2} /> <CustomEmoji type="plusOne" />{' '}
              <CustomEmoji type="plusOne" /> の計算箱を再現できる
            </R.Xhdq>
            <P>
              上の弁当箱は実行に時間がかかるので、ここでは早送りはしませんが、
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                ボタンを押すと、答えが <EmojiNumber number={4} />{' '}
                になるのを確認できます。
              </Highlight>
            </P>
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
                <CustomEmoji type="plusOneOrange" />
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
        type: 'summary',
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

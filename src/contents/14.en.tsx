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
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import CardContent from 'src/components/CardContent'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import InlineBorder from 'src/components/InlineBorder'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        type: 'summary',
        title: <>The most complicated lunchbox you’ve seen</>,
        content: (
          <>
            <P>
              In this episode, I’ll show you the most complicated lunchbox
              you’ve seen.
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>The most complicated lunchbox you’ve seen</>}
            />
            <P>
              It will be hard, but{' '}
              <Highlight>you don’t need to understand everything.</Highlight>{' '}
              Even if you don’t fully get it, you should keep reading!
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>You don’t need to understand everything!</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            <P>On the previous page…</P>
          </>
        ),
        content: (
          <>
            <P>
              On the previous page, <Emoji>👧🏻</Emoji> Saya came up with a
              lunchbox that might be able to{' '}
              <HighlightBold>reproduce</HighlightBold>{' '}
              <H args={{ name: 'repeatFeature' }} />.
            </P>
            <R.Qycx>
              Can we reproduce this lunchbox that uses
              <br />
              <H args={{ name: 'repeatFeature' }} />…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Kjba>
              …with this lunchbox? <Emoji>🤔</Emoji>
            </R.Kjba>
            <P>
              According to <Emoji>👧🏻</Emoji> Saya,{' '}
              <Highlight>
                the above lunchbox will repeat <CustomEmoji type="plusOne" />{' '}
                three times
              </Highlight>
              , just like when using <H args={{ name: 'repeatFeature' }} />.
            </P>
            <R.Kjba>
              If you <H args={{ name: 'run', lowerCase: true }} /> this
              lunchbox…
            </R.Kjba>
            <ExpressionRunnerSeparator />
            <R.Jwce>
              Just like <H args={{ name: 'repeatFeature' }} />,<br />
              it repeats <CustomEmoji type="plusOne" /> three times
            </R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <P>Let’s see if this is actually true!</P>
          </>
        )
      },
      {
        title: <>What steps does it go through?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        On this page, we’ll{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> the
                        lunchbox that I came up with, and{' '}
                        <Highlight>see what steps it goes through</Highlight>{' '}
                        before it becomes the same as{' '}
                        <H args={{ name: 'repeatFeature' }} /> at the end.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kjba>
              When we <H args={{ name: 'run', lowerCase: true }} /> this…
            </R.Kjba>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <HighlightBold>What steps does it go through…</HighlightBold>
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <R.Jwce>
              …before it becomes the same as
              <br />
              <H args={{ name: 'repeatFeature' }} />?
            </R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see,{' '}
                        <Highlight>
                          let’s see what happens in between the beginning and
                          the end!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Alright, let’s{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> it!
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
        title: <>Let’s run it!</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Ok, let’s do it!</P>
                      <Ul>
                        <UlLi>
                          We’ll pause several times in between for explanation.
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            You don’t have to follow all the steps!
                          </Highlight>{' '}
                          Just glance over it. Save your eyes!
                        </UlLi>
                        <UlLi>
                          If you can’t wait, press{' '}
                          <Highlight highlightType="pink">
                            “<H args={{ name: 'skipToTheEnd' }} /> →”
                          </Highlight>
                          .
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
            <R.Ovua></R.Ovua>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>It’s so complicated…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>It’s not too bad if you look carefully.</P>
                      <P>
                        Take a look at this{' '}
                        <HighlightBold>yellow section</HighlightBold> in the
                        middle!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bras>
              Take a look at this <HighlightBold>yellow section</HighlightBold>
              <br />
              in the middle
            </R.Bras>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>
                          This yellow section is complicated, so let’s make it
                          simple:
                        </Bold>
                      </P>
                      <P>
                        <Highlight>
                          Let’s replace the yellow section with the{' '}
                          <Emoji>🍱</Emoji> icon
                        </Highlight>{' '}
                        to make it look simple.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Yyfi>
              Replace the yellow section
              <br />
              with the <Emoji>🍱</Emoji> icon
              <br />
              (For simplicity only)
            </R.Yyfi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>It’s much simpler now!</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        We’ll undo this replacement with the <Emoji>🍱</Emoji>{' '}
                        icon later, but for now, let’s use the <Emoji>🍱</Emoji>{' '}
                        icon to make it look simple.
                      </P>
                      <P>
                        <Bold>Anyway, let’s continue:</Bold>{' '}
                        <Highlight>
                          Because <InlineBorder type="condition" /> is{' '}
                          <EmojiNumber number={3} />, it chooses{' '}
                          <InlineBorder type="falseCase" />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Avsl></R.Avsl>
            <ExpressionRunnerSeparator />
            <R.Fkqu></R.Fkqu>
            <ExpressionRunnerSeparator />
            <R.Wjwu></R.Wjwu>
          </>
        )
      },
      {
        title: <>2周目は…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        じゃあ、<Emoji>🍱</Emoji> を省略する前の状態(
                        <Highlight>黄色の部分</Highlight>)に戻すね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ngxc>
              <Emoji>🍱</Emoji> の部分を…
            </R.Ngxc>
            <ExpressionRunnerSeparator />
            <R.Fkvy>省略前の状態に戻す</R.Fkvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、続きを見てみよう！
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwmc></R.Dwmc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        あれ…この黄色の部分は、前回省略したのとまったく同じだ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Tfsi>
              <Highlight>
                黄色の部分は、前回省略したのと
                <br />
                まったく同じ
              </Highlight>
            </R.Tfsi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう、この部分が
                        <HighlightBold>繰り返される</HighlightBold>んだよね。
                        <Emoji>🔁</Emoji>
                      </P>
                      <P>
                        では、また
                        <HighlightBold>
                          黄色の部分を <Emoji>🍱</Emoji>{' '}
                          のアイコンで省略してみた
                        </HighlightBold>
                        よ。前回と何が違うかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fkat>
              <HighlightBold>
                黄色の部分を <Emoji>🍱</Emoji> で省略してみた
              </HighlightBold>
            </R.Fkat>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>前回と比べてみると、下の黄色の部分が違うね！</P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Amjx>
                    <HighlightBold>前回と比べると…</HighlightBold>
                  </R.Amjx>
                </>
              }
              right={
                <>
                  <R.Qgau>
                    <HighlightBold>黄色の部分が違う</HighlightBold>
                  </R.Qgau>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>そう。特に注目すべきなのは以下の二点だよ。</P>
                      <Ul>
                        <UlLi>
                          先ほど <InlineBorder type="condition" /> には{' '}
                          <EmojiNumber number={3} /> が入っていたが、
                          <HighlightBold>
                            今回は <EmojiNumber number={2} /> が入っている
                          </HighlightBold>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            一番下に <CustomEmoji type="plusOne" />{' '}
                            が追加されている
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        ふむふむ…
                        <Highlight>
                          <InlineBorder type="condition" /> に入っていた数字は、
                          <EmojiNumber number={3} /> から{' '}
                          <EmojiNumber number={2} /> に「
                          <HighlightBold>1減った</HighlightBold>」というわけか。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={3} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />
              ]}
              description={
                <>
                  <InlineBorder type="condition" /> が1減った
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        じゃあもしかしたら、
                        <HighlightBold>
                          このまま続けたら、次は{' '}
                          <InlineBorder type="condition" /> の数字が{' '}
                          <EmojiNumber number={1} /> になる
                        </HighlightBold>
                        のかも…？
                      </P>
                      <P>続けて確かめてみるか。</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>3周目は…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        再度、<Emoji>🍱</Emoji> を省略する前の状態に戻したよ。
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Uwyn></R.Uwyn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          また真ん中の部分が前回と同じなので、<Emoji>🍱</Emoji>{' '}
                          のアイコンで省略してみる
                        </Highlight>
                        ね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jjet>黄色の部分は前回と同じなので…</R.Jjet>
            <ExpressionRunnerSeparator />
            <R.Cyyp>
              また <Emoji>🍱</Emoji> で省略してみた
            </R.Cyyp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>では、前回とまた比べてみよう！</P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Kosw>
                    <HighlightBold>前回と比べると…</HighlightBold>
                  </R.Kosw>
                </>
              }
              right={
                <>
                  <R.Ysxf>
                    <HighlightBold>黄色の部分が違う</HighlightBold>
                  </R.Ysxf>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>特に注目すべきなのは…</P>
                      <Ul>
                        <UlLi>
                          先ほど <InlineBorder type="condition" /> には{' '}
                          <EmojiNumber number={2} /> が入っていたが、
                          <HighlightBold>
                            今回は <EmojiNumber number={1} /> が入っている
                          </HighlightBold>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            またしても、一番下に <CustomEmoji type="plusOne" />{' '}
                            が追加されている
                          </HighlightBold>
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なんとなく、パターンが見えてきたかも…</P>
                      <P>
                        特に、
                        <Highlight>
                          <InlineBorder type="condition" /> に入っていた数字は、
                          <EmojiNumber number={3} /> から{' '}
                          <EmojiNumber number={2} /> に、
                          <EmojiNumber number={2} /> から{' '}
                          <EmojiNumber number={1} /> にと、
                          <HighlightBold>1ずつ減っている</HighlightBold>よね。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={3} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <InlineBorder type="condition" /> が1ずつ減っている
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        ということは、次は{' '}
                        <Highlight>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> になるのかな？
                        </Highlight>
                      </P>
                      <P>
                        そして、
                        <HighlightBold>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> になると、
                          <InlineBorder type="falseCase" /> ではなく{' '}
                          <InlineBorder type="trueCase" />{' '}
                          が残るようになるから、繰り返しがストップされる
                        </HighlightBold>
                        のかも？
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、確かめてみよう！
                        <HighlightBold>次が最後だよ！</HighlightBold>
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
        title: <>4周目。これが最後！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <HighlightBold>これが最後</HighlightBold>だよ！
                        <Emoji>🍱</Emoji> を省略する前の状態に戻したので、
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Snlf></R.Snlf>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          例によって、真ん中の部分が前回と同じなので、
                          <Emoji>🍱</Emoji> のアイコンで省略してみる
                        </Highlight>
                        ね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gngw>黄色の部分は前回と同じなので…</R.Gngw>
            <ExpressionRunnerSeparator />
            <R.Toem>
              また <Emoji>🍱</Emoji> で省略してみた
            </R.Toem>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>では、前回とまた比べてみよう！</P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Mibj>
                    <HighlightBold>前回と比べると…</HighlightBold>
                  </R.Mibj>
                </>
              }
              right={
                <>
                  <R.Kdgv>
                    <HighlightBold>黄色の部分が違う</HighlightBold>
                  </R.Kdgv>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> になった！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう！
                        <Highlight>
                          だから、
                          <InlineBorder type="trueCase" /> に入っている{' '}
                          <EmojiNumber number={2} /> が残ることになるね。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Afoh></R.Afoh>
            <ExpressionRunnerSeparator />
            <R.Msrk>
              <InlineBorder type="trueCase" /> に入っている{' '}
              <EmojiNumber number={2} /> が残る
            </R.Msrk>
            <ExpressionRunnerSeparator />
            <R.Jwce></R.Jwce>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        あとは、単純に <EmojiNumber number={2} />{' '}
                        <CustomEmoji type="plusOne" />{' '}
                        <CustomEmoji type="plusOne" />{' '}
                        <CustomEmoji type="plusOne" /> を計算するだけなので…
                      </P>
                      <P>
                        <HighlightBold>
                          結果は <EmojiNumber number={5} /> になります！
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jwce></R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie>
              最終結果は <EmojiNumber number={5} />
            </R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>では、ここまでを振り返ってみよう！</P>
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
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        まず、
                        <Highlight>
                          もともとの弁当箱には数字の <EmojiNumber number={3} />{' '}
                          と <EmojiNumber number={2} /> が入っていた
                        </Highlight>
                        よね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Peiy>
              数字の <EmojiNumber number={3} /> と <EmojiNumber number={2} />{' '}
              が入っていた
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そして
                        <Highlight>
                          <H args={{ name: 'run' }} />{' '}
                          すると、終了直前に以下のようになった
                        </Highlight>
                        よね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jwce>終了直前に以下のようになった</R.Jwce>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        これは…
                        <CustomEmoji type="plusOne" /> を{' '}
                        <EmojiNumber number={3} />{' '}
                        回繰り返すから、以下のように「
                        <H args={{ name: 'repeatFeature' }} />
                        」を使った計算箱とまったく同じだ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>これと全く同じ！</R.Qycx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう。つまり上の「
                        <H args={{ name: 'repeatFeature' }} />
                        」を使った計算箱は、今回実行した弁当箱で再現できるということなんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              この「
              <H args={{ name: 'repeatFeature' }} />
              」を使った
              <br />
              計算箱は…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Peiy>
              この弁当箱で「<HighlightBold>再現</HighlightBold>」できる！
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なるほど！</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        他にもたとえば、以下のように、
                        <EmojiNumber number={4} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={6} /> を計算できる計算箱でも…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Owpg>
              <EmojiNumber number={4} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={6} /> を計算できる計算箱も…
            </R.Owpg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>同じように弁当箱で再現することができるよ。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Hafp>この弁当箱で再現できる</R.Hafp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        上の弁当箱も実行すると、先ほどと同じように、終了直前に以下のようになる。だから、繰り返しの機能と同じことができるんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Sskt>
              先ほどと同じように、
              <br />
              実行が終わる直前に
              <br />
              以下のようになり…
            </R.Sskt>
            <ExpressionRunnerSeparator />
            <R.Mbje>
              <EmojiNumber number={4} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={6} /> を計算できる
            </R.Mbje>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        まとめると、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を使って、<Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
                        <Emoji>🅱️</Emoji> を計算できる計算箱は…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmbt>
              「<H args={{ name: 'repeatFeature' }} />
              」を使って、
              <br />
              <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
              を計算できる計算箱は…
            </R.Nmbt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>次のように弁当箱で再現することができるんだ。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bxuv>
              この弁当箱で「<HighlightBold>再現</HighlightBold>」できる！
            </R.Bxuv>
          </>
        )
      },
      {
        title: <>繰り返しの機能を再現できた！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        サヤちゃん、正解です！見事、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現しましたね！<Emoji>🎉</Emoji>
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
                  弁当箱で再現できた！<Emoji>🎉</Emoji>
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
                        ちなみにですが…下のように、
                        <HighlightBold>
                          <CustomEmoji type="minusOne" />{' '}
                          を繰り返す計算箱は、どうやって弁当箱で再現すればいいか
                        </HighlightBold>
                        分かりますか？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jaqs>これはどうやって弁当箱で再現する？</R.Jaqs>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        おそらく、先ほどの弁当箱で右上にあった{' '}
                        <CustomEmoji type="plusOne" /> を{' '}
                        <CustomEmoji type="minusOne" />{' '}
                        に変えるだけでいいんじゃないかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zkon>
              <HighlightBold>
                先ほどの弁当箱で右上にあった
                <br />
                <CustomEmoji type="plusOne" /> を{' '}
                <CustomEmoji type="minusOne" /> に変えるだけ(黄色の部分)
              </HighlightBold>
            </R.Zkon>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        サヤちゃん、
                        <HighlightBold>その通りです！</HighlightBold>これで、
                        <CustomEmoji type="minusOne" />{' '}
                        を繰り返す計算箱を再現できます。
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>へー、そんなに簡単なんだ！</P>
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
        title: <>魔法のYコンビネータ</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        しかし…弁当箱を使って、計算箱の「
                        <H args={{ name: 'repeatFeature' }} />
                        」を再現できるのはすごいなあ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうですね。ここでひとつ説明したいことがあります。</P>
                      <P>
                        さきほど登場した、
                        <Highlight>
                          <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
                          を計算できる弁当箱の、
                          <HighlightBold>
                            下半分に使われていた部分にご注目ください
                          </HighlightBold>
                        </Highlight>
                        。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xhul>
              <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
              を計算できる弁当箱の
              <br />
              下半分(黄色)の部分に注目
            </R.Xhul>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>この下半分の部分がどうかしたの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この下半分の部分は、<Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
                        <Emoji>🅱️</Emoji> を計算できる弁当箱だけでなく、
                        <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji>{' '}
                        を計算できる弁当箱にも使われていましたよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Anzh>
              <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji>{' '}
              を計算できる弁当箱も
              <br />
              下半分は同じだった
            </R.Anzh>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>確かにそうだけど…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実は、今回登場した弁当箱において、必ず下半分に使われていたこちらの弁当箱が、「
                        <H args={{ name: 'repeatFeature' }} />
                        」の再現を可能にしていたのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              今回登場した弁当箱において、
              <br />
              <HighlightBold>下半分の部分に使われていた</HighlightBold>
              <br />
              こちらの弁当箱が、
              <br />「<H args={{ name: 'repeatFeature' }} />
              」の再現を
              <br />
              可能にしていた
            </R.Xjzx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんと！これが、繰り返しを可能にしていたのかあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。ちなみに、この弁当箱には、
                        <HighlightBold>特殊な呼び名</HighlightBold>
                        があるんですよ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>へー、そうなんだ。何ていう呼び名なの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        「<HighlightBold>Yコンビネータ</HighlightBold>
                        」です。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              この弁当箱の名は「<HighlightBold>Yコンビネータ</HighlightBold>」
            </R.Xjzx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        「<HighlightBold>Yコンビネータ</HighlightBold>
                        」かあ。変な名前だね。
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そうなんだ。でもすごいね。
                        <HighlightBold>
                          こんなシンプルな、二種類の料理しかない弁当箱が、繰り返しを可能にするなんて…
                        </HighlightBold>
                      </P>
                      <P>
                        <HighlightBold>まるで、魔法みたい！</HighlightBold>
                        <Emoji size="mdlg">🧙‍♀️</Emoji>{' '}
                        <Emoji size="mdlg">✨</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        確かに…まさに、「
                        <HighlightBold>魔法のYコンビネータ</HighlightBold>
                        」だね！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🧙‍♀️', '✨']}
              description={
                <>
                  <HighlightBold>魔法のYコンビネータ</HighlightBold>
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
                      <HighlightBold>
                        以下の法則に当てはまる弁当箱は、どれも 「
                        <HighlightBold>Yコンビネータ</HighlightBold>
                        」です。
                      </HighlightBold>
                    </P>
                    <R.Rjho>
                      この法則に当てはまる弁当箱は全部
                      <br />「<HighlightBold>Yコンビネータ</HighlightBold>」
                    </R.Rjho>
                    <P>
                      たとえば、以下のような弁当箱も「
                      <HighlightBold>Yコンビネータ</HighlightBold>
                      」です。
                    </P>
                    <R.Beug>
                      これも「
                      <HighlightBold>Yコンビネータ</HighlightBold>」
                    </R.Beug>
                  </>
                }
                preview={{
                  text: <>続きを読む</>,
                  content: (
                    <>
                      <P>
                        <Bold>ちなみに:</Bold> 上の弁当箱以外にも、「
                        <HighlightBold>Yコンビネータ</HighlightBold>
                        」の弁当箱は存在します。気になる方は、↓の「続きを読む」を押してみてください。
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
        title: <>繰り返しの機能を返してもらえる？</>,
        content: (
          <>
            <P>
              「<H args={{ name: 'repeatFeature' }} />
              」をみごと弁当箱で再現した村人たちは、悪魔のもとに行きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        どうだ、「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現したぞ！
                      </P>
                      <P>
                        約束通り、「
                        <H args={{ name: 'repeatFeature' }} />
                        」は返してもらう！これで、計算箱のすべての機能をお前から取り返せるぞ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>うぐぐ…</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              村人たちの命運やいかに？次の
              <HighlightBold>上級最後のページ</HighlightBold>
              で確かめてみましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

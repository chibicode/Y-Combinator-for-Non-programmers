import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import InlineBorder from 'src/components/InlineBorder'
import CustomEmoji from 'src/components/CustomEmoji'
// import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
// import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
// import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
// import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            <P>前回では…</P>
          </>
        ),
        content: (
          <>
            <P>
              前回は、
              <Em>
                計算箱の「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                」を、<Emoji>👧🏻</Emoji>{' '}
                サヤちゃんが考えた以下の弁当箱を使えば再現できるかも？
              </Em>
              というところで終わりました。
            </P>
            <R.Nmbt>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を使った計算箱は…
            </R.Nmbt>
            <ExpressionRunnerSeparator />
            <R.Svig>
              以下の弁当箱で「<Strong>再現</Strong>」できている？
              <Emoji>🤔</Emoji>
            </R.Svig>
            <P>今回は、これを実際に検証していきましょう！</P>
          </>
        )
      },
      {
        title: <>早送りしてみる</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、前回同様
                        <Em>
                          {' '}
                          <Emoji>🅰️</Emoji> に <EmojiNumber number={3} />、
                          <Emoji>🅱️</Emoji> に <EmojiNumber number={2} />{' '}
                        </Em>
                        を入れてみるね。
                      </P>
                      <P>
                        前回話した通り、
                        <Em>
                          <H args={{ name: 'play' }} /> すると{' '}
                          <EmojiNumber number={5} /> になる
                        </Em>
                        よ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Osxt>
              <EmojiNumber number={3} /> と <EmojiNumber number={2} /> に
            </R.Osxt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          これを今回は
                          <H args={{ name: 'fastForward' }} />{' '}
                          してみるね！早送りをすることで、どういう原理になっているかが分かるかも。
                        </Em>
                      </P>
                      <P>
                        時間がかかるので、何度も止めながらやっていくよ。というわけで、
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <Ul>
                        <UlLi>
                          複雑なので、<Em>目で追わなくても大丈夫だよ！</Em>
                        </UlLi>
                        <UlLi>
                          ちょっと時間がかかるので、待てない方は下の「
                          <Strong>
                            <H args={{ name: 'skipToTheStoppingPoint' }} /> →
                          </Strong>
                          」を押してね！
                        </UlLi>
                      </Ul>
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
                      <P>めちゃくちゃ複雑だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        でもちょっと立ち止まって考えてみて。まず、この
                        <Em>真ん中の黄色で示した部分</Em>に注目してくれる？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bras>
              真ん中の<Strong>黄色の部分</Strong>に注目
            </R.Bras>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        上の黄色の部分が複雑なので、
                        <Em>
                          <Strong>分かりやすくするために、</Strong>そこだけを{' '}
                          <Emoji>🍱</Emoji>{' '}
                          のアイコンに置き換えて省略してみると、下のようになる
                        </Em>
                        よ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Yyfi>
              先ほどの弁当箱の<Strong>黄色の部分</Strong>を<br />
              <Emoji>🍱</Emoji> と置き換えて省略した
            </R.Yyfi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>この時点で、</P>
                      <Ul>
                        <UlLi>
                          <Strong>
                            <InlineBorder type="condition" /> には{' '}
                            <EmojiNumber number={3} /> が入っている
                          </Strong>
                        </UlLi>
                      </Ul>
                      <P>…ということを覚えておいてね。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Amjx>
              <Strong>
                <InlineBorder type="condition" /> には{' '}
                <EmojiNumber number={3} /> が入っている
              </Strong>
            </R.Amjx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ん？なんでそれを覚えておく必要があるんだい？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>後で大事になってくるからだよ。</P>
                      <P>
                        では続きを見てみよう。
                        <Strong>
                          <InlineBorder type="condition" /> には{' '}
                          <EmojiNumber number={3} /> が入っているので、
                          <InlineBorder type="falseCase" /> のほうが残ります。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Avsl></R.Avsl>
            <ExpressionRunnerSeparator />
            <R.Fkqu></R.Fkqu>
          </>
        )
      },
      {
        title: <>2回目は…</>,
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
                        <Em>黄色の部分</Em>)に戻すね。
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
                        <H args={{ name: 'pressFastForward', girl: true }} />
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
              <Em>黄色の部分は、前回省略したのとまったく同じ</Em>
            </R.Tfsi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう、この部分が<Strong>繰り返される</Strong>んだよね。
                        <Emoji>🔁</Emoji>
                      </P>
                      <P>
                        では、また
                        <Strong>
                          黄色の部分を <Emoji>🍱</Emoji>{' '}
                          のアイコンで省略してみた
                        </Strong>
                        よ。前回と何が違うかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fkat>
              <Strong>
                黄色の部分を <Emoji>🍱</Emoji> で省略してみた
              </Strong>
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
                    <Strong>前回と比べると…</Strong>
                  </R.Amjx>
                </>
              }
              right={
                <>
                  <R.Qgau>
                    <Strong>黄色の部分が違う</Strong>
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
                          <Strong>
                            今回は <EmojiNumber number={2} /> が入っている
                          </Strong>
                        </UlLi>
                        <UlLi>
                          <Strong>
                            一番下に <CustomEmoji type="plusOne" />{' '}
                            が追加されている
                          </Strong>
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
                        <Em>
                          <InlineBorder type="condition" /> に入っていた数字は、
                          <EmojiNumber number={3} /> から{' '}
                          <EmojiNumber number={2} /> に「
                          <Strong>1減った</Strong>」というわけだよね。
                        </Em>
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
                        <Strong>
                          このまま続けたら、次は{' '}
                          <InlineBorder type="condition" /> の数字が{' '}
                          <EmojiNumber number={1} /> になる
                        </Strong>
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
        title: <>3回目は…</>,
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
                        <H args={{ name: 'pressFastForward', girl: true }} />
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
                        <Em>
                          また真ん中の部分が前回と同じなので、<Emoji>🍱</Emoji>{' '}
                          のアイコンで省略してみる
                        </Em>
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
                    <Strong>前回と比べると…</Strong>
                  </R.Kosw>
                </>
              }
              right={
                <>
                  <R.Ysxf>
                    <Strong>黄色の部分が違う</Strong>
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
                          <Strong>
                            今回は <EmojiNumber number={1} /> が入っている
                          </Strong>
                        </UlLi>
                        <UlLi>
                          <Strong>
                            またしても、一番下に <CustomEmoji type="plusOne" />{' '}
                            が追加されている
                          </Strong>
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
                        <Em>
                          <InlineBorder type="condition" /> に入っていた数字は、
                          <EmojiNumber number={3} /> から{' '}
                          <EmojiNumber number={2} /> に、
                          <EmojiNumber number={2} /> から{' '}
                          <EmojiNumber number={1} /> にと、
                          <Strong>1ずつ減っている</Strong>よね。
                        </Em>
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
                        <Em>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> になるのかな？
                        </Em>
                      </P>
                      <P>
                        そして、
                        <Strong>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> になると、
                          <InlineBorder type="falseCase" /> ではなく{' '}
                          <InlineBorder type="trueCase" />{' '}
                          が残るようになるから、繰り返しがストップされる
                        </Strong>
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
                        では、確かめてみよう！<Strong>次が最後だよ！</Strong>
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
        title: <>4回目。これが最後！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Strong>これが最後</Strong>だよ！<Emoji>🍱</Emoji>{' '}
                        を省略する前の状態に戻したので、
                        <H args={{ name: 'pressFastForward', girl: true }} />
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
                        <Em>
                          例によって、真ん中の部分が前回と同じなので、
                          <Emoji>🍱</Emoji> のアイコンで省略してみる
                        </Em>
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
                    <Strong>前回と比べると…</Strong>
                  </R.Mibj>
                </>
              }
              right={
                <>
                  <R.Kdgv>
                    <Strong>黄色の部分が違う</Strong>
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
                        <Strong>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={0} /> になった！
                        </Strong>
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
                        <Em>
                          だから、
                          <InlineBorder type="trueCase" /> に入っている{' '}
                          <EmojiNumber number={2} /> が残ることになるね。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      }
    ]}
  />
)

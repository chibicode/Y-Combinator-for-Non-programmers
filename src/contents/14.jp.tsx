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
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>最も複雑な弁当箱が登場</>,
        content: (
          <>
            <P>
              <Strong>今回は、今までで最も複雑な弁当箱が登場します。</Strong>
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>最も複雑な弁当箱が登場します</>}
            />
            <P>
              しかしいつも通り、
              <Em>
                内容を完全に理解する必要はありません。少しくらい分からなくても、雰囲気で読み進めていただいて大丈夫です。
              </Em>
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>完全に理解する必要はありません！</>}
            />
          </>
        )
      },
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
                計算箱の「
                <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                」を、サヤちゃんが考えた弁当箱で再現できるかも？
              </Em>
              というところで終わりました。
            </P>
            <R.Qycx>
              この「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を使った計算箱は…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Peiy>
              以下の弁当箱で再現できている？<Emoji>🤔</Emoji>
            </R.Peiy>
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
                        今回は、前回サヤが考えた弁当箱を早送りして、なぜ
                        <H args={{ name: 'play' }} /> すると{' '}
                        <EmojiNumber number={5} /> になるのかを検証してみるよ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Htir>
              <H args={{ name: 'play' }} /> すると <EmojiNumber number={5} />{' '}
              になる。
              <br />
              なぜそうなるのか、
              <br />
              今回は早送りして検証します
            </R.Htir>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        では、
                        <Em>
                          早送りしてみるね！早送りをすることで、どういう原理になっているかが分かるかも。
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うむ、やってみよう！</P>
                    </>
                  )
                }
              ]}
            />
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
                        というわけで、
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <Ul>
                        <UlLi>
                          説明のために、何度も止めながらやっていくよ。
                        </UlLi>
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
              <Em>
                黄色の部分は、前回省略したのと
                <br />
                まったく同じ
              </Em>
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
                          <Strong>1減った</Strong>」というわけか。
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
                        <Strong>
                          結果は <EmojiNumber number={5} /> になります！
                        </Strong>
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
                        <Em>
                          もともとの弁当箱には数字の <EmojiNumber number={3} />{' '}
                          と <EmojiNumber number={2} /> が入っていた
                        </Em>
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
                        <Em>
                          <H args={{ name: 'fastForward' }} />{' '}
                          していくと、終了直前に以下のようになった
                        </Em>
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
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を使った計算箱は、今回早送りした弁当箱で再現できるということなんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              この「
              <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を使った
              <br />
              計算箱は…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Peiy>
              この弁当箱で「<Strong>再現</Strong>」できる！
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
                      <P>他にもたとえば、以下のような計算箱でも…</P>
                    </>
                  )
                }
              ]}
            />
            <R.Owpg>こちらの計算箱も…</R.Owpg>
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
                        ちなみに、
                        <Em>
                          上の弁当箱を早送りすると、先ほどのように、早送りが終わる直前に下のようになる
                        </Em>
                        んだ。時間がかかるから、ここではやらないけど…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Sskt>
              上の弁当箱を早送りすると、
              <br />
              終了直前に下のようになる
            </R.Sskt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、早送りが終わる直前に上のようになるからこそ、下の計算箱を再現できているというわけだね。
                      </P>
                      <R.Owpg>これを再現できている！</R.Owpg>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう。まとめると、以下のような「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を使った計算箱は…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmbt>
              以下のような「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」<br />
              を使った計算箱は…
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
              この弁当箱で「<Strong>再現</Strong>」できる！
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
                        <Strong>繰り返しの機能</Strong>
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
                  「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
                        <Strong>
                          <CustomEmoji type="minusOne" />{' '}
                          を繰り返す計算箱は、どうやって弁当箱で再現すればいいか
                        </Strong>
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
              <Strong>
                先ほどの弁当箱で右上にあった
                <br />
                <CustomEmoji type="plusOne" /> を{' '}
                <CustomEmoji type="minusOne" /> に変えるだけ(黄色の部分)
              </Strong>
            </R.Zkon>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        サヤちゃん、<Strong>その通りです！</Strong>これで、
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
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を再現できるのはすごいなあ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。そして、
                        <Em>
                          今回登場した弁当箱の、
                          <Strong>
                            下半分に使われていた部分にご注目ください
                          </Strong>
                        </Em>
                        。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xhul>下半分(黄色)の部分に注目</R.Xhul>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実は、今回登場した弁当箱において、必ず下半分に使われていたこちらの弁当箱が、「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
              <Strong>下半分の部分に使われていた</Strong>
              <br />
              こちらの弁当箱が、
              <br />「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」の再現を
              <br />
              可能にしていた
            </R.Xjzx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど。この部分は、<Emoji>🅰️</Emoji>{' '}
                        <Emoji>➕</Emoji> <Emoji>🅱️</Emoji> を再現する場合も、
                        <Emoji>🅰️</Emoji> <Emoji>➖</Emoji> <Emoji>🅱️</Emoji>{' '}
                        を再現する場合も、下半分に使われていたね。
                      </P>
                      <P>これが、繰り返しを可能にしていたのかあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうですね。ちなみに、この弁当箱には、
                        <Strong>特殊な呼び名</Strong>があるんですよ。
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
                        「<Strong>Yコンビネータ</Strong>
                        」です。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              この弁当箱の名は「<Strong>Yコンビネータ</Strong>」
            </R.Xjzx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        「<Strong>Yコンビネータ</Strong>」かあ。変な名前だね。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ちなみに、以下のような法則に当てはまる弁当箱は、どれも「
                        <Strong>Yコンビネータ</Strong>」と呼べるんですよ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rjho>
              この法則に当てはまる弁当箱は全部
              <br />「<Strong>Yコンビネータ</Strong>」
            </R.Rjho>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そうなんだ。でもすごいね。
                        <Strong>
                          こんなシンプルな、
                          <Emoji>🅰️</Emoji> と <Emoji>🅱️</Emoji>{' '}
                          の二種類の料理しかない弁当箱が、繰り返しを可能にするなんて…
                        </Strong>
                      </P>
                      <P>
                        <Strong>まるで、魔法みたい！</Strong>
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
                        確かに…まさに、「<Strong>魔法のYコンビネータ</Strong>
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
                  <Strong>魔法のYコンビネータ</Strong>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>繰り返しの機能を返してもらえる？</>,
        content: (
          <>
            <P>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」をみごと弁当箱で再現した村人たちは、悪魔のもとに行きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        どうだ、「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>」を弁当箱で再現したぞ！
                      </P>
                      <P>
                        約束通り、「
                        <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
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
              村人たちの命運やいかに？次の<Strong>上級最後のページ</Strong>
              で確かめてみましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

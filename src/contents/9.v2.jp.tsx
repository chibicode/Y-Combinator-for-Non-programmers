import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>サヤちゃんの疑問</>,
        content: (
          <>
            <P>
              サヤちゃんは、
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱について、あることに気が付きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>ねえねえ、見てほしいものがあるんだけど。</P>
                      <P>
                        まず、
                        <Em>
                          これは <EmojiNumber number={1} /> に変換できる弁当箱
                        </Em>
                        だよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cmla>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Cmla>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>うん、そうだけど、それがどうしたの？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        これを、前回サヤが考えた
                        <H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱と合体させて、
                        <H args={{ name: 'runAndConertToMathbox' }} />{' '}
                        すると、どうなると思う？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nhqo>
              <H args={{ name: 'plusOneEffect' }} />
              と合体させて、
              <br />
              <H args={{ name: 'runAndConertToMathbox' }} />
              <br />
              するとどうなる？
            </R.Nhqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        そりゃあ、
                        <Em>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できるんだから、
                          <EmojiNumber number={2} /> になるに決まっている
                        </Em>
                        だろう？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  結果は <EmojiNumber number={2} /> になるはず…？
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
                        じゃあ、
                        <H args={{ name: 'play' }} />
                        してみてよ！
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
        title: <>実行してみると…</>,
        content: (
          <>
            <P>
              それでは、
              <H args={{ name: 'pressFastForward', skippable: true }} />
            </P>
            <R.Akik />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実行を終えたので、
                        <H args={{ name: 'convert', type: 'toMathBox' }} />{' '}
                        したいところですが…
                      </P>
                      <P>
                        残念ながら、
                        <Strong>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </Strong>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Auks>計算箱に変換できない</R.Auks>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        理由はもちろん、
                        <Em>以下の法則に沿っていないからです。</Em>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Em>
                          右上には <Emoji>🅱️</Emoji> の料理が「
                          <Strong>ひとつだけ</Strong>
                          」ある必要があります。しかし、
                          <Em>
                            ここでは <Emoji>🅱️</Emoji> の料理が
                            <Strong>ふたつ</Strong>もある
                          </Em>
                          ので、計算箱に変換できないのです。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqwp>
              右上に <Emoji>🅱️</Emoji> がふたつあるので、
              <br />
              計算箱に変換できない
            </R.Vqwp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        お、おかしい…なんで <EmojiNumber number={2} />{' '}
                        に変換できる弁当箱にならないんだ？前回はちゃんとできていたのに…
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
        title: <>前回と比較してみよう</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、前回と比較してみましょう。前回実行したのは、こちらの弁当箱でした。
                      </P>
                      <P>
                        <Strong>
                          先ほどと唯一違うのは、上の部分に{' '}
                          <EmojiWithText letter="b" /> のかわりに{' '}
                          <EmojiWithText letter="e" /> が入っている
                        </Strong>
                        ところです。(<Em>黄色</Em>で示しています)
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Exbn>
              <Strong>前回実行した弁当箱:</Strong>
              <br />
              上の部分は <EmojiNumber number={1} /> に変換できる。
              <br />
              <Em>
                先ほどと違うのは、上の <EmojiForLetter letter="e" /> の部分。
              </Em>
              <br />
              それ以外はすべて先ほどと同じ。
            </R.Exbn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        こちらは、最終的に <EmojiNumber number={2} />{' '}
                        に変換できる弁当箱になりますね。
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
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、どうして結果に違いが出るんだろう？</P>
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
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
            に同じ料理があると、結果が狂う
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
                      <P>では、ここでネタばらしをしましょう。</P>
                      <P>
                        こちらに、先ほど
                        <Strong>失敗した</Strong>例をもう一度表示しています。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ybne>
              先ほど{' '}
              <Em>
                <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={1} /> を計算できなかった
              </Em>
              例
            </R.Ybne>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qlcq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ここで、
                        <Strong>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          の両方に、
                          <EmojiWithText letter="b" /> がある
                        </Strong>
                        のに注目してみてください。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kwyy>
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              の両方に
              <EmojiWithText letter="b" /> がある
            </R.Kwyy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実は、上のように{' '}
                        <Strong>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          に同じ料理があると、実行結果が狂ってしまう
                        </Strong>
                        のです。
                      </P>
                      <P>
                        実行結果が狂ってしまうから、
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />{' '}
                        を計算できない、ということになります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  <Strong>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    に同じ料理があると、
                    <br />
                    実行結果が狂う
                  </Strong>
                  <br />
                  (この場合は <EmojiWithText letter="b" /> が問題)
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>へー、そうなんだ！どうして結果が狂うの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        この例だと複雑すぎて説明が難しいので、
                        <Em>簡単な例を使って説明しますね！</Em>
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
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
            に同じ料理がない場合とある場合
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
                        では、簡単な例で説明します。次のふたつの例をご覧ください。
                      </P>
                      <Ul>
                        <UlLi>
                          左側は、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          が違います。
                        </UlLi>
                        <UlLi>
                          右側は、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          が同じ
                          <EmojiWithText letter="b" />
                          です。
                        </UlLi>
                      </Ul>
                      <P>それぞれを進めてみますね。</P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Oukl>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    が違う <EmojiForLetter letter="c" />{' '}
                    <EmojiForLetter letter="b" />
                  </R.Oukl>
                  <ExpressionRunnerSeparator />
                  <R.Etae></R.Etae>
                  <ExpressionRunnerSeparator />
                  <R.Jwdn></R.Jwdn>
                  <ExpressionRunnerSeparator />
                  <R.Yabb></R.Yabb>
                  <ExpressionRunnerSeparator />
                  <R.Hbbv></R.Hbbv>
                </>
              }
              right={
                <>
                  <R.Rypq>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    が同じ <EmojiForLetter letter="b" />{' '}
                    <EmojiForLetter letter="b" />
                  </R.Rypq>
                  <ExpressionRunnerSeparator />
                  <R.Wqml></R.Wqml>
                  <ExpressionRunnerSeparator />
                  <R.Abnp></R.Abnp>
                  <ExpressionRunnerSeparator />
                  <R.Osff></R.Osff>
                  <ExpressionRunnerSeparator />
                  <R.Fxok></R.Fxok>
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
                          左側は、下のふたつが違うけど、右側は下のふたつが同じになった！
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>そうなんです。このまま最後まで実行すると、</P>
                      <Ul>
                        <UlLi>
                          左側は{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          の <EmojiWithText letter="c" /> が残るのに対し、
                        </UlLi>
                        <UlLi>
                          右側は{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          の <EmojiWithText letter="d" /> が残ります。
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Lxhc></R.Lxhc>
                  <ExpressionRunnerSeparator />
                  <R.Nntn></R.Nntn>
                  <ExpressionRunnerSeparator />
                  <R.Yxel></R.Yxel>
                </>
              }
              right={
                <>
                  <R.Hvqy></R.Hvqy>
                  <ExpressionRunnerSeparator />
                  <R.Veft></R.Veft>
                  <ExpressionRunnerSeparator />
                  <R.Bdme></R.Bdme>
                  <ExpressionRunnerSeparator />
                  <R.Ivol></R.Ivol>
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
                        というわけで、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        に同じ料理がない場合とある場合で、最終的な結果が狂ってくることがお分かりいただけたでしょうか。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  <Strong>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    に同じ料理があると、
                    <br />
                    実行結果が狂う
                  </Strong>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>話を戻すと…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、先ほど <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
                        を計算できなかった弁当箱に話を戻しましょう。
                      </P>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        の両方に
                        <EmojiWithText letter="b" />{' '}
                        があるので、結果が狂うのですね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kwyy>
              <Em>
                <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={1} /> を計算できなかった
              </Em>
              理由:
              <br />
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              の両方に
              <EmojiWithText letter="b" /> が<br />
              あるせいで、結果が狂ったから
            </R.Kwyy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>じゃあ、どうすればいいんだろう？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Strong>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          のどちらかの
                          <EmojiWithText letter="b" />{' '}
                          を別の料理に変えれば、上手くいく
                        </Strong>
                        というわけだよね。
                      </P>
                      <P>
                        じゃあ…
                        <Em>
                          ベンケイさんお願い！<Strong>特別ルール</Strong>
                          を設けてくれないかな？
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>どういうことですか？</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        に、「
                        <Strong>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          に同じ料理が登場したら、どちらかを別な料理に変える
                        </Strong>
                        」という特別ルールを設けてほしいんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>🙇🏻‍♀️</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  <Strong>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    に同じ料理が登場したら、
                    <br />
                    どちらかを別な料理に変える
                  </Strong>
                  <br />
                  という特別ルールを設けてほしい
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
                        <Strong>分かりました、いいですよ！</Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>やったー、ありがとう！</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>え、そんなに簡単にルールを改変してくれるの…？</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>特別ルール</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>それでは、</P>
                      <Ul>
                        <UlLi>
                          <Em>
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />{' '}
                            と{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />{' '}
                            に同じ料理が登場したら、
                          </Em>
                        </UlLi>
                        <UlLi>
                          <Strong>
                            自動的に{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />{' '}
                            を別の料理に変える
                          </Strong>
                        </UlLi>
                      </Ul>
                      <P>という特別ルールを設けましょう。</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>➡</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  に同じ料理が登場したら、
                  <br />
                  <Strong>
                    自動的に{' '}
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    が別の料理に変わる
                  </Strong>
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
                        つまり、先ほどのように{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        に同じ料理が登場した場合…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Smdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Strong>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          の <EmojiWithText letter="b" />
                          が自動的に別の料理に変わります。
                        </Strong>
                      </P>
                      <P>
                        <Em>
                          何に変わるかについてですが、
                          <Strong>
                            まだ使われていない料理にランダムで変わります
                          </Strong>
                          。ここでは、
                          <EmojiWithText letter="e" /> になりました。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Niwv />
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="callArg">
                  <EmojiForLetter letter="b" />
                </EmojiForLetterWithBottomRightBadgeWrapper>,
                <Emoji>➡️</Emoji>,
                <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="callArg">
                  <EmojiForLetter letter="e" />
                </EmojiForLetterWithBottomRightBadgeWrapper>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> の
                  <EmojiWithText letter="b" /> が、まだ
                  <br />
                  使われていない
                  <EmojiWithText letter="e" /> に変わる
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
                        これで、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        が被らなくなりました。
                      </P>
                      <P>
                        では、最後まで進めてみましょう。
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fsgq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やった！無事、
                        <EmojiNumber number={2} /> に変換できる弁当箱になった！
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
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ということは、
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> を計算できたということだね！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        その通りです。では、そろそろ今回のまとめに入りましょう！
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
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              前回サヤちゃんが考えた
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱は、
            </P>
            <R.Nvqu>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱
            </R.Nvqu>
            <P>
              次の
              <Em>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </Em>
              と組み合わせた場合、
            </P>
            <R.Cmla>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Cmla>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              に同じ料理があり、そのままだと結果が狂ってしまいます。
            </P>
            <R.Kwyy>
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              の両方に
              <EmojiWithText letter="b" /> がある
            </R.Kwyy>
            <P>しかし、今回から新たに以下の特別ルールが適用されます:</P>
            <Ul>
              <UlLi>
                <Em>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  に同じ料理が登場したら、
                </Em>
              </UlLi>
              <UlLi>
                <Strong>
                  自動的に{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  を別の料理に変える
                </Strong>
              </UlLi>
            </Ul>
            <R.Niwv />
            <P>
              これにより、正しく <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できるようになります。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、このことを覚えておくのが難しそうだなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ご心配なく！
                        <Em>
                          この特別ルールは次のページ以降で登場する弁当箱でも使われますが、
                        </Em>
                        <Strong>暗記する必要はありません。</Strong>
                      </P>
                      <P>
                        なんとなく「
                        <Em>こういう法則があるんだな</Em>
                        」と思ってくだされば大丈夫です！
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
        title: <>これで完璧！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        いろいろあったけど、これで、
                        <H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱は完璧にマスターしたぞ！
                      </P>
                      <P>悪魔よ、約束通り計算箱は返してもらう！</P>
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
              果たして、村人たちは計算箱を取り戻せたのでしょうか？次のページで確かめてみましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

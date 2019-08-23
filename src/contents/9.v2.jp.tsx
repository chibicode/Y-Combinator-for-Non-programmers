import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'

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
                        これを、前回わたしが考えた
                        <H args={{ name: 'plusOneEffect' }} />
                        と合体させて、
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
              の両方に <EmojiWithText letter="b" /> がある
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
                    実行結果が狂う。
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
                      <P>次のふたつの例をご覧ください。</P>
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
                    が違う
                  </R.Oukl>
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
                    が同じ
                  </R.Rypq>
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
                        どちらも{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        が一致しているので…
                      </P>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        が{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        にコピーされます。
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

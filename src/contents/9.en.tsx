import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  Bold,
  Italic,
  UlLi
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Saya’s Question</>,
        content: (
          <>
            <P>Looks like Saya noticed something strange.</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey guys, can you take a look at this?</P>
                      <P>
                        First, this lunchbox can be converted to{' '}
                        <EmojiNumber number={1} />, right?
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
                      <P>Yes, but what about it?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          What do you think happens if I combined it with a
                          lunchbox that has{' '}
                          <H args={{ name: 'plusOneEffect' }} />?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nhqo>
              If I combined it with a lunchbox that has
              <br />
              <H args={{ name: 'plusOneEffect' }} />, and…
            </R.Nhqo>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              What happens?
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        Well, because it calculates <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />, the result
                        should be <EmojiNumber number={2} />, right?
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
                  The result should be <EmojiNumber number={2} />
                  …?
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Let’s run it to check!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>If you run it…</>,
        content: (
          <>
            <P>
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
                        <Bold>Unfortunately:</Bold> I won’t be able to convert
                        this lunchbox into a mathbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Auks>Can’t convert this into a mathbox</R.Auks>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Why?:</Bold> Because it doesn’t follow this
                        pattern.
                      </P>
                      <R.Eozk>
                        <H
                          args={{
                            name: 'convertiblePatternCaption',
                            skipFirst: true
                          }}
                        />
                      </R.Eozk>
                      <P>
                        There needs to be exactly one <Emoji>🅱️</Emoji> on the
                        top-right, but there are <Italic>two</Italic> in this
                        case.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqwp>
              There needs to be exactly one <Emoji>🅱️</Emoji>
              <br />
              on the top-right, but there are two.
              <br />
              That’s why it cannot be converted to a mathbox.
            </R.Vqwp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… what’s going on? Last time, we got{' '}
                        <EmojiNumber number={2} />…
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
        title: <>Let’s compare with the last time</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s compare with the last time. Previously, we used
                        the following lunchbox:
                      </P>
                      <P>
                        <Bold>The only difference</Bold>: It has{' '}
                        <EmojiForLetter letter="e" />
                        ’s on the top instead of <EmojiForLetter letter="b" />
                        ’s. Everything else is the same.
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
              <HighlightBold>What used last time:</HighlightBold>
              <br />
              It has <EmojiForLetter letter="e" />
              ’s on top instead of <EmojiForLetter letter="b" />
              ’s.
              <br />
              Everything else is the same.
            </R.Exbn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This one did become a lunchbox that can be converted to{' '}
                        <EmojiNumber number={2} />.
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
                      <P>Hmm, why is there a difference?</P>
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
            If there are the same items on{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />, the
            results will differ
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
                        <HighlightBold>失敗した</HighlightBold>
                        例をもう一度表示しています。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ybne>
              先ほど{' '}
              <Highlight>
                <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={1} /> を計算できなかった
              </Highlight>
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
                        <HighlightBold>
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
                        </HighlightBold>
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
                        実は、このように{' '}
                        <HighlightBold>
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
                        </HighlightBold>
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
                  <HighlightBold>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    に同じ料理があると、
                    <br />
                    実行結果が狂う
                  </HighlightBold>
                  <br />
                  (先ほどの場合は
                  <EmojiWithText letter="b" /> が<br />
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="callArg"
                  /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  両方にある)
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
                        <Highlight>簡単な例を使って説明しますね！</Highlight>
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
                    が違う
                  </R.Oukl>
                  <ExpressionRunnerSeparator />
                  <R.Etae></R.Etae>
                  <ExpressionRunnerSeparator />
                  <R.Jwdn></R.Jwdn>
                  <ExpressionRunnerSeparator />
                  <R.Yabb></R.Yabb>
                  <ExpressionRunnerSeparator />
                  <R.Hbbv>下の料理が違う</R.Hbbv>
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
                  <ExpressionRunnerSeparator />
                  <R.Wqml></R.Wqml>
                  <ExpressionRunnerSeparator />
                  <R.Abnp></R.Abnp>
                  <ExpressionRunnerSeparator />
                  <R.Osff></R.Osff>
                  <ExpressionRunnerSeparator />
                  <R.Fxok>下の料理が同じ</R.Fxok>
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
                          左側は、下のふたつの料理が違うけど、右側は下のふたつの料理が同じになった！
                        </HighlightBold>
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
                        最初と最後だけをピックアップすると、以下のようになります。
                      </P>
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
                  <ExpressionRunnerSeparator />
                  <R.Yxel></R.Yxel>
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
                  <HighlightBold>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    に同じ料理があると、
                    <br />
                    実行結果が狂う
                  </HighlightBold>
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
              <Highlight>
                <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                <EmojiNumber number={1} /> を計算できなかった
              </Highlight>
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
                        <HighlightBold>
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
                        </HighlightBold>
                        というわけだよね。
                      </P>
                      <P>
                        じゃあ…
                        <Highlight>
                          ミニオンさんお願い！
                          <HighlightBold>特別ルール</HighlightBold>
                          を設けてくれないかな？
                        </Highlight>
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
                        <HighlightBold>
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
                        </HighlightBold>
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
                  <HighlightBold>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    と{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />{' '}
                    に同じ料理が登場したら、
                    <br />
                    どちらかを別な料理に変える
                  </HighlightBold>
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
                        <HighlightBold>
                          分かりました、いいですよ！
                        </HighlightBold>
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
                          <Highlight>
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
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <HighlightBold>
                            自動的に{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />{' '}
                            を、まだ使われてない料理にランダムに変える。
                          </HighlightBold>
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
                <CustomEmoji type="singleArrow" />,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  に同じ料理が登場したら、
                  <br />
                  <HighlightBold>
                    自動的に{' '}
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    がまだ使われてない料理に
                    <br />
                    ランダムに変わる
                  </HighlightBold>
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
                        <HighlightBold>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          の <EmojiWithText letter="b" />
                          が自動的に別の料理に変わります。
                        </HighlightBold>
                      </P>
                      <P>
                        <Highlight>
                          何に変わるかについてですが、
                          <HighlightBold>
                            まだ使われていない料理にランダムに変わります
                          </HighlightBold>
                          。ここでは、
                          <EmojiWithText letter="e" /> になりました。
                        </Highlight>
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
                <CustomEmoji type="singleArrow" />,
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
                  type: 'surprised',
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
                        が被らなくなった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
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
              <Highlight>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </Highlight>
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
                <Highlight>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  に同じ料理が登場したら、
                </Highlight>
              </UlLi>
              <UlLi>
                <HighlightBold>
                  自動的に{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  を、まだ使われてない料理にランダムに変える。
                </HighlightBold>
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
                      <P>うーん、この特別ルールは忘れてしまいそうだなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ご心配なく！
                        <Highlight>
                          この特別ルールは次のページ以降で登場する弁当箱でも使われますが、
                        </Highlight>
                        <HighlightBold>
                          暗記する必要はありません。
                        </HighlightBold>
                        早送り中に自動で行われますから。
                      </P>
                      <P>
                        なんとなく「
                        <Highlight>こういう法則があるんだな</Highlight>
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

import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
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
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { BlankNumberPlusOne } from 'src/contents/8.jp'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>前回の復習</>,
        content: (
          <>
            <P>
              前回は、<Emoji>👧🏻</Emoji>{' '}
              サヤちゃんの弁当箱を使うことで、計算箱の「
              <H args={{ name: 'plusOneFeature' }} />
              」を再現できることを学びました。
            </P>
            <BlankNumberPlusOne />
            <P>それでは、話を進めましょう！</P>
          </>
        )
      },
      {
        title: <>サヤちゃんの疑問</>,
        content: (
          <>
            <P>サヤちゃんは、あることに気が付きました。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>ねえねえ、見てほしいものがあるんだけど。</P>
                      <P>
                        まず、
                        <Highlight>
                          これは <EmojiNumber number={1} /> に変換できる弁当箱
                        </Highlight>
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
                        これを、
                        <Highlight>
                          前回サヤが考えた「
                          <H args={{ name: 'plusOneFeature' }} />
                          」を再現できる弁当箱と合体させて、実行するとどうなる
                        </Highlight>
                        と思う？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nhqo>
              「
              <H args={{ name: 'plusOneFeature' }} />
              」を再現できる
              <br />
              弁当箱と合体させて…
            </R.Nhqo>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <H args={{ name: 'run' }} /> するとどうなる？
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        そりゃあ、
                        <Highlight>
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> を計算できるんだから、
                          <EmojiNumber number={2} />{' '}
                          に変換できる弁当箱になるに決まっている
                        </Highlight>
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
                  <EmojiNumber number={2} /> に変換できる
                  <br />
                  弁当箱になるはず…？
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
                        <H args={{ name: 'run' }} />
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
              <H args={{ name: 'pressRun', skippable: true }} />
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
                        <H args={{ name: 'convertToMathbox' }} />{' '}
                        したいところですが…
                      </P>
                      <P>
                        残念ながら、
                        <HighlightBold>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </HighlightBold>
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
                        理由は、
                        <Highlight>
                          以下の法則に沿っていないからです。
                        </Highlight>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Highlight>
                          右上には <Emoji>🅱️</Emoji> の料理が「
                          <HighlightBold>ひとつだけ</HighlightBold>
                          」ある必要があります。しかし、
                          <Highlight>
                            ここでは <Emoji>🅱️</Emoji> の料理が
                            <HighlightBold>ふたつ</HighlightBold>もある
                          </Highlight>
                          ので、計算箱に変換できないのです。
                        </Highlight>
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
                        まず、先ほどの失敗した弁当箱に{' '}
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
              maxVariableSize="sm"
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
              maxVariableSize="sm"
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
              maxVariableSize="sm"
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
                    に同じ料理があると…
                  </HighlightBold>
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="c" />,
                <CustomEmoji type="doubleArrow" />,
                <EmojiForLetter letter="d" />
              ]}
              description={
                <>
                  <HighlightBold>実行結果が狂う</HighlightBold>
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
                        <H args={{ name: 'lunchBoxPuzzle' }} />
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
                        つまり、先ほどのように <EmojiWithText letter="b" /> が{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        両方に登場した場合…
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
                      <EmojiSeparator
                        nodes={[
                          <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="callArg">
                            <EmojiForLetter letter="b" />
                          </EmojiForLetterWithBottomRightBadgeWrapper>,
                          <CustomEmoji type="singleArrow" />,
                          <Emoji>❓</Emoji>
                        ]}
                        description={
                          <>
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />{' '}
                            の
                            <EmojiWithText letter="b" /> が、
                            <br />
                            自動的に別の料理に変わる
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>じゃあ、何の料理に変わるの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        これは、
                        <Highlight>
                          <HighlightBold>
                            まだ使われていない料理にランダムに変わります
                          </HighlightBold>
                          。ここでは、
                          <EmojiWithText letter="e" /> になります。
                        </Highlight>
                      </P>

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
                            まだ使われていない
                            <br />
                            <EmojiWithText letter="e" /> に変わる
                          </>
                        }
                      />
                    </>
                  )
                }
              ]}
            />
            <R.Niwv />
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
                        <H args={{ name: 'pressRun' }} />
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
              前回サヤちゃんが考えた「
              <H args={{ name: 'plusOneFeature' }} />
              」を再現できる弁当箱は、
            </P>
            <R.Vcqp>
              <Emoji>👧🏻</Emoji> サヤちゃんが考えた
              <br />
              「
              <H args={{ name: 'plusOneFeature' }} />
              」を
              <br />
              再現できる弁当箱
            </R.Vcqp>
            <P>
              次の
              <Highlight>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </Highlight>
              と合体させた場合、
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
            <R.Smdm />
            <ExpressionRunnerSeparator />
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
                      <P>
                        うーん、理解はできたけど、この特別ルールは忘れてしまいそうだなあ…
                      </P>
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
                        実行中に自動で行われますから。
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
                        いろいろあったけど、これで、 「
                        <H args={{ name: 'plusOneFeature' }} />」
                        を再現できる弁当箱は完璧にマスターしたぞ！
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

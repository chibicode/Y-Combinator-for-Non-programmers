import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold
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
import * as R from 'src/components/Runners'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>難易度が上がります</>,
        content: (
          <>
            <P>
              <HighlightBold>
                このページからまた難易度がアップします。
              </HighlightBold>
              ただ、
              <Highlight>
                内容を完全に理解する必要はありません。少しくらい分からなくても、雰囲気で読み進めていただいて大丈夫です。
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>完全に理解する必要はありません！</>}
            />
          </>
        )
      },
      {
        title: <>とても複雑な弁当箱</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、これから「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現するのに役立つヒントを出していきますね。
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
                  type: 'dog',
                  children: (
                    <>
                      <P>まずは、こちらの弁当箱をご覧ください。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>
              <H args={{ name: 'runAndConvertToMathbox' }} />
              <br />
              するとどうなる？
            </R.Bnyo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>めちゃくちゃ複雑な弁当箱だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ここで質問です。
                        <HighlightBold>
                          上の弁当箱を、
                          <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                          すると、どんな結果になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          そんなの、すぐ答えられるわけないだろう！
                        </Highlight>
                        こんな複雑な弁当箱、
                        <H args={{ name: 'play' }} /> するのもひと苦労だよ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        サヤはすぐ分かったよ！
                        <H args={{ name: 'runAndConvertToMathbox' }} /> すると、
                        <HighlightBold>
                          結果は <EmojiNumber number={4} /> になる
                        </HighlightBold>
                        んじゃない？
                      </P>
                      <R.Kizi>
                        <Emoji>👧🏻</Emoji> 結果は <EmojiNumber number={4} />{' '}
                        になると思う！
                      </R.Kizi>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          まさにその通り！サヤちゃん、正解です！
                          <Emoji>🎉</Emoji>
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>へ？なんでそんな早く正解が分かるの…？</P>
                      <P>
                        <Highlight>
                          サヤちゃん、まさか一瞬で頭の中で
                          <H args={{ name: 'play' }} /> したのかい？
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
                        ううん、そんなことはしていないよ。じゃあ、どうやって解いたかを教えてあげるね！
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
        title: <>計算箱に置き換える・その1</>,
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
                          一番上の部分と、右の真ん中の部分に注目してみて！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dpaw>
              一番上の部分と、
              <br />
              右の真ん中の部分に注目
            </R.Dpaw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        あ、
                        <Highlight>
                          一番上の部分をよく見ると、これは{' '}
                          <EmojiNumber number={3} /> に変換できる弁当箱だ！
                        </Highlight>
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
                      <P>
                        さらに、
                        <Highlight>
                          右の真ん中の部分をよく見ると、これは{' '}
                          <EmojiNumber number={2} /> に変換できる弁当箱だ！
                        </Highlight>
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
                        そう！だから、とりあえずこれらを
                        <HighlightBold>
                          <EmojiNumber number={3} /> と{' '}
                          <EmojiNumber number={2} /> に置き換えてみる
                        </HighlightBold>
                        ね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wgby>
              それぞれ <EmojiNumber number={3} /> と <EmojiNumber number={2} />{' '}
              に置き換えてみる
            </R.Wgby>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なるほど…！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>計算箱に置き換える・その2</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>次に、この右の黄色の部分に注目してみて！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Poha>右の部分に注目</R.Poha>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        これはもしかして…
                        <Highlight>
                          中級その3でやった、
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱かな？
                        </Highlight>
                      </P>
                      <R.Vcqp>
                        <H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱
                      </R.Vcqp>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        その通り！だから、この部分をいったん{' '}
                        <HighlightBold>
                          <CustomEmoji type="plusOne" /> に置き換える
                        </HighlightBold>
                        ね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cpdy>
              <CustomEmoji type="plusOne" /> に置き換えてみる
            </R.Cpdy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど、だいぶシンプルになってきたぞ…</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>計算箱に置き換える・その3</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>最後に、右下の全ての部分に注目してみて！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Lxgj>右下の全ての部分に注目</R.Lxgj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        そういればこれは、前回やった「
                        <H args={{ name: 'conditionFeature' }} />
                        」に変換できる弁当箱と同じだ！
                      </P>
                      <R.Vlhb>
                        「<H args={{ name: 'conditionFeature' }} />
                        」に
                        <br />
                        変換できる弁当箱
                      </R.Vlhb>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        そう！だから、右下の部分を「
                        <H args={{ name: 'conditionFeature' }} />
                        」に置き換えるんだ。
                      </P>
                      <R.Ruou>
                        「<H args={{ name: 'conditionFeature' }} />
                        」に置き換える
                      </R.Ruou>
                      <P>以下のように置き換えてみるよ。</P>
                      <R.Wenx></R.Wenx>
                      <ExpressionRunnerSeparator />
                      <R.Crvj></R.Crvj>
                      <P>置き換えるとこうなります！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Awbq>
              「<H args={{ name: 'conditionFeature' }} />
              」<br />
              の部分を置き換えた後
            </R.Awbq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なんと、超シンプルになった！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>あとは実行するだけ</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        あとは、これを
                        <H args={{ name: 'play' }} />{' '}
                        するだけだよ。というわけで、
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
                      <P>
                        ここまできたら、後は簡単だよね。
                        <HighlightBold>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={3} /> だから、
                          <InlineBorder type="falseCase" /> に入っている{' '}
                          <EmojiNumber number={3} />{' '}
                          <CustomEmoji type="plusOne" /> が残る
                        </HighlightBold>
                        んだ。
                      </P>
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
                        ほらね、サヤがさっき言ったように、
                        <HighlightBold>
                          最後に <EmojiNumber number={4} /> が残った
                        </HighlightBold>
                        でしょう？
                      </P>
                      <R.Kizi>
                        <Emoji>👧🏻</Emoji> 結果は <EmojiNumber number={4} />{' '}
                        になった！
                      </R.Kizi>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>たしかに…！</P>
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

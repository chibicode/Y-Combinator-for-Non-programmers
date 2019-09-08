import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Strong, Em, Ul, UlLi } from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
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
                        では、これから「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>
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
                        <Strong>
                          上の弁当箱を、
                          <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                          すると、どんな結果になるでしょう？
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        <Em>そんなの、すぐ答えられるわけないだろう！</Em>
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
                        <Strong>
                          結果は <EmojiNumber number={4} /> になる
                        </Strong>
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
                        <Strong>
                          まさにその通り！サヤちゃん、正解です！
                          <Emoji>🎉</Emoji>
                        </Strong>
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
                        <Em>
                          サヤちゃん、まさか一瞬で頭の中で
                          <H args={{ name: 'play' }} /> したのかい？
                        </Em>
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
                        <Em>
                          一番上の部分と、右の真ん中の部分に注目してみて！
                        </Em>
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
                        <Em>
                          一番上の部分をよく見ると、これは{' '}
                          <EmojiNumber number={3} /> に変換できる弁当箱だ！
                        </Em>
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
                        <Em>
                          右の真ん中の部分をよく見ると、これは{' '}
                          <EmojiNumber number={2} /> に変換できる弁当箱だ！
                        </Em>
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
                        <Strong>
                          <EmojiNumber number={3} /> と{' '}
                          <EmojiNumber number={2} /> に置き換えてみる
                        </Strong>
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
                        <Em>
                          中級その3でやった、
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱かな？
                        </Em>
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
                        <Strong>
                          <CustomEmoji type="plusOne" /> に置き換える
                        </Strong>
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
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」に変換できる弁当箱と同じだ！
                      </P>
                      <R.Vlhb>
                        「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」に変換できる弁当箱
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
                        <Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」に置き換えるんだ。
                      </P>
                      <R.Ruou>
                        「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
                        」に置き換える
                      </R.Ruou>
                      <P>
                        以下のように置き換えてみるよ。
                        <Strong>
                          複雑なので、↓の置き換え方は読み飛ばしても大丈夫！
                        </Strong>
                      </P>
                      <Ul>
                        <UlLi>
                          上にある <EmojiForLetter letter="f" />{' '}
                          <CustomEmoji type="plusOne" /> は{' '}
                          <InlineBorder type="falseCase" /> の部分へ
                        </UlLi>
                        <UlLi>
                          その下にある <EmojiNumber number={2} /> は{' '}
                          <InlineBorder type="trueCase" /> の部分へ
                        </UlLi>
                        <UlLi>
                          一番下の <EmojiForLetter letter="f" /> は{' '}
                          <InlineBorder type="condition" /> の部分へ
                        </UlLi>
                      </Ul>
                      <P>置き換えるとこうなります！</P>
                    </>
                  )
                }
              ]}
            />
            <R.Awbq>
              「<Strong>条件分岐の機能</Strong> <Emoji>↕️</Emoji>
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
                        <Strong>
                          <InlineBorder type="condition" /> が{' '}
                          <EmojiNumber number={3} /> だから、
                          <InlineBorder type="falseCase" /> に入っている{' '}
                          <EmojiNumber number={3} />{' '}
                          <CustomEmoji type="plusOne" /> が残る
                        </Strong>
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
                        <Strong>
                          最後に <EmojiNumber number={4} /> が残った
                        </Strong>
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
                        <Em>サヤちゃんがとった手法はズルなんじゃないか？</Em>
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        <Strong>
                          もともとの弁当箱を、そのまま
                          <H args={{ name: 'play' }} />{' '}
                          しても、同じ結果になっていたのかな？
                        </Strong>
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
              <H args={{ name: 'play' }} /> しても、サヤちゃんの
              <br />
              手法と同じ結果になっていたか？
            </R.Bnyo>
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
                          ステップが非常に多いので、
                          <Strong>3倍速で早送りします！</Strong>{' '}
                          <Emoji>⏩</Emoji> <Emoji>⏩</Emoji> <Emoji>⏩</Emoji>
                        </UlLi>
                        <UlLi>
                          <Em>
                            早送り中は、目に優しくなるように弁当箱を半透明にしています。
                          </Em>
                        </UlLi>
                        <UlLi>
                          待てない方は、「
                          <Strong>
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </Strong>
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
                        <Strong>
                          <EmojiNumber number={4} /> に変換できる弁当箱
                        </Strong>
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
                        <Strong>
                          サヤちゃんのやり方でやったときと、結果が同じになった！
                        </Strong>
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
                        <Strong>
                          弁当箱の一部分を、同じ効果がある計算箱と置き換える
                        </Strong>
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
                        <Em>
                          このように弁当箱の一部分を計算箱と置き換えても、
                          <Strong>実行したら結果は同じになる</Strong>
                        </Em>
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
              <Strong>
                実行したら
                <br />
                結果は同じになる！
              </Strong>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに先ほどの場合は、
                        <Em>
                          サヤちゃんの手法を使っても、そのまま実行しても、どちらも結果は{' '}
                          <EmojiNumber number={4} /> になった
                        </Em>
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
                        <Em>
                          複雑な弁当箱は、それぞれの部分をシンプルな計算箱に置き換えると分かりやすくなります。
                        </Em>
                      </P>
                      <P>
                        <Strong>
                          結果は変わらないのだから、積極的に置き換えていくべき
                        </Strong>
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
              <CustomEmoji type="mathBox" /> シンプルな計算箱に置き換えると
              <br />
              分かりやすくなる
            </R.Ghwe>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Strong>
                ちなみに、どちらの場合も
                <br />
                実行結果は <EmojiNumber number={4} /> になる
              </Strong>
            </ExpressionRunnerCaptionOnly>
          </>
        )
      },
      {
        title: <>繰り返しの機能との繋がり</>,
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
                        <Em>
                          この話って、「
                          <Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                          」の何の関係があるの？
                        </Em>
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
            <P>すると、サヤちゃんがまた何かに気づいたようです。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ねえねえ、面白いことを発見したんだけど、ちょっと見てくれる？
                      </P>
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
                        <Strong>いろいろ追加してみた</Strong>の。
                        <Em>黄色の部分が追加した部分</Em>だよ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cefx>
              <Strong>黄色が追加した部分</Strong>
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
                      <P>(次の回で早送りするけど、今回は省略します！)</P>
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
                        結果は <EmojiNumber number={5} /> になったけど…？
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        この <EmojiNumber number={5} /> って、
                        <Strong>
                          実行前の弁当箱に入っていたふたつの数字である、
                          <EmojiNumber number={3} /> と{' '}
                          <EmojiNumber number={2} /> を足した数
                        </Strong>
                        だよね？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Peiy>
              黄色の部分の <EmojiNumber number={3} /> と{' '}
              <EmojiNumber number={2} /> を足した数
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
                        じゃあたとえば、
                        <Strong>
                          もともとの弁当箱に入ってる <EmojiNumber number={3} />{' '}
                          と <EmojiNumber number={2} /> の部分を…
                        </Strong>
                      </P>
                      <P>
                        <Strong>
                          <EmojiNumber number={6} /> と{' '}
                          <EmojiNumber number={4} />{' '}
                          にそれぞれ変えてみたらどうなる
                        </Strong>
                        と思う？
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={3} />,
                          <CustomEmoji type="singleArrow" />,
                          <EmojiNumber number={6} />
                        ]}
                        noBottomMargin
                      />
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={2} />,
                          <CustomEmoji type="singleArrow" />,
                          <EmojiNumber number={4} />
                        ]}
                        noTopMargin
                        description={<>数字を変えてみたらどうなる？</>}
                      />
                      <P>
                        下の弁当箱で変えてみたので、
                        <H args={{ name: 'play' }} /> を押してみて！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bfau>
              <Strong>
                数字の部分を <EmojiNumber number={6} /> と{' '}
                <EmojiNumber number={4} /> に変えてみた
              </Strong>
            </R.Bfau>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        今度は、
                        <EmojiNumber number={10} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        これは、
                        <EmojiNumber number={6} /> と <EmojiNumber number={4} />{' '}
                        を足した結果だよね。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        ということは…サヤちゃんの弁当箱は下のように、
                        <Emoji>🅰️</Emoji> と <Emoji>🅱️</Emoji>{' '}
                        に入っている数字を足し算してくれるのかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Szdm>
              <Strong>
                <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
                を計算してくれる？<Emoji>🤔</Emoji>
              </Strong>
            </R.Szdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>でも、思い出してみて！</P>
                      <P>
                        「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                        」を使っても、以下のように同じように <Emoji>
                          🅰️
                        </Emoji>{' '}
                        <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
                        を計算することができるよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmbt>
              <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji> を計算
            </R.Nmbt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        たとえば、以下のようにすれば <EmojiNumber number={6} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={4} />{' '}
                        を計算できるよね。
                      </P>
                      <R.Voeb>以下のようにすれば…</R.Voeb>
                      <ExpressionRunnerSeparator />
                      <R.Deay></R.Deay>
                      <ExpressionRunnerSeparator />
                      <R.Mbje>
                        <EmojiNumber number={6} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={4} /> を計算できる
                      </R.Mbje>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>確かに。とういうことはもしかして…</P>
                      <P>
                        以下のような「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>」を使った計算箱は…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmbt>
              「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
              」を使った計算箱は…
            </R.Nmbt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        さっきのサヤちゃんが考えた弁当箱で「
                        <Strong>再現</Strong>」できているのか…？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Svig>
              以下の弁当箱で「<Strong>再現</Strong>」できている？
              <Emoji>🤔</Emoji>
            </R.Svig>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        もしそうなら…「<Strong>繰り返しの機能</Strong>{' '}
                        <Emoji>🔁</Emoji>
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
                  「<Strong>繰り返しの機能</Strong> <Emoji>🔁</Emoji>
                  」を
                  <br />
                  弁当箱で再現できたかも？
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
                        では、本当に再現できたのかどうか、次のページで確かめてみましょう！先に進んでみてください！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Bold,
  Hr
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import { BasicRules, Unmatched } from 'src/contents/4.jp'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.jp'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>中級編へようこそ！</>,
        preview: {
          content: (
            <>
              <P>
                ここからは中級編です。初級編より難しくなりますが、ここまで読んでくださった方なら読み進められるはずです！
              </P>
              <Hr />
              <P>
                <Bold>初級編を忘れてしまいましたか？</Bold>
                もしかしたら、「
                <Highlight>
                  初級編を終えた後に長い休憩を取ったので、これまでの内容を忘れてしまった
                </Highlight>
                」という方もいらっしゃるかもしれません。
              </P>
              <EmojiSeparator
                emojis={['❓', '😭', '❓']}
                description={<>内容を忘れてしまいましたか？</>}
              ></EmojiSeparator>
              <P>
                そんな方のために、<HighlightBold>復習用のまとめ</HighlightBold>
                を用意しました。
                <Highlight>初級編の内容をほとんど忘れてしまった</Highlight>
                という方は、↓の「初級編の内容を復習する」を押してください。
              </P>
              <P>
                <Highlight>
                  初級編の内容がまだ頭に少しでも残っているという方は、そのまま読み進めてくださって大丈夫
                </Highlight>
                です。
              </P>
            </>
          ),
          text: <>初級編の内容を復習する</>
        },
        content: (
          <>
            <Hr />
            <P>
              まず、ラムダ村の村人たちは、悪魔に「
              <HighlightBold>計算箱</HighlightBold>
              」を奪われてしまいました。計算箱には「
              <H args={{ name: 'plusOneFeature' }} />
              」と「
              <H args={{ name: 'minusOneFeature' }} />
              」があります。
            </P>
            <TwoColGrid
              noTopNegativeMargin
              left={
                <>
                  <R.Lizi>
                    <H args={{ name: 'plusOneFeature' }} />
                  </R.Lizi>
                  <ExpressionRunnerSeparator />
                  <R.Pmdm></R.Pmdm>
                </>
              }
              right={
                <>
                  <R.Fdig>
                    <H args={{ name: 'minusOneFeature' }} />
                  </R.Fdig>
                  <ExpressionRunnerSeparator />
                  <R.Pmdm></R.Pmdm>
                </>
              }
            />
            <Hr />
            <P>
              また計算箱は、「
              <H args={{ name: 'repeatFeature' }} />
              」と組み合わせることによって、足し算や引き算を行うことができます。
            </P>
            <R.Ednv>
              「<H args={{ name: 'repeatFeature' }} />
              」を使って
              <br />
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={4} /> を計算する
            </R.Ednv>
            <Hr />
            <P>
              奪われた計算箱を取り返すためには、悪魔が出題する
              <H args={{ name: 'lunchBoxPuzzle' }} />
              を解かないといけません。弁当箱には、以下のような法則があります。
            </P>
            <BasicRules includeFuncUnbound />
            <Hr />
            <Unmatched />
            <Hr />
            <P>
              そして初級編の最後では、3段以上ある弁当箱の法則について解説しました。
            </P>
            <ThreeRowRules />
            <Hr />
            <Beginner5Rules />
            <Hr />
            <P>
              以上が初級編で話したことでした。
              <HighlightBold>
                これらの法則を暗記する必要はありません。
              </HighlightBold>
              なんとなく、「こんな法則があるんだな」と思っていただければ十分です。
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>暗記する必要はありません！</>}
            />
            <P>それでは、中級編に進みましょう！</P>
          </>
        )
      },
      {
        title: <>ミニオン登場</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ここからは中級編だ。
                        <Highlight>
                          約束した通り、この中級編で出題する難しい問題に答えることができたら、計算箱を返してやろう！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  この中級編で出す難しい問題に
                  <br />
                  答えられたら計算箱を返してやろう！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、やってやる！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        問題を出す前に、わたしの
                        <HighlightBold>助手</HighlightBold>
                        をここに呼ばせてもらおう。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なに、お前の助手だって？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>いま呼ぶから、ちょっと待つんだな。</P>
                      <P>
                        …いでよ、「<HighlightBold>ミニオン</HighlightBold>」！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🐶', '✨']}
              description={
                <HighlightBold>
                  悪魔の助手・ミニオン、ここに参上！
                </HighlightBold>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        どうも、<HighlightBold>ミニオン</HighlightBold>
                        です。お呼びですか、ご主人さま？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        よく来てくれた！こいつがわたしの助手、
                        <HighlightBold>ミニオン</HighlightBold>だ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>なんだ、ただのわんこじゃないか。</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ミニオンはそんじょそこらの犬とは違う。
                        <HighlightBold>とっておきの芸</HighlightBold>
                        を持っているからな。
                      </P>
                      <P>ミニオン、こいつらにお前の芸を見せてやるんだ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>おまかせください、ご主人さま！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>ミニオンの芸</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <Emoji>🐶</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>ぼくの芸をお見せします！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        こちらの
                        <H args={{ name: 'lunchBoxPuzzle' }} />
                        をご覧ください！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jarm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>一見、普通の弁当箱に見えるけれど…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ぼくは、
                        <HighlightBold>
                          この弁当箱を計算箱に変える
                        </HighlightBold>
                        ことができるんです！
                      </P>
                      <P>
                        下の
                        <HighlightBold>
                          「<H args={{ name: 'convertToMathbox' }} />
                          」ボタン
                        </HighlightBold>
                        を押してみてください！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jjjh />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        すごい、計算箱の <EmojiNumber number={0} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        そうなんです。ぼくは、
                        <HighlightBold>ある法則に基づいて</HighlightBold>
                        、弁当箱を計算箱に変える芸を持っているんです。
                      </P>
                      <P>
                        <Highlight>
                          その法則がどんなものか、当ててみてください！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  ある法則に基づいて、
                  <br />
                  弁当箱を計算箱に変える芸
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
                        ふーむ、どんな法則なんだろう？ほかの例も見ないと分からないなあ。
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
        title: <>どんな法則？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、こちらに3つの弁当箱を用意しました。それぞれ{' '}
                        <H args={{ name: 'convertToMathbox' }} />{' '}
                        を押してみてください！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mifg />
            <R.Epoi />
            <R.Vlob />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        どれも、ある法則に基づいて計算箱に変えているんですが、分かりましたか？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、なんとなく分かったかもしれない…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <H args={{ name: 'yesNoQuiz' }} />
                        で確かめてみましょう！
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
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
                      <P>それでは、こちらの弁当箱を…</P>
                    </>
                  )
                }
              ]}
            />
            <R.Dubm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ぼくが計算箱に変換すると、次のようになるでしょうか？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kizi />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: true }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          <H args={{ name: 'theAnswerIs', isYes: true }} />{' '}
                          だと思う！
                        </HighlightBold>
                        変換すると <EmojiNumber number={4} /> になるはずだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、
                        <H args={{ name: 'convertToMathbox' }} />{' '}
                        を押してみてくだださい！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ehxq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！ <EmojiNumber number={4} /> になったので、
                        <Emoji>⭕️</Emoji> が正解だ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>では、法則を説明しましょう！</P>
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
        title: <>法則の説明</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  どんな法則に基づいて、弁当箱を
                  <br />
                  計算箱に変えているのか説明します！
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
                        ぼくが計算箱に変換できるのは、ある特定の法則に沿った弁当箱だけなんです。
                      </P>
                      <P>
                        まず、<HighlightBold>横に3列ある弁当箱</HighlightBold>
                        でなければいけません。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pirb>
              <H args={{ name: 'convertiblePatternThreeColumnsCaption' }} />
            </R.Pirb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <HighlightBold>
                          以下の法則と一致していなければいけません。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mgku>
              <H args={{ name: 'convertiblePatternFirstCaption' }} />
            </R.Mgku>
            <R.Xxas>
              <H args={{ name: 'convertiblePatternSecondCaption' }} />
            </R.Xxas>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、具体例で説明してくれる？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        いいですよ。では、先ほど例に出したこちらの弁当箱をご覧ください。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nlyu />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>こちらの法則に従って印をつけてみます。</P>
                      <R.Mgku>
                        <H args={{ name: 'convertiblePatternFirstCaption' }} />
                      </R.Mgku>
                      <P>
                        まず、
                        <EmojiWithText letter="e" />{' '}
                        が一番左にあるので、すべての
                        <EmojiWithText letter="e" /> に <Emoji>🅰️</Emoji>{' '}
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Alca>
              <EmojiForLetter letter="e" /> が一番左にあるので、
              <br />
              すべての
              <EmojiForLetter letter="e" /> に <Emoji>🅰️</Emoji> の印をつける
            </R.Alca>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <EmojiWithText letter="f" />{' '}
                        が真ん中にあるので、すべての
                        <EmojiWithText letter="f" /> に <Emoji>🅱️</Emoji>{' '}
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mepb>
              <EmojiForLetter letter="f" /> が真ん中にあるので、
              <br />
              すべての
              <EmojiForLetter letter="f" /> に <Emoji>🅱️</Emoji> の印をつける
            </R.Mepb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        上の弁当箱はつまり、こういう <Emoji>🅰️</Emoji> と{' '}
                        <Emoji>🅱️</Emoji> の並びになっています。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Whbu></R.Whbu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>つまり、こちらの法則と一致していますね。</P>
                      <R.Eozk></R.Eozk>
                      <P>つまり、ぼくが計算箱に変換できるということです。</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど。</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          では、計算箱に変換した場合、何の数字になるのでしょうか？
                        </Highlight>
                      </P>
                      <P>
                        答えを言うと、
                        <HighlightBold>
                          右下にある <Emoji>🅰️</Emoji> がついた料理の数
                        </HighlightBold>
                        が、変換後の計算箱の数字になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほどの弁当箱の場合、
                        <Highlight>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="e" /> が「
                          <HighlightBold>2個</HighlightBold>
                          」あります。
                        </Highlight>
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={2} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wopl>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 2 }}
              />
            </R.Wopl>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど。</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          他の料理でも、同じ法則に沿っていれば、計算箱に変換したときに同じ数字になります。
                        </Highlight>
                      </P>
                      <P>
                        たとえば、 <EmojiWithText letter="k" /> と{' '}
                        <EmojiWithText letter="l" /> を以下のように配置した場合…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jyqf />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Emoji>🅰️</Emoji> と <Emoji>🅱️</Emoji>{' '}
                        は以下のようになるので…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mzqc>
              <EmojiForLetter letter="k" /> は一番左にあるので <Emoji>🅰️</Emoji>{' '}
              を、
              <br />
              <EmojiForLetter letter="l" /> は真ん中にあるので <Emoji>🅱️</Emoji>{' '}
              をつける
            </R.Mzqc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        計算箱に変換したときに先ほどと同じく{' '}
                        <EmojiNumber number={2} /> になります。
                      </P>
                      <P>
                        右下には <Emoji>🅰️</Emoji> がついた
                        <EmojiWithText letter="k" /> が「
                        <HighlightBold>2個</HighlightBold>
                        」あるからです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qwdg>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'k', number: 2 }}
              />
            </R.Qwdg>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>
                          弁当箱に入っているのがどんな料理だろうと、
                          <Emoji>🅰️</Emoji> や <Emoji>🅱️</Emoji>{' '}
                          の印をつけた際に、同じ法則に沿っていれば同じ数字に変換される
                        </HighlightBold>
                        というわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
          </>
        )
      },
      {
        title: <>他の弁当箱の例</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'yesNoQuiz' }} />
                        に登場した弁当箱にも、<Emoji>🅰️</Emoji> と{' '}
                        <Emoji>🅱️</Emoji> の印をつけてみましょう。
                      </P>
                      <P>こちらをご覧ください。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Dubm>クイズに登場した弁当箱</R.Dubm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        上の弁当箱に、先ほどの法則にしたがって <Emoji>🅰️</Emoji>{' '}
                        と <Emoji>🅱️</Emoji> の印をつけると、
                        <Highlight>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="i" />
                          が「<HighlightBold>4個</HighlightBold>」あります。
                        </Highlight>
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={4} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Duuk>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'i', number: 4 }}
              />
            </R.Duuk>
            <ExpressionRunnerSeparator />
            <R.Kizi />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={0} /> になる場合
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
                        続いて
                        <H args={{ name: 'lookAtThisLunchBox' }} />
                        。このページの冒頭で紹介した弁当箱です。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jarm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        上の弁当箱に、先ほどの法則にしたがって <Emoji>🅰️</Emoji>{' '}
                        と <Emoji>🅱️</Emoji> の印をつけると、
                        <Highlight>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="a" /> が
                          <Highlight>ひとつもありません</Highlight>。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwzy>
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiWithText letter="a" /> が<br />
              ひとつもありません。
            </R.Dwzy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、
                        <HighlightBold>
                          右下の <Emoji>🅰️</Emoji> の数は「ゼロ個」
                        </HighlightBold>
                        というわけです。
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={0} /> になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwzy>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'a', number: 0 }}
              />
            </R.Dwzy>
            <ExpressionRunnerSeparator />
            <R.Jwah />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、
                        <Highlight>
                          右下の <Emoji>🅰️</Emoji>{' '}
                          の数がゼロになる場合もあるんだね。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        はい。先ほど紹介した法則の「<Emoji>🅰️</Emoji> が
                        <HighlightBold>いくつか</HighlightBold>」というのは、「
                        <Emoji>🅰️</Emoji> が
                        <HighlightBold>ゼロ個</HighlightBold>
                        」である場合も含まれているわけです。
                      </P>
                      <R.Hehx>
                        右下にある <Emoji>🅰️</Emoji> の数が
                        <br />
                        ゼロになる場合もある
                      </R.Hehx>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>次のページで、難しい問題を出します</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ミニオン、説明ご苦労だった！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>お安い御用です、ご主人さま！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        それでは以前約束した通り、
                        <Highlight>
                          <HighlightBold>
                            次のページで難しい問題を出題する
                          </HighlightBold>
                          。それに答えることができたら、計算箱を返してやろう！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  次のページで出す難しい問題に
                  <br />
                  答えられたら計算箱を返してやろう！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        やっと計算箱を賭けた問題にチャレンジできるということだな。よーし、次のページに進むぞ！
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

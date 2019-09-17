/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors, spaces } from 'src/lib/theme'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Em,
  Strong,
  Ol,
  OlLi,
  InlineHeader,
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
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import { BasicRules, Unmatched } from 'src/contents/4.jp'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.jp'

export default () => (
  <EpisodeCardList
    underConstruction
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
              <P>
                <InlineHeader>初級編を忘れてしまいましたか？</InlineHeader>
                もしかしたら、「
                <Em>
                  初級編を終えた後に長い休憩を取ったので、これまでの内容を忘れてしまった
                </Em>
                」という方もいらっしゃるかもしれません。
              </P>
              <EmojiSeparator
                emojis={['❓', '😭', '❓']}
                description={<>内容を忘れてしまいましたか？</>}
              ></EmojiSeparator>
              <P>
                そんな方のために、<Strong>復習用のまとめ</Strong>
                を用意しました。
                <Em>初級編の内容をほとんど忘れてしまった</Em>
                という方は、↓の「初級編の内容を復習する」を押してください。
              </P>
              <P>
                <Em>
                  初級編の内容がまだ頭に少しでも残っているという方は、そのまま読み進めてくださって大丈夫
                </Em>
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
              まず、ラムダ村の村人たちは、悪魔に「<Strong>計算箱</Strong>
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
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
              <Strong>これらの法則を暗記する必要はありません。</Strong>
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
                        <Em>
                          約束した通り、この中級編で出題する難しい問題に答えることができたら、計算箱を返してやろう！
                        </Em>
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
                        問題を出す前に、わたしの<Strong>助手</Strong>
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
                        …いでよ、「<Strong>ミニオン</Strong>」！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🐶', '✨']}
              description={<Strong>悪魔の助手・ミニオン、ここに参上！</Strong>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        どうも、<Strong>ミニオン</Strong>
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
                        <Strong>ミニオン</Strong>だ。
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
                        <Strong>とっておきの芸</Strong>
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
                        <H args={{ name: 'bentoBoxPuzzle' }} />
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
                        <Strong>この弁当箱を計算箱に変える</Strong>
                        ことができるんです！
                      </P>
                      <P>
                        下の
                        <Strong>
                          「<H args={{ name: 'convertToMathbox' }} />
                          」ボタン
                        </Strong>
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
                        <Strong>ある法則に基づいて</Strong>
                        、弁当箱を計算箱に変える芸を持っているんです。
                      </P>
                      <P>
                        <Em>その法則がどんなものか、当ててみてください！</Em>
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
            <R.Otbe />
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
                        <Strong>
                          <H args={{ name: 'theAnswerIs', isYes: true }} />{' '}
                          だと思う！
                        </Strong>
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
                        ぼくが計算箱に変換できるのは、以下のような形の弁当箱なんです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Eozk>
              <H args={{ name: 'convertiblePatternCaption' }} />
            </R.Eozk>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        たとえば、先ほど例に出したこちらの弁当箱をご覧ください。
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
                      <R.Eozk></R.Eozk>
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
                      <P>上の弁当箱は、こちらの法則と一致していますね。</P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
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
                        <Em>
                          では、計算箱に変換した場合、何の数字になるのでしょうか？
                        </Em>
                      </P>
                      <P>
                        答えを言うと、
                        <Strong>
                          右下にある <Emoji>🅰️</Emoji> がついた料理の数
                        </Strong>
                        が、変換後の計算箱の数字になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              右下にある <Emoji>🅰️</Emoji> がついた料理の数が、
              <br />
              変換後の計算箱の数字
            </R.Hehx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        先ほどの弁当箱の場合、
                        <Em>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="e" /> が「<Strong>2個</Strong>
                          」あります。
                        </Em>
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
                        <Em>
                          他の料理でも、同じ法則に沿っていれば、計算箱に変換したときに同じ数字になります。
                        </Em>
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
                        <Strong>
                          弁当箱に入っているのがどんな料理だろうと、
                          <Emoji>🅰️</Emoji> や <Emoji>🅱️</Emoji>{' '}
                          の印をつけた際に、同じ法則に沿っていれば同じ数字に変換される
                        </Strong>
                        というわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              右下にある <Emoji>🅰️</Emoji> がついた料理の数が、
              <br />
              変換後の計算箱の数字
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
                        で出した弁当箱にも、<Emoji>🅰️</Emoji> と{' '}
                        <Emoji>🅱️</Emoji> の印をつけてみましょう。まずは
                        <H args={{ name: 'lookAtThisBentoBox' }} />。
                      </P>
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
                        上の弁当箱に、先ほどの法則にしたがって <Emoji>🅰️</Emoji>{' '}
                        と <Emoji>🅱️</Emoji> の印をつけると、
                        <Em>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="i" />
                          が「<Strong>4個</Strong>」あります。
                        </Em>
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
                        <H args={{ name: 'lookAtThisBentoBox' }} />
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
                        <Em>
                          右下には <Emoji>🅰️</Emoji> がついた
                          <EmojiWithText letter="a" /> が
                          <Em>ひとつもありません</Em>。
                        </Em>
                      </P>
                      <P>
                        つまり、
                        <Strong>
                          <Emoji>🅰️</Emoji> の数は「ゼロ個」
                        </Strong>
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
                        <Em>
                          右下の <Emoji>🅰️</Emoji>{' '}
                          の数がゼロになる場合もあるんだね。
                        </Em>
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
                        <Strong>いくつか</Strong>」というのは、「
                        <Emoji>🅰️</Emoji> が<Strong>ゼロ個</Strong>
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
        title: <>実行してから変換</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        さらにぼくは、
                        <Strong>
                          弁当箱を
                          <H args={{ name: 'play' }} /> してから計算箱に変換する
                        </Strong>
                        こともできます。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'play' }} />{' '}
                        してから計算箱に変換？どういうこと？
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
                <Emoji>▶️</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  <H args={{ name: 'play' }} /> してから
                  <br />
                  計算箱に変換する
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
                        ためしに、
                        <Em>
                          次の弁当箱の下にある、「
                          <H args={{ name: 'runAndConvertToMathbox' }} />
                          」ボタンを押してみてください。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dcji />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={0} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、理由を説明しますね。まず、もともとの弁当箱を実行するとどうなるか、
                        <H args={{ name: 'fastForward' }} /> で見てみましょう。
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zlrx />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、もともとの弁当箱を
                        <H args={{ name: 'play' }} />{' '}
                        すると、次のような弁当箱になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jarm>
              <H args={{ name: 'play' }} /> した結果はこうなる
            </R.Jarm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Em>
                          これは先ほど説明した通り、計算箱に変換すると{' '}
                          <EmojiNumber number={0} /> になります。
                        </Em>
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
                  type: 'dog',
                  children: (
                    <>
                      <P>このような、</P>
                      <Ol>
                        <OlLi>
                          <Em>
                            まず弁当箱を
                            <H args={{ name: 'play' }} />
                            し、
                          </Em>
                        </OlLi>
                        <OlLi>
                          <Em>
                            実行し終えたら、続いて{' '}
                            <H args={{ name: 'convertToMathbox' }} /> する
                          </Em>
                        </OlLi>
                      </Ol>
                      <P>というふたつのステップを、</P>
                      <P>
                        <ExpressionRunnerButton
                          css={css`
                            padding-left: ${spaces(1)};
                            padding-right: ${spaces(1)};
                            background: ${colors('yellow100')};
                          `}
                        >
                          <H
                            args={{
                              name: 'runAndConvertToMathbox',
                              addNewline: true
                            }}
                          />
                        </ExpressionRunnerButton>
                      </P>
                      <P>…を押すことで、一度に行うことができるのです。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Qsnv />
            <ExpressionRunnerSeparator />
            <R.Jwah>
              <Strong>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Strong>
            </R.Jwah>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、「<InlineHeader>実行</InlineHeader>」と「
                        <InlineHeader>計算箱に変換</InlineHeader>」を
                        <Strong>一括で行う</Strong>
                        こともできる、ということだな。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🍱', '▶️']}
              noBottomMargin
              description={
                <>
                  まず弁当箱を
                  <H args={{ name: 'play' }} /> し…
                </>
              }
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              noTopMargin
              description={<>計算箱に変換するのを一括で行える</>}
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
                      <P>
                        では、ここで最後に <H args={{ name: 'yesNoQuiz' }} />
                        をやってみましょう。
                      </P>
                      <P>こちらの弁当箱を…</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rlrs />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        「
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        」すると、下のようになるでしょうか？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pmdm />
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'theAnswerIs', isYes: false }} />
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
                        <Strong>
                          <H args={{ name: 'theAnswerIs', isYes: false }} />{' '}
                          だと思う！
                        </Strong>
                        変換すると <EmojiNumber number={2} /> ではなく、
                        <EmojiNumber number={1} /> になるはずだ。
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
                        <H args={{ name: 'runAndConvertToMathbox' }} />
                        を押してみてくだださい！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zahd />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！ <EmojiNumber number={1} /> になったので、
                        <Emoji>❌</Emoji> が正解だ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>その通りです！</P>
                      <P>
                        確認のために、もともとの弁当箱を
                        <H args={{ name: 'fastForward' }} />
                        してみましょう。
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Csqj />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        つまり、もともとの弁当箱を
                        <H args={{ name: 'play' }} />
                        すると、次のような弁当箱になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Igpn>
              <H args={{ name: 'play' }} /> した結果はこうなる
            </R.Igpn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Em>
                          これは、計算箱に変換すると <EmojiNumber number={1} />{' '}
                          になります。
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hhdu>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 1 }}
              />
            </R.Hhdu>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        というわけで、もともとの弁当箱を
                        <H
                          args={{ name: 'runAndConvertToMathbox' }}
                        /> すると <EmojiNumber number={2} /> ではなく{' '}
                        <EmojiNumber number={1} /> になるので、クイズの正解は{' '}
                        <Emoji>❌</Emoji> でした！
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
                        <Em>
                          <Strong>次のページで難しい問題を出題する</Strong>
                          。それに答えることができたら、計算箱を返してやろう！
                        </Em>
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

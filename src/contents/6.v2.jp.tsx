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
  InlineHeader
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import ExpressionRunnerButton from 'src/components/ExpressionRunnerButton'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>中級編へようこそ！</>,
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
                },
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
                        …いでよ、「<Strong>ベンケイ</Strong>」！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🐶', '✨']}
              description={<Strong>悪魔の助手・ベンケイ、ここに参上！</Strong>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        どうも、<Strong>ベンケイ</Strong>
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
                        <Strong>ベンケイ</Strong>だ。
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
                        ベンケイはそんじょそこらの犬とは違う。
                        <Strong>とっておきの芸</Strong>
                        を持っているからな。
                      </P>
                      <P>ベンケイ、こいつらにお前の芸を見せてやるんだ！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>わかりました、ご主人さま！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>ベンケイの芸</>,
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '🐶', '🎁']} />
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
                        <Strong>
                          <H args={{ name: 'convert', type: 'toMathBox' }} />{' '}
                          を押してみてください！
                        </Strong>
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
                },
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
                        では、こちらに3つの弁当箱を用意しました。それぞれ
                        <H args={{ name: 'convert', type: 'toMathBox' }} />
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
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Strong>
                          どれも料理は違うけど、法則は似ているような…？
                        </Strong>
                      </P>
                    </>
                  )
                },
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
                  type: 'surprised',
                  children: (
                    <>
                      <P>あ、分かったぞ！</P>
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
                          <H args={{ name: 'theAnswerIs', isYes: true }} />
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
                        <H args={{ name: 'convert', type: 'toMathBox' }} />
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
                        <Emoji>⭕️</Emoji>が正解だ！
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
              一番左の料理を<Emoji>🅰️</Emoji>、<br />
              真ん中の料理を<Emoji>🅱️</Emoji>とした場合、
              <br />
              右上に<Emoji>🅱️</Emoji>がひとつあり、
              <br />
              右下に<Emoji>🅰️</Emoji>
              がいくつかある
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
                      <P>
                        まず、
                        <EmojiWithText letter="e" />
                        が一番左にあるので、すべての
                        <EmojiWithText letter="e" />に<Emoji>🅰️</Emoji>
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Alca>
              <EmojiForLetter letter="e" />
              が一番左にあるので、
              <br />
              すべての
              <EmojiForLetter letter="e" />に<Emoji>🅰️</Emoji>
              の印をつける
            </R.Alca>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        次に、
                        <EmojiWithText letter="f" />
                        が真ん中にあるので、すべての
                        <EmojiWithText letter="f" />に<Emoji>🅱️</Emoji>
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mepb>
              <EmojiForLetter letter="f" />
              が真ん中にあるので、
              <br />
              すべての
              <EmojiForLetter letter="f" />に<Emoji>🅱️</Emoji>
              の印をつける
            </R.Mepb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>上の弁当箱は、こちらの法則と一致していますね。</P>
                      <R.Eozk>
                        一番左の料理を<Emoji>🅰️</Emoji>、<br />
                        真ん中の料理を<Emoji>🅱️</Emoji>とした場合、
                        <br />
                        右上に<Emoji>🅱️</Emoji>がひとつあり、
                        <br />
                        右下に<Emoji>🅰️</Emoji>
                        がいくつかある
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
                        答えを言うと、
                        <Strong>
                          右下にある<Emoji>🅰️</Emoji>がついた料理の数
                        </Strong>
                        が、変換後の計算箱の数字になります。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              右下にある<Emoji>🅰️</Emoji>
              がついた料理の数が、
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
                          右下には<Emoji>🅰️</Emoji>がついた
                          <EmojiWithText letter="e" />
                          が「<Strong>2個</Strong>」あります。
                        </Em>
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={2} /> になるというわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wopl>
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="e" />
              が「<Strong>2個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={2} />
              になる
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
                        ここでは <EmojiWithText letter="e" /> と{' '}
                        <EmojiWithText letter="f" /> を使いました。
                        <Em>
                          しかし他の料理でも、同じ法則に沿っていれば、計算箱に変換したときに同じ数字になります。
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
              右下には <Emoji>🅰️</Emoji> がついた
              <EmojiForLetter letter="k" />
              が「<Strong>2個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={2} />
              になる
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
                          の印をつけた際に、同じ法則に沿っていれば同じ計算箱に変換される
                        </Strong>
                        というわけです。
                      </P>
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
                      <P>何か質問はございますか？</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        ひとつ質問がある。
                        <Em>
                          上の弁当箱には{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          といった番号が出てきたけど…
                        </Em>
                      </P>
                      <P>
                        たとえば、 「
                        <Em>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          がこういう並び順でなければ、計算箱に変換できない
                        </Em>
                        」といった決まりはあるの？
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        厳密に言うとあるのですが、本稿を読み進める上では気にしなくても結構です。
                      </P>
                      <P>
                        つまり、計算箱に変換する際には、
                        <Strong>
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> や
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                          などの番号は無視し、<Emoji>🅰️</Emoji> と{' '}
                          <Emoji>🅱️</Emoji>{' '}
                          といった料理の法則だけに注目してください。
                        </Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>了解！</P>
                    </>
                  )
                }
              ]}
            />
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
                        で出した弁当箱にも、<Emoji>🅰️</Emoji>と<Emoji>🅱️</Emoji>
                        の印をつけてみましょう。まずは
                        <H args={{ name: 'lookAtThisBentoBox' }} />:
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
                        上の弁当箱に、先ほどの法則にしたがって<Emoji>🅰️</Emoji>
                        と<Emoji>🅱️</Emoji>の印をつけると、
                        <Em>
                          右下には<Emoji>🅰️</Emoji>がついた
                          <EmojiWithText letter="i" />
                          が「<Strong>4個</Strong>」あります。
                        </Em>
                      </P>
                      <P>
                        だから、これをぼくが計算箱に変換すると{' '}
                        <EmojiNumber number={4} /> になるというわけです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Duuk>
              右下には<Emoji>🅰️</Emoji>がついた
              <EmojiForLetter letter="i" />
              が「<Strong>4個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={4} />
              になる
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
                        。この章の冒頭で紹介した弁当箱です。
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
                        上の弁当箱に、先ほどの法則にしたがって<Emoji>🅰️</Emoji>
                        と<Emoji>🅱️</Emoji>の印をつけると、
                        <Em>
                          右下には<Emoji>🅰️</Emoji>がついた
                          <EmojiWithText letter="i" />が
                          <Em>ひとつもありません</Em>。
                        </Em>
                      </P>
                      <P>
                        つまり、
                        <Strong>
                          <Emoji>🅰️</Emoji>の数は「ゼロ個」
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
              右下には<Emoji>🅰️</Emoji>がついた
              <EmojiForLetter letter="i" />
              が「<Strong>ゼロ個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={0} />
              になる
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
                          右下の<Emoji>🅰️</Emoji>
                          の数がゼロになる場合もあるんだね。
                        </Em>
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
                          <H args={{ name: 'play' }} />
                          してから計算箱に変換する
                        </Strong>
                        こともできます。
                      </P>
                      <P>
                        ためしに、
                        <Em>
                          次の弁当箱の下にある、「
                          <H args={{ name: 'runAndConertToMathbox' }} />
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
                        <H args={{ name: 'fastForward' }} />
                        で見てみましょう。
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
                        <H args={{ name: 'play' }} />
                        すると、次のような弁当箱になります。
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
              右下には<Emoji>🅰️</Emoji>がついた
              <EmojiForLetter letter="i" />
              が「<Strong>ゼロ個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={0} />
              になる
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
                            <H args={{ name: 'convert', type: 'toMathBox' }} />{' '}
                            する
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
                              name: 'runAndConertToMathbox',
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
                <H args={{ name: 'runAndConertToMathbox' }} />
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
                        では、ここで最後に
                        <H args={{ name: 'yesNoQuiz' }} />
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
                        <H args={{ name: 'runAndConertToMathbox' }} />
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
                          <H args={{ name: 'theAnswerIs', isYes: false }} />
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
                        <H args={{ name: 'runAndConertToMathbox' }} />
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
                        <Emoji>❌</Emoji>が正解だ！
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
            <R.Igpn />
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
              右下には<Emoji>🅰️</Emoji>がついた
              <EmojiForLetter letter="i" />
              が「<Strong>1個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={1} />
              になる
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
                          args={{ name: 'runAndConertToMathbox' }}
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
                      <P>ベンケイ、説明ご苦労だった！</P>
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
                          次のページで、
                          <Strong>ベンケイとともに難しい問題を出題する</Strong>
                          。それに答えることができたら、計算箱を返してやろう！
                        </Em>
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        やっと計算箱を問題にチャレンジできるということだな。よーし、次のページに進むぞ！
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
                <Emoji size="mdlg">🐶</Emoji> ちなみに「
                <Strong>ベンケイ</Strong>」と名付けたのは、弁(
                <Strong>ベン</Strong>
                )当箱を計(<Strong>ケイ</Strong>)算箱に変換できるからです。
              </P>
            </>
          )
        }
      }
    ]}
  />
)

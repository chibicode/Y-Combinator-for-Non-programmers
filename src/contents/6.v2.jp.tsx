import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import { P, Em, Strong } from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'

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
                          約束した通り、これから出す問題に答えることができたら、計算箱を返してやろう！
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
                          どれも料理は違うけど、パターンは似ているような…？
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
                      <P>じゃあ、こちらの弁当箱を…)</P>
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
                      <P>
                        次に、
                        <EmojiWithText letter="f" />
                        が一番左にあるので、すべての
                        <EmojiWithText letter="f" />に<Emoji>🅱️</Emoji>
                        の印をつけてみます。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mepb>
              <EmojiForLetter letter="e" />に<Emoji>🅰️</Emoji>、
              <EmojiForLetter letter="f" />に<Emoji>🅱️</Emoji>をつける
            </R.Mepb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>上の弁当箱は、こちらのパターンと一致していますね。</P>
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
              右下には<Emoji>🅰️</Emoji>がついた
              <EmojiForLetter letter="e" />
              が「<Strong>2個</Strong>」
              <br />
              → 計算箱に変換すると
              <EmojiNumber number={2} />
              になる
            </R.Wopl>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
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
                        の印をつけてみましょう。
                      </P>
                      <P>
                        こちらの場合、
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        続いてこちらの場合、
                        <Em>
                          右下には<Emoji>🅰️</Emoji>がついた
                          <EmojiWithText letter="i" />が
                          <Em>ひとつもありません</Em>。つまり、
                          <Strong>
                            <Emoji>🅰️</Emoji>の数は「ゼロ個」
                          </Strong>
                          というわけです。
                        </Em>
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
        title: <>実行して変換</>,
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
                        <H args={{ name: 'lookAtThisBentoBox' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qsnv />
            <P>
              これを実行するとどうなるか、
              <H args={{ name: 'fastForward' }} />
              で見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Zlrx />
          </>
        )
      },
      {
        type: 'dog',
        title: <></>,
        content: <></>
      }
    ]}
  />
)

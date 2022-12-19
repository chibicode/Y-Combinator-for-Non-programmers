import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Hr,
  Bold
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import YesNoButtons from 'src/components/YesNoButtons'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import ExpressionRunnerConfigContext from 'src/components/ExpressionRunnerConfigContext'
import VariableShadeContext from 'src/components/VariableShadeContext'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>悪魔、現る</>,
        content: (
          <>
            <P>
              ある日のこと。平和だったラムダ村に突然、
              <HighlightBold>
                とてもとても恐ろしい悪魔 <Emoji>😈</Emoji>
              </HighlightBold>
              が現れました。
            </P>
            <EmojiSeparator
              emojis={['🌲', '😈', '🌲']}
              description={<>悪魔がやってきた！</>}
            />
            <P>村人たちは、悪魔を見て震え上がりました。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'scared',
                  children: (
                    <P>
                      ひぇぇ、何も悪いことしていないのに、悪魔がやってきた！
                    </P>
                  )
                },
                {
                  type: 'crying',
                  children: <P>怖いよー！もうおしまいだ！</P>
                }
              ]}
            />
            <P>悪魔はこうささやきました。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>安心しろ、お前たちの命だけは助けてやる。</P>
                      <P>
                        <Highlight>
                          だが、お前たちが大事にしている
                          <HighlightBold>
                            計算箱 <CustomEmoji type="mathBox" />
                          </HighlightBold>{' '}
                          は、すべて<HighlightBold>没収</HighlightBold>
                          させてもらうぞ！
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: <P>えー！計算箱を没収だって？そんな無慈悲な！</P>
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>なぜ計算箱を没収？</>,
        content: (
          <>
            <P>
              こうして悪魔は、
              <HighlightBold>
                ラムダ村から計算箱を取り上げてしまったのです。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>🌲</Emoji>
              ]}
              description={<>計算箱は没収だ！</>}
            />
            <P>ラムダ村からは、すべての計算箱が無くなってしまいました。</P>
            <R.Dgyc>
              <Emoji>😈</Emoji> 計算箱は没収だ！
            </R.Dgyc>
            <R.Ggxl></R.Ggxl>
            <P>
              足し算や引き算をするのに計算箱に頼り切っていた村人たちは嘆きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <P>悪魔め、どうして俺らから計算箱を取り上げるんだ！</P>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        <Highlight>俺らは計算が大の苦手なんだ。</Highlight>
                      </P>
                      <P>
                        計算箱がないと、足し算や引き算ができなくなって、村の経済が成り立たなくなるんだぞ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>悪魔は答えます。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          計算箱を取り上げたのは、お前たちが計算が苦手だからだよ。
                        </HighlightBold>
                      </P>
                      <P>
                        お前たちは簡単な計算をするのにでも計算箱に頼り切っているだろう。そんなことだから、いつまでたっても計算が上達しないんだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>それは図星かも…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          だから計算箱を取り上げることで、お前たちが計算を勉強するきっかけを作ってやったのさ。
                        </Highlight>
                        感謝するんだな！
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: <P>そんな…勉強なんてしたくないよ！</P>
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>悪魔からの挑戦状</>,
        content: (
          <>
            <P>
              なんとか計算箱を返してもらえないか、村人たちは悪魔にお願いしました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <P>お願いだ、何でもするから計算箱を返してくれないか？</P>
                  )
                },
                {
                  type: 'crying',
                  children: <P>頼む、この通りだ！</P>
                },
                {
                  type: 'devil',
                  children: (
                    <P>
                      ふむ…そこまで言うなら仕方ない。では、
                      <HighlightBold>
                        お前たちにチャンスをやろう！
                      </HighlightBold>
                    </P>
                  )
                }
              ]}
            />
            <P>悪魔が言うチャンスとは、どういうことなのでしょうか？</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          これから、
                          <HighlightBold>
                            頭を使わないと解けないパズル
                          </HighlightBold>
                          をたくさん出題する。
                          <HighlightBold>
                            すべて解けたら、計算箱を返してやってもいいぞ！
                          </HighlightBold>
                        </Highlight>
                      </P>
                      <P>
                        日頃から頭を使ってこなかったお前たちには、おそらくムリだろうがな！わはは！
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: <P>パ、パズルだって…？俺らに解けるかなあ？</P>
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        難しそう…しかし、やるしかない！計算箱を取り返すんだ！
                      </P>
                      <P>
                        <Highlight>その挑戦、受けて立つぞ！</Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ほほう…いい度胸だ。では、はじめよう！</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              こうして、村人たちは計算箱を返してもらうべく、悪魔が出題するパズルに挑戦することになりました。
            </P>
            <EmojiSeparator
              emojis={['😠', '🆚', '😈']}
              description={<>パズルを解いて、計算箱を取り返す！</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'lunchBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        お前たちに解いてもらうパズルは、{' '}
                        <HighlightBold>
                          <H args={{ name: 'lunchBoxPuzzle' }} />
                        </HighlightBold>
                        というものだ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <HighlightBold>弁当箱</HighlightBold>
                        だって？なんか美味しそうな名前だなあ…
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そして、これがその
                        <H args={{ name: 'lunchBoxPuzzle' }} />
                        だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo>
              <H args={{ name: 'lunchBoxPuzzle' }} /> の一例
            </R.Ilpo>
            <P>
              <Bold>解説:</Bold> 上のように、
              <H args={{ name: 'lunchBoxPuzzle' }} />
              には、実際の弁当箱のように、
              <Highlight>
                四角の中にいくつかマスがあり、それぞれのマスの中に料理が入っています
              </Highlight>
              。
            </P>
            <P>
              この例だと、上段には
              <EmojiWithText letter="b" />
              が入っており、
            </P>
            <VariableShadeContext.Provider
              value={{
                shadeNonHighlighted: true
              }}
            >
              <R.Vowa>
                上段には
                <EmojiWithText letter="b" />
              </R.Vowa>
            </VariableShadeContext.Provider>
            <P>
              下段には
              <EmojiWithText letter="a" />
              がふたつ入っています。
            </P>
            <VariableShadeContext.Provider
              value={{
                shadeNonHighlighted: true
              }}
            >
              <R.Elku>
                下段には
                <EmojiWithText letter="a" />
              </R.Elku>
            </VariableShadeContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なんとなく、
                        <Highlight>見た目が計算箱に似ている</Highlight>
                        気がするなあ。数字の代わりに、料理が入っているけど。
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={1} />,
                          <CustomEmoji type="mathBox" />,
                          <EmojiNumber number={2} />
                        ]}
                        description={<>計算箱には数字が入っているけど…</>}
                      />
                      <ExpressionRunnerSeparator />
                      <EmojiSeparator
                        nodes={[
                          <EmojiForLetter letter="a" />,
                          <Emoji>🍱</Emoji>,
                          <EmojiForLetter letter="b" />
                        ]}
                        description={<>弁当箱には料理が入っている</>}
                      />
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        実はこの
                        <H args={{ name: 'lunchBoxPuzzle' }} />
                        は、<Highlight>計算箱と密接な関係がある</Highlight>
                        んだが、これについては後に説明する。
                      </P>
                      <P>
                        とりあえず今は、
                        <Highlight>
                          <H args={{ name: 'lunchBoxPuzzle' }} />の
                          <H args={{ name: 'run' }} /> について見ていこう。
                        </Highlight>
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
            弁当箱を
            <H args={{ name: 'run' }} />
            する
          </>
        ),
        content: (
          <>
            <P>
              <Highlight>
                <H args={{ name: 'lunchBoxPuzzle' }} />
                は、計算箱と同じように
                <H args={{ name: 'run' }} /> することができます。
              </Highlight>
              試しに、
              <Highlight>
                <H args={{ name: 'deprecatedPressRun' }} />
              </Highlight>
            </P>
            <ExpressionRunnerConfigContext.Provider
              value={{ pointToRunButton: true }}
            >
              <R.Itbm />
            </ExpressionRunnerConfigContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'run' }} /> すると、
                        <Highlight>
                          下のふたつの <EmojiWithText letter="a" /> が消えて、
                          <EmojiWithText letter="b" /> だけが残った！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo>
              <H args={{ name: 'run' }} /> すると…
            </R.Ilpo>
            <ExpressionRunnerSeparator />
            <R.Osqo>
              <EmojiWithText letter="b" /> だけが残る
            </R.Osqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        実は、これは<HighlightBold>ある法則</HighlightBold>
                        に則っているんだ。
                      </P>
                      <P>
                        今回は、お前たちに
                        <HighlightBold>
                          その法則が何か解き明かしてもらうぞ。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  弁当箱は、<HighlightBold>どんな法則</HighlightBold>に則って
                  <br />
                  <H args={{ name: 'run' }} /> されるでしょう？
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
                        これだけだと法則が何か、まだハッキリと言えないなあ…
                        <Highlight>もう少し他の例を試してみないと！</Highlight>
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
            他の
            <H args={{ name: 'lunchBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <P>
              では、他の
              <H args={{ name: 'lunchBoxPuzzle' }} />
              も見てみましょう。
            </P>
            <Hr />
            <P>
              こちらは、上段には
              <EmojiWithText letter="e" />
              、下段には
              <EmojiWithText letter="c" />と
              <EmojiWithText letter="d" />
              が入っています。
              <H args={{ name: 'deprecatedPressRun' }} />
            </P>
            <R.Zwpj />
            <P>
              今回は
              <EmojiWithText letter="d" /> が残りました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、さっきと微妙に違うなあ…</P>
                    </>
                  )
                }
              ]}
            />
            <Hr />
            <P>
              続いて、上段に
              <HighlightBold>ふたつの料理が入っている場合</HighlightBold>
              を紹介します。
            </P>
            <P>
              こちらは、上段には
              <EmojiWithText letter="g" />と<EmojiWithText letter="o" />
              が、下段には
              <EmojiWithText letter="f" />
              がふたつ入っています。
              <H args={{ name: 'deprecatedPressRun' }} />
            </P>
            <R.Rivc />
            <P>
              今回は
              <EmojiWithText letter="g" /> と <EmojiWithText letter="o" />{' '}
              が残りました。
            </P>
            <Hr />
            <P>
              こちらは、上段には
              <EmojiWithText letter="j" />と<EmojiWithText letter="p" />
              、下段には
              <EmojiWithText letter="h" />と
              <EmojiWithText letter="i" />
              が入っています。
              <H args={{ name: 'deprecatedPressRun' }} />
            </P>
            <R.Nmmz />
            <P>
              今回は
              <EmojiWithText letter="i" /> が残りました。
            </P>
            <Hr />
            <P>
              どれも<HighlightBold>ある法則</HighlightBold>
              に則っているのですが、その法則がお分かりでしょうか？
            </P>
            <EmojiSeparator
              emojis={['🍱', '🤔', '🍱']}
              description={<>法則が分かりますか？</>}
            />
          </>
        )
      },
      {
        title: <>法則が分かった？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、
                        <HighlightBold>
                          弁当箱のパズルは、
                          <H args={{ name: 'run' }} />
                          する際にどんな法則に則っているか
                        </HighlightBold>
                        、そろそろ分かったかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>う、うーん…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        参考までに、今回紹介した4つの例をもう一度載せておこう。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>例その1:</Bold>
            </P>
            <R.Ilpo />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <P>
              <Bold>例その2:</Bold>
            </P>
            <R.Imyd />
            <ExpressionRunnerSeparator />
            <R.Bgfl />
            <P>
              <Bold>例その3:</Bold>
            </P>
            <R.Rakk />
            <ExpressionRunnerSeparator />
            <R.Weoz />
            <P>
              <Bold>例その4:</Bold>
            </P>
            <R.Ldqk />
            <ExpressionRunnerSeparator />
            <R.Cpkp />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>ふーむ、なんとなく法則が見えてきたような…？</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ほう。ではここで、
                        <HighlightBold>
                          <H args={{ name: 'yesNoQuiz' }} />
                        </HighlightBold>
                        の時間だ。法則が分かったかどうか、チェックしてやるぞ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>自信ないけど…やるしかない！</P>
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
            、その1
          </>
        ),
        content: (
          <>
            <P>
              これまでに4種類の
              <H args={{ name: 'lunchBoxPuzzle' }} />
              を紹介しましたが、どれも
              <H args={{ name: 'run' }} />{' '}
              する際にある法則に従っています。それが分かったかどうか、
              <H args={{ name: 'yesNoQuiz' }} />
              でチェックしてみましょう！
            </P>
            <EmojiSeparator
              emojis={['⭕️', '🍱', '❌']}
              description={<>法則が分かったかどうかチェック！</>}
            />
            <P>
              <H args={{ name: 'question' }} />{' '}
              <H args={{ name: 'lookAtThisLunchBoxPuzzle' }} />:
            </P>
            <R.Loai />
            <P>
              これを
              <H args={{ name: 'run' }} /> すると、
              <HighlightBold>最終的に下のようになるでしょうか？</HighlightBold>
              これまでの法則から予想してみてください。
            </P>
            <R.Vvjn />
            <YesNoButtons answer="yes" />
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
            、その2
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'question' }} /> こちらの
              <H args={{ name: 'lunchBoxPuzzle' }} />を{' '}
              <H args={{ name: 'run' }} />
              すると、
            </P>
            <R.Uvmv />
            <P>
              <HighlightBold>最終的に下のようになるでしょうか？</HighlightBold>
              これまでの法則から予想してみてください。
            </P>
            <R.Hvqh />
            <YesNoButtons answer="no" />
          </>
        )
      },
      {
        title: <>答え合わせ</>,
        content: (
          <>
            <P>それぞれ実行すると、次のようになります。</P>
            <P>
              <Bold>1問目:</Bold>
            </P>
            <R.Zzyu />
            <P>
              つまり
              <HighlightBold>
                1問目の
                <H args={{ name: 'theAnswerIs', isYes: true }} />
              </HighlightBold>{' '}
              でした。
            </P>
            <P>
              <Bold>2問目:</Bold>
            </P>
            <R.Mutg />
            <P>
              つまり
              <HighlightBold>
                2問目の
                <H args={{ name: 'theAnswerIs', isYes: false }} />
              </HighlightBold>{' '}
              でした。
            </P>
          </>
        )
      },
      {
        title: <>法則は次のページに</>,
        content: (
          <>
            <P>
              次のページで、
              <H args={{ name: 'lunchBoxPuzzle' }} />
              の法則を説明します！
            </P>
            <EmojiSeparator
              emojis={['🤔', '🍱', '😈']}
              description={<>法則は次のページで説明！</>}
            />
            <P>
              法則が分かった方も、よく分からなかった方も、ぜひ次に進んでみてください。
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

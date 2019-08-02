import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Strong,
  Em,
  Ul,
  UlLi,
  Hr,
  InlineHeader
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import YesNoButtons from 'src/components/YesNoButtons'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>悪魔、現る</>,
        content: (
          <>
            <P>
              平和だったラムダ村にある日とつぜん、
              <Strong>
                とても恐ろしい悪魔 <Emoji>😈</Emoji>
              </Strong>
              が現れました。
            </P>
            <EmojiSeparator emojis={['🌲', '😈', '🌲']} />
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
                  children: <P>もうおしまいだ！</P>
                }
              ]}
            />
            <P>悪魔はこうささやきました。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <P>
                      安心しろ、お前たちの命だけは助けてやる…。だが、お前たちが大事にしている
                      <Strong>
                        計算箱 <Emoji>🎁</Emoji>
                      </Strong>
                      <Em> は、すべて没収させてもらうぞ！</Em>
                    </P>
                  )
                },
                {
                  type: 'scared',
                  children: <P>エッ！計算箱を没収だって？そんな無慈悲な！</P>
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
              <Strong>ラムダ村から計算箱を取り上げてしまったのです。</Strong>
            </P>
            <EmojiSeparator emojis={['🌲', '😈', '🎁', '🌲']} />
            <P>ラムダ村からは、計算箱がすべて無くなってしまいました。</P>
            <R.Rviy children="cross" />
            <P>
              足し算や引き算をするのに計算箱に頼り切っていた村人たちは嘆きました。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <P>悪魔め、どうしておれたちから計算箱を取り上げるんだ！</P>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <P>
                      <Em>おれたちは計算が大の苦手なんだ。</Em>
                      計算箱がないと、足し算や引き算ができなくなって、村の経済活動が成り立たなくなるんだぞ！
                    </P>
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
                        <Strong>
                          計算箱を取り上げたのは、お前たちが計算が苦手だからだよ。
                        </Strong>
                      </P>
                      <P>
                        お前たちは簡単な計算をするのにでも計算箱に頼り切っているだろう。そんなことだから、いつまでたっても計算が上達しないんだ。
                      </P>
                      <P>
                        <Em>
                          計算箱を取り上げることで、お前たちが計算を勉強するきっかけをわたしは作ってやったのさ。
                        </Em>
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
                      <Strong>お前たちにチャンスをやろう！</Strong>
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
                        <Em>
                          これから、
                          <Strong>頭を使わないと解けないパズル</Strong>
                          をたくさん出題する。
                          <Strong>
                            すべて解けたら、計算箱を返してやってもいいぞ！
                          </Strong>
                        </Em>
                      </P>
                      <P>
                        日頃から頭を使ってこなかったお前たちには、おそらくムリだろうがな！わはは！
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: <P>パ、パズルだって…？おれたちに解けるかなあ？</P>
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        難しそう…しかし、やるしかない！計算箱を取り返すんだ！
                      </P>
                      <P>
                        <Em>悪魔よ、その挑戦、受けて立つぞ！</Em>
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
            <EmojiSeparator emojis={['😠', '🆚', '😈']} />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'bentoBoxPuzzle' }} />
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
                        お前たちが解くパズルは、{' '}
                        <Strong>
                          <H args={{ name: 'bentoBoxPuzzle' }} />
                        </Strong>
                        というものだ。そして、これがその
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo>
              <H args={{ name: 'bentoBoxPuzzle' }} /> の一例
            </R.Ilpo>
            <Ul>
              <UlLi>
                このように、
                <H args={{ name: 'bentoBoxPuzzle' }} />
                には、実際の弁当箱のように、
                <Em>
                  四角の中にいくつかマスがあり、それぞれのマスの中に料理が入っています
                </Em>
                。
              </UlLi>
              <UlLi>
                上の例だと、上段には
                <EmojiWithText letter="b" />
                が入っており、
              </UlLi>
              <UlLi>
                下段には
                <EmojiWithText letter="a" />
                がふたつ入っています。
              </UlLi>
            </Ul>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なんとなく、
                        <Strong>見た目が計算箱に似ている</Strong>
                        気がするなあ。数字の代わりに、料理が入っているけど。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        実はこの
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        は、<Strong>計算箱と密接な関係がある</Strong>
                        んだが、それは後で説明しよう。
                      </P>
                      <P>
                        とりあえず今は、
                        <Em>
                          <H args={{ name: 'bentoBoxPuzzle' }} />を
                          <H args={{ name: 'play' }} />
                          するのを見ていくぞ。
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
        title: (
          <>
            弁当箱を
            <H args={{ name: 'play' }} />
            する
          </>
        ),
        content: (
          <>
            <P>
              <Em>
                <H args={{ name: 'bentoBoxPuzzle' }} />
                は、計算箱と同じように
                <H args={{ name: 'play' }} />
                することができます。
              </Em>
              試しに、
              <Em>
                <H args={{ name: 'pressPlay' }} />
              </Em>
            </P>
            <R.Itbm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'play' }} /> すると、
                        <Em>
                          下のふたつの <EmojiWithText letter="a" /> が消えて、
                          <EmojiWithText letter="b" /> だけが残った！
                        </Em>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        実は、これは<Strong>ある法則</Strong>に則っているんだ。
                      </P>
                      <P>
                        今回は、お前たちに
                        <Strong>その法則が何か解き明かしてもらうぞ。</Strong>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        これだけだと法則が何か、まだハッキリと言えないなあ…
                        <Em>もう少し他の例を試してみないと！</Em>
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
            <H args={{ name: 'bentoBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <P>
              では、他の
              <H args={{ name: 'bentoBoxPuzzle' }} />
              も見てみましょう。
            </P>
            <P>
              こちらは、上段には
              <EmojiWithText letter="e" />
              、下段には
              <EmojiWithText letter="c" />と
              <EmojiWithText letter="d" />
              が入っています。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Zwpj />
            <P>
              今回は
              <EmojiWithText letter="d" /> が残りました。
            </P>
            <Hr />
            <P>
              こちらは、上段には
              <EmojiWithText letter="g" />
              、下段には
              <EmojiWithText letter="f" />
              がふたつ入っています。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Dqkc />
            <P>
              今回は
              <EmojiWithText letter="g" /> が残りました。
            </P>
            <Hr />
            <P>
              こちらは、上段には
              <EmojiWithText letter="j" />
              、下段には
              <EmojiWithText letter="h" />と
              <EmojiWithText letter="i" />
              が入っています。
              <H args={{ name: 'pressPlay' }} />
            </P>
            <R.Ldox />
            <P>
              今回は
              <EmojiWithText letter="i" /> が残りました。
            </P>
            <Hr />
            <P>
              どれも、ある法則に則っているのですが、その法則がお分かりでしょうか？
            </P>
            <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
          </>
        )
      },
      {
        title: <>法則が分かった？</>,
        content: (
          <>
            <EmojiSeparator emojis={['🍱', '😈', '🍱']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        ここで問題だ。
                        <Strong>
                          弁当箱のパズルは、
                          <H args={{ name: 'play' }} />
                          する際にどんな法則に則っているか
                        </Strong>
                        、そろそろ分かったかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>う、うーん…。</P>
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
              <InlineHeader>例その1:</InlineHeader>
            </P>
            <R.Ilpo />
            <ExpressionRunnerSeparator />
            <R.Osqo />
            <P>
              <InlineHeader>例その2:</InlineHeader>
            </P>
            <R.Imyd />
            <ExpressionRunnerSeparator />
            <R.Bgfl />
            <P>
              <InlineHeader>例その3:</InlineHeader>
            </P>
            <R.Emmb />
            <ExpressionRunnerSeparator />
            <R.Tuqr />
            <P>
              <InlineHeader>例その4:</InlineHeader>
            </P>
            <R.Jozw />
            <ExpressionRunnerSeparator />
            <R.Cpkp />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        それではここで、
                        <Strong>
                          <H args={{ name: 'yesNoQuiz' }} />
                        </Strong>
                        の時間だ。法則が分かったかどうか、チェックするぞ！
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
              を紹介しましたが、どれも
              <H args={{ name: 'play' }} />
              する際にある法則に従っています。それが分かったかどうか、 ふたつの
              <H args={{ name: 'yesNoQuiz' }} />
              でチェックしてみましょう！
            </P>
            <EmojiSeparator emojis={['🍱', '🤔', '▶️']} />
            <P>
              <H args={{ name: 'question' }} />{' '}
              <H args={{ name: 'lookAtThisBentoBoxPuzzle' }} />:
            </P>
            <R.Loai />
            <P>
              これを
              <H args={{ name: 'play' }} />
              すると、<Strong>最終的に下のようになるでしょうか？</Strong>
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
              <H args={{ name: 'bentoBoxPuzzle' }} />を
              <H args={{ name: 'play' }} />
              すると、
            </P>
            <R.Hbgo />
            <P>
              <Strong>最終的に下のようになるでしょうか？</Strong>
              これまでの法則から予想してみてください。
            </P>
            <R.Olef />
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
              <InlineHeader>1問目:</InlineHeader>
            </P>
            <R.Zzyu />
            <P>
              つまり
              <Strong>
                1問目の
                <H args={{ name: 'theAnswerIs', isYes: true }} />
              </Strong>
              でした。
            </P>
            <P>
              <InlineHeader>2問目:</InlineHeader>
            </P>
            <R.Qpjt />
            <P>
              つまり
              <Strong>
                2問目の
                <H args={{ name: 'theAnswerIs', isYes: false }} />
              </Strong>{' '}
              (<EmojiWithText letter="k" />
              ではない) でした。
            </P>
          </>
        )
      },
      {
        title: <>法則は次のページに</>,
        content: (
          <>
            <P>
              次のページで
              <H args={{ name: 'bentoBoxPuzzle' }} />
              の法則を紹介します。予想が当たった方も、よく分からなかった方も、ぜひ次に進んでみてください。
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

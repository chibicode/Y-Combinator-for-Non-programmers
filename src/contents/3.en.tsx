import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  Img,
  P,
  PFullWidth,
  HighlightBold,
  Highlight,
  Hr,
  Bold
} from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import YesNoButtons from 'src/components/YesNoButtons'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>The devil appears</>,
        content: (
          <>
            <P>
              One day,{' '}
              <HighlightBold>
                the devil <Emoji>😈</Emoji>
              </HighlightBold>{' '}
              suddenly appeared in Lambda Village.
            </P>
            <EmojiSeparator
              emojis={['🌲', '😈', '🌲']}
              description={
                <>
                  <HighlightBold>The devil</HighlightBold> appears!
                </>
              }
            />
            <P>The villagers are all scared to death.</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'scared',
                  children: <P>Oh no, the devil is here! We’re doomed!</P>
                },
                {
                  type: 'crying',
                  children: <P>Please spare our lives!</P>
                }
              ]}
            />
            <P>The devil responds:</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Don’t worry. I’m not here to take your lives away…</P>
                      <P>
                        <Highlight>
                          However, I will take{' '}
                          <HighlightBold>
                            all of your mathboxes <CustomEmoji type="mathBox" />
                          </HighlightBold>
                          . They’re all mine now!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <P>
                      What? No way! You can’t take our mathboxes! That’s too
                      cruel!
                    </P>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Why did the devil take mathboxes?</>,
        content: (
          <>
            <P>
              <Bold>And just like that:</Bold> The devil has stolen{' '}
              <HighlightBold>every single mathbox</HighlightBold> in Lambda
              Village.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>🌲</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>🌲</Emoji>
              ]}
              description={<>I’m taking all your mathboxes!</>}
            />
            <P>All of the mathboxes are now gone.</P>
            <R.Dgyc>
              <Emoji>😈</Emoji> Bye bye, mathboxes!
            </R.Dgyc>
            <R.Ggxl></R.Ggxl>
            <P>
              The villagers, who all relied on mathboxes for doing additions and
              subtractions, were very upset.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: <P>The devil! Why did you do this to us?</P>
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        <Highlight>We’re all really bad at math.</Highlight>
                      </P>
                      <P>
                        Without mathboxes, we can’t do any calculations. Our
                        businesses will struggle, and our economy will crash!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>The devil answers:</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        That’s exactly why I took away your mathboxes.{' '}
                        <HighlightBold>
                          It’s because you all are bad at math.
                        </HighlightBold>
                      </P>
                      <P>
                        You see, your math skill hasn’t improved because you’re
                        relying on mathboxes to do even simple additions and
                        subtractions.
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>Hmm… you’re right…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          So, by taking away your mathboxes, I’m giving you an
                          opportunity to finally study math.
                        </Highlight>{' '}
                        You should thank me for it!
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: <P>But…but…we don’t want to study math!</P>
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>The challenge</>,
        content: (
          <>
            <P>
              The villagers are now pleading with the devil to have the
              mathboxes returned.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <P>Please return the mathboxes to us! We’ll do anything!</P>
                  )
                },
                {
                  type: 'crying',
                  children: <P>We beg you!</P>
                },
                {
                  type: 'devil',
                  children: (
                    <P>
                      Hmm…okay.{' '}
                      <Highlight>Maybe I’ll give you a chance.</Highlight>
                    </P>
                  )
                }
              ]}
            />
            <P>What does the devil mean by “a chance”?</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          I’ll give you{' '}
                          <HighlightBold>
                            a bunch of puzzles that require lots of thinking.
                          </HighlightBold>{' '}
                          If you can solve <HighlightBold>all</HighlightBold> of
                          them, I’ll give your mathboxes back.
                        </Highlight>
                      </P>
                      <P>
                        Since you villagers hadn’t spent much time studying,
                        those puzzles might be too hard for you. Haha!
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <P>
                      Puzzles…? They sound hard… I don’t know if we can do it!
                    </P>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        But…we have to solve them to get our mathboxes back!
                      </P>
                      <P>
                        <Highlight>
                          We’ll accept your challenge, the devil!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I like that answer. Let’s begin the challenge!</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>So:</Bold> The villagers are now on a mission to solve the
              devil’s puzzles and get the stolen mathboxes back.
            </P>
            <EmojiSeparator
              emojis={['😠', '🆚', '😈']}
              description={<>Gotta get the mathboxes back!</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            <H
              args={{
                name: 'bentoBoxPuzzle',
                capitalize: true,
                noWrapper: true
              }}
            />
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
                          <H args={{ name: 'bentoBoxPuzzle' }} />
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
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        だ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <PFullWidth>
              <Img
                src="/static/images/bentoboxes.jpg"
                alt="Bento Boxes"
                caption={<>...</>}
              />
            </PFullWidth>
            <R.Ilpo>
              <H args={{ name: 'bentoBoxPuzzle' }} /> の一例
            </R.Ilpo>
            <P>
              <Bold>解説:</Bold> 上のように、
              <H args={{ name: 'bentoBoxPuzzle' }} />
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
            <R.Vowa>
              上段には
              <EmojiWithText letter="b" />
            </R.Vowa>
            <P>
              下段には
              <EmojiWithText letter="a" />
              がふたつ入っています。
            </P>
            <R.Elku>
              下段には
              <EmojiWithText letter="a" />
            </R.Elku>
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
                        は、<Highlight>計算箱と密接な関係がある</Highlight>
                        んだが、これについては後に説明する。
                      </P>
                      <P>
                        とりあえず今は、
                        <Highlight>
                          <H args={{ name: 'bentoBoxPuzzle' }} />の
                          <H args={{ name: 'play' }} /> について見ていこう。
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
            <H args={{ name: 'play' }} />
            する
          </>
        ),
        content: (
          <>
            <P>
              <Highlight>
                <H args={{ name: 'bentoBoxPuzzle' }} />
                は、計算箱と同じように
                <H args={{ name: 'play' }} /> することができます。
              </Highlight>
              試しに、
              <Highlight>
                <H args={{ name: 'pressPlay' }} />
              </Highlight>
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
              <H args={{ name: 'play' }} /> すると…
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
                  <H args={{ name: 'play' }} /> されるでしょう？
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
            <Hr />
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
              <H args={{ name: 'pressPlay' }} />
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
              <H args={{ name: 'pressPlay' }} />
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
                          <H args={{ name: 'play' }} />
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
            <R.Thbw />
            <P>
              <Bold>例その4:</Bold>
            </P>
            <R.Ldqk />
            <ExpressionRunnerSeparator />
            <R.Fogc />
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
              を紹介しましたが、どれも
              <H args={{ name: 'play' }} />{' '}
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
              <H args={{ name: 'lookAtThisBentoBoxPuzzle' }} />:
            </P>
            <R.Loai />
            <P>
              これを
              <H args={{ name: 'play' }} /> すると、
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
              <H args={{ name: 'bentoBoxPuzzle' }} />を{' '}
              <H args={{ name: 'play' }} />
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
              <H args={{ name: 'bentoBoxPuzzle' }} />
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

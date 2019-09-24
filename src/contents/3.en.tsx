import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  Img,
  P,
  PFullWidth,
  HighlightBold,
  Highlight,
  Hr,
  Bold,
  Italic
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
                          <Italic>
                            However, I will take all of your mathboxes{' '}
                            <CustomEmoji type="mathBox" />.
                          </Italic>{' '}
                          They’re all mine now!
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
              <Italic>every single mathbox</Italic> in Lambda Village.
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
                      <P>We’re all really bad at math.</P>
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
                        <Italic>It’s because you all are bad at math.</Italic>
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
                        So, by taking away your mathboxes,{' '}
                        <Italic>
                          I’m giving you an opportunity to finally study math
                        </Italic>
                        . You should thank me for it!
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
                      Hmm…okay. <Italic>Maybe I’ll give you a chance.</Italic>
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
                          <Italic>
                            a bunch of puzzles that require lots of thinking.
                          </Italic>{' '}
                          If you can solve <Italic>all</Italic> of them, I’ll
                          give your mathboxes back.
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
                      <P>We’ll accept your challenge, the devil!</P>
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
                capitalize: true
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
                        The puzzle you’ll be solving is called{' '}
                        <HighlightBold>
                          <H args={{ name: 'bentoBoxPuzzle' }} />
                        </HighlightBold>
                        .
                      </P>
                      <P>First, take a look at this:</P>
                    </>
                  )
                }
              ]}
            />
            <PFullWidth>
              <Img
                src="/static/images/bentoboxes.jpg"
                alt="Lunchbox"
                caption={
                  <>
                    Japanese lunchboxes. Photo taken at Kiyoken
                    <br />
                    in Yokohama, Japan, the author’s hometown.
                  </>
                }
              />
            </PFullWidth>
            <BubbleQuotes
              quotes={[
                {
                  type: 'heart',
                  children: (
                    <>
                      <P>Wow, they look delicious!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        These are <Bold>traditional Japanese lunchboxes</Bold>{' '}
                        (called <Bold>“Bento Boxes”</Bold> <Emoji>🍱</Emoji>).
                      </P>
                      <P>
                        As you can see,{' '}
                        <Italic>
                          each lunchbox has several sections, and each section
                          has some type of a food item.
                        </Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <PFullWidth>
              <Img src="/static/images/foodItems.jpg" alt="Lunchbox" />
            </PFullWidth>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Now, take a look at this below. This is an example of{' '}
                        <HighlightBold>
                          <H args={{ name: 'bentoBoxPuzzle' }} />
                        </HighlightBold>
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo>
              <H
                args={{
                  name: 'bentoBoxPuzzle',
                  capitalize: true,
                  indefinite: true
                }}
              />
            </R.Ilpo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>It looks like a Japanese lunchbox!</P>
                      <P>
                        <Italic>
                          It has 3 sections, each containing some food item.
                        </Italic>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Yes. It’s called{' '}
                        <HighlightBold>
                          <H args={{ name: 'bentoBoxPuzzle' }} />
                        </HighlightBold>{' '}
                        because it looks like a Japanese lunchbox.
                      </P>
                      <P>Now, let’s take a look at it in more detail…</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>Explanation:</Bold> In this example, the top section has a{' '}
              <EmojiWithText letter="b" />:
            </P>
            <R.Vowa>
              The top section has a <EmojiWithText letter="b" />
            </R.Vowa>
            <P>
              And each of the bottom two sections has{' '}
              <EmojiWithText letter="a" />, a traditional Japanese food:
            </P>
            <R.Elku>
              Each of the bottom two sections has <EmojiWithText letter="a" />
            </R.Elku>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I noticed that it also looks like a <Bold>mathbox</Bold>
                        .{' '}
                        <Italic>
                          A mathbox contains numbers, but a lunchbox contains
                          food items
                        </Italic>
                        .
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={1} />,
                          <CustomEmoji type="mathBox" />,
                          <EmojiNumber number={2} />
                        ]}
                        description={<>A mathbox contains numbers…</>}
                      />
                      <ExpressionRunnerSeparator />
                      <EmojiSeparator
                        nodes={[
                          <EmojiForLetter letter="a" />,
                          <Emoji>🍱</Emoji>,
                          <EmojiForLetter letter="b" />
                        ]}
                        description={<>And a lunchbox contains food items.</>}
                      />
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Actually, <H args={{ name: 'bentoBoxPuzzle' }} /> is{' '}
                        <Italic>related</Italic> to mathboxes, but we’ll talk
                        about that later.
                      </P>
                      <P>
                        For now, let’s talk about how we can{' '}
                        <H args={{ name: 'play', lowerCase: true }} />{' '}
                        <H
                          args={{ name: 'bentoBoxPuzzle', indefinite: true }}
                        />
                        .
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
            How to <H args={{ name: 'play', lowerCase: true }} /> a lunchbox
          </>
        ),
        content: (
          <>
            <P>
              We can <H args={{ name: 'play', lowerCase: true }} />{' '}
              <H args={{ name: 'bentoBoxPuzzle', indefinite: true }} />, just
              like how we can run a mathbox.{' '}
              <H args={{ name: 'pressPlay', capitalize: true }} /> below:
            </P>
            <R.Itbm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        After running it,{' '}
                        <Italic>
                          the bottom two <EmojiWithText letter="a" />{' '}
                          disappeared, and only the <EmojiWithText letter="b" />{' '}
                          is left!
                        </Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilpo>
              If you <H args={{ name: 'play', lowerCase: true }} /> it…
            </R.Ilpo>
            <ExpressionRunnerSeparator />
            <R.Osqo>
              Only the <EmojiWithText letter="b" /> is left
            </R.Osqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        There is actually a{' '}
                        <Italic>specific set of rules</Italic> that determines
                        what happens when you{' '}
                        <H args={{ name: 'play', lowerCase: true }} /> a
                        lunchbox.
                      </P>
                      <P>
                        <Bold>Your task</Bold> is to{' '}
                        <Highlight>figure out what these rules are</Highlight>.
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
                  There’s a specific set of rules for
                  <br />
                  <H args={{ name: 'bentoBoxPuzzle' }} />.
                  <br />
                  Your task is to figure out what that is!
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
                        Hmm… I can’t tell what the rules are yet.{' '}
                        <Italic>Can we look at more examples?</Italic>
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
            More examples of <H args={{ name: 'bentoBoxPuzzle' }} />
          </>
        ),
        content: (
          <>
            <P>
              Let’s take a look at more examples of{' '}
              <H args={{ name: 'bentoBoxPuzzle' }} />.
            </P>
            <Hr />
            <P>
              This one has <EmojiWithText letter="e" /> on the top and a{' '}
              <EmojiWithText letter="c" /> and <EmojiWithText letter="d" /> on
              the bottom. <H args={{ name: 'pressPlay', capitalize: true }} />:
            </P>
            <R.Zwpj />
            <P>
              This time, we’re left with <EmojiWithText letter="d" /> at the
              end.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… this pattern seems to be a little different from
                        the last time.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Hr />
            <P>
              Next, we’ll talk about the cases where there are{' '}
              <Italic>more than one items on the top row</Italic>.
            </P>
            <P>
              This one has <EmojiWithText letter="g" /> and{' '}
              <EmojiWithText letter="o" /> on the top row and two slices of{' '}
              <EmojiWithText letter="f" /> on the bottom row.{' '}
              <H args={{ name: 'pressPlay', capitalize: true }} />:
            </P>
            <R.Rivc />
            <P>
              This time, we’re left with <EmojiWithText letter="g" /> and{' '}
              <EmojiWithText letter="o" /> at the end.
            </P>
            <Hr />
            <P>
              This one has <EmojiWithText letter="j" /> and{' '}
              <EmojiWithText letter="p" /> on the top row and{' '}
              <EmojiWithText letter="h" /> and a <EmojiWithText letter="i" /> on
              the bottom row.{' '}
              <H args={{ name: 'pressPlay', capitalize: true }} />:
            </P>
            <R.Nmmz />
            <P>
              This time, we’re left with a <EmojiWithText letter="i" /> at the
              end.
            </P>
            <Hr />
            <P>
              They all follow <Italic>a pattern</Italic>.{' '}
              <Highlight>Can you guess what that is?</Highlight>
            </P>
            <EmojiSeparator
              emojis={['🍱', '🤔', '🍱']}
              description={<>Can you guess what the pattern is?</>}
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

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Hr,
  Bold,
  Italic,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import BottomRightBadge from 'src/components/BottomRightBadge'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import * as R from 'src/components/Runners'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import H from 'src/components/H'
import NextLessonButton from 'src/components/NextLessonButton'

export const BasicRules = ({
  includeFuncUnbound
}: {
  includeFuncUnbound?: boolean
}) => (
  <>
    <P>
      1. <Bold>Label:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      {includeFuncUnbound && (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        </>
      )}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </P>
    <R.Zzxj>
      <Bold>Label:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      {includeFuncUnbound && (
        <>
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
        </>
      )}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </R.Zzxj>
    <P>
      2. <Bold>Match:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      <Emoji>✅</Emoji>
    </P>
    <R.Keck>
      <Bold>Match:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
      <Emoji>✅</Emoji>
    </R.Keck>
    <P>
      3. <Bold>Copy:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </P>
    <R.Qoms>
      <Bold>Copy:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
    </R.Qoms>
    <P>
      4. <Bold>Remove:</Bold> <Emoji>💥</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    </P>
    <R.Mhgm>
      <Bold>Remove:</Bold> <Emoji>💥</Emoji>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
    </R.Mhgm>
    <ExpressionRunnerSeparator />
    <R.Osqo />
  </>
)

export const Unmatched = () => (
  <>
    <P>
      If none of <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      ’s match,{' '}
      <HighlightBold>
        don’t do the copy step and simply remove{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
        ’s
      </HighlightBold>
      .
    </P>
    <R.Jwzh>
      If none of <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      ’s match…
    </R.Jwzh>
    <ExpressionRunnerSeparator />
    <R.Knhw>
      Simply remove <BottomRightBadge inline bottomRightBadgeType="callArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s
    </R.Knhw>
  </>
)

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Success?</>,
        content: (
          <>
            <EmojiSeparator
              emojis={['🍱', '😁', '🍱']}
              description={<>I’ve figured it out!</>}
            />
            <P>
              Looks like the villagers have figured out the patterns for{' '}
              <H args={{ name: 'bentoBoxPuzzle' }} />!
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>I think I’ve figured out how lunchboxes work!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Really? Then explain to me!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>If the bottom two items are the same</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        Let me explain. First,{' '}
                        <Highlight>you compare the bottom two items</Highlight>.
                      </P>
                      <P>
                        <Highlight>
                          If the bottom two items are the <Italic>same</Italic>
                        </Highlight>
                        , then when you{' '}
                        <H args={{ name: 'play', lowerCase: true }} /> it,{' '}
                        <Highlight>
                          we’re left with the <Italic>top item</Italic>
                        </Highlight>{' '}
                        at the end.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vmkg>
              The bottom two items are the same
              <br />
              (Both <EmojiWithText letter="a" />)
            </R.Vmkg>
            <ExpressionRunnerSeparator />
            <R.Osqo>
              We’re left with the <EmojiWithText letter="b" />,<br />
              which was on the top
            </R.Osqo>
            <Hr />
            <R.Wtup>
              The bottom two items are the same
              <br />
              (Both <EmojiWithText letter="f" />)
            </R.Wtup>
            <ExpressionRunnerSeparator />
            <R.Weoz>
              We’re left with <EmojiWithText letter="g" /> and{' '}
              <EmojiWithText letter="o" />,<br />
              which were on the top
            </R.Weoz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        So this is the solution for the first{' '}
                        <H args={{ name: 'yesNoQuiz' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dogu>
              The bottom two items are the same
              <br />
              (Both <EmojiWithText letter="k" />)
            </R.Dogu>
            <ExpressionRunnerSeparator />
            <R.Vvjn>
              We’re left with the <EmojiWithText letter="l" />,<br />
              which was on the top
            </R.Vvjn>
          </>
        )
      },
      {
        title: <>If the bottom two items are different</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        Now, let’s talk about the case where{' '}
                        <Highlight>
                          the bottom two items are different
                        </Highlight>
                        .
                      </P>
                      <P>
                        In this case, when you{' '}
                        <H args={{ name: 'play', lowerCase: true }} /> it,{' '}
                        <Highlight>
                          we’re left with the <Italic>bottom right item</Italic>
                        </Highlight>{' '}
                        at the end.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nplf>
              The bottom two items are different
              <br />
              (<EmojiForLetter letter="c" /> and <EmojiForLetter letter="d" />)
            </R.Nplf>
            <ExpressionRunnerSeparator />
            <R.Bgfl>
              We’re left with the <EmojiWithText letter="d" />,<br />
              which was in the bottom right
            </R.Bgfl>
            <Hr />
            <R.Immq>
              The bottom two items are different (<EmojiForLetter letter="h" />{' '}
              and <EmojiForLetter letter="i" />)
            </R.Immq>
            <ExpressionRunnerSeparator />
            <R.Cpkp>
              We’re left with the <EmojiWithText letter="i" />,<br />
              which was in the bottom right
            </R.Cpkp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        So this is the solution for the second{' '}
                        <H args={{ name: 'yesNoQuiz' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cowm>
              The bottom two items are different (<EmojiForLetter letter="k" />{' '}
              and <EmojiForLetter letter="m" />)
            </R.Cowm>
            <ExpressionRunnerSeparator />
            <R.Ozxi>
              We’re left with the <EmojiWithText letter="m" />,<br />
              which was in the bottom right
            </R.Ozxi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>This has to be the solution! Am I correct?</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Correct!</>,
        content: (
          <>
            <EmojiSeparator
              emojis={['🎉', '😈', '🎉']}
              description={<>Exactly right!</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Italic>You’re exactly right!</Italic> Good job!{' '}
                        <Emoji>🎉</Emoji> <Emoji>🎉</Emoji> <Emoji>🎉</Emoji>
                      </P>
                      <P>
                        I thought you’ll do much worse on these quizzes because
                        you haven’t been studying math seriously. Not too bad!
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>Yay!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Italic>However, don’t celebrate just yet.</Italic>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>Huh? Why?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Before going to the next page, we still need to{' '}
                        <Bold>formalize</Bold> the rules of{' '}
                        <H args={{ name: 'bentoBoxPuzzle' }} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>Formalize?</Bold> What do you mean?
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
        title: <>Formalize the rules</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Here’s what you stated:</Bold>
                      </P>
                      <Ul>
                        <UlLi>Compare the bottom two items.</UlLi>
                        <UlLi>If they’re the same, the top item remains.</UlLi>
                        <UlLi>Otherwise, the bottom right item remains.</UlLi>
                      </Ul>
                      <P>
                        This is <Italic>not wrong</Italic>, but also is{' '}
                        <Italic>not detailed enough</Italic> to solve more
                        difficult puzzles.
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Hmm… okay…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        In order to solve more complex puzzles, we need to{' '}
                        <Italic>formalize</Italic> the rules. We must be more{' '}
                        <Italic>detailed</Italic>.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✅', '🍱', '✅']}
              description={
                <>
                  We have to <Italic>formalize</Italic> the rules.
                  <br />
                  We must be more <Italic>detailed</Italic>.
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>So:</Bold> I’ll explain to you the{' '}
                        <Italic>formal</Italic>, more detailed rules of{' '}
                        <H args={{ name: 'bentoBoxPuzzle' }} />.
                      </P>
                      <P>
                        Once you understand it, I’ll give you more complex
                        puzzles to solve.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Okay… could you show me what that{' '}
                        <Italic>formal rules</Italic> looks like?
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
            The formal rules of <H args={{ name: 'bentoBoxPuzzle' }} />
          </>
        ),
        type: 'summary',
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Here are the formal rules of{' '}
                        <H args={{ name: 'bentoBoxPuzzle' }} />. There are{' '}
                        <Italic>four steps</Italic>:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <BasicRules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Now, let’s talk about each step!</P>
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
            1. Label <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          </>
        ),
        content: (
          <>
            <P>We’ll use this lunchbox to explain each step:</P>
            <R.Ilpo />
            <P>
              First,{' '}
              <Highlight>
                we <Bold>label</Bold>
              </Highlight>
              :
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  The <Bold>top</Bold> items as{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  (for “<Bold>T</Bold>op”)
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  The <Bold>left</Bold> items as{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  (for “<Bold>L</Bold>eft”)
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  The <Bold>right</Bold> items as{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  (for “<Bold>R</Bold>ight”)
                </Highlight>
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
              description={
                <>
                  Label items as{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                </>
              }
            />
            <P>
              Let’s see it in action. <H args={{ name: 'pressNext' }} />
            </P>
            <R.Ozbe />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        The <EmojiWithText letter="b" /> is labeled as{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />
                        , and <EmojiWithText letter="a" /> on the bottom are
                        labeled as{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        !
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
            2. 一致チェック{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            <Emoji>✅</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              続いて、
              <HighlightBold>
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                が一致するかチェックし、一致した料理には、
                <Emoji>✅</Emoji> を付けます。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>✅</Emoji>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  が一致したら <Emoji>✅</Emoji> をつける
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Rqjo />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        の<EmojiWithText letter="a" /> に <Emoji>✅</Emoji>{' '}
                        がついた！
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
            3. <Bold>コピーする:</Bold>{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <Emoji>↘️</Emoji>{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          </>
        ),
        content: (
          <>
            <P>
              続いて、
              <HighlightBold>
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                の料理を、一致した{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                の部分にコピーします。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>↘️</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  を一致した{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  にコピー
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Evqx />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />
                        の
                        <EmojiWithText letter="b" />が
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        の部分にコピーされた！
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
            4. <Bold>消す:</Bold> <Emoji>💥</Emoji>{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          </>
        ),
        content: (
          <>
            <P>
              最後に、
              <HighlightBold>
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                が消えます。
              </HighlightBold>
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>💥</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                  が消える
                </>
              }
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Msiw />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        が <Emoji>💥</Emoji> になった！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              そして、最終的に
              <EmojiWithText letter="b" /> だけになります。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Kbnn />
            <P>以上です！</P>
          </>
        )
      },
      {
        title: <>上にふたつの料理がある場合</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        では、たとえば下の例のように、
                        <HighlightBold>
                          上にふたつの料理がある場合
                        </HighlightBold>
                        はどうなるんだろう？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rakk>
              上にふたつの料理がある
              <br />(<EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" />)
            </R.Rakk>
            <P>
              この場合、上にある
              <EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" /> には
              <HighlightBold>
                両方とも{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                の印がつきます。
              </HighlightBold>
            </P>
            <R.Ycxr>
              両方とも{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              の印がつく
            </R.Ycxr>
            <P>
              そして、
              <EmojiWithText letter="f" /> が一致したあとに…
            </P>
            <R.Dkdt />
            <P>
              <EmojiWithText letter="g" /> と
              <EmojiWithText letter="o" /> が
              <HighlightBold>両方ともコピーされます。</HighlightBold>
            </P>
            <R.Sxnt />
            <P>
              最後に、
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> が消え…
            </P>
            <R.Issq />
            <P>
              <EmojiWithText letter="g" /> と <EmojiWithText letter="o" />{' '}
              が残るのです。
            </P>
            <R.Thbw />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'fastForward' }} /> で見てみましょう
          </>
        ),
        content: (
          <>
            <P>
              では、最初から最後まで
              <H args={{ name: 'fastForward' }} /> で見てみましょう。
              <H args={{ name: 'fastForward' }} /> 機能を使うと、
              <Highlight>各ステップを自動で見ていくことができます。</Highlight>
            </P>
            <EmojiSeparator
              emojis={['⏩', '🍱', '⏩']}
              description={<>早送りすると、各ステップが自動で見れる</>}
            />
            <P>
              こちらは、上にひとつの料理がある例です。
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Wunw />
            <P>
              こちらは、上にふたつの料理がある例です。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Hluq />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>というわけで、ここまでをまとめてみましょう。</P>
            <BasicRules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>なるほど、そういう仕組みになっていたのか！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        うむ。そして、
                        <Highlight>
                          こうやってルールを明確にすれば、パズルが複雑になっても応用が効く
                        </Highlight>
                        んだ。
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
        title: <>一致しなかったら？</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  が一致しなかったら？
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
                        では、
                        <HighlightBold>
                          もし{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          が一致しなかったらどうするの？
                        </HighlightBold>
                      </P>
                      <P>
                        たとえば下の弁当箱の場合は、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        が一致しないよね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Sgfj />
          </>
        )
      },
      {
        title: (
          <>
            コピーはせず、
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            を消すだけ
          </>
        ),
        content: (
          <>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              が一致しない場合は、
              <HighlightBold>
                コピーはせずに、ただ{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                を消すだけです。
              </HighlightBold>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Gwtp />
            <P>
              そして、最終的に
              <EmojiWithText letter="d" />
              だけになります。
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Grla />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'fastForward' }} />
            で見てみましょう
          </>
        ),
        content: (
          <>
            <P>
              復習のために、
              <BottomRightBadge inline bottomRightBadgeType="funcArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              が一致しなかった場合も、最初から最後まで
              <H args={{ name: 'fastForward' }} /> で見てみましょう。
            </P>
            <EmojiSeparator
              emojis={['⏩', '🍱', '⏩']}
              description={<>早送りで復習しよう！</>}
            />
            <P>
              こちらは、上にひとつの料理がある例です。
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Jbam />
            <P>
              こちらは、上にふたつの料理がある例です。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Zuus />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />: 一致しなかった場合
          </>
        ),
        type: 'summary',
        content: (
          <>
            <Unmatched />
          </>
        )
      },
      {
        title: <>以上です！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        以上が、
                        <H args={{ name: 'bentoBoxPuzzle' }} />
                        の明確な法則だ。理解できたかな？
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>な、なんとか…でも、まだ覚えきれてないなあ。</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          法則を覚えきれていなくても、次回また復習するので大丈夫だ。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'relieved',
                  children: (
                    <>
                      <P>
                        ホッ、よかった… (悪魔って意外と優しいんじゃ？
                        <Emoji>🤔</Emoji>)
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          次回では、もっと複雑なパズルを出題する。
                        </Highlight>
                        計算箱を返してほしかったら、解いてみせるんだな！
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>望むところだ！</P>
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

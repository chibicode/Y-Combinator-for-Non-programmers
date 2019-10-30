import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  Hr,
  Bold,
  Italic,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TopLeftBadgeWrapper from 'src/components/TopLeftBadgeWrapper'
import TopLeftBadge from 'src/components/TopLeftBadge'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import Emoji from 'src/components/Emoji'
import EmojiWithText from 'src/components/EmojiWithText'
import InlineRunButtonShowAllSteps from 'src/components/InlineRunButtonShowAllSteps'
import CustomEmoji from 'src/components/CustomEmoji'
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
      <TopLeftBadgeWrapper topLeftBadgeType="match">
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </TopLeftBadgeWrapper>
    </P>
    <R.Qoms>
      <Bold>Copy:</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
      <Emoji>↘️</Emoji>{' '}
      <TopLeftBadgeWrapper topLeftBadgeType="match">
        <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      </TopLeftBadgeWrapper>
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
      <Bold>
        If none of <BottomRightBadge inline bottomRightBadgeType="funcArg" />
        ’s and <BottomRightBadge inline bottomRightBadgeType="funcBound" />
        ’s match:
      </Bold>{' '}
      <Highlight>
        Skip the copy step and simply remove{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" />
        ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
        ’s
      </Highlight>
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

export const InstructionTwo = () => (
  <>
    <Highlight>
      We check to see if some of{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      ’s <Bold>match</Bold>.{' '}
      <Italic>
        If they match, add the <Emoji>✅</Emoji> sign.
      </Italic>
    </Highlight>
  </>
)

export const InstructionThree = () => (
  <>
    <Highlight>
      We <Bold>copy</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />
      ’s to where the <Italic>matched</Italic>{' '}
      <BottomRightBadge inline bottomRightBadgeType="funcBound" />
      ’s are.
    </Highlight>
  </>
)

export const InstructionFour = () => (
  <>
    <Highlight>
      We <Bold>remove</Bold>{' '}
      <BottomRightBadge inline bottomRightBadgeType="callArg" />
      ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
      ’s.
    </Highlight>
  </>
)

export default () => (
  <EpisodeCardList
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
              <H args={{ name: 'lunchBoxPuzzle' }} />!
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
                        Let me explain. <Bold>First</Bold>,{' '}
                        <Highlight>you compare the bottom two items</Highlight>.
                      </P>
                      <P>
                        <Highlight>
                          If the bottom two items are the <Italic>same</Italic>
                        </Highlight>
                        , then when you{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> it,{' '}
                        <Highlight>
                          we’re left with the <Italic>top row</Italic>
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
                        <H args={{ name: 'run', lowerCase: true }} /> it,{' '}
                        <Highlight>
                          we’re left with the <Italic>bottom-right item</Italic>
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
              which was in the bottom-right
            </R.Bgfl>
            <Hr />
            <R.Immq>
              The bottom two items are different (<EmojiForLetter letter="h" />{' '}
              and <EmojiForLetter letter="i" />)
            </R.Immq>
            <ExpressionRunnerSeparator />
            <R.Cpkp>
              We’re left with the <EmojiWithText letter="i" />,<br />
              which was in the bottom-right
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
              which was in the bottom-right
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
                        <Bold>You’re exactly right!</Bold> Good job!{' '}
                        <Emoji>🎉</Emoji> <Emoji>🎉</Emoji> <Emoji>🎉</Emoji>
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
                      <P>Huh? Why not?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Because:</Bold>{' '}
                        <Highlight>
                          Before going to the next page, we still need to{' '}
                          <Bold>formalize</Bold> the rules of{' '}
                          <H args={{ name: 'lunchBoxPuzzle' }} />.
                        </Highlight>
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
                        <Bold>Here are the patterns you discovered:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>Compare the bottom two items.</Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            If they’re the same, the top item remains.
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Otherwise, the bottom-right item remains.
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>
                        <Highlight>
                          They’re <Italic>not wrong</Italic>, but they are{' '}
                          <Italic>not detailed enough</Italic> to solve more
                          difficult puzzles.
                        </Highlight>
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
                        <Bold>So:</Bold>{' '}
                        <Highlight>
                          I’ll explain to you the <Italic>formal</Italic>, more
                          detailed rules of{' '}
                          <H args={{ name: 'lunchBoxPuzzle' }} />.
                        </Highlight>
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
                        Okay… show me what the <Italic>formal rules</Italic>{' '}
                        look like!
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
            The formal rules of <H args={{ name: 'lunchBoxPuzzle' }} />
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
                        <H args={{ name: 'lunchBoxPuzzle' }} />. There are{' '}
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
            Step 1. Label:{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />
          </>
        ),
        content: (
          <>
            <P>We’ll use this lunchbox to explain each step:</P>
            <R.Ilpo />
            <P>
              <Bold>First:</Bold>{' '}
              <Highlight>
                We <Bold>label</Bold>
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
            Step 2. Match:{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
            <Emoji>✅</Emoji>
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Second:</Bold> <InstructionTwo />
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <Emoji>✅</Emoji>
              ]}
              description={
                <>
                  If some of{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                  ’s and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  ’s match, add <Emoji>✅</Emoji>
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
                        The <EmojiWithText letter="a" /> labeled as{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        now have a <Emoji>✅</Emoji> sign!
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
            Step 3. Copy:{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <Emoji>↘️</Emoji>{' '}
            <TopLeftBadgeWrapper topLeftBadgeType="match">
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
            </TopLeftBadgeWrapper>
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Third:</Bold> <InstructionThree />
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>↘️</Emoji>,
                <TopLeftBadgeWrapper topLeftBadgeType="match">
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                </TopLeftBadgeWrapper>
              ]}
              description={
                <>
                  Copy{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />
                  ’s to <Italic>matched</Italic>{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  ’s
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
                        The <EmojiWithText letter="b" /> (labeled as{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />
                        ) is copied to where the matched{' '}
                        <TopLeftBadge topLeftBadgeType="match" inline />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />{' '}
                        is!
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
            Step 4. Remove: <Emoji>💥</Emoji>{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Finally:</Bold> <InstructionFour />
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>💥</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              ]}
              description={
                <>
                  Remove{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />
                  ’s and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                  ’s
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
                        />
                        ’s and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />
                        ’s have turned into <Emoji>💥</Emoji>!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              After removing these, we’re left with just the{' '}
              <EmojiWithText letter="b" />.
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Kbnn />
            <P>That’s it!</P>
          </>
        )
      },
      {
        title: <>What if there are more than one item on the top?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>Question:</Bold> What happens if there are{' '}
                        <Italic>more than one item on the top</Italic>, like the
                        example below?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rakk>
              There are two items on the top
              <br />(<EmojiWithText letter="g" /> and{' '}
              <EmojiWithText letter="o" />)
            </R.Rakk>
            <P>
              <Bold>Answer:</Bold> In this case,{' '}
              <Highlight>
                both <EmojiWithText letter="g" /> and{' '}
                <EmojiWithText letter="o" /> will be labeled as{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
              </Highlight>{' '}
              (for “<Bold>T</Bold>op”).
            </P>
            <R.Ycxr>
              Both labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />
            </R.Ycxr>
            <P>
              <Bold>Then:</Bold> The <EmojiWithText letter="f" postfix="s" />{' '}
              match <Emoji>✅</Emoji>…
            </P>
            <R.Dkdt />
            <P>
              <Bold>Therefore:</Bold>{' '}
              <Highlight>
                Both <EmojiWithText letter="g" /> and{' '}
                <EmojiWithText letter="o" /> get copied to where the matched{' '}
                <TopLeftBadge topLeftBadgeType="match" inline />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" /> is.
              </Highlight>
            </P>
            <R.Sxnt />
            <P>
              <Bold>Finally:</Bold>{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />
              ’s and <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              ’s disappear…
            </P>
            <R.Issq />
            <P>
              And we’re left with <EmojiWithText letter="g" /> and{' '}
              <EmojiWithText letter="o" />.
            </P>
            <R.Weoz />
          </>
        )
      },
      {
        title: <>Putting it together</>,
        content: (
          <>
            <P>
              To wrap up, let’s go through the entire process{' '}
              <Italic>from the beginning to the end</Italic>.{' '}
            </P>
            <P>
              <Highlight>
                We’ll be using the <H args={{ name: 'run' }} /> button with the{' '}
                <Bold>“Show every step”</Bold> functionality
              </Highlight>
              , which automatically goes through each step.
            </P>
            <InlineRunButtonShowAllSteps>
              If you use this button…
            </InlineRunButtonShowAllSteps>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  You’ll be able to see all steps
                  <br />
                  automatically
                </>
              }
            />
            <P>
              Here’s the previous example with <Italic>one</Italic> item on the
              top. <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Wunw />
            <P>
              Here’s the previous example with <Italic>two</Italic> items on the
              top. <H args={{ name: 'pressRun' }} />
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
            <P>Let’s review what we’ve learned so far:</P>
            <BasicRules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>I see, now I understand everything clearly!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Good. And{' '}
                        <Highlight>
                          by formalizing the rules in detail like this, we’ll be
                          able to solve more complex puzzles.
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
        title: <>What if there’s no match?</>,
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
                  What if there’s no match
                  <br />
                  between{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                  ’s and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                  ’s?
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
                        <Bold>But wait</Bold>.{' '}
                        <Highlight>
                          What happens if{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />
                          ’s and{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />
                          ’s don’t match?
                        </Highlight>{' '}
                        <Emoji>❌</Emoji>
                      </P>
                      <P>
                        For example, the lunchbox below has no match among{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />
                        ’s and
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        ’s.
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
            Don’t copy, just remove{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Answer:</Bold> If{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              ’s and{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />
              ’s don’t match,{' '}
              <Highlight>
                <Italic>skip</Italic> the “copy” step, and just remove{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />
                ’s and{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                ’s.
              </Highlight>
            </P>
            <P>
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Gwtp />
            <P>
              In this case, we’re left with the <EmojiWithText letter="d" />.{' '}
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Grla />
          </>
        )
      },
      {
        title: <>Let’s go through all the steps</>,
        content: (
          <>
            <P>
              <Bold>Review:</Bold> Let’s go through all the steps again—
              <Highlight>
                this time for cases where{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
                ’s and{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                ’s don’t match.
              </Highlight>
            </P>
            <EmojiSeparator
              size="mdsm"
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🍱</Emoji>
              ]}
              description={
                <>
                  Let’s see all the steps
                  <br />
                  from the beginning to the end!
                </>
              }
            />
            <P>
              Here’s the previous example with <Italic>one</Italic> item on the
              top. <H args={{ name: 'pressRun', mentionRightArrow: true }} />
            </P>
            <R.Jbam />
            <P>
              Here’s the previous example with <Italic>two</Italic> items on the
              top. <H args={{ name: 'pressRun' }} />
            </P>
            <R.Zuus />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'summary' }} />: If they don’t match
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
        title: <>That’s it!</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        That’s it for the <Bold>formal</Bold> rules of{' '}
                        <H args={{ name: 'lunchBoxPuzzle' }} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Ok…</P>
                      <P>
                        I understood them,{' '}
                        <Italic>but I haven’t fully memorized them yet.</Italic>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>It’s ok.</Bold> Don’t worry if you haven’t
                        memorized the rules.{' '}
                        <Highlight>
                          We’ll do a review when we use them later.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'relieved',
                  children: (
                    <>
                      <P>Oh, that’s good to hear.</P>
                      <P>
                        (Maybe the devil isn’t so evil after all…{' '}
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
                          On the next page, I’ll give you more challenging
                          puzzles.
                        </Highlight>
                      </P>
                      <P>
                        If you want your mathboxes back, you better solve all of
                        them!
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Alright, bring it on!</P>
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

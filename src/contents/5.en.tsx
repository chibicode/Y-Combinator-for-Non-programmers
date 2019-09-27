import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Ol,
  OlLi,
  Bold,
  Hr,
  Italic
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import H from 'src/components/H'
import EmojiWithText from 'src/components/EmojiWithText'
import TopLeftBadgeWrapper from 'src/components/TopLeftBadgeWrapper'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import Emoji from 'src/components/Emoji'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import InlineBackground from 'src/components/InlineBackground'
import BottomRightBadge from 'src/components/BottomRightBadge'
import YesNoButtons from 'src/components/YesNoButtons'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import {
  InstructionTwo,
  InstructionThree,
  InstructionFour
} from 'src/contents/4.en'

export const ThreeRowRules = () => (
  <>
    <P>
      <Bold>Here’s how to solve a lunchbox puzzle with at least 3 rows.</Bold>
    </P>
    <Ol>
      <OlLi>
        <Highlight>
          First, start with the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
        </Highlight>
      </OlLi>
      <OlLi>
        <Highlight>
          Label the center item on the bottom row as{' '}
          <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />, and
          you can ignore this for the rest of the iteration.
        </Highlight>
      </OlLi>
      <OlLi>
        <Highlight>
          After finishing the pair of{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,
          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> will become{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>. Then, repeat.
        </Highlight>
      </OlLi>
    </Ol>
    <R.Vdhd>Lunchbox with 3 rows</R.Vdhd>
  </>
)

export const Beginner5Rules = () => (
  <>
    <P>
      <Bold>Additional Rule 1:</Bold> If there are multiple pairs of{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
      <HighlightBold>start with the leftmost pair</HighlightBold>.
    </P>
    <R.Hykj>
      <H args={{ name: 'startWithLeftMostOneCaption' }} />
    </R.Hykj>
    <P>
      <Bold>Note:</Bold>{' '}
      <Highlight>
        If there’s no <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s on the
        leftmost edge of a lunchbox, then start with the inner pair of{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
      </Highlight>
    </P>
    <R.Myjz>
      If there’s no <InlinePrioritiesLabel>1</InlinePrioritiesLabel> on the
      <br />
      leftmost edge of a lunchbox, then start with
      <br />
      the inner pair of
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
    </R.Myjz>
    <Hr />
    <P>
      <Bold>Additional Rule 2:</Bold> If you can’t start with{' '}
      <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s because there’s only
      one item on the bottom row,{' '}
      <HighlightBold>
        start with the pair of <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
        ’s.
      </HighlightBold>
    </P>
    <R.Zemy>
      <H args={{ name: 'startWithTwoCaption' }} />
    </R.Zemy>
  </>
)

const WillReturn = () => (
  <>
    <EmojiSeparator
      emojis={['❓', '😈', '❓']}
      noBottomMargin
      description={
        <>
          On the upcoming intermediate levels,
          <br />I will give you a <Italic>difficult</Italic> question.
          <br />
          It can be solved by applying the rules
          <br />
          we cover on this page.
        </>
      }
    />
    <EmojiSeparator
      noTopMargin
      nodes={[
        <Emoji>✨</Emoji>,
        <CustomEmoji type="mathBox" />,
        <Emoji>✨</Emoji>
      ]}
      description={
        <>
          If you can solve it,
          <br />
          you’ll get your mathboxes back!
        </>
      }
    />
  </>
)

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        type: 'summary',
        title: <>The last page of beginner levels</>,
        content: (
          <>
            <P>
              <Bold>This is the last page of beginner levels.</Bold> Thank you
              for following along so far!
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>THe last page of beginner levels!</>}
            />
            <P>
              <Emoji>⚠️</Emoji> <Bold>Warning:</Bold>{' '}
              <H
                args={{
                  name: 'bentoBoxPuzzle',
                  capitalize: true,
                  postfix: 's'
                }}
              />{' '}
              on this page are <Italic>much harder</Italic> than before. But I
              think you’ll still be able to solve them. Good luck!
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>The puzzles are hard, but you can do it!</>}
            />
          </>
        )
      },
      {
        title: <>Lunchboxes with 3 Rows </>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        From now on, you’ll be solving much harder puzzles like
                        this one:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cvtc>
              <H args={{ name: 'bentoBoxPuzzle', capitalize: true }} /> with{' '}
              <Italic>3 rows</Italic>
            </R.Cvtc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Hmm… previously, we’ve only dealt with lunchboxes with 2
                        rows.
                      </P>
                      <P>
                        But <Italic>this one has 3 rows</Italic> vertically.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Also,{' '}
                        <Italic>there are 3 items on the bottom row</Italic>:{' '}
                        <EmojiWithText letter="a" />, a{' '}
                        <EmojiWithText letter="b" />, and another{' '}
                        <EmojiWithText letter="a" />.
                      </P>
                      <P>
                        None of the lunchboxes we saw on the last page had 3
                        items in one row.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Right. Also, did you realize that{' '}
                        <Italic>
                          there are numbers like{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> and{' '}
                          <InlinePrioritiesLabel>2</InlinePrioritiesLabel> on
                          the left edge?
                        </Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cvtc>
              There are numbers like{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel> and{' '}
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
              <br />
              on the left edge
            </R.Cvtc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>That’s true…</P>
                      <P>How should we solve puzzles like this?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>So, first:</Bold>{' '}
                        <Italic>
                          I’ll explain how to solve lunchbox puzzles with 3
                          rows.
                        </Italic>
                      </P>
                      <P>
                        <Bold>Then:</Bold>{' '}
                        <Italic>
                          I will give you{' '}
                          <H args={{ name: 'yesNoQuiz', postfix: 'zes' }} /> to
                          solve.
                        </Italic>
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Ok, sounds good!</P>
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
            First, focus on the pair of{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              <Bold>
                The first step in solving{' '}
                <H args={{ name: 'bentoBoxPuzzle', indefinite: true }} /> with 3
                rows:
              </Bold>{' '}
              <Highlight>
                Focus on the pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
              description={
                <>
                  Focus on the pair of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
                </>
              }
            />
            <P>
              <Bold>More specifically:</Bold>{' '}
              <Highlight>
                Take a look at the{' '}
                <Italic>
                  sections that have a{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel> on its
                  top-left corner or bottom-left corner.
                </Italic>
              </Highlight>
            </P>
            <P>
              Let’s see what that means. <H args={{ name: 'pressNext' }} />
            </P>
            <R.Aaov />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        The pair of{' '}
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                        ’s became pink{' '}
                        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
                        ’s!
                      </P>
                      <P>
                        Also, the top row now has a darker color{' '}
                        <InlineBackground bgColor={'indigo50'} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Right. This means{' '}
                        <Highlight>
                          focus on <Italic>the bottom 2 rows</Italic>, which
                          correspond to the pair of{' '}
                          <InlinePrioritiesLabel revert>
                            1
                          </InlinePrioritiesLabel>
                          ’s, and <Italic>ignore</Italic> the top row{' '}
                          <InlineBackground bgColor={'indigo50'} /> for now.
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
            <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcBound" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
          </>
        ),
        content: (
          <>
            <P>
              Next, <Highlight>we add the labels.</Highlight>{' '}
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Qxob />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <Bold>Wait a minute:</Bold> In addition to{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />
                        , and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        …
                      </P>
                      <P>
                        <Highlight>
                          <Italic>
                            There’s a new label{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />{' '}
                            for the <EmojiWithText letter="b" />!
                          </Italic>
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Yes, this is new:</Bold>{' '}
                        <Highlight>
                          None of{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />
                          ,{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />
                          , or{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          apply to the <Bold>middle item</Bold> on the bottom
                          row.
                        </Highlight>
                      </P>
                      <P>
                        <Highlight>
                          In that case, we add the label{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          (for “<Bold>M</Bold>iddle”) to it.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <EmojiForLetter letter="b" />
              ]}
              description={
                <>
                  Add{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  to the middle item
                  <br />
                  on the bottom row
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
                        I see. Then what do we do with the{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        ’s?
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
            Ignore{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            ’s
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Answer:</Bold>{' '}
              <Highlight>
                You can ignore{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                ’s for now.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
                <Emoji>🙄</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  Ignore{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  ’s for now
                </>
              }
            />
            <P>
              <Bold>Why?</Bold> Take a look at the next steps:
            </P>
            <Ul>
              <UlLi>
                <Bold>Match:</Bold>{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                <Emoji>✅</Emoji>
              </UlLi>
              <UlLi>
                <Bold>Copy:</Bold>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <Emoji>↘️</Emoji>{' '}
                <TopLeftBadgeWrapper topLeftBadgeType="match">
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />
                </TopLeftBadgeWrapper>
              </UlLi>
              <UlLi>
                <Bold>Remove:</Bold> <Emoji>💥</Emoji>{' '}
                <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />
              </UlLi>
            </Ul>
            <P>
              <Italic>
                None of them involves{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              </Italic>
              .{' '}
              <Highlight>
                So, while we do these next steps, you can ignore{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                ’s.
              </Highlight>
            </P>
            <R.Pbhg>
              Ignore the <EmojiWithText letter="b" /> labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              <br />
              for the next several steps
            </R.Pbhg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>Got it. Let’s continue then!</P>
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
            Finish the pair of{' '}
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Next:</Bold>{' '}
              <Highlight>
                We’ll finish the section that belongs to the pair of{' '}
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s
              </Highlight>
              .
            </P>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>,
                <Emoji>🍱</Emoji>,
                <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
              ]}
              description={
                <>
                  Finish the pair of{' '}
                  <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s
                </>
              }
            />
            <P>
              This will be a review of the last page! <Emoji>😉</Emoji>
            </P>
            <P>
              <Bold>First:</Bold> <InstructionTwo />{' '}
              <H args={{ name: 'pressNext' }} />
            </P>
            <R.Wwtl />
            <P>
              <Bold>Next:</Bold> <InstructionThree />
            </P>
            <R.Ltpe />
            <P>
              <Bold>Finally:</Bold> <InstructionFour />
            </P>
            <R.Apuz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        See, <Italic>none of the above steps involved</Italic>{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        , right?
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see, that’s why we can ignore{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        for now.
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
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s disappear,
            and <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s become{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              Let’s keep going! <H args={{ name: 'pressNext' }} />
            </P>
            <R.Uwma />
            <Ul>
              <UlLi>
                <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
                <BottomRightBadge inline bottomRightBadgeType="funcArg" /> are
                removed,
              </UlLi>
              <UlLi>
                <Highlight>
                  The pair of{' '}
                  <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>’s are
                  also removed, and…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  The pair of <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s
                  became the <Italic>new</Italic> pair of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
                </Highlight>
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>,
                <CustomEmoji type="singleArrow" />,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ]}
            />
          </>
        )
      },
      {
        title: <>Finish the remaining part</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        This now looks like lunchboxes from the previous page!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jwue>We now have a simpler lunchbox</R.Jwue>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Yes. Also, notice that:</P>
                      <Ul>
                        <UlLi>
                          The <EmojiWithText letter="b" /> was labeled as{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          earlier…
                        </UlLi>
                        <UlLi>
                          But{' '}
                          <Italic>
                            it will now be labeled as{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcArg"
                            />
                          </Italic>
                          , because it’s on the “<Bold>L</Bold>eft” now.
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Sgnp>
              The <EmojiWithText letter="b" /> is now labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />
            </R.Sgnp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Let’s keep going to the end.{' '}
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Kvso />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        We’re left with a <EmojiWithText letter="c" />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>That’s it! Were you able to follow?</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I think so?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Ok, let’s do a review just in case.</P>
                      <P>
                        We’ll run it from the beginning to the end using the{' '}
                        <H args={{ name: 'fastForward' }} /> button.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Beiz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>To summarize:</Bold>
                      </P>
                      <Ol>
                        <OlLi>
                          <Highlight>
                            Start with the pair of{' '}
                            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
                          </Highlight>
                        </OlLi>
                        <OlLi>
                          <Highlight>
                            Label the middle item on the bottom row as{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />
                            , and ignore it.
                          </Highlight>
                        </OlLi>
                        <OlLi>
                          <Highlight>
                            After finishing the pair of{' '}
                            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,
                            the pair of{' '}
                            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s
                            becomes{' '}
                            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s.
                          </Highlight>
                        </OlLi>
                      </Ol>
                      <P>Is this right?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Perfect!{' '}
                        <Highlight>
                          Let’s do a{' '}
                          <Bold>
                            <H args={{ name: 'yesNoQuiz' }} />
                          </Bold>{' '}
                          to check your understanding!
                        </Highlight>
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
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Dkiy />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Yiri />
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
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            sentence: true
                          }}
                        />
                        . We should be left with a bowl of{' '}
                        <EmojiWithText letter="h" /> at the end.
                      </P>
                      <P>
                        Let’s{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} /> it
                        to check!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Hdxc />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        We’re left with the <EmojiWithText letter="h" />. So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            lowerCase: true
                          }}
                        />
                        !
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Hmm… good job!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Two Additional Rules</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'wink',
                  children: (
                    <>
                      <P>
                        So… <Italic>did we win?</Italic> Can you return
                        mathboxes to us now? <CustomEmoji type="mathBox" />
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Italic>Not yet.</Italic> I still haven’t given you
                        questions regarding the{' '}
                        <HighlightBold>additional rules</HighlightBold> of a
                        lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={<>The additional rules…?</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>The additional rules?</Bold> What are you talking
                        about?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Well, take a look at the following lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Laea>
              There are two pairs of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
            </R.Laea>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… this is new.{' '}
                        <Italic>
                          There are two pairs of{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
                        </Italic>
                        .
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Next, how about this one?</P>
                    </>
                  )
                }
              ]}
            />
            <R.Gtdu>
              There’s only item (a <EmojiWithText letter="b" />)<br />
              on the bottom row
            </R.Gtdu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        This one looks new too.{' '}
                        <Italic>
                          There’s only one item (a <EmojiWithText letter="b" />)
                          on the bottom row.
                        </Italic>
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
        title: <>You need to know about the additional rules</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        In order to solve puzzles like the above, you need to
                        know about the <Bold>additional rules</Bold> of a
                        lunchbox.
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
                  You need the <Bold>additional rules</Bold> to
                  <br />
                  solve puzzles like the above
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
                        There are <Italic>two additional rules</Italic> you need
                        to know.
                      </P>
                      <P>
                        After explaining them, I’ll give you more{' '}
                        <H args={{ name: 'yesNoQuiz', postfix: 'zes' }} />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        What, <Italic>more quizzes</Italic>? When will you
                        return the mathboxes to us?{' '}
                        <CustomEmoji type="mathBox" />
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Well: </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            On the <Bold>intermediate levels</Bold>, which start
                            from the next page, I’ll give you a{' '}
                            <Italic>very difficult question</Italic>.
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          You’ll be able to solve it by applying the rules we
                          cover on this page.
                        </UlLi>
                      </Ul>
                      <P>
                        <Highlight>
                          I’ll give you the mathboxes back if you solve it!{' '}
                          <CustomEmoji type="mathBox" />
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <WillReturn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Really? So we’re pretty close to getting our mathboxes
                        back!
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        <Bold>In that case:</Bold> Let’s finish the rest of this
                        page quickly so we can move on to the intermediate
                        levels!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Alright, I will explain the{' '}
                        <Bold>additional rules</Bold> then.
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
            Additional Rule 1: Start with the leftmost pair of{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
          </>
        ),
        content: (
          <>
            <P>
              Take a look at this <H args={{ name: 'bentoBoxPuzzle' }} />, which
              has two pairs of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
              ’s:
            </P>
            <R.Laea>
              There are two pairs of{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s
            </R.Laea>
            <P>
              <Bold>Additional Rule 1:</Bold>{' '}
              <Highlight>
                If there are more than one pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s,{' '}
                <Italic>start with the leftmost</Italic> pair.
              </Highlight>
            </P>
            <R.Aezk>
              Start with the <Italic>leftmost</Italic> pair
            </R.Aezk>
            <Hr />
            <P>
              <Bold>Then, here’s a question:</Bold> What will happen to the
              labels? <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            </P>
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcArg" />,
                <BottomRightBadge inline bottomRightBadgeType="funcBound" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
            />
            <P>
              First, the top <EmojiWithText letter="a" /> will be labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" />.
            </P>
            <R.Igrl />
            <P>
              Next, the bottom-left <EmojiWithText letter="b" /> will be labeled
              as <BottomRightBadge inline bottomRightBadgeType="funcArg" />.
            </P>
            <R.Uppk />
            <P>
              Next, the right <EmojiWithText letter="b" /> and the right{' '}
              <EmojiWithText letter="c" /> will be labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />.
            </P>
            <R.Qfbk />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Note:</Bold>{' '}
                        <Highlight>
                          Any item that <Italic>touches</Italic> the{' '}
                          <Bold>right edge</Bold> of the lunchbox will be
                          labeled as{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />
                          .
                        </Highlight>
                      </P>
                      <P>
                        <Bold>Therefore:</Bold> The right{' '}
                        <EmojiWithText letter="b" /> will be labeled as{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        , even though it <Italic>looks like</Italic> it’s in the
                        middle.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Finally, the remaining <EmojiWithText letter="c" /> will be
              labeled as{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />.
            </P>
            <R.Yfwd />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          If none of{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />
                          ,{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />
                          , or{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          applies, then we use{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          for those items.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Hr />
            <P>
              Now, the <EmojiWithText letter="b" postfix="es" /> match:
            </P>
            <R.Dtzu />
            <P>
              And the <EmojiWithText letter="a" /> gets copied:
            </P>
            <R.Vilr />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… it’s pretty difficult.</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        The rest is simple though. Let’s{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} /> it
                        from here.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Izgz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        We’re left with <EmojiWithText letter="a" />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Yes. Hope you were following along!</P>
                      <P>
                        Let’s do a <H args={{ name: 'yesNoQuiz' }} /> now.
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
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Wcer />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Mqvu />
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
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false,
                            sentence: true
                          }}
                        />
                        . We should be left with <EmojiWithText letter="d" />{' '}
                        instead of <EmojiWithText letter="a" />.
                      </P>
                      <P>
                        Let’s{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} /> it
                        to check!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Thkn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        やった！最後に
                        <EmojiWithText letter="a" />
                        ではなく
                        <EmojiWithText letter="d" />
                        が残ったので、<Emoji>❌</Emoji> が正解だ！So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false,
                            lowerCase: true
                          }}
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
        type: 'sideNote',
        title: (
          <>
            補足: 左端に <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
            のペアがない場合
          </>
        ),
        content: (
          <>
            <P>
              ここで補足です。まず、下の弁当箱をご覧ください。先ほどの{' '}
              <H args={{ name: 'yesNoQuiz' }} />
              で登場した弁当箱とほとんど同じですが、
              <Highlight>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが弁当箱の左端になく、内側だけにあります。
              </Highlight>
            </P>
            <R.Dhzf>
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアが弁当箱の左端になく、
              <br />
              内側だけにある
            </R.Dhzf>
            <P>
              このような場合、
              <Highlight>
                内側の <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアの部分からはじめます。
              </Highlight>
            </P>
            <R.Mhyv>
              内側の <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアからはじめる
            </R.Mhyv>
            <P>
              残りは
              <H args={{ name: 'fastForward' }} /> で見てみましょう。
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Ayok />
            <P>
              まとめると、
              <Highlight>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアが弁当箱の左端にない場合は、内側の{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアからはじめればいい
              </Highlight>
              のです。
            </P>
          </>
        )
      },
      {
        title: (
          <>
            細かい法則その2: <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
            のペアのからはじめられない場合、
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> のペアからはじめる
          </>
        ),
        content: (
          <>
            <P>
              続いて、こちらの
              <H args={{ name: 'bentoBoxPuzzle' }} />
              をご覧ください。
            </P>
            <R.Gtdu>
              一番下の料理が
              <EmojiWithText letter="b" /> ひとつだけ
            </R.Gtdu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        この弁当箱は、
                        <HighlightBold>
                          一番下の段の料理が
                          <EmojiWithText letter="b" /> だけ
                        </HighlightBold>
                        なのに注目だ。
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        たしかに…仮に{' '}
                        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                        のペアからはじめるとしたら、
                      </P>
                      <P>
                        この
                        <EmojiWithText letter="b" />
                        には、
                        <HighlightBold>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          のうち、どの印をつければいいのだろう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jmmp>
              <EmojiWithText letter="b" /> には、
              <br />
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              のうちどの印をつければいい？
            </R.Jmmp>
            <P>
              答えは、「
              <HighlightBold>どの印もつけることができない</HighlightBold>
              」です。
              <Highlight>
                一番下の段にひとつしか料理がない場合、どの印をつけることもできないのです
              </Highlight>
              。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <EmojiForLetter letter="b" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <EmojiWithText letter="b" /> には、
                  <br />
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="funcArg"
                  />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  のどれもつけられない
                </>
              }
            />
            <P>
              ということはつまり、
              <Highlight>
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                のペアからはじめることができない
              </Highlight>
              、ということになります。
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
                  のペアからはじめられない
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>じゃあ、どうすればいいんだ？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>答え:</Bold> 上記のように{' '}
              <InlinePrioritiesLabel>1</InlinePrioritiesLabel>{' '}
              のペアからはじめられない場合は、
              <HighlightBold>
                <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                のペアからはじめます。
              </HighlightBold>
            </P>
            <R.Dqey>
              <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
              のペアからはじめる
            </R.Dqey>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        なるほど、
                        <InlinePrioritiesLabel>2</InlinePrioritiesLabel>{' '}
                        のペアからはじめれば、
                        <Highlight>
                          下の段に
                          <EmojiWithText letter="a" />
                          がふたつあるから、
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcArg"
                          />{' '}
                          と{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />{' '}
                          の印をつけられるね。
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        その通り。
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        は以下の通りになるぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Oork>
              <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcArg" />{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcBound" />{' '}
              はこうなる
            </R.Oork>
            <P>
              残りは
              <H args={{ name: 'fastForward' }} /> で見ていきましょう:
            </P>
            <R.Diis />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        最終的に
                        <EmojiWithText letter="c" />と
                        <EmojiWithText letter="b" />
                        が残った！
                      </P>
                      <P>
                        <Highlight>
                          このふたつが残った時点で、もうこれ以上進められないから、そこで終了する
                        </Highlight>
                        というわけか。
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        その通りだ。では、ここで{' '}
                        <H args={{ name: 'yesNoQuiz' }} />
                        の時間だ。
                      </P>
                      <P>
                        <Highlight>
                          これが初級最後の <H args={{ name: 'yesNoQuiz' }} />
                          になるぞ！
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
        type: 'yesNoQuiz',
        title: (
          <>
            <H args={{ name: 'yesNoQuiz' }} />
          </>
        ),
        content: (
          <>
            <P>
              <H args={{ name: 'lookAtThisBentoBox' }} />:
            </P>
            <R.Fclo />
            <P>
              <H args={{ name: 'whatHappensAtTheEndQuestion' }} />
            </P>
            <R.Rgta />
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
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            sentence: true
                          }}
                        />
                        . I think we should be left with{' '}
                        <EmojiWithText letter="d" /> and a{' '}
                        <EmojiWithText letter="b" />.
                      </P>
                      <P>
                        Let’s{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} /> it
                        to check!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', mentionRightArrow: true }} />
            </P>
            <R.Cuwg />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        We’re left with <EmojiWithText letter="d" /> and a{' '}
                        <EmojiWithText letter="b" />. So{' '}
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: true,
                            lowerCase: true
                          }}
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
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <ThreeRowRules />
            <Hr />
            <Beginner5Rules />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>これらの法則を覚えきれるか、不安だなあ…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          安心しろ、これらの法則を暗記する必要はない。
                        </HighlightBold>
                        なんとなく「
                        <Highlight>こういう法則があるんだな</Highlight>
                        」と頭に入れておけば大丈夫だ。
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
        title: <>初級はここまで！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        どうだ、
                        <H args={{ name: 'yesNoQuiz' }} />
                        をすべて解いたぞ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        やるじゃないか。
                        <Highlight>
                          というわけで、初級編はここで終わりだ。次からは中級編に入る。
                        </Highlight>
                      </P>
                      <P>
                        さきほど約束した通り、
                        <Highlight>
                          <HighlightBold>
                            次からはじまる中級編で、とても難しい問題を出題する。
                          </HighlightBold>
                          このページで紹介した法則を応用すれば解ける問題だ。それに答えることができたら、計算箱を返してやろう！
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <WillReturn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        その難しい問題とやらを解けば、本当に計算箱を返してもらえるのか？
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ああ、悪魔に二言はないからな。</P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、やってやるぞ！中級編に進もう！</P>
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

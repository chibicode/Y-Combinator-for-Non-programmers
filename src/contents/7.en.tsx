import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Bold,
  Italic,
  Hr
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import CardContent from 'src/components/CardContent'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'
import { Beginner5Rules } from 'src/contents/5.en'

export const Problem = () => (
  <>
    <R.Cawa>
      <Highlight>
        <Bold>Challenge:</Bold>
        <br />
        Fill each <CustomEmoji type="questionFoodGrey" /> icon in such a way
        that,
      </Highlight>
    </R.Cawa>
    <ExpressionRunnerSeparator />
    <R.Jzwg>
      <Highlight>
        After you <H args={{ name: 'run', lowerCase: true }} /> it,
        <br />
        the resulting lunchbox can be converted to <EmojiNumber number={1} />.
      </Highlight>
    </R.Jzwg>
  </>
)

export const StepOne = () => (
  <>
    <BubbleQuotes
      quotes={[
        {
          type: 'dog',
          children: (
            <>
              <P>
                Let’s <H args={{ name: 'run', lowerCase: true }} /> it!
              </P>
              <P>
                <Bold>First:</Bold>{' '}
                <Highlight>
                  Because there are multiple pairs of{' '}
                  <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s, we start
                  from the leftmost pair.
                </Highlight>
              </P>
            </>
          )
        }
      ]}
    />
    <P>
      <H
        args={{
          name: 'pressRun',
          mentionRightArrow: true
        }}
      />
    </P>
  </>
)

export const StepTwo = () => (
  <>
    <BubbleQuotes
      quotes={[
        {
          type: 'dog',
          children: (
            <>
              <P>
                <Bold>Second:</Bold> We can’t start with the leftmost pair of{' '}
                <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                ’s because there’s only one item on the bottom (a{' '}
                <EmojiWithText letter="b" />
                ).
              </P>
              <P>
                Therefore,{' '}
                <Highlight>
                  we do the pair of{' '}
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s.
                </Highlight>
              </P>
            </>
          )
        }
      ]}
    />
    <P>
      <H
        args={{
          name: 'pressRun'
        }}
      />
    </P>
  </>
)

export const StepThree = () => (
  <>
    <BubbleQuotes
      quotes={[
        {
          type: 'dog',
          children: (
            <>
              <P>
                <Bold>Third:</Bold>{' '}
                <Highlight>
                  We’ll need to start with the pair of{' '}
                  <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s
                </Highlight>{' '}
                again, just like the last time.
              </P>
            </>
          )
        }
      ]}
    />
    <P>
      <H
        args={{
          name: 'pressRun'
        }}
      />
    </P>
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>Things will get harder</>,
        content: (
          <>
            <P>
              <Bold>Warning:</Bold> From this page, things will get much harder.
              The lunchboxes will become more complicated.
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>Things will get harder</>}
            />
            <P>
              <Bold>But:</Bold>{' '}
              <Highlight>
                You don’t need to understand everything immediately. Even if you
                don’t completely get it, please keep reading!
              </Highlight>
            </P>
          </>
        )
      },
      {
        title: <>The problem</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>As promised:</Bold> If you can solve this problem,
                        I’ll return your mathboxes.
                      </P>
                      <P>Minion, explain the problem!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Sure. First,{' '}
                        <H
                          args={{ name: 'lookAtThisLunchBox', lowerCase: true }}
                        />
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dvfg></R.Dvfg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        We learned on the last page that{' '}
                        <Highlight>
                          I can convert this lunchbox to{' '}
                          <EmojiNumber number={0} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hkbs>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 0 }}
              />
            </R.Hkbs>
            <ExpressionRunnerSeparator />
            <R.Jwah />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Now, take a look at this lunchbox.</P>
                      <P>
                        <Highlight>
                          Each <CustomEmoji type="questionFoodGrey" /> icon{' '}
                          <Italic>represents a food item</Italic>, but we’ll
                          talk about that later.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents a
              food item
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          We now combine the above two lunchboxes.
                        </Highlight>
                      </P>
                      <P>If you combine them, it’ll look like this:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>After combining the two lunchboxes</R.Stda>
          </>
        )
      },
      {
        type: 'challengeProblem',
        title: (
          <>
            <EmojiNumber number={0} /> to <EmojiNumber number={1} />
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
                        <Bold>Now, here’s the challenge:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you fill each{' '}
                            <CustomEmoji type="questionFoodGrey" /> icon with
                            the <Italic>correct</Italic> food item,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            After running it, it becomes a lunchbox that can be
                            converted to <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Cawa>
              If you fill each <CustomEmoji type="questionFoodGrey" /> icon with
              <br />
              the <Italic>correct</Italic> food item,
            </R.Cawa>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              After running it, it becomes a lunchbox
              <br />
              that can be converted to <EmojiNumber number={1} />
            </R.Jzwg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Because the top lunchbox can be converted to{' '}
                        <EmojiNumber number={0} />,
                      </P>
                      <R.Hkbs>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'd',
                            number: 0
                          }}
                        />
                      </R.Hkbs>
                      <P>
                        <Bold>It means that:</Bold>
                      </P>
                      <Ul>
                        <UlLi>By running the combined lunchbox,</UlLi>
                        <UlLi>
                          <Highlight>
                            A lunchbox that can be converted to{' '}
                            <EmojiNumber number={0} />…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Becomes a lunchbox that can be converted to{' '}
                            <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={0} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  A lunchbox that can be converted to <EmojiNumber number={0} />
                  <br />
                  becomes a lunchbox
                  <br />
                  that can be converted to <EmojiNumber number={1} />
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
                        <Bold>So, here’s what you need to do:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            Fill each <CustomEmoji type="questionFoodGrey" />{' '}
                            icon in a way such that,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            After you{' '}
                            <H args={{ name: 'run', lowerCase: true }} /> it,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            The resulting lunchbox can be converted to{' '}
                            <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <Problem />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        This is the <Bold>“very difficult question”</Bold> I’ve
                        been talking about.
                      </P>
                      <P>
                        <Highlight>
                          If you solve this, I’ll return your mathboxes!
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
        title: <>Try filling with random items</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Hmm… I don’t know if I understood the problem.</P>
                      <P>And I have no idea how to solve it!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>No problem!</Bold> First,{' '}
                        <Highlight>
                          try filling each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon with a{' '}
                          <Italic>random</Italic> food item.
                        </Highlight>
                      </P>
                      <P>
                        By doing so, you’ll be able to understand the problem
                        better.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>
              Try filling each <CustomEmoji type="questionFoodGrey" /> icon
              <br />
              with a <Italic>random</Italic> food item! <Emoji>🐶</Emoji>
            </R.Stda>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>Ok, let me try…</P>
                      <P>
                        <Bold>Here it is:</Bold> I randomly filled each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon with{' '}
                        <EmojiWithText letter="a" />, a{' '}
                        <EmojiWithText letter="b" />, or a{' '}
                        <EmojiWithText letter="c" />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fzpz>
              Randomly filled each <CustomEmoji type="questionFoodGrey" /> icon
              with
              <br />
              <EmojiForLetter letter="a" /> <EmojiForLetter letter="b" />{' '}
              <EmojiForLetter letter="c" />
            </R.Fzpz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Now, we’ll <H args={{ name: 'run', lowerCase: true }} />{' '}
                        the above lunchbox, and…
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If it becomes a lunchbox that can be converted to{' '}
                            <EmojiNumber number={1} />, it’s a{' '}
                            <Highlight>success!</Highlight> <Emoji>🎉</Emoji>
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            If not, then it’s a <Highlight>failure</Highlight>.{' '}
                            <Emoji>😭</Emoji>
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>
              We’ll <H args={{ name: 'run', lowerCase: true }} /> this lunchbox,
              and…
            </R.Nuco>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              If it becomes a lunchbox that can be
              <br />
              converted to <EmojiNumber number={1} size="mdlg" />,{' '}
              <Highlight>success</Highlight>. <Emoji>🎉</Emoji>
              <br />
              Otherwise, <Highlight>failure</Highlight> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Ok, let’s <H args={{ name: 'run', lowerCase: true }} />{' '}
                        it!
                      </P>
                    </>
                  )
                }
              ]}
            />
          </>
        ),
        footer: {
          content: (
            <>
              <CardContent
                children={
                  <>
                    <Hr />
                    <Beginner5Rules />
                  </>
                }
                preview={{
                  text: <>Do a Quick Review</>,
                  content: (
                    <>
                      <P>
                        <Bold>Need a review?</Bold> To solve the above lunchbox,{' '}
                        <Highlight>
                          we’ll need to use the rules from{' '}
                          <Bold>Beginner 5</Bold>.
                        </Highlight>
                      </P>
                      <P>
                        If you want to review them,{' '}
                        <Highlight>press “Do a Quick Review” below.</Highlight>
                      </P>
                    </>
                  )
                }}
              />
            </>
          )
        }
      },
      {
        title: (
          <>
            Let’s <H args={{ name: 'run', lowerCase: true }} /> it!
          </>
        ),
        content: (
          <>
            <StepOne />
            <R.Dhiu>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Dhiu>
            <StepTwo />
            <R.Akjy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Akjy>
            <StepThree />
            <R.Hnyn>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hnyn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>So this is the final result!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bwff>Final result</R.Bwff>
          </>
        )
      },
      {
        title: <>Can’t convert to a mathbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Now, we want to convert this to a mathbox…</P>
                      <P>
                        <Bold>But unfortunately:</Bold>{' '}
                        <Highlight>I won’t be able to convert this.</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xwzc>
              <Emoji>❌</Emoji> Can’t convert this to a mathbox{' '}
              <Emoji>❌</Emoji>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Why not?</Bold> Because it doesn’t follow this
                        pattern:
                      </P>
                      <R.Eozk>
                        <H
                          args={{
                            name: 'convertiblePatternCaption',
                            skipFirst: true
                          }}
                        />
                      </R.Eozk>
                      <P>
                        <Highlight>
                          There needs to be exactly one <Emoji>🅱️</Emoji> on the
                          top-right, but that’s not the case here.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fhrd>
              What’s on the top-right is not <Emoji>🅱️</Emoji>.<br />
              Instead, it’s <Emoji>🅰️</Emoji>. That’s why it cannot be
              <br />
              converted to a mathbox.
            </R.Fhrd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Hmm…{' '}
                        <Highlight>
                          if the top-right was a <EmojiWithText letter="c" />{' '}
                          instead of a <EmojiWithText letter="b" />, it could
                          have been converted to <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                      <P>It was so close!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bgxi>
              If the top-right was a <EmojiWithText letter="c" />,
              <br />
              it could have been converted to <EmojiNumber number={1} />
            </R.Bgxi>
            <ExpressionRunnerSeparator />
            <R.Rnug />
          </>
        )
      },
      {
        title: (
          <>
            Failure <Emoji>😭</Emoji>
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
                        <Bold>So:</Bold> Because it didn’t become a lunchbox
                        that can be converted to <EmojiNumber number={1} /> at
                        the end…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>
              When you <H args={{ name: 'run', lowerCase: true }} /> it…
            </R.Nuco>
            <ExpressionRunnerSeparator />
            <R.Xwzc>
              It didn’t become a lunchbox
              <br />
              that can be converted to <EmojiNumber number={1} />
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Your answer was incorrect!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              Filling each <CustomEmoji type="questionFoodGrey" /> icon…
            </R.Envj>
            <ExpressionRunnerSeparator />
            <R.Olyw>
              In the following way was <HighlightBold>incorrect</HighlightBold>{' '}
              <Emoji>😭</Emoji>
            </R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Hmm… sad!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        type: 'challengeProblem',
        title: <>Let’s try again</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Hopefully you understood what the problem is asking. So
                        let’s state it again:
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            Fill each <CustomEmoji type="questionFoodGrey" />{' '}
                            icon in a way such that,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            After you{' '}
                            <H args={{ name: 'run', lowerCase: true }} /> it,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            The resulting lunchbox can be converted to{' '}
                            <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <Problem />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Again:</Bold> The “random” lunchbox you came up
                        with was incorrect.
                      </P>
                      <P>
                        <Highlight>
                          Try to see if you can come up with a different one
                          that works!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olyw>This was incorrect</R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        Hmm… I now understand the problem, but I don’t know how
                        to solve it!
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
        title: <>The answer is on the next page</>,
        content: (
          <>
            <P>
              The villagers are so close to getting their mathboxes back, but
              they’re struggling with the difficult problem.
            </P>
            <EmojiSeparator
              emojis={['❓', '😭', '❓']}
              description={<>This problem is too difficult!</>}
            />
            <P>
              <Bold>But:</Bold>{' '}
              <Highlight>
                They’ll figure out the answer on the next page.
              </Highlight>{' '}
              Let’s keep reading!
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

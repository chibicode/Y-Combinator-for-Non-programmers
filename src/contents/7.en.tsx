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
        type: 'challengeProblem',
        title: <>The Challenge Question</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>As promised:</Bold> If you can solve this
                        challenge question, I’ll return your mathboxes.
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
                      <P>
                        Second,{' '}
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
            <R.Fqcg />
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
                          <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Joaq>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'b', number: 1 }}
              />
            </R.Joaq>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Now, here’s the question:</Bold>{' '}
                        <Highlight>
                          How can you turn the first lunchbox into the second
                          lunchbox?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dvfg>How can you turn the first lunchbox…</R.Dvfg>
            <ExpressionRunnerSeparator />
            <R.Fqcg>Into the second lunchbox?</R.Fqcg>
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
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I have no idea…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>No problem. Let me give you some hints!</P>
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
        title: <>Hint 1: Combine with something</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Here’s the first hint:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you combine the first lunchbox with a specific
                            kind of a lunchbox <Emoji>🍱</Emoji> and{' '}
                            <H args={{ name: 'run', lowerCase: true }} /> it,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            You’ll end up with the second lunchbox.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Xmns>
              If you combine the first lunchbox with
              <br />a specific kind of a lunchbox <Emoji>🍱</Emoji>…
            </R.Xmns>
            <ExpressionRunnerSeparator />
            <R.Fqcg>
              After you <H args={{ name: 'run', lowerCase: true }} /> it,
              <br />
              you’ll end up with the second lunchbox
            </R.Fqcg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>So the question is:</Bold>{' '}
                        <Highlight>What lunchbox should we use?</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={<>What lunchbox should we use?</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I still have no idea…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>No problem. Let me give you another hint!</P>
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
        title: (
          <>
            Hint 2: A lunchbox with <CustomEmoji type="questionFoodGrey" />
            ’s
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
                      <P>Take a look at this lunchbox.</P>
                      <P>
                        <Highlight>
                          Each <CustomEmoji type="questionFoodGrey" /> icon{' '}
                          <Italic>represents a food item</Italic>.
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
                        <Bold>Here’s the second hint:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you combine the first lunchbox with the above
                            lunchbox and{' '}
                            <H args={{ name: 'run', lowerCase: true }} /> it,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            You’ll end up with the second lunchbox.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Cawa>
              If you combine the first lunchbox with
              <br />
              the above lunchbox…
            </R.Cawa>
            <ExpressionRunnerSeparator />
            <R.Fqcg>
              After you <H args={{ name: 'run', lowerCase: true }} /> it,
              <br />
              you’ll end up with the second lunchbox
            </R.Fqcg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>So the question is:</Bold>{' '}
                        <Highlight>
                          Which food item goes in each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              Which food item goes in each{' '}
              <CustomEmoji type="questionFoodGrey" /> icon?
            </R.Envj>
          </>
        )
      },
      // {
      //   type: 'challengeProblem',
      //   title: (
      //     <>
      //       <EmojiNumber number={0} /> to <EmojiNumber number={1} />
      //     </>
      //   ),
      //   content: (
      //     <>
      //       <BubbleQuotes
      //         quotes={[
      //           {
      //             type: 'dog',
      //             children: (
      //               <>
      //                 <P>
      //                   <Bold>Now, here’s the challenge:</Bold>
      //                 </P>
      //                 <Ul>
      //                   <UlLi>
      //                     <Highlight>
      //                       If you fill each{' '}
      //                       <CustomEmoji type="questionFoodGrey" /> icon with
      //                       the <Italic>correct</Italic> food item,
      //                     </Highlight>
      //                   </UlLi>
      //                   <UlLi>
      //                     <Highlight>
      //                       After running it, it becomes a lunchbox that can be
      //                       converted to <EmojiNumber number={1} />.
      //                     </Highlight>
      //                   </UlLi>
      //                 </Ul>
      //               </>
      //             )
      //           }
      //         ]}
      //       />
      //       <R.Cawa>
      //         If you fill each <CustomEmoji type="questionFoodGrey" /> icon with
      //         <br />
      //         the <Italic>correct</Italic> food item,
      //       </R.Cawa>
      //       <ExpressionRunnerSeparator />
      //       <R.Jzwg>
      //         After running it, it becomes a lunchbox
      //         <br />
      //         that can be converted to <EmojiNumber number={1} />
      //       </R.Jzwg>
      //       <BubbleQuotes
      //         quotes={[
      //           {
      //             type: 'dog',
      //             children: (
      //               <>
      //                 <P>
      //                   Because the top lunchbox can be converted to{' '}
      //                   <EmojiNumber number={0} />,
      //                 </P>
      //                 <R.Hkbs>
      //                   <H
      //                     args={{
      //                       name: 'canBeConvertedCaption',
      //                       letter: 'd',
      //                       number: 0
      //                     }}
      //                   />
      //                 </R.Hkbs>
      //                 <P>
      //                   <Bold>It means that:</Bold>
      //                 </P>
      //                 <Ul>
      //                   <UlLi>By running the combined lunchbox,</UlLi>
      //                   <UlLi>
      //                     <Highlight>
      //                       A lunchbox that can be converted to{' '}
      //                       <EmojiNumber number={0} />…
      //                     </Highlight>
      //                   </UlLi>
      //                   <UlLi>
      //                     <Highlight>
      //                       Becomes a lunchbox that can be converted to{' '}
      //                       <EmojiNumber number={1} />.
      //                     </Highlight>
      //                   </UlLi>
      //                 </Ul>
      //               </>
      //             )
      //           }
      //         ]}
      //       />
      //       <EmojiSeparator
      //         nodes={[
      //           <EmojiNumber number={0} />,
      //           <CustomEmoji type="singleArrow" />,
      //           <EmojiNumber number={1} />
      //         ]}
      //         description={
      //           <>
      //             A lunchbox that can be converted to <EmojiNumber number={0} />
      //             <br />
      //             becomes a lunchbox
      //             <br />
      //             that can be converted to <EmojiNumber number={1} />
      //           </>
      //         }
      //       />
      //       <BubbleQuotes
      //         quotes={[
      //           {
      //             type: 'dog',
      //             children: (
      //               <>
      //                 <P>
      //                   <Bold>So, here’s what you need to do:</Bold>
      //                 </P>
      //                 <Ul>
      //                   <UlLi>
      //                     <Highlight>
      //                       Fill each <CustomEmoji type="questionFoodGrey" />{' '}
      //                       icon in a way such that,
      //                     </Highlight>
      //                   </UlLi>
      //                   <UlLi>
      //                     <Highlight>
      //                       After you{' '}
      //                       <H args={{ name: 'run', lowerCase: true }} /> it,
      //                     </Highlight>
      //                   </UlLi>
      //                   <UlLi>
      //                     <Highlight>
      //                       The resulting lunchbox can be converted to{' '}
      //                       <EmojiNumber number={1} />.
      //                     </Highlight>
      //                   </UlLi>
      //                 </Ul>
      //               </>
      //             )
      //           }
      //         ]}
      //       />
      //       <Problem />
      //       <BubbleQuotes
      //         quotes={[
      //           {
      //             type: 'devil',
      //             children: (
      //               <>
      //                 <P>
      //                   This is the <Bold>“very difficult question”</Bold> I’ve
      //                   been talking about.
      //                 </P>
      //                 <P>
      //                   <Highlight>
      //                     If you solve this, I’ll return your mathboxes!
      //                   </Highlight>
      //                 </P>
      //               </>
      //             )
      //           }
      //         ]}
      //       />
      //     </>
      //   )
      // },
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
                      <P>Hmm… I still have no idea…</P>
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
                        the above lunchbox and{' '}
                        <Highlight>
                          check see if it becomes the second lunchbox.
                        </Highlight>
                      </P>
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
            <R.Fqcg>
              <Emoji>❓</Emoji> See if it becomes this lunchbox{' '}
              <Emoji>❓</Emoji>
            </R.Fqcg>
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
        title: <>Not what we wanted</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>What we wanted to get at the end was this lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Fqcg>What we wanted</R.Fqcg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>But instead, we got this lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bwff>We got this lunchbox instead</R.Bwff>
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

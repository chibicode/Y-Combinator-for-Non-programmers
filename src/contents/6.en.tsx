import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Bold,
  Italic,
  Hr
} from 'src/components/ContentTags'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import YesNoButtons from 'src/components/YesNoButtons'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import NextLessonButton from 'src/components/NextLessonButton'
import { BasicRules, Unmatched } from 'src/contents/4.en'
import { ThreeRowRules, Beginner5Rules } from 'src/contents/5.en'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>Welcome to the intermediate levels!</>,
        preview: {
          content: (
            <>
              <P>
                <Bold>Welcome to the intermediate levels:</Bold> Things will be
                harder than the beginner levels, but you should be able to
                handle them!
              </P>
              <Hr />
              <P>
                <Bold>Did you forget what we’ve learned so far?</Bold> If you
                took a long break after finishing the beginner levels, maybe
                you’ve forgotten what we learned.
              </P>
              <EmojiSeparator
                emojis={['❓', '😭', '❓']}
                description={<>Did you forget what we’ve learned so far?</>}
              ></EmojiSeparator>
              <P>
                <Bold>If so:</Bold> I’ve prepared a{' '}
                <Italic>review material</Italic> for you. If you’ve forgotten
                what we’ve learned so far,{' '}
                <Highlight>press “Do a Quick Review”</Highlight> below.
              </P>
              <P>
                <Bold>Otherwise:</Bold> If you’ve just finished the beginner
                levels and don’t need a review,{' '}
                <Highlight>
                  then skip the review and please continue reading!{' '}
                  <Emoji>😉</Emoji>
                </Highlight>
              </P>
            </>
          ),
          text: <>Do a Quick Review</>
        },
        content: (
          <>
            <Hr />
            <P>
              <Bold>First:</Bold> People in Lambda Village were using{' '}
              <HighlightBold>mathboxes</HighlightBold>. A mathbox has{' '}
              <Highlight>
                <H args={{ name: 'plusOneFeature' }} />
              </Highlight>{' '}
              and{' '}
              <Highlight>
                <H args={{ name: 'minusOneFeature' }} />
              </Highlight>
              .
            </P>
            <TwoColGrid
              noTopNegativeMargin
              left={
                <>
                  <R.Lizi>
                    <H args={{ name: 'plusOneFeature', capitalize: true }} />
                  </R.Lizi>
                  <ExpressionRunnerSeparator />
                  <R.Pmdm></R.Pmdm>
                </>
              }
              right={
                <>
                  <R.Fdig>
                    <H args={{ name: 'minusOneFeature', capitalize: true }} />
                  </R.Fdig>
                  <ExpressionRunnerSeparator />
                  <R.Pmdm></R.Pmdm>
                </>
              }
            />
            <Hr />
            <P>
              <Bold>Also:</Bold> By using{' '}
              <Highlight>
                <H args={{ name: 'repeatFeature' }} />
              </Highlight>
              , you can do additions and subtractions.
            </P>
            <R.Ednv>
              Use <H args={{ name: 'repeatFeature' }} />
              <br />
              to calculate <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={4} />
            </R.Ednv>
            <Hr />
            <P>
              <Bold>But:</Bold> The mathboxes were taken by the devil{' '}
              <Emoji>😈</Emoji>. To take them back, we must solve{' '}
              <Highlight>
                <H args={{ name: 'lunchBoxPuzzle', postfix: 's' }} />
              </Highlight>
              . A lunchbox works as follows:
            </P>
            <BasicRules includeFuncUnbound />
            <Hr />
            <Unmatched />
            <Hr />
            <P>We also learned about the mathboxes with 3 or more rows:</P>
            <ThreeRowRules />
            <R.Vdhd>Lunchbox with 3 rows</R.Vdhd>
            <Hr />
            <Beginner5Rules />
            <Hr />
            <P>
              <Bold>Note:</Bold>{' '}
              <Highlight>You don’t need to memorize the rules.</Highlight> You
              just need to know that these rules exist, and you should be fine.
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>You don’t need to memorize these rules!</>}
            />
            <P>Let’s start the intermediate levels!</P>
          </>
        )
      },
      {
        title: <>Hello, Minion</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>We’ll start the intermediate levels.</P>
                      <P>
                        <Bold>As promised:</Bold>{' '}
                        <Highlight>
                          I’ll give you a{' '}
                          <Italic>very difficult question</Italic>. I’ll give
                          you the mathboxes back if you solve it!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  If you can solve this very difficult question,
                  <br />
                  I’ll give you the mathboxes back!
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Alright, let’s do it!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        But before I give you the question, let me introduce you{' '}
                        to <Italic>my business partner</Italic>.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>What? Your business partner?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I’ll call him now.</P>
                      <P>
                        Come here, <HighlightBold>Minion</HighlightBold>!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🐶', '✨']}
              description={
                <>
                  Hello, I’m <Bold>Minion!</Bold>
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
                        Hello, I’m Minion. How may I help you today, Mr. Devil?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Thanks for coming! Everyone, this is my business
                        partner, Minion.
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>So…a dog?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Well, Minion is not a regular dog. He’s got some{' '}
                        <Italic>special</Italic> tricks.
                      </P>
                      <P>Minion, show these guys one of your tricks!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Sure thing, sir!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Minion’s Trick</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <Emoji>🐶</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={<>I’ll show you a trick of mine!</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Take a look at this lunchbox!</P>
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
                      <P>It looks like a regular lunchbox…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        By using my trick,{' '}
                        <Italic>
                          I can convert this lunchbox into a mathbox
                        </Italic>
                        .
                      </P>
                      <P>
                        <Highlight>
                          Try pressing the{' '}
                          <H args={{ name: 'convertToMathbox' }} /> button
                          below!
                        </Highlight>
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
                        Wow! It became a mathbox containing a{' '}
                        <EmojiNumber number={0} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes, and importantly:</Bold>{' '}
                        <Italic>The conversion follows a specific rule.</Italic>
                      </P>
                      <P>
                        <Highlight>Try guessing what this rule is!</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  I convert a lunchbox into a mathbox, and
                  <br />
                  there’s a specific rule for the conversion
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
                        Hmm… I wonder what the rule is. Let’s take a look at
                        more examples!
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
        title: <>What’s the rule?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Here are 3 more examples.{' '}
                        <Highlight>
                          Try pressing <H args={{ name: 'convertToMathbox' }} />{' '}
                          on each lunchbox!
                        </Highlight>
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
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Each one is following the <Italic>same rule</Italic>.
                        Can you figure out what this rule is?
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I might have figured out the pattern!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Alright!{' '}
                        <Highlight>
                          Let’s do a{' '}
                          <Bold>
                            <H args={{ name: 'yesNoQuiz', lowerCase: true }} />
                          </Bold>{' '}
                          to check your understanding!
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Take a look at this lunchbox:</P>
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
                        If I convert this into a mathbox,{' '}
                        <Italic>will it be like the following?</Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kizi />
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
                        . I think it becomes <EmojiNumber number={4} /> after
                        conversion.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s try it!{' '}
                        <Highlight>
                          Press <H args={{ name: 'convertToMathbox' }} /> below.
                        </Highlight>
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
                        It became <EmojiNumber number={4} />. So{' '}
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
                  type: 'dog',
                  children: (
                    <>
                      <P>Alright, so let me explain the rules!</P>
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
        title: <>The Conversion Rule</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>🐶</Emoji>,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  I’ll show you exactly how to convert
                  <br />a lunchbox into a mathbox!
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
                        <Bold>Important:</Bold> I can only convert{' '}
                        <Italic>certain types</Italic> of lunchboxes into
                        mathboxes. A lunchbox must match the following patterns
                        to be convertible.
                      </P>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          It must have <Italic>three columns</Italic>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pirb>
              <H args={{ name: 'convertiblePatternThreeColumnsCaption' }} />
            </R.Pirb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Second:</Bold>{' '}
                        <Highlight>
                          It must match the following pattern.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mgku>
              <H args={{ name: 'convertiblePatternFirstCaption' }} />
            </R.Mgku>
            <R.Xxas>
              <H args={{ name: 'convertiblePatternSecondCaption' }} />
            </R.Xxas>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm, can you give me a concrete example?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Sure, take a look at this lunchbox I showed you earlier:
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
                        Let’s now add label each item as <Emoji>🅰️</Emoji> or{' '}
                        <Emoji>🅱️</Emoji>’s using this rule:
                      </P>
                      <R.Mgku>
                        <H args={{ name: 'convertiblePatternFirstCaption' }} />
                      </R.Mgku>
                      <P>
                        First, because there are <EmojiWithText letter="e" /> on
                        the left, we label all <EmojiWithText letter="e" /> as{' '}
                        <Emoji>🅰️</Emoji>.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Alca>
              There’s a <EmojiForLetter letter="e" /> on the left, so
              <br />
              label all <EmojiForLetter letter="e" />
              ’s as <Emoji>🅰️</Emoji>
            </R.Alca>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Next, there’s a <EmojiWithText letter="f" /> in the
                        middle, so we label all{' '}
                        <EmojiWithText letter="f" postfix="s" /> as{' '}
                        <Emoji>🅱️</Emoji>.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mepb>
              There’s a <EmojiForLetter letter="f" /> in the middle, so
              <br />
              label all <EmojiForLetter letter="f" />
              ’s as <Emoji>🅱️</Emoji>
            </R.Mepb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Therefore, the above lunchbox has the following pattern:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Whbu></R.Whbu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>…which fits the rule I explained earlier.</P>
                      <R.Eozk></R.Eozk>
                      <P>
                        <Bold>Therefore:</Bold> It <Italic>can</Italic> be
                        converted to a mathbox!
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see.</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Now you might be wondering:</Bold> After the
                        conversion, <Italic>what number does it become?</Italic>
                      </P>
                      <P>
                        <Bold>Answer:</Bold> The resulting number will be{' '}
                        <Highlight>
                          equal to the number of <Emoji>🅰️</Emoji>’s on the
                          bottom right.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        In the current example, there are <Italic>two</Italic>{' '}
                        <EmojiWithText letter="e" /> labeled as{' '}
                        <Emoji>🅰️</Emoji> on the bottom right.
                      </P>
                      <P>
                        <Bold>Therefore:</Bold> I can convert this into{' '}
                        <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wopl>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'e', number: 2 }}
              />
            </R.Wopl>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see.</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Italic>
                          As long as it follows the same pattern, it doesn’t
                          matter which items are used.
                        </Italic>
                      </P>
                      <P>
                        <Bold>Example:</Bold> Suppose that we have{' '}
                        <EmojiWithText letter="k" postfix="s" /> and{' '}
                        <EmojiWithText letter="l" />…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jyqf />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        We’ll add <Emoji>🅰️</Emoji>’s and <Emoji>🅱️</Emoji>’s as
                        follows…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mzqc>
              <EmojiForLetter letter="k" /> is on the left, so use{' '}
              <Emoji>🅰️</Emoji>.
              <br />
              <EmojiForLetter letter="l" /> is in the middle, so use{' '}
              <Emoji>🅱️</Emoji>.
            </R.Mzqc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        So, if we convert it to a mathbox, it’ll be{' '}
                        <EmojiNumber number={2} />, just like the previous
                        example.
                      </P>
                      <P>
                        This is because there are <Italic>two</Italic>{' '}
                        <EmojiWithText letter="k" postfix="s" /> labeled as{' '}
                        <Emoji>🅰️</Emoji> on the bottom-right.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qwdg>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'k', number: 2 }}
              />
            </R.Qwdg>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Summary:</Bold> As long as the lunchbox has the
                        same pattern of <Emoji>🅰️</Emoji>’s and{' '}
                        <Emoji>🅱️</Emoji>’s, it will be converted to the same
                        number.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hehx>
              <H args={{ name: 'whatTheNumberIsCaption' }} />
            </R.Hehx>
          </>
        )
      },
      {
        title: <>Other Examples</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s try to apply the rules on the lunchbox from the
                        previous{' '}
                        <H args={{ name: 'yesNoQuiz', lowerCase: true }} />.
                      </P>
                      <P>
                        <H args={{ name: 'lookAtThisLunchBox' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dubm>The lunchbox from the previous quiz</R.Dubm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        If you label each item with <Emoji>🅰️</Emoji> or{' '}
                        <Emoji>🅱️</Emoji>, then there will be{' '}
                        <Italic>four</Italic>{' '}
                        <EmojiWithText letter="i" postfix="s" /> labeled as{' '}
                        <Emoji>🅰️</Emoji> on the bottom-right.
                      </P>
                      <P>
                        <Bold>So:</Bold> It can be converted to{' '}
                        <EmojiNumber number={4} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Duuk>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'i', number: 4 }}
              />
            </R.Duuk>
            <ExpressionRunnerSeparator />
            <R.Kizi />
          </>
        )
      },
      {
        title: (
          <>
            It can also be <EmojiNumber number={0} />
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
                        Next, here’s a lunchbox we showed earlier on this page:
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
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        If you label each item with <Emoji>🅰️</Emoji> or{' '}
                        <Emoji>🅱️</Emoji>…
                      </P>
                      <P>
                        You’ll realize that{' '}
                        <Italic>
                          there’s no <EmojiWithText letter="a" /> with{' '}
                          <Emoji>🅰️</Emoji> on the bottom-right
                        </Italic>
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwzy>
              There’s no <EmojiWithText letter="a" /> with <Emoji>🅰️</Emoji>
              <br />
              on the bottom-right
            </R.Dwzy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        That means the number of <Emoji>🅰️</Emoji>’s on the
                        bottom right is <Italic>zero</Italic>.
                      </P>
                      <P>
                        <Bold>So:</Bold> After converting to a mathbox, it
                        becomes <EmojiNumber number={0} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwzy>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'a', number: 0 }}
              />
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
                        I see, so the number of <Emoji>🅰️</Emoji>’s on the
                        bottom right <Italic>can be zero</Italic>.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Right:</Bold> “Some <Emoji>🅰️</Emoji>’s” can mean
                        “<Italic>Zero</Italic> <Emoji>🅰️</Emoji>’s”.
                      </P>
                      <R.Hehx>
                        “Some <Emoji>🅰️</Emoji>’s” can mean “
                        <Italic>Zero</Italic> <Emoji>🅰️</Emoji>’s”.
                      </R.Hehx>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Next up: The Difficult Question</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Thanks for explaining, Minion!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>No problem, sir!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>So, as I said earlier:</Bold>{' '}
                        <Highlight>
                          I will give you a{' '}
                          <Italic>very difficult question</Italic> on the next
                          page.
                        </Highlight>
                      </P>
                      <P>
                        <Highlight>
                          I’ll give you the mathboxes back if you solve it!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>😈</Emoji>,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  If you can solve the difficult question
                  <br />
                  on the next page,
                  <br />
                  you’ll get your mathboxes back!
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        Finally, we have a chance to get our mathboxes back.
                        Let’s do it!
                      </P>
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

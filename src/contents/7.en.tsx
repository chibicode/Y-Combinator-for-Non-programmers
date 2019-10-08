import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import EmojiForLetter from 'src/components/EmojiForLetter'
import InlineRunAndConvertToMathboxButton from 'src/components/InlineRunAndConvertToMathboxButton'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import InlinePrioritiesLabel from 'src/components/InlinePrioritiesLabel'
import NextLessonButton from 'src/components/NextLessonButton'
import { Beginner5Rules } from 'src/contents/5.en'

const OnePlusOneTest = () => (
  <>
    <R.Ufjx>
      Combine with the “random” lunchbox
      <br />
      you came up with earlier, and then…
    </R.Ufjx>
    <ExpressionRunnerSeparator />
    <ExpressionRunnerCaptionOnly>
      <Highlight>
        <H args={{ name: 'runAndConvertToMathbox' }} />
      </Highlight>
    </ExpressionRunnerCaptionOnly>
    <ExpressionRunnerSeparator />
    <ExpressionRunnerCaptionOnly>
      If it becomes <EmojiNumber number={2} size="mdlg" />,{' '}
      <Highlight>success</Highlight>. <Emoji>🎉</Emoji>
      <br />
      Otherwise, <Highlight>failure</Highlight> <Emoji>😭</Emoji>
    </ExpressionRunnerCaptionOnly>
  </>
)

export default () => (
  <EpisodeCardList
    underConstruction
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
              description={<>Things will get harder!</>}
            />
            <P>
              <Bold>But:</Bold>{' '}
              <Highlight>
                You don’t need to understand everything immediately. Even if you
                don’t completely get it, please keep reading!
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={
                <>
                  You don’t need to
                  <br />
                  understand everything immediately!
                </>
              }
            />
            <P>
              <Bold>
                There’s a lot of overlapping materials for the next few pages.
              </Bold>{' '}
              So even if you have no idea what’s going on, after reading a few
              more pages, you might understand it. <Emoji>😉</Emoji>
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
                        I’ll give you the mathboxes back!
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
                  If you can solve this problem,
                  <br />
                  I’ll give you the mathboxes back!
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
                        This problem is <Italic>very difficult</Italic>, so you
                        better think hard!
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
                          args={{ name: 'lookAtThisBentoBox', lowerCase: true }}
                        />
                        .
                      </P>
                      <P>
                        <Bold>Important:</Bold>{' '}
                        <Italic>
                          Each <CustomEmoji type="questionFoodGrey" /> icon
                          represents some food item.
                        </Italic>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents some
              food item
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>It looks pretty complicated…</P>
                      <P>
                        <Bold>So:</Bold> Which food item goes into each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>That’s what you’ll need to figure out!</Bold>
                      </P>
                      <P>
                        <Highlight>
                          This question is about figuring out which food item
                          goes into each <CustomEmoji type="questionFoodGrey" />{' '}
                          icon.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              You need to figure out which food item
              <br />
              goes into each <CustomEmoji type="questionFoodGrey" /> icon!{' '}
              <Emoji>🐶</Emoji>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… ok, but how can we figure that out?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>I’m not done explaining yet!</Bold>
                      </P>
                      <P>
                        <Highlight>
                          I’ll give you more information now, and your goal is
                          to find out what goes into each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon based on
                          that information.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Okay, keep explaining then!</P>
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
            <H args={{ name: 'plusOneEffect', capitalize: true }} />
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
                        <Bold>Here’s the requirement:</Bold>{' '}
                        <Highlight>
                          You must fill each{' '}
                          <CustomEmoji type="questionFoodGrey" /> in a way such
                          that, the resulting lunchbox has{' '}
                          <Bold>
                            <H args={{ name: 'plusOneEffect' }} />
                          </Bold>
                          .
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              You must fill each <CustomEmoji type="questionFoodGrey" /> in a
              way
              <br />
              such that, the resulting lunchbox has
              <br />
              <H args={{ name: 'plusOneEffect' }} />.
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>The background image changed!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes, this new background just means that the lunchbox
                        has{' '}
                        <Bold>
                          <H args={{ name: 'plusOneEffect' }} />
                        </Bold>
                        .
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        But what does{' '}
                        <Bold>
                          <H args={{ name: 'plusOneEffect' }} />
                        </Bold>{' '}
                        mean?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let me explain!</P>
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
            How <H args={{ name: 'plusOneEffect' }} /> works
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
                        Here’s how <H args={{ name: 'plusOneEffect' }} /> works.
                      </P>
                      <P>
                        <Bold>First:</Bold> Let’s combine it with a lunchbox
                        that can be converted to{' '}
                        <CustomEmoji type="blankNumber" />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              Combine a lunchbox that can be converted to{' '}
              <CustomEmoji type="blankNumber" />
              <br />
              with a lunchbox with <H args={{ name: 'plusOneEffect' }} />
            </R.Qrgc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        If you run the above lunchbox and convert it using this
                        button:
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        It will become <CustomEmoji type="blankNumber" />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jxvy>
              If you{' '}
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />
              </Highlight>
              <br />
              it will become <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />
            </R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This is how <H args={{ name: 'plusOneEffect' }} />{' '}
                        works.
                      </P>
                      <P>
                        It can take a lunchbox that can be converted to{' '}
                        <CustomEmoji type="blankNumber" />, and turn it into{' '}
                        <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="blankNumber" />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  Take a lunchbox that can be converted to{' '}
                  <CustomEmoji type="blankNumber" />,<br />
                  and turn it into <CustomEmoji type="blankNumber" />{' '}
                  <Emoji>➕</Emoji> <EmojiNumber number={1} />.
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I’m still a bit confused.</P>
                      <P>Can you explain with concrete examples?</P>
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
            <EmojiNumber number={1} /> becomes <EmojiNumber number={2} />
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
                        <Bold>Here’s a concrete example:</Bold>{' '}
                        <H args={{ name: 'lookAtThisBentoBox' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fxde />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This lunchbox can be converted to{' '}
                        <EmojiNumber number={1} />.
                      </P>
                      <P>(We talked about this conversion on the last page!)</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rbup>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 1 }}
              />
            </R.Rbup>
            <ExpressionRunnerSeparator />
            <R.Rnug />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Now, let’s combine the above lunchbox with a lunchbox
                        that has <H args={{ name: 'plusOneEffect' }} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fljg>
              Combine with a lunchbox
              <br />
              that has <H args={{ name: 'plusOneEffect' }} />
            </R.Fljg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Now, let’s{' '}
                        <H
                          args={{
                            name: 'runAndConvertToMathbox',
                            lowerCase: true
                          }}
                        />
                        :
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ezmz />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        It became <EmojiNumber number={2} />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Yes! So,</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you combine a lunchbox that can be converted to{' '}
                            <EmojiNumber number={1} />…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            With a lunchbox that has{' '}
                            <H args={{ name: 'plusOneEffect' }} />, and do:
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        It will become <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jiua>
              Combine a lunchbox that can be converted to{' '}
              <EmojiNumber number={1} />
              <br />
              with a lunchbox that has <H args={{ name: 'plusOneEffect' }} />
            </R.Jiua>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              If you{' '}
              <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />,
              <br />
              it will become <EmojiNumber number={2} />
            </R.Pmdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Basically, <EmojiNumber number={1} /> became{' '}
                        <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />
              ]}
              description={
                <>
                  <EmojiNumber number={1} /> became <EmojiNumber number={2} />
                </>
              }
            />
          </>
        )
      },
      {
        title: (
          <>
            <EmojiNumber number={2} /> becomes <EmojiNumber number={3} />
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
                        Let’s try another example.{' '}
                        <H args={{ name: 'lookAtThisBentoBox' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ilvq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This can be converted to <EmojiNumber number={2} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Spga>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'f', number: 2 }}
              />
            </R.Spga>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s combine it with a lunchbox that has{' '}
                        <H args={{ name: 'plusOneEffect' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Akug>
              Combine with a lunchbox
              <br />
              that has <H args={{ name: 'plusOneEffect' }} />
            </R.Akug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Now, let’s{' '}
                        <H
                          args={{
                            name: 'runAndConvertToMathbox',
                            lowerCase: true
                          }}
                        />
                        :
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vfdw />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        It became <EmojiNumber number={3} />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Yes! Here’s the summary of what happened:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Aone>
              Combine a lunchbox that can be converted to{' '}
              <EmojiNumber number={2} />
              <br />
              with a lunchbox that has <H args={{ name: 'plusOneEffect' }} />
            </R.Aone>
            <ExpressionRunnerSeparator />
            <R.Qsoa>
              If you{' '}
              <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />,
              <br />
              it will become <EmojiNumber number={3} />
            </R.Qsoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This time, <EmojiNumber number={2} /> became{' '}
                        <EmojiNumber number={3} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={3} />
              ]}
              description={
                <>
                  <EmojiNumber number={2} /> became <EmojiNumber number={3} />
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: <>Summary</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Therefore,</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you combine a lunchbox that can be converted to{' '}
                            <CustomEmoji type="blankNumber" />…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            With a lunchbox that has{' '}
                            <H args={{ name: 'plusOneEffect' }} />, and do:
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        <Highlight>
                          It will become <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➕</Emoji> <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              Combine a lunchbox that can be converted to{' '}
              <CustomEmoji type="blankNumber" />
              <br />
              with a lunchbox that has <H args={{ name: 'plusOneEffect' }} />
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy>
              If you{' '}
              <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />,
              <br />
              it will become <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />
            </R.Jxvy>
          </>
        )
      },
      {
        title: (
          <>
            It’s like <CustomEmoji type="plusOne" /> from mathbox
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
                        Now, remember that, a <CustomEmoji type="mathBox" />{' '}
                        <Bold>mathbox</Bold> has{' '}
                        <H args={{ name: 'plusOneFeature' }} />, which lets you
                        add <EmojiNumber number={1} /> to a number.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              When using a <CustomEmoji type="mathBox" /> mathbox, you can use
              <br />
              <CustomEmoji type="plusOne" /> to add <EmojiNumber number={1} />{' '}
              to a number
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        So, we can say that a lunchbox with{' '}
                        <H args={{ name: 'plusOneEffect' }} /> is…
                      </P>
                      <P>
                        Very similar to <H args={{ name: 'plusOneFeature' }} />{' '}
                        from a mathbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <Emoji>🍱</Emoji> A lunchbox with{' '}
              <H args={{ name: 'plusOneEffect' }} /> is…
            </R.Jguj>
            <ExpressionRunnerSeparator />
            <R.Biit>
              <CustomEmoji type="mathBox" /> Very similar to
              <br /> <H args={{ name: 'plusOneFeature' }} /> from a mathbox
            </R.Biit>
          </>
        )
      },
      {
        type: 'yesNoQuiz',
        title: <>The Challenge</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Now, here’s the challenge:</Bold>{' '}
                        <Highlight>
                          Fill each <CustomEmoji type="questionFoodGrey" /> icon
                          in a way such that, the resulting lunchbox has{' '}
                          <H args={{ name: 'plusOneEffect' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              Fill each <CustomEmoji type="questionFoodGrey" /> icon in a way
              such that,
              <br />
              the resulting lunchbox has
              <br />
              <H args={{ name: 'plusOneEffect' }} />.
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        So,{' '}
                        <Highlight>
                          you’re asking what goes in each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon?
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes!</Bold> If you fill each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon correctly,
                        it should be able to turn{' '}
                        <CustomEmoji type="blankNumber" /> into{' '}
                        <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              If you do it correctly,
              <br />
              it should be able to turn <CustomEmoji type="blankNumber" /> into{' '}
              <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />.
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy></R.Jxvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        This is the very difficult question I’ve been talking
                        about.
                      </P>
                      <P>
                        <Highlight>
                          If you solve this, I’ll give you the mathboxes back!
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
                  If you solve this,
                  <br />
                  I’ll give you the mathboxes back!
                </>
              }
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
                      <P>And I have no clue how to solve it!</P>
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
            <R.Envj>
              Try filling each <CustomEmoji type="questionFoodGrey" /> icon
              <br />
              with a <Italic>random</Italic> food item! <Emoji>🐶</Emoji>
            </R.Envj>
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
            <R.Lwoq>
              Randomly filled each with <EmojiForLetter letter="a" />{' '}
              <EmojiForLetter letter="b" /> <EmojiForLetter letter="c" />
            </R.Lwoq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>So you’re saying:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          If this lunchbox has{' '}
                          <H args={{ name: 'plusOneEffect' }} />, it’s a{' '}
                          <Highlight>success</Highlight>. <Emoji>🎉</Emoji>
                        </UlLi>
                        <UlLi>
                          If not, then it’s a <Highlight>failure</Highlight>{' '}
                          <Emoji>😭</Emoji>
                        </UlLi>
                      </Ul>
                      <P>Is that right?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes! And to check if it has{' '}
                        <H args={{ name: 'plusOneEffect' }} />…
                      </P>
                      <P>
                        <Highlight>
                          We need to first confirm that it can do{' '}
                          <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  We need to first confirm that it can do
                  <br />
                  <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} />
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
                        <Bold>Which means:</Bold>{' '}
                        <Highlight>
                          If you combine it with a lunchbox that can be
                          converted with <EmojiNumber number={1} />…
                        </Highlight>
                      </P>
                      <P>
                        <Highlight>
                          The result needs to be <EmojiNumber number={2} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xxan>
              Combine it with a lunchbox
              <br />
              that can be converted to <EmojiNumber number={1} />
            </R.Xxan>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              If it becomes <EmojiNumber number={2} size="mdlg" />,{' '}
              <Highlight>success</Highlight>. <Emoji>🎉</Emoji>
              <br />
              Otherwise, <Highlight>failure</Highlight> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
          </>
        )
      },
      {
        title: (
          <>
            Check to see if it has <H args={{ name: 'plusOneEffect' }} />
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
                        To check if it can calculate <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />, let’s use
                        a lunchbox that can be converted to{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fxde>
              <H
                args={{ name: 'canBeConvertedCaption', letter: 'd', number: 1 }}
              />
            </R.Fxde>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s combine this with the “random” lunchbox you came
                        up with earlier…
                      </P>
                      <P>
                        And check to see if it can calculate{' '}
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <OnePlusOneTest />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s first see what happens when you{' '}
                        <H args={{ name: 'play', lowerCase: true }} /> the above
                        lunchbox!
                      </P>
                      <P>…but before we do that, let’s do a quick review.</P>
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
        title: <>Review of Beginner 5</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          To solve the above lunchbox, we’ll need to use the
                          rules from <Bold>Beginner 5</Bold>.
                        </Highlight>
                      </P>
                      <P>
                        You don’t need to memorize them, but let’s just do a
                        quick review.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <Beginner5Rules />
          </>
        )
      },
      {
        title: (
          <>
            Let’s <H args={{ name: 'fastForward', lowerCase: true }} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Ok, let’s get back on track!</P>
                      <P>
                        We want to check if it can calculate{' '}
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />, right?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <OnePlusOneTest />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} />{' '}
                        it!
                      </P>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          Because there are multiple pairs of{' '}
                          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>’s, we
                          start from the leftmost pair.
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
                  name: 'pressFastForward'
                }}
              />
            </P>
            <R.Dhiu>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Dhiu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Second:</Bold> We can’t start with the leftmost
                        pair of <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
                        ’s because there’s only one item on the bottom (a{' '}
                        <EmojiWithText letter="b" />)
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
                  name: 'pressFastForward'
                }}
              />
            </P>
            <R.Akjy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Akjy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Third:</Bold> We’ll need to start with the pair of{' '}
                        <InlinePrioritiesLabel>2</InlinePrioritiesLabel>’s
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
                  name: 'pressFastForward'
                }}
              />
            </P>
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
        title: <>計算箱に変換できない</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        実行を終えたので、
                        <H args={{ name: 'convertToMathbox' }} />{' '}
                        したいところですが…
                      </P>
                      <P>
                        残念ながら、
                        <HighlightBold>
                          この弁当箱はぼくが計算箱に変換することができません。
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xwzc>
              <Emoji>❌</Emoji> 計算箱に変換できない <Emoji>❌</Emoji>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        理由は、
                        <Highlight>
                          以下の法則に沿っていないからです。
                        </Highlight>
                      </P>
                      <R.Eozk>
                        <H args={{ name: 'convertiblePatternCaption' }} />
                      </R.Eozk>
                      <P>
                        <Highlight>
                          右上には <Emoji>🅱️</Emoji>{' '}
                          の料理がひとつないといけませんが、ここでは{' '}
                          <Emoji>🅰️</Emoji> になっている
                        </Highlight>
                        ので、計算箱に変換できないのです。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fhrd>
              右上が <Emoji>🅱️</Emoji> の<EmojiWithText letter="c" /> ではなく、
              <br />
              <Emoji>🅰️</Emoji> の<EmojiWithText letter="b" /> なので
              <br />
              計算箱に変換できない
            </R.Fhrd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        ダメか…
                        <Highlight>
                          もし仮に右上が
                          <EmojiWithText letter="b" />
                          ではなくて
                          <EmojiWithText letter="c" />
                          だったら、
                          <EmojiNumber number={2} /> に変換できていたのになあ。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bgxi>
              も仮にし右上が
              <EmojiWithText letter="c" />
              <br />
              だったら、
              <EmojiNumber number={2} /> に変換できていた
            </R.Bgxi>
            <ExpressionRunnerSeparator />
            <R.Pmdm />
          </>
        )
      },
      {
        title: (
          <>
            <H args={{ name: 'plusOneEffect' }} />
            は無い
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
                        つまり、実行しても{' '}
                        <EmojiNumber number={2} size="mdlg" />{' '}
                        に変換できる弁当箱になりませんでした。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nuco>
              <EmojiNumber number={1} /> に変換できる弁当箱と合体させ…
            </R.Nuco>
            <ExpressionRunnerSeparator />
            <R.Xwzc>
              実行したところ、
              <br />
              <HighlightBold>
                <EmojiNumber number={2} size="mdlg" />{' '}
                に変換できる弁当箱にならなかった
              </HighlightBold>
            </R.Xwzc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        だから、
                        <Highlight>
                          先ほどの弁当箱に、
                          <H args={{ name: 'plusOneEffect' }} />
                          は無い
                        </Highlight>
                        のです。つまり、
                        <HighlightBold>不正解でした！</HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olyw>
              <H args={{ name: 'plusOneEffect' }} />
              は無い
            </R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        残念…やっぱり、適当に{' '}
                        <CustomEmoji type="questionFoodGrey" />{' '}
                        に料理を埋めても正解にはならないかあ…
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
        title: <>問題をもう一度</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        問題の意味が分かったでしょうか？では、もう一度聞きますね。
                      </P>
                      <P>
                        <HighlightBold>
                          この弁当箱に、どのような法則に基づいて{' '}
                          <CustomEmoji type="questionFoodGrey" />{' '}
                          に料理を入れると…
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>
              <HighlightBold>
                どのような法則に基づいて <CustomEmoji type="questionFoodGrey" />{' '}
                に料理を入れると…
              </HighlightBold>
            </R.Envj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          <H args={{ name: 'plusOneEffect' }} />
                          がある弁当箱になるでしょう？
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jguj>
              <HighlightBold>
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱になる？
              </HighlightBold>
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        繰り返しますが、先ほど適当に料理を入れた以下の弁当箱は、不正解でした！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olyw>こちらは不正解だった</R.Olyw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        うーん…問題の意味は分かったけど、答え方が分からない！
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
        title: <>答えは次のページに</>,
        content: (
          <>
            <P>
              せっかく計算箱を返してもらえるチャンスなのに、問題が難しくて村人は苦戦しているようですね。
            </P>
            <EmojiSeparator
              emojis={['❓', '😭', '❓']}
              description={<>難しすぎて見当もつかない！</>}
            />
            <P>
              しかし、
              <HighlightBold>次のページで答えが判明します。</HighlightBold>
              ぜひ先に進んでみてください！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

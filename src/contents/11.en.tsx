import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Hr,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
import TwoColGrid from 'src/components/TwoColGrid'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import YesNoButtons from 'src/components/YesNoButtons'
import { TwoPlusFour, Conclusion } from 'src/contents/2.en'

export const TrueCaseExplanation = () => (
  <>
    <R.Dqwh>
      If <InlineBorder type="condition" /> is <EmojiNumber number={0} />…
    </R.Dqwh>
    <ExpressionRunnerSeparator />
    <R.Vwvb>
      <CustomEmoji type="blankNumberYellow" /> in{' '}
      <InlineBorder type="trueCase" /> becomes the final result
    </R.Vwvb>
  </>
)

export const FalseCaseExplanation = () => (
  <>
    <R.Glbk>
      If <InlineBorder type="condition" /> is NOT <EmojiNumber number={0} />…
    </R.Glbk>
    <ExpressionRunnerSeparator />
    <R.Rtza>
      <CustomEmoji type="blankNumberRed" /> in <InlineBorder type="falseCase" />{' '}
      becomes the final result
    </R.Rtza>
  </>
)

const ReproduceWithNoNegativeMargin = () => (
  <>
    <TwoColGrid
      noTopNegativeMargin
      noBottomNegativeMargin
      left={
        <>
          <R.Bwnp>
            Repeat <CustomEmoji type="plusOne" />
            <br />
            <CustomEmoji type="blankNumber" /> times
          </R.Bwnp>
          <ExpressionRunnerSeparator />
          <EmojiSeparator
            emojis={['❓', '🍱', '❓']}
            size="mdsm"
            description={
              <>
                Reproduce with
                <br />a lunchbox
              </>
            }
          />
        </>
      }
      right={
        <>
          <R.Ewfr>
            Repeat <CustomEmoji type="minusOne" />
            <br />
            <CustomEmoji type="blankNumber" /> times
          </R.Ewfr>
          <ExpressionRunnerSeparator />
          <EmojiSeparator
            emojis={['❓', '🍱', '❓']}
            size="mdsm"
            description={
              <>
                Reproduce with
                <br />a lunchbox
              </>
            }
          />
        </>
      }
    />
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>Welcome to the advanced levels!</>,
        content: (
          <>
            <P>
              <Bold>Welcome to the advanced levels:</Bold> Previously, the
              villagers in Lambda Village got{' '}
              <H args={{ name: 'plusOneFeature' }} /> and{' '}
              <H args={{ name: 'minusOneFeature' }} /> back.
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🤗</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
              description={<>Got these two features back</>}
            />
            <P>
              They were able to <HighlightBold>reproduce</HighlightBold> each
              feature using a lunchbox.
            </P>
            <R.Rviy>
              <H args={{ name: 'plusOneFeature', capitalize: true }} /> of a
              mathbox
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>
              <HighlightBold>Reproduce</HighlightBold> using a lunchbox
            </R.Eweo>
            <Hr />
            <R.Ditw>
              <H args={{ name: 'minusOneFeature', capitalize: true }} /> of a
              mathbox
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>
              <HighlightBold>Reproduce</HighlightBold> using a lunchbox
            </R.Bgko>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            Review: <H args={{ name: 'repeatFeature', capitalize: true }} />
          </>
        ),
        content: (
          <>
            <P>
              However, they still haven’t gotten{' '}
              <H args={{ name: 'repeatFeature' }} /> back. They need to{' '}
              <HighlightBold>reproduce</HighlightBold> this using a lunchbox to
              get it back.
            </P>
            <ReproduceWithNoNegativeMargin />
            <P>
              In case you forgot about <H args={{ name: 'repeatFeature' }} />,
              let’s do a quick review.
            </P>
            <EmojiSeparator
              emojis={['✨', '🔁', '✨']}
              description={
                <>
                  Let’s review <H args={{ name: 'repeatFeature' }} />.
                </>
              }
            />
            <P>
              Take a look at this mathbox and <H args={{ name: 'deprecatedPressRun' }} />
              :
            </P>
            <TwoPlusFour />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>It’s necessary for additions and subtractions of large numbers</>
        ),
        content: (
          <>
            <P>
              <Bold>(This is still a review)</Bold> For the villagers in Lambda
              Village, <H args={{ name: 'repeatFeature' }} /> was necessary to
              do additions and subtractions of large numbers.
            </P>
            <EmojiSeparator
              nodes={[<Emoji>✨</Emoji>, <Emoji>🔁</Emoji>, <Emoji>✨</Emoji>]}
              description={
                <>
                  <H args={{ name: 'repeatFeature', capitalize: true }} /> was
                  necessary
                  <br />
                  to do additions and subtractions of
                  <br />
                  large numbers
                </>
              }
            />
            <P>
              <Bold>Example (from Beginner 2):</Bold>{' '}
              <Highlight>
                If you don’t use <H args={{ name: 'repeatFeature' }} />,
              </Highlight>{' '}
              and wanted to calculate <EmojiNumber number={10} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={10} />, you need to use{' '}
              <CustomEmoji type="plusOne" /> <Italic>ten</Italic> times.
            </P>
            <R.Amoq>
              Use <CustomEmoji type="plusOne" /> ten times
            </R.Amoq>
            <P>
              <Bold>However:</Bold> As the number gets large,{' '}
              <Highlight>
                we might make a mistake on the number of{' '}
                <CustomEmoji type="plusOne" />
                ’s to use
              </Highlight>
              . In such cases, we won’t get the correct results.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>❌</Emoji>,
                <CustomEmoji type="plusOne" />,
                <Emoji>❌</Emoji>
              ]}
              description={
                <>
                  We might put the wrong number of
                  <br />
                  <CustomEmoji type="plusOne" />
                  ’s as the number gets large
                </>
              }
            />
            <P>
              <Bold>On the other hand:</Bold>{' '}
              <Highlight>
                If you use <H args={{ name: 'repeatFeature' }} />,
              </Highlight>{' '}
              you can calculate <EmojiNumber number={10} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={10} /> as follows. You won’t make a mistake
              on the number of <CustomEmoji type="plusOne" />
              ’s to use.
            </P>
            <R.Jehv>
              Repeat <CustomEmoji type="plusOne" /> ten times
            </R.Jehv>
            <Conclusion />
          </>
        )
      },
      {
        title: <>How do you reproduce it?</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  How do you <HighlightBold>reproduce</HighlightBold> <br />
                  <H args={{ name: 'repeatFeature' }} /> with a lunchbox?
                </>
              }
            />
            <P>
              The villagers have been trying hard to reproduce{' '}
              <H args={{ name: 'repeatFeature' }} /> using a lunchbox.
            </P>
            <ReproduceWithNoNegativeMargin />
            <P>However, looks like it’s not going well for them.</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Hmm… no matter how much I try, we can’t think of a way
                        to reproduce <H args={{ name: 'repeatFeature' }} />{' '}
                        using a lunchbox.
                      </P>
                      <P>Saya, do you have any good ideas?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>I have no idea either…</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Oh no. If Saya can’t figure it out, we’re doomed!</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              But luckily for them, <Emoji>🐶</Emoji> Minion seems to be willing
              to offer some help.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Hey guys, it looks like you’re struggling. Do you want
                        some hint?
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Oh, thank you, Minion. Please, give us a hint!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Sure. First, let’s talk about{' '}
                        <Highlight>
                          <H args={{ name: 'conditionFeature' }} />.
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
                        <H
                          args={{ name: 'conditionFeature', capitalize: true }}
                        />
                        ? What’s that?
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
            <H args={{ name: 'conditionFeature', capitalize: true }} />
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
                      <P>Take a look at this mathbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              A mathbox with <H args={{ name: 'conditionFeature' }} />
            </R.Rhoa>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>What’s this?</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            It contains <CustomEmoji type="blankNumberRed" />,{' '}
                            <CustomEmoji type="blankNumberYellow" />, and{' '}
                            <CustomEmoji type="blankNumberGreen" />.
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            On the left, there are three signs:{' '}
                            <InlineBorder type="falseCase" />{' '}
                            <InlineBorder type="trueCase" />{' '}
                            <InlineBorder type="condition" />
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>
                        It looks like a traffic signal{' '}
                        <Emoji size="mdlg">🚦</Emoji>…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          You can fill each of{' '}
                          <CustomEmoji type="blankNumberRed" />,{' '}
                          <CustomEmoji type="blankNumberYellow" />, and{' '}
                          <CustomEmoji type="blankNumberGreen" /> with any
                          number.
                        </Highlight>
                      </P>
                      <P>The numbers could be all the same or all different.</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumberRed" />,
                <CustomEmoji type="blankNumberYellow" />,
                <CustomEmoji type="blankNumberGreen" />
              ]}
              description={
                <>
                  You can fill each of
                  <br />
                  <CustomEmoji type="blankNumberRed" />,{' '}
                  <CustomEmoji type="blankNumberYellow" />, and{' '}
                  <CustomEmoji type="blankNumberGreen" /> with any number
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Here’s an example. I used:</P>
                      <Ul>
                        <UlLi>
                          <EmojiNumber number={2} /> for{' '}
                          <CustomEmoji type="blankNumberRed" />
                        </UlLi>
                        <UlLi>
                          <EmojiNumber number={1} /> for{' '}
                          <CustomEmoji type="blankNumberYellow" />
                        </UlLi>
                        <UlLi>
                          <EmojiNumber number={0} /> for{' '}
                          <CustomEmoji type="blankNumberGreen" />
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa></R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Zdpf>
              Used <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> for{' '}
              <CustomEmoji type="blankNumberRed" />{' '}
              <CustomEmoji type="blankNumberYellow" />{' '}
              <CustomEmoji type="blankNumberGreen" />
            </R.Zdpf>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Next:</Bold> Before I explain what{' '}
                        <InlineBorder type="falseCase" />{' '}
                        <InlineBorder type="trueCase" />{' '}
                        <InlineBorder type="condition" /> means, let’s run this
                        mathbox and see what happens.
                      </P>
                      <P>
                        <H args={{ name: 'deprecatedPressRun', capitalize: true }} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Iatt></R.Iatt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        It became <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let me explain why.</P>
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
            Check if the bottom section is <EmojiNumber number={0} />
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
                        Here’s how <H args={{ name: 'conditionFeature' }} />{' '}
                        works.
                      </P>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          It checks if the number in{' '}
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'condition'
                            }}
                          />{' '}
                          is <EmojiNumber number={0} /> or not.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vozu />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        In this case, the number in{' '}
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />{' '}
                        is <EmojiNumber number={0} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Yes. And this is what happens next:</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If the number in{' '}
                            <H
                              args={{
                                name: 'conditionSectionName',
                                type: 'condition'
                              }}
                            />{' '}
                            is <EmojiNumber number={0} />,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Then the number in{' '}
                            <H
                              args={{
                                name: 'conditionSectionName',
                                type: 'trueCase'
                              }}
                            />{' '}
                            becomes the final result.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rjfy />
            <ExpressionRunnerSeparator />
            <R.Rnug>
              The result is <EmojiNumber number={1} />, which was in{' '}
              <InlineBorder type="trueCase" />
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        I see—that’s why it becomes <EmojiNumber number={1} />.
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
                      <P>
                        I’ll show you another example. This one’s going to be a{' '}
                        <Bold>
                          <H args={{ name: 'yesNoQuiz', lowerCase: true }} />
                        </Bold>
                        .{' '}
                      </P>
                      <P>Take a look at this mathbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Plbv />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Question:</Bold> If we{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> it, will
                        it become like this?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kizi />
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
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <H
                          args={{
                            name: 'theAnswerIs',
                            isYes: false
                          }}
                        />
                        . The final result is <EmojiNumber number={5} />, not{' '}
                        <EmojiNumber number={4} />.
                      </P>
                      <P>
                        <H args={{ name: 'deprecatedPressRun', capitalize: true }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kmyl />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let me explain why.</P>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          It checks if{' '}
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'condition'
                            }}
                          />{' '}
                          is <EmojiNumber number={0} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qcmh />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>This time:</Bold>{' '}
                        <Highlight>
                          What’s in{' '}
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'condition'
                            }}
                          />{' '}
                          is NOT <EmojiNumber number={0} />.
                        </Highlight>{' '}
                        Instead, it’s <EmojiNumber number={3} />.
                      </P>
                      <P>
                        <Bold>In this case:</Bold>{' '}
                        <Highlight>
                          The number in{' '}
                          <H
                            args={{
                              name: 'conditionSectionName',
                              type: 'falseCase'
                            }}
                          />{' '}
                          becomes the final result.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Guhy />
            <ExpressionRunnerSeparator />
            <R.Seie>
              The result is <EmojiNumber number={5} />, which was in{' '}
              <InlineBorder type="falseCase" />
            </R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see… so{' '}
                        <Highlight>
                          the <InlineBorder type="falseCase" /> icon means “
                          <Bold>not zero</Bold>.”
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
        type: 'summary',
        title: (
          <>
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              <Bold>Summary:</Bold> Here’s how{' '}
              <H args={{ name: 'conditionFeature' }} /> works:
            </P>
            <R.Rhoa>
              A mathbox with <H args={{ name: 'conditionFeature' }} />
            </R.Rhoa>
            <P>
              <Highlight>
                <Bold>First:</Bold> It checks if{' '}
                <CustomEmoji type="blankNumberGreen" /> in{' '}
                <H args={{ name: 'conditionSectionName', type: 'condition' }} />{' '}
                is <EmojiNumber number={0} />.
              </Highlight>
            </P>
            <P>
              <Highlight>
                <Bold>
                  If it’s <EmojiNumber number={0} />:
                </Bold>{' '}
                <CustomEmoji type="blankNumberYellow" /> in{' '}
                <H args={{ name: 'conditionSectionName', type: 'trueCase' }} />{' '}
                becomes the final result.
              </Highlight>
            </P>
            <TrueCaseExplanation />
            <P>
              <Highlight>
                <Bold>
                  If it’s NOT <EmojiNumber number={0} />:
                </Bold>{' '}
                <CustomEmoji type="blankNumberRed" /> in{' '}
                <H args={{ name: 'conditionSectionName', type: 'falseCase' }} />{' '}
                becomes the final result.
              </Highlight>
            </P>
            <FalseCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        By the way, it’s called{' '}
                        <Highlight>
                          <H
                            args={{ name: 'conditionFeature', hideIcon: true }}
                          />
                        </Highlight>{' '}
                        because the final result is{' '}
                        <HighlightBold>conditioned</HighlightBold> on what’s in{' '}
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={0} />,
                <CustomEmoji type="singleArrowReverse" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>🔢</Emoji>
              ]}
              description={
                <>
                  It’s called{' '}
                  <H args={{ name: 'conditionFeature', hideIcon: true }} />
                  <br />
                  because the final result is{' '}
                  <HighlightBold>conditioned</HighlightBold> on
                  <br />
                  what’s in <InlineBorder type="condition" />
                </>
              }
            />
          </>
        )
      },
      {
        title: <>It’s a secret feature of a mathbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        You probably didn’t know this, but{' '}
                        <Highlight>
                          <H args={{ name: 'conditionFeature' }} /> is actually
                          the <Bold>secret feature</Bold> of a mathbox.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>✨</Emoji>,
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <Emoji>✨</Emoji>
              ]}
              description={
                <>
                  It’s the <HighlightBold>secret feature</HighlightBold> of a
                  mathbox <CustomEmoji type="mathBox" />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Really? I didn’t know this feature existed.</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        In fact,{' '}
                        <Highlight>
                          <H args={{ name: 'conditionFeature' }} /> has been
                          forgotten by the people in Lambda Village,
                        </Highlight>{' '}
                        because it’s not a very useful feature.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I guess it doesn’t seem very useful…</P>
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
            It’s related to <H args={{ name: 'repeatFeature' }} />
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
                        But <H args={{ name: 'conditionFeature' }} /> is
                        actually important.
                      </P>
                      <P>
                        <Bold>Why?</Bold>{' '}
                        <Highlight>
                          Because it actually is <Italic>related to</Italic>{' '}
                          <H args={{ name: 'repeatFeature' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  <H args={{ name: 'conditionFeature', capitalize: true }} />
                  <br />
                  is <Italic>related to</Italic>
                  <br />
                  <H args={{ name: 'repeatFeature' }} />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Really? These two are related?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Yes. And because they’re related,</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you’re able to reproduce{' '}
                            <H args={{ name: 'conditionFeature' }} /> using a
                            lunchbox,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            You’ll be able to reproduce{' '}
                            <H args={{ name: 'repeatFeature' }} /> too.
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
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  If you can reproduce
                  <br />
                  <H args={{ name: 'conditionFeature' }} />
                  <br />
                  using a lunchbox, then…
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  You’ll be able to reproduce
                  <br />
                  <H args={{ name: 'repeatFeature' }} /> too
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wow, really?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes.{' '}
                        <Highlight>
                          So you should first try to reproduce{' '}
                          <H args={{ name: 'conditionFeature' }} />.
                        </Highlight>
                      </P>
                      <P>
                        Once you do that, you’ll be able to reproduce{' '}
                        <H args={{ name: 'repeatFeature' }} /> too.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              If you can reproduce
              <br />
              <H args={{ name: 'conditionFeature' }} />
              <br />
              using a lunchbox…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              You’ll be able to reproduce
              <br />
              <H args={{ name: 'repeatFeature' }} /> too
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… ok.</P>
                      <P>
                        I don’t know why these two features are related… but
                        let’s try anyway.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              On the next page, we’ll try to reproduce{' '}
              <H args={{ name: 'conditionFeature' }} /> using a lunchbox.
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

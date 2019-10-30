import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Hr,
  Italic
} from 'src/components/ContentTags'
import CustomEmoji from 'src/components/CustomEmoji'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import Emoji from 'src/components/Emoji'
import H from 'src/components/H'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiSeparator from 'src/components/EmojiSeparator'
import * as R from 'src/components/Runners'
import EmojiWithText from 'src/components/EmojiWithText'
import NextLessonButton from 'src/components/NextLessonButton'
import { Problem, StepOne, StepTwo, StepThree } from 'src/contents/7.en'
import CardContent from 'src/components/CardContent'

export const BlankNumberPlusOne = () => (
  <>
    <R.Eweo>
      Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox
      <br />
      with a lunchbox that can be converted to{' '}
      <CustomEmoji type="blankNumber" />
    </R.Eweo>
    <ExpressionRunnerSeparator />
    <R.Jxvy>
      If you <H args={{ name: 'run', lowerCase: true }} /> it,
      <br />
      it becomes a lunchobox
      <br />
      that can be converted to <CustomEmoji type="blankNumber" />{' '}
      <Emoji>➕</Emoji> <EmojiNumber number={1} />
    </R.Jxvy>
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>The challenge</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[<Emoji>😭</Emoji>, <Emoji>❓</Emoji>, <Emoji>😭</Emoji>]}
            />
            <P>
              The villagers in Lambda Village were struggling with this
              difficult problem:
            </P>
            <Problem />
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Hmm… I have no idea!</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        But we need to solve this to get our mathboxes{' '}
                        <CustomEmoji type="mathBox" /> back!
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
        title: <>Saya to the rescue</>,
        content: (
          <>
            <P>
              That’s when <Bold>Saya</Bold> <Emoji size="mdlg">👧🏻</Emoji>, a
              little girl who lives in Lambda Village, appeared.
            </P>
            <EmojiSeparator
              emojis={['✨', '👧🏻', '✨']}
              description={
                <>
                  <Bold>Saya</Bold>,<br />a little girl who lives in Lambda
                  Village
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey guys! What are you doing there?</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Hi Saya. Well, we have some bad news. The devil{' '}
                        <Emoji>😈</Emoji> has taken our mathboxes{' '}
                        <CustomEmoji type="mathBox" />.
                      </P>
                      <P>
                        To get them back, we need to solve this difficult
                        question. But it’s too hard for us!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>I see. I’ll help you then!</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>We appreciate it, but this isn’t for kids.</P>
                      <P>
                        We tried hard but couldn’t solve it. I don’t think you
                        can do it!
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
        title: <>Saya’s Lunchbox</>,
        content: (
          <>
            <P>
              Saya spent some time thinking, and came up with the following
              lunchbox:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Hey, I filled each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon as follows.
                        Can you take a look?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Stda>
              <Emoji>👧🏻</Emoji> I filled each{' '}
              <CustomEmoji type="questionFoodGrey" /> icon…
            </R.Stda>
            <ExpressionRunnerSeparator />
            <R.Cpim>
              <Emoji>👧🏻</Emoji> As follows!
            </R.Cpim>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        Hmm… I don’t think it’s going to work, but we’ll try
                        anyway.
                      </P>
                      <P>
                        <Highlight>
                          We’ll <H args={{ name: 'run', lowerCase: true }} />{' '}
                          this, and see if the result is a lunchbox that can be
                          converted to <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plde>
              We’ll <H args={{ name: 'run', lowerCase: true }} /> this lunchbox,
              and…
            </R.Plde>
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
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        Let’s first{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> it!
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
            What happens if you <H args={{ name: 'run', lowerCase: true }} />{' '}
            it?
          </>
        ),
        content: (
          <>
            <StepOne />
            <R.Jsvg>
              <H args={{ name: 'startWithLeftMostOneCaption' }} />
            </R.Jsvg>
            <StepTwo />
            <R.Uexo>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Uexo>
            <StepThree />
            <R.Hdhy>
              <H args={{ name: 'startWithTwoCaption' }} />
            </R.Hdhy>
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
            <R.Rhcv>Final Result</R.Rhcv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wait…! This is…!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The resulting lunchbox can be converted to{' '}
                        <EmojiNumber number={1} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Joaq>
              <H
                args={{ name: 'canBeConvertedCaption', number: 1, letter: 'b' }}
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
                        So, it’s a <Highlight>success</Highlight>!{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Yay!</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>No way! We tried so hard but couldn’t solve it…</P>
                      <P>Can’t believe Saya solved it so easily!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Let’s dive in a little deeper</>,
        content: (
          <>
            <P>
              <Bold>Surprise:</Bold> Saya just solved the devil’s difficult
              problem!
            </P>
            <EmojiSeparator
              emojis={['😮', '👧🏻', '😮']}
              description={<>Saya solved the devil’s problem!</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Wow, Saya, you’re awesome! Thank you for solving it!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hehe, thanks!</P>
                    </>
                  )
                },
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        Anyway, thanks to Saya, we’ll get our mathboxes back!
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes, but:</Bold> Before we move on,{' '}
                        <Highlight>let’s dive in a little deeper.</Highlight>
                      </P>
                      <P>
                        We’ll spend a bit of time to talk about some important
                        stuff.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… ok, let me hear what you have to say.</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>First:</Bold> Here’s what we’ve learned so far.{' '}
                        <Highlight>
                          Here’s a lunchbox that can be converted to{' '}
                          <EmojiNumber number={0} />:
                        </Highlight>
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
                        <Highlight>
                          If we combine it with <Emoji>👧🏻</Emoji> Saya’s
                          lunchbox, it will become a lunchbox that can be
                          converted to <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cpim>
              If we combined it with
              <br />
              <Emoji>👧🏻</Emoji> Saya’s lunchbox…
            </R.Cpim>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              It will become a lunchbox
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
                        So, by using <Emoji>👧🏻</Emoji> Saya’s lunchbox,
                      </P>
                      <Ul>
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
          </>
        )
      },
      {
        title: (
          <>
            What if we combined it with <EmojiNumber number={1} />?
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
                        <Bold>Now, here’s a question:</Bold>{' '}
                        <Highlight>
                          Suppose that we combine <Emoji>👧🏻</Emoji> Saya’s
                          lunchbox with a lunchbox that can be converted to{' '}
                          <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                      <P>
                        <Highlight>
                          What happens when you{' '}
                          <H args={{ name: 'run', lowerCase: true }} /> it?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rqer>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />
            </R.Rqer>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              What happens when you{' '}
              <H args={{ name: 'run', lowerCase: true }} /> it?
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I have no idea…</P>
                      <P>
                        Last time, <EmojiNumber number={0} /> became{' '}
                        <EmojiNumber number={1} />. Don’t know what will happen
                        this time…
                      </P>
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
                  Last time, <EmojiNumber number={0} /> became{' '}
                  <EmojiNumber number={1} />
                </>
              }
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  What about this time?
                  <br />
                  What will <EmojiNumber number={1} /> become?
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let’s check it!</P>
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
            What will <EmojiNumber number={1} /> become?
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
                        This time, we’ll use this lunchbox that can be converted
                        to <EmojiNumber number={1} />.
                      </P>
                      <R.Ooya>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 1
                          }}
                        />
                      </R.Ooya>
                      <P>
                        Let’s combine it with <Emoji>👧🏻</Emoji> Saya’s lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Awwn>
              Combine with <Emoji>👧🏻</Emoji> Saya’s lunchbox
            </R.Awwn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s <H args={{ name: 'run' }} /> it! This time, we’ll
                        continue running until the end.{' '}
                      </P>
                      <P>
                        If you can’t wait,{' '}
                        <H args={{ name: 'runSkippableToTheEnd' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nlbn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The resulting lunchbox can be converted to{' '}
                        <EmojiNumber number={2} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rico>
              <H
                args={{ name: 'canBeConvertedCaption', number: 2, letter: 'b' }}
              />
            </R.Rico>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>That means…</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            A lunchbox that can be converted to{' '}
                            <EmojiNumber number={1} />…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Became a lunchbox that can be converted to{' '}
                            <EmojiNumber number={2} />?
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rqer>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />
            </R.Rqer>
            <ExpressionRunnerSeparator />
            <R.Cawl>
              If we <H args={{ name: 'run' }} /> it,
              <br />
              it becomes a lunchbox
              <br />
              that can be converted to <EmojiNumber number={2} />
            </R.Cawl>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>That means:</Bold> By using <Emoji>👧🏻</Emoji>{' '}
                        Saya’s lunchbox, <EmojiNumber number={1} /> became{' '}
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
            It can add <EmojiNumber number={1} />
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
                        <Bold>
                          So, by using <Emoji>👧🏻</Emoji> Saya’s lunchbox:
                        </Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={0} /> becomes{' '}
                            <EmojiNumber number={1} />, and…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={1} /> becomes{' '}
                            <EmojiNumber number={2} />.
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
              noBottomMargin
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />
              ]}
              noTopMargin
              description={
                <>
                  <EmojiNumber number={0} /> becomes <EmojiNumber number={1} />,
                  and
                  <br />
                  <EmojiNumber number={1} /> becomes <EmojiNumber number={2} />
                </>
              }
            />{' '}
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Do you see the pattern?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Maybe…
                        <Highlight>
                          it can add <EmojiNumber number={1} />?
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Exactly!</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>What do you mean?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Here’s what I mean:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you combine <Emoji>👧🏻</Emoji> Saya’s lunchbox…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            …with a lunchbox that can be converted to{' '}
                            <CustomEmoji type="blankNumber" />,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            After running it, it becomes a lunchbox that can be
                            converted to <CustomEmoji type="blankNumber" />{' '}
                            <Emoji>➕</Emoji> <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <BlankNumberPlusOne />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>In other words:</Bold>{' '}
                        <Highlight>
                          <CustomEmoji type="blankNumber" /> becomes{' '}
                          <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                      <P>
                        That’s why{' '}
                        <Italic>
                          “it can add <EmojiNumber number={1} />
                          .”
                        </Italic>
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
                  <CustomEmoji type="blankNumber" /> becomes{' '}
                  <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                  <EmojiNumber number={1} />
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            It can “reproduce” <H args={{ name: 'plusOneFeature' }} />
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
                        <Bold>Now, let’s recall that:</Bold>{' '}
                        <Highlight>
                          Mathboxes <CustomEmoji type="mathBox" /> have{' '}
                          <H args={{ name: 'plusOneFeature' }} />.
                        </Highlight>
                      </P>
                      <P>
                        Using a mathbox, you can use{' '}
                        <H args={{ name: 'plusOneFeature' }} /> to add{' '}
                        <EmojiNumber number={1} /> to any number.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              Using a mathbox, you can use
              <br />
              <H args={{ name: 'plusOneFeature' }} />…
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Ymtp>…to add one to a number.</R.Ymtp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>And on this page, we learned that:</Bold>{' '}
                        <Highlight>
                          You can also add <EmojiNumber number={1} /> to a
                          number using a lunchbox <Emoji>🍱</Emoji>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  You can add <EmojiNumber number={1} /> to a number
                  <br />
                  using a lunchbox
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
                        <Bold>Here’s how:</Bold>{' '}
                        <Highlight>
                          Instead of <CustomEmoji type="plusOne" />, by using{' '}
                          <Emoji>👧🏻</Emoji> Saya’s lunchbox,
                        </Highlight>{' '}
                        you can add <EmojiNumber number={1} /> to a number.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <BlankNumberPlusOne />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Therefore:</Bold>{' '}
                        <Highlight>
                          A mathbox that uses{' '}
                          <H args={{ name: 'plusOneFeature' }} /> can be{' '}
                          <Bold>“reproduced”</Bold> using a lunchbox.
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
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  A mathbox that uses <H args={{ name: 'plusOneFeature' }} />
                  <br />
                  can be <HighlightBold>“reproduced”</HighlightBold> using a
                  lunchbox
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see…, so:</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            In a mathbox, we use <CustomEmoji type="plusOne" />,
                            and…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            In a lunchbox, we use <Emoji>👧🏻</Emoji> Saya’s
                            lunchbox.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              In a mathbox, we use <CustomEmoji type="plusOne" />
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>
              In a lunchbox, we use
              <br />
              <Emoji>👧🏻</Emoji> Saya’s lunchbox to{' '}
              <HighlightBold>reproduce</HighlightBold>
              <br />
              <H args={{ name: 'plusOneFeature' }} />.
            </R.Eweo>
          </>
        )
      },
      {
        title: <>You can reproduce more complicated mathboxes</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Of course, you can also reproduce{' '}
                        <Italic>more complicated mathboxes</Italic>.
                      </P>
                      <P>
                        <Highlight>
                          For example, take a look at this mathbox that appeared
                          on Beginner 1.
                        </Highlight>{' '}
                        If you <H args={{ name: 'run', lowerCase: true }} /> it,
                        the result will be <EmojiNumber number={4} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jiqb />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Can you figure out how to{' '}
                        <HighlightBold>reproduce</HighlightBold> this using a
                        lunchbox?
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I got it! First, we’ll use this lunchbox that can be
                        converted to <EmojiNumber number={2} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ehsw>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'f',
                  number: 2
                }}
              />
            </R.Ehsw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Then,{' '}
                        <Highlight>
                          use my lunchbox <Italic>twice</Italic>:
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Caem>
              Use my lunchbox <Bold>twice</Bold> to reproduce
              <br />
              <EmojiNumber number={2} /> <CustomEmoji type="plusOne" />{' '}
              <CustomEmoji type="plusOne" />
            </R.Caem>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Correct!</Bold> Let’s <H args={{ name: 'run' }} />{' '}
                        it to check!
                      </P>
                      <P>
                        (
                        <Highlight>
                          To save time, we’ll skip right to the end when you run
                          it.
                        </Highlight>
                        )
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Byaf></R.Byaf>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The resulting lunchbox can be converted to{' '}
                        <EmojiNumber number={4} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ifqp>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'b',
                  number: 4
                }}
              />
            </R.Ifqp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Therefore, we were able to{' '}
                        <HighlightBold>reproduce</HighlightBold> the earlier
                        mathbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Tcyv>This mathbox can be reproduced…</R.Tcyv>
            <ExpressionRunnerSeparator />
            <R.Kizi></R.Kizi>
            <Hr />
            <R.Oifs>…using this lunchbox!</R.Oifs>
            <ExpressionRunnerSeparator />
            <R.Ldcq></R.Ldcq>
            <Hr />
            <P>
              <Bold>Summary:</Bold>{' '}
              <Highlight>
                A mathbox that uses <H args={{ name: 'plusOneFeature' }} /> can
                be <HighlightBold>“reproduced”</HighlightBold> using a lunchbox.
              </Highlight>{' '}
              As long as you understood this, you don’t need to understand all
              the details!
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOne" />
              ]}
              description={
                <>
                  A mathbox that uses <H args={{ name: 'plusOneFeature' }} />
                  <br />
                  can be <HighlightBold>“reproduced”</HighlightBold> using a
                  lunchbox
                </>
              }
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
                    <P>
                      <Highlight>
                        Any lunchbox that has the following pattern can be used
                        to reproduce <H args={{ name: 'plusOneFeature' }} />.
                      </Highlight>
                    </P>
                    <R.Blvt>
                      If it has this pattern, it can reproduce
                      <br />
                      <H args={{ name: 'plusOneFeature' }} />
                    </R.Blvt>
                    <P>
                      <Emoji>👧🏻</Emoji> Saya’s lunchbox had the following:
                    </P>
                    <Ul>
                      <UlLi>
                        <EmojiWithText capitalize letter="a" /> for{' '}
                        <Emoji>🅰️</Emoji>
                      </UlLi>
                      <UlLi>
                        <EmojiWithText capitalize letter="b" /> for{' '}
                        <Emoji>🅱️</Emoji>
                      </UlLi>
                      <UlLi>
                        <EmojiWithText capitalize letter="c" /> for{' '}
                        <CustomEmoji type="C" />
                      </UlLi>
                    </Ul>
                    <R.Oykb>
                      <EmojiForLetter letter="a" /> for <Emoji>🅰️</Emoji>,{' '}
                      <EmojiForLetter letter="b" /> for <Emoji>🅱️</Emoji>, and{' '}
                      <EmojiForLetter letter="c" /> for <CustomEmoji type="C" />
                    </R.Oykb>
                    <P>
                      Here’s another example that can reproduce{' '}
                      <H args={{ name: 'plusOneFeature' }} />:
                    </P>
                    <Ul>
                      <UlLi>
                        <EmojiWithText capitalize letter="h" /> for{' '}
                        <Emoji>🅰️</Emoji>
                      </UlLi>
                      <UlLi>
                        <EmojiWithText capitalize letter="i" /> for{' '}
                        <Emoji>🅱️</Emoji>
                      </UlLi>
                      <UlLi>
                        <EmojiWithText capitalize letter="j" /> for{' '}
                        <CustomEmoji type="C" />
                      </UlLi>
                    </Ul>
                    <R.Dvpl>
                      <EmojiForLetter letter="h" /> for <Emoji>🅰️</Emoji>,
                      <EmojiForLetter letter="i" /> for <Emoji>🅱️</Emoji>, and{' '}
                      <EmojiForLetter letter="j" /> for <CustomEmoji type="C" />
                      .
                      <br />
                      This can reproduce <H args={{ name: 'plusOneFeature' }} />
                      !
                    </R.Dvpl>
                    <P>
                      <Bold>Therefore:</Bold> There are many lunchboxes that can
                      reproduce <H args={{ name: 'plusOneFeature' }} />.
                    </P>
                  </>
                }
                preview={{
                  text: <>Continue reading</>,
                  content: (
                    <>
                      <P>
                        <Bold>Note:</Bold>{' '}
                        <Highlight>
                          There are other lunchboxes that can reproduce{' '}
                          <H args={{ name: 'plusOneFeature' }} />.
                        </Highlight>{' '}
                        <Emoji>👧🏻</Emoji> Saya’s lunchbox is not the only
                        solution.
                      </P>
                      <P>
                        If you’re curious, press “Continue reading” below! (It’s
                        optional.)
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
        type: 'challengeProblem',
        title: <>Can we reproduce other mathboxes?</>,
        content: (
          <>
            <P>
              <Bold>Remember that:</Bold> In Beginner 1 and 2, we explained that
              mathboxes also have other features, which are:
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  <H args={{ name: 'minusOneFeature', capitalize: true }} />
                </Highlight>
                , and
              </UlLi>
              <UlLi>
                <Highlight>
                  <H args={{ name: 'repeatFeature', capitalize: true }} />
                </Highlight>
                .
              </UlLi>
            </Ul>
            <R.Xmqp>
              A mathbox that uses <H args={{ name: 'minusOneFeature' }} />
            </R.Xmqp>
            <R.Ednv>
              A mathbox that uses <H args={{ name: 'repeatFeature' }} />
              <br />
              (Repeat <CustomEmoji type="plusOne" /> four times)
            </R.Ednv>
            <P>
              <Bold>Question:</Bold>{' '}
              <Highlight>
                Can we also <Bold>reproduce</Bold> these features using
                lunchboxes?
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="minusOne" />,
                <Emoji>🍱</Emoji>,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  Can we <HighlightBold>reproduce</HighlightBold>{' '}
                  <CustomEmoji type="minusOne" /> and <Emoji>🔁</Emoji>
                  <br />
                  using lunchboxes?
                </>
              }
            />
            <P>
              <Bold>You don’t need to answer this question now:</Bold>{' '}
              <Highlight>We’ll talk about this soon!</Highlight>
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>Side Note: Too Hard?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>Hey Minion, I want to tell you about something…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Sure, what’s up?</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        <Italic>Wasn’t that problem too difficult?</Italic>{' '}
                        There’s no way we could’ve come up with an answer
                        quickly as Saya did.
                      </P>
                      <P>
                        <Highlight>
                          Maybe computer science is too hard for us…?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Envj>The previous problem:</R.Envj>
            <ExpressionRunnerSeparator />
            <R.Vcqp>
              <Emoji>😢</Emoji>
              <br />
              There’s no way we could’ve come up with
              <br />
              this answer as quickly as <Emoji>👧🏻</Emoji> Saya did!
            </R.Vcqp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Please don’t worry!</Bold> In fact, only a super
                        genius would be able to come up with an answer for this
                        question.
                      </P>
                      <P>
                        <Highlight>
                          And you don’t need to be a super genius to learn about
                          computer science or Y combinator.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>Oh, really?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes:</Bold> It was a very difficult question. We
                        didn’t expect you to answer it.
                      </P>
                      <P>
                        <Highlight>
                          As long as you can look at the answer and understand
                          why it’s correct, you’ll be fine.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>Ok… I feel much better now. Thank you, Minion!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>No problem. Let’s get back to the story!</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🐶', '🙂', '😈', '👧🏻']}
              description={<>Let’s get back to the story!</>}
            />
          </>
        )
      },
      {
        title: <>Back to the story…</>,
        content: (
          <>
            <P>
              The villagers are all very happy that the question is now solved!
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>Thanks to Saya, we solved the difficult question!</P>
                      <P>That means we’ll get our mathboxes back!</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              However, <Italic>Saya doesn’t seem too happy.</Italic>
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Hey Minion, I noticed something{' '}
                        <Italic>very strange…</Italic>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Oh really? What do you mean?</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Bold>What strange things did Saya notice?</Bold> Let’s take a
              look on the next page!
            </P>
            <EmojiSeparator emojis={['❓', '👧🏻', '❓']} />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

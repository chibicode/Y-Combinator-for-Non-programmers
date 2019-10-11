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
import { StepOne, StepTwo, StepThree } from 'src/contents/7.en'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: <>We’re doomed!</>,
        content: (
          <>
            <EmojiSeparator
              nodes={[
                <Emoji>😭</Emoji>,
                <CustomEmoji type="plusOneOrange" />,
                <Emoji>😭</Emoji>
              ]}
            />
            <P>
              The villagers in Lambda Village were struggling with this
              difficult problem:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
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
              Fill each <CustomEmoji type="questionFoodGrey" /> icon in a way
              such that,
              <br />
              The resulting lunchbox has
              <br />
              <H args={{ name: 'plusOneEffect' }} />.
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>Hmm… I have no clue!</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        But we need to solve this to get our mathboxes{' '}
                        <CustomEmoji type="mathBox" /> back! We’re doomed!
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
                        Oh, hey Saya. Well, we have some bad news. The devil{' '}
                        <Emoji>😈</Emoji> has stolen our mathboxes{' '}
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
                      <P>I see. Can you tell me what the question is?</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Sure.{' '}
                        <Highlight>
                          We must fill each{' '}
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
              Fill each <CustomEmoji type="questionFoodGrey" /> icon in a way
              such that,
              <br />
              The resulting lunchbox has
              <br />
              <H args={{ name: 'plusOneEffect' }} />.
            </R.Jguj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Which means, it needs to be able to calculate{' '}
                        <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrgc>
              If you combine it with{' '}
              <CustomEmoji type="blankNumber" size="mdlg" /> and
              <br />
              <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />…
            </R.Qrgc>
            <ExpressionRunnerSeparator />
            <R.Jxvy>
              The result must be <CustomEmoji type="blankNumber" size="mdlg" />{' '}
              <Emoji size="mdlg">➕</Emoji>{' '}
              <EmojiNumber number={1} size="mdlg" />
            </R.Jxvy>
            <BubbleQuotes
              quotes={[
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
                        We adults tried hard but couldn’t solve it. So I doubt
                        you can.
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
            <R.Qrfw>
              <Emoji>👧🏻</Emoji> Saya’s Lunchbox
            </R.Qrfw>
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
                        We’ll combine it with a lunchbox that can be converted
                        to <EmojiNumber number={1} />…
                      </P>
                      <R.Rbup>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'd',
                            number: 1
                          }}
                        />
                      </R.Rbup>
                      <P>
                        Then{' '}
                        <H
                          args={{
                            name: 'runAndConvertToMathbox',
                            lowerCase: true
                          }}
                        />
                        , and see if it will become <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plde>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />…
            </R.Plde>
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        Let’s first{' '}
                        <H args={{ name: 'play', lowerCase: true }} /> it!
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
            What happens if you <H args={{ name: 'play', lowerCase: true }} />{' '}
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
            <R.Rhcv>Final result</R.Rhcv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wait…! It can’t be…!</P>
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
            Can be converted to <EmojiNumber number={2} />
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
            <ExpressionRunnerSeparator />
            <R.Pmdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>That means:</Bold> Saya’s lunchbox can turn{' '}
                        <EmojiNumber number={1} /> into{' '}
                        <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Plde>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />…
            </R.Plde>
            <ExpressionRunnerSeparator />
            <R.Pmdm>
              After
              <br />
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />,
              </Highlight>
              <br />
              it became <EmojiNumber number={2} />
            </R.Pmdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        It calculated <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />, so it’s a
                        success! <Emoji>🎉</Emoji>
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
        title: (
          <>
            Can it calculate <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
            <EmojiNumber number={1} />?
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        <Bold>Wait, we still don’t know if Saya is right.</Bold>
                      </P>
                      <P>
                        Just because it can calculate <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />,{' '}
                        <Italic>it doesn’t necessarily mean</Italic> that it has{' '}
                        <H args={{ name: 'plusOneEffect' }} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>That’s a good point!</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>We need to try other examples to make sure!</P>
                      <P>
                        <Highlight>
                          For example, let’s try calculating{' '}
                          <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={1} /> with Saya’s lunchbox.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={<>Can Saya’s lunchbox calculate this?</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Ok, so let me combine this lunchbox that can be
                        converted to <EmojiNumber number={2} />…
                      </P>
                      <R.Spga>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 2
                          }}
                        />
                      </R.Spga>
                      <P>With the lunchbox I came up with earlier!</P>
                      <R.Qrfw>
                        <Emoji>👧🏻</Emoji> Saya’s lunchbox
                      </R.Qrfw>
                      <P>
                        We want the result to be <EmojiNumber number={3} />,
                        right?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Awwn>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={2} />…
            </R.Awwn>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              If it becomes <EmojiNumber number={3} size="mdlg" />,{' '}
              <Highlight>success</Highlight>. <Emoji>🎉</Emoji>
              <br />
              Otherwise, <Highlight>failure</Highlight> <Emoji>😭</Emoji>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s run it.{' '}
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                      <P>This time, we won’t stop until the end!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Nlbn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>This is the final result!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Zsxo>The final result</R.Zsxo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This lunchbox can be converted to{' '}
                        <EmojiNumber number={3} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nngz>
              <H
                args={{ name: 'canBeConvertedCaption', number: 3, letter: 'b' }}
              />
            </R.Nngz>
            <ExpressionRunnerSeparator />
            <R.Qsoa />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Therefore:</Bold> It calculated{' '}
                        <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />, so it’s a success!{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Yay again!</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wow…!</P>
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
            The pattern for <H args={{ name: 'plusOneEffect' }} />
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
                        <Bold>Let me tell you this:</Bold>{' '}
                        <Highlight>
                          Saya’s lunchbox <Italic>does</Italic> have{' '}
                          <H args={{ name: 'plusOneEffect' }} />!
                        </Highlight>
                      </P>
                      <P>
                        Therefore,{' '}
                        <HighlightBold>
                          Saya’s answer was correct.
                        </HighlightBold>{' '}
                        Congratulations! <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nvqu>
              <Emoji>👧🏻</Emoji> Saya’s lunchbox has{' '}
              <H args={{ name: 'plusOneEffect' }} />
            </R.Nvqu>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Thank you, Minion!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>By the way:</Bold> There are{' '}
                        <Italic>other</Italic> correct answers as well.
                      </P>
                      <P>
                        <Highlight>
                          Any lunchboxes that fit the following pattern have{' '}
                          <H args={{ name: 'plusOneEffect' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Blvt>
              Any lunchboxes that fit the following pattern
              <br />
              have <H args={{ name: 'plusOneEffect' }} />
            </R.Blvt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I see. So the lunchbox I came up with had the following:
                      </P>
                      <Ul>
                        <UlLi>
                          <EmojiWithText letter="a" capitalize /> for{' '}
                          <Emoji>🅰️</Emoji>
                        </UlLi>
                        <UlLi>
                          <EmojiWithText letter="b" capitalize /> for{' '}
                          <Emoji>🅱️</Emoji>
                        </UlLi>
                        <UlLi>
                          <EmojiWithText letter="c" capitalize /> for{' '}
                          <CustomEmoji type="C" />
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Oykb>
              <EmojiWithText letter="a" capitalize /> for <Emoji>🅰️</Emoji>,
              <br />
              <EmojiWithText letter="b" capitalize /> for <Emoji>🅱️</Emoji>, and
              <br />
              <EmojiWithText letter="c" capitalize /> for{' '}
              <CustomEmoji type="C" />
            </R.Oykb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Exactly. Saya’s lunchbox actually fits the following
                        pattern.
                      </P>
                      <R.Blvt>
                        Any lunchboxes that fit the following
                        <br />
                        pattern have <H args={{ name: 'plusOneEffect' }} />.
                        <br />
                        <Emoji>👧🏻</Emoji> Saya’s lunchbox fits this pattern!
                      </R.Blvt>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Let’s try other lunchboxes that have the same pattern</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>How about this lunchbox?</Bold>{' '}
                        <Italic>
                          It is different from Saya’s lunchbox, but has the same
                          pattern.
                        </Italic>
                      </P>
                      <P>
                        I used <EmojiForLetter letter="h" /> for{' '}
                        <Emoji>🅰️</Emoji>, <EmojiForLetter letter="i" /> for{' '}
                        <Emoji>🅱️</Emoji>, and <EmojiForLetter letter="j" /> for{' '}
                        <CustomEmoji type="C" />.
                      </P>
                      <R.Dvpl>
                        It is different from Saya’s lunchbox,
                        <br />
                        but has the same pattern.
                      </R.Dvpl>
                      <P>
                        <Bold>So you’re saying…</Bold> This one has{' '}
                        <H args={{ name: 'plusOneEffect' }} /> too?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes, it also has <H args={{ name: 'plusOneEffect' }} />.
                      </P>
                      <P>
                        <Bold>As a test:</Bold>{' '}
                        <Highlight>
                          Let’s combine it with this lunchbox that can be
                          converted to <EmojiNumber number={3} /> and see what
                          happens!
                        </Highlight>
                      </P>
                      <R.Cjxe>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'k',
                            number: 3
                          }}
                        />
                      </R.Cjxe>
                      <P>
                        If the result is <EmojiNumber number={4} />, then that
                        means it calculated <EmojiNumber number={3} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
                        successfully. Let’s check!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward', skippable: true }} />
            </P>
            <R.Oqpi />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The result was a lunchbox that can be converted to{' '}
                        <EmojiNumber number={4} />!
                      </P>
                      <R.Zxkq>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'i',
                            number: 4
                          }}
                        />
                      </R.Zxkq>
                      <P>
                        <Bold>Therefore:</Bold> It calculated{' '}
                        <EmojiNumber number={3} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see, so this one has{' '}
                        <H args={{ name: 'plusOneEffect' }} /> as well.
                      </P>
                      <R.Udxn>
                        Just like <Emoji>👧🏻</Emoji> Saya’s lunchbox,
                        <br />
                        This one also has <H args={{ name: 'plusOneEffect' }} />
                      </R.Udxn>
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
        title: <>Let’s Pause and Look Back</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>That was a lot of information. Can we take a break?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Sure, let’s take a break!</P>
                      <P>
                        <Bold>By the way:</Bold>{' '}
                        <Italic>
                          We’re halfway done with the intermediate levels.
                        </Italic>{' '}
                        And we’re also halfway done with the{' '}
                        <Italic>entire course.</Italic>
                      </P>
                      <P>
                        <Bold>So: </Bold> Let’s pause and look back at what we
                        just did!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              First, take a look at this one. It’s a mathbox that can calculate{' '}
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> using{' '}
              <H args={{ name: 'plusOneFeature', capitalize: true }} />.
            </P>
            <R.Mcug>
              A mathbox that can calculate <EmojiNumber number={1} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />
              <br />
              using <H args={{ name: 'plusOneFeature', capitalize: true }} />.
              <br />
              If you run it, it becomes <EmojiNumber number={2} />.
            </R.Mcug>
            <P>
              If we were to summarize what we just did in this chapter, it’ll be
              this:
            </P>
            <P>
              <H args={{ name: 'plusOneFeature', capitalize: true }} /> can be <Bold>replicated</Bold> using a lunchbox
              」は、
              <HighlightBold>弁当箱で「再現」できる</HighlightBold>
              、ということです。
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOneOrange" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'plusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
            <P>
              「<HighlightBold>再現</HighlightBold>
              」できる、とはどういうことでしょうか？先ほどの計算箱の例で説明しますね。
            </P>
            <R.Lizi>これを弁当箱で再現します</R.Lizi>
            <P>
              <Bold>ステップ1:</Bold> まず、
              <Highlight>
                計算箱の <EmojiNumber number={1} /> の代わりに、
                <HighlightBold>
                  <EmojiNumber number={1} /> に変換できる
                </HighlightBold>
                弁当箱
              </Highlight>
              を用意します。
            </P>
            <R.Rnug>これの代わりに…</R.Rnug>
            <ExpressionRunnerSeparator />
            <R.Rbup>
              <EmojiNumber number={1} /> に変換できる弁当箱を用意
            </R.Rbup>
            <P>
              <Bold>ステップ2:</Bold> 次に、
              <Highlight>
                計算箱の <CustomEmoji type="plusOne" /> の代わりに、
                <H args={{ name: 'plusOneEffect' }} />
              </Highlight>
              がある弁当箱を用意します。
            </P>
            <R.Bhpw>これの代わりに…</R.Bhpw>
            <ExpressionRunnerSeparator />
            <R.Qrfw>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を用意
              <br />(<Emoji>👧🏻</Emoji> サヤちゃんが考えた弁当箱です)
            </R.Qrfw>
            <P>
              <Bold>ステップ3:</Bold>{' '}
              このふたつを合体させた弁当箱は、先ほども説明した通り、
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} /> すると{' '}
                <EmojiNumber number={2} /> になります
              </Highlight>
              ね。
            </P>
            <R.Dyoq>
              <EmojiNumber number={1} /> に変換できる弁当箱と
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を合体
            </R.Dyoq>
            <P>
              つまり、先ほど登場した <EmojiNumber number={1} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
              を計算できる計算箱は、
            </P>
            <R.Lizi></R.Lizi>
            <P>
              <HighlightBold>こちらの弁当箱で「再現」できる</HighlightBold>
              ということです。
            </P>
            <R.Plde>
              <EmojiNumber number={1} /> <CustomEmoji type="plusOne" />{' '}
              の計算箱を、弁当箱で再現
            </R.Plde>
            <P>
              これが、「<Highlight>計算箱を弁当箱で再現する</Highlight>
              」ということなんですね。
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>もっと複雑な計算箱も再現できる</>,
        content: (
          <>
            <P>もちろん、もっと複雑な計算箱も弁当箱で再現できます。</P>
            <P>
              たとえば、初級その1に登場したこちらの計算箱をご覧ください。
              <H args={{ name: 'play' }} /> すると、結果は{' '}
              <EmojiNumber number={4} /> になります。
            </P>
            <R.Jiqb />
            <P>
              これを弁当箱で再現するには、
              <Highlight>
                <EmojiNumber number={2} /> に変換できる弁当箱と、
                <H args={{ name: 'plusOneEffect' }} />
                がある弁当箱を「<HighlightBold>2個</HighlightBold>
                」合体させればいい
              </Highlight>
              のです。
            </P>
            <R.Xhdq>
              <EmojiNumber number={2} /> に変換できる弁当箱と
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱を「<HighlightBold>2個</HighlightBold>」<br />
              合体すれば、
              <EmojiNumber number={2} /> <CustomEmoji type="plusOne" />{' '}
              <CustomEmoji type="plusOne" /> の計算箱を再現できる
            </R.Xhdq>
            <P>
              上の弁当箱は実行に時間がかかるので、ここでは早送りはしませんが、
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />{' '}
                ボタンを押すと、答えが <EmojiNumber number={4} />{' '}
                になるのを確認できます。
              </Highlight>
            </P>
            <Hr />
            <P>
              まとめると、
              <Highlight>
                計算箱の「
                <H args={{ name: 'plusOneFeature' }} />
                」は、弁当箱で再現することができる
              </Highlight>
              のです。このポイントさえ覚えていただければ、細かいことは分からなくても大丈夫です！
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="plusOneOrange" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'plusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: <>他の機能も再現できる？</>,
        content: (
          <>
            <P>
              ここで疑問なのですが、初級で説明した通り、計算箱には「
              <H args={{ name: 'plusOneFeature' }} />
              」以外にも、「
              <H args={{ name: 'minusOneFeature' }} />
              」や、「
              <H args={{ name: 'repeatFeature' }} />
              」がありましたよね。
            </P>
            <R.Xmqp>
              「<H args={{ name: 'minusOneFeature' }} />
              」の例
            </R.Xmqp>
            <R.Ednv>
              「<H args={{ name: 'repeatFeature' }} />
              」の例
              <br />
              (<CustomEmoji type="plusOne" /> を <EmojiNumber number={4} />{' '}
              回繰り返す)
            </R.Ednv>
            <P>
              <Highlight>
                これらの機能も、弁当箱で再現することができるのでしょうか？
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
                  「<H args={{ name: 'minusOneFeature' }} />
                  」や
                  <br />「<H args={{ name: 'repeatFeature' }} />
                  」も、
                  <br />
                  弁当箱で「再現」できる？
                </>
              }
            />
            <P>
              <Highlight>
                この疑問については、後に答えが明らかになります。
              </Highlight>
              楽しみにしていてください。
            </P>
          </>
        )
      },
      {
        type: 'sideNote',
        title: <>考えつかなくても大丈夫！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>ミニオン、ひとつ愚痴を聞いてもらえるかい？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>はい、どうしました？</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        さっきの問題、難しすぎやしないかい？普通は、サヤちゃんみたいに答えをとっさに思いつかないよ！
                      </P>
                      <P>
                        <Highlight>
                          こういうのがパッと思いつけないと、コンピュータサイエンスを学ぶ資格はないのかな？
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qrfw>
              さっきの答えの弁当箱。普通はこんなの、
              <br />
              とっさに思いつかないよ！<Emoji>😢</Emoji>
            </R.Qrfw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          いえ、そんなことは全くありませんよ。
                        </HighlightBold>
                        むしろ、こういう答えを思いつけるのはひと握りの天才だけです。
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>え、そうなの？</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>はい。先ほどの問題は超難問でしたから。</P>
                      <P>
                        <HighlightBold>
                          答えを思いつけなくても、答えを見て、「なるほど、そういうことだったのか」と理解できれば、コンピュータサイエンスを学ぶ素養は十分すぎるほどあります。
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>そっか…気が楽になったよ。ありがとう！</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>いえいえ。それでは、そろそろ話を戻しましょう！</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🐶', '🙂', '😈', '👧🏻']}
              description={<>話を戻しましょう！</>}
            />
          </>
        )
      },
      {
        title: <>話を戻すと…</>,
        content: (
          <>
            <P>
              悪魔による難しい問題に見事答えられたことで、村人たちは大喜びでした。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やった！サヤちゃんのおかげで問題に答えられたぞ！これで計算箱を返してもらえる！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>しかし、当のサヤちゃんには何か腑に落ちない点があるようです。</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ミニオンさん、
                        <Highlight>
                          おかしなことに気づいちゃったんだけど…
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>はい、「おかしなこと」とは何ですか？</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              サヤちゃんが気づいた、「
              <HighlightBold>おかしなこと</HighlightBold>
              」とは何なのでしょうか？次のページで説明していきます！
            </P>
            <EmojiSeparator emojis={['❓', '👧🏻', '❓']} />
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

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

export const BlankNumberPlusOne = () => (
  <>
    <R.Eweo>
      <Emoji>👧🏻</Emoji> サヤちゃんの弁当箱と、
      <br />
      <CustomEmoji type="blankNumber" /> に変換できる弁当箱を
      <br />
      合体させて実行すると、
    </R.Eweo>
    <ExpressionRunnerSeparator />
    <R.Jxvy>
      <CustomEmoji type="blankNumber" /> <Emoji>➕</Emoji>{' '}
      <EmojiNumber number={1} /> に<br />
      変換できる弁当箱になる
    </R.Jxvy>
  </>
)

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
        title: <>What happens if you run it?</>,
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
                        <H args={{ name: 'pressRun', girl: true }} />
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
                          Any lunchboxes that have the following pattern have{' '}
                          <H args={{ name: 'plusOneEffect' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Blvt>
              Any lunchboxes that have the following pattern
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
              <H args={{ name: 'pressRun', skippable: true }} />
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
                      <R.Duuk>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'i',
                            number: 4
                          }}
                        />
                      </R.Duuk>
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
              <EmojiNumber number={1} /> using <CustomEmoji type="plusOne" />.
            </P>
            <R.Mcug>
              A mathbox that can calculate <EmojiNumber number={1} />{' '}
              <Emoji>➕</Emoji> <EmojiNumber number={1} />
              <br />
              using <CustomEmoji type="plusOne" />. If you run it, it becomes{' '}
              <EmojiNumber number={2} />.
            </R.Mcug>
            <P>
              If we were to summarize what we just did in this page, it’ll be
              this:
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  <CustomEmoji type="mathBox" /> A <Bold>mathbox</Bold> that
                  uses <CustomEmoji type="plusOne" /> can be{' '}
                  <Bold>reproduced</Bold> by…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  <Emoji>🍱</Emoji> A <Bold>lunchbox</Bold> that has{' '}
                  <H args={{ name: 'plusOneEffect' }} />.
                </Highlight>
              </UlLi>
            </Ul>
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
                  A <Bold>mathbox</Bold> that uses{' '}
                  <CustomEmoji type="plusOne" /> can be
                  <br />
                  <HighlightBold>reproduced</HighlightBold> by…
                  <br />A <Bold>lunchbox</Bold> that has{' '}
                  <H args={{ name: 'plusOneEffect' }} />.
                </>
              }
            />
            <P>
              What does <HighlightBold>“reproduced”</HighlightBold> mean? Let me
              explain…
            </P>
            <Hr />
            <P>
              Let’s <HighlightBold>reproduce</HighlightBold> the following
              mathbox <CustomEmoji type="mathBox" /> using a lunchbox{' '}
              <Emoji>🍱</Emoji>.
            </P>
            <R.Lizi>We’ll reproduce this using a lunchbox</R.Lizi>
            <P>
              <Bold>Step 1:</Bold>{' '}
              <Highlight>
                First, instead of <EmojiNumber number={1} />, we use a lunchbox
                that can be converted to <EmojiNumber number={1} />.
              </Highlight>
            </P>
            <R.Rnug>Instead of this…</R.Rnug>
            <ExpressionRunnerSeparator />
            <R.Rbup>
              Use a lunchbox that can be converted to <EmojiNumber number={1} />
              :<br />
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Rbup>
            <P>
              <Bold>Step 2:</Bold>{' '}
              <Highlight>
                Next, instead of <CustomEmoji type="plusOne" />, use a lunchbox
                that has <H args={{ name: 'plusOneEffect' }} />.
              </Highlight>
            </P>
            <R.Bhpw>Instead of this…</R.Bhpw>
            <ExpressionRunnerSeparator />
            <R.Qrfw>
              Use a lunchbox that has
              <br />
              <H args={{ name: 'plusOneEffect' }} />
              <br />(<Emoji>👧🏻</Emoji> Saya’s lunchbox)
            </R.Qrfw>
            <P>
              <Bold>Step 3:</Bold> If you combine them and then{' '}
              <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />…
            </P>
            <P>
              <Highlight>
                It will become <EmojiNumber number={2} />,
              </Highlight>{' '}
              as we saw on this page.
            </P>
            <R.Dyoq>Combined lunchboxes…</R.Dyoq>
            <P>Therefore, this mathbox:</P>
            <R.Lizi></R.Lizi>
            <P>
              Can be <HighlightBold>reproduced</HighlightBold> by this lunchbox.
            </P>
            <R.Plde>
              <HighlightBold>Reproduce</HighlightBold>{' '}
              <EmojiNumber number={1} /> <CustomEmoji type="plusOne" /> using a
              lunchbox
            </R.Plde>
            <P>
              That’s what we mean by <HighlightBold>reproducing</HighlightBold>{' '}
              a mathbox <CustomEmoji type="mathBox" /> using a lunchbox{' '}
              <Emoji>🍱</Emoji>.
            </P>
          </>
        )
      },
      {
        type: 'summary',
        title: <>You can reproduce more complicated mathboxes</>,
        content: (
          <>
            <P>
              Of course, you can also reproduce{' '}
              <Italic>more complicated mathboxes</Italic>.
            </P>
            <P>
              <Highlight>
                For example, take a look at this mathbox that appeared on
                Beginner 1.
              </Highlight>{' '}
              If you <H args={{ name: 'run', lowerCase: true }} /> it, the
              result will be <EmojiNumber number={4} />.
            </P>
            <R.Jiqb />
            <P>To reproduce this using a lunchbox, you’ll need:</P>
            <Ul>
              <UlLi>
                <Highlight>
                  A lunchbox that can be converted to <EmojiNumber number={2} />
                  , and…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  Two lunchboxes that have{' '}
                  <H args={{ name: 'plusOneEffect' }} />.
                </Highlight>
              </UlLi>
            </Ul>
            <R.Xhdq>
              How to reproduce <EmojiNumber number={2} />{' '}
              <CustomEmoji type="plusOne" /> <CustomEmoji type="plusOne" />{' '}
              <br />
              using a lunchbox.
              <br />
              The final result will be <EmojiNumber number={4} />.
            </R.Xhdq>
            <P>
              <Bold>Summary:</Bold>{' '}
              <Highlight>
                A <Bold>mathbox</Bold> that uses <CustomEmoji type="plusOne" />{' '}
                can be <Bold>reproduced</Bold> by a lunchbox that has{' '}
                <H args={{ name: 'plusOneEffect' }} />.
              </Highlight>
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
                  A <Bold>mathbox</Bold> that uses{' '}
                  <CustomEmoji type="plusOne" /> can be
                  <br />
                  <HighlightBold>reproduced</HighlightBold> by…
                  <br />A <Bold>lunchbox</Bold> that has{' '}
                  <H args={{ name: 'plusOneEffect' }} />.
                </>
              }
            />
          </>
        )
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
                <H args={{ name: 'minusOneFeature', capitalize: true }} />, and
              </UlLi>
              <UlLi>
                <H args={{ name: 'repeatFeature', capitalize: true }} />.
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
                        quickly like Saya did.
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
            <R.Qrfw>
              There’s no way we could’ve come up with
              <br />
              this answer!
            </R.Qrfw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Please don’t worry.</Bold> In fact, only a super
                        genius would be able to come up with an answer for this
                        question.
                      </P>
                      <P>
                        And you don’t need to be a super genius to learn about
                        computer science or Y combinator.
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

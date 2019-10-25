import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import EmojiForLetter from 'src/components/EmojiForLetter'
import EmojiNumber from 'src/components/EmojiNumber'
import VariableShadeContext from 'src/components/VariableShadeContext'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import TwoColGrid from 'src/components/TwoColGrid'
// import * as R from 'src/components/Runners'
import * as R from 'src/components/Runners/fakeIndex'
import NextLessonButton from 'src/components/NextLessonButton'
import MultiplyIcon from 'src/components/MultiplyIcon'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        type: 'summary',
        title: <>This is the last advanced episode!</>,
        content: (
          <>
            <P>
              <Highlight>
                This is the last page for the advanced levels!
              </Highlight>{' '}
              You’re almost there!
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>You’re almost there!</>}
            />
          </>
        )
      },
      {
        title: <>We won!</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        As promised,{' '}
                        <Highlight>
                          I will return <H args={{ name: 'repeatFeature' }} />{' '}
                          to you!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🔁', '😈', '🔁']}
              description={
                <>
                  We got <H args={{ name: 'repeatFeature' }} /> back!
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        Yes! We’ve gotten all the features back. We won!{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="plusOne" />,
                <CustomEmoji type="minusOne" />,
                <Emoji>🔁</Emoji>
              ]}
              description={<>We’ve gotten all the features back!</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        Finally, we can use mathboxes to do additions and
                        subtractions - no matter how difficult they are!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Nmbt>
                    Calculates <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
                    <Emoji>🅱️</Emoji>
                  </R.Nmbt>
                </>
              }
              right={
                <>
                  <R.Jaqs>
                    Calculates <Emoji>🅰️</Emoji> <Emoji>➖</Emoji>{' '}
                    <Emoji>🅱️</Emoji>
                  </R.Jaqs>
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
                        <Bold>Actually:</Bold>{' '}
                        <Highlight>
                          I have something I haven’t told you about.
                        </Highlight>{' '}
                        Let’s talk about it now!
                      </P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>What? You still have something to say?</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>What does this lunchbox do?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>First, take a look at this lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Hvfb />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… what is this?</P>
                      <P>
                        It looks like you can fill each of{' '}
                        <CustomEmoji type="blankNumberPurple" /> and{' '}
                        <CustomEmoji type="blankNumberPink" /> with a number…
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Well:</Bold>{' '}
                        <Highlight>
                          Try filling each of{' '}
                          <CustomEmoji type="blankNumberPurple" /> and{' '}
                          <CustomEmoji type="blankNumberPink" /> with a random
                          number!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Ok. Let’s use:</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={2} /> for{' '}
                            <CustomEmoji type="blankNumberPurple" />
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={3} /> for{' '}
                            <CustomEmoji type="blankNumberPink" />
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Jwsj>
              Fill each of <CustomEmoji type="blankNumberPurple" /> and{' '}
              <CustomEmoji type="blankNumberPink" />…
            </R.Jwsj>
            <ExpressionRunnerSeparator />
            <R.Mlnt>
              With <EmojiNumber number={2} /> and <EmojiNumber number={3} />
            </R.Mlnt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Now, let’s use this lunchbox that can be converted to{' '}
                        <EmojiNumber number={2} />…
                      </P>
                      <R.Wopl>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'e',
                            number: 2
                          }}
                        />
                      </R.Wopl>
                      <P>
                        And this lunchbox that can be converted to{' '}
                        <EmojiNumber number={3} />:
                      </P>
                      <R.Dmrz>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 3
                          }}
                        />
                      </R.Dmrz>
                    </>
                  )
                }
              ]}
            />
            <R.Mlnt></R.Mlnt>
            <ExpressionRunnerSeparator />
            <R.Tpyg>
              Use lunchboxes that can be converted to
              <br />
              <EmojiNumber number={2} /> and <EmojiNumber number={3} />
            </R.Tpyg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Ok, let’s see what happens when you{' '}
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
            If you <H args={{ name: 'run', lowerCase: true }} /> it…
          </>
        ),
        content: (
          <>
            <P>
              Let’s <H args={{ name: 'run', lowerCase: true }} /> it!
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  It’s complicated, so you don’t need to follow all the steps!
                </Highlight>{' '}
                Save your eyes!
              </UlLi>
              <UlLi>
                If you can’t wait, press{' '}
                <Highlight highlightType="pink">
                  “<H args={{ name: 'skipToTheEnd' }} /> →”
                </Highlight>
                .
              </UlLi>
            </Ul>
            <R.Ugvz></R.Ugvz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        It became this lunchbox{' '}
                        <Highlight>
                          that can be converted to <EmojiNumber number={5} />!
                        </Highlight>
                      </P>
                      <R.Xkcm>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'c',
                            number: 5
                          }}
                        />
                      </R.Xkcm>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>It can do addition</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Now:</Bold>{' '}
                        <Highlight>
                          What numbers did you use for{' '}
                          <CustomEmoji type="blankNumberPurple" /> and{' '}
                          <CustomEmoji type="blankNumberPink" />?
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
                        <Highlight>
                          I used <EmojiNumber number={2} /> and{' '}
                          <EmojiNumber number={3} />, and the final result was{' '}
                          <EmojiNumber number={5} />…
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Mlnt>
              If we used <EmojiNumber number={2} /> and{' '}
              <EmojiNumber number={3} />…
            </R.Mlnt>
            <ExpressionRunnerSeparator />
            <R.Ryqp>
              The final result was <EmojiNumber number={5} />
            </R.Ryqp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <Bold>Does that mean:</Bold>{' '}
                        <Highlight>
                          It calculated <EmojiNumber number={2} />{' '}
                          <Emoji>➕</Emoji> <EmojiNumber number={3} />?
                        </Highlight>
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={2} />,
                          <Emoji>➕</Emoji>,
                          <EmojiNumber number={3} />
                        ]}
                        description={<>It can do addition?</>}
                      />
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Exactly!</Bold> Using the above lunchbox,
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you fill each of{' '}
                            <CustomEmoji type="blankNumberPurple" /> and{' '}
                            <CustomEmoji type="blankNumberPink" /> with some
                            number…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            It calculates{' '}
                            <CustomEmoji type="blankNumberPurple" />{' '}
                            <Emoji>➕</Emoji>{' '}
                            <CustomEmoji type="blankNumberPink" />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Hvfb>
              If you fill each of <CustomEmoji type="blankNumberPurple" /> and{' '}
              <CustomEmoji type="blankNumberPink" />
              <br />
              with some number and <H
                args={{ name: 'run', lowerCase: true }}
              />{' '}
              it…
            </R.Hvfb>
            <ExpressionRunnerSeparator />
            <R.Nxjv>
              It will become a lunchbox that can be
              <br />
              converted to <CustomEmoji type="blankNumberPurple" />{' '}
              <Emoji>➕</Emoji> <CustomEmoji type="blankNumberPink" />
            </R.Nxjv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>In summary:</Bold>{' '}
                        <Highlight>
                          The above lunchbox can do{' '}
                          <Bold>addition of two numbers</Bold>.
                        </Highlight>
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <CustomEmoji type="blankNumberPurple" />,
                          <Emoji>➕</Emoji>,
                          <CustomEmoji type="blankNumberPink" />
                        ]}
                        description={<>It can add two numbers!</>}
                      />
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Oh wow…!</P>
                      <P>
                        We thought we had to use{' '}
                        <H args={{ name: 'repeatFeature' }} /> to calculate{' '}
                        additions like this:
                      </P>
                      <R.Bxuv>
                        Calculates <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
                        <Emoji>🅱️</Emoji>
                      </R.Bxuv>
                      <P>
                        <Highlight>
                          But it looks like we can do addition of two numbers
                          without using <H args={{ name: 'repeatFeature' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Exactly!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Another lunchbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Next, how about this lunchbox?</Bold>{' '}
                        <Highlight>
                          What do you think this lunchbox can do?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl>What can this lunchbox do?</R.Vqyl>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        It looks like the previous lunchbox, but it’s slightly
                        different.
                      </P>
                      <P>
                        <Highlight>
                          Let’s fill <CustomEmoji type="blankNumberPurple" />{' '}
                          and <CustomEmoji type="blankNumberPink" /> with{' '}
                          <EmojiNumber number={2} /> and{' '}
                          <EmojiNumber number={3} />
                        </Highlight>{' '}
                        like the last time, and see what happens.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nvdn>
              Use <EmojiNumber number={2} /> for{' '}
              <CustomEmoji type="blankNumberPurple" /> and{' '}
              <EmojiNumber number={3} /> for{' '}
              <CustomEmoji type="blankNumberPink" />
            </R.Nvdn>
            <ExpressionRunnerSeparator />
            <R.Yiet>
              Use lunchboxes that can be converted to
              <br />
              <EmojiNumber number={2} /> and <EmojiNumber number={3} />
            </R.Yiet>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Ok, let’s <H args={{ name: 'run', lowerCase: true }} />{' '}
                        it!
                      </P>
                      <P>
                        This one takes time, so if you can’t wait, press{' '}
                        <Highlight highlightType="pink">
                          “<H args={{ name: 'skipToTheEnd' }} /> →”
                        </Highlight>
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wzqv></R.Wzqv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        It became a lunchbox{' '}
                        <Highlight>
                          that can be converted to <EmojiNumber number={6} />!
                        </Highlight>
                      </P>
                      <R.Edzu>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'c',
                            number: 6
                          }}
                        />
                      </R.Edzu>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>It can do multiplication</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        We started out with <EmojiNumber number={2} /> for{' '}
                        <CustomEmoji type="blankNumberPurple" /> and{' '}
                        <EmojiNumber number={3} /> for{' '}
                        <CustomEmoji type="blankNumberPink" />…
                      </P>
                      <P>
                        And the result was <EmojiNumber number={6} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nvdn>
              We started out with <EmojiNumber number={2} /> and{' '}
              <EmojiNumber number={3} />…
            </R.Nvdn>
            <ExpressionRunnerSeparator />
            <R.Uhqo>
              And the result was <EmojiNumber number={6} />
            </R.Uhqo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <Bold>Maybe:</Bold>{' '}
                        <Highlight>
                          It can do <Bold>multiplication</Bold>?
                        </Highlight>
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />
                        ]}
                        description={<>It can do multiplication?</>}
                      />
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Exactly!</Bold> Using the above lunchbox,
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you fill each of{' '}
                            <CustomEmoji type="blankNumberPurple" /> and{' '}
                            <CustomEmoji type="blankNumberPink" /> with some
                            number…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            It calculates{' '}
                            <CustomEmoji type="blankNumberPurple" />{' '}
                            <Emoji>✖️</Emoji>{' '}
                            <CustomEmoji type="blankNumberPink" />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl>
              If you fill each of <CustomEmoji type="blankNumberPurple" /> and{' '}
              <CustomEmoji type="blankNumberPink" />
              <br />
              with some number and <H
                args={{ name: 'run', lowerCase: true }}
              />{' '}
              it…
            </R.Vqyl>
            <ExpressionRunnerSeparator />
            <R.Aflw>
              It will become a lunchbox that can be
              <br />
              converted to <CustomEmoji type="blankNumberPurple" />{' '}
              <Emoji>✖️</Emoji> <CustomEmoji type="blankNumberPink" />
            </R.Aflw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        So, it’s a lunchbox that can calculate multiplication.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="blankNumberPurple" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="blankNumberPink" />
              ]}
              description={<>It can calculate multiplication!</>}
            />
          </>
        )
      },
      {
        title: <>It can do other calculations</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        This is amazing! Mathboxes could only do additions and
                        subtractions, but lunchboxes can also do
                        multiplications!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Yeah. By the way, we don’t have time to explain this,
                        but{' '}
                        <Highlight>
                          lunchboxes can also do <Bold>subtractions</Bold> and{' '}
                          <Bold>divisions</Bold> of two numbers.
                        </Highlight>
                      </P>
                      <P>
                        <Bold>So:</Bold>{' '}
                        <Highlight>
                          Lunchboxes can do addition, multiplication,
                          subtraction, and division.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['➕', '✖️', '🍱', '➖', '➗']}
              description={
                <>
                  Lunchboxes can do addition, multiplication,
                  <br />
                  subtraction, and division.
                </>
              }
            />
          </>
        )
      },
      {
        type: 'summary',
        title: <>This is the final topic!</>,
        content: (
          <>
            <P>
              What’s coming up next is the final topic we’ll cover. You’re so
              close to the finish!
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>You’re so close to the finish!</>}
            />
          </>
        )
      },
      {
        title: <>Factorials</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Furthermore, lunchboxes can do even more complicated
                        calculations.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Like what?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>For example</Bold>:{' '}
                        <Highlight>
                          Lunchboxes can calculate <Bold>factorials</Bold>.
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
                        <HighlightBold>Factorials?</HighlightBold> What’s that?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>
                          The factorial of a number can be calculated as
                          follows:
                        </Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            Start with a number, say{' '}
                            <CustomEmoji type="blankNumber" />, and…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <Bold>Keep multiplying</Bold> it with smaller
                            numbers (each number is <Bold>1 less</Bold> than the
                            previous number)…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Until you reach <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <CustomEmoji type="blankNumber" />,
                          <Emoji>✖️</Emoji>,
                          <CustomEmoji type="questionMinusOne" />,
                          <Emoji>✖️</Emoji>,
                          <CustomEmoji type="horizontalDotDotDot" />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <HighlightBold>Factorial</HighlightBold>:<br />
                            Start with a number and keep multiplying
                            <br />
                            with smaller numbers until you reach{' '}
                            <EmojiNumber number={1} />.
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… Can you give me an example?</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>For example:</Bold> This is{' '}
                        <Highlight>
                          the factorial of <EmojiNumber number={3} />
                        </Highlight>
                        . If you actually calculate it, the result will be{' '}
                        <EmojiNumber number={6} />.
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            The factorial of <EmojiNumber number={3} />.
                            <br />
                            If you calculate it, the result is{' '}
                            <EmojiNumber number={6} />.
                          </>
                        }
                      />
                      <P>
                        <Bold>Another example:</Bold> This is{' '}
                        <Highlight>
                          the factorial of <EmojiNumber number={4} />
                        </Highlight>
                        . If you actually calculate it, the result will be{' '}
                        <EmojiNumber number={24} />.
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={4} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            The factorial of <EmojiNumber number={4} />.
                            <br />
                            If you calculate it, the result is{' '}
                            <EmojiNumber number={24} />.
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Ok, I think I got it…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Now, I will show you that:</Bold>{' '}
                        <Highlight>
                          Lunchboxes can calculate factorials.
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
        title: <>A simpler notation for multiplication</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        To calculate factorials,{' '}
                        <Highlight>
                          we need to use the lunchbox that can do{' '}
                          <Bold>multiplication</Bold>
                        </Highlight>{' '}
                        (which we saw earlier).
                      </P>
                      <P>
                        <Bold>But this time:</Bold>{' '}
                        <Highlight>
                          Instead of using the actual lunchbox, we’ll use the
                          following notation:
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqyl>Instead of the actual lunchbox…</R.Vqyl>
            <ExpressionRunnerSeparator />
            <R.Trwj>We’ll use this notation</R.Trwj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        In this notation, the <MultiplyIcon /> icon in the
                        middle indicates multiplication.
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <CustomEmoji type="blankNumberPurple" />,
                          <MultiplyIcon />,
                          <CustomEmoji type="blankNumberPink" />
                        ]}
                        description={
                          <>
                            The <MultiplyIcon /> icon indicates multiplication
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… ok, but why do we need to use this instead of the
                        original lunchbox?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>It’s because:</Bold>{' '}
                        <Highlight>
                          The lunchbox that calculates factorials is going to be
                          very complicated.
                        </Highlight>{' '}
                      </P>
                      <P>
                        Therefore, if we don’t use this simpler notation to
                        describe multiplications, we’ll run out of space.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Before we move on, let’s take a look at an example that
                        uses this simpler notation.
                      </P>
                      <P>
                        <Bold>For example:</Bold> This is the earlier lunchbox
                        that calculates <EmojiNumber number={2} />{' '}
                        <Emoji>✖️</Emoji> <EmojiNumber number={3} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ochk>
              A lunchbox that calculates <EmojiNumber number={2} />{' '}
              <Emoji>✖️</Emoji> <EmojiNumber number={3} />
            </R.Ochk>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        If we use the <MultiplyIcon /> notation to simplify the
                        above lunchbox, it will look like below.
                      </P>
                      <P>
                        You can <H args={{ name: 'run', lowerCase: true }} /> it
                        to calculate <EmojiNumber number={2} />{' '}
                        <Emoji>✖️</Emoji> <EmojiNumber number={3} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Potg>
              Using the <MultiplyIcon /> notation
            </R.Potg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Ok. But how do we use this to calculate factorials?</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Calculating factorials</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Let me explain how to calculate factorials using a
                        lunchbox.
                      </P>
                      <P>
                        <Bold>First:</Bold> Take a look at this lunchbox.{' '}
                        <Highlight>
                          Notice that there’s a <MultiplyIcon /> sign between{' '}
                          <EmojiForLetter letter="a" /> and{' '}
                          <EmojiForLetter letter="f" />.
                        </Highlight>{' '}
                      </P>
                      <P>
                        So it uses a lunchbox that can calculate
                        multiplications.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zick>
              There’s a <MultiplyIcon /> sign between
              <br />
              <EmojiForLetter letter="a" /> and <EmojiForLetter letter="f" />{' '}
            </R.Zick>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>Next:</Bold>{' '}
                        <Highlight>
                          We’ll add more items to the above lunchbox like this
                          (sections in yellow background).
                        </Highlight>
                      </P>
                      <P>
                        By the way, the bottom half is{' '}
                        <HighlightBold>Y Combinator</HighlightBold> which we
                        used on the last page.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Olqy>
              We add more items (yellow background).
              <br />
              The bottom half is <HighlightBold>Y Combinator</HighlightBold>
            </R.Olqy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        By using this lunchbox, you can calculate the factorial
                        of any number.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… really?</P>
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
            The factorial of <EmojiNumber number={3} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では、先ほどの弁当箱を使って <EmojiNumber number={3} />{' '}
                        の階乗を計算してみよう。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={3} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={6} /> になる
                          </>
                        }
                      />
                      <P>
                        これを計算するには、
                        <HighlightBold>
                          先ほどの弁当箱の上の{' '}
                          <CustomEmoji type="blankNumber" /> の部分を{' '}
                          <EmojiNumber number={3} /> にして実行すればいい
                        </HighlightBold>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <VariableShadeContext.Provider value={{ shadeNonFactorial: true }}>
              <R.Kmgw>
                <CustomEmoji type="blankNumber" /> の部分を…
              </R.Kmgw>
              <ExpressionRunnerSeparator />
              <R.Zlfx>
                <EmojiNumber number={3} /> に変えて実行すればいい
              </R.Zlfx>
            </VariableShadeContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        これを
                        <H args={{ name: 'run' }} /> してみよう！
                      </P>
                      {/* TODO: NOTE - we skip a lot of steps */}
                      <Ul>
                        <UlLi>
                          ステップ数が非常に多いので、途中のいくつかのステップを省略した上で、
                          <Highlight>3倍速で進めるぞ。</Highlight>{' '}
                          <Emoji>⏩</Emoji> <Emoji>⏩</Emoji> <Emoji>⏩</Emoji>
                        </UlLi>
                        <UlLi>
                          実行中は、目に優しくなるように弁当箱を半透明にしている。
                        </UlLi>
                        <UlLi>
                          待てない場合は、「
                          <Highlight highlightType="pink">
                            <H args={{ name: 'skipToTheStoppingPoint' }} /> →
                          </Highlight>
                          」を押してもいいぞ。
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rrmc></R.Rrmc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>まだ最後まで終わっていないが…気づいたかな？</P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={3} /> <Emoji>✖️</Emoji>{' '}
                        <EmojiNumber number={2} /> <Emoji>✖️</Emoji>{' '}
                        <EmojiNumber number={1} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        そう。こうやって <EmojiNumber number={3} />{' '}
                        の階乗を自動で計算してくれるんだ。
                      </P>
                      <P>
                        というわけで、
                        <H args={{ name: 'run' }} /> して最後まで見てみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ancc></R.Ancc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        というわけで、先ほどの弁当箱は
                        <H args={{ name: 'run' }} />{' '}
                        すると、以下のように変化することで、
                        <EmojiNumber number={3} />{' '}
                        の階乗を自動で計算してくれるんだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zlfx>
              上の部分を <EmojiNumber number={3} /> に
              <br />
              して
              <H args={{ name: 'run' }} /> すると…
            </R.Zlfx>
            <ExpressionRunnerSeparator />
            <R.Qurt>
              以下のように変化することで、
              <br />
              <EmojiNumber number={3} /> の階乗を計算してくれる
            </R.Qurt>
            <ExpressionRunnerSeparator />
            <R.Gzuj></R.Gzuj>
          </>
        )
      },
      {
        title: (
          <>
            The factorial of <EmojiNumber number={4} />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        では最後に、先ほどの弁当箱を使って{' '}
                        <EmojiNumber number={4} /> の階乗を計算してみよう。
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={4} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={4} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={24} /> になる
                          </>
                        }
                      />
                      <P>
                        先ほどの弁当箱の上の部分を <EmojiNumber number={4} />{' '}
                        にしてみたぞ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <VariableShadeContext.Provider value={{ shadeNonFactorial: true }}>
              <R.Txxw>
                上の部分を <EmojiNumber number={4} /> に
              </R.Txxw>
            </VariableShadeContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        これも
                        <H args={{ name: 'run' }} /> してみよう！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xbki></R.Xbki>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <EmojiNumber number={24} /> になった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        どうだ、
                        <EmojiNumber number={4} /> の階乗を計算できただろう？
                      </P>
                      <EmojiSeparator
                        size="sm"
                        nodes={[
                          <EmojiNumber number={4} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={3} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={2} />,
                          <Emoji>✖️</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                        description={
                          <>
                            <EmojiNumber number={4} /> の階乗。
                            <br />
                            実際に計算すると <EmojiNumber number={24} /> になる
                          </>
                        }
                      />
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>確かに…！</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Yコンビネータのおかげ</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        このように、先ほどの弁当箱は一番上の部分に入れた数字の階乗を計算できるんだ。
                      </P>
                      <P>
                        たとえば <EmojiNumber number={5} /> を入れると、
                        <EmojiNumber number={5} />{' '}
                        の階乗を計算してくれるというわけだ。
                      </P>
                    </>
                  )
                }
              ]}
            />

            <R.Eijx>
              一番上に <EmojiNumber number={5} /> を入れて
              <br />
              <H args={{ name: 'run' }} /> すると…
            </R.Eijx>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="xs"
              nodes={[
                <EmojiNumber number={5} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={4} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={3} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={2} />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <EmojiNumber number={5} /> の階乗を計算してくれる
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
                        つまり、先ほどの弁当箱を使うことで、
                        <HighlightBold>
                          どんな大きな数字の階乗でも計算することができる
                        </HighlightBold>
                        んだ。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kmgw>
              どんな大きな数字の階乗でも
              <br />
              計算することができる！
            </R.Kmgw>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="questionMinusOne" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="horizontalDotDotDot" />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <CustomEmoji type="blankNumber" /> の階乗を計算してくれる
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>なるほど、すごいなあ…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        もちろん、こういった複雑な計算ができるのも、
                        <HighlightBold>Yコンビネータ</HighlightBold>
                        の弁当箱のおかげだ。
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <HighlightBold>Yコンビネータ</HighlightBold>
                            の弁当箱は、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            掛け算を計算できる弁当箱と組み合わせることによって、
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            階乗のように複雑な計算を行うこともできる
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>ということだ。</P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              <HighlightBold>Yコンビネータ</HighlightBold>の弁当箱は…
            </R.Xjzx>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['🍱', '✖️', '🍱']}
              description={
                <>
                  掛け算を計算できる弁当箱と
                  <br />
                  組み合わせることによって…
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              size="sm"
              nodes={[
                <CustomEmoji type="blankNumber" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="questionMinusOne" />,
                <Emoji>✖️</Emoji>,
                <CustomEmoji type="horizontalDotDotDot" />,
                <Emoji>✖️</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <HighlightBold>階乗</HighlightBold>
                  のような複雑な計算もできる！
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>
                        まさに、「
                        <HighlightBold>魔法のYコンビネータ</HighlightBold>
                        」だな！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🧙‍♀️', '✨']}
              description={
                <>
                  <HighlightBold>魔法のYコンビネータ</HighlightBold>
                </>
              }
            />
          </>
        )
      },
      {
        title: <>弁当箱にできない計算はあるの？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        以上をまとめると…
                        <HighlightBold>
                          弁当箱は、計算箱よりもっと複雑な計算ができるということだ
                        </HighlightBold>
                        。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" size="sm" />,
                <Emoji size="semilg">🍱</Emoji>,
                <CustomEmoji type="mathBox" size="sm" />
              ]}
              description={<>弁当箱は、計算箱以上にパワフル！</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        じゃあ逆に質問するけど…
                        <HighlightBold>
                          弁当箱にできない計算はあるのかい？
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>いい質問だな。それは、次のページで説明しよう！</P>
                      <P>
                        <HighlightBold>
                          次が最後のページ、エピローグだ！
                        </HighlightBold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>長かった…やっと終わるのか！じゃあ、先に進もう！</P>
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

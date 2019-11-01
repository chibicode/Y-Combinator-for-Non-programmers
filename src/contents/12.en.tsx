import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Italic,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import Emoji from 'src/components/Emoji'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import CardContent from 'src/components/CardContent'
import { TrueCaseExplanation, FalseCaseExplanation } from 'src/contents/11.en'

export default () => (
  <EpisodeCardList
    cards={[
      {
        title: (
          <>
            Reproducing <H args={{ name: 'conditionFeature' }} />
          </>
        ),
        content: (
          <>
            <P>
              The villagers were trying to{' '}
              <HighlightBold>reproduce</HighlightBold>{' '}
              <H args={{ name: 'conditionFeature' }} /> using a lunchbox.
            </P>
            <R.Rhoa>
              Reproduce <H args={{ name: 'conditionFeature' }} />…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={<>…using a lunchbox</>}
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>Let’s review again:</Bold>{' '}
                        <Highlight>
                          If <InlineBorder type="condition" /> is{' '}
                          <EmojiNumber number={0} />, then the result is{' '}
                          <CustomEmoji type="blankNumberYellow" />…
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TrueCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>And:</Bold>{' '}
                        <Highlight>
                          If <InlineBorder type="condition" /> is NOT{' '}
                          <EmojiNumber number={0} />, then the result is{' '}
                          <CustomEmoji type="blankNumberRed" />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <FalseCaseExplanation />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… how can I <HighlightBold>reproduce</HighlightBold>{' '}
                        this using a lunchbox?
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
        title: <>Saya’s Idea</>,
        content: (
          <>
            <P>As usual, Saya seems to have an idea.</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey, can you take a look at this?</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              Reproduce <H args={{ name: 'conditionFeature' }} />…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> Using a lunchbox.
            </R.Vlhb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wow, thanks Saya. Let’s see if this actually works.</P>
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
            If you use <EmojiNumber number={0} /> for{' '}
            <CustomEmoji type="blankNumberGreen" />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>First:</Bold> Let’s try the case for{' '}
                        <EmojiNumber number={0} />:
                      </P>
                      <Ul>
                        <UlLi>
                          On the bottom section that says{' '}
                          <Highlight>
                            “Lunchbox that can be converted to{' '}
                            <CustomEmoji type="blankNumberGreen" />”
                          </Highlight>
                          ,
                        </UlLi>
                        <UlLi>
                          Let’s put a lunchbox that can be converted to{' '}
                          <EmojiNumber number={0} />.
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Hhjq>
              On the bottom section that says
              <br />
              <Highlight>
                “Lunchbox that can be converted to{' '}
                <CustomEmoji type="blankNumberGreen" />”
              </Highlight>
              …
            </R.Hhjq>
            <ExpressionRunnerSeparator />
            <R.Ycpk>
              Use a lunchbox
              <br />
              that can be converted to <EmojiNumber number={0} />
            </R.Ycpk>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        We will use this lunchbox that can be converted to{' '}
                        <EmojiNumber number={0} />:
                      </P>
                      <R.Elyq>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'f',
                            number: 0
                          }}
                        />
                      </R.Elyq>
                      <P>
                        Let’s try running it.{' '}
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmrp>
              Use a lunchbox
              <br />
              that can be converted to <EmojiNumber number={0} />
            </R.Nmrp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        The result is a lunchbox that can be converted to{' '}
                        <CustomEmoji type="blankNumberYellow" />.
                      </P>
                      <R.Bndi></R.Bndi>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Right. And{' '}
                        <Highlight>
                          this is the same as using{' '}
                          <H args={{ name: 'conditionFeature' }} />
                        </Highlight>
                        , right?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              If we use <H args={{ name: 'conditionFeature' }} />:
            </P>
            <R.Dqwh>
              If we use <EmojiNumber number={0} /> for{' '}
              <CustomEmoji type="blankNumberGreen" />…
            </R.Dqwh>
            <ExpressionRunnerSeparator />
            <R.Vwvb>
              The final result is <CustomEmoji type="blankNumberYellow" />
            </R.Vwvb>
            <P>
              If we use <Emoji>👧🏻</Emoji> Saya’s lunchbox:
            </P>
            <R.Ycpk>
              If we use <EmojiNumber number={0} /> for{' '}
              <CustomEmoji type="blankNumberGreen" />…
            </R.Ycpk>
            <ExpressionRunnerSeparator />
            <R.Bndi>
              The final result is <CustomEmoji type="blankNumberYellow" />
            </R.Bndi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Right, in both cases, if we start with{' '}
                        <EmojiNumber number={0} />, the final result is{' '}
                        <CustomEmoji type="blankNumberYellow" />.
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
            If we use <EmojiNumber number={1} /> for{' '}
            <CustomEmoji type="blankNumberGreen" />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Next:</Bold> Let’s try the case for{' '}
                        <Italic>NOT</Italic> <EmojiNumber number={0} />.{' '}
                        <Highlight>
                          So we’ll use <EmojiNumber number={1} /> instead.
                        </Highlight>
                      </P>
                      <Ul>
                        <UlLi>
                          On the bottom section that says{' '}
                          <Highlight>
                            “Lunchbox that can be converted to{' '}
                            <CustomEmoji type="blankNumberGreen" />”
                          </Highlight>
                          ,
                        </UlLi>
                        <UlLi>
                          Let’s put a lunchbox that can be converted to{' '}
                          <EmojiNumber number={1} />.
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Hhjq>
              On the bottom section that says
              <br />
              <Highlight>
                “Lunchbox that can be converted to{' '}
                <CustomEmoji type="blankNumberGreen" />”
              </Highlight>
              …
            </R.Hhjq>
            <ExpressionRunnerSeparator />
            <R.Psyv>
              Use a lunchbox
              <br />
              that can be converted to <EmojiNumber number={1} />
            </R.Psyv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        We will use this lunchbox that can be converted to{' '}
                        <EmojiNumber number={1} />:
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
                        Let’s try running it.{' '}
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gpat>
              Use a lunchbox
              <br />
              that can be converted to <EmojiNumber number={1} />
            </R.Gpat>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        This time, the result is a lunchbox that can be
                        converted to <CustomEmoji type="blankNumberRed" />.
                      </P>
                      <R.Kiiq></R.Kiiq>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Right. Again,{' '}
                        <Highlight>
                          this is the same as using{' '}
                          <H args={{ name: 'conditionFeature' }} />
                        </Highlight>
                        , right?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              If we use <H args={{ name: 'conditionFeature' }} />:
            </P>
            <R.Glbk>
              If we use <EmojiNumber number={1} /> for{' '}
              <CustomEmoji type="blankNumberGreen" />…
            </R.Glbk>
            <ExpressionRunnerSeparator />
            <R.Rtza>
              The final result is <CustomEmoji type="blankNumberRed" />
            </R.Rtza>
            <P>
              If we use <Emoji>👧🏻</Emoji> Saya’s lunchbox:
            </P>
            <R.Psyv>
              If we use <EmojiNumber number={1} /> for{' '}
              <CustomEmoji type="blankNumberGreen" />…
            </R.Psyv>
            <ExpressionRunnerSeparator />
            <R.Kiiq>
              The final result is <CustomEmoji type="blankNumberRed" />
            </R.Kiiq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Right, in both cases, if we start with{' '}
                        <EmojiNumber number={1} />, the final result is{' '}
                        <CustomEmoji type="blankNumberRed" />.
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
        title: <>So Saya’s right?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        So… it looks like Saya’s lunchbox successfully
                        reproduced <H args={{ name: 'conditionFeature' }} />?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              Reproduce <H args={{ name: 'conditionFeature' }} />…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> Using a lunchbox.
              <br />
              <Bold>Question:</Bold> Is this the correct way to
              <br />
              reproduce it?
            </R.Vlhb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s do a <Italic>final check</Italic>, just in case.
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Final check?</P>
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
            Fill all of <CustomEmoji type="blankNumberRed" />{' '}
            <CustomEmoji type="blankNumberYellow" />{' '}
            <CustomEmoji type="blankNumberGreen" />
          </>
        ),
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>As a final check:</Bold>
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            Let’s fill all of{' '}
                            <CustomEmoji type="blankNumberRed" />{' '}
                            <CustomEmoji type="blankNumberYellow" />{' '}
                            <CustomEmoji type="blankNumberGreen" /> with some
                            random numbers, and…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            See if my lunchbox can <Bold>reproduce</Bold> it.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm, what do you mean by that?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>For example:</P>
                      <Ul>
                        <UlLi>
                          On the following mathbox, if we fill each of{' '}
                          <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" /> with{' '}
                          <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
                          <EmojiNumber number={0} />…
                        </UlLi>
                        <UlLi>
                          Then the final result would be{' '}
                          <EmojiNumber number={1} />.
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              If we fill each of <CustomEmoji type="blankNumberRed" />{' '}
              <CustomEmoji type="blankNumberYellow" />{' '}
              <CustomEmoji type="blankNumberGreen" />…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Zdpf>
              With <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} />
              …then,
              <br />
              Because <InlineBorder type="condition" /> is{' '}
              <EmojiNumber number={0} />…
            </R.Zdpf>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              The final result is <EmojiNumber number={1} />,<br />
              which was in <InlineBorder type="trueCase" />
            </R.Rnug>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          Let’s try the same thing with my lunchbox, and see if
                          the result is also <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                      <Ul>
                        <UlLi>
                          I will also use <EmojiNumber number={2} />{' '}
                          <EmojiNumber number={1} /> <EmojiNumber number={0} />{' '}
                          for <CustomEmoji type="blankNumberRed" />{' '}
                          <CustomEmoji type="blankNumberYellow" />{' '}
                          <CustomEmoji type="blankNumberGreen" />, and…
                        </UlLi>
                        <UlLi>
                          If we run it and the final result is{' '}
                          <EmojiNumber number={1} /> just like the above, it’s a
                          success! <Emoji>🎉</Emoji>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Vlhb>
              <Emoji>👧🏻</Emoji> In Saya’s lunchbox…
            </R.Vlhb>
            <ExpressionRunnerSeparator />
            <R.Jbqw>
              Use <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> for{' '}
              <CustomEmoji type="blankNumberRed" />{' '}
              <CustomEmoji type="blankNumberYellow" />{' '}
              <CustomEmoji type="blankNumberGreen" />
            </R.Jbqw>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                If it becomes a lunchbox that can be
                <br />
                converted to <EmojiNumber size="mdlg" number={1} />, then{' '}
                <HighlightBold>success</HighlightBold> <Emoji>🎉</Emoji>
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see, if this works, we can be pretty sure that Saya’s
                        lunchbox has <HighlightBold>reproduced</HighlightBold>{' '}
                        <H args={{ name: 'conditionFeature' }} /> correctly.
                      </P>
                      <P>Let’s check.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Let’s check!</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        So I filled each of{' '}
                        <CustomEmoji type="blankNumberRed" />{' '}
                        <CustomEmoji type="blankNumberYellow" />{' '}
                        <CustomEmoji type="blankNumberGreen" /> with lunchboxes
                        that can be converted to <EmojiNumber number={2} />{' '}
                        <EmojiNumber number={1} /> <EmojiNumber number={0} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jbqw>
              Use <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} /> for{' '}
              <CustomEmoji type="blankNumberRed" />{' '}
              <CustomEmoji type="blankNumberYellow" />{' '}
              <CustomEmoji type="blankNumberGreen" />
            </R.Jbqw>
            <ExpressionRunnerSeparator />
            <R.Kfru>
              Fill with lunchboxes that can be
              <br />
              converted to <EmojiNumber number={2} /> <EmojiNumber number={1} />{' '}
              <EmojiNumber number={0} />
            </R.Kfru>
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
                    </>
                  )
                }
              ]}
            />
            <R.Svbd></R.Svbd>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        The result is a lunchbox that can be converted to{' '}
                        <EmojiNumber number={1} />.
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
                        The result is <EmojiNumber number={1} />,{' '}
                        <Highlight>
                          which is the same as using{' '}
                          <H args={{ name: 'conditionFeature' }} />
                        </Highlight>
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              If we use <H args={{ name: 'conditionFeature' }} />:
            </P>
            <R.Zdpf></R.Zdpf>
            <ExpressionRunnerSeparator />
            <R.Rnug>
              The result is <EmojiNumber number={1} />
            </R.Rnug>
            <P>
              If we use <Emoji>👧🏻</Emoji> Saya’s lunchbox:
            </P>
            <R.Jbqw></R.Jbqw>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              The result is also <EmojiNumber number={1} />
            </R.Jzwg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        So it’s a success! <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>Yay! Saya, you’re awesome!</P>
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Good job, Saya.</Bold> You’re correct!
                      </P>
                      <P>
                        You have successfully{' '}
                        <HighlightBold>reproduced</HighlightBold>{' '}
                        <H args={{ name: 'conditionFeature' }} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rhoa>
              <H args={{ name: 'conditionFeature', capitalize: true }} />…
            </R.Rhoa>
            <ExpressionRunnerSeparator />
            <R.Vlhb>
              …can be reproduced by
              <br />
              <Emoji>👧🏻</Emoji> Saya’s lunchbox
            </R.Vlhb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Yay!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>So, we now know that:</Bold>{' '}
                        <Highlight>
                          <H
                            args={{
                              name: 'conditionFeature',
                              capitalize: true
                            }}
                          />{' '}
                          can be reproduced using a lunchbox.
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
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  <H
                    args={{
                      name: 'conditionFeature',
                      capitalize: true
                    }}
                  />{' '}
                  <br />
                  can be reproduced using a lunchbox
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
                        to reproduce <H args={{ name: 'conditionFeature' }} />.
                      </Highlight>
                    </P>
                    <R.Fton>
                      If it has this pattern, it can reproduce
                      <br />
                      <H args={{ name: 'conditionFeature' }} />
                    </R.Fton>
                    <P>
                      Here’s another example that can reproduce{' '}
                      <H args={{ name: 'conditionFeature' }} />:
                    </P>
                    <R.Imhz>
                      This can reproduce{' '}
                      <H args={{ name: 'conditionFeature' }} />
                    </R.Imhz>
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
                          <H args={{ name: 'conditionFeature' }} />.
                        </Highlight>{' '}
                        <Emoji>👧🏻</Emoji> Saya’s lunchbox is not the only
                        solution.
                      </P>
                      <P>
                        If you’re curious, press “Continue reading” below. (It’s
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
        title: (
          <>
            But what about{' '}
            <H
              args={{
                name: 'repeatFeature'
              }}
            />
            ?
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
                        I understand that we can reproduce{' '}
                        <H
                          args={{
                            name: 'conditionFeature'
                          }}
                        />
                        , but…
                      </P>
                      <P>
                        <Highlight>
                          <Bold>What we really need to do</Bold> is to reproduce{' '}
                          <H args={{ name: 'repeatFeature' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Bwnp>
                    Repeat <CustomEmoji type="plusOne" />
                    <br />
                    <CustomEmoji type="blankNumber" /> times
                  </R.Bwnp>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
                    size="mdsm"
                    emojis={['❓', '🍱', '❓']}
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Right, but remember what I said on the last page:</P>
                      <P>
                        <Highlight>
                          <H
                            args={{
                              name: 'conditionFeature',
                              capitalize: true
                            }}
                          />{' '}
                          is <Italic>related to</Italic>{' '}
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
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Therefore, because you were able to reproduce{' '}
                        <H args={{ name: 'conditionFeature' }} /> using a
                        lunchbox…
                      </P>
                      <P>
                        <Highlight>
                          You’re now very close to reproducing{' '}
                          <H args={{ name: 'repeatFeature' }} /> as well.
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
                <CustomEmoji type="condition" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="condition" />
              ]}
              description={
                <>
                  Because we reproduced
                  <br />
                  <H args={{ name: 'conditionFeature' }} />
                  <br />
                  using a lunchbox…
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
                  We’re now very close to reproducing
                  <br />
                  <H args={{ name: 'repeatFeature' }} />
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… ok, can you explain more?</P>
                      <P>
                        We don’t even know how these two features are related…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes, I will explain on the next page. Please continue
                        reading.
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

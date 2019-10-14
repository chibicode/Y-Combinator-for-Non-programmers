import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  UlLi,
  Hr,
  Bold,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import BottomRightBadge from 'src/components/BottomRightBadge'
import EmojiSeparator from 'src/components/EmojiSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import InlineRunAndConvertToMathboxButton from 'src/components/InlineRunAndConvertToMathboxButton'
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { WhatIsComputer } from 'src/contents/16.en'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>What we got back is…</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Fine! Since you got the question right, I’ll return your
                        mathboxes!
                      </P>
                      <P>Here it is!</P>
                    </>
                  )
                }
              ]}
            />
            <R.Rviy>
              <Emoji>😈</Emoji> I’ll return this!
            </R.Rviy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>Wait… that’s it?</P>
                      <P>
                        This is a mathbox with{' '}
                        <H args={{ name: 'plusOneFeature' }} />, but…
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        What about the ones with{' '}
                        <H args={{ name: 'minusOneFeature' }} /> or{' '}
                        <H args={{ name: 'repeatFeature' }} />?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Ditw>
                    <H
                      args={{
                        name: 'minusOneFeature',
                        addNewline: true,
                        capitalize: true
                      }}
                    />
                  </R.Ditw>
                </>
              }
              right={
                <>
                  <R.Bwnp>
                    <H
                      args={{
                        name: 'repeatFeature',
                        addNewline: true,
                        capitalize: true
                      }}
                    />
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I can’t return those yet.</P>
                      <P>
                        <Highlight>
                          The only one I’m returning you now is mathboxes with{' '}
                          <H args={{ name: 'plusOneFeature' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>Wait, what? No way!</P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        But… you said, you’ll return our mathboxes if we solve
                        that difficult problem!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>I said I’ll return the mathboxes…</P>
                      <P>
                        <Highlight>
                          But I never promised to return <Italic>all</Italic> of
                          the features!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>Nooo! You’re a liar!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Well, I’m a devil after all.</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>What do we need to do?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        So… what do we need to do to get{' '}
                        <Italic>all of the features</Italic>
                        back?
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Well… on the previous pages, I asked you to{' '}
                        <HighlightBold>reproduce</HighlightBold>{' '}
                        <H args={{ name: 'plusOneFeature' }} /> using a
                        lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lizi>
              Reproduce <EmojiNumber number={1} />{' '}
              <CustomEmoji type="plusOne" /> …
            </R.Lizi>
            <ExpressionRunnerSeparator />
            <R.Plde>Using a lunchbox</R.Plde>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          So, if want <H args={{ name: 'minusOneFeature' }} />{' '}
                          or <H args={{ name: 'repeatFeature' }} /> back…
                        </Highlight>
                      </P>
                      <P>
                        <HighlightBold>
                          You must reproduce them using lunchboxes!
                        </HighlightBold>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Ditw>
                    <H
                      args={{
                        name: 'minusOneFeature',
                        capitalize: true,
                        addNewline: true
                      }}
                    />
                  </R.Ditw>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
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
                  <R.Bwnp>
                    <H
                      args={{
                        name: 'repeatFeature',
                        capitalize: true,
                        addNewline: true
                      }}
                    />
                  </R.Bwnp>
                  <ExpressionRunnerSeparator blank />
                  <R.Ewfr></R.Ewfr>
                  <ExpressionRunnerSeparator />
                  <EmojiSeparator
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
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'scared',
                  children: (
                    <>
                      <P>What!</P>
                      <P>
                        We struggled to reproduce <CustomEmoji type="plusOne" />{' '}
                        using a lunchbox. I don’t know if we can reproduce{' '}
                        <CustomEmoji type="minusOne" /> or <Emoji>🔁</Emoji>…
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>If you can’t do it, you won’t get them back.</P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        But… we need <H args={{ name: 'minusOneFeature' }} />{' '}
                        and <H args={{ name: 'repeatFeature' }} />!
                      </P>
                      <P>
                        Without these features, we won’t be able to calculate
                        subtractions or add/subtract large numbers.
                      </P>
                    </>
                  )
                },
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>
                        We’re so bad at math, so we really need those features
                        back.
                      </P>
                      <P>I guess we have to try!</P>
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
            <H args={{ name: 'minusOneEffect', capitalize: true }} />
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
                        <Bold>Don’t worry:</Bold> Minion will give you a hint on
                        how to reproduce those features using lunchboxes.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes! <H args={{ name: 'lookAtThisBentoBox' }} />.
                      </P>
                      <P>
                        Just like the last time, each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon represents
                        some food item.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents some
              food item
            </R.Pbop>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… it looks really complicated!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This time,{' '}
                        <Highlight>
                          you must fill each{' '}
                          <CustomEmoji type="questionFoodGrey" /> in a way such
                          that, the resulting lunchbox has{' '}
                          <Bold>
                            <H args={{ name: 'minusOneEffect' }} />
                          </Bold>
                          .
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Skoo>
              You must fill each <CustomEmoji type="questionFoodGrey" /> in a
              way
              <br />
              such that, the resulting lunchbox has
              <br />
              <H args={{ name: 'minusOneEffect' }} />.
            </R.Skoo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <H
                          args={{ name: 'minusOneEffect', capitalize: true }}
                        />
                        ?
                      </P>
                      <P>
                        Is that the oppposite of{' '}
                        <H args={{ name: 'plusOneEffect' }} /> we talked about
                        earlier?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes!{' '}
                        <Highlight>
                          If you combine the above lunchbox with a lunchbox that
                          can be converted to <CustomEmoji type="blankNumber" />
                          , and do:
                        </Highlight>
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        <Highlight>
                          The result will be <CustomEmoji type="blankNumber" />{' '}
                          <Emoji>➖</Emoji> <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xqjd>
              Combine a lunchbox that can be converted to{' '}
              <CustomEmoji type="blankNumber" />
              <br />
              with a lunchbox with <H args={{ name: 'minusOneEffect' }} />
            </R.Xqjd>
            <ExpressionRunnerSeparator />
            <R.Gvxz>
              If you{' '}
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox', lowerCase: true }} />
              </Highlight>
              <br />
              it will become <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={1} />
            </R.Gvxz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I see. So this is how you can reproduce{' '}
                        <H args={{ name: 'minusOneFeature' }} /> using a
                        lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              <CustomEmoji type="mathBox" /> A <Bold>mathbox</Bold> that uses{' '}
              <CustomEmoji type="minusOne" /> can be <Bold>reproduced</Bold> by…
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Xqjd>
              <Emoji>🍱</Emoji> A <Bold>lunchbox</Bold> that has{' '}
              <H args={{ name: 'minusOneEffect' }} />.
            </R.Xqjd>
          </>
        )
      },
      {
        title: <>Saya’s lunchbox, again</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'crying',
                  children: (
                    <>
                      <P>But… this lunchbox looks so complicated!</P>
                      <P>
                        I don’t think we can figure out how to fill each{' '}
                        <CustomEmoji type="questionFoodGrey" /> icon…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              Each <CustomEmoji type="questionFoodGrey" /> icon represents some
              food item
            </R.Pbop>
            <P>
              The villagers were struggling, but looks like Saya’s got an idea:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey guys, I think I have an idea.</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>What…? Saya, did you figure it out?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I don’t know if this is correct, but come take a look!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cldb>
              <Emoji>👧🏻</Emoji> Saya’s lunchbox
            </R.Cldb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>Hmm… let’s see if this works.</P>
                      <P>
                        We’ll combine it with a lunchbox that can be converted
                        to <EmojiNumber number={1} />.
                      </P>
                      <R.Dqdv>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 1
                          }}
                        />
                      </R.Dqdv>
                      <P>
                        If it can calculate <EmojiNumber number={1} />{' '}
                        <Emoji>➖</Emoji> <EmojiNumber number={1} />, then it’s
                        a success. <Emoji>🎉</Emoji>
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiNumber number={1} />,
                          <Emoji>➖</Emoji>,
                          <EmojiNumber number={1} />
                        ]}
                      />
                      <P>
                        <Bold>That means:</Bold> We want the final result to be{' '}
                        <EmojiNumber number={0} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ylav>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />…
            </R.Ylav>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              If it becomes <EmojiNumber number={0} size="mdlg" />,{' '}
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
                        Let’s <H args={{ name: 'play', lowerCase: true }} /> it!
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
            <P>
              Let’s run the above lunchbox.{' '}
              <Highlight>
                We’ll <H args={{ name: 'fastForward', lowerCase: true }} /> it
                for a while and pause for an explanation.
              </Highlight>
            </P>
            <P>
              <H
                args={{
                  name: 'pressFastForward',
                  skippableToTheStoppingPoint: true
                }}
              />
            </P>
            <R.Zwut></R.Zwut>
            <BubbleQuotes
              quotes={[
                {
                  type: 'relieved',
                  children: (
                    <>
                      <P>This is so complicated. My eye hurts!</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          You don’t have to follow all the steps!
                        </Highlight>{' '}
                        Just glance over it. Save your eyes!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Take a look!{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        are both <EmojiWithText letter="f" /> now.
                      </P>
                      <P>
                        <Highlight>
                          The <Bold>special rule</Bold> applies, and the{' '}
                          <EmojiWithText letter="f" /> in{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          changes to something else, right?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <Highlight>
                Press <H args={{ name: 'next' }} />
              </Highlight>{' '}
              to apply the <HighlightBold>special rule</HighlightBold>!
            </P>
            <R.Xusi></R.Xusi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The special rule just applied, and the{' '}
                        <EmojiWithText letter="f" /> in{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        became <EmojiWithText letter="a" />.
                      </P>
                      <P>
                        Now, just{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} />{' '}
                        until the end!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lipt />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The resulting lunchbox can be converted to{' '}
                        <EmojiNumber number={0} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zzhq>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'b',
                  number: 0
                }}
              />
            </R.Zzhq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>That means:</Bold>{' '}
                        <Highlight>
                          If you combine Saya’s lunchbox with a lunchbox that
                          can be converted to <EmojiNumber number={1} />, and
                          do:
                        </Highlight>
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>
                        <Highlight>
                          The result will be <EmojiNumber number={0} />, which
                          is <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                          <EmojiNumber number={1} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ylav>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />…
            </R.Ylav>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <R.Jwah>
              The result is <EmojiNumber number={0} />
            </R.Jwah>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Because it calculated <EmojiNumber number={1} />{' '}
                        <Emoji>➖</Emoji> <EmojiNumber number={1} />, it’s a
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
            Can it calculate <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
            <EmojiNumber number={1} />?
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
                        <Bold>Well:</Bold> Just because you were able to
                        calculate <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} />, it doesn’t necessary mean
                        that your lunchbox has{' '}
                        <H args={{ name: 'minusOneEffect' }} />.
                      </P>
                      <P>
                        It needs to be able to subtract 1 from{' '}
                        <Italic>any number</Italic>.
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>That’s a good point…</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        For example, can your lunchbox calculate{' '}
                        <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
                        <EmojiNumber number={1} />?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={2} />,
                <Emoji>➖</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  Can it calculate <EmojiNumber number={2} /> <Emoji>➖</Emoji>{' '}
                  <EmojiNumber number={1} />?
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s try it! Here’s a lunchbox that can be converted to{' '}
                        <EmojiNumber number={2} />.
                      </P>
                      <R.Mzys>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 2
                          }}
                        />
                      </R.Mzys>
                      <P>
                        Let’s combine it with my lunchbox and see if the result
                        is <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Zwvj>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={2} />…
            </R.Zwvj>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              If it becomes <EmojiNumber number={1} size="mdlg" />,{' '}
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
                      <P>Let’s run it! </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            We won’t pause in the middle this time.
                          </Highlight>{' '}
                          It’ll go all the way to the end.
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            You don’t have to follow all the steps!
                          </Highlight>{' '}
                          Just glance over it.
                        </UlLi>
                        <UlLi>
                          It will take some time, so if you can’t wait, press{' '}
                          <Highlight highlightType="pink">
                            <H args={{ name: 'skipToTheEnd' }} /> →
                          </Highlight>
                          .
                        </UlLi>
                      </Ul>
                      <P>
                        <H args={{ name: 'pressFastForward', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ifiq />
            <BubbleQuotes
              quotes={[
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        That means it calculated <EmojiNumber number={2} />{' '}
                        <Emoji>➖</Emoji> <EmojiNumber number={1} />, so it’s a
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
                  type: 'devil',
                  children: (
                    <>
                      <P>Ugh…</P>
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
            <H args={{ name: 'minusOneEffect', capitalize: true }} />
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
                      <P>I didn’t think you’ll get it this easily</P>
                      <P>
                        But <Highlight>Saya is correct!</Highlight> Her lunchbox
                        does have <H args={{ name: 'minusOneEffect' }} />{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Rdae>
              <Emoji>👧🏻</Emoji> Saya’s lunchbox does have
              <br />
              <H args={{ name: 'minusOneEffect' }} />
            </R.Rdae>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Awesome!</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Bold>By the way:</Bold> There are{' '}
                        <Italic>other</Italic> correct answers as well.
                      </P>
                      <P>
                        <Highlight>
                          Any lunchboxes that fit the following pattern have{' '}
                          <H args={{ name: 'minusOneEffect' }} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cbmn>
              Any lunchboxes that fit the following pattern
              <br />
              have <H args={{ name: 'minusOneEffect' }} />
            </R.Cbmn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>I see. Saya’s lunchbox does fit the above pattern.</P>
                      <P>Saya, you’re a genius!</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        No, I’m just lucky. But anyway, we’ve reproduced{' '}
                        <H args={{ name: 'minusOneFeature' }} />!
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
            We’ve reproduced <H args={{ name: 'minusOneFeature' }} />
          </>
        ),
        content: (
          <>
            <P>
              If we were to summarize what we just did in this page, it’ll be
              this:
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  <CustomEmoji type="mathBox" /> A <Bold>mathbox</Bold> that
                  uses <CustomEmoji type="minusOne" /> can be{' '}
                  <Bold>reproduced</Bold> by…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  <Emoji>🍱</Emoji> A <Bold>lunchbox</Bold> that has{' '}
                  <H args={{ name: 'minusOneEffect' }} />.
                </Highlight>
              </UlLi>
            </Ul>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOnePink" />
              ]}
              description={
                <>
                  A <Bold>mathbox</Bold> that uses{' '}
                  <CustomEmoji type="minusOne" /> can be
                  <br />
                  <HighlightBold>reproduced</HighlightBold> by…
                  <br />A <Bold>lunchbox</Bold> that has{' '}
                  <H args={{ name: 'minusOneEffect' }} />.
                </>
              }
            />
            <P>
              For example, take a look at this mathbox that calculates{' '}
              <EmojiNumber number={3} /> <Emoji>➖</Emoji>{' '}
              <EmojiNumber number={1} />{' '}
            </P>
            <R.Xmqp>
              A mathbox that calculates <EmojiNumber number={3} />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={1} />
            </R.Xmqp>
            <P>
              To <HighlightBold>reproduce</HighlightBold> this using a lunchbox,
              we just need:
            </P>
            <Ul>
              <UlLi>
                <Highlight>
                  A lunchbox that can be converted to <EmojiNumber number={3} />
                  , and…
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  A lunchbox with <H args={{ name: 'minusOneEffect' }} />
                </Highlight>{' '}
                (like the one <Emoji>👧🏻</Emoji> Saya came up with).
              </UlLi>
            </Ul>
            <R.Fhkl>
              How to reproduce <EmojiNumber number={3} />{' '}
              <CustomEmoji type="minusOne" /> <br />
              using a lunchbox.
              <br />
              The final result will be <EmojiNumber number={2} />.
            </R.Fhkl>
            <Hr />
            <P>
              <Bold>Summary:</Bold>{' '}
              <Highlight>
                A <Bold>mathbox</Bold> that uses <CustomEmoji type="minusOne" />{' '}
                can be <Bold>reproduced</Bold> by a lunchbox that has{' '}
                <H args={{ name: 'minusOneEffect' }} />.
              </Highlight>
            </P>
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOnePink" />
              ]}
              description={
                <>
                  A <Bold>mathbox</Bold> that uses{' '}
                  <CustomEmoji type="minusOne" /> can be
                  <br />
                  <HighlightBold>reproduced</HighlightBold> by…
                  <br />A <Bold>lunchbox</Bold> that has{' '}
                  <H args={{ name: 'minusOneEffect' }} />.
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
                        Just like the last problem, this problem was very hard.
                        We didn’t expect you to answer it.
                      </P>
                      <P>
                        <Highlight>
                          As long as you can look at the answer and understand
                          why it’s correct, you’ll be fine.
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
        type: 'sideNote',
        title: (
          <>
            Side Note: Does this have anything to do with computer science or Y
            combinator?
          </>
        ),
        preview: {
          content: (
            <>
              <P>
                <Bold>You might be wondering:</Bold>{' '}
                <Highlight>
                  “I understand the puzzles, but does it have anything to do
                  with <Bold>Y combinator</Bold> or{' '}
                  <Bold>computer science</Bold>?”
                </Highlight>
              </P>
              <EmojiSeparator
                emojis={['💻', '🤔', '💻']}
                description={
                  <>
                    Does it have anything to do with
                    <br />
                    <Bold>Y combinator</Bold> or <Bold>computer science</Bold>?
                  </>
                }
              />
              <P>
                <Bold>First, about Y combinator:</Bold> You’ll learn about Y
                combinator on the advanced levels, which will start from the
                next page.
              </P>
              <P>
                <Bold>Spoiler:</Bold>{' '}
                <Highlight>
                  Y combinator is actually a special kind of a lunchbox.
                </Highlight>{' '}
                You’ll soon find out what that means!
              </P>
              <EmojiSeparator
                emojis={['❓', '🍱', '❓']}
                description={
                  <>
                    <Bold>Y combinator</Bold> is actually
                    <br />
                    <Italic>a special kind of a lunchbox</Italic>
                  </>
                }
              />
              <P>
                <Bold>Next, about computer science:</Bold> You’ll learn about
                the relationship between the lunchboxes and computer science
                after we’re done with the advanced levels.
              </P>
              <P>
                However,{' '}
                <Highlight>
                  if you want to know more now, press “Continue reading about
                  computer science” below.
                </Highlight>{' '}
                Otherwise, you should keep reading instead.
              </P>
            </>
          ),
          text: <>Continue reading about computer science</>
        },
        content: (
          <>
            <Hr />
            <WhatIsComputer />
            <Hr />
            <P>
              Now, let’s talk about <CustomEmoji type="mathBox" /> mathboxes and{' '}
              <Emoji>🍱</Emoji> lunchboxes.
            </P>
            <P>
              <Bold>
                <CustomEmoji type="mathBox" /> Mathboxes are also computers:
              </Bold>{' '}
              Mathboxes can compute basic additions and subtractions. So, we can
              say that they’re a computer, too.
            </P>
            <EmojiSeparator
              nodes={[
                <Emoji>➕</Emoji>,
                <CustomEmoji type="mathBox" />,
                <Emoji>➖</Emoji>
              ]}
              description={
                <>
                  <CustomEmoji type="mathBox" /> Mathboxes are also computers
                </>
              }
            />
            <P>
              <Bold>
                <Emoji>🍱</Emoji> 弁当箱も計算機(コンピュータ)かもしれない:
              </Bold>{' '}
              では、弁当箱はどうでしょう？ここまで見てきたところ、弁当箱は工夫することで、「1を足す」ことと「1を引く」ことができます。ということは、
              <Highlight>弁当箱も「計算機(コンピュータ)」</Highlight>
              なのかもしれません。
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <Emoji>🍱</Emoji> 弁当箱も
                  <br />
                  計算機(コンピュータ)かもしれない
                </>
              }
            />
            <P>
              ここで重要なポイントなのですが、
              <Highlight>
                実はこの弁当箱、今から80年以上も前に、
                <Bold>とある研究の研究対象になっていた</Bold>のです。
              </Highlight>
              それは計算機にまつわる研究で、後のコンピュータサイエンスの発展に大きな影響を与えました。
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🍱', '👨🏻‍🦳']}
              description={
                <>
                  弁当箱は、今から80年以上も前に
                  <br />
                  計算機にまつわる研究の研究対象になっていた
                </>
              }
            />
            <P>
              <Bold>
                これ以上のことは、上級編をすべて終えたときにお伝えします。
              </Bold>
              とりあえず今のところは、
            </P>
            <Ul>
              <UlLi>
                <Highlight>「コンピュータ＝計算機」であり、</Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  弁当箱は昔、計算機にまつわる研究の対象となっていて、
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  その研究が、後のコンピュータサイエンスの発展に大きな影響を与えた
                </Highlight>
              </UlLi>
            </Ul>
            <P>
              ということだけ頭に入れておいてください！<Emoji>😉</Emoji>
            </P>
          </>
        )
      },
      {
        title: <>中級はここまで！</>,
        content: (
          <>
            <EmojiSeparator emojis={['🎉', '🤗', '🎉']} />
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        どうだ、「
                        <H args={{ name: 'minusOneFeature' }} />
                        」も、弁当箱で再現したぞ！(やったのは俺らじゃなくて{' '}
                        <Emoji>👧🏻</Emoji> サヤちゃんだけど…)
                      </P>
                      <P>
                        約束通り、「
                        <H args={{ name: 'minusOneFeature' }} />
                        」がある計算箱も返してもらう！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>ぐぬぬ…では、返してやろう！</P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やったー！<Emoji>🎉</Emoji> <Emoji>🎉</Emoji>{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              「<H args={{ name: 'minusOneFeature' }} />
              」も返してもらった！
            </R.Ditw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        しかし、
                        <Highlight>
                          「<H args={{ name: 'repeatFeature' }} />
                          」がある計算箱は、まだ返すわけにはいかないな。返してほしかったら、これらも弁当箱で再現してみるんだな！
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
                    <CustomEmoji type="plusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Bwnp>
                </>
              }
              right={
                <>
                  <R.Ewfr>
                    <CustomEmoji type="minusOne" /> を{' '}
                    <CustomEmoji type="blankNumber" /> 回<br />
                    繰り返す
                  </R.Ewfr>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        難しそう…しかし、こっちには <Emoji>👧🏻</Emoji>{' '}
                        サヤちゃんがいる！彼女ならなんとかしてくれるはずだ！
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        <Highlight>ちなみに、中級編はここまでだ。</Highlight>
                        決着は、次からはじまる上級編でつけよう！
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>よーし、望むところだ！上級編へ進もう！</P>
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

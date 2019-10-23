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
import EmojiWithText from 'src/components/EmojiWithText'
import Emoji from 'src/components/Emoji'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import CardContent from 'src/components/CardContent'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import { WhatIsComputer } from 'src/contents/16.en'

export default () => (
  <EpisodeCardList
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
            <R.Rviy>
              Reproduce <H args={{ name: 'plusOneFeature' }} />…
            </R.Rviy>
            <ExpressionRunnerSeparator />
            <R.Eweo>Using a lunchbox</R.Eweo>
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
            A hint for reproducing{' '}
            <H args={{ name: 'minusOneFeature', capitalize: true }} />
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
                        Yes. Let me give you a hint for reproducing{' '}
                        <H args={{ name: 'minusOneFeature' }} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              <H args={{ name: 'minusOneFeature' }} />
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Jfgb></R.Jfgb>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        To reproduce <H args={{ name: 'minusOneFeature' }} />{' '}
                        using a lunchbox,{' '}
                        <Highlight>
                          you need to fill each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon on the
                          following lunchbox with a specific pattern.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Pbop>
              If you fill each <CustomEmoji type="questionFoodGrey" /> icon
              <br />
              with a specific pattern, you can
              <br />
              reproduce <H args={{ name: 'minusOneFeature' }} />
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
                        Right. If you do it correctly, you can use it to
                        subtract <EmojiNumber number={1} /> from a number:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xqjd>
              Combine with a lunchbox
              <br />
              that can be converted to <CustomEmoji type="blankNumber" />…
            </R.Xqjd>
            <ExpressionRunnerSeparator />
            <R.Gvxz>
              If you <H args={{ name: 'run' }} /> it,
              <br />
              it will become a lunchbox
              <br />
              that can be converted to <CustomEmoji type="blankNumber" />{' '}
              <Emoji>➖</Emoji> <EmojiNumber number={1} />
            </R.Gvxz>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Now,{' '}
                        <Highlight>
                          try to guess what goes in each{' '}
                          <CustomEmoji type="questionFoodGrey" /> icon!
                        </Highlight>
                      </P>
                    </>
                  )
                },
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
          </>
        )
      },
      {
        title: <>Saya’s lunchbox, again</>,
        content: (
          <>
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
                      <P>
                        Hmm… I don’t think Saya’s going to be correct twice in a
                        row, but let’s try anyway.
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Ok. Let’s first combine it with a lunchbox that can be
                        converted to <EmojiNumber number={1} />!
                      </P>
                      <P>
                        <Highlight>
                          If the result is <EmojiNumber number={0} />, that
                          means it correctly calculates{' '}
                          <EmojiNumber number={1} /> <Emoji>➖</Emoji>{' '}
                          <EmojiNumber number={1} />, right?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hiag>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={1} />…
            </R.Hiag>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              If it becomes a lunchbox that can be
              <br />
              converted to <EmojiNumber number={0} size="mdlg" />,{' '}
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
                        Let’s run it with this lunchbox that can be converted to{' '}
                        <EmojiNumber number={1} />!
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
                      <P>Here’s what happens if you combine them:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Sldg>
              Combine with a lunchbox
              <br />
              that can be converted to <EmojiNumber number={1} />
            </R.Sldg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'smile',
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
            <P>
              Let’s run the above lunchbox.{' '}
              <Highlight>
                We’ll <H args={{ name: 'run', lowerCase: true }} /> it for a
                while and pause for an explanation.
              </Highlight>
            </P>
            <P>
              <H
                args={{
                  name: 'pressRun',
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
                        Now, let’s <H args={{ name: 'run', lowerCase: true }} />{' '}
                        it until the end!
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
                        So, by using <Emoji>👧🏻</Emoji> Saya’s lunchbox,
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            A lunchbox that can be converted to{' '}
                            <EmojiNumber number={1} />…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Becomes a lunchbox that can be converted to{' '}
                            <EmojiNumber number={0} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
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
            <R.Jwah>
              The result is a lunchbox that can be
              <br />
              converted to <EmojiNumber number={0} />
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
                        that your lunchbox has reproduced{' '}
                        <H args={{ name: 'minusOneFeature' }} />.
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
            <R.Gqct>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={2} />…
            </R.Gqct>
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
                      <P>Let’s combine it with my lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Dtle>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={2} />…
            </R.Dtle>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Ok, let’s <H args={{ name: 'run', lowerCase: true }} />{' '}
                        it!
                      </P>
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
                            “<H args={{ name: 'skipToTheEnd' }} /> →”
                          </Highlight>
                          .
                        </UlLi>
                      </Ul>
                      <P>
                        <H args={{ name: 'pressRun', girl: true }} />
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
                        So, by using <Emoji>👧🏻</Emoji> Saya’s lunchbox,
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            A lunchbox that can be converted to{' '}
                            <EmojiNumber number={2} />…
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
            <R.Gqct>
              Combine <Emoji>👧🏻</Emoji> Saya’s lunchbox with
              <br />
              a lunchbox that can be converted to <EmojiNumber number={2} />…
            </R.Gqct>
            <ExpressionRunnerSeparator />
            <R.Jzwg>
              The result is a lunchbox that can be
              <br />
              converted to <EmojiNumber number={1} />
            </R.Jzwg>
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
                      <P>Grr…</P>
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
            We reproduced{' '}
            <H args={{ name: 'minusOneFeature', capitalize: true }} />!
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
                        does reproduce <H args={{ name: 'minusOneFeature' }} />!{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              <H args={{ name: 'minusOneFeature', capitalize: true }} /> can be
              <br />
              reproduced…
            </R.Ditw>
            <ExpressionRunnerSeparator />
            <R.Bgko>
              Using <Emoji>👧🏻</Emoji> Saya’s lunchbox!
            </R.Bgko>
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
                  type: 'thinking',
                  children: (
                    <>
                      <P>Wow… Saya, you’re a genius!</P>
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
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  計算箱の「
                  <H args={{ name: 'minusOneFeature' }} />
                  」は、
                  <br />
                  弁当箱で「<HighlightBold>再現</HighlightBold>
                  」することができる
                </>
              }
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <CustomEmoji type="minusOne" />,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="minusOne" />
              ]}
              description={
                <>
                  A mathbox that uses <H args={{ name: 'minusOneFeature' }} />
                  <br />
                  can be <HighlightBold>“reproduced”</HighlightBold> using a
                  lunchbox.
                </>
              }
            />
            <R.Cbmn>
              Any lunchboxes that have the following pattern
              <br />
              have <H args={{ name: 'minusOneEffect' }} />
            </R.Cbmn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Note:</Bold> Just like the last problem, this
                        problem was very hard. We didn’t expect you to answer
                        it.
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
                        to reproduce <H args={{ name: 'minusOneFeature' }} />.
                      </Highlight>
                    </P>
                    <R.Cbmn>
                      If it has this pattern, it can reproduce
                      <br />
                      <H args={{ name: 'minusOneFeature' }} />
                    </R.Cbmn>
                    <P>
                      Here’s another example that can reproduce{' '}
                      <H args={{ name: 'minusOneFeature' }} />:
                    </P>
                    <R.Onyr>
                      This can reproduce{' '}
                      <H args={{ name: 'minusOneFeature' }} />
                    </R.Onyr>
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
                          <H args={{ name: 'minusOneFeature' }} />.
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
        title: <>That’s it for the intermediate levels!</>,
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
                        Hey devil, we’ve reproduced{' '}
                        <H args={{ name: 'minusOneFeature' }} /> using a
                        lunchbox!
                      </P>
                      <P>
                        (Although it was <Emoji>👧🏻</Emoji> Saya who did all the
                        work…)
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Grr…!</P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        As promised, give us{' '}
                        <H args={{ name: 'minusOneFeature' }} /> back!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Fine, I will give it back to you!</P>
                    </>
                  )
                },
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        Yay! <Emoji>🎉</Emoji> <Emoji>🎉</Emoji>{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ditw>
              We got <H args={{ name: 'minusOneFeature' }} /> back!
            </R.Ditw>
            <BubbleQuotes
              quotes={[
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        Well, but{' '}
                        <Highlight>
                          I won’t give you back{' '}
                          <H args={{ name: 'repeatFeature' }} /> yet.
                        </Highlight>
                      </P>
                      <P>
                        If you want it back, you must reproduce it using a
                        lunchbox too!
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
            <BubbleQuotes
              quotes={[
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Seems difficult…. But we have <Emoji>👧🏻</Emoji> Saya on
                        our side! She’ll be able to solve it for sure!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>
                        We’ll see. By the way, we’re now done with the
                        intermediate levels.
                      </P>
                      <P>
                        <Highlight>
                          Let’s move on to the advanced levels next!
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>Alright, let’s do it!</P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
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
              </P>
            </>
          ),
          text: <>Continue reading about computer science</>,
          afterText: (
            <>
              <P>
                Otherwise, you should keep reading instead by pressing this
                button:
              </P>
              <NextLessonButton />
            </>
          )
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
              say that they’re computers, too.
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
                <Emoji>🍱</Emoji> Lunchboxes might be computers too?
              </Bold>{' '}
              How about lunchboxes? It seems so far that lunchboxes can add and
              subtract 1.{' '}
              <Highlight>
                That means lunchboxes might be computers, too.
              </Highlight>
            </P>
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <Emoji>🍱</Emoji> Lunchboxes might be computers too?
                </>
              }
            />
            <P>
              <Bold>In fact:</Bold> We’ll soon learn that lunchboxes are indeed
              computers. Furthermore,{' '}
              <Highlight>
                Lunchboxes were actually a topic of computer science research
                more than 80 years ago.
              </Highlight>{' '}
              This research was influential and became a foundation of modern
              computer science.
            </P>
            <EmojiSeparator
              emojis={['🧑🏻', '🍱', '👨🏻‍🦳']}
              description={
                <>
                  Lunchboxes were a topic of
                  <br />
                  computer science research
                  <br />
                  more than 80 years ago.
                </>
              }
            />
            <P>
              <Bold>This is all we can say now.</Bold> We’ll talk more in detail
              after we’re done with the advanced levels. For now, just keep the
              following in mind <Emoji>😉</Emoji>:
            </P>
            <Ul>
              <UlLi>
                <Highlight>A computer is a computer device.</Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  Lunchboxes were a topic of computer science research more than
                  80 years ago.
                </Highlight>
              </UlLi>
              <UlLi>
                <Highlight>
                  That research was influential and became a foundation of
                  modern computer science.
                </Highlight>
              </UlLi>
            </Ul>
            <P>Ok, let’s go to the advanced levels!</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

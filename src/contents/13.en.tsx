import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Italic
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import InlineBorder from 'src/components/InlineBorder'
import * as R from 'src/components/Runners'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>Things will get harder</>,
        content: (
          <>
            <P>
              <Bold>Warning:</Bold> From this page, things will get much harder.
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
          </>
        )
      },
      {
        title: <>A very complicated lunchbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let me give you a hint to reproduce{' '}
                        <H args={{ name: 'repeatFeature' }} /> using a lunchbox!
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
                      <P>Let’s take a look at this lunchbox:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>A complicated lunchbox</R.Bnyo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>This looks really complicated…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Now, here’s a question:</Bold> What happens when
                        you <H args={{ name: 'run' }} /> it?
                      </P>
                    </>
                  )
                },
                {
                  type: 'sad',
                  children: (
                    <>
                      <P>
                        Well… there’s no way I can figure it out in my head.
                        It’s too complicated!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>I figured it out!</Bold> I think the result will
                        be a lunchbox that can be converted to{' '}
                        <EmojiNumber number={4} />.
                      </P>
                      <R.Ldcq>
                        <Emoji>👧🏻</Emoji> I think the result will be <br />a
                        lunchbox that can be converted to{' '}
                        <EmojiNumber number={4} />!
                      </R.Ldcq>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes! Correct!</Bold> Saya, You’re exactly right!{' '}
                        <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        What? How is it possible that you figured it out so
                        quickly?
                      </P>
                      <P>Saya, did you solve it all in your head?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Not really. Actually, <Italic>I used a trick.</Italic>{' '}
                        Let me explain!
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
        title: <>Replace each section: Phase 1</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>First:</Bold>{' '}
                        <Highlight>
                          Take a look at the <Bold>top section</Bold>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ywpq>
              Take a look at the <Bold>top section</Bold>
            </R.Ywpq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Oh! The top section is actually a lunchbox that can be
                        converted to <EmojiNumber number={3} />!
                      </P>
                      <R.Ayrl>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'i',
                            number: 3
                          }}
                        />
                      </R.Ayrl>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Yes! So we’ll{' '}
                        <Highlight>
                          replace this section with <EmojiNumber number={3} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Uwgj>
              Replace the top section with <EmojiNumber number={3} />
            </R.Uwgj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Second:</Bold>{' '}
                        <Highlight>
                          Take a look at the <Bold>middle-right section</Bold>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Itis>Take a look at the middle-right section</R.Itis>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        The middle-right section is actually a lunchbox that can
                        be converted to <EmojiNumber number={2} />!
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
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Yes! So we’ll{' '}
                        <Highlight>
                          replace this section with <EmojiNumber number={2} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Wgby>
              Replace the middle-right section with <EmojiNumber number={2} />
            </R.Wgby>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>I see…!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Replace each section: Phase 2</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Now, <Highlight>take a look at this section.</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Poha>Take a look at this section</R.Poha>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        This looks like <Emoji>👧🏻</Emoji> Saya’s lunchbox that
                        can <HighlightBold>reproduce</HighlightBold>{' '}
                        <H args={{ name: 'plusOneFeature' }} />!
                      </P>
                      <R.Vcqp>
                        <Emoji>👧🏻</Emoji> Saya’s lunchbox that can{' '}
                        <HighlightBold>reproduce</HighlightBold>
                        <br />
                        <H args={{ name: 'plusOneFeature' }} />
                      </R.Vcqp>
                      <ExpressionRunnerSeparator />
                      <R.Qwzy></R.Qwzy>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Exactly! So we’ll{' '}
                        <Highlight>
                          replace this with <CustomEmoji type="plusOne" />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cpdy>
              Replace with <CustomEmoji type="plusOne" />
            </R.Cpdy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… it’s getting much simpler!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Replace each section: Phase 3</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Finally,{' '}
                        <Highlight>
                          take a look at the <Bold>bottom-right</Bold> section!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Lxgj>Take a look at the bottom-right section</R.Lxgj>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Oh! This looks exactly like the one we saw on the last
                        page: a lunchbox that reproduces{' '}
                        <H args={{ name: 'conditionFeature' }} />.
                      </P>
                      <R.Vlhb>
                        A lunchbox that reproduces
                        <br />
                        <H args={{ name: 'conditionFeature' }} />
                      </R.Vlhb>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Exactly! So{' '}
                        <Highlight>
                          we’ll replace it with{' '}
                          <H args={{ name: 'conditionFeature' }} />.
                        </Highlight>
                      </P>
                      <R.Rhoa>
                        Replace with <H args={{ name: 'conditionFeature' }} />
                      </R.Rhoa>
                      <P>Here’s how we’re going to replace it:</P>
                      <R.Wenx>Before (the bottom right section)</R.Wenx>
                      <ExpressionRunnerSeparator />
                      <R.Crvj>After (the bottom right section)</R.Crvj>
                      <P>After the replacement, it’ll look like this:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Awbq>
              After replacing with
              <br />
              <H args={{ name: 'conditionFeature' }} />
            </R.Awbq>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wow, it’s much simpler now!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Let’s run it</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s run it!{' '}
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gmzn />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>From here, it’s simple.</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            Because <InlineBorder type="condition" /> is{' '}
                            <EmojiNumber number={3} />, which is not zero…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          The result will be what’s in{' '}
                          <InlineBorder type="falseCase" />, which is{' '}
                          <EmojiNumber number={3} />{' '}
                          <CustomEmoji type="plusOne" />.
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
            <R.Uiwl />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        See, the final result is <EmojiNumber number={4} />!
                      </P>
                      <R.Kizi>
                        <Emoji>👧🏻</Emoji> The final result is{' '}
                        <EmojiNumber number={4} />
                      </R.Kizi>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… I see!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>What if we run it directly?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        <Bold>But… isn’t that cheating?</Bold>
                      </P>
                      <P>
                        Saya’s strategy was to replace each section with the
                        corresponding mathbox features…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hkfq>
              <Emoji>👧🏻</Emoji> Saya replaced each section…
            </R.Hkfq>
            <ExpressionRunnerSeparator />
            <R.Zcwk>…with the corresponding mathbox features</R.Zcwk>
            <ExpressionRunnerSeparator />
            <R.Kizi>
              And the result was <EmojiNumber number={4} />
            </R.Kizi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        <Bold>But I’m wondering:</Bold>{' '}
                        <Highlight>
                          Would the result also be <EmojiNumber number={4} /> if
                          we <H args={{ name: 'run', lowerCase: true }} /> the
                          original lunchbox directly?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>
              <Emoji>🍱</Emoji> If we{' '}
              <H args={{ name: 'run', lowerCase: true }} />
              <br />
              the original lunchbox directly…
            </R.Bnyo>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              Would the result also be
              <br />
              <EmojiNumber size="semilg" number={4} />?
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let’s check!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Run it directly</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s <H args={{ name: 'run', lowerCase: true }} /> the
                        original lunchbox directly!
                      </P>
                      <Ul>
                        <UlLi>
                          There are so many steps, so we’ll{' '}
                          <Highlight>
                            increase the playback speed to 3x.
                          </Highlight>{' '}
                          <Emoji>⏩</Emoji> <Emoji>⏩</Emoji> <Emoji>⏩</Emoji>
                        </UlLi>
                        <UlLi>
                          While it’s running, we’ll{' '}
                          <Highlight>dim the lunchbox</Highlight> so it’s easier
                          for your eyes.
                        </UlLi>
                        <UlLi>
                          If you can’t wait, press{' '}
                          <Highlight highlightType="pink">
                            “<H args={{ name: 'skipToTheEnd' }} /> →”
                          </Highlight>
                          .
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Ynoy></R.Ynoy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        The final result is a lunchbox that can be converted to{' '}
                        <EmojiNumber number={4} />.
                      </P>
                      <R.Ifqp>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'b',
                            number: 4
                          }}
                        />
                      </R.Ifqp>
                      <P>
                        If you{' '}
                        <H
                          args={{ name: 'convertToMathbox', lowerCase: true }}
                        />
                        , the result will be <EmojiNumber number={4} />.
                      </P>
                      <R.Kizi></R.Kizi>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>This result is the same as Saya’s method!</P>
                      <P>
                        <Bold>So…</Bold> I guess Saya’s method was right…?
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Yes!</Bold> Saya’s method was a correct approach.
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
        title: <>What we learned so far</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let’s step back and review what we learned so far.</P>
                      <P>
                        Saya solved the problem by{' '}
                        <Italic>
                          replacing parts of a lunchbox with the corresponding
                          mathbox features
                        </Italic>
                        , like this:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ykqf>
              Replacing parts of a lunchbox… <Emoji>🍱</Emoji>
            </R.Ykqf>
            <ExpressionRunnerSeparator />
            <R.Ifpo>
              With the corresponding mathbox features{' '}
              <CustomEmoji type="mathBox" />
            </R.Ifpo>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>As we saw earlier:</Bold>{' '}
                        <Highlight>
                          If you replace parts of a lunchbox with the
                          corresponding mathbox features, the result will be the
                          same.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <Emoji>🍱</Emoji>,
                <CustomEmoji type="singleArrow" />,
                <CustomEmoji type="mathBox" />
              ]}
              description={
                <>
                  If you replace parts of a lunchbox
                  <br />
                  with the corresponding mathbox features
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>the result will be the same.</Highlight>
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Right. That’s what happened on the earlier example - the
                        result was <EmojiNumber number={4} /> in either case.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes. And I{' '}
                        <Highlight>
                          <Bold>encourage</Bold> you to replace parts of
                          lunchbox as much as possible
                        </Highlight>{' '}
                        to make it simpler. (like <Emoji>👧🏻</Emoji> Saya did)
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bnyo>
              <Emoji>🍱</Emoji> This lunchbox is complex, so…
            </R.Bnyo>
            <ExpressionRunnerSeparator />
            <R.Ghwe>
              <Bold>Simplify it</Bold> by replacing each section
              <br />
              with the corresponding mathbox feature
            </R.Ghwe>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                In either case,
                <br />
                the final result will be{' '}
                <EmojiNumber size="semilg" number={4} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
          </>
        )
      },
      {
        title: (
          <>
            How this is related to reproducing{' '}
            <H args={{ name: 'repeatFeature' }} />?
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
                        <Bold>But I still don’t get it:</Bold>{' '}
                        <Highlight>
                          How is this related to <Bold>reproducing</Bold>{' '}
                          <H args={{ name: 'repeatFeature' }} /> using a
                          lunchbox?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
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
            <P>It looks like Saya noticed something:</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Hey, I think I figured out how to{' '}
                        <HighlightBold>reproduce</HighlightBold>{' '}
                        <H args={{ name: 'repeatFeature' }} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['🔁', '👧🏻', '🔁']}
              description={
                <>
                  I think I figured out how to
                  <br />
                  reproduce <H args={{ name: 'repeatFeature' }} />!
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
                  type: 'saya',
                  children: (
                    <>
                      <P>Yes, let me explain!</P>
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
            Repeat <CustomEmoji type="plusOne" /> three times
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
                        <Bold>First:</Bold> Take a look at this mathbox with{' '}
                        <H args={{ name: 'repeatFeature' }} />!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              A lunchbox with <H args={{ name: 'repeatFeature' }} />
            </R.Qycx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        This mathbox repeats <CustomEmoji type="plusOne" />{' '}
                        three times, and calculates <EmojiNumber number={3} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx></R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Jwce>
              Repeats <CustomEmoji type="plusOne" /> three times
            </R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I figured out how to reproduce this behavior using a
                        lunchbox!
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Reall? Please show me how!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Add more stuff to the previous lunchbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Here’s the lunchbox we used earlier on this page.</P>
                      <P>
                        We’ll make some changes to this lunchbox to reproduce{' '}
                        <H args={{ name: 'repeatFeature' }} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ghwe>The lunchbox we used earlier on this page</R.Ghwe>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I just added some items to this lunchbox. The{' '}
                        <Highlight>yellow section</Highlight> is the added
                        items.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cefx>
              The <Highlight>yellow section</Highlight> is the added items.
            </R.Cefx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… ok, whats’s so special about this lunchbox?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>It turns out that:</P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If you <H args={{ name: 'run', lowerCase: true }} />{' '}
                            the above lunchbox,
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            It behaves exactly like the earlier mathbox that has{' '}
                            <H args={{ name: 'repeatFeature' }} />.
                          </Highlight>
                        </UlLi>
                      </Ul>
                      <P>Therefore, it becomes like this:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Kjba>
              If you <H args={{ name: 'run', lowerCase: true }} /> this
              lunchbox…
            </R.Kjba>
            <ExpressionRunnerSeparator />
            <R.Jwce>
              Just like using <H args={{ name: 'repeatFeature' }} />,
              <br />
              Repeat <CustomEmoji type="plusOne" /> three times on{' '}
              <EmojiNumber number={2} />
            </R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Wow, really?</P>
                      <P>
                        If that’s true, that means we’ve reproduced{' '}
                        <H args={{ name: 'repeatFeature' }} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              This mathbox with <H args={{ name: 'repeatFeature' }} />…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Kjba>
              Can be reproduced by this lunchbox?<Emoji>🤔</Emoji>
            </R.Kjba>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>But does it really work?</P>
                      <P>
                        <Highlight>
                          We need to{' '}
                          <H args={{ name: 'run', lowerCase: true }} /> it to
                          see if it’s correct.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Yes, let’s <H args={{ name: 'run', lowerCase: true }} />{' '}
                        on the next page to check!
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

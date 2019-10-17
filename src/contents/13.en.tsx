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
import InlineRunAndConvertToMathboxButton from 'src/components/InlineRunAndConvertToMathboxButton'
import * as R from 'src/components/Runners'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import NextLessonButton from 'src/components/NextLessonButton'

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
                        you do this:
                      </P>
                      <InlineRunAndConvertToMathboxButton />
                      <P>…on the above lunchbox?</P>
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
                        be <EmojiNumber number={4} />.
                      </P>
                      <R.Kizi>
                        <Emoji>👧🏻</Emoji> I think the result will be{' '}
                        <EmojiNumber number={4} />
                      </R.Kizi>
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
                            letter: 'l',
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
                      <R.Vhte>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'g',
                            number: 2
                          }}
                        />
                      </R.Vhte>
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
                        This looks like a lunchbox that has{' '}
                        <H args={{ name: 'plusOneEffect' }} />!
                      </P>
                      <R.Vcqp>
                        A lunchbox with
                        <br />
                        <H args={{ name: 'plusOneEffect' }} />
                      </R.Vcqp>
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
                      <R.Ruou>
                        Replace with <H args={{ name: 'conditionFeature' }} />
                      </R.Ruou>
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
                        <H args={{ name: 'pressFastForward', girl: true }} />
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
                        <H args={{ name: 'pressFastForward', girl: true }} />
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
                          we <H args={{ name: 'play', lowerCase: true }} /> the
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
              <H args={{ name: 'play', lowerCase: true }} />
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
                        Let’s{' '}
                        <H args={{ name: 'fastForward', lowerCase: true }} />{' '}
                        the original lunchbox directly!
                      </P>
                      <Ul>
                        <UlLi>
                          There are so many steps, so we’ll{' '}
                          <Highlight>
                            change the playback speed to 3x.
                          </Highlight>{' '}
                          <Emoji>⏩</Emoji> <Emoji>⏩</Emoji> <Emoji>⏩</Emoji>
                        </UlLi>
                        <UlLi>
                          While playing, we’ll{' '}
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
                      <R.Gmgs>
                        <H
                          args={{
                            name: 'canBeConvertedCaption',
                            letter: 'j',
                            number: 4
                          }}
                        />
                      </R.Gmgs>
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
        title: <>Add more stuff to the previous lunchbox</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Here’s the lunchbox we used earlier on this page:</P>
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
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>Let’s run it!</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s <H args={{ name: 'play', lowerCase: true }} />{' '}
                        this lunchbox!
                      </P>
                      <P>
                        (
                        <Highlight>
                          I will show all the steps on the next page, but we’ll
                          skip that for now
                        </Highlight>
                        .)
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressPlay', capitalize: true }} />
            </P>
            <R.Htir></R.Htir>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        The result is <EmojiNumber number={5} />.
                      </P>
                      <P>
                        Because we didn’t see all the steps, I don’t know how it
                        became <EmojiNumber number={5} /> though…
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Yes, I will show all the steps on the next page.</P>
                      <P>
                        <Bold>For now:</Bold> Just assume that the result is{' '}
                        <EmojiNumber number={5} />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Ok, but why is this lunchbox important?</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>It can do additions?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        それよりも重要なのは、
                        <Highlight>
                          この <EmojiNumber number={5} /> って、
                          <HighlightBold>
                            実行前の弁当箱に入っていた、
                            <EmojiNumber number={2} /> と{' '}
                            <EmojiNumber number={3} /> を足した数
                          </HighlightBold>
                          だよね？
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Peiy>
              実行前の弁当箱に入っていた、
              <br />
              <EmojiNumber number={2} /> と <EmojiNumber number={3} /> を足すと{' '}
              <EmojiNumber number={5} /> になる
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>確かにそうだな…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ということは、この弁当箱は <EmojiNumber number={2} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={3} />{' '}
                        を計算しているんじゃないかな？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Peiy>
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算している？
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        つまり…<HighlightBold>足し算ができる</HighlightBold>
                        ってこと？
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
              <P>
                <Bold>補足:</Bold> 「
                <Highlight>
                  この弁当箱、本当に実行すると <EmojiNumber number={5} />{' '}
                  になるの？
                </Highlight>
                」と疑われているかもしれませんが、ご安心ください！
                <Highlight>
                  次のページでなぜ実行すると <EmojiNumber number={5} />{' '}
                  になるのかを詳細に説明します
                </Highlight>
                ので、とりあえず読み進めてみてください！
              </P>
            </>
          )
        }
      },
      {
        title: <>繰り返しを再現できた？</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>待てよ、そういえば…</P>
                      <P>
                        以下のように計算箱の「
                        <H args={{ name: 'repeatFeature' }} />
                        」を使っても、
                        <Highlight>
                          <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
                          <EmojiNumber number={3} /> を計算できる
                        </Highlight>
                        よね。
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              計算箱の「
              <H args={{ name: 'repeatFeature' }} />
              」を使うと
              <br />
              <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={3} /> を計算できる
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Jwce></R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        ということは…サヤちゃんの弁当箱は、上の「
                        <H args={{ name: 'repeatFeature' }} />
                        」を再現できているのか…？
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              この「
              <H args={{ name: 'repeatFeature' }} />
              」を使った計算箱は…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Peiy>
              以下の弁当箱で再現できている？<Emoji>🤔</Emoji>
            </R.Peiy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        もしそうなら…「
                        <H args={{ name: 'repeatFeature' }} />
                        」を弁当箱で再現できた、ということになるぞ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <CustomEmoji type="mathBox" />,
                <Emoji>🔁</Emoji>,
                <CustomEmoji type="doubleArrow" />,
                <Emoji>🍱</Emoji>,
                <Emoji>🔁</Emoji>
              ]}
              description={
                <>
                  「<H args={{ name: 'repeatFeature' }} />
                  」を
                  <br />
                  弁当箱で再現できたかも？
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
                        では、本当に再現できたのかどうか、次のページで確かめてみるね！先に進むよ！
                      </P>
                    </>
                  )
                }
              ]}
            />
            <NextLessonButton />
          </>
        ),
        footer: {
          content: (
            <>
              <P>
                <Bold>補足:</Bold>{' '}
                <Highlight>
                  もし上に書いてあることが腑に落ちなくてもご心配なく！
                </Highlight>
                次のページで詳細に解説します。
              </P>
            </>
          )
        }
      }
    ]}
  />
)

import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  HighlightBold,
  Highlight,
  Ul,
  UlLi,
  Bold,
  Hr
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import Emoji from 'src/components/Emoji'
import EmojiNumber from 'src/components/EmojiNumber'
import CardContent from 'src/components/CardContent'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import InlineBorder from 'src/components/InlineBorder'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'
import VariableShadeContext from 'src/components/VariableShadeContext'

const ThreeStepsSummary = () => (
  <>
    <R.Kjba>
      If you <H args={{ name: 'run', lowerCase: true }} /> this lunchbox…
    </R.Kjba>
    <ExpressionRunnerSeparator />
    <R.Jwce>
      Just like <H args={{ name: 'repeatFeature' }} />,<br />
      it repeats <CustomEmoji type="plusOne" /> three times on{' '}
      <EmojiNumber number={2} />
    </R.Jwce>
    <ExpressionRunnerSeparator />
    <R.Seie>
      And calculates <EmojiNumber number={2} /> <Emoji>➕</Emoji>{' '}
      <EmojiNumber number={3} />
    </R.Seie>
  </>
)

export default () => (
  <EpisodeCardList
    cards={[
      {
        type: 'summary',
        title: <>The most complicated lunchbox you’ve seen</>,
        content: (
          <>
            <P>
              In this page, I’ll show you the most complicated lunchbox you’ve
              seen.
            </P>
            <EmojiSeparator
              emojis={['⚠️', '🍱', '⚠️']}
              description={<>The most complicated lunchbox you’ve seen</>}
            />
            <P>
              It will be hard, but{' '}
              <Highlight>you don’t need to understand everything.</Highlight>{' '}
              Even if you don’t fully get it, you should keep reading!
            </P>
            <EmojiSeparator
              emojis={['✨', '🤗', '✨']}
              description={<>You don’t need to understand everything!</>}
            />
          </>
        )
      },
      {
        title: (
          <>
            <P>On the previous page…</P>
          </>
        ),
        content: (
          <>
            <P>
              On the previous page, <Emoji>👧🏻</Emoji> Saya came up with a
              lunchbox that might be able to{' '}
              <HighlightBold>reproduce</HighlightBold>{' '}
              <H args={{ name: 'repeatFeature' }} />.
            </P>
            <R.Qycx>
              Can we reproduce this lunchbox that uses
              <br />
              <H args={{ name: 'repeatFeature' }} />…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Kjba>
              …with this lunchbox? <Emoji>🤔</Emoji>
            </R.Kjba>
            <P>
              According to <Emoji>👧🏻</Emoji> Saya,{' '}
              <Highlight>
                the above lunchbox will repeat <CustomEmoji type="plusOne" />{' '}
                three times
              </Highlight>
              , just like when using <H args={{ name: 'repeatFeature' }} />.
            </P>
            <ThreeStepsSummary />
            <P>Let’s see if this is actually true!</P>
          </>
        )
      },
      {
        title: <>What steps does it go through?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        On this page, we’ll{' '}
                        <H args={{ name: 'run', lowerCase: true }} /> the
                        lunchbox that I came up with, and{' '}
                        <Highlight>see what steps it goes through</Highlight>.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kjba>
              When we <H args={{ name: 'run', lowerCase: true }} /> this…
            </R.Kjba>
            <ExpressionRunnerSeparator />
            <EmojiSeparator
              emojis={['❓', '🍱', '❓']}
              description={
                <>
                  <HighlightBold>What steps does it go through…</HighlightBold>
                </>
              }
            />
            <ExpressionRunnerSeparator />
            <R.Jwce>
              …before it becomes the same as
              <br />
              <H args={{ name: 'repeatFeature' }} />?
            </R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie></R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Yeah, we need to see{' '}
                        <Highlight>
                          what happens in between the beginning and the end!
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
        title: <>Let’s run it!</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Ok, let’s do it!</P>
                      <Ul>
                        <UlLi>
                          We’ll pause several times in between for explanation.
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            You don’t have to follow all the steps with your
                            eyes!
                          </Highlight>{' '}
                          Just glance over it. Save your eyes!
                        </UlLi>
                        <UlLi>
                          If you can’t wait, press{' '}
                          <Highlight highlightType="pink">
                            “<H args={{ name: 'skipToTheStoppingPoint' }} /> →”
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
            <R.Ovua></R.Ovua>
            <BubbleQuotes
              quotes={[
                {
                  type: 'tired',
                  children: (
                    <>
                      <P>It’s so complicated…</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>It’s not too bad if you look carefully.</P>
                      <P>
                        Take a look at this{' '}
                        <HighlightBold>yellow section</HighlightBold> in the
                        middle!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bras>
              Take a look at this <HighlightBold>yellow section</HighlightBold>
              <br />
              in the middle
            </R.Bras>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Let’s ignore this section for now.</Bold> We don’t
                        need to worry about it until later.
                      </P>
                      <P>
                        We’ll replace it with the <Bold>“Ignore for Now”</Bold>{' '}
                        sign:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Yyfi>Ignore the yellow section for now</R.Yyfi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>It’s much simpler now!</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Now, let’s take a look at{' '}
                        <H
                          args={{
                            name: 'conditionSectionName',
                            type: 'condition'
                          }}
                        />{' '}
                        of <H args={{ name: 'conditionFeature' }} />:
                      </P>
                      <P>
                        <Highlight>
                          Because <InlineBorder type="condition" /> is{' '}
                          <EmojiNumber number={3} />, which is NOT zero, it
                          chooses <InlineBorder type="falseCase" />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Avsl></R.Avsl>
            <ExpressionRunnerSeparator />
            <R.Fkqu></R.Fkqu>
            <ExpressionRunnerSeparator />
            <R.Wjwu></R.Wjwu>
          </>
        )
      },
      {
        title: <>The second time</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          We’ll now un-ignore the section we ignored earlier:
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ngxc>Un-ignore the section we ignored earlier</R.Ngxc>
            <ExpressionRunnerSeparator />
            <R.Fkvy></R.Fkvy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s continue!{' '}
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Dwmc></R.Dwmc>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Oh!{' '}
                        <Highlight>
                          This yellow section is exactly the same as the one we
                          ignored last time!
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Tfsi>
              <Highlight>
                This yellow section is exactly the same
                <br />
                as the last time
              </Highlight>
            </R.Tfsi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Yes:</Bold>{' '}
                        <Highlight>
                          This yellow section has appeared again.
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm… interesting!</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>Let’s ignore this section again:</Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fkat>Let’s ignore the yellow section again</R.Fkat>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I’ve highlighted the differences from the last time in{' '}
                        <Highlight>yellow</Highlight> below. Take a look!
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              leftVerticalIndent
              forceVariableSize="md"
              left={
                <>
                  <R.Amjx>
                    <HighlightBold>Last time</HighlightBold>
                  </R.Amjx>
                </>
              }
              right={
                <>
                  <R.Qgau>
                    <HighlightBold>This time</HighlightBold>
                  </R.Qgau>
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
                        Pay attention to these two differences in particular:
                      </P>
                      <Ul>
                        <UlLi>
                          <InlineBorder type="condition" /> was{' '}
                          <EmojiNumber number={3} /> before, but{' '}
                          <Highlight>
                            it’s now <EmojiNumber number={2} />.
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            There’s now a <CustomEmoji type="plusOne" /> icon on
                            the bottom.
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
                      <P>
                        I see, the number in <InlineBorder type="condition" />{' '}
                        went from <EmojiNumber number={3} /> to{' '}
                        <EmojiNumber number={2} />.
                      </P>
                      <P>
                        So <Highlight>it decreased by one</Highlight>.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={3} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />
              ]}
              description={
                <>
                  The number in <InlineBorder type="condition" /> decreased by
                  one
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>Maybe:</Bold>{' '}
                        <Highlight>
                          If we continue, maybe the number in{' '}
                          <InlineBorder type="condition" /> will become{' '}
                          <EmojiNumber number={1} /> next?
                        </Highlight>
                      </P>
                      <P>Let’s see if that turns out to be true!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>The third time </>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s continue! We’ll un-ignore the section we ignored
                        earlier.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fkat>Un-ignore the section we ignored earlier</R.Fkat>
            <ExpressionRunnerSeparator />
            <R.Tfsi></R.Tfsi>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Uwyn></R.Uwyn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Again:</Bold>{' '}
                        <Highlight>
                          The middle section is exactly the same as before.
                        </Highlight>{' '}
                        So we’ll ignore this again:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jjet>
              <Highlight>
                This yellow section is exactly the same
                <br />
                as the last time…
              </Highlight>
            </R.Jjet>
            <ExpressionRunnerSeparator />
            <R.Cyyp>So let’s ignore it for now</R.Cyyp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Let’s compare it with the previous iteration again!</P>
                      <P>
                        I’ve highlighted the differences from the last time in{' '}
                        <Highlight>yellow</Highlight> below.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              leftVerticalIndent
              forceVariableSize="sm"
              left={
                <>
                  <R.Kosw>
                    <HighlightBold>Last time</HighlightBold>
                  </R.Kosw>
                </>
              }
              right={
                <>
                  <R.Ysxf>
                    <HighlightBold>This time</HighlightBold>
                  </R.Ysxf>
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
                        Pay attention to these two differences in particular:
                      </P>
                      <Ul>
                        <UlLi>
                          <InlineBorder type="condition" /> was{' '}
                          <EmojiNumber number={2} /> before, but{' '}
                          <Highlight>
                            it’s now <EmojiNumber number={1} />.
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Another <CustomEmoji type="plusOne" /> icon was
                            added to the bottom.
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
                      <P>I’m seeing the pattern…</P>
                      <P>
                        <Highlight>
                          The number in <InlineBorder type="condition" /> has
                          changed from <EmojiNumber number={3} /> to{' '}
                          <EmojiNumber number={2} /> to{' '}
                          <EmojiNumber number={1} />. It’s decreasing by one.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={3} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={2} />,
                <CustomEmoji type="singleArrow" />,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  <InlineBorder type="condition" /> is decreasing by one
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>So, maybe:</Bold>{' '}
                        <Highlight>
                          <InlineBorder type="condition" /> will become{' '}
                          <EmojiNumber number={0} /> next?
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
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
        title: <>The fourth and the last time</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>We’re almost done!</Bold> I just un-ignored the
                        section we ignored earlier.
                      </P>
                      <P>
                        <H args={{ name: 'pressRun', girl: true }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Snlf></R.Snlf>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Again:</Bold>{' '}
                        <Highlight>
                          The middle section is exactly the same as before.
                        </Highlight>{' '}
                        So we’ll ignore this again:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Gngw>
              <Highlight>
                This yellow section is exactly the same
                <br />
                as the last time…
              </Highlight>
            </R.Gngw>
            <ExpressionRunnerSeparator />
            <R.Toem>So let’s ignore it for now</R.Toem>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Let’s compare it with the previous iteration again!</P>
                      <P>
                        I’ve highlighted the differences from the last time in{' '}
                        <Highlight>yellow</Highlight> below.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              leftVerticalIndent
              forceVariableSize="xs"
              left={
                <>
                  <R.Mibj>
                    <HighlightBold>Last time</HighlightBold>
                  </R.Mibj>
                </>
              }
              right={
                <>
                  <R.Kdgv>
                    <HighlightBold>This time</HighlightBold>
                  </R.Kdgv>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          <InlineBorder type="condition" /> finally became{' '}
                          <EmojiNumber number={0} />!
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
                        <Bold>Exactly!</Bold> So it now chooses{' '}
                        <InlineBorder type="trueCase" />, which is{' '}
                        <EmojiNumber number={2} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Afoh></R.Afoh>
            <ExpressionRunnerSeparator />
            <R.Msrk>
              It chooses <InlineBorder type="trueCase" />,<br />
              which is <EmojiNumber number={2} />
            </R.Msrk>
            <ExpressionRunnerSeparator />
            <R.Jwce></R.Jwce>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        Wow! It’s now exactly like using{' '}
                        <H args={{ name: 'repeatFeature' }} />!
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Yes. It then calculates <EmojiNumber number={2} />{' '}
                        <CustomEmoji type="plusOne" />{' '}
                        <CustomEmoji type="plusOne" />{' '}
                        <CustomEmoji type="plusOne" />, so…
                      </P>
                      <P>
                        <Highlight>
                          The final result is <EmojiNumber number={5} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jwce></R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie>
              The final result is <EmojiNumber number={5} />
            </R.Seie>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>That’s it! Let’s summarize what we’ve seen so far!</P>
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
        title: <>Summary of the steps it goes through</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Here’s what happened:</P>
                    </>
                  )
                }
              ]}
            />
            <R.Kjba></R.Kjba>
            <ExpressionRunnerSeparator />
            <R.Amjx>
              After some more steps,
              <br />
              <InlineBorder type="condition" /> is <EmojiNumber number={3} />
            </R.Amjx>
            <ExpressionRunnerSeparator />
            <R.Kosw>
              After some more steps,
              <br />
              <InlineBorder type="condition" /> is <EmojiNumber number={2} />
            </R.Kosw>
            <ExpressionRunnerSeparator />
            <R.Mibj>
              After some more steps,
              <br />
              <InlineBorder type="condition" /> is <EmojiNumber number={1} />
            </R.Mibj>
            <ExpressionRunnerSeparator />
            <R.Nphi>
              After some more steps,
              <br />
              <InlineBorder type="condition" /> is <EmojiNumber number={0} />
            </R.Nphi>
            <ExpressionRunnerSeparator />
            <R.Msrk>
              It chooses <InlineBorder type="trueCase" />,<br />
              which is <EmojiNumber number={2} />
            </R.Msrk>
            <ExpressionRunnerSeparator />
            <R.Jwce>
              It repeats <CustomEmoji type="plusOne" /> three times…
            </R.Jwce>
            <ExpressionRunnerSeparator />
            <R.Seie>
              The final result is <EmojiNumber number={5} />
            </R.Seie>
          </>
        )
      },
      {
        title: (
          <>
            Reproducing <H args={{ name: 'repeatFeature' }} />
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
                        <Bold>So, we confirmed that:</Bold>{' '}
                        <Highlight>
                          If you run the original lunchbox, it repeats{' '}
                          <CustomEmoji type="plusOne" /> three times on{' '}
                          <EmojiNumber number={2} />.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <ThreeStepsSummary />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Therefore, this is exactly the same as this mathbox that
                        uses <H args={{ name: 'repeatFeature' }} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>Exactly the same as this!</R.Qycx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>So:</Bold>{' '}
                        <Highlight>
                          The above mathbox with{' '}
                          <H args={{ name: 'repeatFeature' }} /> can be{' '}
                          <HighlightBold>reproduced</HighlightBold> by the
                          lunchbox we used on this page.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              We can reproduce this mathbox with
              <br />
              <H args={{ name: 'repeatFeature' }} />…
            </R.Qycx>
            <ExpressionRunnerSeparator />
            <R.Kjba>…using this lunchbox!</R.Kjba>
          </>
        )
      },
      {
        type: 'summary',
        title: (
          <>
            Reproducing any mathbox with <H args={{ name: 'repeatFeature' }} />
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
                        <Bold>Now, here’s the important part.</Bold> This
                        mathbox has:
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            <EmojiNumber number={2} /> on the top, and…
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            <CustomEmoji type="plusOne" /> is repeated{' '}
                            <EmojiNumber number={3} /> times.
                          </Highlight>
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <R.Qycx>
              <EmojiNumber number={2} /> on the top, and
              <br />
              <CustomEmoji type="plusOne" /> is repeated{' '}
              <EmojiNumber number={3} /> times
            </R.Qycx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        To reproduce this,{' '}
                        <Highlight>
                          we needed to put <EmojiNumber number={2} /> and{' '}
                          <EmojiNumber number={3} /> on these two places:
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <VariableShadeContext.Provider value={{ shadeNonNumbers: true }}>
              <R.Peiy>
                We needed to put <EmojiNumber number={2} /> and{' '}
                <EmojiNumber number={3} />
                <br />
                on these two places:
              </R.Peiy>
            </VariableShadeContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Now, here’s a question:</Bold>{' '}
                        <Highlight>
                          How can we reproduce this mathbox that calculates{' '}
                          <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmbt>How can we reproduce this mathbox?</R.Nmbt>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        <Bold>Maybe:</Bold>{' '}
                        <Highlight>
                          We change the previous lunchbox to use{' '}
                          <Emoji>🅰️</Emoji> and <Emoji>🅱️</Emoji> instead
                        </Highlight>
                        , like this?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <VariableShadeContext.Provider value={{ shadeNonNumbers: true }}>
              <R.Bxuv>
                Put <Emoji>🅰️</Emoji> and <Emoji>🅱️</Emoji> in these two places
              </R.Bxuv>
            </VariableShadeContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Exactly!</Bold> That’s how you reproduce{' '}
                        <Emoji>🅰️</Emoji> <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>{' '}
                        using a lunchbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nmbt>
              We can reproduce this mathbox with
              <br />
              <H args={{ name: 'repeatFeature' }} />…
            </R.Nmbt>
            <ExpressionRunnerSeparator />
            <R.Bxuv>…using this lunchbox!</R.Bxuv>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>For example:</Bold> If you wanted to reproduce
                        this mathbox that calculates <EmojiNumber number={4} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={6} />…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Owpg>
              To reproduce this mathbox
              <br />
              that calculates <EmojiNumber number={4} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={6} />…
            </R.Owpg>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>You can reuse the earlier lunchbox:</Bold>{' '}
                        <Highlight>
                          Just use <EmojiNumber number={4} /> for{' '}
                          <Emoji>🅰️</Emoji> and <EmojiNumber number={6} /> for{' '}
                          <Emoji>🅱️</Emoji>.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Bxuv>
              Instead of <Emoji>🅰️</Emoji> and <Emoji>🅱️</Emoji>…
            </R.Bxuv>
            <ExpressionRunnerSeparator />
            <R.Hafp>
              Use <EmojiNumber number={4} /> and <EmojiNumber number={6} />
            </R.Hafp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        If you <H args={{ name: 'run', lowerCase: true }} /> the
                        above lunchbox, it will repeat{' '}
                        <CustomEmoji type="plusOne" /> six times on{' '}
                        <EmojiNumber number={4} />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Hafp>
              If you <H args={{ name: 'run', lowerCase: true }} /> this…
            </R.Hafp>
            <ExpressionRunnerSeparator />
            <R.Sskt>
              It repeats <CustomEmoji type="plusOne" /> six times on{' '}
              <EmojiNumber number={4} />
            </R.Sskt>
            <ExpressionRunnerSeparator />
            <R.Mbje>
              And calculates <EmojiNumber number={4} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={6} />
            </R.Mbje>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
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
        title: (
          <>
            We reproduced <H args={{ name: 'repeatFeature' }} />!
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
                        <Bold>Congratulations!</Bold> You reproduced{' '}
                        <H args={{ name: 'repeatFeature' }} /> successfully!{' '}
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
                  We reproduced <H args={{ name: 'repeatFeature' }} />!{' '}
                  <Emoji>🎉</Emoji>
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
                        <Bold>By the way, here’s an additional question:</Bold>
                      </P>
                      <P>
                        Can you figure out how to reproduce this mathbox that{' '}
                        <Highlight>
                          repeats <CustomEmoji type="minusOne" /> instead of{' '}
                          <CustomEmoji type="plusOne" />?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jaqs>
              How can we reproduce this mathbox
              <br />
              that repeats <CustomEmoji type="minusOne" /> instead of{' '}
              <CustomEmoji type="plusOne" />?
            </R.Jaqs>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Bold>Hmm… maybe:</Bold>{' '}
                        <Highlight>
                          We use the same lunchbox as the last time, but use{' '}
                          <CustomEmoji type="minusOne" /> instead of{' '}
                          <CustomEmoji type="plusOne" />?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <VariableShadeContext.Provider
              value={{ shadeNonHighlightedFunc: true }}
            >
              <R.Irsu>
                Instead of <CustomEmoji type="plusOne" />…
              </R.Irsu>
              <ExpressionRunnerSeparator />
              <R.Zkon>
                Use <CustomEmoji type="minusOne" />
              </R.Zkon>
            </VariableShadeContext.Provider>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Emoji>🎉</Emoji> <Bold>Correct!</Bold> By doing so, you
                        can reproduce a mathbox that repeats{' '}
                        <CustomEmoji type="minusOne" />:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Jaqs>You can reproduce this mathbox…</R.Jaqs>
            <ExpressionRunnerSeparator />
            <R.Zkon>…with this lunchbox!</R.Zkon>
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
        type: 'summary',
        title: <>Y Combinator</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… it’s very interesting that we can reproduce{' '}
                        <H args={{ name: 'repeatFeature' }} /> using a lunchbox.
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yeah. And now, I want to talk about an important point.
                      </P>
                      <P>
                        Take a look at the{' '}
                        <HighlightBold>bottom half</HighlightBold> of the
                        lunchbox that reproduces <Emoji>🅰️</Emoji>{' '}
                        <Emoji>➕</Emoji> <Emoji>🅱️</Emoji>:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xhul>
              Take a look at the <HighlightBold>bottom half</HighlightBold> of
              the lunchbox
              <br />
              that reproduces <Emoji>🅰️</Emoji> <Emoji>➕</Emoji>{' '}
              <Emoji>🅱️</Emoji>:
            </R.Xhul>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Now, take a look at the{' '}
                        <HighlightBold>bottom half</HighlightBold> of the
                        lunchbox that reproduces <Emoji>🅰️</Emoji>{' '}
                        <Emoji>➖</Emoji> <Emoji>🅱️</Emoji>:
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Anzh>
              Take a look at the <HighlightBold>bottom half</HighlightBold> of
              the lunchbox
              <br />
              that reproduces <Emoji>🅰️</Emoji> <Emoji>➖</Emoji>{' '}
              <Emoji>🅱️</Emoji>:
            </R.Anzh>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Notice that:</Bold>{' '}
                        <Highlight>
                          Both cases have this bottom half in common.
                        </Highlight>
                      </P>
                      <R.Xjzx>
                        Both cases have this bottom half in common
                      </R.Xjzx>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>Right, but what’s so special about it?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>In fact:</Bold>{' '}
                        <Highlight>
                          This bottom half is what makes reproducing{' '}
                          <H args={{ name: 'repeatFeature' }} /> possible.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              This bottom half is what makes reproducing
              <br />
              <H args={{ name: 'repeatFeature' }} /> possible
            </R.Xjzx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        I see. So this lunchbox is necessary for reproducing{' '}
                        <H args={{ name: 'repeatFeature' }} />…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Yes. And this lunchbox has a{' '}
                        <HighlightBold>special name</HighlightBold>, actually.
                      </P>
                    </>
                  )
                },
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>What’s the name?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        It’s called “<HighlightBold>Y Combinator</HighlightBold>
                        ”.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Xjzx>
              This lunchbox is called “
              <HighlightBold>Y Combinator</HighlightBold>”
            </R.Xjzx>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        “<HighlightBold>Y Combinator</HighlightBold>”? That’s a
                        strange name…
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        But it’s really interesting to think that,{' '}
                        <Highlight>
                          such a simple lunchbox (with only two kinds of food
                          items) can reproduce{' '}
                          <H args={{ name: 'repeatFeature' }} />.
                        </Highlight>
                      </P>
                      <P>
                        <Bold>It’s like magic!</Bold>
                      </P>
                    </>
                  )
                },
                {
                  type: 'smile',
                  children: (
                    <>
                      <P>Indeed!</P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              emojis={['✨', '🧙‍♀️', '✨']}
              description={
                <>
                  <HighlightBold>Y Combinator</HighlightBold> is magical!
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
                        Any lunchbox that has the following pattern is a{' '}
                        <HighlightBold>Y Combinator</HighlightBold>:
                      </Highlight>
                    </P>
                    <R.Rjho>
                      Any lunchbox that has the following pattern is a<br />
                      <HighlightBold>Y Combinator</HighlightBold>
                    </R.Rjho>
                    <P>
                      <Bold>Example:</Bold> This lunchbox is a{' '}
                      <HighlightBold>Y Combinator</HighlightBold>:
                    </P>
                    <R.Beug>
                      This lunchbox is a{' '}
                      <HighlightBold>Y Combinator</HighlightBold>
                    </R.Beug>
                  </>
                }
                preview={{
                  text: <>Continue reading</>,
                  content: (
                    <>
                      <P>
                        <Bold>Note:</Bold> There are other lunchboxes that are
                        called <HighlightBold>“Y Combinator”</HighlightBold>. If
                        you’re curious, press “Continue reading” below! (It’s
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
            Will we get <H args={{ name: 'repeatFeature' }} /> back?
          </>
        ),
        content: (
          <>
            <P>
              After successfully reproducing{' '}
              <H args={{ name: 'repeatFeature' }} />, the villagers are now
              demanding the devil to return it:
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'brave',
                  children: (
                    <>
                      <P>
                        The devil! We reproduced{' '}
                        <H args={{ name: 'repeatFeature' }} /> using a lunchbox!
                      </P>
                      <P>Now, give it back to us!</P>
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
            <P>Will the villagers get it back? Check on the next page!</P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

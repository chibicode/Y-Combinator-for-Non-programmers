import React from 'react'
import EpisodeCardList from 'src/components/EpisodeCardList'
import {
  P,
  Highlight,
  HighlightBold,
  Ul,
  Bold,
  Italic,
  UlLi
} from 'src/components/ContentTags'
import H from 'src/components/H'
import BubbleQuotes from 'src/components/BubbleQuotes'
import EmojiNumber from 'src/components/EmojiNumber'
import EmojiWithText from 'src/components/EmojiWithText'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionRunnerSeparator from 'src/components/ExpressionRunnerSeparator'
import CustomEmoji from 'src/components/CustomEmoji'
import EmojiForLetterWithBottomRightBadgeWrapper from 'src/components/EmojiForLetterWithBottomRightBadgeWrapper'
import EmojiForLetter from 'src/components/EmojiForLetter'
import ExpressionRunnerCaptionOnly from 'src/components/ExpressionRunnerCaptionOnly'
import Emoji from 'src/components/Emoji'
import BottomRightBadge from 'src/components/BottomRightBadge'
import TwoColGrid from 'src/components/TwoColGrid'
import * as R from 'src/components/Runners'
import NextLessonButton from 'src/components/NextLessonButton'

export default () => (
  <EpisodeCardList
    underConstruction
    cards={[
      {
        title: <>Saya’s Question</>,
        content: (
          <>
            <P>Looks like Saya noticed something strange.</P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Hey guys, can you take a look at this?</P>
                      <P>
                        First, this lunchbox can be converted to{' '}
                        <EmojiNumber number={1} />, right?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Cmla>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Cmla>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>Yes, but what about it?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          What do you think happens if I combined it with a
                          lunchbox that has{' '}
                          <H args={{ name: 'plusOneEffect' }} />?
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Nhqo>
              If I combined it with a lunchbox that has
              <br />
              <H args={{ name: 'plusOneEffect' }} />, and…
            </R.Nhqo>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              <Highlight>
                <H args={{ name: 'runAndConvertToMathbox' }} />
              </Highlight>
            </ExpressionRunnerCaptionOnly>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              What happens?
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        Well, because it calculates <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />, the result
                        should be <EmojiNumber number={2} />, right?
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <EmojiNumber number={1} />,
                <Emoji>➕</Emoji>,
                <EmojiNumber number={1} />
              ]}
              description={
                <>
                  The result should be <EmojiNumber number={2} />
                  …?
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Let’s run it to check!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>If you run it…</>,
        content: (
          <>
            <P>
              <H args={{ name: 'pressFastForward', skippable: true }} />
            </P>
            <R.Akik />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Unfortunately:</Bold> I won’t be able to convert
                        this lunchbox into a mathbox.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Auks>Can’t convert this into a mathbox</R.Auks>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Why?:</Bold> Because it doesn’t follow this
                        pattern.
                      </P>
                      <R.Eozk>
                        <H
                          args={{
                            name: 'convertiblePatternCaption',
                            skipFirst: true
                          }}
                        />
                      </R.Eozk>
                      <P>
                        There needs to be exactly one <Emoji>🅱️</Emoji> on the
                        top-right, but there are <Italic>two</Italic> in this
                        case.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Vqwp>
              There needs to be exactly one <Emoji>🅱️</Emoji>
              <br />
              on the top-right, but there are two.
              <br />
              That’s why it cannot be converted to a mathbox.
            </R.Vqwp>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… what’s going on? Last time, we got{' '}
                        <EmojiNumber number={2} />…
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
        title: <>Let’s compare with the last time</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s compare with the last time. Previously, we used
                        the following lunchbox:
                      </P>
                      <P>
                        <Bold>The only difference</Bold>: It has{' '}
                        <EmojiForLetter letter="e" />
                        ’s on the top instead of <EmojiForLetter letter="b" />
                        ’s. Everything else is the same.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <P>
              <H args={{ name: 'pressFastForward' }} />
            </P>
            <R.Exbn>
              <HighlightBold>What used last time:</HighlightBold>
              <br />
              It has <EmojiForLetter letter="e" />
              ’s on top instead of <EmojiForLetter letter="b" />
              ’s.
              <br />
              Everything else is the same.
            </R.Exbn>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        This one did become a lunchbox that can be converted to{' '}
                        <EmojiNumber number={2} />.
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
                  type: 'thinking',
                  children: (
                    <>
                      <P>Hmm, why is there a difference?</P>
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
            If the same item exists in both{' '}
            <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
            <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />, the
            results will differ
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
                      <P>Let me tell you what’s going on.</P>
                      <P>
                        Let’s take a look at the previous example that{' '}
                        <Italic>failed</Italic> to calculate{' '}
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Ybne>
              The example that <Italic>failed</Italic> to calculate
              <br />
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />
            </R.Ybne>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s label each item with{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />
                        ,{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcArg"
                        />
                        ,{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        , or{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcBound"
                        />
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Qlcq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Notice that:</Bold> The{' '}
                        <EmojiWithText letter="b" postfix="es" /> are labeled as
                        either{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        or{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        .
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kwyy>
              The <EmojiWithText letter="b" postfix="es" /> are labeled as
              <br />
              either <BottomRightBadge
                inline
                bottomRightBadgeType="callArg"
              />{' '}
              or <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            </R.Kwyy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Here’s an important point:</Bold>{' '}
                        <Highlight>
                          If the same item exists in both{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          and{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />
                          , then the results change.
                        </Highlight>
                      </P>
                      <P>
                        In this case, <EmojiForLetter letter="b" /> is in both{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        .
                      </P>
                      <P>
                        That’s why it couldn’t calculate{' '}
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  If the same item exists in both{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  ,
                  <br />
                  then the results change.
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>Really? Why does that happen?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let me use an example to explain!</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>A Simple Example</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Here’s a simple example:</P>
                      <Ul>
                        <UlLi>
                          The left lunchbox has different{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          and{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />
                          .
                        </UlLi>
                        <UlLi>
                          The right lunchbox has the same{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          and{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />{' '}
                          (both <EmojiForLetter letter="b" />
                          ).
                        </UlLi>
                      </Ul>
                      <P>Let’s see what happens to each lunchbox!</P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Oukl>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    and{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />
                    <br />
                    are different
                  </R.Oukl>
                  <ExpressionRunnerSeparator />
                  <R.Etae></R.Etae>
                  <ExpressionRunnerSeparator />
                  <R.Jwdn></R.Jwdn>
                  <ExpressionRunnerSeparator />
                  <R.Yabb></R.Yabb>
                  <ExpressionRunnerSeparator />
                  <R.Hbbv>
                    The bottom two
                    <br />
                    are different
                  </R.Hbbv>
                </>
              }
              right={
                <>
                  <R.Rypq>
                    <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                    and{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />
                    <br />
                    are the same
                  </R.Rypq>
                  <ExpressionRunnerSeparator />
                  <R.Wqml></R.Wqml>
                  <ExpressionRunnerSeparator />
                  <R.Abnp></R.Abnp>
                  <ExpressionRunnerSeparator />
                  <R.Osff></R.Osff>
                  <ExpressionRunnerSeparator />
                  <R.Fxok>
                    The bottom two
                    <br />
                    are the same
                  </R.Fxok>
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
                        The bottom two are different on the left, but they’re
                        the same on the right!
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Yes. And if we continue until the end…</P>
                      <Ul>
                        <UlLi>
                          On the left, the <EmojiWithText letter="c" /> (which
                          was{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcBound"
                          />
                          ) will remain.
                        </UlLi>
                        <UlLi>
                          On the right, the <EmojiWithText letter="d" /> (which
                          was{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />
                          ) will remain.
                        </UlLi>
                      </Ul>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Lxhc></R.Lxhc>
                  <ExpressionRunnerSeparator />
                  <R.Nntn></R.Nntn>
                  <ExpressionRunnerSeparator />
                  <R.Yxel></R.Yxel>
                </>
              }
              right={
                <>
                  <R.Hvqy></R.Hvqy>
                  <ExpressionRunnerSeparator />
                  <R.Veft></R.Veft>
                  <ExpressionRunnerSeparator />
                  <R.Bdme></R.Bdme>
                  <ExpressionRunnerSeparator />
                  <R.Ivol></R.Ivol>
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>So this is before and after:</P>
                    </>
                  )
                }
              ]}
            />
            <TwoColGrid
              left={
                <>
                  <R.Oukl>
                    <Bold>Before:</Bold>
                    <br />
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="callArg"
                    />{' '}
                    and{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />
                    <br />
                    are different
                  </R.Oukl>
                  <ExpressionRunnerSeparator />
                  <R.Yxel>
                    <Bold>After:</Bold>
                  </R.Yxel>
                </>
              }
              right={
                <>
                  <R.Rypq>
                    <Bold>Before:</Bold>
                    <br />
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="callArg"
                    />{' '}
                    and{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="funcUnbound"
                    />
                    <br />
                    are the same{' '}
                  </R.Rypq>
                  <ExpressionRunnerSeparator />
                  <R.Ivol>
                    <Bold>After:</Bold>
                  </R.Ivol>
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
                        <Bold>So, hope you understood that:</Bold>{' '}
                        <Highlight>
                          If the same item exists in both{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          and{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />
                          , then the results change.
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <EmojiSeparator
              nodes={[
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <EmojiForLetter letter="b" />,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  If the same item exists in both{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  ,
                  <br />
                  then the results change.
                </>
              }
            />
          </>
        )
      },
      {
        title: <>Back to the original example</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s go back to the previous example that couldn’t
                        calculate <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} />.
                      </P>
                      <P>
                        This failed because <EmojiForLetter letter="b" /> was in
                        both{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        , which caused the result to change.
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Kwyy>
              Couldn’t calculate <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />
              <br />
              because <EmojiForLetter letter="b" /> was in both{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
              <br />
              which caused the result to change.
            </R.Kwyy>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        Hmm… then what should we do in this case? Just give up?
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Let’s not give up! I think there’s a way.</P>
                    </>
                  )
                },
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>But… what can we do?</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        Let’s ask Minion{' '}
                        <Italic>if we can change the rule to fix this.</Italic>
                      </P>
                      <P>
                        <Bold>Minion</Bold>: I’d like to ask you for a favor.{' '}
                        <Highlight>
                          Can we please set up a <Bold>special rule</Bold>?
                        </Highlight>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Special rule?</Bold> What do you mean by that?
                      </P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        I’d like the following{' '}
                        <HighlightBold>special rule</HighlightBold> to apply in
                        cases like this:
                      </P>
                      <Ul>
                        <UlLi>
                          <Highlight>
                            If the same item appears in both{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />{' '}
                            and{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="funcUnbound"
                            />
                            …
                          </Highlight>
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            Change one of them to something different.
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
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <Emoji>🙇🏻‍♀️</Emoji>,
                <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
              ]}
              description={
                <>
                  <Bold>Can we use this special rule:</Bold>
                  <br />
                  If the same item appears in
                  <br />
                  both{' '}
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="callArg"
                  /> and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  ,<br />
                  change one of them to something different.
                </>
              }
            />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Sure, that’s fine!</P>
                    </>
                  )
                },
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>Thank you!</P>
                    </>
                  )
                },
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>What… you can change the rule just like that?</P>
                    </>
                  )
                }
              ]}
            />
          </>
        )
      },
      {
        title: <>The Special Rule</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Let’s use the following special rule:</P>
                      <Ul>
                        <UlLi>
                          If the same item appears in both{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          and{' '}
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="funcUnbound"
                          />
                          …
                        </UlLi>
                        <UlLi>
                          <Highlight>
                            It will automatically change conflicting{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />
                            ’s to something different.
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
                <BottomRightBadge inline bottomRightBadgeType="callArg" />,
                <CustomEmoji type="singleArrow" />,
                <Emoji>❓</Emoji>
              ]}
              description={
                <>
                  If the same item appears in
                  <br />
                  both{' '}
                  <BottomRightBadge
                    inline
                    bottomRightBadgeType="callArg"
                  /> and{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
                  ,<br />
                  <Highlight>
                    it will automatically change
                    <br />
                    conflicting{' '}
                    <BottomRightBadge
                      inline
                      bottomRightBadgeType="callArg"
                    />{' '}
                    to something different.
                  </Highlight>
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
                        つまり、先ほどのように{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        に同じ料理が登場した場合…
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Smdm />
            <BubbleQuotes
              quotes={[
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <HighlightBold>
                          <BottomRightBadge
                            inline
                            bottomRightBadgeType="callArg"
                          />{' '}
                          の <EmojiWithText letter="b" />
                          が自動的に別の料理に変わります。
                        </HighlightBold>
                      </P>
                      <P>
                        <Highlight>
                          何に変わるかについてですが、
                          <HighlightBold>
                            まだ使われていない料理にランダムに変わります
                          </HighlightBold>
                          。ここでは、
                          <EmojiWithText letter="e" /> になりました。
                        </Highlight>
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Niwv />
            <EmojiSeparator
              nodes={[
                <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="callArg">
                  <EmojiForLetter letter="b" />
                </EmojiForLetterWithBottomRightBadgeWrapper>,
                <CustomEmoji type="singleArrow" />,
                <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="callArg">
                  <EmojiForLetter letter="e" />
                </EmojiForLetterWithBottomRightBadgeWrapper>
              ]}
              description={
                <>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> の
                  <EmojiWithText letter="b" /> が、まだ
                  <br />
                  使われていない
                  <EmojiWithText letter="e" /> に変わる
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
                        これで、
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        と{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        が被らなくなった！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        では、最後まで進めてみましょう。
                        <H args={{ name: 'pressFastForward' }} />
                      </P>
                    </>
                  )
                }
              ]}
            />
            <R.Fsgq />
            <BubbleQuotes
              quotes={[
                {
                  type: 'celebrate',
                  children: (
                    <>
                      <P>
                        やった！無事、
                        <EmojiNumber number={2} /> に変換できる弁当箱になった！
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
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        ということは、
                        <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
                        <EmojiNumber number={1} /> を計算できたということだね！
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        その通りです。では、そろそろ今回のまとめに入りましょう！
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
            <H args={{ name: 'summary' }} />
          </>
        ),
        content: (
          <>
            <P>
              前回サヤちゃんが考えた
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱は、
            </P>
            <R.Nvqu>
              <H args={{ name: 'plusOneEffect' }} />
              がある弁当箱
            </R.Nvqu>
            <P>
              次の
              <Highlight>
                <EmojiNumber number={1} /> に変換できる弁当箱
              </Highlight>
              と組み合わせた場合、
            </P>
            <R.Cmla>
              <H
                args={{
                  name: 'canBeConvertedCaption',
                  letter: 'd',
                  number: 1
                }}
              />
            </R.Cmla>
            <P>
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              に同じ料理があり、そのままだと結果が狂ってしまいます。
            </P>
            <R.Kwyy>
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
              の両方に
              <EmojiWithText letter="b" /> がある
            </R.Kwyy>
            <P>しかし、今回から新たに以下の特別ルールが適用されます:</P>
            <Ul>
              <UlLi>
                <Highlight>
                  <BottomRightBadge inline bottomRightBadgeType="callArg" /> と{' '}
                  <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />{' '}
                  に同じ料理が登場したら、
                </Highlight>
              </UlLi>
              <UlLi>
                <HighlightBold>
                  自動的に{' '}
                  <BottomRightBadge inline bottomRightBadgeType="callArg" />{' '}
                  を、まだ使われてない料理にランダムに変える。
                </HighlightBold>
              </UlLi>
            </Ul>
            <R.Niwv />
            <P>
              これにより、正しく <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} /> を計算できるようになります。
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>うーん、この特別ルールは忘れてしまいそうだなあ…</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        ご心配なく！
                        <Highlight>
                          この特別ルールは次のページ以降で登場する弁当箱でも使われますが、
                        </Highlight>
                        <HighlightBold>
                          暗記する必要はありません。
                        </HighlightBold>
                        早送り中に自動で行われますから。
                      </P>
                      <P>
                        なんとなく「
                        <Highlight>こういう法則があるんだな</Highlight>
                        」と思ってくだされば大丈夫です！
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
        title: <>これで完璧！</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        いろいろあったけど、これで、
                        <H args={{ name: 'plusOneEffect' }} />
                        がある弁当箱は完璧にマスターしたぞ！
                      </P>
                      <P>悪魔よ、約束通り計算箱は返してもらう！</P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>うぐぐ…</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              果たして、村人たちは計算箱を取り戻せたのでしょうか？次のページで確かめてみましょう！
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

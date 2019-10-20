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

export const SpecialRule = () => (
  <>
    <Ul>
      <UlLi>
        If the same item appears in both{' '}
        <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
        <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />…
      </UlLi>
      <UlLi>
        <Highlight>
          It will automatically change conflicting{' '}
          <BottomRightBadge inline bottomRightBadgeType="callArg" />
          ’s to something different.
        </Highlight>
      </UlLi>
    </Ul>
  </>
)

export default () => (
  <EpisodeCardList
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
                          <H args={{ name: 'plusOneEffect' }} /> and run it?
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
              <H args={{ name: 'plusOneEffect' }} />…
            </R.Nhqo>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              What happens
              <br />
              when you <H args={{ name: 'run', lowerCase: true }} /> it?
            </ExpressionRunnerCaptionOnly>
            <BubbleQuotes
              quotes={[
                {
                  type: 'roll',
                  children: (
                    <>
                      <P>
                        Well, because it calculates <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />…
                      </P>
                      <P>
                        It should become a lunchbox that can be converted to{' '}
                        <EmojiNumber number={2} />, right?
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
                  Should become a lunchbox
                  <br />
                  that can be converted to <EmojiNumber number={2} />
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
                      <P>Hmm… what’s going on? Last time, it worked…</P>
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
                          Can we please add a <Bold>special rule</Bold>?
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
                <Emoji>👧🏻</Emoji>,
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
                      <P>
                        Let’s add the following{' '}
                        <HighlightBold>special rule:</HighlightBold>
                      </P>
                      <SpecialRule />
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
                        So, if there’s the same item in both{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />
                        … (in this case: <EmojiForLetter letter="b" />)
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
                        <Bold>Because of this special rule:</Bold> The{' '}
                        <EmojiWithText letter="b" postfix="es" /> in{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        will now become something else.
                      </P>
                      <EmojiSeparator
                        nodes={[
                          <EmojiForLetterWithBottomRightBadgeWrapper bottomRightBadgeType="callArg">
                            <EmojiForLetter letter="b" />
                          </EmojiForLetterWithBottomRightBadgeWrapper>,
                          <CustomEmoji type="singleArrow" />,
                          <Emoji>❓</Emoji>
                        ]}
                        description={
                          <>
                            The <EmojiWithText letter="b" postfix="es" /> in{' '}
                            <BottomRightBadge
                              inline
                              bottomRightBadgeType="callArg"
                            />{' '}
                            <br />
                            will now become something else.
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
                      <P>What does it become then?</P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Highlight>
                          It will turn into{' '}
                          <Bold>a random food item that’s not yet used</Bold>.
                        </Highlight>
                      </P>
                      <P>
                        In this case, it becomes <EmojiWithText letter="e" />.
                      </P>
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
                            It turns into <EmojiWithText letter="e" />,<br />a
                            random food item
                            <br />
                            that’s not yet used.
                          </>
                        }
                      />
                    </>
                  )
                }
              ]}
            />
            <R.Niwv />
            <BubbleQuotes
              quotes={[
                {
                  type: 'surprised',
                  children: (
                    <>
                      <P>
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="callArg"
                        />{' '}
                        and{' '}
                        <BottomRightBadge
                          inline
                          bottomRightBadgeType="funcUnbound"
                        />{' '}
                        no longer overlap now!
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        Let’s continue then!{' '}
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
                        Yay! It became a lunchbox that can be converted to{' '}
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
            <R.Pmdm></R.Pmdm>
            <BubbleQuotes
              quotes={[
                {
                  type: 'saya',
                  children: (
                    <>
                      <P>
                        That means it calculated <EmojiNumber number={1} />{' '}
                        <Emoji>➕</Emoji> <EmojiNumber number={1} />{' '}
                        successfully! <Emoji>🎉</Emoji>
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>Yes. Let’s summarize what we just did!</P>
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
              If you combine <Emoji>👧🏻</Emoji> Saya’s lunchbox which has{' '}
              <H args={{ name: 'plusOneEffect' }} />…
            </P>
            <R.Nvqu>
              <Emoji>👧🏻</Emoji> Saya’s lunchbox which as
              <br />
              <H args={{ name: 'plusOneEffect' }} />
            </R.Nvqu>
            <P>
              …with the following lunchbox which can be converted to{' '}
              <EmojiNumber number={1} />…
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
              Then, there will be the same item (
              <Highlight>
                <EmojiForLetter letter="b" />
              </Highlight>
              ) in both{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />.
            </P>
            <P>
              Because of this, if we don’t do anything, it won’t be able to
              calculate <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
            <R.Kwyy>
              <Highlight>
                <EmojiForLetter letter="b" />
              </Highlight>{' '}
              is in both{' '}
              <BottomRightBadge inline bottomRightBadgeType="callArg" /> and{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />
            </R.Kwyy>
            <ExpressionRunnerSeparator />
            <ExpressionRunnerCaptionOnly>
              Because there’s a conflict in
              <br />
              <BottomRightBadge
                inline
                bottomRightBadgeType="callArg"
              /> and{' '}
              <BottomRightBadge inline bottomRightBadgeType="funcUnbound" />,
              <br />
              If we don’t do anything, it won’t be
              <br />
              able to calculate <EmojiNumber
                number={1}
              /> <Emoji>➕</Emoji> <EmojiNumber number={1} />
            </ExpressionRunnerCaptionOnly>
            <P>
              However, the <HighlightBold>special rule</HighlightBold> applies
              in this case:
            </P>
            <SpecialRule />
            <R.Niwv />
            <P>
              By doing this, it will be able to calculate{' '}
              <EmojiNumber number={1} /> <Emoji>➕</Emoji>{' '}
              <EmojiNumber number={1} />.
            </P>
            <BubbleQuotes
              quotes={[
                {
                  type: 'thinking',
                  children: (
                    <>
                      <P>
                        I get it, but I don’t know if I can remember to use this
                        rule…
                      </P>
                    </>
                  )
                },
                {
                  type: 'dog',
                  children: (
                    <>
                      <P>
                        <Bold>Don’t worry:</Bold> This special rule will appear
                        starting from the next page,{' '}
                        <Highlight>but you don’t have to memorize it</Highlight>
                        . It will just happen <Italic>automatically</Italic>.
                      </P>
                      <P>
                        <Highlight>
                          You just need to know that these rules exist
                        </Highlight>
                        , and you should be fine.
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
        title: <>What happens now?</>,
        content: (
          <>
            <BubbleQuotes
              quotes={[
                {
                  type: 'happy',
                  children: (
                    <>
                      <P>
                        <Bold>Anyway:</Bold> We figured out how to do{' '}
                        <H args={{ name: 'plusOneEffect' }} />!
                      </P>
                      <P>
                        The devil! As you promised, give us our mathboxes back!
                      </P>
                    </>
                  )
                },
                {
                  type: 'devil',
                  children: (
                    <>
                      <P>Ugh…!</P>
                    </>
                  )
                }
              ]}
            />
            <P>
              Will the villagers get their mathboxes back? Let’s see on the next
              page!
            </P>
            <NextLessonButton />
          </>
        )
      }
    ]}
  />
)

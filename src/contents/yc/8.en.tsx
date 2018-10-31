import React from 'react'
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode8 } from 'src/components/Yc/AllExpressionRunners'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
// import InlineBackground from 'src/components/Yc/InlineBackground'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <P>
        First, we’ll talk about the <Strong>two patterns.</Strong>
      </P>
      <H3>First Pattern</H3>
      <P>Take a look at this {h('ycBentoBox')}:</P>
      {episode8[i++]()}
      <P>
        Now, suppose we say <Emoji size="mdlg">🍣</Emoji> ={' '}
        <Emoji size="mdlg">1️⃣</Emoji> and <Emoji size="mdlg">🥪</Emoji> ={' '}
        <Emoji size="mdlg">2️⃣</Emoji>.
      </P>
      <P>
        Then <InlineEmojiBoxes emojis={['🍣', '🥪', '🍣']} /> has the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />.
      </P>
      <H3>Second Pattern</H3>
      <P>How about this one?</P>
      {episode8[i++]()}
      <P>
        <Strong>Answer:</Strong> If we say <Emoji size="mdlg">🥗</Emoji> ={' '}
        <Emoji size="mdlg">1️⃣</Emoji> and <Emoji size="mdlg">🥩</Emoji> ={' '}
        <Emoji size="mdlg">2️⃣</Emoji>, then this one has the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
      </P>
      <H3>Question</H3>
      <P>
        Now, here’s the question. Let’s take the one with the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />:
      </P>
      {episode8[i++]()}
      <P>And we’ll take this {h('ycBentoBox')}</P>
      {episode8[i++]()}
      <P>And we’ll combine them:</P>
      {episode8[i++]()}
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>What do you think will happen at the end?</Em>
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Let’s Try!</H3>
      <P>{h('ycTryUntilDone')}:</P>
      {episode8[i++]()}
      <P>So the end result was:</P>
      {episode8[i++]()}
      <P>
        And <InlineEmojiBoxes emojis={['🍕', '🍛', '🍛']} /> has the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
      </P>
      <Ul>
        <UlLi>
          If the top row is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> the
          answer is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        </UlLi>
        <UlLi>
          In this case, the top row was{' '}
          <InlineEmojiBoxes emojis={['🍚', '🍝', '🍝']} /> and the answer was{' '}
          <InlineEmojiBoxes emojis={['🍛', '🌭', '🍛']} />
        </UlLi>
      </Ul>
      <P>Hope you got this right!</P>
      <EmojiSeparator emojis={['✨', '🤗', '✨']} />
      <H3>
        Conflicts <Emoji>💥</Emoji>
      </H3>
      <P>
        Next, we’ll talk about one of the last few rules remaining to discuss:{' '}
        <Strong>
          <Em>
            Conflicts <Emoji>💥</Emoji>
          </Em>
        </Strong>
        .
      </P>
      <P>
        On the following {h('ycBentoBox')},{' '}
        <Em>keep pressing {h('ycNext')} until step 1.5.</Em>
      </P>
      {episode8[i++]()}
      <P>
        This is very similar to the {h('ycBentoBox')} we've seen on this
        episode/last episode. The top row is different, but{' '}
        <Strong>the bottom row is exactly the same.</Strong>
      </P>
      <P>
        <Strong>
          Now, take a look at{' '}
          <Em>
            sandwich <Emoji size="mdlg">🥪</Emoji>
          </Em>
        </Strong>{' '}
        :
      </P>
      {episode8[i++]()}
      <P>
        Sandwiches <Emoji size="mdlg">🥪</Emoji> here meet these 3 conditions:
      </P>
      <Ol>
        <OlLi>
          Sandwich <Emoji size="mdlg">🥪</Emoji> <Strong>is NOT</Strong> the
          dish{' '}
          <Em>
            you’re eating next <EmojiBadge badgeType="funcArg" inline />
          </Em>
          .
        </OlLi>
        <OlLi>
          Sandwich <Emoji size="mdlg">🥪</Emoji> <Strong>is</Strong> one of the
          dishes the{' '}
          <Em>
            chef is preparing <EmojiBadge badgeType="callArg" inline />
          </Em>
          .
        </OlLi>
        <OlLi>
          On{' '}
          <Em>
            available dishes <EmojiBadge badgeType="funcBound" inline />
          </Em>{' '}
          , there is <Strong>at least one</Strong> sandwich{' '}
          <Emoji size="mdlg">🥪</Emoji> that’s{' '}
          <Strong>NOT in the rightmost cell.</Strong>
        </OlLi>
      </Ol>
      <P>
        The last rule might be confusing. On{' '}
        <EmojiBadge badgeType="funcBound" inline /> there are two sandwiches{' '}
        <Emoji>🥪</Emoji> <Emoji>🥪</Emoji>,{' '}
        <Em>but one is in the rightmost cell.</Em>
      </P>
      <P>
        <Strong>Good News:</Strong>{' '}
        <Em>
          You do <Strong>not</Strong> need to remember these rules.
        </Em>{' '}
        Just follow along!
      </P>
      <EmojiSeparator emojis={['💥', '💥', '️💥']} />
      <H3>Highlighting conflicts</H3>
      <P>
        When there’s a dish that above three conditions apply,{' '}
        <Strong>
          <Em>
            it is called a conflict <Emoji>💥</Emoji>
          </Em>
        </Strong>{' '}
        and there’s a special rule that applies.
      </P>
      <P>
        <Strong>Before I explain the rule:</Strong> Let’s highlight all the
        sandwiches <Emoji size="mdlg">🥪</Emoji> (including the rightmost one in{' '}
        <EmojiBadge badgeType="funcBound" inline />
        ):
      </P>
      {episode8[i++]()}
      <P>As you can see, we are:</P>
      <Ul>
        <UlLi>
          Highlighting <Emoji size="mdlg">🥪</Emoji> in{' '}
          <EmojiBadge badgeType="callArg" inline /> using{' '}
          {/* <InlineBackground bgPattern="stripeReverse" size="mdlg" /> */}
        </UlLi>
        <UlLi>
          Highlighting <Emoji size="mdlg">🥪</Emoji> in{' '}
          <EmojiBadge badgeType="funcBound" inline /> using{' '}
          {/* <InlineBackground bgPattern="stripe" size="mdlg" /> */}
        </UlLi>
      </Ul>
      <H3>
        How to resolve a conflict <Emoji>☑️</Emoji>
      </H3>
      <P>
        <Em>
          Press {h('ycNext')} to see how the conflict <Emoji>💥</Emoji> gets
          resolved.
        </Em>
      </P>
      {episode8[i++]()}
      <P>
        <Strong>Here’s how to resolve a conflict:</Strong>
      </P>
      <Ol>
        <OlLi>
          <Em>
            <Strong>Replace</Strong> dishes highlighted in{' '}
            {/* <InlineBackground bgPattern="stripe" size="mdlg" /> with a new dish */}
            that hasn’t appeared yet.{' '}
            {/* <InlineBackground bgPattern="bubble" size="mdlg" /> */}
          </Em>
        </OlLi>
        <OlLi>
          <Em>
            <Strong>Don’t do anything</Strong> for dishes highlighted in{' '}
            {/* <InlineBackground bgPattern="stripeReverse" size="mdlg" />. */}
          </Em>
        </OlLi>
      </Ol>
      <P>
        <Strong>In this case:</Strong>{' '}
        <Em>
          sandwiches <Emoji size="mdlg">🥪</Emoji> highlighted in{' '}
          {/* <InlineBackground bgPattern="stripe" size="mdlg" /> were replaced with */}
          a steak <Emoji size="mdlg">🥩</Emoji>
        </Em>
        .
      </P>
      {episode8[i++]()}
      <P>
        <Strong>Let’s continue.</Strong> {h('ycTryUntilDone')}:
      </P>
      {episode8[i++]()}
      <H3>The same pattern</H3>
      <P>
        For the example we just did, <Strong>the top row</Strong> looked like
        this in the beginning:
      </P>
      {episode8[i++]()}
      <P>
        And <Strong>the final result</Strong> was:
      </P>
      {episode8[i++]()}
      <P>Once again, the pattern here is:</P>
      <Ul>
        <UlLi>
          If the top row is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> the
          answer is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        </UlLi>
      </Ul>
      <P>
        On the next episode, we’ll finally talk about the mysterious{' '}
        <Strong>bottom row</Strong>.
      </P>
      {episode8[i++]()}
      <H3>Again: No need to memorize</H3>
      <P>
        This episode might have been confusing, but again:{' '}
        <Em>
          You do <Strong>not</Strong> need to remember the conflict rules.
        </Em>{' '}
      </P>
      <P>
        Just know that sometimes conflicts happen. We’ll show and resolve the
        conflicts for you.
      </P>
      <EmojiSeparator emojis={['☑️', '🤗', '☑️️️']} />
      <H3>
        No Quiz! <Emoji>🎉</Emoji>
      </H3>
      <P>
        Because this episode was long, there’s no quiz for this episode. Head
        straight to the next episode!
      </P>
      <YcNextLessonButton nextEpisodeNumber={8} primaryTextType="nextPage" />
    </>
  )
}

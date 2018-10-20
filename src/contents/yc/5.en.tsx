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
import { episode5 } from 'src/components/Yc/AllExpressionRunners'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

const Rules = () => (
  <Ol>
    <OlLi>
      First,{' '}
      <Em>
        do the part that has <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        ’s on the <Strong>top left</Strong> and the <Strong>bottom left</Strong>{' '}
        corner.
      </Em>
    </OlLi>
    <OlLi>
      <Em>
        Then <InlinePrioritiesLabel>2</InlinePrioritiesLabel>
        ’s will become <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        ’s.
      </Em>{' '}
      So do these next.
    </OlLi>
  </Ol>
)

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 4)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode5[i++]()}
      <P>Hope this wasn’t too difficult!</P>
      <H3>Next Topic: More than 2 cells vertically</H3>
      <P>
        Next, we’ll talk about the {h('ycBentoBox')} where{' '}
        <Em>there are more than 2 cells stacked on top of each other</Em>:
      </P>
      {episode5[i++]()}
      <P>
        <Strong>You might be wondering:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>If there are 3 cells stacked vertically, what do we do?</Em>
        </UlLi>
        <UlLi>
          <Em>
            What are the signs that say{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel> and{' '}
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel>?
          </Em>
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['🥇', '🤔', '🥈']} />
      <P>
        <Strong>Here’s the answer:</Strong>
      </P>
      <Rules />
      <P>This will make sense after we work on an example!</P>
      <EmojiSeparator emojis={['🥇', '➡️', '🥈']} />
      <H3>Example</H3>
      <P>
        <Em>Try pressing {h('ycNext')}</Em> on the following example.
      </P>
      {episode5[i++]()}
      <P>Notice that:</P>
      <Ul>
        <UlLi>
          The part that has{' '}
          <Em>
            <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel> on the{' '}
            <Strong>top left</Strong> and the <Strong>bottom left</Strong>{' '}
            corner
          </Em>{' '}
          is in white. <InlineBackground bgColor="white" />
        </UlLi>
        <UlLi>
          <Em>
            The rest is shaded. <InlineBackground bgColor="indigo50" />
          </Em>{' '}
          We’ll <Strong>ignore</Strong> this part for now.
        </UlLi>
      </Ul>
      <H3>Continuing…</H3>
      <P>
        Then proceed with{' '}
        <Em>
          the white background part <InlineBackground bgColor="white" />
        </Em>{' '}
        as before. Ignore the shaded part.{' '}
        <InlineBackground bgColor="indigo50" />
      </P>
      <P>
        <Em>Try pressing {h('ycNext')} several times</Em>:
      </P>
      {episode5[i++]()}
      <P>
        Let’s see what happens when the crossed-out cells{' '}
        <InlineBackground bgPattern="cross" /> are removed.{' '}
        <Em>Try pressing {h('ycNext')}</Em>.
      </P>
      {episode5[i++]()}
      <P>
        <Strong>Here’s what happened:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            Everything is in white background again.{' '}
            <InlineBackground bgColor="white" />
          </Em>
        </UlLi>
        <UlLi>
          <Strong>More Importantly:</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> from before
          disappears, and{' '}
          <Em>
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> from before{' '}
            <Strong>now becomes</Strong>{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          </Em>
          .
        </UlLi>
      </Ul>
      <H3>Continuing…</H3>
      <P>
        Let’s keep going until the end. <Em>Try pressing {h('ycNext')}</Em>
      </P>
      {episode5[i++]()}
      <P>
        <Strong>Note:</Strong> the sandwich was on the wish list{' '}
        <Emoji>💭</Emoji> initially. But now, the sandwich became what you’re
        eating next <Emoji>😋</Emoji>.
      </P>
      <P>
        <Strong>That’s all!</Strong> Just for your reference, you can try it
        from <Em>the beginning to the end</Em>:
      </P>
      {episode5[i++]()}
      <H3>Review</H3>
      <P>
        <Strong>What you need to know:</Strong>
      </P>
      <Rules />
      <P>Let’s do a quiz to make sure you understood this!</P>
      <EmojiSeparator emojis={['🥇', '🤔', '🥈']} />
      <H3>Quiz</H3>
      <P>If you step through the following {h('ycBentoBox')} until the end…</P>
      {episode5[i++]()}
      <P>
        <Strong>Which one will be the last food item remaining?</Strong>
      </P>
      <Ol>
        <OlLi>
          <Emoji size="lg">🍣</Emoji>
        </OlLi>
        <OlLi>
          <Emoji size="lg">🍔</Emoji>
        </OlLi>
        <OlLi>
          <Emoji size="lg">🥩</Emoji>
        </OlLi>
      </Ol>
      <P>
        <Em>This is hard to do in your head</Em>. So don’t worry if you aren’t
        sure.
      </P>
      <YcNextLessonButton nextEpisodeNumber={6} />
    </>
  )
}

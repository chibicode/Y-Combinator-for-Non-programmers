import React from 'react'
import {
  Em,
  H3,
  InternalLink,
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
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
        <InternalLink href={yc(4)}>the quiz from the last episode</InternalLink>
        :
      </P>
      <P>
        I added the previous and next buttons.{' '}
        <Em>Try clicking {h('ycNext')}</Em> several times to see the answer.
      </P>
      {episode5[i++]()}
      <P>Hope this wasn’t too difficult!</P>
      <H3>Next Topic: More than 2 cells vertically</H3>
      <P>
        Next, we’ll talk about the case where{' '}
        <Em>there are more than 2 cells stacked on top of each other</Em>. Take
        a look at this one:
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
      <P>
        <Strong>Here’s the answer:</Strong>
      </P>
      <Ol>
        <OlLi>
          First,{' '}
          <Em>
            do the part that has{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
            ’s on the <Strong>top left</Strong> and the{' '}
            <Strong>bottom left</Strong> corner.
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
      <P>This will make sense after we work on an example!</P>
      <EmojiSeparator emojis={['🥇', '➡️', '🥈']} />
      <H3>Example</H3>
      <P>
        <Em>Try clicking on {h('ycNext')}</Em> on the following example.
      </P>
      {episode5[i++]()}
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
            The rest is shaded. <InlineBackground bgColor="indigo50" /> We’ll{' '}
            <Strong>ignore</Strong> this part for now.
          </Em>
        </UlLi>
      </Ul>
      <H3>Continuing…</H3>
      <P>
        Then proceed with{' '}
        <Em>
          the white background part <InlineBackground bgColor="white" />
        </Em>{' '}
        as before. Try clicking on {h('ycNext')} several times.
      </P>
      {episode5[i++]()}
      <P>
        Notice that
        <Em>
          If you click on {h('ycNext')}, the bottom two thirds will now have a
          white background .
        </Em>{' '}
        (The remaining part will still be shaded in light blue{' '}
        <InlineBackground bgColor="indigo50" />
        .)
      </P>
      <P>
        Let’s see what happens when the white background part{' '}
        <InlineBackground bgColor="white" /> is done (sushi <Emoji>🍣</Emoji> is
        replaced by salad <Emoji>🥗</Emoji>.{' '}
        <Em>Try clicking on {h('ycNext')}</Em>.
      </P>
      {episode5[i++]()}
      <P>
        <Strong>Here’s what happened:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            Everything is shaded in light blue{' '}
            <InlineBackground bgColor="indigo50" /> again.
          </Em>
        </UlLi>
        <UlLi>
          The{' '}
          <Em>
            steak <Emoji>🥩</Emoji>
          </Em>{' '}
          that was on the top comes down.
        </UlLi>
        <UlLi>
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel> from before
          disappears, and <InlinePrioritiesLabel>2</InlinePrioritiesLabel> from
          before now becomes <InlinePrioritiesLabel>1</InlinePrioritiesLabel>.
        </UlLi>
      </Ul>
      <P>Let’s keep going until the end:</P>
      {episode5[i++]()}
      <P>
        <Strong>That’s all!</Strong> Just for your reference, you can try it
        from <Em>the beginning to the end</Em>:
      </P>
      {episode5[i++]()}
      <P>Let’s do a quiz to make sure you understood this!</P>
      <EmojiSeparator emojis={['🥇', '🤔', '🥈']} />
      <H3>Quiz</H3>
      <P>If you step through the following example until the end…</P>
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
        <Em>This is a hard question</Em>. So don’t worry if you have no idea.
      </P>
      <YcNextLessonButton nextEpisodeNumber={6} />
    </>
  )
}

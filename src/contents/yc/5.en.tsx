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
      <P>
        <Strong>Here’s what happened:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Emoji>🥪</Emoji> <Emoji>🥗</Emoji> The sandwich and salad remained
          the same.
        </UlLi>
        <UlLi>
          <Emoji>😋</Emoji> You wanted to eat sushi <Emoji>🍣</Emoji>, but the
          only available dish <Emoji>🍽</Emoji> was steak <Emoji>🥩</Emoji>.
        </UlLi>
        <UlLi>
          <Em>
            As a result, the bottom left cell (<Emoji>😋</Emoji> →{' '}
            <Emoji>🍣</Emoji>) and the top cell (<Emoji>👨‍🍳</Emoji> →{' '}
            <Emoji>🍔</Emoji>) <Strong>disappeared</Strong>, and nothing else
            changed
          </Em>
          .
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['🥪', '🥗', '🥩']} />
      <P>Hope this wasn’t too difficult!</P>
      <H3>Next Topic: More than 2 cells vertically</H3>
      <P>
        Next, we’ll talk about the case where{' '}
        <Em>there are more than 2 cells stacked on top of each other</Em>. Take
        a look at this one:
      </P>
      {episode5[i++]()}
      <P>You might be wondering:</P>
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
      <Ul>
        <UlLi>
          <Em>
            First, do the part that has{' '}
            <InlinePrioritiesLabel>1</InlinePrioritiesLabel> on the{' '}
            <Strong>top left</Strong> and the <Strong>bottom left</Strong>{' '}
            corner.
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            Then, do the part that has{' '}
            <InlinePrioritiesLabel>2</InlinePrioritiesLabel> on the{' '}
            <Strong>top left</Strong> and the <Strong>bottom left</Strong>{' '}
            corner.
          </Em>
        </UlLi>
      </Ul>
      <P>This will make sense after we work on an example!</P>
      <EmojiSeparator emojis={['🥇', '➡️', '🥈']} />
      <H3>Example</H3>
      <P>
        On the following example, everything is shaded in light blue{' '}
        <InlineBackground bg="indigo50" />. initially.{' '}
      </P>
      <P>
        <Em>
          If you click on {h('ycNext')}, the bottom two thirds will now have a
          white background <InlineBackground bg="white" />.
        </Em>{' '}
        This is the part that has{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel> on the{' '}
        <Strong>top left</Strong> and the <Strong>bottom left</Strong> corner.
      </P>
      <P>
        The remaining part will still be shaded in light blue{' '}
        <InlineBackground bg="indigo50" />.
      </P>
      {episode5[i++]()}
      <P>
        Then proceed with{' '}
        <Em>
          the white background part <InlineBackground bg="white" />
        </Em>{' '}
        as before. Try clicking on {h('ycNext')}.
      </P>
      {episode5[i++]()}
      <P>
        Let’s see what happens when the white background part{' '}
        <InlineBackground bg="white" /> is done (sushi <Emoji>🍣</Emoji> is
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
            <InlineBackground bg="indigo50" /> again.
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

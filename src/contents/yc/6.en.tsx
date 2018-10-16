import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode6 } from 'src/components/Yc/AllExpressionRunners'
import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 5)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode6[i++]()}
      <P>
        So the answer was <Strong>sushi</Strong> <Emoji>🍣</Emoji>.
      </P>
      <H3>More Priorities</H3>
      <P>Next, take a look at this {h('ycBentoBox')}:</P>
      {episode6[i++]()}
      <P>
        <Em>
          Notice that there are multiple{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          ’s.
        </Em>{' '}
        Which one do we do first?
      </P>
      <P>
        <Strong>Answer:</Strong>{' '}
        <Em>
          Do the <Strong>leftmost</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          ’s first.
        </Em>
      </P>
      <H3>Leftmost</H3>
      <P>
        <Em>Try pressing {h('ycNext')}</Em>. It will highlight the leftmost{' '}
        <InlinePrioritiesLabel revert>1</InlinePrioritiesLabel>
        ’s:
      </P>
      {episode6[i++]()}
      <P>
        <Strong>Let’s continue:</Strong> <Em>Try pressing {h('ycNext')}</Em>{' '}
        until we get to step 1.6.
      </P>
      {episode6[i++]()}
      <P>
        Notice that, in steps <Strong>1.6</Strong> and <Strong>1.7</Strong>,{' '}
        <Em>
          the matched sushi <Emoji>🍣</Emoji> is replaced by the{' '}
          <Strong>two</Strong> salads <Emoji>🥗</Emoji>
        </Em>{' '}
        the chef is preparing <Emoji>👨‍🍳</Emoji>. Then{' '}
        <Em>try pressing {h('ycNext')}</Em> until we get to step 2.1.
      </P>
      {episode6[i++]()}
      <P>
        Again, we have multiple <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        ’s. And we’ll again do <Strong>the leftmost one first</Strong>.{' '}
        {h('ycTryUntilDone')}.
      </P>
      {episode6[i++]()}
      <P>
        <Strong>That’s it!</Strong> By the way, you can try it from the
        begininng to end here:
      </P>
      {episode6[i++]()}
      <P>Ok, let’s do another quiz!</P>
      <EmojiSeparator emojis={['⬅️', '🤔', '⬅️']} />
      <H3>A Very Hard Quiz</H3>
      <P>
        This one’s challenging. Suppose that currently the {h('ycBentoBox')}{' '}
        looks like this:
      </P>
      {episode6[i++]()}
      <P>
        <Strong>True or False:</Strong>{' '}
        <Em>Will the above {h('ycBentoBox')} eventually turn into this?</Em>
      </P>
      {episode6[i++]()}
      <P>
        <Strong>I know. This question is very hard.</Strong>
      </P>
      <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
      <P>
        <Em>
          But at least try for a little bit before you click the button below!
        </Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={7} />
    </>
  )
}

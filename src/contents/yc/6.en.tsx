import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode6 } from 'src/components/Yc/AllExpressionRunners'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
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
      <P>
        <Strong>Notice:</Strong> To speed this up, we now show all{' '}
        <EmojiBadge badgeType="funcBound" inline />{' '}
        <EmojiBadge badgeType="funcUnbound" inline />{' '}
        <EmojiBadge badgeType="funcArg" inline />{' '}
        <EmojiBadge badgeType="callArg" inline /> at the same time.
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
      <P>Let’s continue until the end:</P>
      {episode6[i++]()}
      <H3>Review</H3>
      <P>
        <Strong>What you need to know:</Strong> If there are multiple{' '}
        <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
        ’s,
        <Em>
          do the <Strong>leftmost</Strong>{' '}
          <InlinePrioritiesLabel>1</InlinePrioritiesLabel>
          ’s first.
        </Em>
      </P>
      <EmojiSeparator emojis={['⬅️', '🤔', '⬅️']} />
      <P>Ok, let’s do another quiz!</P>
      <H3>Quiz</H3>
      <P>Suppose that currently the {h('ycBentoBox')} looks like this:</P>
      {episode6[i++]()}
      <P>
        <Strong>True or False:</Strong>{' '}
        <Em>Will the above {h('ycBentoBox')} eventually turn into this?</Em>
      </P>
      {episode6[i++]()}
      <P>
        <Strong>This question is tricky.</Strong> But at least try for a little
        bit before you press the button below!
      </P>
      <YcNextLessonButton nextEpisodeNumber={7} />
    </>
  )
}

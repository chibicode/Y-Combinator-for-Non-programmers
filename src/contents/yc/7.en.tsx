import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode7 } from 'src/components/Yc/AllExpressionRunners'
import BottomRightBadge from 'src/components/Yc/BottomRightBadge'
import TopLeftBadge from 'src/components/Yc/TopLeftBadge'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 6)}
      <P>{h('ycTryUntilDone')}:</P>
      {episode7[i++]()}
      <P>
        So the answer was <Strong>True.</Strong> In the end it became:
      </P>
      {episode7[i++]()}
      <P>
        <Strong>The confusing part:</Strong> The following step might have been
        confusing (<Em>press {h('ycNext')}</Em>
        ):
      </P>
      {episode7[i++]()}
      <P>
        As you can see,{' '}
        <Em>
          everything labeled as{' '}
          <BottomRightBadge bottomRightBadgeType="callArg" inline /> gets
          “copy-pasted” into the matched box{' '}
          <TopLeftBadge inline topLeftBadgeType="match" />.
        </Em>
      </P>
      <P>
        Now, let’s cover the last rule:{' '}
        <Strong>
          Shuffle Time. <Emoji>🔀</Emoji>
        </Strong>
      </P>
      <EmojiSeparator emojis={['🔀', '🔀', '🔀']} />
      <H3>Shuffle Time</H3>
      <P>
        In the following {h('ycBentoBox')}, notice that{' '}
        <Em>
          the{' '}
          <Strong>
            sandwich <Emoji size="mdlg">🥪</Emoji>
          </Strong>{' '}
          appears in <BottomRightBadge bottomRightBadgeType="callArg" inline />,{' '}
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />, and{' '}
          <BottomRightBadge bottomRightBadgeType="funcBound" inline />
        </Em>
        .
      </P>
      {episode7[i++]()}
      <P>
        <Em>
          Whenever there’s <Strong>the same item</Strong> that appears in{' '}
          <BottomRightBadge bottomRightBadgeType="callArg" inline />,{' '}
          <BottomRightBadge bottomRightBadgeType="funcUnbound" inline />, and{' '}
          <BottomRightBadge bottomRightBadgeType="funcBound" inline />, it’s{' '}
          <Strong>
            Shuffle Time <Emoji>🔀</Emoji>
          </Strong>
          :
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        Here’s what happens in{' '}
        <Strong>
          Shuffle Time <Emoji>🔀</Emoji>
        </Strong>
        :
      </P>
      <Ul>
        <UlLi>
          <Em>
            All sandwich <Emoji size="mdlg">🥪</Emoji> in{' '}
            <BottomRightBadge bottomRightBadgeType="funcUnbound" inline /> and{' '}
            <BottomRightBadge bottomRightBadgeType="funcBound" inline /> becomes
            a <Strong>new dish</Strong> (that’s not yet in the {h('ycBentoBox')}
            ).
          </Em>
        </UlLi>
        <UlLi>
          The sandwich <Emoji size="mdlg">🥪</Emoji> in{' '}
          <BottomRightBadge bottomRightBadgeType="callArg" inline /> is
          unchanged.
        </UlLi>
      </Ul>
      <P>
        <Em>Try pressing {h('ycNext')} to see how it works:</Em>
      </P>
      {episode7[i++]()}
      <P>
        In this case,{' '}
        <Strong>
          the sandwiches <Emoji size="mdlg">🥪</Emoji> became steak{' '}
          <Emoji size="mdlg">🥩</Emoji>
        </Strong>
        .
      </P>
      <EmojiSeparator emojis={['🥪', '🔀', '🥩']} />
      <P>From here, {h('ycTryUntilDone', false)} as usual:</P>
      {episode7[i++]()}
      <P>That’s it!</P>
      <H3>Another Example</H3>
      <P>
        Here’s another Shuffle Time <Emoji>🔀</Emoji> example.{' '}
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <H3>Good News</H3>
      <P>I have some good news for you!</P>
      <Ul>
        <UlLi>
          <Strong>
            <Em>
              You don’t need to memorize the Shuffle Time <Emoji>🔀</Emoji>{' '}
              rule.
            </Em>
          </Strong>{' '}
          You just need to know that this rule exists.
        </UlLi>
        <UlLi>
          <Strong>You’re done with the beginner levels!</Strong> We’ll move onto
          the intermediate levels and start solving interesting problems.
        </UlLi>
        <UlLi>
          <Strong>There’s no quiz.</Strong> Head straight to the next page!
        </UlLi>
      </Ul>
      <YcNextLessonButton nextEpisodeNumber={8} primaryTextType="nextPage" />
    </>
  )
}

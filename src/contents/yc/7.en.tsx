import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode7 } from 'src/components/Yc/AllExpressionRunners'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
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
          everything labeled as <EmojiBadge badgeType="callArg" inline /> gets
          “copy-pasted” into the matched box{' '}
          <InlineBackground bgPattern="star" />.
        </Em>
      </P>
      <P>
        Now, let’s cover the last rule:{' '}
        <Strong>
          the devil. <Emoji>😈</Emoji>
        </Strong>
      </P>
      <EmojiSeparator emojis={['😈', '😈', '😈']} />
      <H3>The Devil</H3>
      <P>
        In the following {h('ycBentoBox')}, notice that{' '}
        <Em>
          the{' '}
          <Strong>
            sandwich <Emoji size="mdlg">🥪</Emoji>
          </Strong>{' '}
          appears in <EmojiBadge badgeType="callArg" inline />,{' '}
          <EmojiBadge badgeType="funcUnbound" inline />, and{' '}
          <EmojiBadge badgeType="funcBound" inline />
        </Em>
        .
      </P>
      {episode7[i++]()}
      <P>
        <Em>
          Whenever there’s any item that appears in{' '}
          <EmojiBadge badgeType="callArg" inline />,{' '}
          <EmojiBadge badgeType="funcUnbound" inline />, and{' '}
          <EmojiBadge badgeType="funcBound" inline />, then{' '}
          <Strong>
            the devil <Emoji>😈</Emoji>
          </Strong>{' '}
          shows up:
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        The{' '}
        <Strong>
          devil <Emoji>😈</Emoji>
        </Strong>{' '}
        does the following:
      </P>
      <Ul>
        <UlLi>
          <Em>
            Changes all sandwich <Emoji size="mdlg">🥪</Emoji> in{' '}
            <EmojiBadge badgeType="funcUnbound" inline /> and{' '}
            <EmojiBadge badgeType="funcBound" inline /> to some random{' '}
            <Strong>new dish</Strong>.
          </Em>
        </UlLi>
        <UlLi>
          The sandwich <Emoji size="mdlg">🥪</Emoji> in{' '}
          <EmojiBadge badgeType="callArg" inline /> is unchanged.
        </UlLi>
      </Ul>
      {episode7[i++]()}
      <P>
        In this case, sandwiches <Emoji size="mdlg">🥪</Emoji> became steak{' '}
        <Emoji size="mdlg">🥩</Emoji>.
      </P>
      <P>From here, {h('ycTryUntilDone', false)} as usual:</P>
      {episode7[i++]()}
      <P>That’s it!</P>
      <EmojiSeparator emojis={['😈', '😈', '😈']} />
      <H3>Another Example</H3>
      <P>
        Here’s another example where the devil <Emoji>😈</Emoji> appears.{' '}
        {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <H3>Good News</H3>
      <P>I have some good news for you!</P>
      <Ul>
        <UlLi>
          <Strong>
            <Em>
              You don’t need to memorize the devil <Emoji>😈</Emoji> rule.
            </Em>
          </Strong>{' '}
          You just need to know that this rule exists, and recognize it when
          used.
        </UlLi>
        <UlLi>
          <Strong>This is the last {h('ycBentoBox')} rule we’ll cover.</Strong>{' '}
          From the next episode we’ll start solving interesting problems.
        </UlLi>
        <UlLi>
          <Strong>No quiz on this episode.</Strong> Head straight to the next
          episode!
        </UlLi>
      </Ul>
      <YcNextLessonButton nextEpisodeNumber={8} primaryTextType="nextPage" />
    </>
  )
}

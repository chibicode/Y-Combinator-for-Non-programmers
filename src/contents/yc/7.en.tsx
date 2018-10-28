import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode7 } from 'src/components/Yc/AllExpressionRunners'
import EmojiBadge from 'src/components/Yc/EmojiBadge'
import InlineBackground from 'src/components/Yc/InlineBackground'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
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
          <Emoji>😝</Emoji> changing your mind.
        </Strong>
      </P>
      <EmojiSeparator emojis={['😝', '😝', '😝']} />
      <H3>Changing Your Mind</H3>
      <P>Suppose that currently the {h('ycBentoBox')} looks like this:</P>
      {episode7[i++]()}
      <P>
        <Strong>Notice:</Strong> The{' '}
        <Em>
          sandwich <Emoji>🥪</Emoji>
        </Em>{' '}
        is labeled as <EmojiBadge badgeType="callArg" inline />,{' '}
        <EmojiBadge badgeType="funcUnbound" inline />, and{' '}
        <EmojiBadge badgeType="funcBound" inline />.
      </P>
      <P>
        In a case like this, the <Emoji>😝</Emoji>{' '}
        <Strong>“changing your mind” rule</Strong> applies. Here’s how it works:
      </P>
      <Ul>
        <UlLi>
          If some item is labeled as both{' '}
          <EmojiBadge badgeType="callArg" inline /> and{' '}
          <EmojiBadge badgeType="funcUnbound" inline />, then
        </UlLi>
      </Ul>
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>
          What would the result be if change the last steak <Emoji>🥩</Emoji> to
          a hamburger <Emoji>🍔</Emoji>
        </Em>
        ?
      </P>
      {episode7[i++]()}
      <P>
        Let’s check it out! Notice the top part is now <Emoji>🥩</Emoji>{' '}
        <Emoji>🍔</Emoji> <Emoji>🍔</Emoji>. {h('ycTryUntilDone')}:
      </P>
      {episode7[i++]()}
      <P>So the answer is:</P>
      {episode7[i++]()}
      <P>Hold on a minute…</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>What’s going on?</H3>
      <P>
        <Strong>To summarize:</Strong>
      </P>
      <Ul>
        <UlLi>
          If the top row is <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} /> the
          answer is <InlineEmojiBoxes emojis={['🥪', '🥗', '🥗']} />
        </UlLi>
        <UlLi>
          If the top row is <InlineEmojiBoxes emojis={['🥩', '🍔', '🍔']} /> the
          answer is <InlineEmojiBoxes emojis={['🥪', '🥗', '🥪']} />
        </UlLi>
      </Ul>
      <P>This is interesting. Suppose we use:</P>
      <Ul>
        <UlLi>
          <Emoji size="mdlg">1️⃣</Emoji> to describe{' '}
          <Emoji size="mdlg">🥩</Emoji> and <Emoji size="mdlg">🥪</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="mdlg">2️⃣</Emoji> to describe{' '}
          <Emoji size="mdlg">🍔</Emoji> and <Emoji size="mdlg">🥗</Emoji>
        </UlLi>
      </Ul>
      <P>Then it becomes:</P>
      <Ul>
        <UlLi>
          If the top row is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> the
          answer is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />
        </UlLi>
        <UlLi>
          If the top row is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> the
          answer is <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['✨', '🧙‍♂️', '✨']} />
      <P>
        <Strong>This is very interesting.</Strong>{' '}
        <Em>
          It seems like the <Strong>bottom row</Strong> (shown below) is doing
          something magical:
        </Em>
      </P>
      {episode7[i++]()}
      <P>
        We’ll soon talk about the <Strong>secrets of the bottom row</Strong>.{' '}
        <Em>But before that</Em>, let’s check your understanding with the
        following quiz.
      </P>
      <H3>Quiz</H3>
      <P>
        We’ll be using a different set of dishes. Suppose that currently the{' '}
        {h('ycBentoBox')} looks like this:
      </P>
      {episode7[i++]()}
      <P>
        <Strong>True or False:</Strong>{' '}
        <Em>Will the above {h('ycBentoBox')} eventually turn into this?</Em>
      </P>
      {episode7[i++]()}
      <P>
        <Strong>Good luck!</Strong> If you’ve actually read this episode, you
        should be able to answer this question.
      </P>
      <YcNextLessonButton nextEpisodeNumber={8} />
    </>
  )
}

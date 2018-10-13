import React from 'react'
import {
  Em,
  H3,
  InternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode4 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
        <InternalLink href={yc(3)}>the quiz from the last episode</InternalLink>
        :
      </P>
      <P>
        I added the previous and next buttons.{' '}
        <Em>Try clicking {h('ycNext')}</Em> to see the answer.
      </P>
      {episode4[i++]()}
      <P>
        So the answer is:{' '}
        <Em>
          <Strong>
            sandwich <Emoji>🥪</Emoji>
          </Strong>
        </Em>
        . But why?
      </P>
      <EmojiSeparator emojis={['🥪', '🤔', '🥪']} />
      <P>
        This is because you want to eat sushi <Emoji>🍣</Emoji>, but it is not
        available.
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥪</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🍣</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥗</Emoji>
        </UlLi>
      </Ul>
      <P>
        <Em>So you don’t eat anything</Em>. The salad <Emoji>🥗</Emoji> the chef{' '}
        <Emoji>👨‍🍳</Emoji> is preparing will not replace the sandwich{' '}
        <Emoji>🥪</Emoji>. Instead, the salad <Emoji>🥗</Emoji>{' '}
        <Strong>disappears</Strong>.
      </P>
      {episode4[i++]()}
      <P>
        Therefore just the sandwich <Emoji>🥪</Emoji> remains at the end:
      </P>
      {episode4[i++]()}
      <H3>Three cells on the bottom</H3>
      <P>
        Next, we’ll talk about the case when there are more than two cells on
        the bottom. Check out this one:
      </P>
      {episode4[i++]()}
      <P>
        Here’s how to interpret this. First,{' '}
        <Em>
          <Strong>all cells on the bottom except the left-most one</Strong>{' '}
          represent all available dishes <Emoji>🍽</Emoji>
        </Em>
        .
      </P>
      {episode4[i++]()}
      <P>
        <Em>
          The <Strong>bottom leftmost</Strong> cell represents what you’re
          eating next <Emoji>😋</Emoji>
        </Em>
        .
      </P>
      {episode4[i++]()}
      <P>
        And the <Strong>top cell</Strong> represents what the chef is preparing.
        This is the same as before.
      </P>
      {episode4[i++]()}
      <P>
        <Em>Try clicking {h('ycNext')}</Em> to see what happens on the next
        step.
      </P>
      {episode4[i++]()}
      <P>
        <Strong>Here’s what happened:</Strong>
      </P>
      <Ul>
        <UlLi>
          You ate the sushi <Emoji>🍣</Emoji> on the bottom right, which was
          then <Strong>replaced</Strong> by the salad <Emoji>🥗</Emoji> the chef{' '}
          <Emoji>👨‍🍳</Emoji> prepared.
        </UlLi>
        <UlLi>
          As a result, the bottom left sushi <Emoji>🍣</Emoji> and the top salad{' '}
          <Emoji>🥗</Emoji> <Strong>disappeared</Strong>.
        </UlLi>
        <UlLi>
          The sandwich <Emoji>🥪</Emoji> (which you didn’t eat) remained the
          same.
        </UlLi>
      </Ul>
      <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
      <P>
        It’s getting difficult quickly, right? But you’re doing great so far!
      </P>
      <H3>Quiz: Four cells on the bottom</H3>
      <P>
        How about <Em>four cells on the bottom</Em>? What do you think will
        happen on the next step?
      </P>
      {episode4[i++]()}
      <P>
        <Strong>Here’s the hint.</Strong> The sushi <Emoji>🍣</Emoji> is what
        you’re eating next because it’s the leftmost item on the bottom row.
        Everything else in the bottom row is available dishes <Emoji>🍽</Emoji>.
      </P>
      {episode4[i++]()}
      <YcNextLessonButton nextEpisodeNumber={5} />
    </>
  )
}

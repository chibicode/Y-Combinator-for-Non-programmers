import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode4 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 3)}
      <P>I added the previous and next buttons. {h('ycTryUntilDone')}:</P>
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
        <Em>So you don’t eat anything</Em>.
      </P>
      <P>
        The salad <Emoji>🥗</Emoji> the chef <Emoji>👨‍🍳</Emoji> is preparing will{' '}
        <Strong>not</Strong> replace the sandwich <Emoji>🥪</Emoji>. Instead,
        the salad <Emoji>🥗</Emoji> <Strong>disappears</Strong>. The sushi{' '}
        <Emoji>🍣</Emoji> also disappears.
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
        <Em>Try pressing {h('ycNext')}</Em> to see what happens next.
      </P>
      {episode4[i++]()}
      <P>
        Still following along? Then how about How about{' '}
        <Em>four cells on the bottom</Em>?
      </P>
      <EmojiSeparator emojis={['🤯', '🤯', '🤯']} />
      <H3>Quiz: Four cells on the bottom</H3>
      <P>What do you think will happen at the end?</P>
      {episode4[i++]()}
      <P>
        <Strong>Hint:</Strong>
      </P>
      <Ul>
        <UlLi>
          The sushi <Emoji>🍣</Emoji> is what you’re eating next because it’s
          <Em> the leftmost item on the bottom row</Em>.
        </UlLi>
        <UlLi>
          <Em>Everything else in the bottom row</Em> is available dishes{' '}
          <Emoji>🍽</Emoji>.
        </UlLi>
      </Ul>
      {episode4[i++]()}
      <YcNextLessonButton nextEpisodeNumber={5} />
    </>
  )
}

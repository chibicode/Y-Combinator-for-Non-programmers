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
      <H3>“Eat Later” List</H3>
      <P>
        Next, we’ll talk about the case when there are{' '}
        <Em>more than two cells</Em> on the bottom. Check out this one:
      </P>
      {episode4[i++]()}
      <P>
        Here’s how to interpret this. First,{' '}
        <Em>
          <Strong>the bottom right cell</Strong> is what’s available{' '}
          <Emoji>🍽</Emoji>
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
        <Em>
          <Strong>Now, this one’s new:</Strong> Everything else on the bottom
          row is your <Strong>“eat later” list.</Strong> <Emoji>😎</Emoji>
        </Em>{' '}
        In this case, the sandwich <Emoji size="mdlg">🥪</Emoji> is in your “eat
        later” list.
      </P>
      {episode4[i++]()}
      <P>
        <Strong>What it means:</Strong>{' '}
        <Em>
          You can <Strong>ignore</Strong> food in the “eat later” list{' '}
          <Emoji>😎</Emoji> for now.
        </Em>{' '}
      </P>
      <P>
        In the <Strong>next episode</Strong>, we’ll talk about the case where
        the “eat later” dishes <Emoji>😎</Emoji>{' '}
        <Em>turn into what you’re eating next</Em> <Emoji>😋</Emoji>.
      </P>
      <EmojiSeparator emojis={['😎', '➡️', '😋']} />
      <P>
        And the <Strong>top cell</Strong> represents what the chef is preparing.
        This is the same as before.
      </P>
      {episode4[i++]()}
      <P>{h('ycTryUntilDone')}:</P>
      {episode4[i++]()}
      <P>
        <Strong>Again:</Strong>{' '}
        <Em>
          You can <Strong>ignore</Strong> food in the “eat later” list{' '}
          <Emoji>😎</Emoji> for now.
        </Em>{' '}
      </P>
      <P>
        In the <Strong>next episode</Strong>, we’ll talk about the case where
        the “eat later” dishes <Emoji>😎</Emoji>{' '}
        <Em>turn into what you’re eating next</Em> <Emoji>😋</Emoji>.
      </P>
      <EmojiSeparator emojis={['😎', '➡️', '😋']} />
      <H3>Quiz: Four Cells on the Bottom</H3>
      <P>
        Check out the following {h('ycBentoBox')}.{' '}
        <Em>What do you think will happen by the time it’s {h('ycDone')}?</Em>
      </P>
      {episode4[i++]()}
      <P>
        <Strong>Hint:</Strong>
      </P>
      <Ul>
        <UlLi>
          The steak <Emoji size="mdlg">🥩</Emoji> is the only available dish
          because it’s <Em>the rightmost item on the bottom row</Em>.
        </UlLi>
        <UlLi>
          The sushi <Emoji size="mdlg">🍣</Emoji> is what you’re eating next
          because it’s <Em>the leftmost item on the bottom row</Em>.
        </UlLi>
        <UlLi>
          <Em>
            <Strong>Everything else</Strong> on the bottom row is on the “eat
            later” list <Emoji>😎</Emoji>, so{' '}
            <Strong>you can ignore them</Strong>.
          </Em>
        </UlLi>
      </Ul>
      {episode4[i++]()}
      <P>Try to guess what will happen in the end!</P>
      <YcNextLessonButton nextEpisodeNumber={4} />
    </>
  )
}

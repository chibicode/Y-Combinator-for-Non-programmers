import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode9 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycPlayUntilDone')}:</P>
      {episode9[i++]()}
      <P>So in the end, it became:</P>
      {episode9[i++]()}
      <P>
        Its secret code is <Strong>3</Strong>.
      </P>
      <P>
        Originally, the secret code was <Strong>2</Strong>:
      </P>
      {episode9[i++]()}
      <P>
        So{' '}
        <Em>
          the secret code <Strong>increased by 1</Strong>.
        </Em>
      </P>
      <P>
        That means the following {h('ycBentoBox')} which we used has an effect
        of <Strong>adding 1 to the secret code</Strong>.
      </P>
      {episode9[i++]()}
      <EmojiSeparator emojis={['🍱', '➕', '1️⃣']} />
      <P>Let’s try with other {h('ycBentoBox', true)}</P>
      <H3>4 + 1 = 5</H3>
      <P>
        This one has the secret code <Strong>4</Strong>:
      </P>
      {episode9[i++]()}
      <P>
        Let’s combine this with the {h('ycBentoBox')} that has an effect of{' '}
        <Strong>adding 1 to the secret code</Strong>. {h('ycPlayUntilDone')}。
      </P>
      {episode9[i++]()}
      <P>
        <Em>
          As expected, the new secret code is <Strong>4 + 1 = 5</Strong>.
        </Em>
      </P>
      {episode9[i++]()}
      <P>
        <Strong>Again:</Strong> this {h('ycBentoBox')} has an effect of{' '}
        <Strong>adding 1 to the secret code</Strong>.
      </P>
      {episode9[i++]()}
      <EmojiSeparator emojis={['🍱', '➕', '1️⃣']} />
      <H3>Quiz</H3>
      <P>
        <Strong>How about this {h('ycBentoBox')}?</Strong>{' '}
        <Em>What effect do you think this has?</Em>
      </P>
      {episode9[i++]()}
      <P>
        <Em>
          <Strong>Hint:</Strong> It’s meant to be combined with{' '}
          <Strong>two</Strong> {h('ycBentoBox', true)} with{' '}
          <Strong>secret code</Strong>.
        </Em>
      </P>
      <P>
        For example, we’ll combine it with the {h('ycBentoBox')} with the secret
        code <Strong>2</Strong>:
      </P>
      {episode9[i++]()}
      <P>
        And the {h('ycBentoBox')} with the secret code <Strong>3</Strong>:
      </P>
      {episode9[i++]()}
      <P>Which becomes:</P>
      {episode9[i++]()}
      <P>
        <Strong>Question:</Strong> What do you think will happen when you step
        through this until it’s {h('ycDone')}?{' '}
      </P>
      <P>
        The original secret code were 2 and 3.{' '}
        <Em>What do you think will be the new secret code?</Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={9} />
    </>
  )
}

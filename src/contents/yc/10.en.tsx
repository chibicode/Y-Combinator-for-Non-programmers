import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycPlayUntilDone')}.</P>
      <P>
        <Strong>Note:</Strong> The {h('ycPlay')} button runs faster here because
        there are a lot of steps.
      </P>
      {episode10[i++]()}
      <P>
        So the result has the secret code <Strong>5</Strong>.
      </P>
      {episode10[i++]()}
      <P>
        Remember that we started with {h('ycBentoBox', true)} with secret code{' '}
        <Strong>2</Strong> and <Strong>3</Strong>.
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <P>
        Since we ended up with <Strong>5</Strong>, which is equal to{' '}
        <Strong>2 + 3</Strong>,{' '}
        <Em>
          what we did was an <Strong>addition</Strong>
        </Em>
        . So this {h('ycBentoBox')} we used has an effect of{' '}
        <Em>
          <Strong>adding two secret code</Strong>
        </Em>
        .
      </P>
      {episode10[i++]()}
      <P>
        In other words, this {h('ycBentoBox')} means <Strong>2 + 3</Strong>.
      </P>
      {episode10[i++]()}
      <H3>Conclusion</H3>
      <P>
        <Em>
          We can do <Strong>addition of 2 numbers</Strong> using{' '}
          {h('ycBentoBox', true)}!
        </Em>
      </P>
      <EmojiSeparator emojis={['🍱', '➕', '🍱']} />
      <H3>What about multiplication?</H3>
    </>
  )
}

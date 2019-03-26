import React from 'react'
import { Em, H3, P, Strong } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 9)}
      <P>{h('ycPlayUntilDone')}:</P>
      <P>
        (<Strong>Note:</Strong> The {h('ycPlay')} button runs faster here
        because there are a lot of steps.)
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
      <H3>Summary</H3>
      <P>
        <Em>
          We can do <Strong>addition of 2 numbers</Strong> using{' '}
          {h('ycBentoBox', true)}!
        </Em>
      </P>
      <EmojiSeparator emojis={['🍱', '➕', '🍱']} />
      <H3>What about multiplication?</H3>
      <P>
        In fact, we can also do{' '}
        <Em>
          <Strong>multiplication of 2 numbers</Strong>
        </Em>{' '}
        using {h('ycBentoBox', true)}!
      </P>
      <EmojiSeparator emojis={['🍱', '✖️', '🍱']} />
      <P>
        This is the {h('ycBentoBox')} that does <Strong>multiplication</Strong>.
      </P>
      {episode10[i++]()}
      <P>
        <Strong>Let’s try it!</Strong> We’ll try to calculate{' '}
        <Em>
          <Strong>2</Strong> × <Strong>3</Strong>.
        </Em>
      </P>
      <P>
        We’ll combine the {h('ycBentoBox', true)} with secret code{' '}
        <Strong>2</Strong> and <Strong>3</Strong>:
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <P>
        And the following {h('ycBentoBox')} should calculate <Strong>2</Strong>{' '}
        × <Strong>3</Strong>. {h('ycPlayUntilDone')}.
      </P>
      {episode10[i++]()}
      <P>
        The result has the secret code <Strong>6</Strong>, which is equal to{' '}
        <Strong>2</Strong> × <Strong>3</Strong>.
      </P>
      {episode10[i++]()}
      <P>
        We confirmed that this {h('ycBentoBox')} calculates <Strong>2</Strong> ×{' '}
        <Strong>3</Strong>!
      </P>
      {episode10[i++]()}
      <H3>Conclusion</H3>
      <P>
        <Em>
          We learned that {h('ycBentoBox', true)} can do{' '}
          <Strong>addition</Strong> and <Strong>multiplication</Strong>.
        </Em>
      </P>
      {episode10[i++]()}
      {episode10[i++]()}
      <EmojiSeparator emojis={['➕', '🍱', '✖️']} />
      <P>
        <Strong>Also:</Strong> I won’t go into details, but{' '}
        {h('ycBentoBox', true)} can also do <Strong>subtraction</Strong> and{' '}
        <Strong>division</Strong>.
      </P>
      <EmojiSeparator emojis={['➖', '🍱', '➗']} />
      <P>
        <Strong>In other words:</Strong>{' '}
        <Em>
          “Bento boxes” <Emoji>🍱</Emoji> can do math. It’s like a{' '}
          <Strong>calculator</Strong>.
        </Em>
      </P>
      <P>I don’t know if you agree, but I think this is really cool!</P>
      <EmojiSeparator emojis={['🔢', '😲', '🔢']} />
      <H3>Next Up: Logic</H3>
      <P>
        Can {h('ycBentoBox', true)} do more? <Strong>Yes it can!</Strong>
      </P>
      <P>
        In the next page, we’ll explore how {h('ycBentoBox', true)} can perform{' '}
        <Strong>logical operations.</Strong>
      </P>
      <YcNextLessonButton nextEpisodeNumber={10} />
    </>
  )
}

import React from 'react'
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode3 } from 'src/components/Yc/AllExpressionRunners'
import InlineBackground from 'src/components/Yc/InlineBackground'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 2)}
      {episode3[i++]()}
      <P>
        <Strong>Answer:</Strong> Here’s the annotated version:
      </P>
      {episode3[i++]()}
      <P>Therefore, the above {h('ycBentoBox')} represents:</P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥗</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🥗</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥩</Emoji>
        </UlLi>
      </Ul>
      <H3>What will happen next?</H3>
      <P>
        In the above scenario, after you eat salad <Emoji>🥗</Emoji>, the chef
        brings steak <Emoji>🥩</Emoji>. So eventually,{' '}
        <Em>
          the steak <Emoji>🥩</Emoji> will be the only dish
        </Em>
        :
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>
        </UlLi>
      </Ul>
      <P>
        <Strong>Let’s see what happens to the {h('ycBentoBox')}:</Strong>
      </P>
      {episode3[i++]()}
      <P>
        The salad <Emoji>🥗</Emoji> on the bottom right <Strong>matches</Strong>{' '}
        with what you’re eating next <Emoji>😋</Emoji>. We indicate this{' '}
        <Strong>match</Strong> using the{' '}
        <Em>
          star background <InlineBackground bgPattern="star" />.
        </Em>
      </P>
      {episode3[i++]()}
      <P>
        After you eat the salad <Emoji>🥗</Emoji> on the bottom right, it{' '}
        <Em>will be replaced</Em> by the steak <Emoji>🥩</Emoji>. We indicate
        this using{' '}
        <Em>
          the <Emoji>🆕</Emoji> icon
        </Em>
        .
      </P>
      {episode3[i++]()}
      <P>
        The salad <Emoji>🥗</Emoji> on the bottom left and the steak{' '}
        <Emoji>🥩</Emoji> on the top <Em>will disappear</Em>. We indicate this
        using the{' '}
        <Em>
          “X” background <InlineBackground bgPattern="cross" />
        </Em>
        .
      </P>
      {episode3[i++]()}
      <P>
        In the end, only the steak <Emoji>🥩</Emoji> remains:
      </P>
      {episode3[i++]()}
      <H3>The Next and Previous Buttons</H3>
      <P>
        To see this interactively, I’ve added the {h('ycNext')} and{' '}
        {h('ycPrevious')} buttons.
      </P>
      <Ol>
        <OlLi>
          In the {h('ycBentoBox')} below, {h('ycTryUntilDone', false)}.
        </OlLi>
        <OlLi>
          Then <Em>try pressing {h('ycPrevious')} a few times</Em>.
        </OlLi>
      </Ol>
      {episode3[i++]()}
      <P>Try this one from the last episode too!</P>
      {episode3[i++]()}
      <P>Hope you get the idea.</P>
      <EmojiSeparator emojis={['⏪', '🤗', '⏩']} />
      <P>Now, time for some quiz…</P>
      <H3>Quiz</H3>
      <P>Suppose that currently the {h('ycBentoBox')} looks like this:</P>
      {episode3[i++]()}
      <P>
        <Strong>True or False:</Strong>{' '}
        <Em>Will the above {h('ycBentoBox')} eventually turn into this?</Em>
      </P>
      {episode3[i++]()}
      <P>It’s ok if you are not sure - I will explain on the next episode!</P>
      <YcNextLessonButton nextEpisodeNumber={4} />
    </>
  )
}

import React from 'react'
import {
  Em,
  H3,
  InternalLink,
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
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
        <InternalLink href={yc(2)}>the quiz from the last episode</InternalLink>
        :
      </P>
      {episode3[i++]()}
      <P>
        <Strong>Answer:</Strong> the above {h('ycBentoBox')} represents:
      </P>
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
      <P>Here’s the annotated version:</P>
      {episode3[i++]()}
      <H3>What will happen in the next step?</H3>
      <P>
        In the above scenario, after you eat salad <Emoji>🥗</Emoji>, the chef
        brings steak <Emoji>🥩</Emoji>. So in the next step,{' '}
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
        <Strong>What happens to the {h('ycBentoBox')}:</Strong>
      </P>
      <Ul>
        <UlLi>
          The salad <Emoji>🥗</Emoji> on the bottom right{' '}
          <Em>
            will be replaced <Emoji>🆕</Emoji>
          </Em>{' '}
          by the steak <Emoji>🥩</Emoji>.
        </UlLi>
        <UlLi>
          The salad <Emoji>🥗</Emoji> on the bottom left and the steak{' '}
          <Emoji>🥩</Emoji> on the top <Em>will disappear</Em>.
        </UlLi>
      </Ul>
      {episode3[i++]()}
      <P>Therefore, it’ll look like this:</P>
      {episode3[i++]()}
      <H3>The Next and Previous Buttons</H3>
      <P>
        To see this interactively, I’ve added the {h('ycNext')} and{' '}
        {h('ycPrevious')} buttons.
      </P>
      <Ol>
        <OlLi>
          In the {h('ycBentoBox')} below,{' '}
          <Em>
            try pressing {h('ycNext')} several times until you see {h('ycDone')}
            .
          </Em>{' '}
          Eventually, the steak <Emoji>🥩</Emoji> will be the only dish.
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

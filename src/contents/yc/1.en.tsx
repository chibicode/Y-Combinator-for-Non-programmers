import React from 'react'
import {
  Blockquote,
  Em,
  ExternalLink,
  H3,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode2 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <P>
        First, we’ll talk about <Strong>Bento Boxes</Strong>.
      </P>
      <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
      <P>
        <Strong>Bento boxes</Strong> <Emoji>🍱</Emoji> are{' '}
        <Em>traditional Japanese lunch boxes</Em>. Here’s what{' '}
        <ExternalLink href="https://simple.wikipedia.org/wiki/Bento">
          Wikipedia (Simple English)
        </ExternalLink>{' '}
        says:
      </P>
      <Blockquote>
        <P>
          <Strong>Bento [box]</Strong> is a meal common in Japanese cuisine,
          made to take away from home to be eaten somewhere else. A traditional
          bento consists of rice, fish or meat, and one or more pickled or
          cooked vegetables as a side dish. ... People often take bento for a
          picnic.
        </P>
      </Blockquote>
      <P>
        In this tutorial, we’re going to play with an{' '}
        <Em>
          interactive bento box <Emoji>🍱</Emoji>
        </Em>
        . Here’s what it looks like. Each cell has a food item.
      </P>
      {episode2[i++]()}
      <P>
        <Strong>But what does each cell mean?</Strong> Let me explain.
      </P>
      <P>
        <Em>
          The <Strong>bottom right</Strong> cell represents all available dishes{' '}
          <Emoji>🍽</Emoji>.
        </Em>{' '}
        In this case, the only available dish is sushi <Emoji>🍣</Emoji>.
      </P>
      {episode2[i++]()}
      <P>
        <Em>
          Next, the <Strong>bottom left</Strong> cell represents what you’re
          eating next <Emoji>😋</Emoji>.
        </Em>{' '}
        In this case, you’ll be eating sushi <Emoji>🍣</Emoji> next.
      </P>
      {episode2[i++]()}
      <P>
        Finally,{' '}
        <Em>
          the <Strong>top</Strong> cell represents what the chef{' '}
          <Emoji>👨‍🍳</Emoji> is preparing.
        </Em>{' '}
        In this case, the chef is preparing sandwich <Emoji>🥪</Emoji>.
      </P>
      {episode2[i++]()}
      <P>
        <Strong>So:</Strong> the above {h('ycBentoBox')} represents the
        following scenario.
      </P>
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🍣</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🍣</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🥪</Emoji>
        </UlLi>
      </Ul>
      <P>Let’s do a quiz to check if you understood this!</P>
      <EmojiSeparator emojis={['❓', '🤔', '❓']} />
      <H3>Quiz</H3>
      <P>What scenario does the this {h('ycBentoBox')} represent?</P>
      {episode2[i++]()}
      <Ul size="lg">
        <UlLi>
          <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">❓</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">❓</Emoji>
        </UlLi>
        <UlLi>
          <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">❓</Emoji>
        </UlLi>
      </Ul>
      <P>Go to the next page to find out the answer!</P>
      <YcNextLessonButton nextEpisodeNumber={2} />
    </>
  )
}

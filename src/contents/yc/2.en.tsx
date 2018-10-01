import React from 'react'
import {
  Blockquote,
  Em,
  ExternalLink,
  P,
  Strong,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import ExpressionExecutor from 'src/components/Yc/ExpressionExecutor'
import { infiniteLoop } from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <Strong>Quiz Review:</Strong> Let’s take a look at the quiz from the last
      episode:
    </P>
    <Ul size="lg">
      <UlLi>
        <Emoji size="lg">🍽</Emoji> Dishes → <Emoji size="lg">🥩</Emoji>{' '}
        <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">😋</Emoji> Eating → <Emoji size="lg">🥗</Emoji>
      </UlLi>
      <UlLi>
        <Emoji size="lg">👨‍🍳</Emoji> Preparing → <Emoji size="lg">🌮</Emoji>
      </UlLi>
    </Ul>
    <P>
      <Strong>The answer is</Strong>: <Emoji size="lg">🥩</Emoji>{' '}
      <Emoji size="lg">🥪</Emoji> <Emoji size="lg">🌮</Emoji>. Hope you got it
      right!
    </P>
    <P>
      Now, let’s move on to the next topic: <Strong>Bento Boxes</Strong>.
    </P>
    <EmojiSeparator emojis={['🍱', '🤔', '🍱']} />
    <P>
      Bento boxes are <Em>traditional Japanese lunch boxes</Em> (as shown in the
      above emojis). Here’s what{' '}
      <ExternalLink href="https://simple.wikipedia.org/wiki/Bento">
        Wikipedia (Simple English)
      </ExternalLink>{' '}
      says:
    </P>
    <Blockquote>
      <P>
        <Strong>Bento [box]</Strong> is a meal common in Japanese cuisine, made
        to take away from home to be eaten somewhere else. A traditional bento
        consists of rice, fish or meat, and one or more pickled or cooked
        vegetables as a side dish. ... People often take bento for a picnic.
      </P>
    </Blockquote>
    <P>
      In this tutorial, we’re going to play with an{' '}
      <Em>interactive bento box</Em>. Here’s what it looks like:
    </P>
    <ExpressionExecutor expressionContainer={infiniteLoop} />
  </>
)

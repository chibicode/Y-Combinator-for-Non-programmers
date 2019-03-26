import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode8 } from 'src/components/Yc/AllExpressionRunners'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <H3>The {h('ycPlay')} Button</H3>
      <P>
        Because we’re now at an intermediate level, we have a new functionality
        for you: <Strong>the {h('ycPlay')} button</Strong>.
      </P>
      <P>
        <Em>Try pressing on {h('ycPlay')} below.</Em>
      </P>
      {episode8[i++]()}
      <P>It automatically advances the {h('ycBentoBox')} for you.</P>
      <EmojiSeparator emojis={['▶️', '🤗', '▶️']} />
      <P>
        Now, let’s talk about the <Strong>Secret Code</Strong>.
      </P>
      <H3>Secret Code</H3>
      <P>
        In this page, I’ll show you some {h('ycBentoBox', true)}. Each one
        contains hidden <Strong>secret code</Strong> which follows a{' '}
        <Strong>pattern</Strong>.{' '}
      </P>
      <P>
        <Em>
          <Strong>Challenge:</Strong> I want you to figure out what the pattern
          is
        </Em>
        .
      </P>
      <EmojiSeparator emojis={['🔢', '🧐', '️🔢']} />
      <H3>Secret Code: Examples</H3>
      <P>
        This one has the secret code <Strong>1</Strong>:
      </P>
      {episode8[i++]()}
      <P>
        This one has the secret code <Strong>2</Strong>:
      </P>
      {episode8[i++]()}
      <P>
        This one has the secret code <Strong>3</Strong>:
      </P>
      {episode8[i++]()}
      <P>Did you figure out the pattern? Let’s do a quiz!</P>
      <H3>Quiz: Guess the Secret Code</H3>
      <P>What’s the secret code of the following {h('ycBentoBox')}?</P>
      {episode8[i++]()}
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>The Answer</H3>
      <P>
        <Strong>Answer:</Strong>{' '}
        <Em>
          The secret code is <Strong>5</Strong>
        </Em>
        .
      </P>
      <P>
        <Strong>The Pattern:</Strong>
      </P>
      <Ul>
        <UlLi>
          There are 2 kinds of dishes <Strong>A</Strong> and <Strong>B</Strong>{' '}
          (<Emoji size="mdlg">🍝</Emoji> and <Emoji size="mdlg">🍚</Emoji>
          ).
        </UlLi>
        <UlLi>
          <Strong>A:</Strong> Dishes in the <Strong>middle</Strong> section and
          the <Strong>top right</Strong> section (<Emoji size="mdlg">🍝</Emoji>
          ).
        </UlLi>
        <UlLi>
          <Strong>B:</Strong> Dishes in the <Strong>left</Strong> section and
          the <Strong>remaining sections in the right</Strong>. (
          <Emoji size="mdlg">🍚</Emoji>
          ).
        </UlLi>
        <UlLi>
          <Em>
            The number of <Strong>B</Strong>
            ’s in the right-most sections is the <Strong>secret code</Strong> (
            <Emoji size="mdlg">🍚</Emoji> <Emoji size="mdlg">🍚</Emoji>{' '}
            <Emoji size="mdlg">🍚</Emoji> <Emoji size="mdlg">🍚</Emoji>{' '}
            <Emoji size="mdlg">🍚</Emoji> = <Strong>5</Strong>)
          </Em>
        </UlLi>
        {episode8[i++]()}
        <P>
          <Strong>Was it too easy?</Strong> Well ok, here’s something more
          challenging…
        </P>
        <EmojiSeparator emojis={['🔢', '🧐', '️🔢']} />
        <H3>Quiz: What will happen next?</H3>
        <P>
          Suppose we have the {h('ycBentoBox')} with the{' '}
          <Em>
            secret code <Strong>2</Strong>
          </Em>
          .
        </P>
        {episode8[i++]()}
        <P>
          <Strong>We’ll combine it</Strong> with the following {h('ycBentoBox')}
          :
        </P>
        {episode8[i++]()}
        <P>So it becomes:</P>
        {episode8[i++]()}
        <P>
          <Strong>Question:</Strong> What do you think will happen when you step
          through this until it’s {h('ycDone')}?
        </P>
        <P>
          <Strong>Hint:</Strong> the secret code on the top part was{' '}
          <Strong>2</Strong>. <Em>This will change to something new</Em>. What
          do you think will be the new secret code?
        </P>
        <YcNextLessonButton nextEpisodeNumber={8} />
      </Ul>
    </>
  )
}

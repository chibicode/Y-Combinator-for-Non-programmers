import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode8 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
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
        Next, we’ll talk about the <Strong>two patterns.</Strong>
      </P>
      <H3>First Pattern</H3>
      <P>Take a look at this {h('ycBentoBox')}:</P>
      {episode8[i++]()}
      <P>
        Now, suppose we say <Emoji size="mdlg">🍣</Emoji> ={' '}
        <Emoji size="mdlg">1️⃣</Emoji> and <Emoji size="mdlg">🥪</Emoji> ={' '}
        <Emoji size="mdlg">2️⃣</Emoji>.
      </P>
      <P>
        Then <InlineEmojiBoxes emojis={['🍣', '🥪', '🍣']} /> has the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />.
      </P>
      <H3>Second Pattern</H3>
      <P>How about this one?</P>
      {episode8[i++]()}
      <P>
        <Strong>Answer:</Strong> If we say <Emoji size="mdlg">🥗</Emoji> ={' '}
        <Emoji size="mdlg">1️⃣</Emoji> and <Emoji size="mdlg">🥩</Emoji> ={' '}
        <Emoji size="mdlg">2️⃣</Emoji>, then this one has the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
      </P>
      <H3>Question</H3>
      <P>
        Now, here’s the question. Let’s take the one with the pattern{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />:
      </P>
      {episode8[i++]()}
      <P>And we’ll take this {h('ycBentoBox')}</P>
      {episode8[i++]()}
      <P>And we’ll combine them:</P>
      {episode8[i++]()}
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>What do you think will happen when it’s {h('ycDone')}?</Em>
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Let’s Try!</H3>
      <P>
        <Strong>Tip:</Strong> <Em>There’s now the {h('ycPlay')} button</Em>{' '}
        which will automatically advance the {h('ycBentoBox')} until it’s{' '}
        {h('ycDone')}.
      </P>
      {episode8[i++]()}
      <P>So the end result was:</P>
      {episode8[i++]()}
      <P>
        <Strong>Now:</Strong> <Em>Which pattern is this?</Em>
      </P>
      <P>
        <Strong>Answer:</Strong> The pattern is{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
      </P>
      <H3>To Summarize:</H3>
      <Ul>
        <UlLi>
          We started with <InlineEmojiBoxes emojis={['🍣', '🥪', '🍣']} />,
          which had the pattern <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
          .
        </UlLi>
        <UlLi>
          We ended up with <InlineEmojiBoxes emojis={['🍕', '🍛', '🍛']} />,
          which has the pattern <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />
          .
        </UlLi>
        <UlLi>
          <Em>
            So <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> became{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
          </Em>
        </UlLi>
      </Ul>
      <P>Hmm… This is interesting!</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Quiz</H3>
      <P>
        What if we start with <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
        instead? In other words, if we combine this:
      </P>
      {episode8[i++]()}
      <P>With this again:</P>
      {episode8[i++]()}
      <P>
        <Strong>Question:</Strong> What will be the end result of this{' '}
        {h('ycBentoBox')}?
      </P>
      {episode8[i++]()}
      <P>
        <Em>
          Do you think it will become{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />?
        </Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={9} />
    </>
  )
}

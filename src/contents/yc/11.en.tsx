import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode11 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <H3>
        <Strong>True</Strong> and <Strong>False</Strong>
      </H3>
      <P>
        When we talk about logic, a statement can be <Strong>True</Strong> or{' '}
        <Strong>False</Strong>. For example:
      </P>
      <Ul>
        <UlLi>
          The statement <Em>“1 + 1 = 2”</Em> is <Strong>True</Strong>.
        </UlLi>
        <UlLi>
          The statement <Em>“1 + 1 = 3”</Em> is <Strong>False</Strong>.
        </UlLi>
      </Ul>
      <P>
        Now, we’ll use the following circles to describe <Strong>True</Strong>{' '}
        and <Strong>False</Strong>:
      </P>
      <Ul>
        <UlLi>
          <Em>
            <Emoji size="mdlg">🔴</Emoji> <Emoji size="mdlg">⚫️</Emoji>{' '}
            <Emoji size="mdlg">🔴</Emoji> means <Strong>True</Strong>.
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            <Emoji size="mdlg">🔴</Emoji> <Emoji size="mdlg">⚫️</Emoji>{' '}
            <Emoji size="mdlg">⚫️</Emoji> means <Strong>False</Strong>.
          </Em>
        </UlLi>
        <P>
          <Strong>Don’t worry:</Strong> You don’t need to memorize this. But
          first, let me explain <Em>why we’re using these emojis</Em>.
        </P>
      </Ul>
      <H3>A “True” Bento Box</H3>
      <P>Take a look at this {h('ycBentoBox')}:</P>
      {episode11[i++]()}
      <P>
        Notice that <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} /> has the
        pattern <InlineEmojiBoxes emojis={['🔴', '⚫️', '🔴']} />.
      </P>
      <P>
        We earlier said that <Emoji>🔴</Emoji> <Emoji>⚫️</Emoji>{' '}
        <Emoji>🔴</Emoji> means <Strong>True</Strong>.
      </P>
      <P>
        So, this {h('ycBentoBox')} means <Strong>True</Strong>.
      </P>
      {episode11[i++]()}
      <H3>A “False” Bento Box</H3>
      <P>How about this one?</P>
      {episode11[i++]()}
      <P>
        Notice that <InlineEmojiBoxes emojis={['🥩', '🍔', '🍔']} /> has the
        pattern <InlineEmojiBoxes emojis={['🔴', '⚫️', '⚫️']} />.
      </P>
      <P>
        We earlier said that <Emoji>🔴</Emoji> <Emoji>⚫️</Emoji>{' '}
        <Emoji>⚫️</Emoji> means <Strong>False</Strong>.
      </P>
      <P>
        So, this {h('ycBentoBox')} means <Strong>False</Strong>.
      </P>
      {episode11[i++]()}
      <H3>Question</H3>
      <P>
        Now, we’ll take this {h('ycTrue')} {h('ycBentoBox')}:
      </P>
      {episode11[i++]()}
      <P>And we’ll take this {h('ycBentoBox')}:</P>
      {episode11[i++]()}
      <P>And we’ll combine them:</P>
      {episode11[i++]()}
      <P>
        <Strong>Question:</Strong>{' '}
        <Em>What do you think will happen when it’s {h('ycDone')}?</Em>
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Let’s Try!</H3>
      <P>{h('ycPlayUntilDone')}:</P>
      {episode11[i++]()}
      <P>So the end result was:</P>
      {episode11[i++]()}
      <P>
        Notice that <InlineEmojiBoxes emojis={['🥗', '🥩', '🥩']} /> has the
        pattern <InlineEmojiBoxes emojis={['🔴', '⚫️', '⚫️']} />.
      </P>
      <P>
        <Strong>Answer:</Strong> The pattern is{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
      </P>
      <H3>To Summarize:</H3>
      <Ul>
        <UlLi>
          We started with <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} />,
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
      {episode11[i++]()}
      <P>With this again:</P>
      {episode11[i++]()}
      <P>
        <Strong>Question:</Strong> What will be the end result of this{' '}
        {h('ycBentoBox')}?
      </P>
      {episode11[i++]()}
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

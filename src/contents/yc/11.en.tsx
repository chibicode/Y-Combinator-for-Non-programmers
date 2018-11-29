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
      <H3>Notations</H3>
      <P>
        Now, we’ll use the following notation to describe <Strong>True</Strong>{' '}
        and <Strong>False</Strong>:
      </P>
      <Ul>
        <UlLi>
          <Em>
            <Emoji size="mdlg">🔵</Emoji> <Emoji size="mdlg">🔴</Emoji>{' '}
            <Emoji size="mdlg">🔵</Emoji> means <Strong>True</Strong>.
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            <Emoji size="mdlg">🔵</Emoji> <Emoji size="mdlg">🔴</Emoji>{' '}
            <Emoji size="mdlg">🔴</Emoji> means <Strong>False</Strong>.
          </Em>
        </UlLi>
      </Ul>
      <P>
        <Strong>You don’t need to memorize this notation.</Strong> But here’s an
        easy way to distinguish between the two.
      </P>
      <Ol>
        <OlLi>
          Look at the <Em>right-most circle</Em>.
        </OlLi>
        <OlLi>
          <Strong>If it’s blue</Strong> <Emoji size="mdlg">🔵</Emoji> then it’s{' '}
          <Strong>True</Strong>. So <Emoji>🔵</Emoji> <Emoji>🔴</Emoji>{' '}
          <Emoji>🔵</Emoji> means <Strong>True</Strong>.
        </OlLi>
        <OlLi>
          <Strong>If it’s red</Strong> <Emoji size="mdlg">🔴</Emoji> then it’s{' '}
          <Strong>False</Strong>. So <Emoji>🔵</Emoji> <Emoji>🔴</Emoji>{' '}
          <Emoji>🔴</Emoji> means <Strong>False</Strong>.
        </OlLi>
      </Ol>
      <P>
        Now, we’ll take a look at {h('ycBentoBox', true)} that represent True /
        False.
      </P>
      <H3>A “True” Bento Box</H3>
      <P>Take a look at this {h('ycBentoBox')}:</P>
      {episode11[i++]()}
      <P>
        Notice that <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} /> has the
        pattern <InlineEmojiBoxes emojis={['🔵', '🔴', '🔵']} />.
      </P>
      <P>
        We earlier said that <Emoji>🔵</Emoji> <Emoji>🔴</Emoji>{' '}
        <Emoji>🔵</Emoji> means <Strong>True</Strong>.
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
        pattern <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} />.
      </P>
      <P>
        We earlier said that <Emoji>🔵</Emoji> <Emoji>🔴</Emoji>{' '}
        <Emoji>🔴</Emoji> means <Strong>False</Strong>.
      </P>
      <P>
        So, this {h('ycBentoBox')} means <Strong>False</Strong>.
      </P>
      {episode11[i++]()}
      <P>
        It’s ok if you’re confused. We’ll work on some examples over the next
        few chapters, and things will become clear!
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
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
        Notice that <InlineEmojiBoxes emojis={['🥪', '🥗', '🥗']} /> has the
        pattern <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} />. This means{' '}
        <Strong>False</Strong>.
      </P>
      <H3>To Summarize:</H3>
      <Ul>
        <UlLi>
          We started with <InlineEmojiBoxes emojis={['🥩', '🍔', '🥩']} />,
          which represents {h('ycTrue')}.
        </UlLi>
        <UlLi>
          We ended up with <InlineEmojiBoxes emojis={['🥪', '🥗', '🥗']} />,
          which represents {h('ycFalse')}.
        </UlLi>
        <UlLi>
          <Em>
            So {h('ycTrue')} became {h('ycFalse')}.
          </Em>
        </UlLi>
      </Ul>
      <P>Hmm… This is interesting!</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Quiz</H3>
      <P>
        What if we start with {h('ycFalse')} instead? In other words, if we
        combine this:
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
        <Em>Do you think it will become {h('ycTrue')}?</Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={9} />
    </>
  )
}

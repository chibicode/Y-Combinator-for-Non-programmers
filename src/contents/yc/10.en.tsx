import React from 'react'
import { Em, H3, P, Strong, Ul, UlLi } from 'src/components/ContentTags'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode11 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      <P>
        This time, we’ll talk about the new kind of <Strong>secret code</Strong>
        , called <Strong>Secret Boolean Code</Strong>.{' '}
      </P>
      <P>
        <Em>
          <Strong>“Boolean”</Strong> means <Strong>Yes</Strong> or{' '}
          <Strong>No</Strong>.
        </Em>
      </P>
      <H3>Challenge</H3>
      <P>
        In this page, I’ll show you some {h('ycBentoBox', true)}. Each one
        contains hidden <Strong>secret boolean code</Strong> which follows a{' '}
        <Strong>pattern</Strong>.{' '}
      </P>
      <P>
        <Em>
          <Strong>Challenge:</Strong> Like before, I want you to figure out what
          the pattern is
        </Em>
        .
      </P>
      <EmojiSeparator emojis={['🔵', '🧐', '️🔴']} />
      <H3>Secret Boolean Code: Examples</H3>
      <P>
        This one has the secret boolean code <Strong>Yes</Strong>:
      </P>
      {episode11[i++]()}
      <P>
        This one has the secret boolean code <Strong>No</Strong>:
      </P>
      {episode11[i++]()}
      <P>
        This one has the secret boolean code <Strong>Yes</Strong>:
      </P>
      {episode11[i++]()}
      <P>Did you figure out the pattern? Let’s do a quiz!</P>
      <H3>Quiz: Guess the Secret Boolean Code</H3>
      <P>What’s the secret boolean code of the following {h('ycBentoBox')}?</P>
      {episode11[i++]()}
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>The Answer</H3>
      <P>
        <Strong>Answer:</Strong>{' '}
        <Em>
          The secret boolean code is <Strong>No</Strong>
        </Em>
        .
      </P>
      <P>
        <Strong>The “Yes” Pattern:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            Ones with the boolean code <Strong>Yes</Strong> has this pattern:{' '}
            <InlineEmojiBoxes emojis={['🔵', '🔴', '🔵']} />
          </Em>
        </UlLi>
        <UlLi>
          Example: <InlineEmojiBoxes emojis={['🍗', '🍟', '🍗']} /> and{' '}
          <InlineEmojiBoxes emojis={['🌭', '🍚', '🌭']} />.
        </UlLi>
      </Ul>
      <P>
        <Strong>The “No” Pattern:</Strong>
      </P>
      <Ul>
        <UlLi>
          <Em>
            Ones with the boolean code <Strong>No</Strong> has this pattern:{' '}
            <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} />
          </Em>
        </UlLi>
        <UlLi>
          Example: <InlineEmojiBoxes emojis={['🍕', '🍛', '🍛']} /> and{' '}
          <InlineEmojiBoxes emojis={['🍝', '🥕', '🥕']} />.
        </UlLi>
      </Ul>
      <P>
        <Strong>Was it too easy?</Strong> Well ok, here’s something more
        challenging…
      </P>
      <EmojiSeparator emojis={['🔵', '🧐', '️🔴']} />
      <H3>Question</H3>
      <P>
        Suppose we have the {h('ycBentoBox')} with the{' '}
        <Em>secret boolean code {h('ycYes')}</Em>.
      </P>
      {episode11[i++]()}
      <P>
        <Strong>We’ll combine it</Strong> with the following {h('ycBentoBox')}:
      </P>
      {episode11[i++]()}
      <P>So it becomes:</P>
      {episode11[i++]()}
      <P>
        <Strong>Question:</Strong> What do you think will happen when you step
        through this until it’s {h('ycDone')}?
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Let’s Try!</H3>
      <P>{h('ycPlayUntilDone')}:</P>
      {episode11[i++]()}
      <P>So the end result was:</P>
      {episode11[i++]()}
      <P>
        Notice that <InlineEmojiBoxes emojis={['🥪', '🍔', '🍔']} /> has the
        pattern <InlineEmojiBoxes emojis={['🔵', '🔴', '🔴']} />, so{' '}
        <Em>the secret boolean code is {h('ycNo')}</Em>.
      </P>
      <H3>To Summarize:</H3>
      <Ul>
        <UlLi>
          We started with <InlineEmojiBoxes emojis={['🍗', '🍟', '🍗']} />,
          which has the secret boolean code {h('ycYes')}.
        </UlLi>
        <UlLi>
          We ended up with <InlineEmojiBoxes emojis={['🥪', '🍔', '🍔']} />,
          which has the secret boolean code {h('ycNo')}.
        </UlLi>
        <UlLi>
          <Em>
            So {h('ycYes')} became {h('ycNo')}.
          </Em>
        </UlLi>
      </Ul>
      <P>Hmm… This is interesting!</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Quiz</H3>
      <P>
        What if we start with {h('ycNo')} instead? In other words, if we combine
        this on with {h('ycNo')}:
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
        <Em>Do you think it will become {h('ycYes')}?</Em>
      </P>
      <YcNextLessonButton nextEpisodeNumber={11} />
    </>
  )
}

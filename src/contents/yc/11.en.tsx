/** @jsx jsx */
import { css, jsx } from '@emotion/core'
export const jsxBabelFix = jsx
import {
  Em,
  H3,
  Ol,
  OlLi,
  P,
  Strong,
  Table,
  Td,
  Th,
  Ul,
  UlLi
} from 'src/components/ContentTags'
import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode12 } from 'src/components/Yc/AllExpressionRunners'
import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
import { colors } from 'src/lib/theme'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 11)}
      <P>{h('ycPlayUntilDone')}:</P>
      {episode12[i++]()}
      <P>So the result was {h('ycYes')}:</P>
      {episode12[i++]()}
      <H3>To Summarize:</H3>
      <Ul>
        <UlLi>
          We started with <InlineEmojiBoxes emojis={['🍗', '🍟', '🍟']} />,
          which has the secret boolean code {h('ycNo')}.
        </UlLi>
        <UlLi>
          We ended up with <InlineEmojiBoxes emojis={['🥪', '🍔', '🥪']} />,
          which has the secret boolean code {h('ycYes')}.
        </UlLi>
        <UlLi>
          <Em>
            So {h('ycNo')} became {h('ycYes')}.
          </Em>
        </UlLi>
      </Ul>
      <P>Interesting!</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>What this {h('ycBentoBox')} does</H3>
      <P>So, it seems that the following {h('ycBentoBox')}:</P>
      {episode12[i++]()}
      <P>Has the following effects:</P>
      <Ol>
        <OlLi>
          <Em>
            Turns {h('ycYes')} into {h('ycNo')} (from the last page).
          </Em>
        </OlLi>
        <OlLi>
          <Em>
            Turns {h('ycNo')} into {h('ycYes')}.
          </Em>
        </OlLi>
      </Ol>
      <P>
        <Strong>In other words:</Strong> this bento box means{' '}
        <Strong>“NOT”</Strong>.
      </P>
      {episode12[i++]()}
      <P>
        <Strong>NOT</Strong> {h('ycYes')} is {h('ycNo')}.
      </P>
      {episode12[i++]()}
      <P>
        And <Strong>NOT</Strong> {h('ycNo')} is {h('ycYes')}.
      </P>
      {episode12[i++]()}
      <P>Now, here’s the key question:</P>
      <H3>
        Is there any other {h('ycBentoBox', true)} that also have interesting
        effects?
      </H3>
      <P>
        <Strong>
          Answer: <Em>Yes.</Em> <Emoji>👍</Emoji>
        </Strong>{' '}
        Consider this one:
      </P>
      {episode12[i++]()}
      <H3>Scenario 1 of 4</H3>
      <P>
        First, we will put two <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        ’s on top.
      </P>
      {episode12[i++]()}
      <P>{h('ycPlayUntilDone')} and see what happens:</P>
      {episode12[i++]()}
      <P>
        <Strong>Result:</Strong> It ended up as{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />.
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Scenario 2 of 4</H3>
      <P>
        What if we put <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> and{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> at the top?{' '}
        {h('ycPlayUntilDone')} and see what happens:
      </P>
      {episode12[i++]()}
      <P>
        <Strong>Result:</Strong> It ended up as{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> again.
      </P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Scenario 3 of 4</H3>
      <P>
        What if we reverse and put{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> and{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> at the top?{' '}
        {h('ycPlayUntilDone')} and see what happens:
      </P>
      {episode12[i++]()}
      <P>
        <Strong>Result:</Strong> It ended up as{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> again.
      </P>
      <P>
        So far, it seems like{' '}
        <Em>
          it’ll always end up as{' '}
          <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />
        </Em>
        . But we have one more scenario to try.
      </P>
      <H3>Scenario 4 of 4</H3>
      <P>
        Finally, what if we put <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />{' '}
        and <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> at the top?{' '}
        {h('ycPlayUntilDone')} and see what happens:
      </P>
      {episode12[i++]()}
      <P>
        <Strong>Wow!</Strong> <Emoji>😲</Emoji> This time, it ended up as{' '}
        <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
      </P>
      <EmojiSeparator emojis={['😲', '😲', '😲']} />
      <P>So this one’s a bit different from the other three scenarios!</P>
      <H3>What this {h('ycBentoBox')} does</H3>
      <P>So, it seems that the following {h('ycBentoBox')}:</P>
      {episode12[i++]()}
      <P>Has the following effects:</P>
      <Ul>
        <UlLi>
          <Em>
            Turns <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> and{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> into{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />.
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            Turns <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> and{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> into{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />.
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            Turns <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> and{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} /> into{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '1️⃣']} />.
          </Em>
        </UlLi>
        <UlLi>
          <Em>
            Turns <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> and{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} /> into{' '}
            <InlineEmojiBoxes emojis={['1️⃣', '2️⃣', '2️⃣']} />.
          </Em>
        </UlLi>
      </Ul>
      <P>Hmm… this kind of looks familiar…</P>
      <EmojiSeparator emojis={['🤔', '🤔', '🤔']} />
      <H3>Quiz</H3>
      <P>
        <Strong>Does these examples remind you of something?</Strong> Maybe
        something you’ve done in a <Em>high school math/logic class</Em>?
      </P>
      <P>
        (Or, if you have done some coding, can you think of a concept similar to
        this?)
      </P>
      <P>
        <Strong>Hint:</Strong> Have you seen a table like this?{' '}
        <Emoji>😉</Emoji> Can you see a similarity between this table and what
        we did earlier?
      </P>
      <Table>
        <thead>
          <tr>
            <Th>A</Th>
            <Th>B</Th>
            <Th>A OR B</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
          </tr>
          <tr>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              False
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
          </tr>
          <tr>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              False
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
            <Td
              css={css`
                background-color: ${colors('yellow100')};
              `}
            >
              True
            </Td>
          </tr>
          <tr>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              False
            </Td>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              False
            </Td>
            <Td
              css={css`
                background-color: ${colors('pink50')};
              `}
            >
              False
            </Td>
          </tr>
        </tbody>
      </Table>
      <YcNextLessonButton nextEpisodeNumber={12} />
    </>
  )
}

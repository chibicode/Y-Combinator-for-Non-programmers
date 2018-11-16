// import { css } from 'emotion'
import React from 'react'
import {
  Em,
  H3,
  P,
  Strong
  // Table,
  // Td,
  // Th,
  // Ul,
  // UlLi
} from 'src/components/ContentTags'
// import Emoji from 'src/components/Emoji'
import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
// import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
// import { colors } from 'src/lib/theme'

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
      {episode10[i++]()}
      <P>It automatically advances the {h('ycBentoBox')} for you.</P>
      <EmojiSeparator emojis={['▶️', '🤗', '▶️']} />
    </>
  )
}

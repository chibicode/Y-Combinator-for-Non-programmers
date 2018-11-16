// import { css } from 'emotion'
import React from 'react'
import {
  // Em,
  // H3,
  P
  // Strong,
  // Table,
  // Td,
  // Th,
  // Ul,
  // UlLi
} from 'src/components/ContentTags'
// import Emoji from 'src/components/Emoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
// import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'
// import { colors } from 'src/lib/theme'

export default () => {
  let i = 0
  return (
    <>
      <P>{h('ycPlayUntilDone')}:</P>
      {episode10[i++]()}
    </>
  )
}

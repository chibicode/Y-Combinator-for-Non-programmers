import React from 'react'
import {
  // Em,
  // H3,
  P
  // Strong,
  //  Ul,
  //  UlLi
} from 'src/components/ContentTags'
// import Emoji from 'src/components/Emoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode9 } from 'src/components/Yc/AllExpressionRunners'
// import InlineEmojiBoxes from 'src/components/Yc/InlineEmojiBoxes'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycPlayUntilDone')}:</P>
      {episode9[i++]()}
    </>
  )
}

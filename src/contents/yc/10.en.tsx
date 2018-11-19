import React from 'react'
import {
  // Em,
  // H3,
  P
  // Strong
} from 'src/components/ContentTags'
// import EmojiSeparator from 'src/components/EmojiSeparator'
import { episode10 } from 'src/components/Yc/AllExpressionRunners'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
import h from 'src/lib/h'

export default () => {
  let i = 0
  return (
    <>
      {h('ycQuizReview', 8)}
      <P>{h('ycPlayUntilDone')}:</P>
      {episode10[i++]()}
    </>
  )
}

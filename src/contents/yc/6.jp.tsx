import React from 'react'
import {
  // Em,
  // H3,
  InternalLink,
  // Ol,
  // OlLi,
  P,
  Strong
  // Ul,
  // UlLi
} from 'src/components/ContentTags'
import { episode6 } from 'src/components/Yc/AllExpressionRunners'
// import Emoji from 'src/components/Emoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
// import YcNextLessonButton from 'src/components/Yc/YcNextLessonButton'
// import InlineBackground from 'src/components/Yc/InlineBackground'
// import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
// import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'

export default () => {
  let i = 0
  return (
    <>
      <P>
        <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
        <InternalLink href={yc(4)}>the quiz from the last episode</InternalLink>
        :
      </P>
      {episode6[i++]()}
    </>
  )
}

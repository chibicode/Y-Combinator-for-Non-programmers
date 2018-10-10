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
// import Emoji from 'src/components/Emoji'
// import EmojiSeparator from 'src/components/EmojiSeparator'
// import NextLessonButton from 'src/components/NextLessonButton'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
// import InlineBackground from 'src/components/Yc/InlineBackground'
// import InlinePrioritiesLabel from 'src/components/Yc/InlinePrioritiesLabel'
// import h from 'src/lib/h'
import { yc } from 'src/lib/pathHelpers'
import {
  episode6Expression1
  // episode5Expression1,
  // episode5Expression2
} from 'src/lib/yc/lessonExpressions'

export default () => (
  <>
    <P>
      <Strong>Quiz Review:</Strong> Let’s take a look at{' '}
      <InternalLink href={yc(4)}>the quiz from the last episode</InternalLink>:
    </P>
    <ExpressionRunner
      expressionContainer={episode6Expression1}
      showPriorities
      showControls
      containerSize={'xs'}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
  </>
)

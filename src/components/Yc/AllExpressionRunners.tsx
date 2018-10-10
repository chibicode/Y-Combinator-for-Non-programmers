import React from 'react'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import {
  episode2Expression1,
  episode2Expression2
} from 'src/lib/yc/lessonExpressions'

// NOTE: Use functions instead of just JSX.Element inside because
// linter will complain that it's missing the key attribute
export const episode2 = [
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression1}
      showPriorities={false}
      showExplanations={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToHighlight'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression1}
      showPriorities={false}
      showExplanations={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'funcBodyJustHighlighted'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression1}
      showPriorities={false}
      showExplanations={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'funcArgJustHighlighted'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression1}
      showPriorities={false}
      showExplanations={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression2}
      showPriorities={false}
      showExplanations={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToHighlight'
        }
      ]}
    />
  )
]

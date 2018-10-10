import React from 'react'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import {
  episode2Expression1,
  episode2Expression2,
  episode3Expression1
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

export const episode3 = [
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression2}
      showPriorities={false}
      showControls={false}
      showExplanations={false}
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
      expressionContainer={episode2Expression2}
      showPriorities={false}
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
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'justBetaReduced'
        },
        {
          type: 'stepForwardUntilContainerState',
          state: 'done'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={episode2Expression2}
      showPriorities={false}
      showControls
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
      showControls
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
      expressionContainer={episode3Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToBetaReduce'
        }
      ]}
    />
  )
]

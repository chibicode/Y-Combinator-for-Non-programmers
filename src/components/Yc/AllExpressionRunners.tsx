import React from 'react'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import * as lessonExpressions from 'src/lib/yc/lessonExpressions'

export const introduction = [
  () => (
    <ExpressionRunner
      containerSize={'xs'}
      expressionContainer={lessonExpressions.yCombinatorContainer}
      hideControls
      variableSize={'lg'}
    />
  )
]

// NOTE: Use functions instead of just JSX.Element inside because
// linter will complain that it's missing the key attribute
export const episode2 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewBefore'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewAfter'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode2Expression2}
      hidePriorities
      resetIndex
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
      expressionContainer={lessonExpressions.episode2Expression1}
      hidePriorities
      resetIndex
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
      expressionContainer={lessonExpressions.episode3Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode3Expression1}
      hidePriorities
      hideControls
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
  )
]

export const episode4 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode3Expression1}
      hidePriorities
      resetIndex
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
      expressionContainer={lessonExpressions.episode3Expression1}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode3Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      hideControls
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
      expressionContainer={lessonExpressions.episode4Expression1}
      hidePriorities
      resetIndex
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
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
      hidePriorities
      hideControls
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
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
      hidePriorities
      hideControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
    />
  )
]

export const episode5 = [
  () => (
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
      hidePriorities
      resetIndex
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
      expressionContainer={lessonExpressions.episode5Expression1}
      hideOuterMostPrioritiesExplanation
      hideControls
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hideOuterMostPrioritiesExplanation
      variableSize={'lg'}
      maxStepsAllowed={1}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hideOuterMostPrioritiesExplanation
      variableSize={'lg'}
      lastAllowedExpressionState="betaReducePreviewCrossed"
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
      expressionContainer={lessonExpressions.episode5Expression1}
      hideOuterMostPrioritiesExplanation
      variableSize={'lg'}
      maxStepsAllowed={1}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'betaReducePreviewCrossed'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hideOuterMostPrioritiesExplanation
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        },
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'default'
        }
      ]}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      hideOuterMostPrioritiesExplanation
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression2}
      hideOuterMostPrioritiesExplanation
      hideControls
      variableSize={'lg'}
    />
  )
]

export const episode6 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression1}
      containerSize={'xs'}
      variableSize={'lg'}
    />
  )
]

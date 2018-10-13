import React from 'react'
import ExpressionRunner from 'src/components/Yc/ExpressionRunner'
import * as lessonExpressions from 'src/lib/yc/lessonExpressions'

// NOTE: Use functions instead of just JSX.Element inside because
// linter will complain that it's missing the key attribute
export const episode2 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
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
      expressionContainer={lessonExpressions.episode2Expression1}
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
      expressionContainer={lessonExpressions.episode2Expression1}
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
      expressionContainer={lessonExpressions.episode2Expression1}
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
      expressionContainer={lessonExpressions.episode2Expression2}
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
      expressionContainer={lessonExpressions.episode2Expression2}
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
      expressionContainer={lessonExpressions.episode2Expression2}
      showPriorities={false}
      showControls={false}
      showExplanations={false}
      variableSize={'lg'}
      hideStar
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
      showPriorities={false}
      showControls={false}
      showExplanations={false}
      hideStar
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
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      showExplanations={false}
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
      showPriorities={false}
      showControls
      variableSize={'lg'}
      showExplanations={false}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToHighlight'
        }
      ]}
      hideStar
      expressionContainerManagerSkipOptions={{
        betaReducePreviewBefore: true
      }}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode2Expression1}
      showPriorities={false}
      showControls
      variableSize={'lg'}
      showExplanations={false}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'readyToHighlight'
        }
      ]}
      hideStar
      expressionContainerManagerSkipOptions={{
        betaReducePreviewBefore: true
      }}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode3Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      showExplanations={false}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
      hideStar
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode3Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      showExplanations={false}
      hideStar
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
      showPriorities={false}
      showExplanations={false}
      showControls
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
      expressionContainerManagerSkipOptions={{
        betaReducePreviewBefore: true
      }}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode3Expression1}
      showPriorities={false}
      showExplanations={false}
      showControls={false}
      variableSize={'lg'}
      hideStar
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
      expressionContainer={lessonExpressions.episode3Expression1}
      showPriorities={false}
      showControls={false}
      variableSize={'lg'}
      showExplanations={false}
      hideStar
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
      expressionContainer={lessonExpressions.episode4Expression1}
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
      expressionContainer={lessonExpressions.episode4Expression1}
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
      expressionContainer={lessonExpressions.episode4Expression1}
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
      expressionContainer={lessonExpressions.episode4Expression1}
      showPriorities={false}
      showExplanations={false}
      showControls
      hideStar
      variableSize={'lg'}
      initializeInstructions={[
        {
          type: 'stepForwardUntilPreviouslyChangedExpressionState',
          state: 'callArgJustHighlighted'
        }
      ]}
      expressionContainerManagerSkipOptions={{
        betaReducePreviewBefore: true
      }}
    />
  ),
  () => (
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
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
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
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
  )
]

export const episode5 = [
  () => (
    <ExpressionRunner
      containerSize="xs"
      expressionContainer={lessonExpressions.episode4Expression2}
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
      expressionContainer={lessonExpressions.episode5Expression1}
      showPriorities
      showControls={false}
      variableSize={'lg'}
      disableReadyToHighlightColoring
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      showPriorities
      variableSize={'lg'}
      maxStepsAllowed={1}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression1}
      showPriorities
      variableSize={'lg'}
      lastAllowedExpressionState="callArgJustHighlighted"
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
      showPriorities
      variableSize={'lg'}
      maxStepsAllowed={1}
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
      expressionContainer={lessonExpressions.episode5Expression1}
      showPriorities
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
      showPriorities
      variableSize={'lg'}
    />
  ),
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode5Expression2}
      showPriorities
      showControls={false}
      variableSize={'lg'}
    />
  )
]

export const episode6 = [
  () => (
    <ExpressionRunner
      expressionContainer={lessonExpressions.episode6Expression1}
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
  )
]

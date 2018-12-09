import produce, { DraftObject } from 'immer'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import { isContainerWithState } from 'src/lib/yc/expressionContainerGuards'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import hasUnboundVariables from 'src/lib/yc/hasUnboundVariables'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/yc/resetExpressionContainer'
import {
  removeCrossed,
  stepToActive,
  stepToAlphaConvertDone,
  stepToBetaReducePreviewAfter,
  stepToBetaReducePreviewBefore,
  stepToBetaReducePreviewCrossed,
  stepToNeedsAlphaConvert,
  stepToShowCallArg,
  stepToShowFuncArg,
  stepToShowFuncBound,
  stepToShowFuncUnbound
} from 'src/lib/yc/steps'
import { ContainerWithState } from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpression,
  CallStates,
  ExecutableCall,
  FunctionExpression,
  StepChild
} from 'src/types/yc/ExpressionTypes'

const stepExpressionContainerReset = (
  e: ContainerWithState<'needsReset'>
): ContainerWithState<'done'> | ContainerWithState<'ready'> => {
  const newContainer = prioritizeExpressionContainer(
    resetExpressionContainer(e)
  )
  const nextCallExpressionAndParent = findNextCallExpressionAndParent(
    newContainer.expression
  )
  if (nextCallExpressionAndParent.expression) {
    return newContainer
  } else {
    return {
      ...newContainer,
      containerState: 'done'
    }
  }
}

const step = (
  e: DraftObject<ExecutableCall>,
  showAllShowSteps?: boolean,
  matchExists?: boolean
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  previouslyChangedExpressionState: CallStates
} => {
  const alphaConvert = (): {
    nextExpression: ExecutableCall | StepChild<'default'>
    matchExists?: boolean
    previouslyChangedExpressionState: CallStates
  } => {
    const conflicts = conflictingVariableNames(e)
    if (conflicts.length > 0) {
      return {
        nextExpression: stepToNeedsAlphaConvert(e, conflicts),
        previouslyChangedExpressionState: 'needsAlphaConvert'
      }
    } else {
      return {
        ...stepToBetaReducePreviewBefore(e),
        previouslyChangedExpressionState: 'betaReducePreviewBefore'
      }
    }
  }

  switch (e.state) {
    case 'default': {
      return {
        nextExpression: stepToActive(e),
        previouslyChangedExpressionState: 'active'
      }
    }
    case 'active': {
      if (showAllShowSteps) {
        return {
          nextExpression: stepToShowCallArg(e),
          previouslyChangedExpressionState: 'showCallArg'
        }
      } else {
        if (hasUnboundVariables(e.func.body)) {
          return {
            nextExpression: stepToShowFuncUnbound(e, false),
            previouslyChangedExpressionState: 'showFuncUnbound'
          }
        } else {
          return {
            nextExpression: stepToShowFuncBound(e, false),
            previouslyChangedExpressionState: 'showFuncBound'
          }
        }
      }
    }
    case 'showCallArg': {
      return {
        nextExpression: stepToShowFuncArg(e),
        previouslyChangedExpressionState: 'showFuncArg'
      }
    }
    case 'showFuncArg': {
      return {
        nextExpression: stepToShowFuncBound(e, true),
        previouslyChangedExpressionState: 'showFuncBound'
      }
    }
    case 'showFuncBound': {
      if (hasUnboundVariables(e.func.body)) {
        return {
          nextExpression: stepToShowFuncUnbound(e, true),
          previouslyChangedExpressionState: 'showFuncUnbound'
        }
      } else {
        return alphaConvert()
      }
    }
    case 'showFuncUnbound': {
      return alphaConvert()
    }
    case 'needsAlphaConvert': {
      return {
        nextExpression: stepToAlphaConvertDone(e),
        previouslyChangedExpressionState: 'alphaConvertDone'
      }
    }
    case 'alphaConvertDone': {
      return {
        ...stepToBetaReducePreviewBefore(e),
        previouslyChangedExpressionState: 'betaReducePreviewBefore'
      }
    }
    case 'betaReducePreviewBefore': {
      if (matchExists) {
        return {
          nextExpression: stepToBetaReducePreviewAfter(e),
          previouslyChangedExpressionState: 'betaReducePreviewAfter'
        }
      } else {
        return {
          nextExpression: stepToBetaReducePreviewCrossed(e),
          previouslyChangedExpressionState: 'betaReducePreviewCrossed'
        }
      }
    }
    case 'betaReducePreviewAfter': {
      return {
        nextExpression: stepToBetaReducePreviewCrossed(e),
        previouslyChangedExpressionState: 'betaReducePreviewCrossed'
      }
    }
    case 'betaReducePreviewCrossed': {
      return {
        nextExpression: removeCrossed(e),
        previouslyChangedExpressionState: 'default'
      }
    }
    default: {
      throw new Error()
    }
  }
}

const recipe = (skipShowSteps?: boolean) => (
  draftContainer: DraftObject<
    | ContainerWithState<'ready'>
    | ContainerWithState<'stepped'>
    | ContainerWithState<'needsReset'>
  >
): ContainerWithState<'needsReset'> | ContainerWithState<'stepped'> | void => {
  const {
    expression,
    callParent,
    funcParent,
    callParentKey
  } = findNextCallExpressionAndParent<
    DraftObject<ExecutableCall>,
    DraftObject<CallExpression>,
    DraftObject<FunctionExpression>
  >(draftContainer.expression)
  if (!expression) {
    // Special case - already done to begin with
    draftContainer.containerState = 'needsReset'
    return
  }
  const {
    nextExpression,
    matchExists,
    previouslyChangedExpressionState
  } = step(expression, skipShowSteps, draftContainer.matchExists)

  if (!callParent && !callParentKey && !funcParent) {
    const newContainer = {
      expression: nextExpression,
      previouslyChangedExpressionState,
      matchExists
    }
    return previouslyChangedExpressionState === 'default'
      ? { ...newContainer, containerState: 'needsReset' }
      : { ...newContainer, containerState: 'stepped' }
  }

  if (callParent && callParentKey) {
    callParent[callParentKey] = nextExpression
  } else if (funcParent) {
    funcParent.body = nextExpression
  } else {
    throw new Error()
  }

  if (previouslyChangedExpressionState === 'default') {
    draftContainer.containerState = 'needsReset'
  } else {
    draftContainer.containerState = 'stepped'
  }

  draftContainer.matchExists = matchExists
  draftContainer.previouslyChangedExpressionState = previouslyChangedExpressionState
}

export default function stepExpressionContainer(
  e: ContainerWithState<'ready'> | ContainerWithState<'stepped'>,
  showAllShowSteps?: boolean
):
  | ContainerWithState<'done'>
  | ContainerWithState<'stepped'>
  | ContainerWithState<'ready'> {
  const result = produce<
    | ContainerWithState<'needsReset'>
    | ContainerWithState<'stepped'>
    | ContainerWithState<'ready'>
  >(e, recipe(showAllShowSteps))

  if (isContainerWithState(result, 'needsReset')) {
    return stepExpressionContainerReset(result)
  } else {
    return result
  }
}

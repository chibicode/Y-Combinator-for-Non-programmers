import produce, { DraftObject } from 'immer'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import { isNeedsResetExpressionContainer } from 'src/lib/yc/expressionContainerGuards'
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
import {
  DoneExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpression,
  CallStates,
  ExecutableCall,
  FunctionExpression,
  StepChild
} from 'src/types/yc/ExpressionTypes'

const stepExpressionContainerReset = (
  e: NeedsResetExpressionContainer
): DoneExpressionContainer | PrioritizedExpressionContainer => {
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

type DE = DraftObject<ExecutableCall>

const step = (
  e: DE,
  matchExists?: boolean
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  previouslyChangedExpressionState: CallStates
} => {
  switch (e.state) {
    case 'default': {
      return {
        nextExpression: stepToActive(e),
        previouslyChangedExpressionState: 'active'
      }
    }
    case 'active': {
      return {
        nextExpression: stepToShowFuncBound(e),
        previouslyChangedExpressionState: 'showFuncBound'
      }
    }
    case 'showFuncBound': {
      return {
        nextExpression: stepToShowFuncArg(e),
        previouslyChangedExpressionState: 'showFuncArg'
      }
    }
    case 'showFuncArg': {
      if (hasUnboundVariables(e.func.body)) {
        return {
          nextExpression: stepToShowFuncUnbound(e),
          previouslyChangedExpressionState: 'showFuncUnbound'
        }
      } else {
        return {
          nextExpression: stepToShowCallArg(e),
          previouslyChangedExpressionState: 'showCallArg'
        }
      }
    }
    case 'showFuncUnbound': {
      return {
        nextExpression: stepToShowCallArg(e),
        previouslyChangedExpressionState: 'showCallArg'
      }
    }
    case 'showCallArg': {
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

const recipe = (
  draftContainer: DraftObject<
    NeedsResetExpressionContainer | PrioritizedExpressionContainer
  >
): NeedsResetExpressionContainer | PrioritizedExpressionContainer | void => {
  const {
    expression,
    callParent,
    funcParent,
    callParentKey
  } = findNextCallExpressionAndParent<
    DE,
    DraftObject<CallExpression>,
    DraftObject<FunctionExpression>
  >(draftContainer.expression)
  if (!expression) {
    throw new Error()
  }
  const {
    nextExpression,
    matchExists,
    previouslyChangedExpressionState
  } = step(expression, draftContainer.matchExists)

  if (!callParent || !callParentKey) {
    const newContainer = {
      expression: nextExpression,
      previouslyChangedExpressionState,
      matchExists
    }
    return previouslyChangedExpressionState === 'default'
      ? { ...newContainer, containerState: 'needsReset' }
      : { ...newContainer, containerState: 'prioritized' }
  }

  if (callParent && callParentKey) {
    callParent[callParentKey] = nextExpression
  } else if (funcParent) {
    funcParent.body = nextExpression
  }

  if (previouslyChangedExpressionState === 'default') {
    draftContainer.containerState = 'needsReset'
  }

  draftContainer.matchExists = matchExists
  draftContainer.previouslyChangedExpressionState = previouslyChangedExpressionState
}

export default function stepExpressionContainer(
  e: PrioritizedExpressionContainer
): DoneExpressionContainer | PrioritizedExpressionContainer {
  const result = produce<
    NeedsResetExpressionContainer | PrioritizedExpressionContainer
  >(e, recipe)

  if (isNeedsResetExpressionContainer(result)) {
    return stepExpressionContainerReset(result)
  } else {
    return result
  }
}

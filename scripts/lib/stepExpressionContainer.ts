import getConflictsToUnused from 'scripts/lib/getConflictsToUnused'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import findNextExecutableAndParent from 'scripts/lib/findNextExecutableAndParent'
import hasUnboundVariables from 'scripts/lib/hasUnboundVariables'
import prioritizeExpressionContainer from 'scripts/lib/prioritizeExpressionContainer'
import resetExpressionContainer from 'scripts/lib/resetExpressionContainer'
import replaceCallParentKey from 'scripts/lib/replaceCallParentKey'
import replaceConditionalParentKey from 'scripts/lib/replaceConditionalParentKey'
import replaceBinaryParentKey from 'scripts/lib/replaceBinaryParentKey'
import {
  isCall,
  isConditional,
  isExecutableCallRegular
} from 'src/lib/expressionTypeGuards'
import replaceFuncParentKey from 'scripts/lib/replaceFuncParentKey'
import {
  removeCrossed,
  stepToActive,
  stepToBetaReducePreviewAfter,
  stepToBetaReducePreviewBefore,
  stepToBetaReducePreviewCrossed,
  stepToNeedsAlphaConvert,
  stepToShowCallArg,
  stepToShowFuncArg,
  stepToShowFuncBound,
  stepToShowFuncUnbound,
  stepToCaseActive,
  stepToConditionActive,
  stepToCaseProcessed,
  stepToShorthandComputed,
  stepToAlphaConvertCallArg,
  stepToBinaryProcessed,
  stepToBinaryActive
} from 'scripts/lib/steps'
import {
  ContainerWithState,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  ExecutableCallRegular,
  StepChild,
  ExecutableConditionalStatesDistributed,
  ExecutableBinaryStatesDistributed,
  ExecutableCall,
  ExecutableCallShorthand
} from 'src/types/ExpressionTypes'
import prioritizeExpression from 'scripts/lib/prioritizeExpression'

interface StepOptions {
  showAllShowSteps?: boolean
  skipAlphaConvert?: boolean
  skipActive?: boolean
}

const stepExpressionContainerReset = (
  e: ContainerWithState<'needsReset'>
): ContainerWithState<'done'> | ContainerWithState<'ready'> => {
  const newContainer = prioritizeExpressionContainer(
    resetExpressionContainer(e)
  )
  const nextCallExpressionAndParent = findNextExecutableAndParent(
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

const stepConditional = (
  e: ExecutableConditionalStatesDistributed
): {
  nextExpression: ExecutableConditionalStatesDistributed | StepChild<'default'>
  matchExists?: boolean
  previouslyChangedExpressionState: ExpressionContainer['previouslyChangedExpressionState']
} => {
  switch (e.state) {
    case 'default': {
      return {
        nextExpression: stepToConditionActive(e),
        previouslyChangedExpressionState: 'conditionActive'
      }
    }
    case 'conditionActive': {
      const nextExpression = stepToCaseActive(e)
      return {
        nextExpression,
        previouslyChangedExpressionState: nextExpression.state
      }
    }
    case 'trueCaseActive': {
      return {
        nextExpression: stepToCaseProcessed(e, true),
        previouslyChangedExpressionState: 'default'
      }
    }
    case 'falseCaseActive': {
      return {
        nextExpression: stepToCaseProcessed(e, false),
        previouslyChangedExpressionState: 'default'
      }
    }
  }
  throw new Error()
}

const stepBinary = (
  e: ExecutableBinaryStatesDistributed
): {
  nextExpression: ExecutableBinaryStatesDistributed | StepChild<'default'>
  matchExists?: boolean
  previouslyChangedExpressionState: ExpressionContainer['previouslyChangedExpressionState']
} => {
  switch (e.state) {
    case 'default': {
      return {
        nextExpression: stepToBinaryActive(e),
        previouslyChangedExpressionState: 'active'
      }
    }
    case 'active': {
      return {
        nextExpression: stepToBinaryProcessed(e),
        previouslyChangedExpressionState: 'default'
      }
    }
  }
  throw new Error()
}

const stepShorthand = (
  e: ExecutableCallShorthand
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  previouslyChangedExpressionState: ExpressionContainer['previouslyChangedExpressionState']
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
        nextExpression: stepToShorthandComputed(e),
        previouslyChangedExpressionState: 'default'
      }
    }
    default: {
      throw new Error()
    }
  }
}

const stepRegular = (
  e: ExecutableCallRegular,
  { showAllShowSteps, skipAlphaConvert, skipActive }: StepOptions,
  matchExists?: boolean
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  previouslyChangedExpressionState: ExpressionContainer['previouslyChangedExpressionState']
} => {
  const toNeedsAlphaConvertOrBetaReducePreviewBefore = (): {
    nextExpression: ExecutableCall | StepChild<'default'>
    matchExists?: boolean
    previouslyChangedExpressionState: ExpressionContainer['previouslyChangedExpressionState']
  } => {
    const conflicts = skipAlphaConvert ? {} : getConflictsToUnused(e)
    if (Object.keys(conflicts).length > 0) {
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
      if (skipActive) {
        if (hasUnboundVariables(e.func.body)) {
          return {
            nextExpression: stepToShowFuncUnbound(stepToActive(e), false),
            previouslyChangedExpressionState: 'showFuncUnbound'
          }
        } else {
          return {
            nextExpression: stepToShowFuncBound(stepToActive(e), false),
            previouslyChangedExpressionState: 'showFuncBound'
          }
        }
      } else {
        return {
          nextExpression: stepToActive(e),
          previouslyChangedExpressionState: 'active'
        }
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
        return toNeedsAlphaConvertOrBetaReducePreviewBefore()
      }
    }
    case 'showFuncUnbound': {
      return toNeedsAlphaConvertOrBetaReducePreviewBefore()
    }
    case 'needsAlphaConvert': {
      return {
        nextExpression: stepToAlphaConvertCallArg(e),
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

const runStep = (
  e: ContainerWithState<'ready'> | ContainerWithState<'stepped'>,
  stepOptions: StepOptions
):
  | ContainerWithState<'needsReset'>
  | ContainerWithState<'stepped'>
  | ContainerWithState<'ready'>
  | ContainerWithState<'done'> => {
  const {
    expression,
    callParent,
    funcParent,
    conditionalParent,
    callParentKey,
    binaryParentKey,
    binaryParent
  } = findNextExecutableAndParent(e.expression)
  if (!expression) {
    // Special case - already done to begin with
    return {
      ...e,
      containerState: 'needsReset'
    }
  }
  const activePriority = expression.priority

  const {
    nextExpression,
    matchExists,
    previouslyChangedExpressionState
  } = isCall(expression)
    ? isExecutableCallRegular(expression)
      ? stepRegular(expression, stepOptions, e.matchExists)
      : stepShorthand(expression)
    : isConditional(expression)
    ? stepConditional(expression)
    : stepBinary(expression)

  if (
    !callParent &&
    !callParentKey &&
    !funcParent &&
    !conditionalParent &&
    !binaryParent
  ) {
    const newContainer = {
      expression:
        previouslyChangedExpressionState === 'betaReducePreviewAfter'
          ? prioritizeExpression(nextExpression)
          : nextExpression,
      previouslyChangedExpressionState,
      matchExists,
      activePriority
    }
    return previouslyChangedExpressionState === 'default'
      ? {
          ...newContainer,
          containerState: 'needsReset'
        }
      : {
          ...newContainer,
          containerState: 'stepped'
        }
  }

  let newExpression: typeof e.expression

  if (callParent && callParentKey) {
    newExpression = replaceCallParentKey(
      e.expression,
      callParent,
      callParentKey,
      nextExpression
    )
  } else if (funcParent) {
    newExpression = replaceFuncParentKey(
      e.expression,
      funcParent,
      nextExpression
    )
  } else if (conditionalParent) {
    newExpression = replaceConditionalParentKey(
      e.expression,
      conditionalParent,
      nextExpression
    )
  } else if (binaryParent && binaryParentKey) {
    newExpression = replaceBinaryParentKey(
      e.expression,
      binaryParentKey,
      binaryParent,
      nextExpression
    )
  } else {
    throw new Error()
  }

  if (previouslyChangedExpressionState === 'default') {
    return {
      ...e,
      expression: newExpression,
      containerState: 'needsReset',
      matchExists,
      activePriority,
      previouslyChangedExpressionState
    }
  } else {
    return {
      ...e,
      expression:
        previouslyChangedExpressionState === 'betaReducePreviewAfter'
          ? prioritizeExpression(newExpression)
          : newExpression,
      containerState: 'stepped',
      matchExists,
      activePriority,
      previouslyChangedExpressionState
    }
  }
}

export default function stepExpressionContainer(
  e: ContainerWithState<'ready'> | ContainerWithState<'stepped'>,
  stepOptions: StepOptions
):
  | ContainerWithState<'done'>
  | ContainerWithState<'stepped'>
  | ContainerWithState<'ready'> {
  const result = runStep(e, stepOptions)

  if (isContainerWithState(result, 'needsReset')) {
    return stepExpressionContainerReset(result)
  } else {
    return result
  }
}

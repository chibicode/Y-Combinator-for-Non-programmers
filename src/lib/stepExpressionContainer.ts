import getConflictsToUnused from 'src/lib/getConflictsToUnused'
import { isContainerWithState } from 'src/lib/expressionContainerGuards'
import { StepOptions } from 'src/lib/ExpressionContainerManager'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import hasUnboundVariables from 'src/lib/hasUnboundVariables'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/resetExpressionContainer'
import replaceCallParentKey from 'src/lib/replaceCallParentKey'
import replaceConditionalParentKey from 'src/lib/replaceConditionalParentKey'
import {
  isCall,
  isExecutableCallRegular,
  isVariableShorthandUnaryNumber,
  isExecutableCallMagical
} from 'src/lib/expressionTypeGuards'
import processUnaryNumber from 'src/lib/processUnaryNumber'
import replaceFuncParentKey from 'src/lib/replaceFuncParentKey'
import {
  removeCrossed,
  stepToActive,
  stepToShorthandBinaryResult,
  stepToAlphaConvertDone,
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
  stepToCaseOnly
} from 'src/lib/steps'
import {
  ContainerWithState,
  ExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  ExecutableCallRegular,
  ExecutableCallShorthandBinary,
  StepChild,
  ExecutableConditionalStatesDistributed,
  ExecutableCall,
  ExecutableCallMagical
} from 'src/types/ExpressionTypes'
import prioritizeExpression from 'src/lib/prioritizeExpression'

const stepExpressionContainerReset = (
  e: ContainerWithState<'needsReset'>
): ContainerWithState<'done'> | ContainerWithState<'ready'> => {
  const newContainer = prioritizeExpressionContainer(
    resetExpressionContainer(e)
  )
  const nextCallExpressionAndParent = findNextCallExpressionAndParent(
    newContainer.expression
  )
  if (
    nextCallExpressionAndParent.expression ||
    isVariableShorthandUnaryNumber(e.expression)
  ) {
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
  executableUnaryExists?: boolean
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
        nextExpression: stepToCaseOnly(e, true),
        previouslyChangedExpressionState: 'trueCaseOnly'
      }
    }
    case 'falseCaseActive': {
      return {
        nextExpression: stepToCaseOnly(e, false),
        previouslyChangedExpressionState: 'falseCaseOnly'
      }
    }
    case 'trueCaseOnly': {
      return {
        nextExpression: stepToCaseProcessed(e, true),
        previouslyChangedExpressionState: 'default'
      }
    }
    case 'falseCaseOnly': {
      return {
        nextExpression: stepToCaseProcessed(e, false),
        previouslyChangedExpressionState: 'default'
      }
    }
  }
  throw new Error()
}

const stepMagical = (
  e: ExecutableCallMagical
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  executableUnaryExists?: boolean
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
        nextExpression: e,
        previouslyChangedExpressionState: 'default'
      }
    }
    default: {
      throw new Error()
    }
  }
}

const stepShorthand = (
  e: ExecutableCallShorthandBinary
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  executableUnaryExists?: boolean
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
        nextExpression: stepToShorthandBinaryResult(e),
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
  { showAllShowSteps, skipAlphaConvert }: StepOptions,
  matchExists?: boolean
): {
  nextExpression: ExecutableCall | StepChild<'default'>
  matchExists?: boolean
  executableUnaryExists?: boolean
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
        return toNeedsAlphaConvertOrBetaReducePreviewBefore()
      }
    }
    case 'showFuncUnbound': {
      return toNeedsAlphaConvertOrBetaReducePreviewBefore()
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
          ...stepToBetaReducePreviewAfter(e),
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
      // if (executableUnaryExists) {
      //   return {
      //     nextExpression: stepToBetaReduceUnaryExecuted(e),
      //     previouslyChangedExpressionState: 'betaReducePreviewUnaryExecuted'
      //   }
      // } else {
      return {
        nextExpression: stepToBetaReducePreviewCrossed(e),
        previouslyChangedExpressionState: 'betaReducePreviewCrossed'
      }
      // }
    }
    case 'betaReducePreviewUnaryExecuted': {
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
  if (isVariableShorthandUnaryNumber(e.expression)) {
    return {
      ...e,
      expression: processUnaryNumber(e.expression),
      containerState: 'done'
    }
  }

  const {
    expression,
    callParent,
    funcParent,
    conditionalParent,
    callParentKey
  } = findNextCallExpressionAndParent(e.expression)
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
    executableUnaryExists,
    previouslyChangedExpressionState
  } = isCall(expression)
    ? isExecutableCallRegular(expression)
      ? stepRegular(expression, stepOptions, e.matchExists)
      : isExecutableCallMagical(expression)
      ? stepMagical(expression)
      : stepShorthand(expression)
    : stepConditional(expression)

  if (!callParent && !callParentKey && !funcParent && !conditionalParent) {
    const newContainer = {
      expression:
        previouslyChangedExpressionState === 'betaReducePreviewAfter'
          ? prioritizeExpression(nextExpression)
          : nextExpression,
      previouslyChangedExpressionState,
      matchExists,
      executableUnaryExists,
      activePriority
    }
    return previouslyChangedExpressionState === 'default'
      ? { ...newContainer, containerState: 'needsReset' }
      : { ...newContainer, containerState: 'stepped' }
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
      executableUnaryExists,
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
      executableUnaryExists,
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

import produce, { Draft, DraftObject } from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import alphaConvert from 'src/lib/yc/alphaConvert'
import betaReduce from 'src/lib/yc/betaReduce'
import betaReducePreviewBefore from 'src/lib/yc/betaReducePreviewBefore'
import clearJustAlphaConvertedAndBetaReducePreview from 'src/lib/yc/clearJustAlphaConvertedAndBetaReducePreview'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import { isNeedsResetExpressionContainer } from 'src/lib/yc/expressionContainerGuards'
import { isCallExpressionWithState } from 'src/lib/yc/expressionTypeGuards'
import findNextCallExpressionAndParent, {
  hasCallParent,
  hasFunctionParent,
  isNotFound
} from 'src/lib/yc/findNextCallExpressionAndParent'
import hasUnboundVariables from 'src/lib/yc/hasUnboundVariables'
import prioritizeExpression from 'src/lib/yc/prioritizeExpression'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import resetExpression from 'src/lib/yc/resetExpression'
import resetExpressionContainer from 'src/lib/yc/resetExpressionContainer'
import {
  DoneExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  CallExpressionStates,
  ImmediatelyExecutableCallExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression
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
  if (isNotFound(nextCallExpressionAndParent)) {
    return {
      ...newContainer,
      containerState: 'done'
    }
  } else {
    return newContainer
  }
}

function stepCallExpression<A extends CallExpressionStates>(
  e: DE & { state: A },
  newState: CallExpressionStates
): void {
  ;(e as DE).state = newState
}

function stepToBetaReduceBefore(
  expression: DE & { state: 'showCallArg' | 'alphaConvertDone' },
  draftContainer:
    | DraftObject<NeedsResetExpressionContainer<PrioritizedExpression>>
    | DraftObject<PrioritizedExpressionContainer<PrioritizedExpression>>
) {
  const { result, matchExists } = betaReducePreviewBefore(
    clearJustAlphaConvertedAndBetaReducePreview(expression)
  )
  expression.func = result.func
  expression.arg = result.arg
  ;(expression as DE).state = 'betaReducePreviewBefore'
  draftContainer.matchExists = matchExists
}

type DE = DraftObject<ImmediatelyExecutableCallExpression>

const stepExpressionContainerNext = (
  e: PrioritizedExpressionContainer | NeedsResetExpressionContainer
): NeedsResetExpressionContainer | PrioritizedExpressionContainer => {
  const recipe = (
    draftContainer: Draft<
      NeedsResetExpressionContainer | PrioritizedExpressionContainer
    >
  ): NeedsResetExpressionContainer | PrioritizedExpressionContainer | void => {
    const nextCallExpressionAndParent = findNextCallExpressionAndParent<
      DraftObject<PrioritizedCallExpression>,
      DE,
      DraftObject<PrioritizedFunctionExpression>
    >(draftContainer.backupExpression || draftContainer.expression)
    if (isNotFound(nextCallExpressionAndParent)) {
      throw new Error()
    }
    const expression = nextCallExpressionAndParent.expression

    if (isCallExpressionWithState<DE, 'inactive'>(expression, 'inactive')) {
      stepCallExpression<'inactive'>(expression, 'active')
    } else if (isCallExpressionWithState<DE, 'active'>(expression, 'active')) {
      stepCallExpression<'active'>(expression, 'showFuncBound')
    } else if (
      isCallExpressionWithState<DE, 'showFuncBound'>(
        expression,
        'showFuncBound'
      )
    ) {
      stepCallExpression<'showFuncBound'>(expression, 'showFuncArg')
    } else if (
      isCallExpressionWithState<DE, 'showFuncArg'>(expression, 'showFuncArg')
    ) {
      if (hasUnboundVariables(expression.func.body)) {
        stepCallExpression<'showFuncArg'>(expression, 'showFuncUnbound')
      } else {
        stepCallExpression<'showFuncArg'>(expression, 'showCallArg')
      }
    } else if (
      isCallExpressionWithState<DE, 'showFuncUnbound'>(
        expression,
        'showFuncUnbound'
      )
    ) {
      stepCallExpression<'showFuncUnbound'>(expression, 'showCallArg')
    } else if (
      isCallExpressionWithState<DE, 'showCallArg'>(expression, 'showCallArg')
    ) {
      const conflicts = conflictingVariableNames(expression)
      if (conflicts.length > 0) {
        stepCallExpression<'showCallArg'>(expression, 'needsAlphaConvert')
        draftContainer.conflictingVariableNames = conflicts
      } else {
        stepToBetaReduceBefore(expression, draftContainer)
      }
    } else if (
      isCallExpressionWithState<DE, 'needsAlphaConvert'>(
        expression,
        'needsAlphaConvert'
      )
    ) {
      const alphaConvertResult = alphaConvert(expression)
      expression.func = alphaConvertResult.func
      expression.arg = alphaConvertResult.arg
      stepCallExpression<'needsAlphaConvert'>(expression, 'alphaConvertDone')
      draftContainer.conflictingVariableNames = []
    } else if (
      isCallExpressionWithState<DE, 'alphaConvertDone'>(
        expression,
        'alphaConvertDone'
      )
    ) {
      stepToBetaReduceBefore(expression, draftContainer)
    } else if (
      isCallExpressionWithState<DE, 'betaReducePreviewBefore'>(
        expression,
        'betaReducePreviewBefore'
      )
    ) {
      stepCallExpression<'betaReducePreviewBefore'>(
        expression,
        'betaReducePreviewAfter'
      )
      draftContainer.backupExpression = cloneDeep(draftContainer.expression)
      const betaReducedFunctionBody: PrioritizedExpression = prioritizeExpression(
        resetExpression(
          betaReduce(clearJustAlphaConvertedAndBetaReducePreview(expression))
        )
      )
      expression.func.body = betaReducedFunctionBody
    } else if (
      isCallExpressionWithState<DE, 'betaReducePreviewAfter'>(
        expression,
        'betaReducePreviewAfter'
      )
    ) {
      stepCallExpression<'betaReducePreviewAfter'>(
        expression,
        'betaReducePreviewCrossed'
      )
    } else if (
      isCallExpressionWithState<DE, 'betaReducePreviewCrossed'>(
        expression,
        'betaReducePreviewCrossed'
      )
    ) {
      const betaReduced: PrioritizedExpression = betaReduce(
        clearJustAlphaConvertedAndBetaReducePreview(expression)
      )
      if (isNotFound(nextCallExpressionAndParent)) {
        return {
          ...e,
          expression: betaReduced,
          backupExpression: undefined,
          containerState: 'needsReset',
          previouslyChangedExpressionState: 'inactive',
          matchExists: undefined
        }
      } else if (hasCallParent(nextCallExpressionAndParent)) {
        nextCallExpressionAndParent.parentCallExpression[
          nextCallExpressionAndParent.parentKey
        ] = betaReduced
        draftContainer.containerState = 'needsReset'
      } else if (hasFunctionParent(nextCallExpressionAndParent)) {
        nextCallExpressionAndParent.parentFunctionExpression.body = betaReduced
        draftContainer.containerState = 'needsReset'
      }
      delete draftContainer.matchExists
      if (draftContainer.backupExpression) {
        draftContainer.expression = draftContainer.backupExpression
        delete draftContainer.backupExpression
      }
      stepCallExpression<'betaReducePreviewCrossed'>(expression, 'inactive')
    }

    draftContainer.previouslyChangedExpressionState = expression.state
  }

  return produce<
    NeedsResetExpressionContainer | PrioritizedExpressionContainer
  >(e, recipe)
}

export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer
): DoneExpressionContainer | PrioritizedExpressionContainer
export default function stepExpressionContainer(
  e: PrioritizedExpressionContainer
): NeedsResetExpressionContainer | PrioritizedExpressionContainer
export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer | PrioritizedExpressionContainer
): SteppedExpressionContainer
export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer | PrioritizedExpressionContainer
): SteppedExpressionContainer {
  if (isNeedsResetExpressionContainer(e)) {
    return stepExpressionContainerReset(e)
  } else {
    return stepExpressionContainerNext(e)
  }
}

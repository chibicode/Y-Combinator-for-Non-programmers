import produce, { DraftObject } from 'immer'
import cloneDeep from 'lodash/cloneDeep'
import alphaConvert from 'src/lib/yc/alphaConvert'
import betaReduce from 'src/lib/yc/betaReduce'
import betaReducePreviewBefore from 'src/lib/yc/betaReducePreviewBefore'
import {
  highlightBoundExpressions,
  highlightUnboundExpressions,
  isFunctionExpressionOrContainsFunctionExpression
} from 'src/lib/yc/boundVariableUtils'
import clearJustAlphaConvertedAndBetaReducePreview from 'src/lib/yc/clearJustAlphaConvertedAndBetaReducePreview'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import { isNeedsResetExpressionContainer } from 'src/lib/yc/expressionContainerGuards'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import prioritizeExpression from 'src/lib/yc/prioritizeExpression'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import resetExpression from 'src/lib/yc/resetExpression'
import resetExpressionContainer from 'src/lib/yc/resetExpressionContainer'
import {
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  ImmediatelyExecutableCallExpression,
  PrioritizedCallExpression,
  PrioritizedExpression,
  PrioritizedFunctionExpression
} from 'src/types/yc/ExpressionTypes'

// NOTE: Use union of NeedsResetExpressionContainer | PrioritizedExpressionContainer
// instead of overloading like:
// NeedsResetExpressionContainer -> PrioritizedExpressionContainer
// PrioritizedExpressionContainer -> ...
// Why? If it uses overloading, then you can't pass a variable
// that has the type NeedsResetExpressionContainer | PrioritizedExpressionContainer
// because the return type will be uncertain (because of overloading, return type
// will be different depending on NeedsResetExpressionContainer or PrioritizedExpressionContainer)
// but TypeScript isn't smart enough to combine the potential return types.
// To avoid this the caller can use type guards to "separate" the union type
// before calling, but that adds unnecessary code to the caller.
export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer | PrioritizedExpressionContainer
): SteppedExpressionContainer {
  if (isNeedsResetExpressionContainer(e)) {
    const newContainer = prioritizeExpressionContainer(
      resetExpressionContainer(e)
    )
    const nextCallExpressionAndParent = findNextCallExpressionAndParent(
      newContainer.expression
    )
    if (
      'notFound' in nextCallExpressionAndParent &&
      nextCallExpressionAndParent.notFound
    ) {
      return {
        ...newContainer,
        containerState: 'done'
      }
    } else {
      return newContainer
    }
  } else {
    return produce<SteppedExpressionContainer>(e, draftContainer => {
      const nextCallExpressionAndParent = findNextCallExpressionAndParent<
        DraftObject<PrioritizedCallExpression>,
        DraftObject<ImmediatelyExecutableCallExpression>,
        DraftObject<PrioritizedFunctionExpression>
      >(draftContainer.backupExpression || draftContainer.expression)
      if (
        'notFound' in nextCallExpressionAndParent &&
        nextCallExpressionAndParent.notFound
      ) {
        throw new Error()
      } else {
        const expression = nextCallExpressionAndParent.expression
        switch (expression.state) {
          case 'default': {
            expression.state = 'readyToHighlight'
            draftContainer.previouslyChangedExpressionState = 'readyToHighlight'
            break
          }
          case 'readyToHighlight': {
            if (expression.func.body.state === 'default') {
              if (
                isFunctionExpressionOrContainsFunctionExpression(
                  expression.func.body
                )
              ) {
                highlightBoundExpressions(
                  expression.func.body,
                  'boundJustHighlighted'
                )
                draftContainer.previouslyChangedExpressionState =
                  'funcBodyBoundedJustHighlighted'
                expression.func.body.state = 'partiallyHighlighted'
              } else {
                expression.func.body.state = 'justHighlighted'
                draftContainer.previouslyChangedExpressionState =
                  'funcBodyJustHighlighted'
              }
            } else if (expression.func.arg.state === 'default') {
              if (
                isFunctionExpressionOrContainsFunctionExpression(
                  expression.func.body
                )
              ) {
                highlightBoundExpressions(
                  expression.func.body,
                  'boundHighlighted'
                )
              } else {
                expression.func.body.state = 'highlighted'
              }
              expression.func.arg.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'funcArgJustHighlighted'
            } else if (
              isFunctionExpressionOrContainsFunctionExpression(
                expression.func.body
              ) &&
              expression.func.arg.state === 'justHighlighted'
            ) {
              highlightUnboundExpressions(
                expression.func.body,
                'unboundJustHighlighted'
              )
              expression.func.arg.state = 'highlighted'
              draftContainer.previouslyChangedExpressionState =
                'funcBodyUnboundedJustHighlighted'
            } else if (expression.arg.state === 'default') {
              if (
                isFunctionExpressionOrContainsFunctionExpression(
                  expression.func.body
                )
              ) {
                highlightUnboundExpressions(
                  expression.func.body,
                  'unboundHighlighted'
                )
              }
              expression.func.arg.state = 'highlighted'
              expression.arg.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'callArgJustHighlighted'
            } else {
              expression.arg.state = 'highlighted'
              const conflicts = conflictingVariableNames(expression)
              if (conflicts.length > 0) {
                expression.state = 'needsAlphaConvert'
                draftContainer.conflictingVariableNames = conflicts
                draftContainer.previouslyChangedExpressionState =
                  'needsAlphaConvert'
              } else {
                expression.state = 'readyToBetaReduce'
                draftContainer.previouslyChangedExpressionState =
                  'readyToBetaReduce'
              }
            }
            break
          }
          case 'needsAlphaConvert': {
            const alphaConvertResult = alphaConvert(expression)
            expression.func = alphaConvertResult.func
            expression.arg = alphaConvertResult.arg
            expression.state = 'alphaConvertDone'
            draftContainer.conflictingVariableNames = []
            draftContainer.previouslyChangedExpressionState = 'alphaConvertDone'
            break
          }
          case 'readyToBetaReduce':
          case 'alphaConvertDone': {
            const { result, matchExists } = betaReducePreviewBefore(
              clearJustAlphaConvertedAndBetaReducePreview(expression)
            )
            expression.func = result.func
            expression.arg = result.arg
            expression.state = 'betaReducePreviewBefore'
            draftContainer.matchExists = matchExists
            draftContainer.previouslyChangedExpressionState =
              'betaReducePreviewBefore'
            break
          }
          case 'betaReducePreviewBefore': {
            expression.state = 'betaReducePreviewAfter'
            draftContainer.backupExpression = cloneDeep(
              draftContainer.expression
            )
            const betaReducedFunctionBody: PrioritizedExpression = prioritizeExpression(
              resetExpression(
                betaReduce(
                  clearJustAlphaConvertedAndBetaReducePreview(expression)
                )
              )
            )
            highlightUnboundExpressions(
              betaReducedFunctionBody,
              'unboundJustHighlighted'
            )
            expression.func.body = betaReducedFunctionBody
            draftContainer.previouslyChangedExpressionState =
              'betaReducePreviewAfter'
            break
          }
          case 'betaReducePreviewAfter': {
            expression.state = 'betaReducePreviewCrossed'
            draftContainer.previouslyChangedExpressionState =
              'betaReducePreviewCrossed'
            highlightUnboundExpressions(expression.func.body, 'default')
            break
          }
          case 'betaReducePreviewCrossed': {
            const betaReduced: PrioritizedExpression = {
              ...betaReduce(
                clearJustAlphaConvertedAndBetaReducePreview(expression)
              ),
              state: 'justBetaReduced'
            }
            if (
              'noParent' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.noParent
            ) {
              return {
                ...e,
                expression: betaReduced,
                backupExpression: undefined,
                containerState: 'needsReset',
                previouslyChangedExpressionState: 'justBetaReduced',
                matchExists: undefined
              }
            } else if (
              'parentCallExpression' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.parentCallExpression
            ) {
              nextCallExpressionAndParent.parentCallExpression[
                nextCallExpressionAndParent.parentKey
              ] = betaReduced
              draftContainer.containerState = 'needsReset'
            } else if (
              'parentFunctionExpression' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.parentFunctionExpression
            ) {
              nextCallExpressionAndParent.parentFunctionExpression.body = betaReduced
              draftContainer.containerState = 'needsReset'
            }
            delete draftContainer.matchExists
            draftContainer.previouslyChangedExpressionState = 'justBetaReduced'
            if (draftContainer.backupExpression) {
              draftContainer.expression = draftContainer.backupExpression
              delete draftContainer.backupExpression
            }
            break
          }
        }
      }
    })
  }
}

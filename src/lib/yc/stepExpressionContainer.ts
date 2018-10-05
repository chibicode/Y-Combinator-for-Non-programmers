import produce, { DraftObject } from 'immer'
import alphaConvert from 'src/lib/yc/alphaConvert'
import betaReduce from 'src/lib/yc/betaReduce'
import conflictingVariableNames from 'src/lib/yc/conflictingVariableNames'
import findNextCallExpressionAndParent from 'src/lib/yc/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/yc/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/yc/resetExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/yc/ExecutableExpressionTypes'
import {
  isNeedsResetExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer,
  SteppedExpressionContainer
} from 'src/types/yc/ExpressionContainerTypes'
import {
  PrioritizedCallExpression,
  PrioritizedFunctionExpression
} from 'src/types/yc/PrioritizedExpressionTypes'

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
    return prioritizeExpressionContainer(resetExpressionContainer(e))
  } else {
    return produce<SteppedExpressionContainer>(e, draftContainer => {
      const nextCallExpressionAndParent = findNextCallExpressionAndParent<
        DraftObject<PrioritizedCallExpression>,
        DraftObject<ImmediatelyExecutableCallExpression>,
        DraftObject<PrioritizedFunctionExpression>
      >(draftContainer.expression)
      if (
        'notFound' in nextCallExpressionAndParent &&
        nextCallExpressionAndParent.notFound
      ) {
        return {
          ...e,
          containerState: 'done'
        }
      } else {
        const expression = nextCallExpressionAndParent.expression
        switch (expression.state) {
          case 'default': {
            expression.state = 'readyToHighlight'
            draftContainer.previouslyChangedExpressionState = 'readyToHighlight'
            break
          }
          case 'readyToHighlight': {
            if (expression.arg.state === 'default') {
              expression.arg.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'callArgJustHighlighted'
            } else if (expression.func.arg.state === 'default') {
              expression.arg.state = 'highlighted'
              expression.func.arg.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'funcArgJustHighlighted'
            } else if (expression.func.body.state === 'default') {
              expression.func.arg.state = 'highlighted'
              expression.func.body.state = 'justHighlighted'
              draftContainer.previouslyChangedExpressionState =
                'funcBodyJustHighlighted'
            } else {
              expression.func.body.state = 'highlighted'
              expression.state = 'checkForConflictingVariables'
              draftContainer.previouslyChangedExpressionState =
                'checkForConflictingVariables'
            }
            break
          }
          case 'checkForConflictingVariables': {
            const conflicts = conflictingVariableNames(expression)
            if (conflicts.length > 0) {
              expression.state = 'needsAlphaConvert'
              draftContainer.previouslyChangedExpressionState =
                'needsAlphaConvert'
            } else {
              expression.state = 'readyToBetaReduce'
              draftContainer.previouslyChangedExpressionState =
                'readyToBetaReduce'
            }
            break
          }
          case 'needsAlphaConvert': {
            const alphaConvertResult = alphaConvert(expression)
            expression.func = alphaConvertResult.func
            expression.arg = alphaConvertResult.arg
            expression.state = 'readyToBetaReduce'
            draftContainer.previouslyChangedExpressionState =
              'readyToBetaReduce'
            break
          }
          case 'readyToBetaReduce': {
            const betaReduced = betaReduce(expression)
            if (
              'noParent' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.noParent
            ) {
              return {
                ...e,
                expression: betaReduced,
                containerState: 'needsReset'
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
            break
          }
        }
      }
    })
  }
}

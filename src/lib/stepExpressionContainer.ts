import produce, { DraftObject } from 'immer'
import alphaConvert from 'src/lib/alphaConvert'
import betaReduce from 'src/lib/betaReduce'
import conflictingVariableNames from 'src/lib/conflictingVariableNames'
import findNextCallExpressionAndParent from 'src/lib/findNextCallExpressionAndParent'
import prioritizeExpressionContainer from 'src/lib/prioritizeExpressionContainer'
import resetExpressionContainer from 'src/lib/resetExpressionContainer'
import { ImmediatelyExecutableCallExpression } from 'src/types/ExecutableExpressionTypes'
import {
  DoneExpressionContainer,
  ExpressionContainer,
  isNeedsResetExpressionContainer,
  isPrioritizedExpressionContainer,
  NeedsResetExpressionContainer,
  PrioritizedExpressionContainer
} from 'src/types/ExpressionContainerTypes'
import {
  PrioritizedCallExpression,
  PrioritizedFunctionExpression
} from 'src/types/PrioritizedExpressionTypes'

export default function stepExpressionContainer(
  e: NeedsResetExpressionContainer
): PrioritizedExpressionContainer
export default function stepExpressionContainer(
  e: PrioritizedExpressionContainer
):
  | PrioritizedExpressionContainer<ImmediatelyExecutableCallExpression>
  | PrioritizedExpressionContainer
  | DoneExpressionContainer
export default function stepExpressionContainer(e: ExpressionContainer) {
  if (isNeedsResetExpressionContainer(e)) {
    return prioritizeExpressionContainer(resetExpressionContainer(e))
  } else if (isPrioritizedExpressionContainer(e)) {
    return produce<PrioritizedExpressionContainer>(e, draftContainer => {
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
          done: true
        }
      } else {
        const expression = nextCallExpressionAndParent.expression
        switch (expression.state) {
          case 'default': {
            expression.state = 'readyToHighlight'
            break
          }
          case 'readyToHighlight': {
            if (expression.func.arg.state === 'default') {
              expression.func.arg.state = 'highlighted'
            } else if (expression.arg.state === 'default') {
              expression.arg.state = 'highlighted'
            } else if (expression.func.body.state === 'default') {
              expression.func.body.state = 'highlighted'
            } else {
              expression.state = 'checkForConflictingVariables'
            }
            break
          }
          case 'checkForConflictingVariables': {
            const conflicts = conflictingVariableNames(expression)
            if (conflicts.length > 0) {
              expression.state = 'needsAlphaConvert'
            } else {
              expression.state = 'readyToBetaReduce'
            }
            break
          }
          case 'needsAlphaConvert': {
            const alphaConvertResult = alphaConvert(expression)
            expression.func = alphaConvertResult.func
            expression.arg = alphaConvertResult.arg
            expression.state = 'readyToBetaReduce'
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
                needsReset: true
              }
            } else if (
              'parentCallExpression' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.parentCallExpression
            ) {
              nextCallExpressionAndParent.parentCallExpression[
                nextCallExpressionAndParent.parentKey
              ] = betaReduced
            } else if (
              'parentFunctionExpression' in nextCallExpressionAndParent &&
              nextCallExpressionAndParent.parentFunctionExpression
            ) {
              nextCallExpressionAndParent.parentFunctionExpression.body = betaReduced
            }
            break
          }
        }
      }
    })
  } else {
    throw new Error('Expression must be prioritized')
  }
}

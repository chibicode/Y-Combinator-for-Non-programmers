import produce from 'immer'
import {
  betaReduce,
  conflictingVariableNames,
  findNextCallExpressionAndParent,
  mutableAlphaConvert,
  prioritizeExpression,
  resetExpression
} from 'src/lib/expressionUtils'
import {
  DecoratedCallExecutableExpression,
  DecoratedCallPrioritizedExpression,
  DecoratedCallUnexecutableExpression,
  DecoratedCallUnprioritizedExpression,
  DecoratedExpression,
  DecoratedNeedsResetExpression
} from 'src/types/DecoratedExpressionTypes'

export default function transitionExpressionState(
  expression:
    | DecoratedNeedsResetExpression
    | DecoratedCallUnprioritizedExpression
): DecoratedCallPrioritizedExpression
export default function transitionExpressionState(
  expression: DecoratedCallPrioritizedExpression
):
  | DecoratedCallExecutableExpression
  | DecoratedCallUnexecutableExpression
  | DecoratedNeedsResetExpression
export default function transitionExpressionState(expression: any): any {
  if (expression.state === 'needsReset') {
    return resetExpression(expression)
  } else if (!expression.priority) {
    return prioritizeExpression(expression)
  } else {
    return produce<DecoratedExpression>(expression, draftExpression => {
      const nextCallExpressionAndParent = findNextCallExpressionAndParent(
        draftExpression
      )
      if (nextCallExpressionAndParent) {
        const {
          expression: nextCallExpression,
          parent,
          parentKey,
        } = nextCallExpressionAndParent
        switch (nextCallExpression.state) {
          case 'default': {
            nextCallExpression.state = 'readyToHighlight'
            return
          }
          case 'readyToHighlight': {
            if (nextCallExpression.value.func.value.arg.state === 'default') {
              nextCallExpression.value.func.value.arg.state = 'highlighted'
            } else if (nextCallExpression.value.arg.state === 'default') {
              nextCallExpression.value.arg.state = 'highlighted'
            } else if (
              nextCallExpression.value.func.value.body.state === 'default'
            ) {
              nextCallExpression.value.func.value.body.state = 'highlighted'
            } else {
              nextCallExpression.state = 'checkForConflictingVariables'
            }
            return
          }
          case 'checkForConflictingVariables': {
            const conflicts = conflictingVariableNames(nextCallExpression)
            if (conflicts.length > 0) {
              nextCallExpression.state = 'needsAlphaConvert'
            } else {
              nextCallExpression.state = 'readyToBetaReduce'
            }
            return
          }
          case 'needsAlphaConvert': {
            mutableAlphaConvert(nextCallExpression)
            nextCallExpression.state = 'readyToBetaReduce'
            return
          }
          case 'readyToBetaReduce': {
            const betaReduced = betaReduce(nextCallExpression)
            if (parent) {
              parent.value[parentKey] = betaReduced
              draftExpression.state = 'needsReset'
              return
            } else {
              // When returning a new value,
              // you must not modify any of the original value.
              // See: https://github.com/mweststrate/immer/tree/979d7a34dd0331b5ba44983bf55cc545ad9ea2f4#returning-data-from-producers
              betaReduced.state = 'needsReset'
              return betaReduced
            }
          }
        }
      } else {
        draftExpression.state = 'done'
      }
    })
  }
}

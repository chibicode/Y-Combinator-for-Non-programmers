import produce from 'immer'
import { findNextCallExpression } from 'src/lib/expressionUtils'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'

const transitionExpressionState = (expression: DecoratedExpression) => {
  return produce<DecoratedExpression>(expression, draftExpression => {
    const nextCallExpression = findNextCallExpression(draftExpression)
    if (nextCallExpression) {
      switch (nextCallExpression.state) {
        case 'default': {
          nextCallExpression.state = 'callActivated'
          nextCallExpression.value.arg.state = 'highlighted'
          nextCallExpression.value.func.value.arg.state = 'highlighted'
        }
      }
    }
  })
}

export default transitionExpressionState

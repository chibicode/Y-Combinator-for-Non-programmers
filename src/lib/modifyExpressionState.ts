import produce from 'immer'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'

const modifyExpressionState = (expression: DecoratedExpression) => {
  if (expression.type === 'call') {
    if (expression.state === 'default') {
      return produce<DecoratedExpression>(expression, draftExpression => {
        draftExpression.state = 'callActivated'
      })
    }
  } else {
    return expression
  }
}

export default modifyExpressionState

import produce from 'immer'
import DecoratedExpressionState from 'src/constants/DecoratedExpressionState'
import { DecoratedExpression } from 'src/types/DecoratedExpressionTypes'

const modifyExpressionState = (expression: DecoratedExpression) => {
  if (expression.type === 'call') {
    if (expression.state === DecoratedExpressionState.DEFAULT) {
      return produce<DecoratedExpression>(expression, draftExpression => {
        draftExpression.state = DecoratedExpressionState.CALL_ACTIVATED
      })
    }
  } else {
    return expression
  }
}

export default modifyExpressionState

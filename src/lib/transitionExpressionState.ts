import produce from 'immer'
import {
  findNextCallExpression,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import { DecoratedCallExpression } from 'src/types/DecoratedExpressionTypes'

const transitionExpressionState = (expression: DecoratedCallExpression) => {
  if (!expression.priority) {
    return prioritizeExpression(expression)
  } else {
    return produce<DecoratedCallExpression>(expression, draftExpression => {
      const nextCallExpression = findNextCallExpression(draftExpression)
      if (nextCallExpression) {
        switch (nextCallExpression.state) {
          case 'default': {
            nextCallExpression.state = 'callActivated'
          }
        }
      } else {
        draftExpression.state = 'done'
      }
    })
  }
}

export default transitionExpressionState

import produce from 'immer'
import {
  findNextCallExpression,
  prioritizeExpression
} from 'src/lib/expressionUtils'
import {
  DecoratedCallExecutableExpression,
  DecoratedCallPrioritizedExpression,
  DecoratedCallUnexecutableExpression,
  DecoratedCallUnprioritizedExpression
} from 'src/types/DecoratedExpressionTypes'

export default function transitionExpressionState(
  expression: DecoratedCallUnprioritizedExpression
): DecoratedCallPrioritizedExpression
export default function transitionExpressionState(
  expression: DecoratedCallPrioritizedExpression
): DecoratedCallExecutableExpression | DecoratedCallUnexecutableExpression
export default function transitionExpressionState(expression: any): any {
  if (!expression.priority) {
    return prioritizeExpression(expression)
  } else {
    return produce<DecoratedCallPrioritizedExpression>(
      expression,
      draftExpression => {
        const nextCallExpression = findNextCallExpression(draftExpression)
        if (nextCallExpression) {
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
                nextCallExpression.state = 'readyToAlphaConvert'
              }
              return
            }
            case 'readyToAlphaConvert': {
              nextCallExpression.state = 'default'
              return
            }
          }
        } else {
          draftExpression.state = 'done'
        }
      }
    )
  }
}
